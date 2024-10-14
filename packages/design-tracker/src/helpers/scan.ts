import path from 'node:path'

import {traverse, types as t, Node, NodePath} from '@babel/core'
import {parse} from '@babel/parser'
import getObjectPath from 'dlv'
import {dset} from 'dset'

import {IConfig} from '../utils/loadConfig'

function getComponentNameFromAST(nameObj: Node): string {
    switch (nameObj.type) {
        case 'JSXIdentifier': {
            return nameObj.name
        }

        case 'JSXMemberExpression': {
            return `${getComponentNameFromAST(nameObj.object)}.${getComponentNameFromAST(nameObj.property)}`
        }

        /* c8 ignore next 3 */
        default: {
            throw new Error(`Unknown name type: ${nameObj.type}`)
        }
    }
}

function isPrimitiveLiteral(
    node: t.Node,
): node is t.BooleanLiteral | t.DecimalLiteral | t.NumericLiteral | t.StringLiteral {
    return t.isLiteral(node) && !(t.isNullLiteral(node) || t.isTemplateLiteral(node) || t.isRegExpLiteral(node))
}
function getPropValue(node?: t.Node | null) {
    if (!node || t.isNullLiteral(node) || t.isTemplateLiteral(node) || t.isRegExpLiteral(node)) {
        return null
    }

    if (isPrimitiveLiteral(node)) {
        return node.value
    }

    if (t.isJSXExpressionContainer(node)) {
        if (t.isLiteral(node.expression) && isPrimitiveLiteral(node.expression)) {
            return node.expression.value
        }

        return `(${node.expression.type})`
    }

    throw new Error(`Unknown node type: ${node.type}`)
}

function getInstanceInfo({
    node,
    filePath,
    importInfo,
    getPropValue: customGetPropValue,
    componentName,
}: {
    node: t.JSXOpeningElement
    filePath: string
    componentName: string
    importInfo: {
        imported?: string
        local: string
        moduleName: string
        importType: string
    }
} & Pick<IConfig, 'getPropValue'>) {
    const {attributes} = node
    const result = {
        ...(importInfo !== undefined && {importInfo}),
        props: {} as Record<string, string | number | boolean | null>,
        propsSpread: false,
        location: {
            file: filePath,
            start: node.name?.loc?.start,
        },
    }

    for (let i = 0, len = attributes.length; i < len; i++) {
        const attribute = attributes[i]

        if (t.isJSXAttribute(attribute)) {
            const {name, value} = attribute
            const propName = typeof name.name === 'string' ? name.name : name.name.name
            const propValue = customGetPropValue
                ? customGetPropValue({
                      node: value,
                      propName,
                      componentName,
                      defaultGetPropValue: getPropValue,
                  })
                : getPropValue(value)

            result.props[propName] = propValue
        } else if (t.isJSXSpreadAttribute(attribute)) {
            result.propsSpread = true
        }
    }

    return result
}

function getImportedName(node: t.Identifier | t.StringLiteral) {
    return t.isIdentifier(node) ? node.name : node.value
}
function scan({
    code,
    filePath,
    components,
    includeSubComponents = false,
    importedFrom,
    getComponentName = ({imported, local}) => (imported === 'default' ? local : imported || local),
    report,
    getPropValue: customGetPropValue,
}: Pick<IConfig, 'components' | 'includeSubComponents' | 'importedFrom' | 'getComponentName' | 'getPropValue'> & {
    code: string
    filePath: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    report: any
}) {
    let ast
    const plugins = path.extname(filePath).match(/.js/) ? 'flow' : 'typescript'

    try {
        ast = parse(code, {
            sourceType: 'module',
            plugins: ['jsx', plugins],
        })
    } catch {
        // eslint-disable-next-line no-console
        console.error(`Failed to parse: ${filePath}`)
        return
    }

    const importsMap: Record<
        string,
        {
            imported?: string
            local: string
            moduleName: string
            importType: string
        }
    > = {}

    traverse(ast, {
        ImportDeclaration: ({node}) => {
            const {source, specifiers} = node
            const moduleName = source.value
            const specifiersCount = specifiers.length

            for (let i = 0; i < specifiersCount; i++) {
                const importNode = specifiers[i]
                switch (importNode.type) {
                    case 'ImportNamespaceSpecifier':
                    case 'ImportDefaultSpecifier': {
                        const local = importNode.local?.name
                        importsMap[local] = {
                            local,
                            moduleName,
                            importType: importNode.type,
                        }

                        break
                    }

                    case 'ImportSpecifier': {
                        const imported = importNode.imported ? getImportedName(importNode.imported) : null
                        const local = importNode.local.name

                        importsMap[local] = {
                            ...(imported ? {imported} : {}),
                            local,
                            moduleName,
                            importType: importNode.type,
                        }
                        break
                    }
                    default: {
                        throw new Error(`Unknown import specifier type: ${(importNode as unknown as t.Node)?.type}`)
                    }
                }
            }
        },
        JSXOpeningElement: (nodePath: NodePath<t.JSXOpeningElement>) => {
            const {node} = nodePath
            const name = getComponentNameFromAST(node.name)
            const nameParts = name.split('.')
            const [firstPart, ...restParts] = nameParts
            const actualFirstPart = importsMap[firstPart] ? getComponentName(importsMap[firstPart]) : firstPart
            const shouldReportComponent = () => {
                if (components) {
                    if (nameParts.length === 1) {
                        if (components[actualFirstPart] === undefined) {
                            return false
                        }
                    } else {
                        const actualComponentName = [actualFirstPart, ...restParts].join('.')

                        if (
                            components[actualFirstPart] === undefined &&
                            components[actualComponentName] === undefined
                        ) {
                            return false
                        }
                    }
                }

                if (includeSubComponents === false) {
                    if (nameParts.length > 1) {
                        return false
                    }
                }

                if (importedFrom) {
                    if (!importsMap[firstPart]) {
                        return false
                    }

                    const actualImportedFrom = importsMap[firstPart].moduleName

                    if (importedFrom instanceof RegExp) {
                        if (importedFrom.test(actualImportedFrom) === false) {
                            return false
                        }
                    } else if (actualImportedFrom !== importedFrom) {
                        return false
                    }
                }

                return true
            }

            if (!shouldReportComponent()) {
                return nodePath.skip()
            }

            const componentParts = [actualFirstPart, ...restParts]

            const componentPath = componentParts.join('.components.')
            const componentName = componentParts.join('.')
            let componentInfo = getObjectPath(report, componentPath)

            if (!componentInfo) {
                componentInfo = {}
                dset(report, componentPath, componentInfo)
            }

            if (!componentInfo.instances) {
                componentInfo.instances = []
            }

            const info = getInstanceInfo({
                node,
                filePath,
                importInfo: importsMap[firstPart],
                getPropValue: customGetPropValue,
                componentName,
            })

            componentInfo.instances.push(info)
        },
    })
}

export default scan

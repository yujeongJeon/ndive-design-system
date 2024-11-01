import {minimatch} from 'minimatch'
import {IConfig} from 'src/utils/loadConfig'
import {Project, Symbol, ts, Type} from 'ts-morph'

type ModuleName = string
type PropsResult = Record<string, {type: string; count: number}>
type Result = Record<ModuleName, {instance: number; props?: PropsResult}>

const DEFAULT_GLOBS = ['**/!(*.test|*.spec|*.d).@(js|ts)?(x)']

function filterSourceFiles({tsConfigFilePath, config}: {tsConfigFilePath: string; config?: IConfig}) {
    const project = new Project({
        tsConfigFilePath,
    })

    const allSourceFiles = project.getSourceFiles()

    const globs = config?.globs || DEFAULT_GLOBS

    if (!globs || globs.length === 0) {
        throw new Error('No valid globs specified.')
    }

    const includeGlobs = globs.filter((pattern) => !pattern.startsWith('!'))
    const excludeGlobs = globs.filter((pattern) => pattern.startsWith('!')).map((pattern) => pattern.slice(1))

    const filteredSourceFiles = allSourceFiles.filter((sourceFile) => {
        const filePath = sourceFile.getFilePath()
        const isIncluded = includeGlobs.some((include) => minimatch(filePath, include))
        const isExcluded = excludeGlobs.some((exclude) => minimatch(filePath, exclude))

        return isIncluded && !isExcluded
    })

    return filteredSourceFiles
}

function isJSXComponent(type: Type): boolean {
    return type.getCallSignatures().some((signature) => {
        const returnType = signature.getReturnType()
        return returnType.isObject() && returnType.getProperties().some((prop) => prop.getName() === 'props')
    })
}

function getProps(type: Type): Record<string, string> | undefined {
    const propsRecord: Record<string, string> = {}

    const callSignatures = type.getCallSignatures()

    // 함수형 컴포넌트
    if (callSignatures.length > 0) {
        const propsType = callSignatures[0].getParameters()[0]?.getTypeAtLocation(callSignatures[0].getDeclaration()!)
        if (propsType) {
            propsType.getApparentProperties().forEach((prop) => {
                const propName = prop.getName()
                const propType = prop.getValueDeclaration()?.getType().getText()
                propsRecord[propName] = propType || 'unknown'
            })
            return propsRecord
        }
    }

    // 클래스형 컴포넌트
    if (type.isClassOrInterface()) {
        const propsProperty = type.getProperty('props')
        if (propsProperty) {
            const propsType = propsProperty.getTypeAtLocation(propsProperty.getValueDeclaration()!)
            propsType.getApparentProperties().forEach((prop) => {
                const propName = prop.getName()
                const propType = prop.getValueDeclaration()?.getType().getText()
                propsRecord[propName] = propType || 'unknown'
            })
        }
    }
}

function parseProps(
    props: Record<string, string> | undefined,
    initialValue: Record<string, {type: string; count: number}>,
) {
    if (!props) {
        return
    }
    return Object.entries(props).reduce((propsMap, [propName, propType]) => {
        if (!propsMap[propName]) {
            propsMap[propName] = {
                type: propType,
                count: 1,
            }
        } else {
            propsMap[propName].count++
        }

        return propsMap
    }, initialValue)
}

function updateReport(type: Type<ts.Type>, importName: string, result: Result) {
    const nextResult = JSON.parse(JSON.stringify(result))

    if (isJSXComponent(type)) {
        const props = getProps(type)
        if (!nextResult[importName]) {
            nextResult[importName] = {
                instance: 1,
                props: parseProps(props, {}),
            }
        } else {
            nextResult[importName].instance += 1
            nextResult[importName].props = parseProps(props, result[importName].props ?? {})
        }
    } else {
        if (!nextResult[importName]) {
            nextResult[importName] = {
                instance: 1,
            }
        } else {
            nextResult[importName].instance += 1
        }
    }
    return nextResult
}

function extractModuleIdentifier(symbol?: Symbol) {
    if (!symbol) {
        return
    }
    const declarations = symbol.getDeclarations()
    if (declarations.length > 0) {
        const identifier = declarations[0]
        return identifier.getType()
    }
}

export function getPropsFromDesignComponents({tsConfigFilePath, config}: {tsConfigFilePath: string; config?: IConfig}) {
    const sourceFiles = filterSourceFiles({tsConfigFilePath, config})

    let report: Result = {}

    sourceFiles.forEach((sourceFile) => {
        sourceFile.getImportDeclarations().forEach((importDecl) => {
            const moduleSpecifier = importDecl.getModuleSpecifierValue()

            if (moduleSpecifier.startsWith('@ndive/design-components')) {
                const defaultImport = importDecl.getDefaultImport()

                if (defaultImport) {
                    const importName = defaultImport.getText()
                    const symbol = defaultImport.getSymbol()
                    const type = extractModuleIdentifier(symbol)

                    type && (report = updateReport(type, importName, report))
                }

                importDecl.getNamedImports().forEach((namedImport) => {
                    const importName = namedImport.getName()

                    const symbol = namedImport.getNameNode().getSymbol()
                    const type = extractModuleIdentifier(symbol)

                    type && (report = updateReport(type, importName, report))
                })
            }
        })
    })

    return report
}

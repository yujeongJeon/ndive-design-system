import {minimatch} from 'minimatch'
import {
    JsxAttribute,
    JsxFragment,
    JsxOpeningElement,
    JsxSelfClosingElement,
    Project,
    SourceFile,
    Symbol,
    SyntaxKind,
    Type,
} from 'ts-morph'

import {IConfig} from '$/utils/loadConfig'

type ModuleName = string
type PropName = string
type PropsResult = Record<PropName, {type: string; count: number}>
type Result = Record<
    ModuleName,
    {
        /**
         * 사용 횟수
         */
        instance: number
        /**
         * React 컴포넌트일 때 props 사용 횟수 및 타입
         */
        props?: PropsResult
        /**
         * 모듈 타입
         */
        type?: string | Record<string, unknown>
    }
>

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

        if (returnType.getText() === 'React.ReactNode') {
            return true
        }

        if (returnType.isObject()) {
            const hasProps = returnType.getProperties().some((prop) => prop.getName() === 'props')

            const isSVGOrHTMLElement =
                returnType.getApparentType().getSymbol()?.getName() === 'SVGElement' ||
                returnType.getApparentType().getSymbol()?.getName() === 'HTMLElement'

            return hasProps || isSVGOrHTMLElement
        }
        return false
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

function extractUsedProps(jsxElement: JsxOpeningElement | JsxSelfClosingElement) {
    return jsxElement
        .getAttributes()
        .map((attr) => {
            if (attr.getKind() === SyntaxKind.JsxAttribute) {
                const jsxAttr = attr as JsxAttribute
                const propName = jsxAttr.getNameNode().getText()
                return propName
            }
            return ''
        })
        .filter<string>((v): v is string => !!v)
}

function isJsxOpeningOrSelfClosingElement(
    element: JsxOpeningElement | JsxSelfClosingElement | JsxFragment,
): element is JsxOpeningElement | JsxSelfClosingElement {
    return element.getKind() === SyntaxKind.JsxOpeningElement || element.getKind() === SyntaxKind.JsxSelfClosingElement
}

function isComponentUsedInSourceFile({
    sourceFile,
    importName,
    propsType,
    initialProps,
}: {
    sourceFile: SourceFile
    importName: string
    propsType?: Record<string, string>
    initialProps: PropsResult
}) {
    const nextProps = JSON.parse(JSON.stringify(initialProps)) as PropsResult

    const jsxElements = [
        ...sourceFile.getDescendantsOfKind(SyntaxKind.JsxOpeningElement),
        ...sourceFile.getDescendantsOfKind(SyntaxKind.JsxSelfClosingElement),
        ...sourceFile.getDescendantsOfKind(SyntaxKind.JsxFragment),
    ]

    jsxElements.forEach((jsxElement) => {
        if (!isJsxOpeningOrSelfClosingElement(jsxElement)) {
            return
        }

        const tagName = jsxElement.getTagNameNode().getText()

        if (tagName !== importName) {
            return
        }

        const usedProps = extractUsedProps(jsxElement)

        usedProps.forEach((propName) => {
            const existingProp = nextProps[propName]

            if (existingProp) {
                nextProps[propName].count += 1
            } else {
                const propType = propsType?.[propName] || 'unknown'
                nextProps[propName] = {type: propType, count: 1}
            }
        })
    })

    return nextProps
}

function getImportType(symbol?: Symbol) {
    const declaredImportType = symbol?.getDeclarations()?.[0].getType().getText()

    /**
     * JSXElement의 경우 `typeof import(...).ButtonPrimary`와 같이 실제로 선언된 경로로 나옴
     * TypeScript의 타입 시스템이 외부 모듈을 정적으로 참조하고, 구체적인 정의를 런타임에 해석하지 않기 때문임
     * 반면, 일반 상수나 React의 고차 컴포넌트는 정적으로 타입이 명시되므로  TypeScript가 이를 정확히 파악할 수 있음
     */
    return declaredImportType?.startsWith('typeof import') ? undefined : declaredImportType
}

function updateReport({
    symbol,
    importName,
    report,
    sourceFile,
}: {
    symbol?: Symbol
    importName: string
    report: Result
    sourceFile: SourceFile
}) {
    const type = extractModuleIdentifier(symbol)

    if (!type) {
        return report
    }

    const importType = getImportType(symbol)
    const nextReport = JSON.parse(JSON.stringify(report)) as Result

    if (isJSXComponent(type)) {
        const propsType = getProps(type)

        if (!nextReport[importName]) {
            nextReport[importName] = {
                instance: 1,
                type: importType,
            }
            nextReport[importName].props = isComponentUsedInSourceFile({
                sourceFile,
                propsType,
                importName,
                initialProps: {},
            })
        } else {
            nextReport[importName].instance += 1
            nextReport[importName].props = isComponentUsedInSourceFile({
                sourceFile,
                propsType,
                importName,
                initialProps: nextReport[importName].props || {},
            })
        }
    } else {
        if (!nextReport[importName]) {
            nextReport[importName] = {
                instance: 1,
                type: importType,
            }
        } else {
            nextReport[importName].instance += 1
        }
    }
    return nextReport
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

                    report = updateReport({symbol, importName, report, sourceFile})
                }

                importDecl.getNamedImports().forEach((namedImport) => {
                    const importName = namedImport.getName()
                    const symbol = namedImport.getNameNode().getSymbol()

                    report = updateReport({symbol, importName, report, sourceFile})
                })
            }
        })
    })

    return report
}

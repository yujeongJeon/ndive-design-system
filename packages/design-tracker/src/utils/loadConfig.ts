/* eslint-disable no-console */
import {cosmiconfig} from 'cosmiconfig'

import type {types as t} from '@babel/core'

const CONFIG_NAME = 'ndive-design-tracker'

const explorer = cosmiconfig(CONFIG_NAME, {
    searchPlaces: [
        'ndive-design-tracker.rc',
        'ndive-design-tracker.json',
        'ndive-design-tracker.yaml',
        'ndive-design-tracker.yml',
        'ndive-design-tracker.config.js',
    ],
    loaders: {
        '.rc': (filepath, content) => {
            try {
                return JSON.parse(content)
            } catch (e: unknown) {
                if (e instanceof Error) {
                    throw new Error(`Failed to parse JSON in ${filepath}: ${e.message}`)
                }
                process.exit(1)
            }
        },
    },
})

interface IGetPropValue {
    /** The AST node */
    node?: t.Node | null
    componentName: string
    propName: string | t.JSXIdentifier
    /** Pass the node back into this method for default handling of the prop value */
    defaultGetPropValue: (node: t.Node | null) => string | number | boolean | null
}

export type ExcludeFn = (dirName: string, dirPath: string) => boolean

export interface IConfig {
    crawlFrom: string
    includeSubComponents: boolean
    importedFrom: string | RegExp
    globs: string[]
    exclude?: (string | RegExp)[] | ExcludeFn
    getComponentName: ({
        imported,
        local,
        moduleName,
        importType,
    }: {
        imported?: string
        local: string
        moduleName: string
        importType: string
    }) => string
    components: Record<string, boolean>
    getPropValue: ({node, componentName, propName, defaultGetPropValue}: IGetPropValue) => string
    outputTo?: string
}

export const loadConfig = async (): Promise<
    | {
          config: IConfig
          filepath: string
          isEmpty: boolean
      }
    | undefined
> => {
    try {
        const result = await explorer.search() // 탐색하여 설정 파일 찾기
        if (!result) {
            console.error(`${CONFIG_NAME} rc 파일이 필요합니다.`)
            process.exit(1)
        }

        return result as {
            config: IConfig
            filepath: string
            isEmpty: boolean
        }
    } catch (error) {
        console.error('구성 파일을 로드하는데 실패했습니다.', error)
    }
}

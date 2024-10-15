/* eslint-disable no-console */
import path from 'node:path'

import {cosmiconfig} from 'cosmiconfig'

import type {types as t} from '@babel/core'

const CONFIG_NAME = 'ndive-design-tracker'

const explorer = cosmiconfig(CONFIG_NAME, {
    searchPlaces: [
        `${CONFIG_NAME}.json`,
        `${CONFIG_NAME}.yaml`,
        `${CONFIG_NAME}.yml`,
        `${CONFIG_NAME}.config.js`,
        `${CONFIG_NAME}.config.ts`,
        `${CONFIG_NAME}.config.mjs`,
        `${CONFIG_NAME}.config.cjs`,
    ],
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
    includeSubComponents?: boolean
    importedFrom: string | RegExp
    globs?: string[]
    exclude?: (string | RegExp)[] | ExcludeFn
    getComponentName?: ({
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
    components?: Record<string, boolean>
    getPropValue?: ({node, componentName, propName, defaultGetPropValue}: IGetPropValue) => string
    outputTo?: string
}

export const loadConfig = async (
    configPath?: string,
): Promise<
    | {
          config: IConfig
          filepath: string
          isEmpty: boolean
      }
    | undefined
> => {
    try {
        let result

        if (configPath) {
            result = await explorer.load(path.resolve(process.cwd(), configPath))
        } else {
            result = await explorer.search()
        }

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

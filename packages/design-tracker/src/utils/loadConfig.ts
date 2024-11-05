import path from 'node:path'

import {cosmiconfig, CosmiconfigResult} from 'cosmiconfig'

const CONFIG_NAME = 'ndive-design-tracker'

const POSSIBLE_CONFIG_NAMES = [
    `${CONFIG_NAME}.json`,
    `${CONFIG_NAME}.yaml`,
    `${CONFIG_NAME}.yml`,
    `${CONFIG_NAME}.config.js`,
    `${CONFIG_NAME}.config.ts`,
    `${CONFIG_NAME}.config.mjs`,
    `${CONFIG_NAME}.config.cjs`,
]

const explorer = cosmiconfig(CONFIG_NAME, {
    searchPlaces: POSSIBLE_CONFIG_NAMES,
})

export type ExcludeFn = (dirName: string, dirPath: string) => boolean

export interface IConfig {
    tsConfigFilePath: string
    globs?: string[]
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
        let result: CosmiconfigResult

        if (configPath) {
            result = await explorer.load(path.resolve(process.cwd(), configPath))
        } else {
            result = await explorer.search()
        }

        return result as
            | {
                  config: IConfig
                  filepath: string
                  isEmpty: boolean
              }
            | undefined
    } catch {
        /** IGNORE */
    }
}

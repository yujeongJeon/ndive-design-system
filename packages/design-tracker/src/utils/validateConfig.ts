import fs from 'node:fs'

import {IConfig} from './loadConfig'

import {getAbsolutePath} from './index'

export function validateConfig(config: IConfig, configDir: string) {
    const result: {
        errors: string[]
        tsConfigFilePath: string
    } = {
        errors: [] as string[],
        tsConfigFilePath: '',
    }

    if (config.tsconfigFilePath === undefined) {
        result.errors.push(`tsconfigFilePath is missing`)
    } else if (typeof config.tsconfigFilePath !== 'string') {
        result.errors.push(`tsconfigFilePath should be a string`)
    } else {
        const tsconfigFilePath = getAbsolutePath(config.tsconfigFilePath, configDir)

        if (fs.existsSync(tsconfigFilePath)) {
            result.tsConfigFilePath = tsconfigFilePath
        } else {
            result.errors.push(`tsConfigFilePath path doesn't exist (${tsconfigFilePath})`)
        }
    }

    if (config.globs !== undefined) {
        if (Array.isArray(config.globs)) {
            for (let i = 0, len = config.globs.length; i < len; i++) {
                if (typeof config.globs[i] !== 'string') {
                    result.errors.push(
                        `every item in the globs array should be a string (${typeof config.globs[i]} found)`,
                    )
                    break
                }
            }
        } else {
            result.errors.push(`globs should be an array`)
        }
    }

    return result
}

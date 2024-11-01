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

    if (config.tsConfigFilePath === undefined) {
        result.errors.push(`tsConfigFilePath is missing`)
    } else if (typeof config.tsConfigFilePath !== 'string') {
        result.errors.push(`tsConfigFilePath should be a string`)
    } else {
        const tsConfigFilePath = getAbsolutePath(config.tsConfigFilePath, configDir)

        if (fs.existsSync(tsConfigFilePath)) {
            result.tsConfigFilePath = tsConfigFilePath
        } else {
            result.errors.push(`tsConfigFilePath path doesn't exist (${tsConfigFilePath})`)
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

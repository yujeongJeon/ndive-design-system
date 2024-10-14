import fs from 'node:fs'
import path from 'node:path'

import {isPlainObject} from './isPlainObject'
import {IConfig} from './loadConfig'

export function validateConfig(config: IConfig, configDir: string) {
    const result: {
        errors: string[]
        crawlFrom: string
    } = {
        errors: [] as string[],
        crawlFrom: '',
    }

    if (config.crawlFrom === undefined) {
        result.errors.push(`crawlFrom is missing`)
    } else if (typeof config.crawlFrom !== 'string') {
        result.errors.push(`crawlFrom should be a string`)
    } else {
        const crawlFrom = path.resolve(configDir, config.crawlFrom)

        if (fs.existsSync(crawlFrom)) {
            result.crawlFrom = crawlFrom
        } else {
            result.errors.push(`crawlFrom path doesn't exist (${crawlFrom})`)
        }
    }

    if (config.exclude !== undefined) {
        if (Array.isArray(config.exclude)) {
            for (let i = 0, len = config.exclude.length; i < len; i++) {
                if (typeof config.exclude[i] !== 'string' && config.exclude[i] instanceof RegExp === false) {
                    result.errors.push(
                        `every item in the exclude array should be a string or a regex (${typeof config.exclude[
                            i
                        ]} found)`,
                    )
                    break
                }
            }
        } else if (typeof config.exclude !== 'function') {
            result.errors.push(`exclude should be an array or a function`)
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

    if (config.components !== undefined) {
        if (isPlainObject(config.components)) {
            for (const componentName in config.components) {
                if (config.components[componentName] !== true) {
                    result.errors.push(`the only supported value in the components object is true`)
                    break
                }
            }
        } else {
            result.errors.push(`components should be an object`)
        }
    }

    if (config.includeSubComponents !== undefined) {
        if (typeof config.includeSubComponents !== 'boolean') {
            result.errors.push(`includeSubComponents should be a boolean`)
        }
    }

    if (config.importedFrom !== undefined) {
        if (typeof config.importedFrom !== 'string' && config.importedFrom instanceof RegExp === false) {
            result.errors.push(`importedFrom should be a string or a RegExp`)
        }
    }

    return result
}

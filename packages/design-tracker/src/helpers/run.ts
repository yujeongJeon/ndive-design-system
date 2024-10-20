/* eslint-disable no-console */
import fs from 'node:fs'
import path from 'node:path'

import {fdir as Fdir} from 'fdir'

import {forEachComponent, getExcludeFn} from '../utils'
import {isPlainObject} from '../utils/isPlainObject'
import {IConfig} from '../utils/loadConfig'
import countComponentsAndPropsProcessor from './processor'
import scan from './scan'

const DEFAULT_GLOBS = ['**/!(*.test|*.spec).@(js|ts)?(x)']

async function run({
    config,
    configDir,
    crawlFrom,
    debug,
}: {
    config: IConfig
    configDir: string
    crawlFrom: string
    debug: boolean
}) {
    if (debug) {
        console.log(`crawlFrom is ${crawlFrom}\n`)
        console.log(`load config: ${JSON.stringify(config, undefined, 4)}\n`)
    }

    const globs = config?.globs || DEFAULT_GLOBS

    if (!globs || globs.length === 0) {
        throw new Error('No valid globs specified.')
    }

    const files = new Fdir({
        normalizePath: true,
    })
        .glob(...(globs ?? DEFAULT_GLOBS))
        .exclude(getExcludeFn(config.exclude))
        .withFullPaths()
        .crawl(crawlFrom)
        .sync()

    if (files.length === 0) {
        console.error(`No files found to scan.`)
        process.exit(0)
    }

    const report = {}
    const {components, includeSubComponents, importedFrom, getComponentName, getPropValue} = config

    for (let i = 0, len = files.length; i < len; i++) {
        const filePath = files[i]
        const code = fs.readFileSync(filePath, 'utf8')

        scan({
            code,
            filePath,
            components,
            includeSubComponents,
            importedFrom,
            getComponentName,
            report,
            getPropValue,
        })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const output = (data: any) => {
        const destination = config.outputTo ?? 'stdout'
        const dataStr = isPlainObject(data) ? JSON.stringify(data, null, 4) : String(data)

        if (destination === 'stdout') {
            console.log(dataStr)
        } else {
            const filePath = path.resolve(configDir, destination)

            fs.mkdirSync(path.dirname(filePath), {recursive: true})
            fs.writeFileSync(filePath, dataStr)
        }
    }

    countComponentsAndPropsProcessor({
        forEachComponentResult: forEachComponent(report),
        output,
    })
}

export default run

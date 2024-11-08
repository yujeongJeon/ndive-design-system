/* eslint-disable no-console */
import fs from 'node:fs'
import path from 'node:path'

import {getPropsFromDesignComponents} from '$/helpers/scan'
import {isPlainObject} from '$/utils/isPlainObject'
import {IConfig} from '$/utils/loadConfig'

async function run({
    config,
    configDir,
    tsConfigFilePath,
    debug,
}: {
    config?: IConfig
    configDir: string
    tsConfigFilePath: string
    debug: boolean
}) {
    if (debug) {
        console.log(`tsConfigFilePath is ${tsConfigFilePath}`)
        console.log(`load config: ${JSON.stringify(config, undefined, 4)}\n`)
    }

    const report = getPropsFromDesignComponents({tsConfigFilePath, config})

    const destination = config?.outputTo ?? 'stdout'
    const dataStr = isPlainObject(report) ? JSON.stringify(report, null, 4).replace(/\\"/g, "'") : String(report)

    if (destination === 'stdout') {
        console.log(dataStr)
    } else {
        const filePath = path.resolve(configDir, destination)
        fs.mkdirSync(path.dirname(filePath), {recursive: true})
        fs.writeFileSync(filePath, dataStr)
    }
}

export default run

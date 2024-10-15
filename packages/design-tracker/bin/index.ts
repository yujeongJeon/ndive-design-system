#!/usr/bin/env node
/* eslint-disable no-console */

import path from 'node:path'

import run from '../src/helpers/run'
import {runCli} from '../src/helpers/runCli'
import {getAbsolutePath} from '../src/utils'
import {loadConfig} from '../src/utils/loadConfig'
import {validateConfig} from '../src/utils/validateConfig'

async function analyze() {
    const {flags: options} = runCli()

    const config = await loadConfig(options.config)

    if (config?.config) {
        const configPath = path.resolve(process.cwd(), options.config)
        const configDir = path.dirname(configPath)

        const pathToCrawl = options.path && getAbsolutePath(options.path)

        if (pathToCrawl) {
            await run({
                config: config.config,
                configDir,
                crawlFrom: pathToCrawl,
                debug: options.verbose,
            })
        } else {
            const {crawlFrom, errors} = validateConfig(config?.config, configDir)
            if (errors.length === 0) {
                await run({
                    config: config.config,
                    configDir,
                    crawlFrom,
                    debug: options.verbose,
                })
            } else {
                console.error(`Config errors:`)

                errors.forEach((error) => {
                    console.error(`- ${error}`)
                })

                process.exit(1)
            }
        }
    }
}

analyze()

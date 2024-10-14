#!/usr/bin/env node
/* eslint-disable no-console */

import path from 'node:path'

import run from '../src/helpers/run'
import {runCli} from '../src/helpers/runCli'
import {loadConfig} from '../src/utils/loadConfig'
import {validateConfig} from '../src/utils/validateConfig'

async function analyze() {
    const {flags: options} = runCli()

    const config = await loadConfig(options.config)

    if (config?.config) {
        const configPath = path.resolve(process.cwd(), options.config)
        const configDir = path.dirname(configPath)

        const pathToCrawl = options.path && path.resolve(process.cwd(), options.path)

        if (pathToCrawl) {
            run({
                config: config?.config,
                configDir,
                crawlFrom: pathToCrawl,
            })
        } else {
            const {crawlFrom, errors} = validateConfig(config?.config, configDir)
            if (errors.length === 0) {
                run({
                    config: config.config,
                    configDir,
                    crawlFrom,
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

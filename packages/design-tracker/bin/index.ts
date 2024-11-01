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

    const configFileInfo = await loadConfig(options.config)
    const configPath = getAbsolutePath(options.config)
    const configDir = path.dirname(configPath)

    if (configFileInfo?.config) {
        const {tsConfigFilePath: tsConfigFilePathFromConfig, errors} = validateConfig(configFileInfo?.config, configDir)
        if (errors.length === 0) {
            await run({
                config: configFileInfo.config,
                configDir,
                tsConfigFilePath: getAbsolutePath(tsConfigFilePathFromConfig),
                debug: options.verbose,
            })
        } else {
            console.error(`Config errors:`)

            errors.forEach((error) => {
                console.error(`- ${error}`)
            })

            process.exit(1)
        }
    } else {
        const tsConfigFilePath = options.tsconfig && getAbsolutePath(options.tsconfig)

        if (!tsConfigFilePath) {
            console.error(`tsConfigFilePath is missing. Add '-t' option or configuration file.`)
            process.exit(1)
        }

        await run({
            configDir,
            tsConfigFilePath,
            debug: options.verbose,
        })
    }
}

analyze()

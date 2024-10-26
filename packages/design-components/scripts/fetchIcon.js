import fs from 'node:fs'
import path from 'node:path'

import {setIcon} from '@ndive/design-tokens'

import colorJson from '../src/json/color.json' assert {type: 'json'}
import {normalize} from './utils/normalize.js'
import {kebabToPascal} from './utils/string.js'
import {transformReactComponent} from './utils/svgr.js'

import './utils/loadEnv.js'

async function fetchIcon() {
    const {size, icon} = await setIcon({accessToken: process.env.FIGMA_TOKEN})

    const jsonDir = normalize(import.meta.dirname, '../src/json')

    !fs.existsSync(jsonDir) &&
        fs.mkdirSync(jsonDir, {
            recursive: true,
        })

    fs.writeFileSync(path.join(jsonDir, 'size.json'), JSON.stringify(size), {
        encoding: 'utf-8',
    })

    fs.writeFileSync(path.join(jsonDir, 'icon.json'), JSON.stringify(icon), {
        encoding: 'utf-8',
    })

    const iconsDir = normalize(import.meta.dirname, '../src/components/icons')

    !fs.existsSync(iconsDir) &&
        fs.mkdirSync(iconsDir, {
            recursive: true,
        })

    const settledResults = await Promise.allSettled(
        Object.entries(icon).map(
            async ([iconName, svgCode]) =>
                await transformReactComponent({
                    colorValueList: Object.values(colorJson)
                        .map((color) => [color, color.toUpperCase()])
                        .flat(),
                    componentName: kebabToPascal(iconName).replace('Ic', 'Icon'),
                    svgCode,
                    filePath: iconsDir,
                }),
        ),
    )

    const exported = settledResults
        .filter((result) => result.status === 'fulfilled')
        .map(({value}) => value)
        .filter((v) => v)
        .map(
            ({componentName}) => `export {default as ${componentName}} from './${componentName}';
    `,
        )
        .join('')

    // /src/components/icons/index.ts
    fs.writeFileSync(normalize(import.meta.dirname, '../src/components/icons/index.ts'), exported, {
        encoding: 'utf-8',
    })
}

fetchIcon()

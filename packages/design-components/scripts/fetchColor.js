import fs from 'node:fs'
import path from 'node:path'

import {setColor} from '@ndive/design-tokens'

import './utils/loadEnv.js'
import {normalize} from './utils/normalize.js'
import {pascalToCamel, snakeToPascal} from './utils/string.js'

async function fetchColor() {
    const {group, colorSet} = await setColor({
        accessToken: process.env.FIGMA_TOKEN,
    })

    // color.scss
    const stylesDir = normalize(import.meta.dirname, '../src/styles')
    !fs.existsSync(stylesDir) &&
        fs.mkdirSync(stylesDir, {
            recursive: true,
        })

    const content = `${Object.entries(colorSet)
        .map(
            ([variableName, color]) => `$${snakeToPascal(variableName)}: ${color};
`,
        )
        .join('')}`

    fs.writeFileSync(path.join(stylesDir, 'color.scss'), content, {
        encoding: 'utf-8',
    })

    // color.json
    const jsonDir = normalize(import.meta.dirname, '../src/json')

    !fs.existsSync(jsonDir) &&
        fs.mkdirSync(jsonDir, {
            recursive: true,
        })

    fs.writeFileSync(path.join(jsonDir, 'color.json'), JSON.stringify(colorSet), {
        encoding: 'utf-8',
    })

    // color.types.ts
    const colorTypeDefinition = `export type TPrimaryColors = ${group
        .map((colorKey) => pascalToCamel(colorKey))
        .map((colorKey) => `"${colorKey}"`)
        .join(' | ')};
`

    fs.writeFileSync(path.join(normalize(import.meta.dirname, '../src/types'), 'color.types.ts'), colorTypeDefinition, {
        encoding: 'utf-8',
    })
}

fetchColor()

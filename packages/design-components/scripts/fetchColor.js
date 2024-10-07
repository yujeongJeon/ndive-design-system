import fs from 'node:fs'
import path from 'node:path'

import {setColor} from '@ndive/design-tokens'
import * as dotenv from 'dotenv'

function normalize(relativePath) {
    return path.resolve(import.meta.dirname, relativePath)
}

dotenv.config({path: normalize('../.env')})

function snakeToCamel(snake) {
    return snake.replace(/(_\w)/g, function (match) {
        return match[1].toUpperCase()
    })
}

async function fetchColor() {
    const colorSet = await setColor({
        accessToken: process.env.FIGMA_TOKEN,
    })

    // color.scss
    const stylesDir = normalize('../src/styles')
    !fs.existsSync(stylesDir) &&
        fs.mkdirSync(stylesDir, {
            recursive: true,
        })

    const content = `${Object.entries(colorSet)
        .map(
            ([variableName, color]) => `$${snakeToCamel(variableName)}: ${color};
`,
        )
        .join('')}`

    fs.writeFileSync(path.join(stylesDir, 'color.scss'), content, {
        encoding: 'utf-8',
    })

    // color.json
    const jsonDir = normalize('../src/json')

    !fs.existsSync(jsonDir) &&
        fs.mkdirSync(jsonDir, {
            recursive: true,
        })

    fs.writeFileSync(path.join(jsonDir, 'color.json'), JSON.stringify(colorSet), {
        encoding: 'utf-8',
    })

    // color.types.ts
    const colorTypeDefinition = `export type TColors = ${Object.keys(colorSet)
        .map((colorKey) => snakeToCamel(colorKey))
        .map((colorKey) => `"${colorKey}"`)
        .join(' | ')};
`

    fs.writeFileSync(path.join(normalize('../src/types'), 'color.types.ts'), colorTypeDefinition, {
        encoding: 'utf-8',
    })
}

fetchColor()

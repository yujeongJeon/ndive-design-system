import fs from 'node:fs'
import path from 'node:path'

import {setTypo} from '@ndive/design-tokens'
import * as dotenv from 'dotenv'

function normalize(relativePath) {
    return path.resolve(import.meta.dirname, relativePath)
}

dotenv.config({path: normalize('../.env')})

async function fetchTypo() {
    const typoSet = await setTypo({accessToken: process.env.FIGMA_TOKEN})

    const jsonDir = normalize('../src/json')

    !fs.existsSync(jsonDir) &&
        fs.mkdirSync(jsonDir, {
            recursive: true,
        })

    const typoMap = Object.entries(typoSet).reduce(
        (acc, [name, {fontSize, fontWeight, lineHeightPx, fontFamily}]) => ({
            ...acc,
            [name]: {
                fontSize,
                fontWeight,
                lineHeightPx,
                fontFamily,
            },
        }),
        {},
    )

    fs.writeFileSync(path.join(jsonDir, 'typo.json'), JSON.stringify(typoMap), {
        encoding: 'utf-8',
    })
}

fetchTypo()

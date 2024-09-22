import fs from 'node:fs'
import path from 'node:path'

import {setIcon} from '@ndive/design-tokens'
import * as dotenv from 'dotenv'

function normalize(relativePath) {
    return path.resolve(import.meta.dirname, relativePath)
}

dotenv.config({path: normalize('../.env')})

async function fetchTypo() {
    const {size, icon} = await setIcon({accessToken: process.env.FIGMA_TOKEN})

    const jsonDir = normalize('../src/json')

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
}

fetchTypo()

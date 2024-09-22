import fs from 'node:fs'
import path from 'node:path'

import {setColor} from '@ndive/design-tokens'
import * as dotenv from 'dotenv'

function normalize(relativePath) {
    return path.resolve(import.meta.dirname, relativePath)
}

// 프로젝트 루트의 .env 파일을 로드합니다.
dotenv.config({path: normalize('../.env')})

async function fetchColor() {
    const colorSet = await setColor({
        accessToken: process.env.FIGMA_TOKEN,
    })

    const jsonDir = normalize('../src/json')

    !fs.existsSync(jsonDir) &&
        fs.mkdirSync(jsonDir, {
            recursive: true,
        })

    fs.writeFileSync(path.join(jsonDir, 'color.json'), JSON.stringify(colorSet), {
        encoding: 'utf-8',
    })
}

fetchColor()

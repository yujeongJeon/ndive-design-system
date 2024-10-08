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

    const typoEntries = Object.entries(typoSet).map(([name, {fontSize, fontWeight, lineHeightPx, fontFamily}]) => [
        name,
        {
            fontSize,
            fontWeight,
            lineHeightPx,
            fontFamily,
        },
    ])

    const stylesDir = normalize('../src/styles')
    !fs.existsSync(stylesDir) &&
        fs.mkdirSync(stylesDir, {
            recursive: true,
        })

    const toName = (name) => {
        const [area, weight] = name.split('_')

        return `${area[0].toLowerCase() + area.slice(1)}${weight.replace(/(.+)-(.+)/, '$1$2')}`
    }

    const content = `${typoEntries
        .map(
            ([name, {fontSize, fontWeight, lineHeightPx, fontFamily}]) => `@mixin ${toName(name)} {
    font-size: ${fontSize}px;
    font-weight: ${fontWeight};
    line-height: ${Math.round(lineHeightPx)}px;
    font-family: ${fontFamily};
}
`,
        )
        .join('')}`

    fs.writeFileSync(
        path.join(stylesDir, 'typo.scss'),
        `@import "@fontsource/pretendard/500.css";
@import "@fontsource/pretendard/700.css";

${content}`,
        {
            encoding: 'utf-8',
        },
    )
}

fetchTypo()

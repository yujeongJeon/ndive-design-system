import fs from 'node:fs'
import path from 'node:path'

import {setIcon} from '@ndive/design-tokens'
import {transform} from '@svgr/core'
import * as dotenv from 'dotenv'

import colorJson from '../src/json/color.json' assert {type: 'json'}

function normalize(relativePath) {
    return path.resolve(import.meta.dirname, relativePath)
}

dotenv.config({path: normalize('../.env')})

const BREAK_LINE = '\n'

const getDefaultTemplate =
    () =>
    ({componentName, jsx, imports, props}, {tpl}) => {
        return tpl`
            ${imports};
            ${BREAK_LINE}
            function ${componentName} (${props}) {
                return ${jsx}
            }
            ${BREAK_LINE}
            export default memo(${componentName});
        `
    }

const replaceFillProps = (colorList, svgCode) => {
    const filteredColorValueList = colorList.filter((color) => svgCode.includes(color))

    return filteredColorValueList.reduce((obj, key) => ({...obj, [key]: '{props.fill}'}), {})
}

export const transformReactComponent = async ({colorValueList, componentName, svgCode}) => {
    const replaceAttrValues = replaceFillProps(
        ['#fff', '#ffffff', '#000', '#000000', 'black', 'white', '#181600', ...colorValueList],
        svgCode,
    )
    const tsxCode = await transform(
        svgCode,
        {
            plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
            jsxRuntime: 'automatic',
            typescript: true,
            dimensions: true,
            expandProps: 'end',
            icon: true,
            memo: true,
            replaceAttrValues,
            svgProps: {
                width: '{props.width}',
                height: '{props.height}',
            },
            template: getDefaultTemplate(),
        },
        {componentName, filePath: normalize('../src/components/icons')},
    )

    fs.writeFileSync(normalize(`../src/components/icons/${componentName}.tsx`), tsxCode, {
        encoding: 'utf-8',
    })

    return {componentName}
}

function kebabToPascal(str) {
    return str
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('')
}

async function fetchIcon() {
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

    const iconsDir = normalize('../src/components/icons')

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
    fs.writeFileSync(normalize('../src/components/icons/index.ts'), exported, {
        encoding: 'utf-8',
    })
}

fetchIcon()

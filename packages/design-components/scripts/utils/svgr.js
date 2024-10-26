import fs from 'node:fs'

import {transform} from '@svgr/core'

import {normalize} from './normalize.js'

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

export const transformReactComponent = async ({colorValueList, componentName, svgCode, filePath}) => {
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
        {componentName, filePath},
    )

    fs.writeFileSync(normalize(filePath, `${componentName}.tsx`), tsxCode, {
        encoding: 'utf-8',
    })

    return {componentName}
}

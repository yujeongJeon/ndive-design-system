import fs from 'node:fs'
import path from 'node:path'

import {COLOR_NODE_ID} from './config'
import {TColorDocumentFrame, TColorReturnType, TColorSetFrame} from './types/color.type'
import {getFileNode} from './utils/api'
import {parseColor} from './utils/color'
import {isFrame} from './utils/figmaUtils'

const writeFile = (content: string, fileName: string) => {
    fs.writeFileSync(path.join(path.resolve(__dirname, '../'), fileName), content, {
        encoding: 'utf-8',
    })
}

async function update({
    nodeId,
    output,
    transform,
}: {
    nodeId: string
    output: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transform: (data: any) => string
}) {
    const data = await getFileNode({nodeId, transform})

    writeFile(JSON.stringify(data, undefined, 4), output)
}

export async function setColor() {
    await update({
        nodeId: COLOR_NODE_ID,
        output: 'color.json',
        transform: function transform(document: TColorDocumentFrame) {
            const colorSet: TColorReturnType = document.children
                .filter<TColorSetFrame>(isFrame) // 1-depth : Sub, Grayscale, ...
                .map(({name, children}) => ({
                    name,
                    children: children.filter(isFrame), // 2-depth : [Gray_10, Gray_9, ...]
                }))
                .reduce(
                    (root, {name: rootName, children}) => ({
                        ...root,
                        [rootName.toUpperCase()]: parseColor(children, rootName),
                    }),
                    {} as TColorReturnType,
                )

            const content = JSON.stringify(colorSet)
            return content
        },
    })
}

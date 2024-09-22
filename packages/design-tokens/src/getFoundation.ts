import {COLOR_NODE_ID} from './config'
import {TColorDocumentFrame, TColorReturnType, TColorSetFrame} from './types/color.type'
import {getFileNode} from './utils/api'
import {parseColor} from './utils/color'
import {isFrame} from './utils/figmaUtils'

async function fetchFromFigma<T>({
    nodeId,
    accessToken,
    transform,
}: {
    nodeId: string
    accessToken: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transform: (data: any) => T
}) {
    const data = await getFileNode({nodeId, accessToken, transform})

    return data
}

export async function setColor({accessToken}: {accessToken: string}) {
    return await fetchFromFigma({
        nodeId: COLOR_NODE_ID,
        accessToken,
        transform: function transform(document: TColorDocumentFrame) {
            const colorSet: TColorReturnType = document.children
                .filter<TColorSetFrame>(isFrame) // 1-depth : Sub, Grayscale, ...
                .map(({name, children}) => ({
                    name,
                    children: children.filter(isFrame), // 2-depth : [Gray_10, Gray_9, ...]
                }))
                .reduce(
                    (root, {name, children}) => ({
                        ...root,
                        [name.toUpperCase()]: parseColor(children),
                    }),
                    {} as TColorReturnType,
                )

            return colorSet
        },
    })
}

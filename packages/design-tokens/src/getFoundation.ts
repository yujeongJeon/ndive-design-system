import {COLOR_NODE_ID, TYPO_NODE_ID} from './config'
import {getFileNode} from './utils/api'
import {parseColor} from './utils/color'
import {isFrame, isText} from './utils/figmaUtils'
import {toSnakeCaseBySeparator} from './utils/string'

import type {TColorDocumentFrame, TColorReturnType, TColorSetFrame} from './types/color.type'
import type {TTypoDocumentFrame, TTypoFrame, TUsageFrame} from './types/typo.type'

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

export async function setTypo({accessToken}: {accessToken: string}) {
    return await fetchFromFigma({
        nodeId: TYPO_NODE_ID,
        accessToken,
        transform(document: TTypoDocumentFrame) {
            const usage =
                document.children.filter<TUsageFrame>(isFrame).filter(({name}) => name === 'Usage')?.[0].children || []

            return usage.filter<TTypoFrame>(isFrame).reduce(
                (obj, {name, children}) => ({
                    ...obj,
                    [toSnakeCaseBySeparator(name)]: children.filter(isText)?.[0].style,
                }),
                {},
            )
        },
    })
}

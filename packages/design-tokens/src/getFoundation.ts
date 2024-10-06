import {FILE_KEY, ICON_NODE_ID, TYPO_NODE_ID} from './config'
import {TImageResponse, TPaint} from './types/figma.type'
import {getFigmaApi, getFileNode, getFileNodeWithIds, getStyles, getSvgCodeFromUrl} from './utils/api'
import {rgbaToHex} from './utils/color'
import {isComponent, isFrame, isGroup, isText} from './utils/figmaUtils'
import {toSnakeCaseBySeparator} from './utils/string'
import {isFulfilled, isNonEmpty} from './utils/utils'

import type {TIconDocumentFrame, TSizeGroup, TSizeReturnType} from './types/icon.type'
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
    const styles = await getStyles(accessToken)

    const colorEntries = Object.entries(styles).filter(([, {styleType}]) => styleType === 'FILL')

    const ids = colorEntries.map(([nodeId]) => nodeId)

    const nodes = await getFileNodeWithIds(accessToken, ids)

    const nodeEntries = Object.entries(nodes).map(
        ([
            ,
            {
                document: {name, fills},
            },
        ]) => [name, fills] as [string, TPaint[]],
    )

    return nodeEntries.reduce(
        (colorSet, [name, fills]) => ({
            ...colorSet,
            [name.replace('/', '_')]: rgbaToHex(fills[0].color), // rgba -> hex로 변환
        }),
        {} as Record<string, string>,
    )
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

export async function setIcon({accessToken}: {accessToken: string}) {
    // SIZE 가져오기
    const sizeSet = await fetchFromFigma({
        nodeId: ICON_NODE_ID,
        accessToken,
        transform(document: TIconDocumentFrame): TSizeReturnType {
            const size = document.children.filter<TSizeGroup>(
                (child): child is TSizeGroup => isGroup<TSizeGroup>(child) || child.name === 'Size',
            )[0]

            return Object.fromEntries(
                size.children
                    .filter(isComponent)
                    .map((component) => {
                        const {width, height} = component.absoluteBoundingBox

                        return [
                            component.name.toUpperCase(),
                            {
                                width,
                                height,
                            },
                        ] satisfies [string, {width: number; height: number}]
                    })
                    .sort(([, {width: left}], [, {width: right}]) => {
                        return left - right
                    }),
            ) as TSizeReturnType
        },
    })

    // ICON 가져오기
    const iconSet = await getFileNode({
        nodeId: ICON_NODE_ID,
        accessToken,
        async transform(document: TIconDocumentFrame) {
            const components = document.children.filter(isComponent)

            const imageUrlMap = Object.fromEntries(components.map(({id, name}) => [id, name]))

            const res = await getFigmaApi().get<TImageResponse>(`/images/${FILE_KEY}`, {
                headers: {
                    'X-Figma-Token': accessToken,
                },
                params: {
                    ids: Object.keys(imageUrlMap)
                        .map((id) => decodeURIComponent(id))
                        .join(','),
                    format: 'svg',
                },
            })

            if (!res.data.images || res.data?.err) {
                throw new Error('icon image url을 가져오는 데 문제가 발생했습니다.')
            }

            const {images} = res.data

            const settledResult = await Promise.allSettled(
                Object.entries(images).map(async ([id, url]) => {
                    const code = await getSvgCodeFromUrl(url)

                    return [imageUrlMap[id], code] as [string, string]
                }),
            )

            return Object.fromEntries(
                settledResult
                    .filter(isFulfilled)
                    .map(({value}) => value)
                    .filter(isNonEmpty),
            )
        },
    })

    return {
        size: sizeSet,
        icon: iconSet,
    }
}

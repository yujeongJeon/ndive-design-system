import {FILE_KEY, ICON_NODE_ID} from './config'
import {IText, TImageResponse, TPaint, TTypeStyle} from './types/figma.type'
import {getFigmaApi, getFileNode, getFileNodeWithIds, getStyles, getSvgCodeFromUrl} from './utils/api'
import {rgbaToHex} from './utils/color'
import {isComponent, isGroup} from './utils/figmaUtils'
import {isFulfilled, isNonEmpty} from './utils/utils'

import type {TIconDocumentFrame, TSizeGroup, TSizeReturnType} from './types/icon.type'

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
    const styles = await getStyles(accessToken)

    const textEntries = Object.entries(styles).filter(([, {styleType}]) => styleType === 'TEXT')

    const ids = textEntries.map(([nodeId]) => nodeId)

    const nodes = await getFileNodeWithIds<IText>(accessToken, ids)

    const nodeEntries = Object.entries(nodes).map(
        ([
            ,
            {
                document: {name, style},
            },
        ]) => [name, style] as [string, TTypeStyle],
    )

    const toName = (name: string) => {
        const [, usage, weight] = name.split('/')

        return `${usage}_${weight}`
    }

    return nodeEntries.reduce(
        (typoSet, [name, style]) => ({
            ...typoSet,
            [toName(name)]: style,
        }),
        {} as Record<string, TTypeStyle>,
    )
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

import {IText, TPaint, TTypeStyle} from './types/figma.type'
import {getComponents, getFileNodeWithIds, getImageNodeWithIds, getStyles, getSvgCodeFromUrl} from './utils/api'
import {rgbaToHex} from './utils/color'
import {isFulfilled, isNonEmpty} from './utils/utils'

import type {TSizeReturnType} from './types/icon.type'

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
    const components = await getComponents(accessToken)

    const sizeIds = Object.entries(components)
        .filter(([, {name}]) => name.startsWith('icon/'))
        .map(([nodeId]) => nodeId)

    const sizeNodes = await getFileNodeWithIds(accessToken, sizeIds)

    const sizeSet = Object.entries(sizeNodes).reduce((sizeMap, [, {document}]) => {
        const {name, absoluteBoundingBox} = document
        return {
            ...sizeMap,
            [name.split('/').pop() || '']: {
                width: absoluteBoundingBox.width,
                height: absoluteBoundingBox.height,
            },
        }
    }, {} as TSizeReturnType)

    const iconMap = Object.fromEntries(
        Object.entries(components)
            .filter(([, {name}]) => name.startsWith('ic-'))
            .map(([nodeId, {name}]) => [nodeId, name]),
    )

    const iconNodes = await getImageNodeWithIds(accessToken, Object.keys(iconMap))

    if (!iconNodes.images || iconNodes?.err) {
        throw new Error('icon image url을 가져오는 데 문제가 발생했습니다.')
    }

    const settledResult = await Promise.allSettled(
        Object.entries(iconNodes.images).map(async ([id, url]) => {
            const code = await getSvgCodeFromUrl(url)

            return [iconMap[id], code] as [string, string]
        }),
    )

    const iconSet = Object.fromEntries(
        settledResult
            .filter(isFulfilled)
            .map(({value}) => value)
            .filter(isNonEmpty),
    )

    return {
        size: sizeSet,
        icon: iconSet,
    }
}

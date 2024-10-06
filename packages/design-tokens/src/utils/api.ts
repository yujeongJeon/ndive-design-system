import axios from 'axios'
import qs from 'qs'

import {FILE_KEY} from '../config/index'
import {FileResponse, ICommon, IFigmaDocument, TImageResponse} from '../types/figma.type'

const getFigmaApi = () =>
    axios.create({
        baseURL: 'https://api.figma.com/v1',
        paramsSerializer: (params) => {
            return qs.stringify(params, {arrayFormat: 'comma'})
        },
    })

export const getStyles = async (accessToken: string) => {
    if (!accessToken) {
        throw new Error('figma access token이 없습니다.')
    }

    const {data} = await getFigmaApi().get<FileResponse>(`/files/${FILE_KEY}`, {
        headers: {
            'X-Figma-Token': accessToken,
        },
    })

    return data.styles
}

export const getComponents = async (accessToken: string) => {
    if (!accessToken) {
        throw new Error('figma access token이 없습니다.')
    }

    const {data} = await getFigmaApi().get<FileResponse>(`/files/${FILE_KEY}`, {
        headers: {
            'X-Figma-Token': accessToken,
        },
    })

    return data.components
}

export const getFileNodeWithIds = async <T extends ICommon>(accessToken: string, ids: string[]) => {
    if (!accessToken) {
        throw new Error('figma access token이 없습니다.')
    }

    const {data} = await getFigmaApi().get<IFigmaDocument<T>>(`/files/${FILE_KEY}/nodes`, {
        headers: {
            'X-Figma-Token': accessToken,
        },
        params: {
            ids,
        },
    })

    return data.nodes
}

export const getImageNodeWithIds = async (accessToken: string, ids: string[]) => {
    if (!accessToken) {
        throw new Error('figma access token이 없습니다.')
    }

    const {data} = await getFigmaApi().get<TImageResponse>(`/images/${FILE_KEY}`, {
        headers: {
            'X-Figma-Token': accessToken,
        },
        params: {
            ids,
            format: 'svg',
        },
    })

    return data
}

export const getSvgCodeFromUrl = async (url: string) => {
    const res = await axios.get(url, {
        headers: {
            'Content-Type': 'text/html',
        },
    })
    const svgCode: string = res.data

    return svgCode
}

import axios, {isAxiosError} from 'axios'
import qs from 'qs'

import {FILE_KEY} from '../config/index'
import {FileResponse, ICommon, IFigmaDocument, IFrame} from '../types/figma.type'

export const getFigmaApi = () =>
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

export const getFileNode = async <T>({
    nodeId,
    accessToken,
    transform,
}: {
    nodeId: string
    accessToken: string
    transform(data: IFrame): T
}): Promise<T> => {
    try {
        if (!accessToken) {
            throw new Error('figma access token이 없습니다.')
        }

        const res = await getFigmaApi().get(`/files/${FILE_KEY}/nodes`, {
            params: {
                ids: nodeId,
            },
            headers: {
                'X-Figma-Token': accessToken,
            },
            transformResponse: [
                function (data) {
                    const figmaContent: IFigmaDocument = JSON.parse(data)
                    const document = figmaContent.nodes[nodeId].document
                    return transform(document)
                },
            ],
        })

        return res.data
    } catch (error) {
        if (isAxiosError(error) || error instanceof Error) {
            // eslint-disable-next-line no-console
            console.error(error)
        }

        throw error
    }
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

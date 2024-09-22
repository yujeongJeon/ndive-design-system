import axios, {isAxiosError} from 'axios'

import {FILE_KEY} from '../config/index'
import {IFigmaDocument, IFrame} from '../types/figma.type'

export const getFigmaApi = () =>
    axios.create({
        baseURL: 'https://api.figma.com/v1',
    })

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

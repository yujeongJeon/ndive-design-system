import axios, {isAxiosError} from 'axios'
import {IFigmaDocument, IFrame} from 'src/types/figma.type'

import {FIGMA_TOKEN} from '../config'

export const getFigmaApi = () =>
    axios.create({
        baseURL: 'https://api.figma.com/v1',
    })

export const getFileNode = async ({nodeId, transform}: {nodeId: string; transform(data: IFrame): string}) => {
    try {
        if (!FIGMA_TOKEN) {
            throw new Error('figma access token이 없습니다. .env에 설정해주세요.')
        }

        const res = await getFigmaApi().get('/files/IjtwzoijQFoW2zEiO4N8BU/nodes', {
            params: {
                ids: nodeId,
            },
            headers: {
                'X-Figma-Token': FIGMA_TOKEN,
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

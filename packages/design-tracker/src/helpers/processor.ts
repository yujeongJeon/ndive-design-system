import {sortObjectKeysByValue} from '../utils'

import type {forEachComponent} from '../utils'

const countComponentsAndPropsProcessor = ({
    forEachComponentResult,
    output,
}: {
    forEachComponentResult: ReturnType<typeof forEachComponent>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    output: (data: any) => void
}) => {
    let result: {
        [key in string]: {
            instances: number
            props: Record<string, number>
        }
    } = {}

    forEachComponentResult(({componentName, component}) => {
        const {instances} = component

        if (!instances) {
            return
        }

        result[componentName] = {
            instances: instances.length,
            props: {},
        }

        instances.forEach((instance: {props: Record<string, unknown>}) => {
            for (const prop in instance.props) {
                if (result[componentName].props[prop] === undefined) {
                    result[componentName].props[prop] = 0
                }

                result[componentName].props[prop] += 1
            }
        })

        result[componentName].props = sortObjectKeysByValue(result[componentName].props)
    })

    result = sortObjectKeysByValue(result, (component) => component.instances)

    output(result)

    return result
}

export default countComponentsAndPropsProcessor

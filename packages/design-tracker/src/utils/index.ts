import path from 'node:path'

import {IConfig} from './loadConfig'

/* eslint-disable @typescript-eslint/no-explicit-any */
export const forEachComponent =
    (report: any) => (callback: (args: {componentName: string; component: any}) => void) => {
        const queue: {
            namePrefix: string
            componentsMap: any
        }[] = [{namePrefix: '', componentsMap: report}]

        while (queue.length > 0) {
            const first = queue.shift()

            for (const componentName in first?.componentsMap) {
                const component = first?.componentsMap[componentName]
                const {components} = component
                const fullComponentName = `${first?.namePrefix}${componentName}`

                callback({componentName: fullComponentName, component})

                if (components) {
                    queue.push({
                        namePrefix: `${fullComponentName}.`,
                        componentsMap: components,
                    })
                }
            }
        }
    }

export function sortObjectKeysByValue(obj: Record<string, any>, mapValue: (value: any) => any = (value: any) => value) {
    const entries = Object.entries(obj)

    entries.sort(([key1, value1], [key2, value2]) => {
        const value1ToCompare = mapValue(value1)
        const value2ToCompare = mapValue(value2)

        return value1ToCompare > value2ToCompare || (value1ToCompare === value2ToCompare && key1 <= key2) ? -1 : 1
    })

    return entries.reduce((acc, [key, value]) => {
        acc[key] = value
        return acc
    }, {} as Record<string, any>)
}

export function getExcludeFn(
    configExclude?: Pick<IConfig, 'exclude'>['exclude'],
): (dirName: string, dirPath: string) => boolean {
    if (Array.isArray(configExclude)) {
        return (dir: string) => {
            for (let i = 0, len = configExclude.length; i < len; i++) {
                const item = configExclude[i]

                if ((typeof item === 'string' && item === dir) || (item instanceof RegExp && item.test(dir))) {
                    return true
                }
            }

            return false
        }
    }

    if (typeof configExclude === 'function') {
        return configExclude
    }

    return () => false
}

export function getAbsolutePath(pathname: string, dirPath = process.cwd()) {
    return path.isAbsolute(pathname) ? pathname : path.resolve(dirPath, pathname)
}

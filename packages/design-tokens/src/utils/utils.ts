export const isNonEmpty = (s: unknown) => {
    if (Array.isArray(s)) {
        return s.length > 0
    }
    if (s === null || s === undefined) {
        return false
    }
    if (typeof s === 'object') {
        if (s instanceof Map || s instanceof Set) {
            return s.size > 0
        }
        return Object.keys(s).length > 0
    }
    return !!s
}

export const isFulfilled = <T>(result: PromiseSettledResult<T>): result is PromiseFulfilledResult<T> =>
    result.status === 'fulfilled'

export const uniq = <T>(array: T[]): T[] => {
    const seen = new Set<T>()

    return array.filter((item) => {
        // `item`이 string 타입일 경우 toLowerCase() 적용
        const normalizedItem = (typeof item === 'string' ? item.toLowerCase() : item) as T

        if (seen.has(normalizedItem)) {
            return false
        }

        seen.add(normalizedItem)
        return true
    })
}

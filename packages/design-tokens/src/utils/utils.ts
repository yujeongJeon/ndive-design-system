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

function isObject(o: unknown): o is object {
    return Object.prototype.toString.call(o) === '[object Object]'
}

export function isPlainObject(o: unknown) {
    if (!isObject(o)) {
        return false
    }

    const ctor = (o as Record<string, unknown>).constructor
    if (ctor === undefined) {
        return true
    }

    const prot = ctor.prototype
    if (!isObject(prot)) {
        return false
    }

    if (!Object.prototype.hasOwnProperty.call(prot, 'isPrototypeOf')) {
        return false
    }

    return true
}

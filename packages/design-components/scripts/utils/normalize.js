import path from 'node:path'

export function normalize(dirname, relativePath) {
    return path.resolve(dirname, relativePath)
}

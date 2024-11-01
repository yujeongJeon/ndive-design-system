import path from 'node:path'

export function getAbsolutePath(pathname: string, dirPath = process.cwd()) {
    return path.isAbsolute(pathname) ? pathname : path.resolve(dirPath, pathname)
}

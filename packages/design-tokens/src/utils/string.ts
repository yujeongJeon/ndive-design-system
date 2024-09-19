const removeFirstUnderline = (str: string) => (str[0] === '_' ? str.slice(1) : str)

const deleteExcludeWord = (str: string, excludeStr?: string) => {
    if (!excludeStr) {
        return str
    }
    const index = str.toUpperCase().indexOf(excludeStr.toUpperCase())
    return index >= 0 ? removeFirstUnderline(str.replace(excludeStr, '')) : str
}

export const camelToSnakeCase = (
    str: string,
    opts?: {
        exclude: string
    },
) => {
    const trimmedStr = str.replace(/\s+/, '')
    return trimmedStr.includes('_')
        ? deleteExcludeWord(trimmedStr, opts?.exclude).toUpperCase()
        : deleteExcludeWord(trimmedStr, opts?.exclude)
              .replace(/[A-Z]/g, (c) => {
                  return '_' + c.toLowerCase()
              })
              .slice(1)
              .toUpperCase()
}

export const toSnakeCaseBySeparator = (str: string, separator = '/') =>
    str
        .split(separator)
        .map((s) => s.toUpperCase())
        .join('_')

export const snakeToPascalString = (str: string) =>
    str.charAt(0).toUpperCase() +
    str.slice(1).replace(/(_[A-Za-z]{1})+/g, function (x) {
        return x[1].toUpperCase()
    })

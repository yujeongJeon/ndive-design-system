export function snakeToPascal(snake) {
    return snake.replace(/(_\w)/g, function (match) {
        return match[1].toUpperCase()
    })
}

export function pascalToCamel(str) {
    if (str.length === 0) {
        return str
    }
    return str.charAt(0).toLowerCase() + str.slice(1)
}

export function kebabToPascal(str) {
    return str
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('')
}

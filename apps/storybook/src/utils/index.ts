export const hex2rgb = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)

    return [r, g, b] as [number, number, number]
}

/**
 * @see https://www.w3.org/TR/WCAG20/#relativeluminancedef
 */
export const determineFontColorByLuminance = (r: number, g: number, b: number) => {
    const getLuminance = (c: number): number => {
        const normalized = c / 255.0
        return normalized <= 0.04045 ? normalized / 12.92 : Math.pow((normalized + 0.055) / 1.055, 2.4)
    }

    const luminanceR = getLuminance(r)
    const luminanceG = getLuminance(g)
    const luminanceB = getLuminance(b)

    const luminance = 0.2126 * luminanceR + 0.7152 * luminanceG + 0.0722 * luminanceB

    return luminance > 0.179 ? '#000000' : '#ffffff'
}

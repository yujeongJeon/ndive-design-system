import {IFrame, TColor} from '../types/figma.type'
import {isVector} from './figmaUtils'
import {camelToSnakeCase} from './string'

export const normalizeToHex = (colorNumber: number) => Math.round(colorNumber * 255)

export const percentageToHex = (percentage: number) => normalizeToHex(percentage).toString(16).padStart(2, '0')

export const percentageToRgba = (color: TColor): TColor =>
    Object.entries(color).reduce(
        (rgba, [key, value]) => ({
            ...rgba,
            ...(key === 'a'
                ? {
                      [key]: value,
                  }
                : {
                      [key]: normalizeToHex(value),
                  }),
        }),
        {} as TColor,
    )

export const rgbaToHex = (color: TColor) => {
    const r = percentageToHex(color.r)
    const g = percentageToHex(color.g)
    const b = percentageToHex(color.b)

    return `#${r}${g}${b}`
}

export const parseColor = (children: IFrame[]) =>
    children
        .map(({name, children: subChildren}) => ({
            name: camelToSnakeCase(name).toUpperCase(),
            colors: subChildren.filter(isVector)[0].fills[0].color, // VECTOR 객체의 fills 속성을 추출
        }))
        .reduce(
            (colorSet, {name, colors}) => ({
                ...colorSet,
                [name]: rgbaToHex(colors), // rgba -> hex로 변환
            }),
            {},
        )

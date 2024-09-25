import {IFrame} from './figma.type'

type TFontFamily = 'Pretendard'
type TFontUsageType = 'Display' | 'Head1' | 'Head2' | 'Head3' | 'Head4' | 'Body1' | 'Body2' | 'Caption'
type TFontWeight = 'Bold' | 'Medium'

export type TPossibleTypoName = `${TFontFamily}/${TFontUsageType}/${TFontWeight}`
export type TTypoKey = `${Uppercase<TFontFamily>}_${Uppercase<TFontUsageType>}_${Uppercase<TFontWeight>}`

export type TUsageFrame = IFrame<'Usage', TPossibleTypoName>

export type TTypoFrame = IFrame<TPossibleTypoName>

export type TTypoDocumentFrame = IFrame<'Font', 'Usage', TPossibleTypoName, IFrame<'Usage', TPossibleTypoName>>

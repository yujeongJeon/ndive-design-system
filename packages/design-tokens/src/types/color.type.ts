import {IFrame} from './figma.type'

export type TColorSetName = 'Grayscale' | 'Sub' | 'Brand' | 'Background' | 'Border'

export type TColorSetFrame = IFrame<TColorSetName>

export type TColorDocumentFrame = IFrame<'Color', TColorSetName, string, IFrame<TColorSetName>>

export type TColorReturnType = Record<Uppercase<TColorSetName>, Record<string, string>>

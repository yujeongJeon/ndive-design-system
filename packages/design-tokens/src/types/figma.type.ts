// https://www.figma.com/developers/api#node-types

export interface TColor {
    r: number
    g: number
    b: number
    a: number
}

interface TPaint {
    type:
        | 'SOLID'
        | 'GRADIENT_LINEAR'
        | 'GRADIENT_RADIAL'
        | 'GRADIENT_ANGULAR'
        | 'GRADIENT_DIAMOND'
        | 'IMAGE'
        | 'EMOJI'
        | 'VIDEO'
    color: TColor
}

export interface TTypeStyle {
    fontFamily: string
    fontPostScriptName: string
    fontWeight: number
    fontSize: number
    textAlignHorizontal: string
    textAlignVertical: string
    letterSpacing: number
    lineHeightPx: number
}

export interface TRectangle {
    x: number
    y: number
    width: number
    height: number
}

export interface IFigmaDocument<T extends IFrame = IFrame> {
    nodes: Record<
        string,
        {
            document: T
        }
    >
}

export type TNodeType = 'TEXT' | 'VECTOR' | 'COMPONENT' | 'COMPONENT_SET' | 'FRAME' | 'GROUP'

export interface ICommon<Name extends string = string> {
    id: string
    name: Name
    type: TNodeType
    fills: TPaint[]
    absoluteBoundingBox: TRectangle
    absoluteRenderBounds: TRectangle
}

type TFrameOrGroup<Name extends string, SubName extends string> = IFrame<Name, SubName> | IGroup<Name, SubName>

export interface IFrame<
    Name extends string = string,
    NameSet extends string = string,
    Nested extends string = string,
    ChildrenNode = TFrameOrGroup<NameSet, Nested>,
> extends ICommon<Name> {
    type: 'FRAME'
    children: (ICommon | ChildrenNode)[]
}

export interface IVector<Name extends string = string> extends ICommon<Name> {
    type: 'VECTOR'
}

export interface IText<Name extends string = string> extends ICommon<Name> {
    type: 'TEXT'
    style: TTypeStyle
}

export interface IGroup<Name extends string = string, NameSet extends string = string> extends ICommon<Name> {
    type: 'GROUP'
    children: ICommon<NameSet>[]
}

export interface IComponent extends ICommon {
    type: 'COMPONENT'
    children: ICommon[]
}

export interface TImageResponse {
    err?: number
    images: Record<string, string>
}

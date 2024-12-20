// https://www.figma.com/developers/api#node-types

export interface TColor {
    r: number
    g: number
    b: number
    a: number
}

export interface TPaint {
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

export interface IFigmaDocument<T = IFrame> {
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

type TChildrenNode<Name extends string, SubName extends string> = IFrame<Name, SubName> | IGroup<Name, SubName>

export interface IFrame<
    Name extends string = string,
    NameSet extends string = string,
    Nested extends string = string,
    ChildrenNode = TChildrenNode<NameSet, Nested>,
> extends ICommon<Name> {
    type: 'FRAME'
    children: (ICommon | ChildrenNode)[]
}

export interface IText<Name extends string = string> extends ICommon<Name> {
    type: 'TEXT'
    style: TTypeStyle
}

export interface IGroup<Name extends string = string, NameSet extends string = string> extends ICommon<Name> {
    type: 'GROUP'
    children: ICommon<NameSet>[]
}

export interface TImageResponse {
    err?: number
    images: Record<string, string>
}

type NodeId = string

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type CommonNodeData = {
    key: string
    name: string
    description: string
}

export interface FileResponse {
    styles: Record<
        NodeId,
        CommonNodeData & {
            styleType: 'FILL' | 'TEXT' | 'EFFECT' | 'GRID'
            remote: boolean
        }
    >
    components: Record<
        NodeId,
        CommonNodeData & {
            remote: boolean
            documentationLinks: string[]
        }
    >
    componentSets: Record<
        NodeId,
        CommonNodeData & {
            documentationLinks: string[]
        }
    >
}

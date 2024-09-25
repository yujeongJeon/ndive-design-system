import {ICommon, IComponent, IFrame, IGroup, IText, TNodeType, IVector} from '../types/figma.type'

function isNode<T extends ICommon>(child: ICommon, nodeName: TNodeType): child is T {
    return child.type === nodeName
}

export const isFrame = <T extends IFrame>(child: ICommon): child is T => isNode<T>(child, 'FRAME')

export const isGroup = <T extends IGroup>(child: ICommon): child is T => isNode<T>(child, 'GROUP')

export const isComponent = <T extends IComponent>(child: ICommon): child is T => isNode<T>(child, 'COMPONENT')

export const isText = <T extends IText>(child: ICommon): child is T => isNode<T>(child, 'TEXT')

export const isVector = <T extends IVector>(child: ICommon): child is T => isNode<T>(child, 'VECTOR')

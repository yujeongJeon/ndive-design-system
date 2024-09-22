import {IFrame, IGroup} from './figma.type'

type TSizeName = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'

export type TIconDocumentFrame = IFrame<'Icon', 'Size', TSizeName, IGroup<'Size', TSizeName>>

export type TSizeGroup = IGroup<'Size', TSizeName>

export type TSizeReturnType = {
    [key in Uppercase<TSizeName>]: {
        width: number
        height: number
    }
}

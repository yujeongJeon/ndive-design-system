import {ReactNode} from 'react'

export interface TModalCommonProps {
    title: string
    content: ReactNode
    isShow: boolean
    onClose: () => void
    onDestroy?: () => void
}

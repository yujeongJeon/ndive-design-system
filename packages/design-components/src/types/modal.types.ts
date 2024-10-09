import {ReactNode} from 'react'

export interface TModalCommonProps {
    title: string
    content: ReactNode
    onDestroy?: () => void
}

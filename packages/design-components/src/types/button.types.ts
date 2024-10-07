import {HTMLAttributes, MouseEventHandler, ReactNode} from 'react'

export interface CommonButtonProps {
    text: string
    fillType: 'fill' | 'line'
    attributes?: Omit<HTMLAttributes<HTMLButtonElement>, 'onClick'>
    onClick?: MouseEventHandler<HTMLButtonElement>
    icon?: {
        direction: 'front' | 'back'
        component: ReactNode
    }
    size: 'small' | 'medium' | 'large'
}

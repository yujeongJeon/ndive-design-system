import {HTMLAttributes, MouseEventHandler, ReactNode} from 'react'

export interface TButtonCommonProps {
    text: string
    fillType: 'fill' | 'line'
    attributes?: Omit<HTMLAttributes<HTMLButtonElement>, 'onClick' | 'disabled'>
    disabled?: boolean
    onClick?: MouseEventHandler<HTMLButtonElement>
    icon?: {
        direction: 'front' | 'back'
        component: ReactNode
    }
    size: 'small' | 'medium' | 'large'
}

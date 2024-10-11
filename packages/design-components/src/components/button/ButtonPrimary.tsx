import classnames from 'classnames/bind'

import {TButtonCommonProps} from '$/types/button.types'
import {TPrimaryColors} from '$/types/color.types'

import styles from './ButtonPrimary.module.scss'

const cx = classnames.bind(styles)

export type TButtonPrimaryProps = TButtonCommonProps & {
    color: Exclude<TPrimaryColors, 'gray'>
}

export default function ButtonPrimary({
    text,
    onClick,
    attributes,
    color,
    fillType,
    size,
    disabled,
    icon,
    isWide = false,
}: TButtonPrimaryProps) {
    const hasIcon = !!icon

    const IconComponent = icon?.component

    return (
        <button
            className={cx('button', fillType, `size-${size}`, `color-${color}`, {wide: isWide})}
            onClick={onClick}
            disabled={disabled}
            {...attributes}
        >
            {hasIcon && icon.direction === 'front' && (
                <span className={cx('icon', icon.direction)}>{IconComponent}</span>
            )}
            {text}
            {hasIcon && icon.direction === 'back' && (
                <span className={cx('icon', icon.direction)}>{IconComponent}</span>
            )}
        </button>
    )
}

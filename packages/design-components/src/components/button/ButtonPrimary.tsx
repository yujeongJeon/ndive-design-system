import classnames from 'classnames/bind'

import {CommonButtonProps} from '$/types/button.types'
import {TPrimaryColors} from '$/types/color.types'

import styles from './ButtonPrimary.module.scss'

const cx = classnames.bind(styles)

export default function ButtonPrimary({
    text,
    onClick,
    attributes,
    color,
    fillType,
    size,
    disabled,
    icon,
}: CommonButtonProps & {
    color: Exclude<TPrimaryColors, 'gray'>
}) {
    const hasIcon = !!icon

    const IconComponent = icon?.component

    return (
        <button
            className={cx('button', fillType, `size-${size}`, `color-${color}`)}
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

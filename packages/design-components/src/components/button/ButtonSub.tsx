import classnames from 'classnames/bind'

import {TButtonCommonProps} from '$/types/button.types'

import styles from './ButtonSub.module.scss'

const cx = classnames.bind(styles)

export default function ButtonSub({text, onClick, attributes, disabled, fillType, size, icon}: TButtonCommonProps) {
    const hasIcon = !!icon

    const IconComponent = icon?.component

    return (
        <button
            className={cx('button', fillType, `size-${size}`)}
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

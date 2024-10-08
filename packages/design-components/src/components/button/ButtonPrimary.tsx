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
}: CommonButtonProps & {
    color: Exclude<TPrimaryColors, 'gray'>
}) {
    return (
        <button className={cx('button', fillType, `size-${size}`, `color-${color}`)} onClick={onClick} {...attributes}>
            {text}
        </button>
    )
}

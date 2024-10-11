import {MouseEventHandler} from 'react'

import classnames from 'classnames/bind'

import styles from './Overlay.module.scss'

const cx = classnames.bind(styles)

export default function Overlay({isShow, onClick}: {isShow: boolean; onClick: MouseEventHandler<HTMLDivElement>}) {
    return <div className={cx('article', {show: isShow})} onClick={onClick} />
}

import {ReactNode} from 'react'

import classnames from 'classnames/bind'

import styles from './Footer.module.scss'

const cx = classnames.bind(styles)

export default function Footer({children}: {children: ReactNode}) {
    return <div className={cx('footer')}>{children}</div>
}

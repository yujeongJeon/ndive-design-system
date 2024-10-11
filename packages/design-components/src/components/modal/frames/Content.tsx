import {ReactNode} from 'react'

import classnames from 'classnames/bind'

import styles from './Content.module.scss'

const cx = classnames.bind(styles)

export default function Content({children}: {children: ReactNode}) {
    return <div className={cx('content')}>{children}</div>
}

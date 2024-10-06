import classnames from 'classnames/bind'

import styles from './Sample.module.scss'

const cx = classnames.bind(styles)

export default function Sample() {
    return <div className={cx('article')}>Sample Component</div>
}

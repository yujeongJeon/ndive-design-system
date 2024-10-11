import classnames from 'classnames/bind'

import styles from '$/components/modal/frames/TItle.module.scss'

const cx = classnames.bind(styles)

export default function Title({text}: {text: string}) {
    return <div className={cx('title')}>{text}</div>
}

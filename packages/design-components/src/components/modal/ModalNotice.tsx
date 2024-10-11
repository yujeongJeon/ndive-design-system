import {useLayoutEffect, useState} from 'react'

import classnames from 'classnames/bind'

import ButtonPrimary, {TButtonPrimaryProps} from '$/components/button/ButtonPrimary'
import Content from '$/components/modal/frames/Content'
import Footer from '$/components/modal/frames/Footer'
import Overlay from '$/components/modal/frames/Overlay'
import Title from '$/components/modal/frames/Title'
import {TModalCommonProps} from '$/types/modal.types'

import styles from './Modal.module.scss'

const cx = classnames.bind(styles)

export default function ModalNotice({
    title,
    content,
    isShow,
    onClose,
    button,
}: TModalCommonProps & {
    button: Omit<TButtonPrimaryProps, 'isWide'>
}) {
    const [visible, setVisible] = useState(false)

    const handleTransitionEnd = () => {
        onClose()
    }

    useLayoutEffect(() => {
        setVisible(isShow)
    }, [isShow])

    return (
        <>
            <div className={cx('article')} onTransitionEnd={handleTransitionEnd}>
                {visible && (
                    <div className={cx('container')}>
                        <Title text={title} />
                        <Content>{content}</Content>
                        <Footer>
                            <ButtonPrimary isWide {...button} />
                        </Footer>
                    </div>
                )}
                <Overlay onClick={onClose} isShow={isShow} />
            </div>
        </>
    )
}

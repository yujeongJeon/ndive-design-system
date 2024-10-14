import classnames from 'classnames/bind'

import ButtonPrimary, {TButtonPrimaryProps} from '$/components/button/ButtonPrimary'
import {ModalContextProvider, useModalContext} from '$/components/modal/contexts/ModalContext'
import Content from '$/components/modal/frames/Content'
import Footer from '$/components/modal/frames/Footer'
import Overlay from '$/components/modal/frames/Overlay'
import Title from '$/components/modal/frames/Title'
import {TModalCommonProps} from '$/types/modal.types'

import styles from './Modal.module.scss'

const cx = classnames.bind(styles)

type TModalConfirmProps = TModalCommonProps & {
    buttons: {
        left: Omit<TButtonPrimaryProps, 'isWide'>
        right: Omit<TButtonPrimaryProps, 'isWide'>
    }
}

function ModalConfirmWrapper({isShow, title, content, onClose, buttons: {left, right}}: TModalConfirmProps) {
    const {isRendered, unmount} = useModalContext()

    const handleTransitionEnd = () => {
        unmount()
    }

    if (!isRendered) {
        return null
    }

    return (
        <div className={cx('article')} onTransitionEnd={handleTransitionEnd}>
            {isShow && (
                <div className={cx('container')}>
                    <Title text={title} />
                    <Content>{content}</Content>
                    <Footer>
                        <div className={cx('button-group')}>
                            <ButtonPrimary isWide {...left} />
                            <ButtonPrimary isWide {...right} />
                        </div>
                    </Footer>
                </div>
            )}
            <Overlay onClick={onClose} isShow={isShow} />
        </div>
    )
}

export default function ModalConfirm(props: TModalConfirmProps) {
    return (
        <ModalContextProvider isShow={props.isShow}>
            <ModalConfirmWrapper {...props} />
        </ModalContextProvider>
    )
}

import {TModalCommonProps} from '$/types/modal.types'

import {TButtonPrimaryProps} from '../button/ButtonPrimary'
import Content from './frames/Content'
import Footer from './frames/Footer'
import Overlay from './frames/Overlay'
import Title from './frames/Title'

export default function ModalConfirm(
    _: TModalCommonProps & {
        buttons: {
            left: TButtonPrimaryProps
            right: TButtonPrimaryProps
        }
    },
) {
    return (
        <>
            <div>
                <Title />
                <Content />
                <Footer>버튼 두개</Footer>
            </div>
            <Overlay />
        </>
    )
}

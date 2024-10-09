import {TModalCommonProps} from '$/types/modal.types'

import {TButtonPrimaryProps} from '../button/ButtonPrimary'
import Content from './frames/Content'
import Footer from './frames/Footer'
import Overlay from './frames/Overlay'
import Title from './frames/Title'

export default function ModalNotice(
    _: TModalCommonProps & {
        button: TButtonPrimaryProps
    },
) {
    return (
        <>
            <div>
                <Title />
                <Content />
                <Footer>버튼 한개 (width: 100%)</Footer>
            </div>
            <Overlay />
        </>
    )
}

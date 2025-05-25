import {useState} from 'react'

import ButtonPrimary from '@ndive/design-components/ButtonPrimary'
import ButtonSub from '@ndive/design-components/ButtonSub'
import IconAdd from '@ndive/design-components/icons/IconAdd'
import IconTrash from '@ndive/design-components/icons/IconTrash'
import {SIZE} from '@ndive/design-components/size'

import Container from './Container'

export default function App() {
    const [isShow, setIsShow] = useState(false)
    return (
        <div>
            <ButtonPrimary
                text="장바구니 추가"
                size="medium"
                fillType="fill"
                color="mainGreen"
                icon={{
                    direction: 'front',
                    component: <IconAdd fill="#fff" {...SIZE.s} />,
                }}
                onClick={() => setIsShow(true)}
            />
            <ButtonSub
                text="장바구니에서 제거"
                size="medium"
                fillType="fill"
                icon={{
                    direction: 'front',
                    component: <IconTrash fill="#fff" {...SIZE.s} />,
                }}
            />
            <Container isShow={isShow} onClose={() => setIsShow(false)} />
        </div>
    )
}

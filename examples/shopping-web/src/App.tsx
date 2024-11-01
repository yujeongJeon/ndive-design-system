import {useState} from 'react'

import {ButtonPrimary, ButtonSub, SIZE} from '@ndive/design-components'
import {IconAdd, IconTrash} from '@ndive/design-components/icons'

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

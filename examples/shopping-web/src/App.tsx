import {ButtonPrimary, ButtonSub, IconAdd, IconTrash} from '@ndive/design-components'

import Container from './Container'

export default function App() {
    return (
        <div>
            <ButtonPrimary
                text="장바구니 추가"
                size="medium"
                fillType="fill"
                color="mainGreen"
                icon={{
                    direction: 'front',
                    component: <IconAdd fill="#fff" width={16} height={16} />,
                }}
            />
            <ButtonSub
                text="장바구니에서 제거"
                size="medium"
                fillType="fill"
                icon={{
                    direction: 'front',
                    component: <IconTrash fill="#fff" width={16} height={16} />,
                }}
            />
            <Container />
        </div>
    )
}

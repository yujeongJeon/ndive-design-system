import {ButtonPrimary, ModalNotice} from '@ndive/design-components'

export default function Container({isShow, onClose}: {isShow: boolean; onClose: () => void}) {
    return (
        <ModalNotice
            isShow={isShow}
            title="장바구니에 상품을 추가했습니다."
            content={
                <>
                    <ButtonPrimary text="자세히 보기" fillType="line" color="mainYellow" size="small" />
                </>
            }
            button={{
                text: '더 살펴보기',
                fillType: 'fill',
                color: 'mainGreen',
                size: 'medium',
                onClick: onClose,
            }}
            onClose={onClose}
        />
    )
}

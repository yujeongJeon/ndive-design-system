import {ButtonPrimary, ModalNotice} from '@ndive/design-components'

export default function Container() {
    return (
        <ModalNotice
            isShow={false}
            title="제목"
            content={
                <>
                    <ButtonPrimary text="자세히 보기" fillType="line" color="mainYellow" size="small" />
                </>
            }
            button={{
                text: '확인',
                fillType: 'fill',
                color: 'mainGreen',
                size: 'medium',
            }}
            onClose={() => {}}
        />
    )
}

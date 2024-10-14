import {ModalConfirm as ModalConfirmComponent} from '@ndive/design-components'

import type {Meta, StoryObj} from '@storybook/react'

export default {
    title: 'Components/Modal',
    component: ModalConfirmComponent,
} satisfies Meta<typeof ModalConfirmComponent>

type Story = StoryObj<typeof ModalConfirmComponent>

export const ModalConfirm: Story = {
    args: {
        title: '비밀번호를 변경하시겠어요?',
        content: (
            <>
                비밀번호를 3개월 주기로 변경하면
                <br />내 계정이 안전하게 보호돼요!
            </>
        ),
        isShow: true,
        onClose: () => {},
        buttons: {
            left: {
                text: '변경하기',
                fillType: 'fill',
                color: 'mainGreen',
                size: 'small',
            },
            right: {
                text: '다음에 변경하기',
                fillType: 'line',
                color: 'mainGreen',
                size: 'small',
            },
        },
    },
    argTypes: {
        isShow: {
            control: {type: 'boolean'},
        },
    },
}

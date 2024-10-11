import {ModalNotice as ModalNoticeComponent} from '@ndive/design-components'

import type {Meta, StoryObj} from '@storybook/react'

import '@ndive/design-components/styles'

export default {
    title: 'Modal',
    component: ModalNoticeComponent,
} satisfies Meta<typeof ModalNoticeComponent>

type Story = StoryObj<typeof ModalNoticeComponent>

export const ModalNotice: Story = {
    args: {
        title: '로그인이 필요한 서비스입니다.',
        content: '로그인 후 간편하게 이용하세요!',
        isShow: true,
        onClose: () => {},
        button: {
            text: '로그인',
            fillType: 'fill',
            color: 'mainGreen',
            size: 'medium',
        },
    },
    argTypes: {
        isShow: {
            control: {type: 'boolean'},
        },
    },
}

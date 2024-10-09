import {ButtonSub as ButtonSubComponent, IconAdd} from '@ndive/design-components'

import type {Meta, StoryObj} from '@storybook/react'

import '@ndive/design-components/styles'

export default {
    title: 'Button',
    component: ButtonSubComponent,
} satisfies Meta<typeof ButtonSubComponent>

type Story = StoryObj<typeof ButtonSubComponent>

export const ButtonSub: Story = {
    args: {
        text: '버튼',
        fillType: 'fill',
        size: 'small',
        disabled: false,
        icon: {
            direction: 'front',
            component: <IconAdd width={16} height={16} fill={'#fff'} />,
        },
    },
    argTypes: {
        fillType: {
            control: {type: 'radio'},
            options: ['fill', 'line'],
        },
        size: {
            control: {type: 'radio'},
            options: ['small', 'medium', 'large'],
        },
        disabled: {
            control: {type: 'boolean'},
        },
    },
}

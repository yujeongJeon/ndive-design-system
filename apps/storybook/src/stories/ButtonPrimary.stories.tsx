import {ButtonPrimary as ButtonPrimaryComponent, IconAdd} from '@ndive/design-components'

import type {Meta, StoryObj} from '@storybook/react'

import '@ndive/design-components/styles'

export default {
    title: 'Button',
    component: ButtonPrimaryComponent,
} satisfies Meta<typeof ButtonPrimaryComponent>

type Story = StoryObj<typeof ButtonPrimaryComponent>

export const ButtonPrimary: Story = {
    args: {
        text: '버튼',
        color: 'mainGreen',
        fillType: 'fill',
        size: 'small',
        disabled: false,
        icon: {
            direction: 'front',
            component: <IconAdd width={16} height={16} fill={'#fff'} />,
        },
    },
    argTypes: {
        color: {
            control: {
                type: 'select',
            },
            options: ['mainGreen', 'mainYellow', 'red', 'teal'],
        },
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

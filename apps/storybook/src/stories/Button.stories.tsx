import {ButtonPrimary} from '@ndive/design-components'

import type {Meta, StoryObj} from '@storybook/react'

import '@ndive/design-components/styles'

export default {
    title: 'Sample',
    component: ButtonPrimary,
} satisfies Meta<typeof ButtonPrimary>

type Story = StoryObj<typeof ButtonPrimary>

export const FirstStory: Story = {
    args: {
        text: '버튼',
        color: 'mainGreen',
        fillType: 'fill',
        size: 'small',
    },
}

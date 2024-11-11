import type {StorybookConfig} from '@storybook/react-vite'
import path from 'node:path'

export default {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    framework: {
        name: '@storybook/react-vite',
        options: {
            builder: {
                viteConfigPath: path.resolve(__dirname, '../vite.config.ts'),
            },
        },
    },
    core: {
        disableTelemetry: true,
    },
} satisfies StorybookConfig

import type {StorybookConfig} from '@storybook/react-vite'

export default {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    framework: {
        name: '@storybook/react-vite',
        options: {
            builder: {
                viteConfigPath: './vite.config.ts',
            },
        },
    },
    core: {
        disableTelemetry: true,
    },
} satisfies StorybookConfig

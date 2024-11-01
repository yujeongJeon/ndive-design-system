import meowHelp from 'cli-meow-help'
import meow from 'meow'

const flags = {
    config: {
        desc: 'Path to config file',
        type: 'string' as const,
        default: './ndive-design-tracker.js',
        shortFlag: '-c',
        examples: [
            '-c /path/to/ndive-design-tracker.config.js',
            '-c /path/to/.ndive-design-tracker.(rc|json|yaml|yml)',
        ],
        isRequired: false,
    },
    tsconfig: {
        desc: '/path/to/tsconfig.json',
        type: 'string' as const,
        shortFlag: '-t',
        default: './tsconfig.json',
        isRequired: false,
    },
    verbose: {
        desc: 'show more information about the transform process.',
        type: 'boolean' as const,
        default: false,
        isRequired: false,
    },
}

const helpText = meowHelp({
    name: `@ndive/design-tracker`,
    flags,
    header: '',
    footer: 'This package tracks the usage of modules from @ndive/design-components.',
    desc: 'Tracks the given code (TypeScript only) and extracts React components and props usage.',
})

export const runCli = () => {
    const cli = meow(helpText, {flags, importMeta: import.meta})

    return cli
}

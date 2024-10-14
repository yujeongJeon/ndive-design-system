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
    path: {
        desc: '/path/to/folder',
        type: 'string' as const,
        shortFlag: '-p',
        default: '',
        isRequired: false,
    },
}

const helpText = meowHelp({
    name: `@ndive/design-tracker`,
    flags,
    header: '',
    footer: 'This package is a copy of react-scanner with replaced @babel/parser.',
    desc: 'Analyzes the given code (TypeScript supported) and extracts React components and props usage.',
})

export const runCli = () => {
    const cli = meow(helpText, {flags, importMeta: import.meta})

    return cli
}

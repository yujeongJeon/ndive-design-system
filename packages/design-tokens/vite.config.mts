import defineConfig from '@ndive/vite'

import pkg from './package.json'

export default defineConfig({
    pkg,
    buildOptions: {
        entry: {
            index: './src/index.ts',
        },
        target: 'node20',
    },
})

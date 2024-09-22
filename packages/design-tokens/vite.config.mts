import defineConfig from '@ndive/vite'

import pkg from './package.json'

export default defineConfig({
    pkg,
    entry: {
        index: './src/index.ts',
    },
})

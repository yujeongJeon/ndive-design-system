import defineConfig from '@ndive/vite'
import browserslistToEsbuild from 'browserslist-to-esbuild'

import pkg from './package.json'

const SUPPORT_TARGETS = browserslistToEsbuild()

export default defineConfig({
    pkg,
    entry: {
        index: './src/index.ts',
    },
    target: SUPPORT_TARGETS,
})

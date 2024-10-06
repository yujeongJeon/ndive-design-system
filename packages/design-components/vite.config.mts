import {fileURLToPath, URL} from 'node:url'

import defineConfig from '@ndive/vite'
import browserslistToEsbuild from 'browserslist-to-esbuild'

import pkg from './package.json'

const SUPPORT_TARGETS = browserslistToEsbuild()

export default defineConfig({
    pkg,
    entry: {
        index: './src/index.ts',
        global: './src/styles/global.scss',
    },
    target: SUPPORT_TARGETS,
    resolve: {
        alias: {
            $: fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
})

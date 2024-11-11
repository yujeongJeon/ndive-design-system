import {fileURLToPath, URL} from 'node:url'

import defineConfig from '@ndive/vite'
import react from '@vitejs/plugin-react'
import browserslistToEsbuild from 'browserslist-to-esbuild'
import {viteStaticCopy} from 'vite-plugin-static-copy'

import pkg from './package.json'

const SUPPORT_TARGETS = browserslistToEsbuild()

export default defineConfig({
    pkg,
    buildOptions: {
        entry: {
            index: './src/index.ts',
            icons: './src/components/icons/index.ts',
        },
        target: SUPPORT_TARGETS,
    },
    resolve: {
        alias: {
            $: fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    plugins: [
        react(),
        viteStaticCopy({
            targets: [
                {
                    src: 'src/json',
                    dest: '.',
                },
                {
                    src: 'src/styles/typo.scss',
                    dest: 'styles',
                },
            ],
        }),
    ],
})

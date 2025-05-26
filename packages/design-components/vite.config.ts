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
            ButtonPrimary: './src/components/button/ButtonPrimary.tsx',
            ButtonSub: './src/components/button/ButtonSub.tsx',
            ModalConfirm: './src/components/modal/ModalConfirm.tsx',
            ModalNotice: './src/components/modal/ModalNotice.tsx',
            size: './src/constants/size.ts',
            icons: './src/components/icons/index.ts',
        },
        target: SUPPORT_TARGETS,
        outDir: 'dist',
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
    dtsOptions: {
        include: ['src/**/*'],
    },
})

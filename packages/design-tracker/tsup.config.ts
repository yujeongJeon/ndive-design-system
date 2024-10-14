import {defineConfig} from 'tsup'

export default defineConfig({
    entry: ['bin/index.ts'],
    splitting: false,
    sourcemap: false,
    clean: true,
    outDir: 'dist',
    target: 'node20',
    format: 'esm',
    dts: true,
})

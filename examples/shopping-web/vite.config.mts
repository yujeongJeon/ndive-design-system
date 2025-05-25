import react from '@vitejs/plugin-react'
import {visualizer} from 'rollup-plugin-visualizer'
import {defineConfig} from 'vite'

export default defineConfig({
    base: './',
    optimizeDeps: {
        include: ['react', 'react-dom'],
        exclude: ['@ndive/*'],
    },
    plugins: [
        react(),
        visualizer({
            open: true,
            gzipSize: true,
            brotliSize: true,
        }),
    ],
})

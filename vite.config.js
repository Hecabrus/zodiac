import { defineConfig } from 'vite'

export default defineConfig({
    root: 'src',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
    },
    preview: {
        port: process.env.PORT || 3000,
        host: '0.0.0.0'
    }
})

import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from 'vite-preset-react'
import macrosPlugin from 'vite-plugin-babel-macros'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), macrosPlugin()],
  build: {
    emptyOutDir: true,
    rollupOptions: {
      context: `./src`,
      input: {
        popup: resolve(__dirname, 'popup.html'),
        background: resolve(__dirname, 'src/service_worker.ts'),
        'content-subtitle': resolve(__dirname, 'src/contents/subtitle.ts'),
        'content-dualsubtitle': resolve(__dirname, 'src/contents/dual-subtitle.ts'),
      },
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
})

import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from 'vite-preset-react'
import macrosPlugin from 'vite-plugin-babel-macros'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), macrosPlugin()],
  build: {
    emptyOutDir: false,
    rollupOptions: {
      context: `./src`,
      input: {
        popup: resolve(__dirname, 'popup.html'),
      },
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
})

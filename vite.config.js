import path from "path"
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    emitCss: false
  }), cssInjectedByJsPlugin()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main-lib.js'),
      name: 'MyLib',
      fileName: (format) => `my-lib.${format}.js`
    },
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  }
})

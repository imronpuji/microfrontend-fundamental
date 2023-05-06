import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    federation({
      name: 'app3',
      filename: 'remoteEntry.js',

      exposes: {
        './App': './src/test.vue',
      },
      // shared: {
      //   vue: {
      //     singleton: true,
      //   },
      // },
    }),
    vue(), vueJsx()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

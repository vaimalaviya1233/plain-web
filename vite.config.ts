import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import svgLoader from 'vite-svg-loader'

const INVALID_CHAR_REGEX = /[_\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g
const DRIVE_LETTER_REGEX = /^[a-z]:/i
function sanitizeFileName(name: string): string {
  const match = DRIVE_LETTER_REGEX.exec(name)
  const driveLetter = match ? match[0] : ''

  // A `:` is only allowed as part of a windows drive letter (ex: C:\foo)
  // Otherwise, avoid them because they can refer to NTFS alternate data streams.
  return driveLetter + name.substring(driveLetter.length).replace(INVALID_CHAR_REGEX, '')
}

// https://vitejs.dev/config/
export default defineConfig({
  css: { preprocessorOptions: { scss: { charset: false } } },
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      output: {
        compact: true,
        sanitizeFileName(fileName) {
          return sanitizeFileName(fileName)
        },
      },
    },
  },
  plugins: [
    vue(),
    svgLoader(),
    Components({
      resolvers: [IconsResolver()],
    }),
    Icons(),
  ],
  define: {
    'process.env': {},
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: false,
    __INTLIFY_PROD_DEVTOOLS__: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})

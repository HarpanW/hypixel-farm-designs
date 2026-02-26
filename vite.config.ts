import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
// npm run deploy -- -m "commit message" to deploy
export default defineConfig({
  base: '/hypixel-farm-designs/',
  build: {
    outDir: 'dist',
  },
  plugins: [
    svgr({
      svgrOptions: { exportType: 'default', ref: true, svgo: false, titleProp: true },
      include: '**/*.svg'
    }),
    dts(),
    react()
  ]
})

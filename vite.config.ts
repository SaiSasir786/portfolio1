import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const config = defineConfig({
  base: '/portfolio1/',
  resolve: { tsconfigPaths: true },
  server: {
    open: true,
  },
  build: {
    outDir: 'dist/client',
  },
  plugins: [
    devtools(),
    tailwindcss(),
    TanStackRouterVite(),
    viteReact(),
  ],
})

export default config

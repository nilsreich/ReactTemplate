import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), VitePWA({
    registerType: 'autoUpdate',
    injectRegister: 'auto',
    workbox: {
      clientsClaim: true,
      skipWaiting: true,
      globPatterns: ['**/*.{js,css,html,ico,png,svg,mp3}'] // Ensure mp3 is cached
    },
    devOptions: {
      enabled: true, // Enable PWA in development mode
    },
    manifest: {
      name: 'Mein React template',
      short_name: 'ReactTemplate',
      description: 'A simple React template application.',
      theme_color: '#ffffff', // Light theme primary color
      background_color: '#f3f4f6', // Light theme secondary color
      display: 'standalone',
      scope: '/',
      start_url: '/',
      icons: [
        {
          src: 'icon-192x192.png', // Create this icon in /public
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'icon-512x512.png', // Create this icon in /public
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'icon-512x512.png', // For maskable icon
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        }
      ],
    },
  })
  ],
})

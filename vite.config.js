import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import {VitePWA} from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Cookify/",
  plugins: [react(),
  VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Cookify Recipe App',
        short_name: 'Cookify',
        description: 'A recipe app using themealdb api',
        background_color: 'yellow', 
        display: 'standalone', 
        start_url: '/Cookify',
        scope: '/',
        orientation: 'portrait',
        theme_color: 'yellow',
        icons: [
  {
    src: 'pwa-64x64.png',
    sizes: '64x64',
    type: 'image/png'
  },
  {
    src: 'pwa-192x192.png',
    sizes: '192x192',
    type: 'image/png'
  },
  {
    src: 'pwa-512x512.png',
    sizes: '512x512',
    type: 'image/png',
    purpose: 'any'  
  },
  {
    src: 'maskable-icon-512x512.png',
    sizes: '512x512',
    type: 'image/png',
    purpose: 'maskable'
  }
]
      }
    })
  ],
  assetsInclude: ["**/*.{JPG,PNG,jpg,png}"],
})

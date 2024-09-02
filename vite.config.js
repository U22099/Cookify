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
		
	]
      }
    })
  ],
  assetsInclude: ["**/*.{JPG,PNG,jpg,png}"],
})

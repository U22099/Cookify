import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/RecipeApp/",
  plugins: [react()],
  assetsInclude: ["**/*.{JPG,PNG,jpg,png}"],
})

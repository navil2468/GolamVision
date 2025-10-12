import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import viteImagemin from 'vite-plugin-imagemin'



export default defineConfig({
  plugins: [react(), tailwindcss(), viteImagemin({
    webp: {
      quality: 75, 
    }
  })
],
})

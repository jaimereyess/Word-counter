import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: 'https://jaimereyess.github.io/Word-counter/', // Establece la URL base completa
  build: {
    outDir: 'dist'

  }
})
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,  // S'assure que l'origine est bien changée
        secure: false,  // Pas de besoin de https en développement
      },
    },
  },
  plugins: [react()],
  base: '/complete-mern-blog-project'
});
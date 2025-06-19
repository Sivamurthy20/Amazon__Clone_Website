import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base:'/Amazon__Clone_Website/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

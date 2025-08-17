import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/bolt-testt/", // ✅ repo name goes here
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});


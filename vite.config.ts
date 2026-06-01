import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/euphonies/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) =>
          id.includes('node_modules/react') || id.includes('node_modules/react-dom')
            ? 'vendor'
            : undefined,
      },
    },
  },
});

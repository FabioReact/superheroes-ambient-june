import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@api/*': './src/api/*',
      '@components/*': './src/components/*',
      '@pages/*': './src/pages/*',
      'types/*': './src/types/*',
    },
  },
  plugins: [react()],
});

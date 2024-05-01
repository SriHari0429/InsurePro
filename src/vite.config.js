import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      // Define aliases to simplify import paths
      '@': path.resolve(__dirname, 'src'),
      // You can add more aliases as needed
      'services': path.resolve(__dirname, '../Insure_pro/src/components/Services'),
    },
  },
});

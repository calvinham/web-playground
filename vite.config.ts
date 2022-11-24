// eg. apps/my-app/vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    hmr: {
      overlay: true,
    },
  },
  plugins: [],
});

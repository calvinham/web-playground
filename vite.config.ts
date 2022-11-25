// eg. apps/my-app/vite.config.ts
import { splitVendorChunkPlugin } from 'vite';
import analyze from 'rollup-plugin-analyzer';
import { defineConfig } from 'vitest/config';
import strip from '@rollup/plugin-strip';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  server: {
    hmr: {
      overlay: true,
    },
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
    }),
    splitVendorChunkPlugin(),
    analyze({ limit: 10 }),
  ],
  build: {
    sourcemap: command === 'serve',
    reportCompressedSize: true,
    rollupOptions: {
      plugins: [
        strip({
          functions: ['console.debug'],
          include: '**/*.(ts|tsx)',
        }),
      ],
    },
  },
}));

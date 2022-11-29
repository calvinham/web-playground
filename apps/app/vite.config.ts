// eg. apps/my-app/vite.config.ts
import path from 'path';

import strip from '@rollup/plugin-strip';
import react from '@vitejs/plugin-react';
import { mergeConfig } from 'vite';
import ViteTsConfigPathsPlugin from 'vite-tsconfig-paths';

import baseConfig from '../../vite.config';

export default mergeConfig(baseConfig, {
  plugins: [
    react({
      // This definition ensures that the `css` prop from Emotion
      // works at build time. The one in tsconfig.json ensures that
      // the IDE doesn't throw errors when using the prop.
      jsxImportSource: '@emotion/react'
    }),
    ViteTsConfigPathsPlugin({
      root: '../../',
      projects: ['tsconfig.base.json']
    })
  ],
  resolve: {
    alias: [
      {
        find: '~',
        replacement: path.resolve(__dirname, 'src')
      }
    ]
  },
  build: {
    rollupOptions: {
      plugins: [
        strip({
          functions: ['console.debug'],
          include: '**/*.(ts|tsx)'
        })
      ]
    }
  }
});

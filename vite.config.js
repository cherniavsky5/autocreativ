import { defineConfig } from 'vite';
import vituum from 'vituum';
import path from 'path';
import pug from '@vituum/vite-plugin-pug';
import pugBem from 'pug-bem';
import sassGlobImports from 'vite-plugin-sass-glob-import';
import IconSpritePlugin from './plugins/vite-plugin-icon-sprite';

export default defineConfig({
  plugins: [vituum(),
    pug({ options: { plugins: [pugBem] } }),
    sassGlobImports(),
    IconSpritePlugin()
  ],

  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: ``,
      },
    },
  },
});

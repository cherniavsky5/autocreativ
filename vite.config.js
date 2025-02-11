import { defineConfig } from 'vite';
import vituum from 'vituum';
import path from 'path';
import pug from '@vituum/vite-plugin-pug';
import pugBem from 'pug-bem';
import sassGlobImports from 'vite-plugin-sass-glob-import';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import IconSpritePlugin from './plugins/vite-plugin-icon-sprite';

export default defineConfig({
  plugins: [
    vituum(),
    pug({ options: { plugins: [pugBem] } }),
    sassGlobImports(),
    IconSpritePlugin(),
    ViteImageOptimizer(),
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

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    assetsInlineLimit: 0,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/js/[name].[hash].js',
        chunkFileNames: 'assets/js/[name].[hash].js',
        assetFileNames: ({ name, originalFileName }) => {
          if (/\.(gif|jpe?g|png|svg|webp|ico)$/.test(name ?? '')) {
            return 'assets/img/' + originalFileName.split('assets/img/')[1];
          }
          if (/\.(woff2?|eot|ttf|otf)$/.test(name ?? '')) {
            return 'assets/fonts/[name][extname]';
          }
          if (/\.css$/.test(name ?? '')) {
            return 'assets/css/[name].[hash][extname]';
          }
          if (/\.js$/.test(name ?? '')) {
            return 'assets/js/[name].[hash][extname]';
          }
          return 'assets/[name][extname]';
        },
      },
    },
  },
});

import { Config } from '@stencil/core';
import * as dotenv from 'dotenv';
import copy from 'rollup-plugin-copy';

// Load environment variables from .env file
dotenv.config();

export const config: Config = {
  namespace: 'taktakwidget',
  globalStyle: 'src/global/global.css',
  devServer: {
    port: 80, // Change to your desired port
  },
  env: {
    API_URL: process.env.API_URL,
    PLATFORM_URL: process.env.PLATFORM_URL,
    STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
    CDN_PATH: process.env.CDN_PATH,
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  rollupPlugins: {
    // copy assets to dist directory so they can be rendered when the component is embedded to another app
    after: [
      copy({
        targets: [
          {
            src: 'src/**/*.{jpg,png,ico,svg}',
            dest: 'dist/assets',
          },
        ],
      }),
    ],
  },
  testing: {
    browserHeadless: 'new',
  },
};

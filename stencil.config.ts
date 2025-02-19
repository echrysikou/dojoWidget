import { Config } from '@stencil/core';
import * as dotenv from 'dotenv';
import copy from 'rollup-plugin-copy';


// Load environment variables from .env file
dotenv.config();

export const config: Config = {
  devServer: {
    port: 3000, // Change from 3333 to 3000
  },
  namespace: 'taktakwidget',
  globalStyle: 'src/global/global.css',
  env: {
    API_URL: process.env.API_URL,
    PLATFORM_URL: process.env.PLATFORM_URL,
    STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
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
  // rollupPlugins: {
  //   after: [
  //     copy({
  //       targets: [
  //         {
  //           src: 'src/**/*.{jpg,png,ico,svg}',
  //           dest: 'dist/components/assets',
  //         },
  //       ],
  //     }),
  //   ]
  // },
  testing: {
    browserHeadless: "new",
  },
};

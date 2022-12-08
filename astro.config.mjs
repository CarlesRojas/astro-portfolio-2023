import { defineConfig } from 'astro/config';
import serviceWorker from 'astrojs-service-worker';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [serviceWorker()],
});

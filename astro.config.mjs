import { defineConfig } from 'astro/config';

// Import packages for integration to Astro Project
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      iconDir: 'src/assets/icons',
      include: {
        mdi: ['*'],
      },
    }),
    mdx(),
    react(),
  ],
});

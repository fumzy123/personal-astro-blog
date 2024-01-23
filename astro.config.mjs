import { defineConfig } from 'astro/config';

// Import packages for integration to Astro Project
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      iconDir: 'src/icons',
      include: {
        mdi: ['*'],
      },
    }),
    mdx(),
  ],
});

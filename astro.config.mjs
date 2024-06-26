import { defineConfig } from 'astro/config';

// Import Frameworks
import react from '@astrojs/react';

// Impore Vite Plugins
import basicSsl from '@vitejs/plugin-basic-ssl';
import { loadEnv } from 'vite';
const env = loadEnv('', process.cwd(), 'STORYBLOK');

// Import packages for integration to Astro Project
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import storyblok from '@storyblok/astro';

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
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        blogPost: 'storyblok/BlogPost',
        blogPostList: 'storyblok/BlogPostList',
        page: 'storyblok/Page',
      },
      apiOptions: {
        region: 'ca',
      },
    }),
  ],

  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});

// Use this File to Define your Content Collections and set their Schema


// 1. Import Utilities from astro:content

import { z, defineCollection } from 'astro:content';

// 2. Define a Type and Schema for each collection
const webDevelopmentCollection = defineCollection({
  type: 'content',
  schema: ({image}) => z.object({
    title: z.string(),
    imageCover: image().refine((img) => img.width >= 1000, {
      message: "Cover Image must be at least 1080 pixels wide",
    }),
    imageCoverAlt: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
  }),
});

// 3. Export a single `collections` object to register your collections
export const collections = {
  'web-development': webDevelopmentCollection,
};

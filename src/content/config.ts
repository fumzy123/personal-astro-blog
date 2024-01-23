// 1. Import Utilities from astro:content
import { z, defineCollection } from 'astro:content';

// 2. Define a Type and Schema for each collection
const ideasCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .optional(),
    tags: z.array(z.string()),
  }),
});

// 3. Export a single `collections` object to register your collections
export const collections = {
  ideas: ideasCollection,
};

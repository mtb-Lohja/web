import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    path: z.string(),
    date: z.coerce.date(),
    title: z.string(),
    author: z.string().optional(),
  }),
});

export const collections = {
  posts,
};
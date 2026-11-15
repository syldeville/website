import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const sewing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sewing' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['Garments', 'Costumes', 'Accessories', 'Home']),
    date: z.coerce.date(),
    pattern: z.string().optional(),
    fabric: z.string().optional(),
    summary: z.string(),
    // Put photos in public/sewing/ and reference them like "sewing/my-dress.jpg"
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

export const collections = { sewing };

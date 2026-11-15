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

const apps = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/apps' }),
  schema: z.object({
    title: z.string(),
    // e.g. "iOS app", "Web app", "Game", "Chrome extension"
    kind: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tech: z.array(z.string()).default([]),
    // Links shown as buttons on the app's page (all optional)
    url: z.string().optional(),
    repo: z.string().optional(),
    // Put screenshots in public/apps/ and reference them like "apps/my-app.png"
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { sewing, apps };

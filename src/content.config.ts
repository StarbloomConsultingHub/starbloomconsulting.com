// StarBloom Consulting V2 — Content Collection Schemas
// Phase 5: Zod-validated Markdown frontmatter for Case Studies & Blog
// Astro 6 pattern: loader + schema required
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ── Case Studies Collection ──
const caseStudies = defineCollection({
  loader: glob({ base: './src/content/case-studies', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(320, 'Description must be ≤320 chars for meta tags'),
    clientName: z.string(),
    metrics: z.array(z.string()).min(1, 'At least one metric is required'),
    pubDate: z.coerce.date(),
    heroImage: z.string(),
    author: z.string(),
    tags: z.array(z.string()).optional().default([]),
    featured: z.boolean().optional().default(false),
  }),
});

// ── Blog / Insights Collection ──
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(320, 'Description must be ≤320 chars for meta tags'),
    pubDate: z.coerce.date(),
    author: z.string(),
    tags: z.array(z.string()).min(1, 'At least one tag is required'),
    readingTime: z.union([z.string(), z.number()]),
    heroImage: z.string().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = { caseStudies, blog };

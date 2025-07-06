import { z } from 'zod';

// Define a block structure for page content
export const blockSchema = z.object({
  id: z.string(),
  type: z.enum(['text', 'heading', 'image', 'video']),
  content: z.string(),
});

export type Block = z.infer<typeof blockSchema>;

// Define the page schema
export const pageSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  content: z.array(blockSchema),
  published: z.boolean().default(false),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type Page = z.infer<typeof pageSchema>;
export type InsertPage = Omit<Page, 'id' | 'createdAt' | 'updatedAt'>;
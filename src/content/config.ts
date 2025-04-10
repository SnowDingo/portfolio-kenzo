import { defineCollection, z } from 'astro:content';

const works = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		year: z.string(),
		projectlink: z.string(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { works };

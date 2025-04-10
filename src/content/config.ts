import { defineCollection, z } from 'astro:content';

const works = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		year: z.string(),
		projectlink: z.string(),
	})
});

export const collections = {works};
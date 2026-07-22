import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
	loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const eventos = defineCollection({
	loader: glob({ base: './src/content/eventos', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		eventDate: z.coerce.date(),
		heroImage: z.string().optional(),
		location: z.string(),
		registrationUrl: z.string().optional(),
		international: z.boolean().optional(),
		titleEn: z.string().optional(),
		descriptionEn: z.string().optional(),
	}),
});

export const collections = { posts, blog, eventos };

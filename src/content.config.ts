import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";
import { rssSchema } from "@astrojs/rss";

const posts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/data/posts" }),
  schema: rssSchema,
});

const socials = defineCollection({
  loader: file("./src/data/socials.json"),
  schema: z.object({
    id: z.number(),
    name: z.string(),
    url: z.string(),
  }),
});

export const collections = { posts, socials };

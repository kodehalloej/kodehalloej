import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

const getHandler = async function GET(context) {
  const posts = await getCollection("posts");
  return rss({
    title: "Kodehalløj",
    description: "Kodehalløj Blog",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate ?? new Date(0),
      link: `/blog/${post.id}/`,
    })),
  });
};

export const GET =
  import.meta.env.MODE === "production" ? getHandler : undefined;

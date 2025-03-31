import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

const getHandler = async function GET(context) {
  const getPubDate = (postPubDate) => postPubDate ?? new Date(0);
  const posts = (await getCollection("posts")).sort(
    (x, y) =>
      getPubDate(x.data.pubDate).getTime() -
      getPubDate(y.data.pubDate).getTime(),
  );
  return rss({
    title: "Kodehalløj",
    description: "Kodehalløj Blog",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: getPubDate(post.data.pubDate),
      link: `/blog/${post.id}/`,
    })),
  });
};

export const GET =
  import.meta.env.MODE === "production" ? getHandler : undefined;

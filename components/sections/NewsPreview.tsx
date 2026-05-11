"use client";

import Link from "next/link";
import { news } from "@/content/news";
import type { SiteLocale } from "@/content/types";
import { ui } from "@/content/ui";

import { useEffect, useState } from "react";
import { getPublishedNews } from "@/lib/news";
import type { NewsPost } from "@/content/news.types";
import NewsCard from "@/components/ui/NewsCard";

type NewsPreviewProps = {
  locale: SiteLocale;
};

export default function NewsPreview({locale,}:NewsPreviewProps) {
  //const posts = news[locale];
  const t = ui[locale].home.news;


  const [posts, setPosts] = useState<NewsPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPublishedNews(3)
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="border-t border-zinc-200">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              {t.eyebrow}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              {t.title}
            </h2>
          </div>

          <Link
            href="/news"
            className="text-sm font-semibold text-zinc-900 underline-offset-4 hover:underline"
          >
            {t.viewAll}
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {loading ? (
            <p className="text-zinc-500">Loading...</p>
          ) : posts.length === 0 ? (
            <p className="text-zinc-500">No news yet.</p>
          ) : (
            posts.map((post) => (
              <NewsCard
                key={post.id}
                post={post}
                cta={t.cta}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
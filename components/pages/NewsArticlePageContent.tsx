"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { NewsPost } from "@/content/news.types";
import { getPublishedNewsBySlug } from "@/lib/news";

type NewsArticlePageContentProps = {
  slug: string;
};

export default function NewsArticlePageContent({
  slug,
}: NewsArticlePageContentProps) {
  const [post, setPost] = useState<NewsPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPublishedNewsBySlug(slug)
      .then(setPost)
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-[70vh] bg-zinc-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl text-zinc-400">Loading...</div>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="min-h-[70vh] bg-zinc-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl space-y-6">
          <h1 className="text-4xl font-bold">Το άρθρο δεν βρέθηκε</h1>
          <Link href="/news" className="text-brand-primary">
            Επιστροφή στα νέα
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-zinc-50">
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="space-y-5">
            <Link
              href="/news"
              className="text-sm font-semibold text-brand-primary"
            >
              ← Πίσω στα νέα
            </Link>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              {post.title}
            </h1>

            {post.publishedAt ? (
              <p className="text-sm text-zinc-400">
                {post.publishedAt.toLocaleDateString("el-GR")}
              </p>
            ) : null}

            <p className="max-w-3xl text-lg leading-8 text-zinc-300">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {post.coverImageUrl ? (
        <section className="bg-zinc-950">
          <div className="mx-auto max-w-5xl px-6 pb-16">
            <div className="overflow-hidden rounded-3xl border border-zinc-800">
              <img
                src={post.coverImageUrl}
                alt={post.title}
                className="max-h-[520px] w-full object-cover"
              />
            </div>
          </div>
        </section>
      ) : null}

      <article className="mx-auto max-w-3xl px-6 py-16">
        <div className="whitespace-pre-line text-lg leading-9 text-zinc-700">
          {post.content}
        </div>
      </article>
    </main>
  );
}
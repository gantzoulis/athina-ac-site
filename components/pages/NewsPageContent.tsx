"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import NewsCard from "@/components/ui/NewsCard";
import type { NewsPost } from "@/content/news.types";
import { getPublishedNews, getPublishedNewsBySlug } from "@/lib/news";

export default function NewsPageContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  const [posts, setPosts] = useState<NewsPost[]>([]);
  const [post, setPost] = useState<NewsPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //setLoading(true);

    if (slug) {
      getPublishedNewsBySlug(slug)
        .then(setPost)
        .finally(() => setLoading(false));

      return;
    }

    getPublishedNews(12)
      .then(setPosts)
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-[70vh] bg-zinc-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl text-zinc-400">Loading...</div>
      </main>
    );
  }

  if (slug && !post) {
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

  if (slug && post) {
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

  return (
    <main className="bg-zinc-50">
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-primary">
            News
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
            Νέα & Ανακοινώσεις
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
            Ενημερώσεις, δράσεις και νέα από τη σχολή μας.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          {posts.length === 0 ? (
            <p className="text-zinc-600">Δεν υπάρχουν νέα ακόμα.</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-3">
              {posts.map((post) => (
                <NewsCard key={post.id} post={post} cta="Περισσότερα" />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
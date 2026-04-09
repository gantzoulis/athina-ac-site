import Link from "next/link";
import { news } from "@/content/news";
import { ui } from "@/content/ui";

export default function NewsPreview() {
  const locale = "el";
  const posts = news[locale];
  const t = ui[locale].home.news;

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
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-3xl border border-zinc-200 p-6"
            >
              <h3 className="text-xl font-semibold text-zinc-900">
                {post.title}
              </h3>
              <p className="mt-3 leading-7 text-zinc-600">
                {post.description}
              </p>
              <Link
                href={post.href}
                className="mt-6 inline-block text-sm font-semibold text-brand-primary"
              >
                {t.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
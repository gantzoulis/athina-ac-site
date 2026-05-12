import Link from "next/link";
import type { NewsPost } from "@/content/news.types";

type NewsCardProps = {
  post: NewsPost;
  cta: string;
};

export default function NewsCard({ post, cta }: NewsCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="overflow-hidden">
        <img
          src={post.coverImageUrl || "/images/news-placeholder.jpg"}
          alt={post.title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
       <div className="mb-4 flex items-center justify-between gap-4 text-xs text-zinc-500">
        <div className="flex flex-wrap items-center gap-2">
            {post.tags && post.tags.length > 0 ? (
              post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-200 px-3 py-1"
                >
                  {tag}
                </span>
              ))
            ) : (
              <span className="rounded-full border border-zinc-200 px-3 py-1">
                News
              </span>
            )}
          </div>

          {post.publishedAt ? (
            <span className="shrink-0">
              {post.publishedAt.toLocaleDateString("el-GR")}
            </span>
          ) : null}
        </div>

        <h3 className="text-xl font-bold leading-tight text-zinc-900">
          {post.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-zinc-600">
          {post.excerpt}
        </p>

        <Link
          href={`/news/${post.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary"
        >
          {cta}
          <span className="transition group-hover:translate-x-1">›</span>
        </Link>
      </div>
    </article>
  );
}
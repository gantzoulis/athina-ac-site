import Link from "next/link";

const posts = [
  {
    title: "New Season Opening",
    description: "We welcome students to a new season of training and growth.",
  },
  {
    title: "Upcoming Camp Announcement",
    description: "Stay tuned for our next camp experience and event details.",
  },
  {
    title: "School News & Updates",
    description:
      "Announcements, milestones, and moments from our school community.",
  },
];

export default function NewsPreview() {
  return (
    <section className="border-t border-zinc-200">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              News
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              Latest updates from the school.
            </h2>
          </div>

          <Link
            href="/news"
            className="text-sm font-semibold text-zinc-900 underline-offset-4 hover:underline"
          >
            View All News
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
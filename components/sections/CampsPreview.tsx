import Link from "next/link";

export default function CampsPreview() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 rounded-3xl border border-zinc-200 bg-zinc-50 p-8 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Camps & Events
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              Training experiences that go beyond the weekly class.
            </h2>
          </div>

          <div className="space-y-5 text-zinc-600">
            <p>
              From camps and seminars to special events and intensive training
              weekends, we create memorable experiences that build skills,
              connection, and spirit.
            </p>

            <Link
              href="/camps"
              className="inline-block rounded-2xl border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
            >
              View Camps
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
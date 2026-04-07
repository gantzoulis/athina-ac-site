import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            About the School
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
            A school built on values, growth, and strong community.
          </h2>
        </div>

        <div className="space-y-5 text-zinc-600">
          <p>
            Athina AC is more than a training space. It is a supportive
            environment where students can develop discipline, confidence,
            resilience, and respect through martial arts.
          </p>

          <p>
            Our goal is to offer quality instruction in a welcoming setting for
            every student, regardless of age or experience level.
          </p>

          <Link
            href="/about"
            className="inline-block rounded-2xl border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 transition hover:bg-white"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
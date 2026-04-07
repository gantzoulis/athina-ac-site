import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-3xl space-y-6">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
          Hwal Moo Do • Kickboxing • Camps
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
          Strength, discipline, confidence.
        </h1>

        <p className="text-lg leading-8 text-zinc-600">
          Welcome to Athina AC, a modern martial arts school dedicated to
          personal growth, discipline, empowerment, and quality training for
          children, teens, and adults.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/programs"
            className="rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Explore Programs
          </Link>

          <Link
            href="/contact"
            className="rounded-2xl border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
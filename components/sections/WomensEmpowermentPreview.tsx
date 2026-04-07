import Link from "next/link";

export default function WomensEmpowermentPreview() {
  return (
    <section className="bg-zinc-900 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Women&apos;s Empowerment
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Strength, confidence, voice, and presence.
          </h2>
        </div>

        <div className="space-y-5 text-zinc-300">
          <p>
            We want to create a space where women feel safe, supported, and
            empowered through movement, discipline, martial arts, and personal
            growth.
          </p>

          <p>
            This is not only about physical training. It is about confidence,
            self-expression, self-protection, and inner strength.
          </p>

          <Link
            href="/womens-empowerment"
            className="inline-block rounded-2xl bg-white px-5 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
          >
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
}
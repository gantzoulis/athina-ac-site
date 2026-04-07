import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-primary">
            Hwal Moo Do • Kickboxing • Womens Empowerment • Camps
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight">
            Δύναμη. Πειθαρχία. Αυτοπεποίθηση.
          </h1>

          <p className="text-lg leading-8 text-zinc-300">
            Στον Α.Σ. Αθηνά καλλιεργούμε σώμα και πνεύμα μέσα από τις πολεμικές
            τέχνες, σε ένα περιβάλλον εξέλιξης, σεβασμού και εσωτερικής δύναμης.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/programs"
              className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
            >
              Δείτε τα προγράμματα
            </Link>

            <Link
              href="/contact"
              className="rounded-2xl border border-zinc-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              Επικοινωνία
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
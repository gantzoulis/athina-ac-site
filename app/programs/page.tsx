import type { Metadata } from "next";
import Link from "next/link";
import ProgramCard from "@/components/ui/ProgramCard";
import { programs } from "@/content/programs";
import { ui } from "@/content/ui";

export const metadata: Metadata = {
  title: "Προγράμματα",
  description:
    "Ανακαλύψτε τα προγράμματα εκπαίδευσης του Α.Σ. Αθηνά.",
};

export default function ProgramsPage() {
  const locale = "el";
  const t = ui[locale].programsPage;
  const programList = programs[locale];

  return (
    <main className="min-h-[70vh] bg-zinc-50">
      <section className="relative overflow-hidden bg-zinc-950 text-white">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-brand-primary/10 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-40 bg-brand-primary/10 blur-2xl" />
        <div className="relative mx-auto max-w-6xl px-6 py-28">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-primary">
              {t.eyebrow}
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {t.title}
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-zinc-300">
              {t.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-block rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
              >
                {t.contactCta}
              </Link>

              <Link
                href="/programs/hwal-moo-do"
                className="inline-block rounded-2xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-900"
              >
                Hwal Moo Do
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-6 md:grid-cols-2">
            {programList.map((program) => (
              <ProgramCard
                key={program.title}
                title={program.title}
                description={program.description}
                href={program.href}
                cta={ui[locale].home.programs.cta}
                image={program.image}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold">
            {ui[locale].programsPhilosophy.title}
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {ui[locale].programsPhilosophy.items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6"
            >
              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </main>
  );
}
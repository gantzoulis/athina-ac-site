import type { Metadata } from "next";
import Link from "next/link";
import { ui } from "@/content/ui";

export const metadata: Metadata = {
  title: "Hwal Moo Do",
  description:
    "Ανακαλύψτε περισσότερα για το Hwal Moo Do στον Α.Σ. Αθηνά.",
};

export default function HwalMooDoPage() {
  const locale = "el";
  const t = ui[locale].hwalMooDoPage;

  return (
    <main className="bg-zinc-50">
      <section className="relative overflow-hidden bg-zinc-950 text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hwal-moo-do-hero.png"
            alt="Hwal Moo Do training"
            className="h-full w-full object-cover opacity-30"
          />
        </div>

        <div className="absolute inset-0 bg-zinc-950/75" />
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
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-primary">
              Introduction
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              {t.introTitle}
            </h2>

            <p className="leading-8 text-zinc-600">{t.introText}</p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
            <img
              src="/images/hwal-moo-do-hero.png"
              alt="Hwal Moo Do technique"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-primary">
              Pillars
            </p>

            <h2 className="mt-3 text-3xl font-bold">{t.pillarsTitle}</h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 transition hover:border-brand-primary/40 hover:bg-zinc-900"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-brand-primary/30 bg-brand-primary/10 text-sm font-bold text-brand-primary">
                  {index + 1}
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 md:p-10">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-primary">
                Join Us
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
                {t.ctaTitle}
              </h2>

              <p className="leading-8 text-zinc-600">{t.ctaText}</p>

              <Link
                href="/contact"
                className="inline-block rounded-2xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
              >
                {t.ctaButton}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
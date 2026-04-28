import type { Metadata } from "next";
import Link from "next/link";
import { ui } from "@/content/ui";

export const metadata: Metadata = {
  title: "Kickboxing",
  description: "Kickboxing στον Α.Σ. Αθηνά.",
};

export default function KickboxingPage() {
  const locale = "el";
  const t = ui[locale].kickboxingPage;

  return (
    <main className="bg-zinc-50">
      {/* HERO */}
      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <img
            src="/images/kickboxing-hero.png"
            alt="Kickboxing training"
            className="h-full w-full object-cover opacity-50"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        <div className="relative mx-auto max-w-6xl px-6 py-28">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-primary">
              {t.eyebrow}
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
              {t.title}
            </h1>

            <p className="text-lg text-zinc-300">{t.description}</p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section>
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-900">
              {t.introTitle}
            </h2>

            <p className="leading-8 text-zinc-600">{t.introText}</p>
          </div>

          <div className="overflow-hidden rounded-3xl">
            <img
              src="/images/kickboxing-intro.png"
              alt="Kickboxing pads"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">{t.benefitsTitle}</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.benefits.map((b, i) => (
              <div
                key={b.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6"
              >
                <div className="mb-4 text-2xl font-bold text-brand-primary">
                  {i + 1}
                </div>

                <h3 className="text-lg font-semibold">{b.title}</h3>

                <p className="mt-3 text-sm text-zinc-300">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-3xl bg-zinc-900 p-10 text-white">
            <h2 className="text-3xl font-bold">{t.ctaTitle}</h2>

            <p className="mt-4 text-zinc-300">{t.ctaText}</p>

            <Link
              href="/contact"
              className="mt-6 inline-block rounded-2xl bg-white px-5 py-3 font-semibold text-black"
            >
              {t.ctaButton}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
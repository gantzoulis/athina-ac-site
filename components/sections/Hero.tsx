import Link from "next/link";
import type { SiteLocale } from "@/content/types";
import { ui } from "@/content/ui";

type HeroProps = {
  locale: SiteLocale;
};

export default function Hero({locale,}:HeroProps) {
  const t = ui[locale].home.hero;
  return (
    <section className="bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-primary font-semibold">
            {t.eyebrow}
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight">
            {t.title}
          </h1>

          <p className="text-lg leading-8 text-zinc-300">
            {t.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/programs"
              className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
            >
              {t.primaryCta}
            </Link>

            <Link
              href="/contact"
              className="rounded-2xl border border-zinc-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              {t.secondaryCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
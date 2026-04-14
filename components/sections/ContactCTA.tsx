import Link from "next/link";
import { ui } from "@/content/ui";
import type { SiteLocale } from "@/content/types";

type ContactCTAProps = {
  locale: SiteLocale;
};

export default function ContactCTA({locale}:ContactCTAProps) {

  const t = ui[locale].home.contactCta;

  return (
    <section className="bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
            {t.eyebrow}
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.title}
          </h2>

          <p className="leading-8 text-zinc-300">
            {t.description}
          </p>

          <Link
            href="/contact"
            className="inline-block rounded-2xl bg-white px-5 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
          >
            {t.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
import Link from "next/link";
import { ui } from "@/content/ui";
import type { SiteLocale } from "@/content/types";

type AboutPreviewProps = {
  locale: SiteLocale;
}

export default function AboutPreview({locale,}: AboutPreviewProps) {

  const t = ui[locale].home.about;

  return (
    <section className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            {t.eyebrow}
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
            {t.title}
          </h2>
        </div>

        <div className="space-y-5 text-zinc-600">
          <p>
           {t.description1}
          </p>

          <p>
            {t.description2}
          </p>

          <Link
            href="/about"
            className="inline-block rounded-2xl border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 transition hover:bg-white"
          >
            {t.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
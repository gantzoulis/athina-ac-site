import Link from "next/link";
import type { SiteLocale } from "@/content/types";
import { ui } from "@/content/ui";

type WomensEmpowermentPreviewProps = {
  locale : SiteLocale;
}

export default function WomensEmpowermentPreview({locale,}:WomensEmpowermentPreviewProps) {

  const t = ui[locale].home.womensEmpowerment;

  return (
    <section className="bg-zinc-900 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Ενδυνάμωση Γυναικών
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.eyebrow}
          </h2>
        </div>

        <div className="space-y-5 text-zinc-300">
          <p>
            {t.title}
          </p>

          <p>{t.description1}</p>
          <p>{t.description2}</p>

          <Link
            href="/womens-empowerment"
            className="inline-block rounded-2xl bg-white px-5 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
          >
            {t.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
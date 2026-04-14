import Link from "next/link";
import { ui } from "@/content/ui";
import type { SiteLocale } from "@/content/types";

 type  CampsPreviewProps  = {
  locale : SiteLocale;
}

export default function CampsPreview({locale,}:CampsPreviewProps) {

const t = ui[locale].home.camps;

  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 rounded-3xl border border-zinc-200 bg-zinc-50 p-8 md:grid-cols-2 md:items-center">
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
              {t.description}
            </p>

            <Link
              href="/camps"
              className="inline-block rounded-2xl border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
            >
              {t.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
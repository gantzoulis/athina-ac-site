import { schools } from "@/content/schools";
import type { SiteLocale } from "@/content/types";
import { ui } from "@/content/ui";


type NetworkSchoolsPreviewProps = {
  locale: SiteLocale;
};

export default function NetworkSchoolsPreview({locale,}:NetworkSchoolsPreviewProps) {

  
  const schoolList = schools[locale];
  const t = ui[locale].home.network;

  return (
    <section className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 max-w-3xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
           {t.eyebrow}
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
           {t.title}
          </h2>

          <p className="leading-7 text-zinc-600">
            {t.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {schoolList.map((school) => (
            <a
              key={school.name}
              href={school.href}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-primary/40"
            >
              <h3 className="text-xl font-semibold text-zinc-900">
                {school.name}
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {school.subtitle}
              </p>

              <span className="mt-6 inline-block text-sm font-semibold text-brand-primary">
                Δείτε περισσότερα
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

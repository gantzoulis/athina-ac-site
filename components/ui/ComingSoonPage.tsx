import Link from "next/link";
import type { SiteLocale } from "@/content/types";

type ComingSoonPageProps = {
  locale: SiteLocale;
  eyebrow?: string;
  title: string;
  description: string;
};

export default function ComingSoonPage({
  locale,
  eyebrow,
  title,
  description,
}: ComingSoonPageProps) {
  const contactLabel = locale === "el" ? "Επικοινωνία" : "Contact us";
  const homeLabel = locale === "el" ? "Επιστροφή στην αρχική" : "Back to home";

  return (
    <main className="min-h-[70vh] bg-zinc-950 text-white">
      <div className="mx-auto flex max-w-4xl flex-col px-6 py-24">
        <div className="max-w-2xl space-y-6">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-primary">
              {eyebrow}
            </p>
          ) : null}

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h1>

          <p className="text-lg leading-8 text-zinc-300">
            {description}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/contact"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
            >
              {contactLabel}
            </Link>

            <Link
              href="/"
              className="rounded-2xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-900"
            >
              {homeLabel}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
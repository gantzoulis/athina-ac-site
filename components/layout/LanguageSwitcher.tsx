"use client";

import type { SiteLocale } from "@/content/types";

type LanguageSwitcherProps = {
  locale: SiteLocale;
  onChange: (locale: SiteLocale) => void;
};

export default function LanguageSwitcher({
  locale,
  onChange,
}: LanguageSwitcherProps) {
    const labels =
    locale === "el"
      ? { el: "ΕΛ", en: "ΑΓ" }
      : { el: "GR", en: "EN" };
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => onChange("el")}
        className={
          locale === "el"
            ? "rounded-xl border border-brand-primary/40 bg-brand-primary/10 px-3 py-2 text-xs font-semibold text-brand-primary"
            : "rounded-xl border border-zinc-700 px-3 py-2 text-xs font-semibold text-zinc-300"
        }
      >
        {labels.el}
      </button>

      <button
        type="button"
        onClick={() => onChange("en")}
        className={
          locale === "en"
            ? "rounded-xl border border-brand-primary/40 bg-brand-primary/10 px-3 py-2 text-xs font-semibold text-brand-primary"
            : "rounded-xl border border-zinc-700 px-3 py-2 text-xs font-semibold text-zinc-300"
        }
      >
        {labels.en}
      </button>
    </div>
  );
}
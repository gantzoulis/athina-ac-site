"use client";

import Image from "next/image";
import Link from "next/link";
import type { SiteLocale } from "@/content/types";
import { ui } from "@/content/ui";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";

type SiteHeaderProps = {
  locale: SiteLocale;
  onLocaleChange: (locale: SiteLocale) => void;
};

export default function SiteHeader({ locale, onLocaleChange }: SiteHeaderProps) {
  const t = ui[locale].layout;

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-16 w-16 overflow-hidden rounded-full border border-brand-primary/40 bg-zinc-900">
            <Image
              src="/images/logo.png"
              alt={t.brandName}
              fill
              className="object-contain p-1"
              priority
            />
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
              {t.brandName}
            </span>
            <span className="text-xs text-zinc-400">
              {t.brandSubtitle}
            </span>
          </div>
        </Link>

       <div className="hidden items-center gap-6 md:flex">
        <div className="flex items-center gap-6 text-sm text-zinc-200">
            <Link href="/about" className="transition hover:text-brand-primary">
            {t.nav.about}
            </Link>
            <Link href="/programs" className="transition hover:text-brand-primary">
            {t.nav.programs}
            </Link>
            <Link
            href="/womens-empowerment"
            className="transition hover:text-brand-primary"
            >
            {t.nav.womensEmpowerment}
            </Link>
            <Link href="/camps" className="transition hover:text-brand-primary">
            {t.nav.camps}
            </Link>
            <Link href="/gallery" className="transition hover:text-brand-primary">
            {t.nav.gallery}
            </Link>
            <Link href="/news" className="transition hover:text-brand-primary">
            {t.nav.news}
            </Link>
            <Link href="/contact" className="transition hover:text-brand-primary">
            {t.nav.contact}
            </Link>
        </div>

        <LanguageSwitcher locale={locale} onChange={onLocaleChange} />
        </div>
      </nav>
    </header>
  );
}
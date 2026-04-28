"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { SiteLocale } from "@/content/types";
import { ui } from "@/content/ui";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import { usePathname } from "next/navigation";

type SiteHeaderProps = {
  locale: SiteLocale;
  onLocaleChange: (locale: SiteLocale) => void;
};

export default function SiteHeader({ locale, onLocaleChange }: SiteHeaderProps) {
  const t = ui[locale].layout;

  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  function linkClass(href: string) {
  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  return isActive
    ? "text-brand-primary font-semibold"
    : "text-zinc-300 hover:text-brand-primary";
}

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
            <Link href="/about" className={linkClass("/about")}>
            {t.nav.about}
            </Link>
            <Link href="/programs" className={linkClass("/programs")}>
            {t.nav.programs}
            </Link>
            <Link
            href="/womens-empowerment"
            className={linkClass("/womens-empowerment")}
            >
            {t.nav.womensEmpowerment}
            </Link>
            <Link href="/camps" className={linkClass("/camps")}>
            {t.nav.camps}
            </Link>
            <Link href="/gallery" className={linkClass("/gallery")}>
            {t.nav.gallery}
            </Link>
            <Link href="/news" className={linkClass("/news")}>
            {t.nav.news}
            </Link>
            <Link href="/contact" className={linkClass("/contact")}>
            {t.nav.contact}
            </Link>
        </div>

        <LanguageSwitcher locale={locale} onChange={onLocaleChange} />
        </div>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-xl border border-zinc-700 px-3 py-2 text-sm font-semibold text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>
      {isOpen && (
        <div className="border-t border-zinc-800 bg-zinc-950 px-6 py-5 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-zinc-200">
            <Link href="/about" onClick={() => setIsOpen(false)}>
              {t.nav.about}
            </Link>

            <Link href="/programs" onClick={() => setIsOpen(false)}>
              {t.nav.programs}
            </Link>

            <Link href="/womens-empowerment" onClick={() => setIsOpen(false)}>
              {t.nav.womensEmpowerment}
            </Link>

            <Link href="/camps" onClick={() => setIsOpen(false)}>
              {t.nav.camps}
            </Link>

            <Link href="/gallery" onClick={() => setIsOpen(false)}>
              {t.nav.gallery}
            </Link>

            <Link href="/news" onClick={() => setIsOpen(false)}>
              {t.nav.news}
            </Link>

            <Link href="/contact" onClick={() => setIsOpen(false)}>
              {t.nav.contact}
            </Link>

            <div className="pt-2">
              <LanguageSwitcher locale={locale} onChange={onLocaleChange} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
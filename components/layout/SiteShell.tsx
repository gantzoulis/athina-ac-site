"use client";

import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { LocaleProvider, useLocale } from "@/components/layout/LocaleProvider";

function SiteShellInner({ children }: { children: React.ReactNode }) {
  const { locale, setLocale } = useLocale();

  return (
    <>
      <SiteHeader locale={locale} onLocaleChange={setLocale} />
      {children}
      <SiteFooter locale={locale} />
    </>
  );
}

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <SiteShellInner>{children}</SiteShellInner>
    </LocaleProvider>
  );
}
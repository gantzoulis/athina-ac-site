import type { ReactNode } from "react";
import type { SiteLocale } from "@/content/types";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "../layout/SiteFooter";

type HomePageShellProps = {
  locale: SiteLocale;
  onLocaleChange: (local: SiteLocale) => void;
  children: ReactNode;
};

export default function HomePageShell({
  locale,
  onLocaleChange,
  children,
}: HomePageShellProps) {
  return (
    <>
      <SiteHeader locale={locale} onLocaleChange={onLocaleChange}/>
      {children}
      <SiteFooter locale={locale} />
    </>
  );
}
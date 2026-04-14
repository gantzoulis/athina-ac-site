import type { SiteLocale } from "@/content/types";
import { ui } from "@/content/ui";

type SiteFooterProps = {
  locale: SiteLocale;
};

export default function SiteFooter({ locale }: SiteFooterProps) {
  const t = ui[locale].footer;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-300">
      <div className="mx-auto max-w-6xl px-6 py-6 text-sm">
        {t.copyright.replace("{year}", String(year))}
      </div>
    </footer>
  );
}
import Link from "next/link";
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
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-3">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-primary">
            {locale === "el" ? "Α.Σ. Αθηνά" : "A.C. Athina"}
          </p>

          <p className="text-sm leading-6 text-zinc-400">
            Hwal Moo Do • Kickboxing • Camps • Women&apos;s Empowerment
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-white">
            {locale === "el" ? "Σύνδεσμοι" : "Links"}
          </p>

          <div className="flex flex-col gap-2 text-sm">
            <Link href="/programs" className="hover:text-brand-primary">
              {locale === "el" ? "Προγράμματα" : "Programs"}
            </Link>
            <Link href="/camps" className="hover:text-brand-primary">
              Camps
            </Link>
            <Link href="/gallery" className="hover:text-brand-primary">
              Gallery
            </Link>
            <Link href="/contact" className="hover:text-brand-primary">
              {locale === "el" ? "Επικοινωνία" : "Contact"}
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-white">
            {locale === "el" ? "Επικοινωνία" : "Contact"}
          </p>

         <div className="space-y-3 text-sm text-zinc-400">
            <p>info@athina-ac.gr</p>
            <p>+30 69X XXX XXXX</p>
            <p>@athina.ac</p>

            <div className="flex items-center gap-4 pt-2">
              {/* Instagram */}
              <a
                href="https://instagram.com/athina.ac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition hover:text-pink-500"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5Zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4Zm8.75 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition hover:text-blue-500"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.5 22v-9h3l.5-3h-3.5V7.5c0-.9.3-1.5 1.6-1.5H17V3.1c-.3 0-1.4-.1-2.7-.1-2.7 0-4.5 1.6-4.5 4.6V10H7v3h2.8v9h3.7Z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition hover:text-white"
                aria-label="TikTok"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 3c.5 2.3 2.3 4.1 4.6 4.6v3c-1.7 0-3.3-.5-4.6-1.5V15a5 5 0 1 1-5-5c.3 0 .7 0 1 .1v3a2 2 0 1 0 2 2V3h2Z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition hover:text-red-500"
                aria-label="YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.6 7.2s-.2-1.5-.8-2.1c-.7-.8-1.5-.8-1.9-.9C16.2 4 12 4 12 4h0s-4.2 0-6.9.2c-.4 0-1.2 0-1.9.9-.6.6-.8 2.1-.8 2.1S2 8.9 2 10.6v1.8c0 1.7.2 3.4.2 3.4s.2 1.5.8 2.1c.7.8 1.7.8 2.1.9 1.5.1 6.4.2 6.4.2s4.2 0 6.9-.2c.4 0 1.2 0 1.9-.9.6-.6.8-2.1.8-2.1s.2-1.7.2-3.4v-1.8c0-1.7-.2-3.4-.2-3.4ZM9.8 14.5v-5l4.8 2.5-4.8 2.5Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-5 text-xs text-zinc-500">
          {t.copyright.replace("{year}", String(year))}
        </div>
      </div>
    </footer>
  );
}
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { siteContent } from "@/content/site";
import Image from "next/image";

export const metadata: Metadata = {
  metadataBase: new URL("https://athina-ac.gr"),
  title: {
    default: siteContent.el.name,
    template: `%s | ${siteContent.el.name}`,
  },
  description:
    "Athina AC offers Hwal Moo Do, Kickboxing, camps, and empowering martial arts training in Athens.",
  keywords: [
    "Athina AC",
    "Hwal Moo Do Athens",
    "Kickboxing Athens",
    "martial arts Athens",
    "women empowerment martial arts",
    "martial arts camps Athens",
  ],
  openGraph: {
    title: "Athina AC",
    description:
      "Hwal Moo Do, Kickboxing, camps, and empowering martial arts training in Athens.",
    url: "https://athina-ac.gr",
    siteName: "Athina AC",
    locale: "el_GR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Athina AC",
    description:
      "Hwal Moo Do, Kickboxing, camps, and empowering martial arts training in Athens.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <body>
        <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <Link href="/" className="flex items-center gap-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border border-brand-primary/40 bg-zinc-900">
                <Image
                  src="/images/logo.png"
                  alt="Λογότυπο Α.Σ. Αθηνά"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="flex flex-col">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                  Α.Σ. Αθηνά
                </span>
                <span className="text-xs text-zinc-400">
                  Hwal Moo Do • Kickboxing
                </span>
              </div>
            </Link>

              <div className="hidden items-center gap-6 text-sm text-zinc-200 md:flex">
                <Link href="/about" className="transition hover:text-brand-primary">
                  Η Σχολή
                </Link>
                <Link href="/programs" className="transition hover:text-brand-primary">
                  Προγράμματα
                </Link>
                <Link
                  href="/womens-empowerment"
                  className="transition hover:text-brand-primary"
                >
                  Women&apos;s Empowerment
                </Link>
                <Link href="/camps" className="transition hover:text-brand-primary">
                  Camps
                </Link>
                <Link href="/gallery" className="transition hover:text-brand-primary">
                  Gallery
                </Link>
                <Link href="/news" className="transition hover:text-brand-primary">
                  Νέα
                </Link>
                <Link href="/contact" className="transition hover:text-brand-primary">
                  Επικοινωνία
                </Link>
              </div>

              <div className="hidden items-center gap-2 md:flex">
                <button
                  type="button"
                  className="rounded-xl border border-brand-primary/40 bg-brand-primary/10 px-3 py-2 text-xs font-semibold text-brand-primary"
                >
                  EL
                </button>
                <button
                  type="button"
                  className="rounded-xl border border-zinc-700 px-3 py-2 text-xs font-semibold text-zinc-300"
                >
                  EN
                </button>
              </div>
            </nav>
          </header>
        {children}

        <footer className="border-t">
          <div className="mx-auto max-w-6xl px-6 py-6 text-sm">
            © {new Date().getFullYear()} Athina AC. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://athina-ac.gr"),
  title: {
    default: "Athina AC",
    template: "%s | Athina AC",
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
        <header className="border-b">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-lg font-bold">
              Athina AC
            </Link>

            <div className="flex gap-4 text-sm">
              <Link href="/about">About</Link>
              <Link href="/programs">Programs</Link>
              <Link href="/womens-empowerment">Women’s Empowerment</Link>
              <Link href="/camps">Camps</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/news">News</Link>
              <Link href="/contact">Contact</Link>
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
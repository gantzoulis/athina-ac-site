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
        {children}
        
      </body>
    </html>
  );
}
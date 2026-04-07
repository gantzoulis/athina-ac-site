import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
  description:
    "Read the latest announcements, school updates, and news from Athina AC.",
};

export default function NewsPage() {
  return (
    <main>
      <h1>News</h1>
      <p>Latest announcements and updates.</p>
    </main>
  );
}
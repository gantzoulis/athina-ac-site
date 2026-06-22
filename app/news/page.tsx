import { Suspense } from "react";
import type { Metadata } from "next";
import NewsPageContent from "@/components/pages/NewsPageContent";

export const metadata: Metadata = {
  title: "Νέα",
  description: "Νέα και ανακοινώσεις από τον Α.Σ. Αθηνά.",
};

export default function NewsPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-[70vh] bg-zinc-950 px-6 py-24 text-white">
          <div className="mx-auto max-w-6xl text-zinc-400">Loading...</div>
        </main>
      }
    >
      <NewsPageContent />
    </Suspense>
  );
}
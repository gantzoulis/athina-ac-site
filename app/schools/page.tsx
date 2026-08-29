import { Suspense } from "react";
import type { Metadata } from "next";

import SchoolsPageContent from "@/components/pages/SchoolsPageContent";

export const metadata: Metadata = {
  title: "Δίκτυο Σχολών",
  description:
    "Βρείτε σχολές και συνεργαζόμενους χώρους του δικτύου Hwal Moo Do.",
};

export default function SchoolsPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-[70vh] bg-zinc-50 px-6 py-24">
          <div className="mx-auto max-w-6xl text-zinc-500">
            Loading...
          </div>
        </main>
      }
    >
      <SchoolsPageContent />
    </Suspense>
  );
}
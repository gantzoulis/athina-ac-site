// components/schools/SchoolsGrid.tsx

"use client";

import { useEffect, useState } from "react";

import type { SiteLocale } from "@/content/types";
import {
  getActiveSchools,
  type PublicSchool,
} from "@/lib/schools";

import SchoolCard from "@/components/schools/SchoolCard";

type SchoolsGridProps = {
  locale: SiteLocale;
};

export default function SchoolsGrid({
  locale,
}: SchoolsGridProps) {
  const [schools, setSchools] = useState<PublicSchool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadSchools() {
      try {
        setError(false);

        const data = await getActiveSchools();

        setSchools(data);
      } catch (error) {
        console.error("Failed to load schools:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    void loadSchools();
  }, []);

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="h-80 animate-pulse rounded-3xl border border-zinc-200 bg-white"
          />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-3xl border border-zinc-200 bg-white p-8 text-zinc-600">
        {locale === "el"
          ? "Δεν ήταν δυνατή η φόρτωση του δικτύου σχολών."
          : "We couldn't load the school network."}
      </div>
    );
  }

  if (schools.length === 0) {
    return (
      <div className="rounded-3xl border border-zinc-200 bg-white p-8 text-zinc-600">
        {locale === "el"
          ? "Το δίκτυο σχολών ενημερώνεται."
          : "Our school network is being updated."}
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {schools.map((school) => (
        <SchoolCard
          key={school.id}
          school={school}
          locale={locale}
        />
      ))}
    </div>
  );
}
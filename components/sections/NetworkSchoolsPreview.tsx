"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

import type { SiteLocale } from "@/content/types";
import { ui } from "@/content/ui";
import {
  getFeaturedSchools,
  type PublicSchool,
} from "@/lib/schools";

import SchoolCard from "@/components/schools/SchoolCard";

type NetworkSchoolsPreviewProps = {
  locale: SiteLocale;
};

export default function NetworkSchoolsPreview({
  locale,
}: NetworkSchoolsPreviewProps) {
  const [schools, setSchools] = useState<PublicSchool[]>([]);
  const [loading, setLoading] = useState(true);

  const carouselRef = useRef<HTMLDivElement>(null);

  const t = ui[locale].home.network;

  useEffect(() => {
    async function loadSchools() {
      try {
        const data = await getFeaturedSchools();
        setSchools(data);
      } catch (error) {
        console.error("Failed to load schools:", error);
      } finally {
        setLoading(false);
      }
    }

    void loadSchools();
  }, []);

  function scroll(direction: "left" | "right") {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const amount = carousel.clientWidth * 0.8;

    carousel.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }

  return (
    <section className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              {t.eyebrow}
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              {t.title}
            </h2>

            <p className="leading-7 text-zinc-600">
              {t.description}
            </p>
          </div>

          <Link
            href="/schools/"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand-primary transition hover:gap-3"
          >
            {locale === "el"
              ? "Όλο το Δίκτυο"
              : "View all schools"}

            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {loading ? (
          <div className="grid gap-6 md:grid-cols-3">
            {[0, 1, 2].map((item) => (
              <div
                key={item}
                className="h-80 animate-pulse rounded-3xl border border-zinc-200 bg-white"
              />
            ))}
          </div>
        ) : schools.length === 0 ? (
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 text-zinc-600">
            {locale === "el"
              ? "Το δίκτυο σχολών ενημερώνεται."
              : "Our school network is being updated."}
          </div>
        ) : (
          <div className="relative">
            <div
              ref={carouselRef}
              className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {schools.map((school) => (
                <div
                  key={school.id}
                  className="w-[85%] shrink-0 snap-start sm:w-[60%] md:w-[calc((100%-3rem)/3)]"
                >
                  <SchoolCard
                    school={school}
                    locale={locale}
                  />
                </div>
              ))}
            </div>

            {schools.length > 1 ? (
              <div className="mt-6 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => scroll("left")}
                  aria-label="Previous schools"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-700 transition hover:border-brand-primary hover:text-brand-primary"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={() => scroll("right")}
                  aria-label="Next schools"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-700 transition hover:border-brand-primary hover:text-brand-primary"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
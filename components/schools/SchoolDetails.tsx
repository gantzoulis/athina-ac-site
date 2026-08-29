"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ExternalLink,
  MapPin,
  Phone,
} from "lucide-react";

import type { SiteLocale } from "@/content/types";
import {
  getActiveSchoolBySlug,
  type PublicSchool,
} from "@/lib/schools";

type SchoolDetailsProps = {
  slug: string;
  locale: SiteLocale;
};

export default function SchoolDetails({
  slug,
  locale,
}: SchoolDetailsProps) {
  const [school, setSchool] = useState<PublicSchool | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function loadSchool() {
      try {
        const data = await getActiveSchoolBySlug(slug);

        if (!data) {
          setNotFound(true);
          return;
        }

        setSchool(data);
      } catch (error) {
        console.error("Failed to load school:", error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    }

    void loadSchool();
  }, [slug]);

  if (loading) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="h-[420px] animate-pulse rounded-3xl bg-zinc-100" />
      </div>
    );
  }

  if (notFound || !school) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-zinc-200 bg-white p-8">
          <h1 className="text-2xl font-bold text-zinc-900">
            {locale === "el"
              ? "Η σχολή δεν βρέθηκε."
              : "School not found."}
          </h1>

          <Link
            href="/schools/"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            {locale === "el"
              ? "Επιστροφή στο δίκτυο"
              : "Back to network"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/schools/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          {locale === "el"
            ? "Όλο το Δίκτυο"
            : "All schools"}
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div>
            {school.imageUrl ? (
              <div className="overflow-hidden rounded-3xl bg-zinc-100">
                <img
                  src={school.imageUrl}
                  alt={school.name}
                  className="aspect-[4/3] h-full w-full object-cover"
                />
              </div>
            ) : null}
          </div>

          <div className="lg:pt-4">
            {school.city ? (
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                {school.city}
              </p>
            ) : null}

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
              {school.name}
            </h1>

            {school.description ? (
              <p className="mt-6 text-lg leading-8 text-zinc-600">
                {school.description}
              </p>
            ) : null}

            <div className="mt-8 space-y-4 border-t border-zinc-200 pt-8">
              {school.address ? (
                <div className="flex items-start gap-3 text-zinc-700">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-primary" />
                  <span>{school.address}</span>
                </div>
              ) : null}

              {school.phone ? (
                <a
                  href={`tel:${school.phone}`}
                  className="flex items-center gap-3 text-zinc-700 transition hover:text-brand-primary"
                >
                  <Phone className="h-5 w-5 text-brand-primary" />
                  {school.phone}
                </a>
              ) : null}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {school.mapUrl ? (
                <a
                  href={school.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  <MapPin className="h-4 w-4" />
                  {locale === "el"
                    ? "Οδηγίες πρόσβασης"
                    : "Directions"}
                </a>
              ) : null}

              {school.websiteUrl ? (
                <a
                  href={school.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:border-brand-primary hover:text-brand-primary"
                >
                  <ExternalLink className="h-4 w-4" />
                  Website
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
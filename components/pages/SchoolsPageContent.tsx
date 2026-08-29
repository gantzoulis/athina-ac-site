"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ExternalLink,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import SchoolCard from "@/components/schools/SchoolCard";
import {
  getActiveSchools,
  getActiveSchoolBySlug,
  type PublicSchool,
} from "@/lib/schools";

export default function SchoolsPageContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("school");

  const [schools, setSchools] = useState<PublicSchool[]>([]);
  const [school, setSchool] = useState<PublicSchool | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if (slug) {
      getActiveSchoolBySlug(slug)
        .then(setSchool)
        .finally(() => setLoading(false));

      return;
    }

    getActiveSchools()
      .then(setSchools)
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-[70vh] bg-zinc-50 px-6 py-24">
        <div className="mx-auto max-w-6xl text-zinc-500">
          Loading...
        </div>
      </main>
    );
  }

  if (slug && !school) {
    return (
      <main className="min-h-[70vh] bg-zinc-50 px-6 py-24">
        <div className="mx-auto max-w-4xl space-y-6">
          <h1 className="text-4xl font-bold text-zinc-900">
            Η σχολή δεν βρέθηκε
          </h1>

          <Link
            href="/schools/"
            className="inline-flex items-center gap-2 font-semibold text-brand-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Επιστροφή στο δίκτυο
          </Link>
        </div>
      </main>
    );
  }

  if (slug && school) {
    return (
      <main className="bg-zinc-50">
        <section className="bg-zinc-950 text-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <Link
              href="/schools/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Πίσω στο Δίκτυο
            </Link>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                  {school.city}
                </p>

                <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
                  {school.name}
                </h1>

                {school.description ? (
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                    {school.description}
                  </p>
                ) : null}
              </div>

              {school.imageUrl ? (
                <div className="overflow-hidden rounded-3xl border border-zinc-800">
                  <img
                    src={school.imageUrl}
                    alt={school.name}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              ) : null}
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Στοιχεία σχολής
                </p>

                <div className="mt-6 space-y-5">
                  {school.address ? (
                    <div className="flex items-start gap-4">
                      <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-primary" />

                      <div>
                        <p className="text-sm font-semibold text-zinc-900">
                          Διεύθυνση
                        </p>

                        <p className="mt-1 text-zinc-600">
                          {school.address}
                        </p>
                      </div>
                    </div>
                  ) : null}

                  {school.phone ? (
                    <div className="flex items-start gap-4">
                      <Phone className="mt-1 h-5 w-5 shrink-0 text-brand-primary" />

                      <div>
                        <p className="text-sm font-semibold text-zinc-900">
                          Τηλέφωνο
                        </p>

                        <a
                          href={`tel:${school.phone}`}
                          className="mt-1 block text-zinc-600 transition hover:text-brand-primary"
                        >
                          {school.phone}
                        </a>
                      </div>
                    </div>
                  ) : null}

                  {school.email ? (
                    <div className="flex items-start gap-4">
                      <Mail className="mt-1 h-5 w-5 shrink-0 text-brand-primary" />

                      <div>
                        <p className="text-sm font-semibold text-zinc-900">
                          Email
                        </p>

                        <a
                          href={`mailto:${school.email}`}
                          className="mt-1 block text-zinc-600 transition hover:text-brand-primary"
                        >
                          {school.email}
                        </a>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-zinc-900">
                  Επικοινωνήστε με τη σχολή
                </h2>

                <p className="mt-3 leading-7 text-zinc-600">
                  Δείτε περισσότερες πληροφορίες ή βρείτε τη σχολή στον χάρτη.
                </p>

                <div className="mt-8 flex flex-col gap-3">
                  {school.mapUrl ? (
                    <a
                      href={school.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                    >
                      <MapPin className="h-4 w-4" />
                      Οδηγίες πρόσβασης
                    </a>
                  ) : null}

                  {school.websiteUrl ? (
                    <a
                      href={school.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:border-brand-primary hover:text-brand-primary"
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
      </main>
    );
  }

  return (
    <main className="bg-zinc-50">
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-primary">
            Δίκτυο Σχολών
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
            Βρείτε μια σχολή κοντά σας.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
            Ανακαλύψτε τις σχολές και τους συνεργαζόμενους χώρους εκπαίδευσης
            του δικτύου Hwal Moo Do.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          {schools.length === 0 ? (
            <p className="text-zinc-600">
              Το δίκτυο σχολών ενημερώνεται.
            </p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {schools.map((school) => (
                <SchoolCard
                  key={school.id}
                  school={school}
                  locale="el"
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
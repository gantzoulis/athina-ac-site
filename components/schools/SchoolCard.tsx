import type { PublicSchool } from "@/lib/schools";
import Link from "next/link";

type SchoolCardProps = {
  school: PublicSchool;
  locale: "el" | "en";
};

export default function SchoolCard({
  school,
  locale,
}: SchoolCardProps) {
  return (
    <Link
        href={`/schools/?school=${encodeURIComponent(school.slug)}`}
        className="group flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-brand-primary/40"
        >
      {school.imageUrl ? (
        <div className="aspect-[16/10] overflow-hidden bg-zinc-100">
          <img
            src={school.imageUrl}
            alt={school.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-6">
        {school.city ? (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
            {school.city}
          </p>
        ) : null}

        <h3 className="mt-2 text-xl font-semibold text-zinc-900">
          {school.name}
        </h3>

        {school.description ? (
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-600">
            {school.description}
          </p>
        ) : null}

        <span className="mt-auto pt-6 text-sm font-semibold text-brand-primary">
          {locale === "el" ? "Δείτε περισσότερα" : "Learn more"} →
        </span>
      </div>
    </Link>
  );
}
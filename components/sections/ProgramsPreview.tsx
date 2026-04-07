import Link from "next/link";

const programs = [
  {
    title: "Hwal Moo Do",
    description:
      "A complete martial art focused on discipline, self-development, technique, and practical skill.",
    href: "/programs/hwal-moo-do",
  },
  {
    title: "Kickboxing",
    description:
      "Dynamic training for fitness, technique, confidence, and competitive development.",
    href: "/programs/kickboxing",
  },
];

export default function ProgramsPreview() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Programs
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
            Training paths for different goals and journeys.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {programs.map((program) => (
            <div
              key={program.title}
              className="rounded-3xl border border-zinc-200 p-8 shadow-sm"
            >
              <h3 className="text-2xl font-semibold text-zinc-900">
                {program.title}
              </h3>
              <p className="mt-4 leading-7 text-zinc-600">
                {program.description}
              </p>
              <Link
                href={program.href}
                className="mt-6 inline-block text-sm font-semibold text-zinc-900 underline-offset-4 hover:underline"
              >
                View Program
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
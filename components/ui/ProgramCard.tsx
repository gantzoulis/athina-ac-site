import Link from "next/link";

type ProgramCardProps = {
  title: string;
  description: string;
  href: string;
  cta: string;
  image: string;
};

export default function ProgramCard({
  title,
  description,
  href,
  cta,
  image,
}: ProgramCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 text-white shadow-sm">
      <div className="relative h-56 w-full overflow-hidden bg-zinc-900">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain bg-zinc-100 transition duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
      </div>

      <div className="p-8">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>

        <p className="mt-4 leading-7 text-zinc-300">{description}</p>

        <Link
          href={href}
          className="mt-6 inline-block text-sm font-semibold text-brand-primary underline-offset-4 hover:underline"
        >
          {cta}
        </Link>
      </div>
    </div>
  );
}
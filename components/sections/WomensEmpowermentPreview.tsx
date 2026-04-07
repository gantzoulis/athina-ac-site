import Link from "next/link";

export default function WomensEmpowermentPreview() {
  return (
    <section className="bg-zinc-900 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Ενδυνάμωση Γυναικών
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Δύναμη, αυτοπεποίθηση και παρουσία.
          </h2>
        </div>

        <div className="space-y-5 text-zinc-300">
          <p>
            Δημιουργούμε έναν χώρο όπου οι γυναίκες μπορούν να νιώσουν ασφάλεια,
            στήριξη και ενδυνάμωση μέσα από την κίνηση, την εκπαίδευση και τις
            πολεμικές τέχνες.
          </p>

          <p>
            Δεν αφορά μόνο τη φυσική κατάσταση, αλλά και την αυτοπεποίθηση, την
            αυτοπροστασία και την εσωτερική δύναμη.
          </p>

          <Link
            href="/womens-empowerment"
            className="inline-block rounded-2xl bg-white px-5 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
          >
            Ανακαλύψτε περισσότερα
          </Link>
        </div>
      </div>
    </section>
  );
}
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Η Σχολή
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
            Ένας χώρος με αξίες, εξέλιξη και δυνατή κοινότητα.
          </h2>
        </div>

        <div className="space-y-5 text-zinc-600">
          <p>
           O Α.Σ. Αθηνά είναι κάτι περισσότερο από ένας χώρος προπόνησης. Είναι
            ένα υποστηρικτικό περιβάλλον όπου οι μαθητές καλλιεργούν πειθαρχία,
            αυτοπεποίθηση, αντοχή και σεβασμό μέσα από τις πολεμικές τέχνες.
          </p>

          <p>
            Στόχος μας είναι να προσφέρουμε ποιοτική εκπαίδευση σε ένα φιλόξενο
            περιβάλλον για κάθε μαθητή, ανεξαρτήτως ηλικίας ή επιπέδου.
          </p>

          <Link
            href="/about"
            className="inline-block rounded-2xl border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 transition hover:bg-white"
          >
            Μάθετε περισσότερα
          </Link>
        </div>
      </div>
    </section>
  );
}
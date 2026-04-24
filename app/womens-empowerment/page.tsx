import type { Metadata } from "next";
import ComingSoonPage from "@/components/ui/ComingSoonPage";

export const metadata: Metadata = {
  title: "Women’s Empowerment",
  description:
    "Μάθετε περισσότερα για το Women’s Empowerment section του Α.Σ. Αθηνά.",
};

export default function WomensEmpowermentPage() {
  return (
    <ComingSoonPage
      locale="el"
      eyebrow="Women’s Empowerment"
      title="Η σελίδα του Women’s Empowerment ετοιμάζεται"
      description="Πολύ σύντομα θα μπορείτε να δείτε περισσότερα για τη φιλοσοφία, την ενδυνάμωση, την αυτοπεποίθηση και την υποστηρικτική προσέγγιση αυτού του χώρου."
    />
  );
}
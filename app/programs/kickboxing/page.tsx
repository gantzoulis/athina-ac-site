import type { Metadata } from "next";
import ComingSoonPage from "@/components/ui/ComingSoonPage";

export const metadata: Metadata = {
  title: "Kickboxing",
  description:
    "Ανακαλύψτε περισσότερα για τα προγράμματα Kickboxing του Α.Σ. Αθηνά.",
};

export default function KickboxingPage() {
  return (
    <ComingSoonPage
      locale="el"
      eyebrow="Kickboxing"
      title="Η σελίδα του Kickboxing ετοιμάζεται"
      description="Σύντομα θα μπορείτε να δείτε περισσότερα για τα μαθήματα Kickboxing, τα επίπεδα προπόνησης και τη συνολική μας φιλοσοφία."
    />
  );
}
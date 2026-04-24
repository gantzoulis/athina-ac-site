import type { Metadata } from "next";
import ComingSoonPage from "@/components/ui/ComingSoonPage";

export const metadata: Metadata = {
  title: "Νέα",
  description:
    "Διαβάστε νέα, ανακοινώσεις και ενημερώσεις από τον Α.Σ. Αθηνά.",
};

export default function NewsPage() {
  return (
    <ComingSoonPage
      locale="el"
      eyebrow="News"
      title="Η σελίδα των νέων ετοιμάζεται"
      description="Σύντομα θα μπορείτε να δείτε ανακοινώσεις, ενημερώσεις, σημαντικά νέα και δράσεις από τη σχολή μας."
    />
  );
}
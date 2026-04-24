import type { Metadata } from "next";
import ComingSoonPage from "@/components/ui/ComingSoonPage";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Δείτε φωτογραφίες και στιγμές από τη σχολή, τις προπονήσεις και τις δράσεις του Α.Σ. Αθηνά.",
};

export default function GalleryPage() {
  return (
    <ComingSoonPage
      locale="el"
      eyebrow="Gallery"
      title="Η gallery ετοιμάζεται"
      description="Πολύ σύντομα θα μπορείτε να δείτε φωτογραφίες, στιγμές από προπονήσεις, camps, events και τη ζωή της σχολής μας."
    />
  );
}
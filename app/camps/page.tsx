import type { Metadata } from "next";
import ComingSoonPage from "@/components/ui/ComingSoonPage";

export const metadata: Metadata = {
  title: "Camps",
  description:
    "Δείτε πληροφορίες για camps, events και ειδικές δράσεις του Α.Σ. Αθηνά.",
};

export default function CampsPage() {
  return (
    <ComingSoonPage
      locale="el"
      eyebrow="Camps & Events"
      title="Η σελίδα των camps ετοιμάζεται"
      description="Σύντομα θα μπορείτε να δείτε upcoming camps, ειδικά events, training weekends και σημαντικές δράσεις της σχολής μας."
    />
  );
}
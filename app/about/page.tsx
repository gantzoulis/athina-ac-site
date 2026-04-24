import { Metadata } from "next";
import ComingSoonPage from "@/components/ui/ComingSoonPage";

export const metadata: Metadata = {
  title: "About the School",
  description:
    "Learn more about Athina AC, our philosophy, our training values, and our martial arts community in Athens.",
};


export default function AboutPage() {
  return (
    <ComingSoonPage
      locale="el"
      eyebrow="About"
      title="Η σελίδα της σχολής ετοιμάζεται"
      description="Πολύ σύντομα θα μπορείτε να δείτε περισσότερα για τη φιλοσοφία, την ταυτότητα και την πορεία του Α.Σ. Αθηνά. Μέχρι τότε, μπορείτε να επικοινωνήσετε μαζί μας για οποιαδήποτε πληροφορία."
    />
  );
}
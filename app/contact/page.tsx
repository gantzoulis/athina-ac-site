import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Athina AC to learn more about martial arts classes, Kickboxing, camps, and training opportunities in Athens.",
};

export default function ContactPage() {
  return (
    <main>
      <h1>Contact</h1>
      <p>Get in touch with us.</p>
    </main>
  );
}
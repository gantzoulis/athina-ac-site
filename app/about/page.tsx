import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About the School",
  description:
    "Learn more about Athina AC, our philosophy, our training values, and our martial arts community in Athens.",
};


export default function AboutPage() {
  return (
    <main>
      <h1>About</h1>
      <p>Information about the school.</p>
    </main>
  );
}
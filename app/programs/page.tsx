import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore the training programs of Athina AC, including Hwal Moo Do and Kickboxing in Athens.",
};

export default function ProgramsPage() {
  return (
    <main>
      <h1>Programs</h1>
      <p>Explore our training programs.</p>
    </main>
  );
}
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kickboxing",
  description:
    "Join Kickboxing classes at Athina AC in Athens for fitness, technique, confidence, and competitive development.",
};

export default function KickboxingPage() {
  return (
    <main>
      <h1>Kickboxing</h1>
      <p>Learn more about Kickboxing.</p>
    </main>
  );
}
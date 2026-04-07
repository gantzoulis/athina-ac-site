import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Camps",
  description:
    "Explore camps, seminars, and special training events by Athina AC in Athens.",
};

export default function CampsPage() {
  return (
    <main>
      <h1>Camps</h1>
      <p>Information about camps, seminars, and events.</p>
    </main>
  );
}
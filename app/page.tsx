import type { Metadata } from "next";
import HomePageContent from "@/components/pages/HomePageContent";

export const metadata: Metadata = {
  title: "Martial Arts & Kickboxing in Athens",
  description:
    "Athina AC offers Hwal Moo Do, Kickboxing, camps, and women’s empowerment training in Athens for children, teens, and adults.",
};

export default function HomePage() {
  return <HomePageContent />;
}
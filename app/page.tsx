import AboutPreview from "@/components/sections/AboutPreview";
import CampsPreview from "@/components/sections/CampsPreview";
import ContactCTA from "@/components/sections/ContactCTA";
import Hero from "@/components/sections/Hero";
import NewsPreview from "@/components/sections/NewsPreview";
import ProgramsPreview from "@/components/sections/ProgramsPreview";
import WomensEmpowermentPreview from "@/components/sections/WomensEmpowermentPreview";
import NetworkSchoolsPreview from "@/components/sections/NetworkSchoolsPreview";
//import BrandStatement from "@/components/sections/BrandStatement";

import { Metadata } from "next";

const locale ="el" as const;

export const metadata: Metadata = {
  title: "Martial Arts & Kickboxing in Athens",
  description:
    "Athina AC offers Hwal Moo Do, Kickboxing, camps, and women’s empowerment training in Athens for children, teens, and adults.",
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <ProgramsPreview locale={locale}/>
      <WomensEmpowermentPreview />
      <CampsPreview />
      <NetworkSchoolsPreview locale={locale}/>
      <NewsPreview locale={locale}/>
      <ContactCTA />
    </main>
  );
}
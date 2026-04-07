import AboutPreview from "@/components/sections/AboutPreview";
import CampsPreview from "@/components/sections/CampsPreview";
import ContactCTA from "@/components/sections/ContactCTA";
import Hero from "@/components/sections/Hero";
import NewsPreview from "@/components/sections/NewsPreview";
import ProgramsPreview from "@/components/sections/ProgramsPreview";
import WomensEmpowermentPreview from "@/components/sections/WomensEmpowermentPreview";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <ProgramsPreview />
      <WomensEmpowermentPreview />
      <CampsPreview />
      <NewsPreview />
      <ContactCTA />
    </main>
  );
}
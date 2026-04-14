"use client";

import { useState } from "react";
import AboutPreview from "@/components/sections/AboutPreview";
import CampsPreview from "@/components/sections/CampsPreview";
import ContactCTA from "@/components/sections/ContactCTA";
import Hero from "@/components/sections/Hero";
import NetworkSchoolsPreview from "@/components/sections/NetworkSchoolsPreview";
import NewsPreview from "@/components/sections/NewsPreview";
import ProgramsPreview from "@/components/sections/ProgramsPreview";
import WomensEmpowermentPreview from "@/components/sections/WomensEmpowermentPreview";
import type { SiteLocale } from "@/content/types";
import HomePageShell from "@/components/pages/HomePageShell";

export default function HomePageContent() {
  const [locale, setLocale] = useState<SiteLocale>("el");

  return (
    <HomePageShell locale={locale} onLocaleChange={setLocale}>
      <main>
        <Hero locale={locale} />
        <AboutPreview locale={locale} />
        <ProgramsPreview locale={locale} />
        <WomensEmpowermentPreview locale={locale} />
        <CampsPreview locale={locale} />
        <NetworkSchoolsPreview locale={locale} />
        <NewsPreview locale={locale} />
        <ContactCTA locale={locale} />
      </main>
    </HomePageShell>
  );
}
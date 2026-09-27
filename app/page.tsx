import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/hero/Hero";
import UnifiedWork from "@/components/work/UnifiedWork";
import JournalAbout from "@/components/journal/JournalAbout";
import Footer from "@/components/footer/Footer";
import { getAllCaseStudies } from "@/lib/mdx";

export default function Home() {
  const caseStudies = getAllCaseStudies();

  return (
    <div className="relative min-h-screen flex flex-col dot-grid-bg selection:bg-[#F3E8FF] selection:text-[#8614FF]">
      {/* 1. Minimal Non-Sticky Header */}
      <Header />

      {/* 2. Hero Section (~80vh, compact headline, curved marquee with 10 hanging cards) */}
      <Hero />

      {/* Main Content Narrative */}
      <main className="flex-1">
        {/* 3. Unified Work Flow (featured projects heading -> 2x2 Emergent folders 600px -> Case Studies) */}
        <UnifiedWork caseStudies={caseStudies} />

        {/* 4. Personal Journal / Scrapbook */}
        <JournalAbout />
      </main>

      {/* 5. Contact Section & Flowy 600px Brick Breaker Game */}
      <Footer />
    </div>
  );
}

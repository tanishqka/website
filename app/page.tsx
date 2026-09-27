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
      <Header />
      <Hero />
      <main className="flex-1">
        <UnifiedWork caseStudies={caseStudies} />
        <JournalAbout />
      </main>
      <Footer />
    </div>
  );
}

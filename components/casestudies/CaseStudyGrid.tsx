import React from "react";
import { CaseStudyFrontmatter } from "@/types";
import CaseStudyCard from "./CaseStudyCard";

interface CaseStudyGridProps {
  projects: CaseStudyFrontmatter[];
}

export function CaseStudyGrid({ projects }: CaseStudyGridProps) {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#ECECE8] bg-white text-[15px] font-medium uppercase tracking-wider text-[#666666] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#606EDB]" />
            <span>Selected Case Studies // 01 — {String(projects.length).padStart(2, "0")}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] text-[#121212] uppercase leading-[1.0]">
            Deep Dives
          </h2>
          <p className="mt-4 text-[15px] sm:text-base text-[#666666] leading-relaxed">
            In-depth documentation exploring system architecture, spatial workflows, and tangible interaction design.
          </p>
        </div>

        {/* Editorial Layout: Large featured first, then offset pairs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-14">
          {projects.map((project, idx) => (
            <CaseStudyCard
              key={project.slug}
              project={project}
              featured={idx === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudyGrid;

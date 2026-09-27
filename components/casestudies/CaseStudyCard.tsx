"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CaseStudyFrontmatter } from "@/types";
import { ArrowUpRight } from "lucide-react";

interface CaseStudyCardProps {
  project: CaseStudyFrontmatter;
  featured?: boolean;
}

export function CaseStudyCard({ project, featured = false }: CaseStudyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className={`group relative flex flex-col ${
        featured ? "lg:col-span-2 mb-8" : "col-span-1"
      }`}
    >
      <Link
        href={`/work/${project.slug}`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8614FF] rounded-2xl"
      >
        {/* Large Unboxed Project Image */}
        {/* Project Image: Fit height to actual image, never cropped */}
        <div className="relative overflow-hidden rounded-2xl bg-[#F5F5F2] w-full shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#ECECE8] transition-all duration-500 group-hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]">
          <img
            src={project.cover}
            alt={project.title}
            loading="lazy"
            className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />

          {/* Quick Corner Tag */}
          <div className="absolute top-4 left-4 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-xs border border-[#ECECE8] text-[15px] font-medium text-[#181818]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8614FF]" />
            <span>{project.type}</span>
          </div>

          <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs border border-[#ECECE8] flex items-center justify-center text-[#181818] group-hover:bg-[#8614FF] group-hover:text-white group-hover:border-[#8614FF] transition-all">
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Project Typography & Metadata directly on the canvas */}
        <div className="pt-6 pb-2">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#121212] group-hover:text-[#8614FF] transition-colors">
              {project.title}
            </h3>
            <span className="text-[15px] text-[#888884] shrink-0 font-medium">
              {project.date}
            </span>
          </div>

          <p className="mt-2.5 text-base sm:text-lg text-[#666666] max-w-3xl leading-relaxed">
            {project.description}
          </p>

          <div className="mt-4 flex items-center gap-3 text-[15px] text-[#888884]">
            <span className="text-[#181818] font-medium">{project.role}</span>
            <span>•</span>
            <span>{project.timeline || "3 Months"}</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default CaseStudyCard;

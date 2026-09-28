"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { emergentCollections } from "@/data/emergent";
import { interventions } from "@/data/interventions";
import { CaseStudyFrontmatter, EmergentCollection } from "@/types";
import FolderCard from "@/components/emergent/FolderCard";
import GalleryViewer from "@/components/emergent/GalleryViewer";
import { ArrowUpRight } from "lucide-react";

interface UnifiedWorkProps {
  caseStudies: CaseStudyFrontmatter[];
}

export function UnifiedWork({ caseStudies }: UnifiedWorkProps) {
  const [selectedCollection, setSelectedCollection] =
    useState<EmergentCollection | null>(() => {
      if (typeof window === "undefined") return null;
      const params = new URLSearchParams(window.location.search);
      const galleryParam = params.get("gallery");
      if (galleryParam) {
        return emergentCollections.find((c) => c.slug === galleryParam) || null;
      }
      return null;
    });

  const handleOpen = (col: EmergentCollection) => {
    setSelectedCollection(col);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("gallery", col.slug);
      window.history.pushState({}, "", url.toString());
    }
  };

  const handleClose = () => {
    setSelectedCollection(null);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.delete("gallery");
      window.history.pushState({}, "", url.toString());
    }
  };

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-10">
          <span className="text-[15px] font-semibold uppercase tracking-wider text-[#888884]">
            my recent work from emergent
          </span>
        </div>

        <div className="max-w-[600px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 mb-28 justify-items-center">
          {emergentCollections.map((collection, index) => (
            <FolderCard
              key={collection.slug}
              collection={collection}
              index={index}
              onClick={() => handleOpen(collection)}
            />
          ))}
        </div>

        <div className="text-center mb-14">
          <span className="text-[15px] font-semibold uppercase tracking-wider text-[#888884]">
            More projects I&apos;ve worked on recently
          </span>
        </div>

        <div className="max-w-4xl mx-auto space-y-24 mb-28">
          {caseStudies.map((project, idx) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group"
            >
              <Link
                href={`/work/${project.slug}`}
                className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8614FF] rounded-2xl"
              >
                <div className="relative overflow-hidden rounded-2xl bg-[#FAFAFA] border border-[#ECECE8] shadow-[0_8px_24px_rgba(0,0,0,0.03)] group-hover:shadow-[0_16px_36px_rgba(0,0,0,0.07)] transition-all duration-500">
                  <img
                    src={project.cover}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 border border-[#ECECE8] flex items-center justify-center text-[#181818] group-hover:bg-[#8614FF] group-hover:text-white group-hover:border-[#8614FF] transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <div className="pt-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#121212] group-hover:text-[#8614FF] transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-[15px] text-[#888884] font-medium shrink-0">
                      {project.date}
                    </span>
                  </div>

                  <p className="mt-2 text-base text-[#666666] leading-relaxed max-w-2xl">
                    {project.description}
                  </p>

                  <div className="mt-3 flex items-center gap-3 text-[15px] text-[#888884]">
                    <span>{project.role}</span>
                    <span>•</span>
                    <span>{project.type}</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl tracking-tight font-semibold text-black mb-2">
            Little interventions
          </h2>
          <div className="text-[1rem] font-medium text-black/75  mb-8">
            A series where I make small tweaks to improve the digital products we use daily. They’re great, but they could be even <span className="text-[#8614FF] font-semibold">better!</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
            {interventions.map((item, idx) => (
              <motion.a
                key={item.id || item.url || idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8614FF] rounded-xl"
              >
                <div className="relative overflow-hidden rounded-xl bg-[#FAFAFA] border border-[#ECECE8] w-full shadow-[0_4px_12px_rgba(0,0,0,0.03)] group-hover:shadow-[0_10px_24px_rgba(0,0,0,0.07)] transition-all">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-auto block transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                  <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-white/90 border border-[#ECECE8] flex items-center justify-center text-[#181818] group-hover:bg-[#8614FF] group-hover:text-white transition-all">
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>

                <div className="pt-3">
                  {(item.tag || item.date) && (
                    <div className="flex items-center justify-between text-[15px] text-[#888884] mb-1">
                      {item.tag && <span className="text-[#8614FF] font-semibold">{item.tag}</span>}
                      {item.date && <span>{item.date}</span>}
                    </div>
                  )}
                  <h4 className="text-base font-bold text-[#121212] group-hover:text-[#8614FF] transition-colors">
                    {item.title}
                  </h4>
                  {item.description && (
                    <p className="mt-0.5 text-[15px] text-[#666666] leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <GalleryViewer
        key={selectedCollection?.slug}
        collection={selectedCollection}
        onClose={handleClose}
      />
    </section>
  );
}

export default UnifiedWork;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { interventions } from "@/data/interventions";
import { ArrowUpRight } from "lucide-react";

export function InterventionsGrid() {
  return (
    <section id="interventions" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Open Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#ECECE8] bg-white text-[15px] font-medium uppercase tracking-wider text-[#666666] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8614FF]" />
            <span>Experiments // 01 — {String(interventions.length).padStart(2, "0")}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] text-[#121212] uppercase leading-[1.0]">
            Little Interventions
          </h2>
          <p className="mt-4 text-[15px] sm:text-base text-[#666666] leading-relaxed">
            Micro-interactions, shaders, physical dials, and quick prototypes exploring raw human-computer interfaces.
          </p>
        </div>

        {/* Minimal Unboxed Grid: 2 columns on tablet & desktop, height fits actual image size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
          {interventions.map((item, idx) => (
            <motion.a
              key={item.id || item.url || idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8614FF] rounded-xl"
            >
              {/* Fit height to actual image size, never cropped */}
              <div className="relative overflow-hidden rounded-xl bg-[#FAFAFA] border border-[#ECECE8] w-full shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-all duration-300 group-hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-auto block transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/90 border border-[#ECECE8] flex items-center justify-center text-[#181818] group-hover:bg-[#8614FF] group-hover:text-white group-hover:border-[#8614FF] transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Minimalist Metadata */}
              <div className="pt-4 flex-1 flex flex-col justify-between">
                <div>
                  {(item.tag || item.date) && (
                    <div className="flex items-center justify-between gap-2 mb-1.5 text-[15px]">
                      {item.tag && (
                        <span className="text-[#8614FF] font-semibold uppercase tracking-wider text-[15px]">
                          {item.tag}
                        </span>
                      )}
                      {item.date && (
                        <span className="text-[#888884] text-[15px]">
                          {item.date}
                        </span>
                      )}
                    </div>
                  )}

                  <h3 className="text-lg font-bold tracking-tight text-[#121212] group-hover:text-[#8614FF] transition-colors">
                    {item.title}
                  </h3>

                  {item.description && (
                    <p className="mt-1 text-[15px] text-[#666666] leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InterventionsGrid;

"use client";

import React from "react";
import { motion } from "framer-motion";

export function JournalAbout() {
  return (
    <section id="about" className="relative py-24 sm:py-36 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Open Header — No Box */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#ECECE8] bg-white text-[15px] uppercase tracking-wider text-[#666666] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#606EDB]" />
            <span>Field Notes & Ethos</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] text-[#121212] uppercase leading-[1.0]">
            Personal Journal
          </h2>
        </div>

        {/* Physical Scrapbook Notebook Object Placed Directly on the Canvas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl md:rounded-3xl border border-[#EBE8DF] bg-[#F8F7F2] paper-texture-subtle shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-6 sm:p-10 md:p-14 lg:p-16 md:rotate-[-0.5deg] transition-transform duration-500 hover:rotate-0"
        >
          {/* Top Washi Tape Strips (Overlapping edges) */}
          <div className="absolute -top-3 left-16 sm:left-24 z-20 w-28 sm:w-32 rotate-[-2deg] pointer-events-none drop-shadow-xs">
            <img
              src="/images/stickers/sticker-tape.svg"
              alt=""
              className="w-full h-auto"
            />
          </div>

          <div className="absolute -top-3 right-16 sm:right-28 z-20 w-24 sm:w-28 rotate-[3deg] pointer-events-none drop-shadow-xs">
            <img
              src="/images/stickers/sticker-tape.svg"
              alt=""
              className="w-full h-auto"
            />
          </div>

          {/* Central Journal Book Spine Crease Shadow */}
          <div
            className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 pointer-events-none bg-gradient-to-r from-transparent via-[#181818]/6 to-transparent z-10"
            aria-hidden="true"
          />

          {/* Opened Book Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 relative z-0">
            {/* ================= LEFT PAGE ================= */}
            <div className="relative flex flex-col justify-between pr-0 md:pr-4">
              <div>
                <div className="flex items-center justify-between border-b border-[#E5E2D8] pb-4 mb-6">
                  <span className="text-[15px] uppercase tracking-wider text-[#888884]">
                    PAGE 042 // ETHOS
                  </span>
                  <span className="text-[15px] text-[#606EDB] font-bold">
                    VOL. 26
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#181818] mb-6 leading-tight">
                  Designing tools that give humans superpowers, not more notifications.
                </h3>

                <p className="text-[15px] sm:text-base text-[#3A3A38] leading-relaxed mb-5">
                  I am a Product Designer working at the boundary between spatial interfaces, reactive canvas architectures, and machine intelligence. I believe the most enduring digital products feel physical, responsive, and quietly respectful of human attention.
                </p>

                <p className="text-[15px] sm:text-base text-[#3A3A38] leading-relaxed mb-6">
                  Over the past eight years, I have architected high-density software tools used by engineers, designers, and founders across the world. My process pairs rigorous systems design with playful micro-interactions and tactile prototypes.
                </p>

                {/* Hand-Drawn Style Quote Box */}
                <div className="relative my-6 p-4 rounded-xl border border-dashed border-[#181818]/30 bg-[#EFECE3]/70">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[15px] font-bold uppercase tracking-wider text-[#606EDB]">
                      ★ Studio Axiom
                    </span>
                  </div>
                  <p className="italic text-[15px] text-[#181818] leading-relaxed">
                    “If a software tool doesn’t feel tactile and responsive in under 100 milliseconds, users treat it like paperwork.”
                  </p>
                </div>
              </div>

              {/* Bottom Stickers & Toolstack on Left Page */}
              <div className="mt-8 pt-6 border-t border-[#E5E2D8] flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-[15px] uppercase tracking-wider text-[#888884] mb-1">
                    DAILY TOOLS
                  </div>
                  <div className="text-[15px] text-[#181818]">
                    Figma • React • Next.js • GLSL • Pen & Grid Paper
                  </div>
                </div>

                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="w-11 h-11 shrink-0 drop-shadow-xs cursor-pointer"
                >
                  <img
                    src="/images/stickers/sticker-star.svg"
                    alt="Star sticker"
                    className="w-full h-full"
                  />
                </motion.div>
              </div>
            </div>

            {/* ================= RIGHT PAGE ================= */}
            <div className="relative flex flex-col justify-between pl-0 md:pl-4">
              <div>
                <div className="flex items-center justify-between border-b border-[#E5E2D8] pb-4 mb-6">
                  <span className="text-[15px] uppercase tracking-wider text-[#888884]">
                    PAGE 043 // ARTIFACTS
                  </span>
                  <span className="text-[15px] text-[#888884]">
                    35MM / CAPTURES
                  </span>
                </div>

                <div className="relative space-y-6">
                  {/* Polaroid 1: Locked aspect ratio [16/10], never cropped */}
                  <motion.div
                    whileHover={{ scale: 1.03, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative rounded-xl p-3 bg-white border border-[#E5E2D8] shadow-[0_6px_18px_rgba(0,0,0,0.05)] rotate-[2deg] cursor-pointer"
                  >
                    <div className="overflow-hidden rounded-lg aspect-[16/10] bg-[#FAFAFA] flex items-center justify-center">
                      <img
                        src="/images/about/desk-sketch.svg"
                        alt="Studio desk prototypes"
                        className="w-full h-full object-contain block"
                      />
                    </div>
                    <div className="mt-3 flex items-center justify-between text-[15px] text-[#666666]">
                      <span>STUDIO DESK // MORNING SKETCHES</span>
                      <span className="text-[#606EDB] font-semibold">FIG. 01</span>
                    </div>
                  </motion.div>

                  {/* Polaroid 2 & Postal Stamp: Locked aspect ratio [4/3], never cropped */}
                  <div className="relative flex flex-col sm:flex-row items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.03, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="w-full sm:w-3/5 rounded-xl p-3 bg-white border border-[#E5E2D8] shadow-[0_6px_18px_rgba(0,0,0,0.05)] rotate-[-3deg] cursor-pointer"
                    >
                      <div className="overflow-hidden rounded-lg aspect-[4/3] bg-[#FAFAFA] flex items-center justify-center">
                        <img
                          src="/images/about/travel-notes.svg"
                          alt="Field notes"
                          className="w-full h-full object-contain block"
                        />
                      </div>
                      <div className="mt-2 text-[15px] text-[#666666]">
                        FIELD OBS // SPATIAL STUDY
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.08, rotate: -4 }}
                      className="w-full sm:w-2/5 flex flex-col items-center justify-center p-2 cursor-pointer"
                    >
                      <img
                        src="/images/stickers/sticker-stamp.svg"
                        alt="Verified Archive Stamp"
                        className="w-36 h-auto drop-shadow-xs"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Bottom Scrapbook Stickers & Barcode */}
              <div className="mt-8 pt-6 border-t border-[#E5E2D8] flex items-center justify-between gap-4">
                <div className="w-36 sm:w-44">
                  <img
                    src="/images/stickers/sticker-barcode.svg"
                    alt="Serial barcode"
                    className="w-full h-auto"
                  />
                </div>

                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-10 h-10 shrink-0 cursor-pointer"
                >
                  <img
                    src="/images/stickers/sticker-smile.svg"
                    alt="Smile badge"
                    className="w-full h-full"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default JournalAbout;

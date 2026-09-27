"use client";

import React from "react";
import { motion } from "framer-motion";

export function JournalAbout() {
  return (
    <section id="about" className="relative py-24 sm:py-36 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <h2 className="text-3xl text-[#121212] leading-[1.0]">
            About me
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl md:rounded-3xl border border-[#EBE8DF] bg-[#F8F7F2] paper-texture-subtle shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-6 sm:p-10 md:p-14 lg:p-16 md:rotate-[-0.5deg] transition-transform duration-500 hover:rotate-0"
        >
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

          <div
            className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 pointer-events-none bg-gradient-to-r from-transparent via-[#181818]/6 to-transparent z-10"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 relative z-0">
            <div className="relative flex flex-col justify-between pr-0 md:pr-4">
              <div>
                <div className="flex items-center justify-between border-b border-[#E5E2D8] pb-4 mb-6">
                  <span className="text-[15px] uppercase tracking-wider text-[#888884]">
                    PAGE 042 // ME
                  </span>
                  <span className="text-[15px] text-[#8614FF] font-bold">
                    VOL. 24
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#181818] mb-6 leading-tight">
                  Heyy, I&apos;m Tanishka!
                </h3>

                <p className="text-base text-[#3A3A38] leading-relaxed mb-5">
                  I&apos;m a Product Designer who enjoys turning complex ideas into simple, thoughtful digital experiences. I&apos;m currently designing at Emergent, and previously worked at Euler Motors, where I designed infotainment systems for commercial EVs
                </p>

                <p className="text-base text-[#3A3A38] leading-relaxed mb-6">
                  Before product design, I spent over two years working as an Interior Designer. Eventually, I found myself more interested in designing how people interact with things rather than just the things themselves - which led me to Interaction Design.
                </p>

                <p className="text-base text-[#3A3A38] leading-relaxed mb-6">
                  When I&apos;m not designing, you&apos;ll probably find me watching a movie or TV show, getting lost in a good book, or simply exploring whatever catches my curiosity
                  </p>

              </div>

              <div className="mt-8 pt-6 border-t border-[#E5E2D8] flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-[15px] uppercase text-[#888884] mb-1">
                    DAILY TOOLS
                  </div>
                  <div className="text-base text-[#181818]">
                    Figma • Claude • ChatGPT • Pen & Paper • Ginger Tea
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

            <div className="relative flex flex-col justify-between pl-0 md:pl-4">
              <div>
                <div className="flex items-center justify-between border-b border-[#E5E2D8] pb-4 mb-6">
                  <span className="text-[15px] uppercase tracking-wider text-[#888884]">
                    PAGE 043 // ARTIFACTS
                  </span>
                </div>

                <div className="relative space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.03, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative rounded-xl p-3 bg-white border border-[#E5E2D8] shadow-[0_6px_18px_rgba(0,0,0,0.05)] rotate-[2deg] cursor-pointer"
                  >
                    <div className="overflow-hidden rounded-lg aspect-[16/10] bg-[#FAFAFA] flex items-center justify-center">
                      <img
                        src="/images/hero/1.avif"
                        alt="Studio desk prototypes"
                        className="w-full object-contain block"
                      />
                    </div>
                    <div className="mt-3 flex items-center justify-between text-[15px] text-[#666666]">
                      <span>IN MY ZONE...</span>
                      <span className="text-[#8614FF] font-semibold">FIG. 01</span>
                    </div>
                  </motion.div>

                  <div className="relative flex flex-col sm:flex-row items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.03, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="w-full sm:w-3/5 rounded-xl p-3 bg-white border border-[#E5E2D8] shadow-[0_6px_18px_rgba(0,0,0,0.05)] rotate-[-3deg] cursor-pointer"
                    >
                      <div className="overflow-hidden rounded-lg aspect-[4/3] bg-[#FAFAFA] flex items-center justify-center">
                        <img
                          src="/images/hero/8.avif"
                          alt="Field notes"
                          className="w-full object-contain block"
                        />
                      </div>
                      <div className="mt-2 text-[15px] text-[#666666]">
                        TAKE ME BACK TO...
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

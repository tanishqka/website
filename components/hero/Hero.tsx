"use client";

import React from "react";
import { motion } from "framer-motion";
import HangingCards from "./HangingCards";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-between overflow-visible pt-6 sm:pt-8 pb-4">
      <div className="flex-1 flex flex-col justify-center items-center max-w-4xl mx-auto px-6 text-center z-10 w-full py-6 sm:py-10">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-4xl md:text-4xl font-bold tracking-tight text-[#121212] max-w-3xl mx-auto"
        >
          Product Designer crafting <span className="text-[#8614FF]">thoughtful digital experiences </span> at the intersection of interaction, technology, and human behaviour
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3.5 text-base sm:text-lg text-[#666666] max-w-lg mx-auto leading-relaxed"
        >
          Currently designing at Emergent. Open to full-time Product Design opportunities
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#8614FF] text-white hover:bg-[#700FDB] text-base font-semibold tracking-wide transition-all shadow-xs hover:scale-105"
          >
            <span>Explore Work</span>
          </a>
        </motion.div>
      </div>

      <div className="w-full mt-auto relative z-20">
        <HangingCards />
      </div>
    </section>
  );
}

export default Hero;

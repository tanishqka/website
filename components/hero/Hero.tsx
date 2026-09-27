"use client";

import React from "react";
import { motion } from "framer-motion";
import HangingCards from "./HangingCards";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-between overflow-visible pt-6 sm:pt-8 pb-4">
      {/* Centered Editorial Header Content */}
      <div className="max-w-4xl mx-auto px-6 text-center z-10 w-full mt-2 sm:mt-4 mb-6 sm:mb-8">

        {/* Compact, Confident Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl mt-4 sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121212] max-w-3xl mx-auto"
        >
          Product Designer crafting <span className="text-[#606EDB]">speamless </span> digital experiences
        </motion.h1>

        {/* Supporting Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3.5 text-[15px] sm:text-base text-[#666666] max-w-lg mx-auto leading-relaxed"
        >
          Designing complex canvas software, spatial interaction models, and tangible design systems.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#606EDB] text-white hover:bg-[#4E5BC4] text-[15px] font-semibold tracking-wide transition-all shadow-xs hover:scale-105"
          >
            <span>Explore Work</span>
          </a>
        </motion.div>
      </div>

      {/* Hanging Wire with Cards, Pixel Art Sky, Clouds, Plane, and Birds */}
      <div className="w-full mt-auto relative z-20">
        <HangingCards />
      </div>
    </section>
  );
}

export default Hero;

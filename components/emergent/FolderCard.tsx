"use client";

import React from "react";
import { motion } from "framer-motion";
import { EmergentCollection } from "@/types";

interface FolderCardProps {
  collection: EmergentCollection;
  index: number;
  onClick: () => void;
  offsetY?: number;
  rotation?: number;
}

const FOLDER_STICKERS: Record<string, { s1: string; s2: string }> = {
  builder: {
    s1: "/images/stickers/sticker-stamp.svg",
    s2: "/images/stickers/sticker-barcode.svg",
  },
  "ai-product": {
    s1: "/images/stickers/sticker-star.svg",
    s2: "/images/stickers/sticker-smile.svg",
  },
  "design-system": {
    s1: "/images/stickers/sticker-stamp.svg",
    s2: "/images/stickers/sticker-star.svg",
  },
  "growth-onboarding": {
    s1: "/images/stickers/sticker-tape.svg",
    s2: "/images/stickers/sticker-smile.svg",
  },
};

export function FolderCard({ collection, index, onClick }: FolderCardProps) {
  const images = collection.images.slice(0, 3);
  const stickers = FOLDER_STICKERS[collection.slug] || {
    s1: "/images/stickers/sticker-star.svg",
    s2: "/images/stickers/sticker-smile.svg",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`Open ${collection.title} gallery`}
      className="group relative cursor-pointer outline-none select-none flex flex-col items-center focus-visible:ring-2 focus-visible:ring-[#8614FF] rounded-2xl p-1"
    >
      <motion.div
        whileHover={{
          y: -6,
          transition: { type: "spring", stiffness: 320, damping: 20 },
        }}
        className="relative w-[210px] sm:w-[250px] h-[165px] sm:h-[185px] flex items-end justify-center"
      >
        <div className="absolute inset-x-0 bottom-0 top-3 rounded-2xl bg-[#D6D6D0] shadow-2xs overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-24 h-5 rounded-t-lg bg-[#D6D6D0]" />
        </div>

        <div className="absolute inset-x-0 bottom-8 top-0 flex items-center justify-center pointer-events-none">
          {images.map((img, i) => {
            const baseRot = i === 0 ? -10 : i === 1 ? 0 : 10;
            const hoverRot = i === 0 ? -16 : i === 1 ? 0 : 15;
            const xShift = i === 0 ? -18 : i === 1 ? 0 : 18;
            const hoverXShift = i === 0 ? -28 : i === 1 ? 0 : 28;
            const yShift = i === 1 ? -12 : -2;
            const hoverYShift = i === 1 ? -22 : -10;

            return (
              <motion.div
                key={i}
                initial={false}
                animate={{
                  rotate: baseRot,
                  x: xShift,
                  y: yShift,
                }}
                whileHover={{
                  rotate: hoverRot,
                  x: hoverXShift,
                  y: hoverYShift,
                }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                style={{ zIndex: i + 2 }}
                className="absolute w-28 sm:w-32 aspect-[4/3] rounded-lg overflow-hidden border-2 border-white bg-white flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            );
          })}
        </div>

        <div
          style={{ zIndex: 10 }}
          className="relative w-full h-[120px] sm:h-[135px] rounded-2xl folder-frosted overflow-hidden flex flex-col justify-between p-3"
        >
          <div className="absolute top-0 left-0 w-24 h-3.5 rounded-tl-2xl bg-white/40 border-b border-white/60" />

          <div className="relative z-10 w-full flex items-center justify-between px-1 pt-1">
            <div className="w-10 sm:w-12 drop-shadow-2xs pointer-events-auto">
              <img
                src={stickers.s1}
                alt="Sticker"
                className="w-full h-auto"
              />
            </div>
            <div className="w-8 sm:w-9 drop-shadow-2xs pointer-events-auto">
              <img
                src={stickers.s2}
                alt="Sticker"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="w-full space-y-1 pb-0.5 opacity-40">
            <div className="w-full h-[1px] bg-[#999999]/30" />
            <div className="w-full h-[1px] bg-[#999999]/30" />
          </div>
        </div>
      </motion.div>

      <div className="mt-3 text-center">
        <h3 className="text-base sm:text-lg font-semibold text-[#181818] tracking-tight group-hover:text-[#8614FF] transition-colors">
          {collection.title}
        </h3>
        <span className="inline-block mt-1 text-[15px] text-[#888884] bg-[#F2F2EF] px-2.5 py-0.5 rounded-full">
          {collection.date}
        </span>
        {collection.description && (
          <p className="mt-2 text-[15px] text-[#666666] max-w-[220px] mx-auto leading-snug">
            {collection.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default FolderCard;

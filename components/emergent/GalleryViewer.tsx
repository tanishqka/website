"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EmergentCollection } from "@/types";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryViewerProps {
  collection: EmergentCollection | null;
  onClose: () => void;
}

export function GalleryViewer({ collection, onClose }: GalleryViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const handleNext = useCallback(() => {
    if (!collection) return;
    setCurrentIndex((prev) => (prev + 1) % collection.images.length);
  }, [collection]);

  const handlePrev = useCallback(() => {
    if (!collection) return;
    setCurrentIndex(
      (prev) => (prev - 1 + collection.images.length) % collection.images.length
    );
  }, [collection]);

  useEffect(() => {
    if (!collection) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [collection, handleNext, handlePrev, onClose]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  if (!collection) return null;

  const currentImage = collection.images[currentIndex];
  const totalImages = collection.images.length;
  const detailedDescription =
    collection.detailedDescription || collection.description;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 select-none"
        role="dialog"
        aria-modal="true"
        aria-label={`${collection.title} Gallery Archive`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#181818]/60 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
          className="relative w-full max-w-5xl max-h-[90vh] flex flex-col rounded-2xl border border-[#D8D8D4] bg-[#FCFCFC] shadow-2xl overflow-hidden z-10"
        >
          <div className="px-5 sm:px-6 py-4 border-b border-[#D8D8D4] bg-[#FCFCFC]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-[#181818] tracking-tight">
                  {collection.title}
                </h2>
                <div className="text-[13px] sm:text-[14px] text-[#888884]">
                  {collection.date}
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="text-[13px] sm:text-[14px] text-[#181818] font-medium bg-[#FCFCFC] px-3.5 py-1 rounded-full border border-[#D8D8D4]">
                  {String(currentIndex + 1).padStart(2, "0")} / {String(totalImages).padStart(2, "0")}
                </span>

                <button
                  onClick={onClose}
                  className="p-1.5 rounded-full text-[#666666] hover:text-[#181818] hover:bg-[#FCFCFC]/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FAFAFA]"
                  aria-label="Close gallery"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {detailedDescription && (
              <p className="mt-3 text-sm sm:text-[15px] text-[#555555] leading-relaxed w-full">
                {detailedDescription}
              </p>
            )}
          </div>

          <div
            className="relative flex-1 bg-[#FCFCFC]/40 p-4 sm:p-8 flex items-center justify-center overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#FCFCFC]/90 border border-[#D8D8D4] text-[#181818] hover:bg-[#FAFAFA] hover:text-[#000000]/50 hover:border-[#000000]/50 flex items-center justify-center transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FAFAFA]"
              aria-label="Previous frame"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#FCFCFC]/90 border border-[#D8D8D4] text-[#181818] hover:bg-[#FAFAFA] hover:text-[#000000]/50 hover:border-[#000000]/50 flex items-center justify-center transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FAFAFA]"
              aria-label="Next frame"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="relative max-h-[52vh] w-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage.src}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-xl overflow-hidden border border-[#D8D8D4] bg-[#FCFCFC] shadow-lg max-h-[50vh]"
                >
                  <img
                    src={currentImage.src}
                    alt={currentImage.alt}
                    className="max-h-[50vh] w-auto object-contain block mx-auto"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="px-6 py-3.5 border-t border-[#D8D8D4] bg-[#FCFCFC] flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold">
                {currentImage.tag || `FRAME ${String(currentIndex + 1).padStart(2, "0")}`}
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0 overflow-x-auto py-1">
              {collection.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-11 h-9 rounded-md overflow-hidden border-2 transition-all ${
                    idx === currentIndex
                      ? "border-[#FAFAFA] scale-105 shadow-xs"
                      : "border-[#D8D8D4] opacity-50 hover:opacity-100"
                  }`}
                  aria-label={`Jump to frame ${idx + 1}`}
                >
                  <img
                    src={img.src}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default GalleryViewer;

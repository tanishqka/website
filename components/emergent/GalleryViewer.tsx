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

  // Keyboard navigation
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

  // Touch swipe support for mobile
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

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 select-none"
        role="dialog"
        aria-modal="true"
        aria-label={`${collection.title} Gallery Archive`}
      >
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#181818]/60 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
          className="relative w-full max-w-5xl max-h-[90vh] flex flex-col rounded-2xl border border-[#D8D8D4] bg-[#F5F5F2] shadow-2xl overflow-hidden z-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#D8D8D4] bg-[#ECECE8]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8614FF]" />
              <div>
                <h2 className="text-base sm:text-lg font-bold text-[#181818] tracking-tight">
                  {collection.title}
                </h2>
                <div className="text-[15px] text-[#666666]">
                  {collection.category} {"//"} {collection.date}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[15px] text-[#181818] font-medium bg-[#F5F5F2] px-3.5 py-1 rounded-full border border-[#D8D8D4]">
                {String(currentIndex + 1).padStart(2, "0")} / {String(totalImages).padStart(2, "0")}
              </span>

              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-[#666666] hover:text-[#181818] hover:bg-[#D8D8D4]/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8614FF]"
                aria-label="Close gallery"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Visual Display Area */}
          <div
            className="relative flex-1 bg-[#ECECE8]/40 p-4 sm:p-8 flex items-center justify-center overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#F5F5F2]/90 border border-[#D8D8D4] text-[#181818] hover:bg-[#8614FF] hover:text-[#F5F5F2] hover:border-[#8614FF] flex items-center justify-center transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8614FF]"
              aria-label="Previous frame"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#F5F5F2]/90 border border-[#D8D8D4] text-[#181818] hover:bg-[#8614FF] hover:text-[#F5F5F2] hover:border-[#8614FF] flex items-center justify-center transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8614FF]"
              aria-label="Next frame"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Active Image with Transition */}
            <div className="relative max-h-[52vh] w-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage.src}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-xl overflow-hidden border border-[#D8D8D4] bg-[#F5F5F2] shadow-lg max-h-[50vh]"
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

          {/* Caption & Metadata Footer */}
          <div className="px-6 py-4 border-t border-[#D8D8D4] bg-[#F5F5F2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8614FF]" />
                <span className="text-[15px] uppercase tracking-wider text-[#8614FF] font-semibold">
                  {currentImage.tag || `FRAME 0${currentIndex + 1}`}
                </span>
              </div>
              <p className="text-[15px] text-[#181818] leading-relaxed">
                {currentImage.description}
              </p>
            </div>

            {/* Thumbnail Filmstrip */}
            <div className="flex items-center gap-2 shrink-0 overflow-x-auto py-1">
              {collection.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-11 h-9 rounded-md overflow-hidden border-2 transition-all ${
                    idx === currentIndex
                      ? "border-[#8614FF] scale-105 shadow-xs"
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

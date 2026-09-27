"use client";

import React, { useState } from "react";
import { emergentCollections } from "@/data/emergent";
import { EmergentCollection } from "@/types";
import FolderCard from "./FolderCard";
import GalleryViewer from "./GalleryViewer";

export function EmergentGallerySection() {
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

  // Asymmetrical layout offsets & rotations for curated feel
  const folderOffsets = [
    { offsetY: 0, rotation: -1.5 },
    { offsetY: 24, rotation: 1.2 },
    { offsetY: 8, rotation: -0.8 },
    { offsetY: 32, rotation: 1.8 },
  ];

  return (
    <section id="archive" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Open Section Header — No Box/Container */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#ECECE8] bg-white text-[15px] font-medium uppercase tracking-wider text-[#666666] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8614FF]" />
            <span>Emergent Archive // 2026</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] text-[#121212] uppercase leading-[1.0]">
            Visual Folders
          </h2>
          <p className="mt-4 text-[15px] sm:text-base text-[#666666] leading-relaxed">
            Collectible photo archives of spatial tools, canvas primitives, and design system specifications. Click any folder to inspect individual frames.
          </p>
        </div>

        {/* Loose Asymmetrical Curated Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8 justify-items-center">
          {emergentCollections.map((collection, index) => {
            const config = folderOffsets[index % folderOffsets.length];
            return (
              <FolderCard
                key={collection.slug}
                collection={collection}
                index={index}
                offsetY={config.offsetY}
                rotation={config.rotation}
                onClick={() => handleOpen(collection)}
              />
            );
          })}
        </div>
      </div>

      {/* Gallery Modal Viewer */}
      <GalleryViewer
        key={selectedCollection?.slug}
        collection={selectedCollection}
        onClose={handleClose}
      />
    </section>
  );
}

export default EmergentGallerySection;

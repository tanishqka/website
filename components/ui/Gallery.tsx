"use client";

import React from "react";

interface GalleryImage {
  src: string;
  alt?: string;
  caption?: string;
}

interface GalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3;
}

export function Gallery({ images = [], columns = 2 }: GalleryProps) {
  const safeImages = Array.isArray(images) ? images : [];
  return (
    <div className="my-8">
      <div
        className={`grid grid-cols-1 ${
          columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
        } gap-4`}
      >
        {safeImages.map((img, idx) => (
          <figure key={idx} className="m-0">
            <div className="relative overflow-hidden rounded-lg border border-[#D8D8D4] bg-[#ECECE8] aspect-[16/10] w-full flex items-center justify-center">
              <img
                src={img.src}
                alt={img.alt || img.caption || `Gallery item ${idx + 1}`}
                loading="lazy"
                className="w-full h-full block object-contain"
              />
            </div>
            {img.caption && (
              <figcaption className="mt-2 text-[15px] text-[#666666] tracking-tight">
                {img.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
}

export default Gallery;

"use client";

import React, { useState } from "react";

export interface MediaRendererProps {
  src: string;
  alt?: string;
  caption?: string;
  fullWidth?: boolean;
  aspectRatio?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  poster?: string;
}

export function MediaRenderer({
  src,
  alt = "Visual media asset",
  caption,
  fullWidth = false,
  aspectRatio,
  className = "",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  poster,
}: MediaRendererProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const ext = src.split(".").pop()?.toLowerCase() || "";
  const isVideo = ext === "mp4" || ext === "webm" || ext === "mov";

  return (
    <figure
      className={`my-8 ${
        fullWidth ? "w-full -mx-0" : "max-w-4xl mx-auto"
      } ${className}`}
    >
      <div
        className={`relative overflow-hidden rounded-xl border border-[#D8D8D4] bg-[#ECECE8] shadow-[0_4px_16px_rgba(24,24,24,0.04)] transition-all duration-300 ${
          aspectRatio ? aspectRatio : ""
        }`}
      >
        {isVideo ? (
          <video
            src={src}
            poster={poster}
            autoPlay={autoPlay}
            loop={loop}
            muted={muted}
            playsInline={playsInline}
            className="w-full h-auto block object-contain"
            onLoadedData={() => setIsLoaded(true)}
            aria-label={alt}
          />
        ) : (
          <div className="relative w-full overflow-hidden flex items-center justify-center">
            {/* Native img or next/image */}
            {/* Using <img> for full responsive SVGs and local assets without layout shifts */}
            <img
              src={src}
              alt={alt}
              loading="lazy"
              onLoad={() => setIsLoaded(true)}
              className={`w-full h-auto block object-contain transition-opacity duration-300 ${
                isLoaded ? "opacity-100" : "opacity-95"
              }`}
            />
          </div>
        )}
      </div>

      {caption && (
        <figcaption className="mt-2.5 text-[15px] text-[#666666] tracking-wide flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8614FF] shrink-0" />
          <span>{caption}</span>
        </figcaption>
      )}
    </figure>
  );
}

export default MediaRenderer;

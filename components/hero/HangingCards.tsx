"use client";

import React, { useRef, useEffect, useState, useMemo } from "react";
import PixelArtSky from "./PixelArtSky";

interface HeroCardItem {
  id: string;
  image: string;
  alt: string;
}

const CARDS_DATA: HeroCardItem[] = [
  { id: "c1", image: "/images/hero/1.avif", alt: "img" },
  { id: "c2", image: "/images/hero/2.avif", alt: "img" },
  { id: "c3", image: "/images/hero/3.avif", alt: "img" },
  { id: "c4", image: "/images/hero/4.avif", alt: "img" },
  { id: "c5", image: "/images/hero/5.avif", alt: "img" },
  { id: "c6", image: "/images/hero/6.avif", alt: "img" },  
    { id: "c7", image: "/images/hero/7.avif", alt: "img" },
  { id: "c8", image: "/images/hero/8.avif", alt: "img" },
];

export function HangingCards() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(1200);
  const [isMobile, setIsMobile] = useState(false);
  const [offset, setOffset] = useState(0);
  const animationFrameId = useRef<number | null>(null);

  const cardWidth = isMobile ? 116 : 168;
  const cardSpacing = isMobile ? 142 : 218;
  const wireTopY = isMobile ? 18 : 24;
  const wireSag = isMobile ? 42 : 72;

  const baseTrackWidth = CARDS_DATA.length * cardSpacing;

  const replicatedCards = useMemo(() => {
    return [
      ...CARDS_DATA.map((c, i) => ({ ...c, uniqueId: `rep0-${c.id}-${i}` })),
      ...CARDS_DATA.map((c, i) => ({ ...c, uniqueId: `rep1-${c.id}-${i}` })),
      ...CARDS_DATA.map((c, i) => ({ ...c, uniqueId: `rep2-${c.id}-${i}` })),
    ];
  }, []);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth || window.innerWidth;
        setContainerWidth(w);
        setIsMobile(w < 640);
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      const move = delta * 36;
      setOffset((prev) => (prev + move) % baseTrackWidth);

      animationFrameId.current = requestAnimationFrame(loop);
    };

    animationFrameId.current = requestAnimationFrame(loop);

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [baseTrackWidth]);

  const getWireY = (x: number) => {
    const halfW = containerWidth / 2;
    const normX = (x - halfW) / halfW;
    return wireTopY + wireSag * (1 - normX * normX);
  };

  const getWireAngle = (x: number) => {
    const halfW = containerWidth / 2;
    const dy_dx = (-2 * wireSag * (x - halfW)) / (halfW * halfW);
    const angleRad = Math.atan(dy_dx);
    return (angleRad * 180) / Math.PI;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[270px] sm:h-[340px] overflow-x-clip overflow-y-visible select-none pointer-events-none"
      aria-label="Hanging photo cards moving along curved thread"
    >
      <PixelArtSky
        containerWidth={containerWidth}
        getWireY={getWireY}
        getWireAngle={getWireAngle}
      />

      <svg
        className="absolute inset-x-0 top-0 w-full h-full pointer-events-none z-15"
        preserveAspectRatio="none"
        viewBox={`0 0 ${containerWidth} ${isMobile ? 270 : 340}`}
      >
        <path
          d={`M -60 ${wireTopY} Q ${containerWidth / 2} ${wireTopY + wireSag * 2}, ${containerWidth + 60} ${wireTopY}`}
          fill="none"
          stroke="#D0D0CA"
          strokeWidth={isMobile ? "1.2" : "1.5"}
          strokeLinecap="round"
        />
      </svg>

      <div className="relative w-full h-full pointer-events-none z-20">
        {replicatedCards.map((card, idx) => {
          const rawX = (idx * cardSpacing - baseTrackWidth) + offset;

          if (rawX < -cardWidth - 80 || rawX > containerWidth + cardWidth + 80) {
            return null;
          }

          const y = getWireY(rawX);
          const angle = getWireAngle(rawX);

          return (
            <div
              key={card.uniqueId}
              style={{
                left: `${rawX}px`,
                top: `${y}px`,
                transform: `translateX(-50%) rotate(${angle}deg)`,
                width: `${cardWidth}px`,
              }}
              className="absolute flex flex-col items-center pointer-events-none"
            >
              <div className="relative z-20 -mb-1.5 sm:-mb-2 flex flex-col items-center">
                <div
                  className={`${
                    isMobile ? "w-2.5 h-4.5 rounded-2xs" : "w-3.5 h-6 rounded-xs"
                  } bg-[#D0D0CA] shadow-2xs flex items-center justify-center`}
                >
                  <div
                    className={`${
                      isMobile ? "w-1 h-1" : "w-1.5 h-1.5"
                    } rounded-full bg-white shadow-inner`}
                  />
                </div>
              </div>

              <div
                className={`w-full bg-white ${
                  isMobile ? "p-1.5 rounded-xl" : "p-2 rounded-2xl"
                } shadow-[0_8px_20px_rgba(0,0,0,0.06)] border border-[#ECECE8]`}
              >
                <div className="overflow-hidden rounded-lg sm:rounded-xl bg-[#FAFAFA] aspect-[4/5] w-full flex items-center justify-center">
                  <img
                    src={card.image}
                    alt={card.alt}
                    loading="eager"
                    className="w-full h-full object-contain block select-none pointer-events-none"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HangingCards;

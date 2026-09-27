"use client";

import React, { useState, useEffect, useRef } from "react";

interface PixelArtSkyProps {
  containerWidth: number;
  getWireY: (x: number) => number;
  getWireAngle: (x: number) => number;
}

// 8-bit Pixel Cloud SVG — Reduced size & gentle airy opacity
function PixelCloud({
  initialX,
  y,
  speed,
  scale = 1.0,
  opacity = 0.22,
}: {
  initialX: number;
  y: number;
  speed: number;
  scale?: number;
  opacity?: number;
}) {
  const [posX, setPosX] = useState(initialX);

  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const moveCloud = (currentTime: number) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setPosX((prev) => {
        const next = prev + speed * delta;
        // Wrap around when past right side
        return next > 2200 ? -200 : next;
      });

      animId = requestAnimationFrame(moveCloud);
    };

    animId = requestAnimationFrame(moveCloud);
    return () => cancelAnimationFrame(animId);
  }, [speed]);

  return (
    <div
      style={{
        position: "absolute",
        left: `${posX}px`,
        top: `${y}px`,
        transform: `scale(${scale})`,
        opacity,
        pointerEvents: "none",
        zIndex: 5,
      }}
    >
      <svg
        width="54"
        height="24"
        viewBox="0 0 32 14"
        shapeRendering="crispEdges"
        className="fill-[#9E9E96]"
      >
        {/* Pixel Art Cloud Silhouette */}
        <rect x="8" y="2" width="12" height="2" />
        <rect x="6" y="4" width="18" height="2" />
        <rect x="2" y="6" width="26" height="2" />
        <rect x="0" y="8" width="30" height="4" />
        <rect x="2" y="12" width="26" height="2" />
      </svg>
    </div>
  );
}

// 8-bit Pixel Airplane with trailing contrail — Scaled up and moved higher in the sky
function PixelAirplane({ containerWidth }: { containerWidth: number }) {
  const [isActive, setIsActive] = useState(true);
  const [pos, setPos] = useState({ x: -120, y: 12 });
  const [trail, setTrail] = useState<Array<{ id: number; x: number; y: number; opacity: number }>>([]);
  const animRef = useRef<number | null>(null);
  const trailCounter = useRef(0);

  useEffect(() => {
    let lastTime = performance.now();
    let currentX = -140;
    // Moved slightly higher up in the sky as requested (y: 6 to 18)
    const startY = 6 + Math.random() * 12;
    let currentY = startY;
    const speed = 30; // Smooth and non-distracting pace

    const fly = (now: number) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      currentX += speed * dt;
      currentY += speed * 0.05 * dt; // very subtle drift

      setPos({ x: currentX, y: currentY });

      // Add contrail puffs behind tail
      trailCounter.current += 1;
      if (trailCounter.current % 12 === 0) {
        setTrail((prev) => [
          ...prev.slice(-22),
          {
            id: Date.now() + Math.random(),
            x: currentX - 10,
            y: currentY + 8,
            opacity: 0.6,
          },
        ]);
      }

      // Age existing trail puffs
      setTrail((prev) =>
        prev
          .map((p) => ({ ...p, opacity: p.opacity - 0.005 }))
          .filter((p) => p.opacity > 0.05)
      );

      // Once offscreen on right, wait randomly before next flyby
      if (currentX > containerWidth + 180) {
        setIsActive(false);
        setTimeout(() => {
          currentX = -140;
          currentY = 6 + Math.random() * 12;
          setIsActive(true);
          lastTime = performance.now();
          animRef.current = requestAnimationFrame(fly);
        }, 10000 + Math.random() * 14000);
        return;
      }

      animRef.current = requestAnimationFrame(fly);
    };

    if (isActive) {
      animRef.current = requestAnimationFrame(fly);
    }

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isActive, containerWidth]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Contrail trail behind plane */}
      {trail.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}px`,
            top: `${p.y}px`,
            opacity: p.opacity,
          }}
          className="w-2.5 h-2.5 bg-[#B8B8B0] rounded-2xs"
        />
      ))}

      {/* Larger Pixel Airplane (width: 48, height: 24) */}
      <div
        style={{
          position: "absolute",
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: "rotate(3deg)",
        }}
      >
        <svg
          width="48"
          height="24"
          viewBox="0 0 16 8"
          shapeRendering="crispEdges"
          className="drop-shadow-xs"
        >
          {/* Nose */}
          <rect x="13" y="3" width="2" height="2" fill="#606EDB" />
          {/* Body */}
          <rect x="4" y="3" width="9" height="2" fill="#1C1C1C" />
          <rect x="7" y="2" width="5" height="1" fill="#FFFFFF" />
          {/* Wing top */}
          <rect x="6" y="0" width="3" height="3" fill="#606EDB" />
          <rect x="7" y="1" width="2" height="2" fill="#181818" />
          {/* Wing bottom */}
          <rect x="6" y="5" width="3" height="2" fill="#606EDB" />
          {/* Tail fin */}
          <rect x="1" y="1" width="2" height="3" fill="#606EDB" />
          <rect x="0" y="2" width="2" height="1" fill="#1C1C1C" />
        </svg>
      </div>
    </div>
  );
}

// 8-bit Pixel Bird sitting and flying on the thread — Scaled up
function PixelBird({
  birdId,
  baseXPercent,
  containerWidth,
  getWireY,
  getWireAngle,
}: {
  birdId: string;
  baseXPercent: number;
  containerWidth: number;
  getWireY: (x: number) => number;
  getWireAngle: (x: number) => number;
}) {
  const [state, setState] = useState<"perched" | "flying_away" | "returning">("perched");
  const [flightOffset, setFlightOffset] = useState({ x: 0, y: 0 });
  const [wingFlap, setWingFlap] = useState(false);
  const [facingLeft, setFacingLeft] = useState(false);
  const animFrame = useRef<number | null>(null);

  const perchedX = containerWidth * baseXPercent;
  const wireY = getWireY(perchedX);
  const wireAngle = getWireAngle(perchedX);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const scheduleFlight = () => {
      const delay = 8000 + Math.random() * 14000;
      timeout = setTimeout(() => {
        const flyDir = Math.random() > 0.5 ? 1 : -1;
        setFacingLeft(flyDir < 0);
        setState("flying_away");

        const startTime = performance.now();
        const duration = 2800;

        const flyAway = (now: number) => {
          const progress = Math.min(1, (now - startTime) / duration);
          const dx = flyDir * progress * 200;
          const dy = -Math.sin(progress * Math.PI * 0.7) * 100 - progress * 45;

          setFlightOffset({ x: dx, y: dy });
          setWingFlap(Math.floor(now / 120) % 2 === 0);

          if (progress < 1) {
            animFrame.current = requestAnimationFrame(flyAway);
          } else {
            setTimeout(() => {
              setState("returning");
              const returnStart = performance.now();
              const returnDur = 2200;

              const flyBack = (t: number) => {
                const retProgress = Math.min(1, (t - returnStart) / returnDur);
                const curDx = flyDir * 200 * (1 - retProgress);
                const curDy = -140 * (1 - retProgress);

                setFlightOffset({ x: curDx, y: curDy });
                setWingFlap(Math.floor(t / 150) % 2 === 0);

                if (retProgress < 1) {
                  animFrame.current = requestAnimationFrame(flyBack);
                } else {
                  setState("perched");
                  setFlightOffset({ x: 0, y: 0 });
                  scheduleFlight();
                }
              };

              animFrame.current = requestAnimationFrame(flyBack);
            }, 3000 + Math.random() * 4000);
          }
        };

        animFrame.current = requestAnimationFrame(flyAway);
      }, delay);
    };

    scheduleFlight();

    return () => {
      clearTimeout(timeout);
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, [birdId]);

  useEffect(() => {
    if (state !== "perched") return;
    const interval = setInterval(() => {
      if (Math.random() > 0.6) {
        setFacingLeft((prev) => !prev);
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [state]);

  const currentX = perchedX + flightOffset.x;
  // Bird sits with feet on top of the wire (wireY - 18px for larger 34x29 size)
  const currentY = wireY - 18 + flightOffset.y;
  const rotation = state === "perched" ? wireAngle : facingLeft ? -12 : 12;

  return (
    <div
      style={{
        position: "absolute",
        left: `${currentX}px`,
        top: `${currentY}px`,
        transform: `translate(-50%, -50%) rotate(${rotation}deg) scaleX(${facingLeft ? -1 : 1})`,
        zIndex: 25,
        pointerEvents: "none",
      }}
    >
      {/* Scaled up Bird SVG (width: 34, height: 29) */}
      <svg
        width="34"
        height="29"
        viewBox="0 0 7 6"
        shapeRendering="crispEdges"
        className="drop-shadow-xs"
      >
        {state === "perched" ? (
          // Perched Bird
          <>
            <rect x="5" y="2" width="2" height="1" fill="#E89820" />
            <rect x="3" y="1" width="2" height="2" fill="#181818" />
            <rect x="4" y="1" width="1" height="1" fill="#FFFFFF" />
            <rect x="1" y="2" width="3" height="3" fill="#606EDB" />
            <rect x="1" y="3" width="2" height="1" fill="#4854B8" />
            <rect x="0" y="3" width="1" height="2" fill="#181818" />
            <rect x="2" y="5" width="2" height="1" fill="#E89820" />
          </>
        ) : wingFlap ? (
          // Flying Bird — Wing Up
          <>
            <rect x="5" y="2" width="2" height="1" fill="#E89820" />
            <rect x="3" y="1" width="2" height="2" fill="#181818" />
            <rect x="4" y="1" width="1" height="1" fill="#FFFFFF" />
            <rect x="1" y="2" width="3" height="2" fill="#606EDB" />
            <rect x="2" y="0" width="2" height="2" fill="#4854B8" />
            <rect x="0" y="3" width="1" height="1" fill="#181818" />
          </>
        ) : (
          // Flying Bird — Wing Down
          <>
            <rect x="5" y="2" width="2" height="1" fill="#E89820" />
            <rect x="3" y="1" width="2" height="2" fill="#181818" />
            <rect x="4" y="1" width="1" height="1" fill="#FFFFFF" />
            <rect x="1" y="2" width="3" height="2" fill="#606EDB" />
            <rect x="2" y="4" width="2" height="2" fill="#4854B8" />
            <rect x="0" y="2" width="1" height="1" fill="#181818" />
          </>
        )}
      </svg>
    </div>
  );
}

export function PixelArtSky({
  containerWidth,
  getWireY,
  getWireAngle,
}: PixelArtSkyProps) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {/* 1. Subtle, gentle drifting clouds with reduced size and opacity */}
      <PixelCloud initialX={20} y={8} speed={7} scale={0.95} opacity={0.22} />
      <PixelCloud initialX={containerWidth * 0.22} y={22} speed={10} scale={1.1} opacity={0.24} />
      <PixelCloud initialX={containerWidth * 0.44} y={10} speed={8} scale={0.9} opacity={0.18} />
      <PixelCloud initialX={containerWidth * 0.65} y={26} speed={11} scale={1.15} opacity={0.24} />
      <PixelCloud initialX={containerWidth * 0.85} y={12} speed={9} scale={1.05} opacity={0.2} />
      <PixelCloud initialX={containerWidth * 0.35} y={36} speed={6} scale={0.85} opacity={0.18} />

      {/* 2. Top-left pixel airplane placed slightly higher and larger */}
      <PixelAirplane containerWidth={containerWidth} />

      {/* 3. Larger pixel birds perched on the curved thread */}
      <PixelBird
        birdId="bird-left"
        baseXPercent={0.24}
        containerWidth={containerWidth}
        getWireY={getWireY}
        getWireAngle={getWireAngle}
      />
      <PixelBird
        birdId="bird-right"
        baseXPercent={0.76}
        containerWidth={containerWidth}
        getWireY={getWireY}
        getWireAngle={getWireAngle}
      />
    </div>
  );
}

export default PixelArtSky;

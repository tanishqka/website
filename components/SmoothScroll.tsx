"use client";

import React, { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";

function AnchorScrollHandler() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Check if it's an on-page anchor link (e.g. "#projects", "#about", "#contact" or "/#projects")
      const isHashLink = href.startsWith("#");
      const isHomeHashLink =
        href.startsWith("/#") &&
        (typeof window !== "undefined" &&
          (window.location.pathname === "/" || window.location.pathname === ""));

      if (isHashLink || isHomeHashLink) {
        const hash = href.includes("#") ? href.slice(href.indexOf("#") + 1) : "";
        if (!hash) return;

        const targetEl = document.getElementById(hash);
        if (targetEl) {
          e.preventDefault();
          lenis.scrollTo(targetEl, {
            offset: -16,
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
          window.history.pushState({}, "", `#${hash}`);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleAnchorClick, { capture: true });
    };
  }, [lenis]);

  // Handle initial hash in URL on mount
  useEffect(() => {
    if (!lenis || typeof window === "undefined") return;
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const targetEl = document.getElementById(hash);
      if (targetEl) {
        const timer = setTimeout(() => {
          lenis.scrollTo(targetEl, {
            offset: -16,
            duration: 1.0,
          });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [lenis]);

  return null;
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
      }}
    >
      <AnchorScrollHandler />
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;

"use client";

import React from "react";
import BrickBreaker from "@/components/game/BrickBreaker";

export function Footer() {
  const socialLinks = [
    { label: "Email", href: "mailto:tanishkabilgaiyan81@gmail.com" },
    { label: "Twitter", href: "https://x.com/tanishqkaa" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tanishqka/" },
    { label: "Resume", href: "/resume.pdf" },
  ];

  return (
    <footer id="contact" className="relative pt-24 pb-20 overflow-hidden">
      <div className="max-w-2xl mx-auto px-6 md:px-10">

        {/* Conversational Prompt — Matching Reference 3 */}
        <h2 className="text-2xl font-medium text-[#181818] leading-[1.4] max-w-4xl mb-4">
          Wanna discuss about my work or just wanna say hello? Get in touch!
        </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl border border-neutral-200 bg-white hover:border-[#8614FF] hover:text-[#8614FF] text-center text-[15px] font-semibold tracking-wide text-[#8614FF] transition-all shadow-xs flex items-center justify-center"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Playful Interactive Brick Breaker Game (Open Canvas) */}
        <div className="mt-14">
          <BrickBreaker />
        </div>

        {/* Minimal Colophon & Copyright */}
        <div className="mt-16 pt-8 text-center w-full border-t border-[#ECECE8] flex flex-col sm:flex-row sm:items-center justify-center gap-4 text-[15px] text-[#888884]">
          <span>© {new Date().getFullYear()} {"//"} Tanishka Bilgaiyan {"//"} All rights reserved</span>
        </div>
    </footer>
  );
}

export default Footer;

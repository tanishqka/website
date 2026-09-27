"use client";

import React, { useState } from "react";
import BrickBreaker from "@/components/game/BrickBreaker";
import { Check, Copy } from "lucide-react";

export function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "contact@designer.com";

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const socialLinks = [
    { label: "instagram", href: "https://instagram.com" },
    { label: "x.com", href: "https://x.com" },
    { label: "github", href: "https://github.com" },
    { label: "linkedin", href: "https://linkedin.com" },
  ];

  return (
    <footer id="contact" className="relative pt-24 pb-20 overflow-hidden">
      <div className="max-w-2xl mx-auto px-6 md:px-10">

        {/* Conversational Prompt — Matching Reference 3 */}
        <h2 className="text-2xl font-medium tracking-tight text-[#181818] leading-[1.4] max-w-4xl mb-12 sm:mb-16">
          ready to collaborate? let’s juggle between user flows, research and visuals. shoot me a message and let’s have a chat over coffee!
        </h2>

        {/* Open Contact Grid — Matching Reference 3 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Left Contact Card (Dashed Border with Asterisk & Email Pill) */}
          <div className="md:col-span-7 rounded-2xl border-2 border-dashed border-[#DCDCD8] bg-white p-8 sm:p-12 flex flex-col items-center justify-center text-center shadow-xs">
            {/* Playful Starburst / Asterisk Icon */}
            <div className="w-16 h-16 text-[#606EDB] mb-6 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                <path d="M 50 15 C 53 15 55 18 55 22 L 55 42 L 72 26 C 75 23 79 24 81 27 C 83 30 82 34 79 37 L 61 50 L 79 63 C 82 66 83 70 81 73 C 79 76 75 77 72 74 L 55 58 L 55 78 C 55 82 53 85 50 85 C 47 85 45 82 45 78 L 45 58 L 28 74 C 25 77 21 76 19 73 C 17 70 18 66 21 63 L 39 50 L 21 37 C 18 34 17 30 19 27 C 21 24 25 23 28 26 L 45 42 L 45 22 C 45 18 47 15 50 15 Z" />
              </svg>
            </div>

            <span className="text-[15px] text-[#888884] mb-3">
              contact me
            </span>

            {/* Email Action Pill Button */}
            <button
              onClick={handleCopyEmail}
              className="group inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full bg-[#606EDB] hover:bg-[#4E5BC4] text-white text-[15px] sm:text-base font-semibold tracking-wide transition-all shadow-sm hover:scale-[1.02] cursor-pointer"
              aria-label="Click to copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>copied to clipboard!</span>
                </>
              ) : (
                <>
                  <span>{email}</span>
                  <Copy className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                </>
              )}
            </button>
          </div>

          {/* Right Column: Stacked Dashed Pill Buttons (Reference 3) */}
          <div className="md:col-span-5 flex flex-col justify-between gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl border-2 border-dashed border-[#DCDCD8] bg-white hover:border-[#606EDB] hover:text-[#606EDB] text-center text-[15px] font-semibold tracking-wide text-[#606EDB] transition-all shadow-xs flex items-center justify-center"
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
      </div>
    </footer>
  );
}

export default Footer;

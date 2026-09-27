"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative w-full pt-8 pb-4">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-2 text-[15px] font-semibold tracking-tight text-[#181818] transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-[#606EDB]" />
          <span>Tanishka Bilgaiyan</span>
        </Link>

        {/* Minimal Navigation */}
        <nav
          className="hidden md:flex items-center space-x-7 text-[15px] text-[#666666]"
          aria-label="Main Navigation"
        >
          <Link
            href="#projects"
            className="hover:text-[#606EDB] transition-colors"
          >
            Work
          </Link>
          <Link
            href="#about"
            className="hover:text-[#606EDB] transition-colors"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="hover:text-[#606EDB] transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1 text-[#181818] hover:text-[#606EDB] transition-colors focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4 text-[#666666]" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden px-6 pt-3 pb-4">
          <nav className="flex flex-col space-y-2 text-[15px] text-[#181818]">
            <Link
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="py-1 hover:text-[#606EDB]"
            >
              Work
            </Link>
            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              className="py-1 hover:text-[#606EDB]"
            >
              About
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="py-1 hover:text-[#606EDB]"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;

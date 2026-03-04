"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { customEasing, maskReveal } from "../utils/animations";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: customEasing, delay: 0.5 }}
        className="fixed w-full top-0 bg-white/60 backdrop-blur-xl z-50 border-b border-gray-200/50 px-5 md:px-8 py-4 flex justify-between items-center transition-colors duration-500 hover:bg-white/95"
      >
        <div className="text-xl md:text-2xl font-black tracking-tighter uppercase text-gray-900 overflow-hidden cursor-pointer z-50">
          <motion.a
            href="#home"
            onClick={(e) => scrollToSection(e, "home")}
            custom="down"
            variants={maskReveal}
            initial="hidden"
            animate="visible"
            className="block hover:opacity-70 transition-opacity"
          >
            Refinée
          </motion.a>
        </div>

        {/* MENU DESKTOP: Home, Featured, Reviews */}
        <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-[0.2em] text-gray-800">
          {["Home", "Featured", "Reviews"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => scrollToSection(e, item.toLowerCase())}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay:
                  0.6 + ["Home", "Featured", "Reviews"].indexOf(item) * 0.1,
                ease: customEasing,
              }}
              className="relative overflow-hidden group hover:text-black transition-colors duration-300 py-2"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left" />
            </motion.a>
          ))}
        </div>

        {/* HAMBURGER MENU ICON MOBILE */}
        <div
          className="md:hidden flex items-center cursor-pointer p-2 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6 text-gray-900 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </div>

        {/* DROPDOWN MENU MOBILE */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: customEasing }}
              className="absolute top-full left-0 w-full bg-white shadow-xl border-b border-gray-100 md:hidden flex flex-col py-2 px-5"
            >
              {["Home", "Featured", "Reviews"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => scrollToSection(e, item.toLowerCase())}
                  className="py-4 text-xs font-bold uppercase tracking-[0.2em] text-gray-900 border-b border-gray-100 last:border-none hover:text-gray-500 transition-colors"
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;

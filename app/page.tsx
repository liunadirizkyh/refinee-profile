"use client";

import {
  motion,
  useScroll,
  useTransform,
  Variants,
  useMotionValueEvent,
} from "framer-motion";
import React, { useRef, useState } from "react";

export default function CompanyProfile() {
  const { scrollYProgress, scrollY } = useScroll();
  const heroRef = useRef(null);

  // STATE UNTUK MELACAK ARAH SCROLL
  const [scrollDir, setScrollDir] = useState("down");

  useMotionValueEvent(scrollY, "change", (current) => {
    const prev = scrollY.getPrevious();
    if (prev !== undefined) {
      if (current > prev) {
        setScrollDir("down");
      } else if (current < prev) {
        setScrollDir("up");
      }
    }
  });

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(heroScroll, [0, 1], ["0%", "50%"]);

  const customEasing = [0.16, 1, 0.3, 1];

  const maskReveal: Variants = {
    hidden: (dir: string) => ({
      y: dir === "down" ? "100%" : "-100%",
      opacity: 0,
      rotate: dir === "down" ? 2 : -2,
    }),
    visible: {
      y: "0%",
      opacity: 1,
      rotate: 0,
      transition: { duration: 1.2, ease: customEasing },
    },
  };

  const springCard: Variants = {
    hidden: (dir: string) => ({
      opacity: 0,
      y: dir === "down" ? 100 : -100,
      scale: 0.95,
    }),
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        mass: 1,
      },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-900 font-sans overflow-x-hidden selection:bg-black selection:text-white">
      {/* SCROLL PROGRESS BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-black z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* NAVBAR */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: customEasing, delay: 0.5 }}
        className="fixed w-full top-0 bg-white/30 backdrop-blur-lg z-50 border-b border-gray-200/50 px-8 py-5 flex justify-between items-center transition-colors duration-500 hover:bg-white/80"
      >
        <div className="text-2xl font-black tracking-tighter uppercase text-gray-900 overflow-hidden">
          <motion.div
            custom="down"
            variants={maskReveal}
            initial="hidden"
            animate="visible"
          >
            Refinée
          </motion.div>
        </div>
        <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-[0.2em] text-gray-800">
          {["Home", "Story", "Collection"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1, ease: customEasing }}
              className="relative overflow-hidden group hover:text-black transition-colors duration-300"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left" />
            </motion.a>
          ))}
        </div>
      </motion.nav>

      {/* HERO SECTION DENGAN PARALLAX PURE IMAGE */}
      <section
        id="home"
        ref={heroRef}
        className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-gray-100"
      >
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 w-full h-full z-0"
        >
          <motion.img
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="/hero-image.png"
            alt="Refinée Campaign"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>
      </section>

      {/* MARQUEE RUNNING TEXT */}
      <div className="relative z-20 w-full bg-black text-white py-6 overflow-hidden flex whitespace-nowrap shadow-2xl">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex w-max"
        >
          <div className="flex gap-16 pr-16 text-sm font-medium tracking-[0.2em] uppercase items-center">
            {[...Array(4)].map((_, i) => (
              <React.Fragment key={`part1-${i}`}>
                <span className="hover:text-gray-400 transition-colors cursor-default">
                  Refining Style, Defining You
                </span>
                <span className="text-gray-600 animate-pulse">✦</span>
                <span className="hover:text-gray-400 transition-colors cursor-default">
                  Premium Daily Wear
                </span>
                <span className="text-gray-600 animate-pulse">✦</span>
              </React.Fragment>
            ))}
          </div>
          <div className="flex gap-16 pr-16 text-sm font-medium tracking-[0.2em] uppercase items-center">
            {[...Array(4)].map((_, i) => (
              <React.Fragment key={`part2-${i}`}>
                <span className="hover:text-gray-400 transition-colors cursor-default">
                  Refining Style, Defining You
                </span>
                <span className="text-gray-600 animate-pulse">✦</span>
                <span className="hover:text-gray-400 transition-colors cursor-default">
                  Premium Daily Wear
                </span>
                <span className="text-gray-600 animate-pulse">✦</span>
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>

      {/* NEW COLLECTION SECTION */}
      <section
        id="collection"
        className="relative z-20 py-32 px-5 md:px-8 bg-[#fafafa]"
      >
        <motion.div
          custom={scrollDir}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="overflow-hidden flex justify-center">
            <motion.span
              variants={maskReveal}
              className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-4 block"
            >
              The Essentials
            </motion.span>
          </div>
          <div className="overflow-hidden flex justify-center">
            <motion.h2
              variants={maskReveal}
              className="text-5xl md:text-6xl font-black tracking-tighter text-gray-900"
            >
              FEATURED
            </motion.h2>
          </div>
        </motion.div>

        <motion.div
          custom={scrollDir}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-10% 0px -150px 0px" }}
          variants={staggerContainer}
          className="max-w-[90rem] mx-auto grid md:grid-cols-2 gap-10 lg:gap-16"
        >
          {/* PRODUCT 1 */}
          <motion.div variants={springCard} className="group cursor-pointer">
            <motion.div
              whileHover={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              // Hilangkan aspect-ratio di pembungkus utama agar tinggi bisa menyesuaikan teks
              className="relative bg-white shadow-md group-hover:shadow-2xl transition-shadow duration-700 border border-gray-100 rounded-2xl flex flex-col overflow-hidden"
            >
              {/* IMAGE CONTAINER - Aspect ratio hanya diterapkan di sini */}
              <div className="relative w-full aspect-[4/3] bg-[#f8f8f8] overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8, ease: customEasing }}
                  src="/freya-knit.png"
                  alt="Freya Knit Neck Tee"
                  className="w-full h-full object-contain p-8"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Tombol View Details melayang di atas gambar */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <span className="bg-black text-white text-xs font-bold uppercase tracking-widest py-3.5 px-8 rounded-full shadow-2xl whitespace-nowrap">
                    View Details
                  </span>
                </div>
              </div>

              {/* TEXT CONTAINER - Fleksibel, teks dijamin tidak terpotong */}
              <div className="p-6 md:p-8 bg-white z-10 flex flex-col gap-2">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1.5 group-hover:text-gray-600 transition-colors">
                      Freya Knit Neck Tee
                    </h3>
                    <p className="text-xs md:text-sm font-medium text-gray-400 tracking-wide">
                      For Daily Wear • Unisex
                    </p>
                  </div>
                  <span className="text-xs md:text-sm font-bold text-gray-900 border border-gray-200 px-4 py-1.5 rounded-full flex-shrink-0">
                    3 Colors
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* PRODUCT 2 */}
          <motion.div variants={springCard} className="group cursor-pointer">
            <motion.div
              whileHover={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="relative bg-white shadow-md group-hover:shadow-2xl transition-shadow duration-700 border border-gray-100 rounded-2xl flex flex-col overflow-hidden"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative w-full aspect-[4/3] bg-[#f8f8f8] overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8, ease: customEasing }}
                  src="/boardshort.png"
                  alt="Boardshort Pants Crinkle"
                  className="w-full h-full object-contain p-8"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <span className="bg-black text-white text-xs font-bold uppercase tracking-widest py-3.5 px-8 rounded-full shadow-2xl whitespace-nowrap">
                    View Details
                  </span>
                </div>
              </div>

              {/* TEXT CONTAINER */}
              <div className="p-6 md:p-8 bg-white z-10 flex flex-col gap-2">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1.5 group-hover:text-gray-600 transition-colors">
                      Boardshort Pants{" "}
                      <span className="italic font-serif font-medium text-gray-500">
                        Crinkle
                      </span>
                    </h3>
                    <p className="text-xs md:text-sm font-medium text-gray-400 tracking-wide">
                      Elastic • Functional Pocket
                    </p>
                  </div>
                  <span className="text-xs md:text-sm font-bold text-gray-900 border border-gray-200 px-4 py-1.5 rounded-full flex-shrink-0">
                    Premium
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white pt-24 pb-12 px-8 border-t border-gray-900 relative z-20 overflow-hidden">
        <motion.div
          custom={scrollDir}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-10% 0px -50px 0px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto flex flex-col items-center"
        >
          <div className="overflow-hidden">
            <motion.h2
              variants={maskReveal}
              className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 text-white"
            >
              Refinée
            </motion.h2>
          </div>

          <motion.div
            variants={maskReveal}
            className="flex gap-8 mb-16 text-xs font-bold uppercase tracking-widest text-gray-400"
          >
            {["Instagram", "TikTok", "WhatsApp"].map((social) => (
              <a
                key={social}
                href="#"
                className="relative overflow-hidden group hover:text-white transition-colors"
              >
                {social}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left" />
              </a>
            ))}
          </motion.div>

          <motion.p
            variants={maskReveal}
            className="text-gray-600 text-xs font-medium tracking-widest uppercase"
          >
            © 2026 Refinée. All rights reserved.
          </motion.p>
        </motion.div>
      </footer>
    </div>
  );
}

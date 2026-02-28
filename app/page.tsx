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

  // Efek parallax: gambar bergeser sedikit ke bawah saat di-scroll
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);

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
        className="fixed w-full top-0 bg-white/60 backdrop-blur-xl z-50 border-b border-gray-200/50 px-5 md:px-8 py-4 md:py-5 flex justify-between items-center transition-colors duration-500 hover:bg-white/95"
      >
        <div className="text-xl md:text-2xl font-black tracking-tighter uppercase text-gray-900 overflow-hidden">
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

      {/* HERO SECTION - BEBAS POTONG (NO CROP) */}
      <section
        id="home"
        ref={heroRef}
        // Kita hapus h-screen. Tambahkan padding-top agar gambar turun ke bawah navbar
        className="relative w-full pt-[72px] md:pt-[88px] bg-white overflow-hidden flex flex-col items-center"
      >
        <motion.div
          style={{ y: heroY }}
          className="relative w-full max-w-[120rem]" // Dibatasi lebarnya untuk monitor super ultra-wide agar tidak pecah
        >
          <motion.img
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: customEasing }}
            src="/hero-image.png" // Cukup gunakan 1 gambar asli ini saja
            alt="Refinée Campaign"
            // Kunci utama penyelesaian bug: w-full dan h-auto. Gambar otomatis menyesuaikan layar 100% utuh
            className="w-full h-auto block object-contain"
          />
        </motion.div>
      </section>

      {/* MARQUEE RUNNING TEXT */}
      <div className="relative z-20 w-full bg-black text-white py-4 md:py-6 overflow-hidden flex whitespace-nowrap shadow-2xl">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex w-max"
        >
          <div className="flex gap-10 md:gap-16 pr-10 md:pr-16 text-xs md:text-sm font-medium tracking-[0.2em] uppercase items-center">
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
          <div className="flex gap-10 md:gap-16 pr-10 md:pr-16 text-xs md:text-sm font-medium tracking-[0.2em] uppercase items-center">
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
        className="relative z-20 py-20 md:py-32 px-5 md:px-8 bg-[#fafafa]"
      >
        <motion.div
          custom={scrollDir}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <div className="overflow-hidden flex justify-center">
            <motion.span
              variants={maskReveal}
              className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-4 block"
            >
              The Essentials
            </motion.span>
          </div>
          <div className="overflow-hidden flex justify-center">
            <motion.h2
              variants={maskReveal}
              className="text-4xl md:text-6xl font-black tracking-tighter text-gray-900"
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
          className="max-w-[90rem] mx-auto grid md:grid-cols-2 gap-8 md:gap-16"
        >
          {/* PRODUCT 1 */}
          <motion.div variants={springCard} className="group cursor-pointer">
            <motion.div
              whileHover={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="relative bg-white shadow-md group-hover:shadow-2xl transition-all duration-700 border border-gray-100 rounded-2xl overflow-hidden"
            >
              {/* IMAGE CONTAINER — NO FORCED RATIO */}
              <div className="relative w-full overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: customEasing }}
                  src="/freya-knit.png"
                  alt="Freya Knit Neck Tee"
                  className="w-full h-auto block"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* BUTTON */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="bg-black text-white text-xs font-bold uppercase tracking-widest py-3 px-6 rounded-full shadow-xl">
                    View Details
                  </span>
                </div>
              </div>

              {/* TEXT */}
              <div className="p-6 md:p-8 flex flex-col gap-2">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
                      Freya Knit Neck Tee
                    </h3>
                    <p className="text-xs md:text-sm font-medium text-gray-400 tracking-wide">
                      For Daily Wear • Unisex
                    </p>
                  </div>

                  <span className="text-xs md:text-sm font-bold text-gray-900 border border-gray-200 px-3 py-1 md:px-4 md:py-1.5 rounded-full">
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
              className="relative bg-white shadow-md group-hover:shadow-2xl transition-all duration-700 border border-gray-100 rounded-2xl overflow-hidden"
            >
              {/* IMAGE CONTAINER — NO FORCED RATIO */}
              <div className="relative w-full overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: customEasing }}
                  src="/boardshort.png"
                  alt="Boardshort Pants Crinkle"
                  className="w-full h-auto block"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* BUTTON */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="bg-black text-white text-xs font-bold uppercase tracking-widest py-3 px-6 rounded-full shadow-xl">
                    View Details
                  </span>
                </div>
              </div>

              {/* TEXT */}
              <div className="p-6 md:p-8 flex flex-col gap-2">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
                      Boardshort Pants{" "}
                    </h3>

                    <p className="text-xs md:text-sm font-medium text-gray-400 tracking-wide">
                      Elastic • Functional Pocket
                    </p>
                  </div>

                  <span className="text-xs md:text-sm font-bold text-gray-900 border border-gray-200 px-3 py-1 md:px-4 md:py-1.5 rounded-full">
                    Premium
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white pt-20 md:pt-24 pb-10 md:pb-12 px-5 md:px-8 border-t border-gray-900 relative z-20 overflow-hidden">
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
              className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6 md:mb-8 text-white"
            >
              Refinée
            </motion.h2>
          </div>

          <motion.div
            variants={maskReveal}
            className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12 md:mb-16 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400"
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
            className="text-gray-600 text-[10px] md:text-xs font-medium tracking-widest uppercase text-center"
          >
            © 2026 Refinée. All rights reserved.
          </motion.p>
        </motion.div>
      </footer>
    </div>
  );
}

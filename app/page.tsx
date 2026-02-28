"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

export default function CompanyProfile() {
  const customEasing = [0.16, 1, 0.3, 1];

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: customEasing },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-900 font-sans overflow-hidden">
      {/* NAVBAR */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: customEasing, delay: 0.2 }}
        className="fixed w-full top-0 bg-white/40 backdrop-blur-md z-50 border-b border-gray-200/50 px-8 py-5 flex justify-between items-center hover:bg-white/90 transition-colors duration-500"
      >
        <div className="text-2xl font-black tracking-tighter uppercase text-gray-900">
          Refinée
        </div>
        <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-[0.2em] text-gray-800">
          <a
            href="#home"
            className="hover:text-black transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-black transition-colors duration-300"
          >
            Story
          </a>
          <a
            href="#collection"
            className="hover:text-black transition-colors duration-300"
          >
            Collection
          </a>
        </div>
      </motion.nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gray-100"
      >
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: customEasing }}
          className="absolute inset-0 w-full h-full z-0"
        >
          <img
            src="/hero-image.png"
            alt="Refinée Campaign"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>
      </section>

      {/* MARQUEE RUNNING TEXT (Sudah Diperbaiki Jadi Seamless 100%) */}
      <div className="relative z-20 w-full bg-black text-white py-5 overflow-hidden flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          // Memperpanjang durasi agar jalannya teks lebih santai dan elegan
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex w-max"
        >
          {/* BAGIAN 1 */}
          <div className="flex gap-16 pr-16 text-sm font-medium tracking-[0.2em] uppercase items-center">
            {[...Array(4)].map((_, i) => (
              <React.Fragment key={`part1-${i}`}>
                <span>Refining Style, Defining You</span>
                <span className="text-gray-600">✦</span>
                <span>Premium Daily Wear</span>
                <span className="text-gray-600">✦</span>
              </React.Fragment>
            ))}
          </div>

          {/* BAGIAN 2 (Duplikat identik dari Bagian 1 agar loop sempurna) */}
          <div className="flex gap-16 pr-16 text-sm font-medium tracking-[0.2em] uppercase items-center">
            {[...Array(4)].map((_, i) => (
              <React.Fragment key={`part2-${i}`}>
                <span>Refining Style, Defining You</span>
                <span className="text-gray-600">✦</span>
                <span>Premium Daily Wear</span>
                <span className="text-gray-600">✦</span>
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>

      {/* NEW COLLECTION SECTION */}
      <section
        id="collection"
        className="relative z-20 py-32 px-8 bg-[#fafafa]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-4 block">
            The Essentials
          </span>
          <h2 className="text-5xl font-black tracking-tighter text-gray-900">
            FEATURED
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          variants={staggerContainer}
          className="max-w-[90rem] mx-auto grid md:grid-cols-2 gap-8 lg:gap-16"
        >
          {/* PRODUCT 1 */}
          <motion.div variants={fadeUp} className="group cursor-pointer">
            <div className="relative overflow-hidden bg-white aspect-video mb-8 shadow-sm group-hover:shadow-xl transition-shadow duration-700 border border-gray-100">
              <img
                src="/freya-knit.png"
                alt="Freya Knit Neck Tee"
                className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <span className="bg-black text-white text-xs font-bold uppercase tracking-widest py-3 px-6 whitespace-nowrap">
                  View Details
                </span>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Freya Knit Neck Tee
                </h3>
                <p className="text-sm font-medium text-gray-400 tracking-wide">
                  For Daily Wear • Unisex
                </p>
              </div>
              <span className="text-sm font-bold text-gray-900">3 Colors</span>
            </div>
          </motion.div>

          {/* PRODUCT 2 */}
          <motion.div variants={fadeUp} className="group cursor-pointer">
            <div className="relative overflow-hidden bg-white aspect-video mb-8 shadow-sm group-hover:shadow-xl transition-shadow duration-700 border border-gray-100">
              <img
                src="/boardshort.png"
                alt="Boardshort Pants Crinkle"
                className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <span className="bg-black text-white text-xs font-bold uppercase tracking-widest py-3 px-6 whitespace-nowrap">
                  View Details
                </span>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Boardshort Pants{" "}
                  <span className="italic font-serif font-medium">Crinkle</span>
                </h3>
                <p className="text-sm font-medium text-gray-400 tracking-wide">
                  Elastic • Functional Pocket
                </p>
              </div>
              <span className="text-sm font-bold text-gray-900">Premium</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white pt-24 pb-12 px-8 border-t border-gray-900 relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          variants={fadeUp}
          className="max-w-7xl mx-auto flex flex-col items-center"
        >
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-8">
            Refinée
          </h2>
          <div className="flex gap-8 mb-16 text-xs font-bold uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition-colors">
              TikTok
            </a>
            <a href="#" className="hover:text-white transition-colors">
              WhatsApp
            </a>
          </div>
          <p className="text-gray-600 text-xs font-medium tracking-widest uppercase">
            © 2026 Refinée. All rights reserved.
          </p>
        </motion.div>
      </footer>
    </div>
  );
}

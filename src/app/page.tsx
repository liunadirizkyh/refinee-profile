"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Featured from "../components/Featured";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

export default function CompanyProfile() {
  const { scrollYProgress, scrollY } = useScroll();
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

  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-900 font-sans overflow-x-hidden selection:bg-black selection:text-white scroll-smooth">
      {/* SCROLL PROGRESS BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-black z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <Navbar />
      <Hero />
      <Marquee />

      {/* Kita oper (pass) state scrollDir sebagai props ke komponen yang butuh */}
      <Featured scrollDir={scrollDir} />
      <Reviews scrollDir={scrollDir} />
      <Footer scrollDir={scrollDir} />
    </div>
  );
}

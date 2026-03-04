"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { customEasing } from "../utils/animations";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);

  return (
    <div>
      <section
        id="home"
        ref={heroRef}
        className="relative w-full pt-[60px] md:pt-[72px] bg-white overflow-hidden flex flex-col items-center"
      >
        <motion.div
          style={{ y: heroY }}
          className="relative w-full max-w-[120rem]"
        >
          <motion.img
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: customEasing }}
            src="/hero-image.png"
            alt="Refinée Campaign"
            className="w-full h-auto block object-contain"
          />
        </motion.div>
      </section>
    </div>
  );
}

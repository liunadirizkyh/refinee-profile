"use client";

import { motion } from "framer-motion";
import { maskReveal, staggerContainer } from "../utils/animations";

const Footer = ({ scrollDir }: { scrollDir: string }) => {
  return (
    <footer className="bg-black text-white pt-16 md:pt-24 pb-8 md:pb-12 px-5 md:px-8 relative z-20 overflow-hidden">
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
          {[
            {
              name: "Instagram",
              url: "https://www.instagram.com/refinee.official/",
            },
            {
              name: "TikTok",
              url: "https://www.tiktok.com/@refinee.official",
            },
            {
              name: "WhatsApp",
              url: "https://api.whatsapp.com/send/?phone=6282258726257&text&type=phone_number&app_absent=0",
            },
          ].map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden group hover:text-white transition-colors py-2"
            >
              {social.name}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left" />
            </a>
          ))}
        </motion.div>

        <motion.p
          variants={maskReveal}
          className="text-gray-500 text-[10px] md:text-xs font-medium tracking-widest uppercase text-center"
        >
          © 2026 Refinée. All rights reserved.
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;

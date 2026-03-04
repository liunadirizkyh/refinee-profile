"use client";

import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="relative z-20 w-full bg-black text-white py-3 md:py-5 overflow-hidden flex whitespace-nowrap shadow-2xl">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        className="flex w-max"
      >
        <div className="flex gap-8 md:gap-16 pr-8 md:pr-16 text-[10px] md:text-sm font-medium tracking-[0.2em] uppercase items-center">
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
        <div className="flex gap-8 md:gap-16 pr-8 md:pr-16 text-[10px] md:text-sm font-medium tracking-[0.2em] uppercase items-center">
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
  );
};

export default Marquee;

"use client";

import { motion } from "framer-motion";
import {
  maskReveal,
  staggerContainer,
  springCard,
  customEasing,
} from "../utils/animations";

const Featured = ({ scrollDir }: { scrollDir: string }) => {
  return (
    <section
      id="featured"
      className="relative z-20 py-20 md:py-32 px-5 md:px-8 bg-[#fafafa] scroll-mt-20"
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
        {/* PRODUCT 1: Freya Knit Neck Tee */}
        <motion.div variants={springCard} className="group cursor-pointer">
          <motion.a
            href="https://shopee.co.id/refinee?originalCategoryId=11042877#product_list"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="relative bg-white shadow-md group-hover:shadow-2xl transition-all duration-700 border border-gray-100 rounded-2xl overflow-hidden block"
          >
            <div className="relative w-full overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: customEasing }}
                src="/freya-knit.png"
                alt="Freya Knit Neck Tee"
                className="w-full h-auto block"
              />

              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="bg-black text-white text-[10px] md:text-xs font-bold uppercase tracking-widest py-3 px-6 rounded-full shadow-xl whitespace-nowrap">
                  View Details
                </span>
              </div>
            </div>

            <div className="p-5 md:p-8 flex flex-col gap-2">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-lg md:text-2xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
                    Freya Knit Neck Tee
                  </h3>
                  <p className="text-xs md:text-sm font-medium text-gray-400 tracking-wide">
                    For Daily Wear • Unisex
                  </p>
                </div>

                <span className="text-[10px] md:text-sm font-bold text-gray-900 border border-gray-200 px-3 py-1 md:px-4 md:py-1.5 rounded-full whitespace-nowrap">
                  3 Colors
                </span>
              </div>
            </div>
          </motion.a>
        </motion.div>

        {/* PRODUCT 2: Boardshort Pants Crinkle */}
        <motion.div variants={springCard} className="group cursor-pointer">
          <motion.a
            href="https://shopee.co.id/product/1386740594/27427560185"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="relative bg-white shadow-md group-hover:shadow-2xl transition-all duration-700 border border-gray-100 rounded-2xl overflow-hidden block"
          >
            <div className="relative w-full overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: customEasing }}
                src="/boardshort.png"
                alt="Boardshort Pants Crinkle"
                className="w-full h-auto block"
              />

              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="bg-black text-white text-[10px] md:text-xs font-bold uppercase tracking-widest py-3 px-6 rounded-full shadow-xl whitespace-nowrap">
                  View Details
                </span>
              </div>
            </div>

            <div className="p-5 md:p-8 flex flex-col gap-2">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-lg md:text-2xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
                    Boardshort Pants{" "}
                  </h3>
                  <p className="text-xs md:text-sm font-medium text-gray-400 tracking-wide">
                    Elastic • Functional Pocket
                  </p>
                </div>

                <span className="text-[10px] md:text-sm font-bold text-gray-900 border border-gray-200 px-3 py-1 md:px-4 md:py-1.5 rounded-full whitespace-nowrap">
                  Premium
                </span>
              </div>
            </div>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Featured;

"use client";

import { motion, Variants } from "framer-motion";

export default function CompanyProfile() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans overflow-x-hidden">
      {/* NAVBAR */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full top-0 bg-white/80 backdrop-blur-md z-50 shadow-sm px-8 py-4 flex justify-between items-center"
      >
        <div className="text-2xl font-bold tracking-tighter">Refinée</div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <a href="#home" className="hover:text-black transition">
            Home
          </a>
          <a href="#about" className="hover:text-black transition">
            About
          </a>
          <a href="#collection" className="hover:text-black transition">
            Collection
          </a>
        </div>
      </motion.nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-8 pt-28 pb-12"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          {/* Bagian Teks */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-left lg:col-span-5 order-2 lg:order-1"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold leading-tight text-gray-900 mb-6"
            >
              Refining Style, <br />
              <span className="text-gray-500">Defining You.</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 mb-8 max-w-md"
            >
              Elevate your daily wear with our premium, carefully crafted
              apparel. Discover the perfect balance of comfort and modern
              aesthetics.
            </motion.p>
            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-4 rounded-full font-medium tracking-wide shadow-lg hover:bg-gray-800 transition"
            >
              Explore Collection
            </motion.button>
          </motion.div>

          {/* Bagian Gambar (Menggunakan aspect-[1186/638] agar persis dengan rasio aslinya) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full aspect-[1186/638] bg-gray-100 rounded-[2rem] overflow-hidden shadow-2xl lg:col-span-7 order-1 lg:order-2"
          >
            <img
              src="/hero-image.png"
              alt="Refinée Models"
              // Karena rasio container sudah persis sama dengan rasio gambar, object-cover tidak akan memotong gambar
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* NEW COLLECTION SECTION */}
      <section id="collection" className="py-24 bg-white px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2 block">
            New Arrivals
          </span>
          <h2 className="text-4xl font-bold text-gray-900">
            Featured Products
          </h2>
        </motion.div>

        {/* Saya juga menyesuaikan sedikit rasio untuk produk bawah agar gambarnya tidak terlalu nge-zoom */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12"
        >
          {/* PRODUCT 1 */}
          <motion.div variants={fadeInUp} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-video mb-6">
              <img
                src="/freya-knit.png"
                alt="Freya Knit Neck Tee"
                className="w-full h-full object-contain bg-white group-hover:scale-105 transition duration-700 ease-in-out"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              Freya Knit Neck Tee
            </h3>
            <p className="text-gray-500 mt-2">
              For Daily Wear • Unisex • 3 Colors
            </p>
          </motion.div>

          {/* PRODUCT 2 */}
          <motion.div variants={fadeInUp} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-video mb-6">
              <img
                src="/boardshort.png"
                alt="Boardshort Pants Crinkle"
                className="w-full h-full object-contain bg-white group-hover:scale-105 transition duration-700 ease-in-out"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              Boardshort Pants{" "}
              <span className="italic font-serif">Crinkle</span>
            </h3>
            <p className="text-gray-500 mt-2">
              Premium Crinkle • Elastic • Functional Pocket
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-12 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold mb-4">Refinée</h2>
          <p className="text-gray-400 text-sm">
            © 2026 Refinée. All rights reserved.
          </p>
        </motion.div>
      </footer>
    </div>
  );
}

"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { maskReveal, staggerContainer } from "../utils/animations";
import { REVIEWS } from "../data/reviewData";

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-1 text-[#FFD700] mb-4">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < count ? "fill-current" : "fill-gray-200"}`}
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Reviews = ({ scrollDir }: { scrollDir: string }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    let animationId: number;

    if (el.scrollLeft === 0) {
      el.scrollLeft = el.scrollWidth / 2;
    }

    const autoScroll = () => {
      if (!isDragging) {
        el.scrollLeft -= 1;

        if (el.scrollLeft <= 0) {
          el.scrollLeft += el.scrollWidth / 2;
        }
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationId);
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    if (carouselRef.current) {
      setStartX(e.pageX - carouselRef.current.offsetLeft);
      setStartScrollLeft(carouselRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = startScrollLeft - walk;

    if (carouselRef.current.scrollLeft <= 0) {
      carouselRef.current.scrollLeft += carouselRef.current.scrollWidth / 2;
      setStartX(e.pageX - carouselRef.current.offsetLeft);
      setStartScrollLeft(carouselRef.current.scrollLeft);
    } else if (
      carouselRef.current.scrollLeft >=
      carouselRef.current.scrollWidth - carouselRef.current.clientWidth
    ) {
      carouselRef.current.scrollLeft -= carouselRef.current.scrollWidth / 2;
      setStartX(e.pageX - carouselRef.current.offsetLeft);
      setStartScrollLeft(carouselRef.current.scrollLeft);
    }
  };

  return (
    <section
      id="reviews"
      className="relative z-20 py-16 md:py-32 bg-white overflow-hidden border-t border-gray-100 scroll-mt-20"
    >
      <motion.div
        custom={scrollDir}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
        variants={staggerContainer}
        className="text-center max-w-3xl mx-auto mb-10 md:mb-20 px-5"
      >
        <div className="overflow-hidden flex justify-center">
          <motion.span
            variants={maskReveal}
            className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-4 block"
          >
            Testimonials
          </motion.span>
        </div>
        <div className="overflow-hidden flex justify-center">
          <motion.h2
            variants={maskReveal}
            className="text-3xl md:text-6xl font-black tracking-tighter text-gray-900"
          >
            COMMUNITY
          </motion.h2>
        </div>
      </motion.div>

      <div className="w-full relative [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          className={`flex w-full overflow-x-auto gap-4 md:gap-8 px-5 md:px-8 pb-8 pt-4 select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={`row-${i}`}>
              {REVIEWS.map((review, idx) => (
                <div
                  key={`${i}-${idx}`}
                  className="w-[280px] md:w-[400px] flex-shrink-0 bg-[#fafafa] p-6 md:p-8 rounded-3xl border border-gray-100 flex flex-col justify-between shadow-sm pointer-events-none"
                >
                  <div>
                    <StarRating count={review.rating} />
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 md:mb-8 italic font-serif">
                      &quot;{review.text}&quot;
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm md:text-base">
                      {review.name}
                    </h4>
                    <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider mt-1">
                      {review.role}
                    </p>
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

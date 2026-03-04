import { Variants } from "framer-motion";

export const customEasing: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const maskReveal: Variants = {
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

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

export const springCard: Variants = {
  hidden: (dir: string) => ({
    opacity: 0,
    y: dir === "down" ? 100 : -100,
    scale: 0.95,
  }),
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 60, damping: 15, mass: 1 },
  },
};

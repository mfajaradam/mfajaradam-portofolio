import { Easing } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, filter: "drop-shadow(0 0 0 rgba(255,255,255,0))" },
  show: {
    opacity: 1,
    y: 0,
    filter: "drop-shadow(0 0 12px rgba(255,255,255,0.25))",
    transition: {
      duration: 0.8,
      ease: [0.21, 1.02, 0.73, 1] as Easing,
    },
  },
};

const float = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1] as Easing,
    },
  },
};

const containerVariants = {
  show: {
    transition: { staggerChildren: 0.18 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as Easing, // smooth cubic-bezier (premium feel)
    },
  },
};

const parentVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const listVariant = {
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export { container, item, float, containerVariants, cardVariants, parentVariant, listVariant };

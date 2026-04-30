import { type Variants } from "framer-motion";

export const heroReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(18px)",
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.56,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export const pageHeroReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(18px)",
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.92,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

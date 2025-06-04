"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type AnimationType =
  | "fade-in"
  | "fade-out"
  | "fade-left"
  | "fade-right"
  | "fade-up"
  | "fade-down"
  | "zoom-in"
  | "zoom-out"
  | "flip-up"
  | "flip-down";

const getInitialVariants = (type: AnimationType) => {
  switch (type) {
    case "fade-in":
      return { opacity: 0 };
    case "fade-out":
      return { opacity: 1 };
    case "fade-left":
      return { opacity: 0, x: 60 };
    case "fade-right":
      return { opacity: 0, x: -60 };
    case "fade-up":
      return { opacity: 0, y: 60 };
    case "fade-down":
      return { opacity: 0, y: -60 };
    case "zoom-in":
      return { opacity: 0, scale: 0.8 };
    case "zoom-out":
      return { opacity: 0, scale: 1.2 };
    case "flip-up":
      return { opacity: 0, rotateX: 90 };
    case "flip-down":
      return { opacity: 0, rotateX: -90 };
    default:
      return { opacity: 0 };
  }
};

const getFinalVariants = () => ({
  opacity: 1,
  x: 0,
  y: 0,
  scale: 1,
  rotateX: 0,
});

interface ScrollAnimateProps {
  children: React.ReactNode;
  type?: AnimationType;
  duration?: number;
  delay?: number;
  once?: boolean;
  className?: string;
}

export const ScrollAnimate = ({
  children,
  type = "fade-in",
  duration = 1,
  delay = 0,
  once = false,
  className,
}: ScrollAnimateProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once });

  const initial = getInitialVariants(type);
  const animate = inView ? getFinalVariants() : initial;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={animate}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

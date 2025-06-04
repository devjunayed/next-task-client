"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Direction = "up" | "down" | "left" | "right" | "center";

const getVariants = (direction: Direction) => {
  const base = { opacity: 0 };
  switch (direction) {
    case "up":
      return { ...base, y: 40 };
    case "down":
      return { ...base, y: -40 };
    case "left":
      return { ...base, x: 60 };
    case "right":
      return { ...base, x: -60 };
    case "center":
    default:
      return base;
  }
};

export const ScrollFade = ({
  children,
  direction = "up",
  duration = 0.6,
}: {
  children: React.ReactNode;
  direction?: Direction;
  duration?: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={getVariants(direction)}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

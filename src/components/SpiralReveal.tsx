"use client";

import { motion, type Variants, type HTMLMotionProps } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Builds a "spiral-in" variants object: elements start rotated, scaled down,
 * and offset along an arc, then swirl into their resting position instead of
 * the generic fade+slide-up pattern.
 */
export function spiralVariants(
  direction: "cw" | "ccw" = "cw",
  radius = 70,
  delay = 0
): Variants {
  const sign = direction === "cw" ? 1 : -1;
  return {
    hidden: {
      opacity: 0,
      scale: 0.55,
      rotate: sign * 46,
      x: sign * radius * 0.6,
      y: radius * 0.5,
    },
    show: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      x: 0,
      y: 0,
      transition: { duration: 0.85, delay, ease: EASE },
    },
  };
}

type SpiralRevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  direction?: "cw" | "ccw";
  radius?: number;
};

/**
 * Drop-in wrapper: children swirl into view (rotate + scale + arc offset)
 * the first time they cross into the viewport, instead of a plain fade-up.
 */
export default function SpiralReveal({
  children,
  delay = 0,
  direction = "cw",
  radius = 70,
  ...rest
}: SpiralRevealProps) {
  return (
    <motion.div
      variants={spiralVariants(direction, radius, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
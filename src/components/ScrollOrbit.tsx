"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/**
 * A fixed orbital scroll-progress dial: a radar-style ring that fills as the
 * page is scrolled, with a bright marker that spirals around it multiple
 * times across the full page length — a persistent, on-brand replacement
 * for a plain scrollbar or generic "back to top" button.
 */
export default function ScrollOrbit() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.4,
  });

  const size = 64;
  const stroke = 2.5;
  const r = (size - stroke) / 2;
  const circumference = 2 * Math.PI * r;

  const dashOffset = useTransform(smooth, (v) => circumference * (1 - v));
  // spins three full loops across the page — the "spiral" motion signature
  const rotate = useTransform(smooth, (v) => v * 360 * 3);
  const percent = useTransform(smooth, (v) => `${Math.round(v * 100)}`);

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden sm:block">
      <a
        href="#top"
        aria-label="Scroll progress — back to top"
        className="glass-strong group relative flex h-16 w-16 items-center justify-center rounded-full transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(255,36,64,0.35)]"
      >
        <svg
          width={size}
          height={size}
          className="absolute inset-0 -rotate-90"
          viewBox={`0 0 ${size} ${size}`}
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={stroke}
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="var(--red-primary)"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            style={{ strokeDashoffset: dashOffset }}
          />
        </svg>

        {/* marker orbiting the ring, spiraling around as you scroll */}
        <motion.div
          style={{ rotate }}
          className="absolute inset-0 flex items-start justify-center"
        >
          <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-[var(--red-bright)] shadow-[0_0_10px_var(--red-bright)]" />
        </motion.div>

        <span className="mono-tag flex items-baseline gap-0.5 text-[10px] text-[var(--text)]">
          <motion.span>{percent}</motion.span>%
        </span>
      </a>
    </div>
  );
}
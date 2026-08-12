"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";
import SpiralReveal from "./SpiralReveal";

export default function Section({
  id,
  index,
  title,
  kicker,
  description,
  children,
}: {
  id: string;
  index: string;
  title: string;
  kicker: string;
  description?: string;
  children: ReactNode;
}) {
  // alternate which way each section "branches" off the central spine
  const side: 1 | -1 = parseInt(index, 10) % 2 === 0 ? 1 : -1;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateY = useTransform(scrollYProgress, [0, 0.6, 1], [side * 30, side * 12, 0]);
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [side * 92, side * 24, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [52, 0]);
  const z = useTransform(scrollYProgress, [0, 0.8, 1], [-48, -18, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.18, 0.7, 1], [0.05, 0.55, 0.94, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);

  return (
    <motion.section
      ref={ref}
      id={id}
      style={{ opacity, x, y, z, rotateY, scale, transformStyle: "preserve-3d" }}
      className="relative px-6 py-24 sm:px-10 lg:px-16 motion-smooth"
    >
      {/* branch connector: a short stem reaching toward the central spine */}
      <span
        aria-hidden
        className={`pointer-events-none absolute top-14 hidden h-px w-10 bg-gradient-to-r from-[var(--red-primary)]/70 to-transparent lg:block ${
          side === 1 ? "left-0 -translate-x-full" : "right-0 translate-x-full rotate-180"
        }`}
      />
      <span
        aria-hidden
        className={`pointer-events-none absolute top-[3.35rem] hidden h-2 w-2 -translate-y-1/2 rounded-full bg-[var(--red-bright)] shadow-[0_0_10px_var(--red-bright)] lg:block ${
          side === 1 ? "left-0 -translate-x-[calc(100%+2.5rem)]" : "right-0 translate-x-[calc(100%+2.5rem)]"
        }`}
      />

      <div className="mx-auto max-w-6xl">
        <SpiralReveal
          direction="ccw"
          radius={50}
          className="mb-12 flex flex-col gap-3 border-b border-[var(--glass-border-soft)] pb-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <div className="mono-tag mb-3 flex items-center gap-2 text-[var(--red-bright)]">
              <span className="text-[var(--text-faint)]">{index}</span>
              <span className="h-px w-6 bg-[var(--red-primary)]/50" />
              {kicker}
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
              {title}
            </h2>
          </div>
          {description && (
            <p className="max-w-sm text-sm leading-relaxed text-[var(--text-muted)]">
              {description}
            </p>
          )}
        </SpiralReveal>

        {children}
      </div>
    </motion.section>
  );
}
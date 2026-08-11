"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * A tall serpentine "vine" that runs down the spine of the page, behind the
 * section panels. It draws itself in as the page scrolls (stroke reveals
 * top-to-bottom) and each bend acts as a visual anchor point that a
 * section's content "branches" off of. Pairs with the per-section lean in
 * Section.tsx to read as one continuous spiral-tree structure rather than
 * isolated per-card animations.
 */
export default function TreeSpine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // draws the vine from 0 -> 100% of its length as you scroll the section stack
  const dashOffset = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // one useTransform per branch node (fixed count — keeps this rules-of-hooks safe)
  const node0 = useTransform(scrollYProgress, [0, 0.08], [0.15, 1]);
  const node1 = useTransform(scrollYProgress, [0.08, 0.16], [0.15, 1]);
  const node2 = useTransform(scrollYProgress, [0.25, 0.33], [0.15, 1]);
  const node3 = useTransform(scrollYProgress, [0.42, 0.5], [0.15, 1]);
  const node4 = useTransform(scrollYProgress, [0.58, 0.66], [0.15, 1]);
  const node5 = useTransform(scrollYProgress, [0.75, 0.83], [0.15, 1]);
  const node6 = useTransform(scrollYProgress, [0.92, 1], [0.15, 1]);
  const nodeOpacity = [node0, node1, node2, node3, node4, node5, node6];

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-full -translate-x-1/2 lg:block"
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 100 2000"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="vine-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--red-primary)" stopOpacity="0" />
            <stop offset="8%" stopColor="var(--red-primary)" stopOpacity="0.55" />
            <stop offset="92%" stopColor="var(--red-primary)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--red-primary)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* faint static guide */}
        <path
          d="M50,0 C15,160 85,330 50,500 C15,670 85,840 50,1000
             C15,1160 85,1330 50,1500 C15,1670 85,1840 50,2000"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1.4"
        />

        {/* animated glowing vine that draws in with scroll */}
        <motion.path
          d="M50,0 C15,160 85,330 50,500 C15,670 85,840 50,1000
             C15,1160 85,1330 50,1500 C15,1670 85,1840 50,2000"
          stroke="url(#vine-fade)"
          strokeWidth="1.6"
          pathLength={1}
          style={{ pathLength: 1, strokeDasharray: 1, strokeDashoffset: dashOffset }}
        />

        {/* branch nodes at each bend — light up as the vine reaches them */}
        {[
          [50, 0],
          [50, 330],
          [50, 660],
          [50, 1000],
          [50, 1330],
          [50, 1660],
          [50, 2000],
        ].map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r={5}
            fill="var(--red-bright)"
            style={{ opacity: nodeOpacity[i] }}
          />
        ))}
      </svg>
    </div>
  );
}
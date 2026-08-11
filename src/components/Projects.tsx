"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Section from "./Section";
import { spiralVariants } from "./SpiralReveal";
import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <Section
      id="projects"
      index="04"
      kicker="Selected work"
      title="Projects"
      description="Two builds that show the range — analytical and full-stack."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.href}
            variants={spiralVariants(i % 2 === 0 ? "cw" : "ccw", 75, i * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -6 }}
            className="glass-strong group relative flex flex-col overflow-hidden rounded-2xl p-7 transition-shadow duration-300 hover:shadow-[0_0_50px_rgba(255,36,64,0.15)]"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--red-primary)]/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />

            <div className="mb-6 flex items-start justify-between">
              <span className="mono-tag text-[var(--text-faint)]">
                PROJECT.{String(i + 1).padStart(2, "0")}
              </span>
              <ArrowUpRight
                size={18}
                className="text-[var(--text-faint)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--red-bright)]"
              />
            </div>

            <h3 className="font-display text-xl font-bold text-[var(--text)]">
              {p.name}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
              {p.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-[var(--glass-border-soft)] px-2.5 py-1 text-[11px] font-mono text-[var(--text-muted)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

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
  return (
    <section id={id} className="relative px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
        </motion.div>

        {children}
      </div>
    </section>
  );
}

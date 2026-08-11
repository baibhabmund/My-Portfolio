"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";
import { profile, stats } from "@/data/resume";

const EASE = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center px-6 pt-32 pb-20 sm:px-10 lg:px-16"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]"
      >
        {/* ---- Left: copy ---- */}
        <div>
          <motion.div
            variants={item}
            className="mono-tag mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--glass-border)] bg-[var(--glass-fill)] px-3 py-1.5"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--red-primary)] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--red-primary)]" />
            </span>
            Open to opportunities · {profile.location}
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-[13vw] font-bold leading-[0.95] tracking-tight sm:text-[6.4rem] lg:text-[5.1rem]"
          >
            <span className="block text-[var(--text)]">Baibhab</span>
            <span className="text-gradient-red block text-glow">Mund</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            variants={item}
            className="mono-tag mt-4 text-[var(--text-faint)]"
          >
            {profile.role}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[var(--red-primary)] px-6 py-3.5 text-sm font-semibold text-[#0a0a0a] transition-transform duration-300 hover:-translate-y-0.5"
            >
              View the work
              <ArrowDownRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-500 group-hover:translate-x-0" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-[var(--text)] transition-colors duration-300 hover:border-[var(--red-primary)]/50"
            >
              <Sparkles size={15} className="text-[var(--red-bright)]" />
              Get in touch
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-14 grid max-w-lg grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-bold text-[var(--text)]">
                  {s.value}
                  <span className="text-[var(--red-primary)]">+</span>
                </div>
                <div className="mono-tag mt-1 text-[var(--text-faint)]">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ---- Right: avatar placeholder in HUD frame ---- */}
        <motion.div variants={item} className="relative mx-auto w-full max-w-sm">
          <AvatarFrame />
        </motion.div>
      </motion.div>
    </section>
  );
}

function AvatarFrame() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[380px]">
      {/* rotating dashed rings */}
      <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-[var(--red-primary)]/25" />
      <div className="absolute inset-6 animate-spin-slower rounded-full border border-dashed border-[var(--red-primary)]/15" />

      {/* outer glow pulse */}
      <div className="absolute inset-8 rounded-full bg-[var(--red-primary)]/20 blur-3xl" />

      {/* hex-ish frame using clip-path */}
      <div
        className="glass-strong glow-red absolute inset-10 overflow-hidden"
        style={{
          clipPath:
            "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
        }}
      >
        {/* placeholder content — swap this block for a real <Image /> later */}
        <div className="relative flex h-full w-full items-center justify-center bg-[linear-gradient(145deg,rgba(255,36,64,0.16),rgba(0,0,0,0.4))]">
          <span className="font-display text-6xl font-bold text-[var(--text)]/90">
            BM
          </span>
          <div className="absolute inset-0 animate-scanline bg-gradient-to-b from-transparent via-[var(--red-primary)]/25 to-transparent" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:14px_14px]" />
        </div>
      </div>

      {/* pulsing ping ring */}
      <div
        className="absolute inset-10 animate-pulse-ring rounded-full border border-[var(--red-primary)]"
        style={{
          clipPath:
            "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
        }}
      />

      {/* corner readouts */}
      <div className="mono-tag absolute -left-2 top-6 rotate-[-90deg] text-[var(--text-faint)]">
        ID · BM_2026
      </div>
      <div className="glass mono-tag absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1.5 text-[var(--red-bright)]">
        photo pending · placeholder active
      </div>
    </div>
  );
}

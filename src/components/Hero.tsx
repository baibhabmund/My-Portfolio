"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import { profile, stats } from "@/data/resume";

const EASE = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASE,
    },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-36 pb-20 sm:px-10 sm:pt-32 lg:px-16"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-[var(--red-primary)]/10 blur-[140px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_1.05fr]"
      >
        {/* ---- Right: avatar in HUD frame ---- */}
        <motion.div
          variants={item}
          className="relative mx-auto order-first w-full max-w-lg lg:order-last"
        >
          <AvatarFrame />
        </motion.div>

        {/* ---- Left: copy ---- */}
        <div className="order-last lg:order-first">
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
            className="font-display text-[clamp(2.75rem,13vw,4.5rem)] font-bold leading-[1.02] tracking-tight sm:text-[6.4rem] sm:leading-[0.95] lg:text-[5.1rem]"
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

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
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
              <Sparkles
                size={15}
                className="text-[var(--red-bright)]"
              />

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

                <div className="mono-tag mt-1 text-[var(--text-faint)]">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function AvatarFrame() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let unmutedOnInteraction = false;

    const tryPlayUnmuted = async () => {
      video.muted = false;
      try {
        await video.play();
      } catch {
        // Browser blocked sound autoplay — fall back to muted so it still plays.
        video.muted = true;
        try {
          await video.play();
        } catch {
          // Autoplay fully blocked; will start on first user interaction below.
        }
      }
    };

    const unmuteOnInteraction = () => {
      if (unmutedOnInteraction || !video) return;
      unmutedOnInteraction = true;
      video.muted = false;
      video.play().catch(() => {});
      window.removeEventListener("click", unmuteOnInteraction);
      window.removeEventListener("keydown", unmuteOnInteraction);
      window.removeEventListener("scroll", unmuteOnInteraction);
      window.removeEventListener("touchstart", unmuteOnInteraction);
    };

    tryPlayUnmuted();

    window.addEventListener("click", unmuteOnInteraction);
    window.addEventListener("keydown", unmuteOnInteraction);
    window.addEventListener("scroll", unmuteOnInteraction);
    window.addEventListener("touchstart", unmuteOnInteraction);

    return () => {
      window.removeEventListener("click", unmuteOnInteraction);
      window.removeEventListener("keydown", unmuteOnInteraction);
      window.removeEventListener("scroll", unmuteOnInteraction);
      window.removeEventListener("touchstart", unmuteOnInteraction);
    };
  }, []);

  return (
    <motion.div
      className="relative mx-auto aspect-square w-full max-w-[480px] mt-6 mb-4 sm:mt-0 sm:mb-0"
      animate={{ y: [0, -14, 0] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Rotating dashed rings */}
      <div className="absolute -inset-4 animate-spin-slow rounded-full border border-dashed border-[var(--red-primary)]/25" />

      <div className="absolute inset-4 animate-spin-slower rounded-full border border-dashed border-[var(--red-primary)]/15" />

      {/* Stronger outer glow */}
      <div className="absolute inset-6 rounded-full bg-[var(--red-primary)]/25 blur-[90px]" />

      <div className="absolute inset-16 rounded-full bg-[var(--red-bright)]/15 blur-3xl" />

      {/* Hex frame */}
      <div
        className="glass-strong glow-red absolute inset-8 overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
        style={{
          clipPath:
            "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
        }}
      >
        <video
          ref={videoRef}
          src="/images/make_this_video_speak_Hi_my.mp4"
          playsInline
          className="absolute inset-0 h-full w-full scale-[1.04] object-cover object-top saturate-[1.08] contrast-[1.05]"
        />

        {/* Bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Scanline */}
        <div className="absolute inset-0 animate-scanline bg-gradient-to-b from-transparent via-[var(--red-primary)]/25 to-transparent" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:14px_14px]" />
      </div>

      {/* Pulsing hex ring */}
      <div
        className="absolute inset-8 animate-pulse-ring rounded-full border border-[var(--red-primary)]"
        style={{
          clipPath:
            "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
        }}
      />

      {/* Corner readout */}
      <div className="mono-tag absolute -left-2 top-10 rotate-[-90deg] text-[var(--text-faint)] sm:-left-4">
        ID · BM_2026
      </div>

      {/* Status chip */}
      <div className="glass-strong absolute -right-2 top-8 flex flex-col items-start gap-0.5 rounded-2xl border border-[var(--glass-border)] px-3 py-2.5 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] sm:-right-8 sm:px-4 sm:py-3">
        <span className="mono-tag text-[var(--red-bright)]">
          STATUS
        </span>

        <span className="text-sm font-semibold text-[var(--text)]">
          Actively building
        </span>
      </div>

      {/* Bottom label */}
      <div className="glass mono-tag absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1.5 text-[var(--red-bright)]">
        Whizrobo · OJT 2026
      </div>
    </motion.div>
  );
}
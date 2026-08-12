"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  MessageCircle,
  X,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { spiralVariants } from "./SpiralReveal";
import { profile } from "@/data/resume";

const links = [
  {
    icon: Mail,
    label: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: profile.location,
    href: "#",
  },
];

export default function Contact() {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <section
      id="contact"
      className="relative px-6 py-28 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={spiralVariants("cw", 90, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="glass-strong hud-frame glow-red relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16"
        >
          {/* Background Glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,36,64,0.16),transparent_60%)]" />

          {/* Section Label */}
          <span className="mono-tag relative z-10 text-[var(--red-bright)]">
            06 · Let&apos;s build something
          </span>

          {/* Heading */}
          <h2 className="font-display relative z-10 mx-auto mt-5 max-w-2xl text-3xl font-bold tracking-tight text-[var(--text)] sm:text-5xl">
            Got a system worth{" "}
            <span className="text-gradient-red">fixing</span>?
          </h2>

          {/* Description */}
          <p className="relative z-10 mx-auto mt-5 max-w-md text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
            Open to full-time roles and freelance work across data, Android,
            and front-end engineering.
          </p>

          {/* Contact Button + Links */}
          <div className="relative z-10 mt-10 flex flex-col items-center gap-4">
            {/* Say Hello Button */}
            <button
              type="button"
              onClick={() => setShowOptions(true)}
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--red-primary)] px-8 py-4 text-sm font-semibold text-[#0a0a0a] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Say hello

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>

            {/* Existing Contact Information */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {links.map((l) => {
                const Icon = l.icon;

                return (
                  <a
                    key={l.label}
                    href={l.href}
                    className="glass flex items-center gap-2 rounded-full px-4 py-2.5 text-xs text-[var(--text-muted)] transition-colors duration-200 hover:border-[var(--red-primary)]/50 hover:text-[var(--red-bright)]"
                  >
                    <Icon size={13} />
                    {l.label}
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          CONTACT OPTIONS MODAL
          ===================================================== */}

      <AnimatePresence>
        {showOptions && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm"
            onClick={() => setShowOptions(false)}
          >
            {/* Modal */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="glass-strong hud-frame glow-red relative w-full max-w-md rounded-3xl p-8"
              onClick={(event) => event.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setShowOptions(false)}
                aria-label="Close contact options"
                className="absolute right-5 top-5 rounded-full p-2 text-[var(--text-muted)] transition-colors hover:bg-white/5 hover:text-[var(--text)]"
              >
                <X size={18} />
              </button>

              {/* Modal Header */}
              <div className="text-center">
                <span className="mono-tag text-[var(--red-bright)]">
                  CONTACT
                </span>

                <h3 className="font-display mt-4 text-2xl font-bold text-[var(--text)]">
                  Let&apos;s connect
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  Choose your preferred way to get in touch.
                </p>
              </div>

              {/* Contact Options */}
              <div className="mt-8 flex flex-col gap-3">
                {/* LinkedIn */}
                <a
                  href="https://in.linkedin.com/in/baibhabmund"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--red-primary)]/50 hover:bg-white/10"
                >
                  {/* Icon */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0077b5]/15 text-[#0a66c2]">
                    <FaLinkedinIn size={20} />
                  </div>

                  {/* Text */}
                  <div className="flex-1 text-left">
                    <p className="text-sm font-semibold text-[var(--text)]">
                      LinkedIn
                    </p>

                    <p className="mt-0.5 text-xs text-[var(--text-muted)]">
                      Connect with me professionally
                    </p>
                  </div>

                  {/* Arrow */}
                  <ArrowUpRight
                    size={17}
                    className="text-[var(--text-muted)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/918984020425"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--red-primary)]/50 hover:bg-white/10"
                >
                  {/* Icon */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500/15 text-green-500">
                    <MessageCircle size={21} />
                  </div>

                  {/* Text */}
                  <div className="flex-1 text-left">
                    <p className="text-sm font-semibold text-[var(--text)]">
                      WhatsApp
                    </p>

                    <p className="mt-0.5 text-xs text-[var(--text-muted)]">
                      Message me directly
                    </p>
                  </div>

                  {/* Arrow */}
                  <ArrowUpRight
                    size={17}
                    className="text-[var(--text-muted)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>

              {/* Bottom Note */}
              <p className="mt-6 text-center text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
                Choose an option to continue
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
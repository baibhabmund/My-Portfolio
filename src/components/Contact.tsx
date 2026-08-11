"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/resume";

const links = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: profile.location, href: "#" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="glass-strong hud-frame glow-red relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,36,64,0.16),transparent_60%)]" />

          <span className="mono-tag relative z-10 text-[var(--red-bright)]">
            06 · Let&apos;s build something
          </span>
          <h2 className="font-display relative z-10 mx-auto mt-5 max-w-2xl text-3xl font-bold tracking-tight text-[var(--text)] sm:text-5xl">
            Got a system worth <span className="text-gradient-red">fixing</span>?
          </h2>
          <p className="relative z-10 mx-auto mt-5 max-w-md text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
            Open to full-time roles and freelance work across data, Android, and
            front-end engineering.
          </p>

          <div className="relative z-10 mt-10 flex flex-col items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--red-primary)] px-8 py-4 text-sm font-semibold text-[#0a0a0a] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Say hello
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="glass flex items-center gap-2 rounded-full px-4 py-2.5 text-xs text-[var(--text-muted)] transition-colors duration-200 hover:border-[var(--red-primary)]/50 hover:text-[var(--red-bright)]"
                >
                  <l.icon size={13} />
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

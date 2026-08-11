"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certs" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 sm:top-6"
    >
      <div
        className={`glass-strong flex items-center justify-between rounded-2xl px-4 py-2.5 transition-shadow duration-500 sm:px-6 ${
          scrolled ? "glow-red" : ""
        }`}
      >
        <a
          href="#top"
          className="font-display text-sm font-semibold tracking-tight text-[var(--text)]"
        >
          BM<span className="text-[var(--red-primary)]">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="mono-tag rounded-full px-3 py-2 text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--red-bright)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group relative overflow-hidden rounded-full border border-[var(--glass-border)] bg-[var(--red-primary)]/10 px-4 py-2 text-xs font-medium text-[var(--text)] transition-colors duration-300 hover:bg-[var(--red-primary)]/20"
        >
          <span className="relative z-10">Let&apos;s talk</span>
        </a>
      </div>
    </motion.header>
  );
}

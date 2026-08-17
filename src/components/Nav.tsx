"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    if (!open) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = overflow;
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 sm:top-6"
    >
      <div
        className={`glass-strong rounded-2xl px-4 py-2.5 transition-shadow duration-500 sm:px-6 ${
          scrolled ? "glow-red" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#top"
            className="font-display text-sm font-semibold tracking-tight text-[var(--text)]"
            onClick={() => setOpen(false)}
          >
            BM<span className="text-[var(--red-primary)]">.</span>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mono-tag rounded-full px-3 py-2 text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--red-bright)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Let's Talk — desktop only */}
          <a
            href="#contact"
            className="group relative hidden overflow-hidden rounded-full border border-[var(--glass-border)] bg-[var(--red-primary)]/10 px-4 py-2 text-xs font-medium text-[var(--text)] transition-colors duration-300 hover:bg-[var(--red-primary)]/20 md:inline-flex"
          >
            <span className="relative z-10">Let&apos;s talk</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-[var(--text)] transition-colors duration-200 hover:text-[var(--red-bright)] md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile dropdown panel */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden md:hidden"
            >
              <div className="mt-3 flex flex-col gap-1 border-t border-[var(--glass-border-soft)] pt-3">
                {LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="mono-tag rounded-xl px-3 py-3 text-[var(--text-muted)] transition-colors duration-200 hover:bg-white/5 hover:text-[var(--red-bright)]"
                  >
                    {link.label}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-1 inline-flex items-center justify-center rounded-full bg-[var(--red-primary)] px-4 py-3 text-sm font-semibold text-[#0a0a0a]"
                >
                  Let&apos;s talk
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

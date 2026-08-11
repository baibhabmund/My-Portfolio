"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import Section from "./Section";
import { certifications, education } from "@/data/resume";

export default function CertsAndEducation() {
  return (
    <Section
      id="certifications"
      index="05"
      kicker="Credentials"
      title="Certifications & education"
      description="Formal training layered on top of on-the-job delivery."
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr]">
        {/* Certifications */}
        <div className="space-y-3">
          {certifications.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="glass flex items-start gap-4 rounded-xl p-4 transition-colors duration-300 hover:border-[var(--red-primary)]/40"
            >
              <div className="mt-0.5 shrink-0 rounded-lg bg-[var(--red-primary)]/10 p-2 text-[var(--red-bright)]">
                <Award size={16} />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold leading-snug text-[var(--text)]">
                  {c.name}
                </h3>
                <p className="mono-tag mt-1.5 text-[var(--text-faint)]">
                  {c.issuer} · {c.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <div id="education" className="space-y-4">
          {education.map((e, i) => (
            <motion.div
              key={e.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-strong hud-frame rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-lg bg-[var(--red-primary)]/10 p-2.5 text-[var(--red-bright)]">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-[var(--text)]">
                    {e.school}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">{e.degree}</p>
                  <p className="mono-tag mt-2 text-[var(--text-faint)]">
                    {e.location} · {e.period}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

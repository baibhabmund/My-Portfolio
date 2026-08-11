"use client";

import { Database, Smartphone, Code2 } from "lucide-react";
import Section from "./Section";
import SpiralReveal from "./SpiralReveal";
import { profile } from "@/data/resume";

const pillars = [
  {
    icon: Database,
    title: "MIS & Data",
    copy: "Structuring raw operational data into dashboards people actually use — Sheets, Power BI, SQL, EDA.",
  },
  {
    icon: Smartphone,
    title: "Android & QA",
    copy: "Shipping and testing production apps end-to-end, from build to APK sign-off, as the sole on-site developer.",
  },
  {
    icon: Code2,
    title: "Front-End",
    copy: "Modernizing legacy sites into fast, JS-driven front ends — dashboards, purchase flows, and CMS migrations.",
  },
];

export default function About() {
  return (
    <Section
      id="about"
      index="01"
      kicker="Profile"
      title="A generalist who ships across the stack"
      description="Three disciplines, one operating system: find the messy process, measure it, and rebuild it so it doesn't need babysitting."
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr]">
        <SpiralReveal direction="ccw" radius={60}>
          <p className="text-lg leading-relaxed text-[var(--text-muted)]">
            {profile.summary}
          </p>
        </SpiralReveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {pillars.map((p, i) => (
            <SpiralReveal
              key={p.title}
              direction={i % 2 === 0 ? "cw" : "ccw"}
              delay={i * 0.12}
              radius={65}
              className="glass hud-frame group flex items-start gap-4 rounded-xl p-5 transition-colors duration-300 hover:border-[var(--red-primary)]/40"
            >
              <div className="rounded-lg bg-[var(--red-primary)]/10 p-2.5 text-[var(--red-bright)] transition-colors duration-300 group-hover:bg-[var(--red-primary)]/20">
                <p.icon size={18} />
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold text-[var(--text)]">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-muted)]">
                  {p.copy}
                </p>
              </div>
            </SpiralReveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
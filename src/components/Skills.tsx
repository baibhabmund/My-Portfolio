"use client";

import Section from "./Section";
import SpiralReveal from "./SpiralReveal";
import { skillGroups } from "@/data/resume";

export default function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      kicker="Toolkit"
      title="Skills & stack"
      description="Grouped by discipline — hover a module to bring it forward."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <SpiralReveal
            key={group.id}
            direction={i % 2 === 0 ? "cw" : "ccw"}
            delay={(i % 3) * 0.09}
            radius={70}
            whileHover={{ y: -4 }}
            className="hud-frame glass rounded-xl p-6 transition-[border-color,box-shadow] duration-300 hover:border-[var(--red-primary)]/40 hover:shadow-[0_0_40px_rgba(255,36,64,0.12)]"
          >
            <div className="mono-tag mb-4 flex items-center justify-between text-[var(--text-faint)]">
              <span>MODULE.{String(i + 1).padStart(2, "0")}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--red-primary)]" />
            </div>
            <h3 className="font-display mb-4 text-lg font-semibold text-[var(--text)]">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-[var(--glass-border-soft)] bg-white/[0.02] px-3 py-1.5 text-xs text-[var(--text-muted)] transition-colors duration-200 hover:border-[var(--red-primary)]/50 hover:text-[var(--red-bright)]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </SpiralReveal>
        ))}
      </div>
    </Section>
  );
}
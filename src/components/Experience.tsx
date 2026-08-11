"use client";

import Section from "./Section";
import SpiralReveal from "./SpiralReveal";
import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <Section
      id="experience"
      index="03"
      kicker="Track record"
      title="Experience"
      description="One role, three simultaneous mandates — data, mobile, and web."
    >
      <div className="space-y-10">
        {experience.map((job) => (
          <div key={job.company} className="glass hud-frame rounded-2xl p-6 sm:p-8">
            <div className="mb-8 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div>
                <h3 className="font-display text-xl font-bold text-[var(--text)] sm:text-2xl">
                  {job.company}
                </h3>
                <p className="mt-1 text-sm text-[var(--text-muted)]">{job.role}</p>
              </div>
              <span className="mono-tag shrink-0 rounded-full border border-[var(--glass-border)] px-3 py-1.5 text-[var(--red-bright)]">
                {job.period}
              </span>
            </div>

            <div className="relative space-y-8 border-l border-[var(--glass-border-soft)] pl-6 sm:pl-8">
              {job.tracks.map((track, i) => (
                <SpiralReveal
                  key={track.label}
                  direction={i % 2 === 0 ? "cw" : "ccw"}
                  delay={i * 0.12}
                  radius={55}
                  className="relative"
                >
                  <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--red-primary)] bg-[var(--bg)] sm:-left-[37px]" />
                  <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-[var(--red-bright)]">
                    {track.label}
                  </h4>
                  <ul className="mt-3 space-y-2.5">
                    {track.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex gap-3 text-sm leading-relaxed text-[var(--text-muted)]"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--red-primary)]/70" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </SpiralReveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
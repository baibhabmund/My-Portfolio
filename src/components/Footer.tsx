import { profile } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--glass-border-soft)] px-6 py-8 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-[var(--text-faint)] sm:flex-row">
        <p className="font-mono">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </p>
        <p className="font-mono">
          Designed in <span className="text-[var(--red-bright)]">black</span> &{" "}
          <span className="text-[var(--red-bright)]">red</span>.
        </p>
      </div>
    </footer>
  );
}

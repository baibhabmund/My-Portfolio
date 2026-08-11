import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Baibhab Mund — Portfolio",
  description:
    "Baibhab Mund — MIS & Data Analyst, Android Developer, and Front-End Engineer. Portfolio and case studies.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Unbounded:wght@400;500;600;700;800;900&family=Sora:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--text)] font-body overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

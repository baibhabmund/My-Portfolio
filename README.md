# Baibhab Mund — Portfolio

A Next.js 15 (App Router) portfolio site in a black & red glassmorphism theme,
built from your resume content.

## Stack
- Next.js 15 + TypeScript + App Router
- Tailwind CSS v4
- Framer Motion (scroll reveals, hero stagger, micro-interactions)
- lucide-react (icons)

## Run it locally
```bash
npm install
npm run dev
```
Then open http://localhost:3000

## Edit your content
Everything text-based — name, summary, skills, experience, projects,
certifications, education — lives in one place:

`src/data/resume.ts`

Edit that file and the whole site updates. No need to touch component code
for content changes.

## Add your real photo
Open `src/components/Hero.tsx` and find the `AvatarFrame` component. Replace
the placeholder `<div>` block (marked with a comment) with a Next.js
`<Image src="/your-photo.jpg" .../>` inside the same hex-clipped glass frame,
so it keeps the glow ring, scanline, and grid-overlay effects. Drop your photo
in the `public/` folder first.

## Theme tokens
All colors, fonts, and glass/glow effects are defined as CSS variables at the
top of `src/app/globals.css` — tweak `--red-primary`, `--bg`, etc. to adjust
the palette without touching components.

## Deploy
Push to GitHub and import the repo on [Vercel](https://vercel.com/new) — zero
config needed.

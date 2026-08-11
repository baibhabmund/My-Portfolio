"use client";

import { useEffect, useRef } from "react";

/**
 * Full-viewport ambient backdrop:
 *  - a faint drifting circuit/grid canvas
 *  - a soft red glow that follows the cursor (desktop) via CSS vars
 *  - a few slow-moving embers
 * Purely decorative, pointer-events disabled, respects reduced motion.
 */
export default function Backdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = canvas.width = window.innerWidth * dpr;
      height = canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };
    resize();
    window.addEventListener("resize", resize);

    const spacing = 46 * dpr;
    type Node = { x: number; y: number; phase: number };
    const nodes: Node[] = [];
    for (let x = 0; x < width + spacing; x += spacing) {
      for (let y = 0; y < height + spacing; y += spacing) {
        if (Math.random() > 0.965) {
          nodes.push({ x, y, phase: Math.random() * Math.PI * 2 });
        }
      }
    }

    let raf = 0;
    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // grid lines
      ctx.strokeStyle = "rgba(255,45,66,0.045)";
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // pulsing nodes
      nodes.forEach((n) => {
        const pulse = (Math.sin(t * 0.02 + n.phase) + 1) / 2;
        const r = 1.2 * dpr + pulse * 1.8 * dpr;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,60,80,${0.15 + pulse * 0.35})`;
        ctx.fill();
      });

      t += 1;
      if (!reduceMotion) raf = requestAnimationFrame(draw);
    };

    draw();

    const onMove = (e: PointerEvent) => {
      if (!glowRef.current) return;
      glowRef.current.style.setProperty("--mx", `${e.clientX}px`);
      glowRef.current.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", onMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[var(--bg)]" />
      <canvas ref={canvasRef} className="absolute inset-0 opacity-70" />
      {/* cursor-reactive glow */}
      <div
        ref={glowRef}
        className="absolute inset-0"
        style={
          {
            "--mx": "50%",
            "--my": "30%",
            background:
              "radial-gradient(560px circle at var(--mx) var(--my), rgba(255,36,64,0.10), transparent 70%)",
          } as React.CSSProperties
        }
      />
      {/* static vignette + ember gradients */}
      <div className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(255,36,64,0.16),transparent_70%)] blur-3xl animate-float" />
      <div
        className="absolute -bottom-40 -right-20 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(107,15,26,0.35),transparent_70%)] blur-3xl animate-float"
        style={{ animationDelay: "-2.5s" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_100%)]" />
      {/* film grain */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.035] mix-blend-overlay">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}

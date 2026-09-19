"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import { ArrowLeft, Sparkles, Copy, Check, Play, Flame, Snowflake, Zap } from "lucide-react";

export default function FestiveUIPlayground() {
  const [copied, setCopied] = useState(false);
  const [activeEffect, setActiveEffect] = useState<string>("fireworks");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Confetti trigger
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  // Fireworks trigger
  const triggerFireworks = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
  };

  // Diya / warm amber glow trigger
  const triggerDiyas = () => {
    confetti({
      particleCount: 60,
      spread: 90,
      colors: ["#f59e0b", "#fbbf24", "#f43f5e", "#ea580c"],
      origin: { y: 0.8 },
      scalar: 1.4,
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("pnpm add festive-ui");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 relative overflow-hidden flex flex-col">
      {/* Background ambient canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none -z-10" />

      {/* Header */}
      <header className="border-b border-white/10 bg-black/40 backdrop-blur-xl px-6 py-4 flex items-center justify-between z-10">
        <Link
          href="/"
          className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Deepak's Portfolio</span>
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300">
            festive-ui · v2.0.0
          </span>
          <a
            href="https://www.npmjs.com/package/festive-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-cyan-400 hover:underline"
          >
            npm package →
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-12 flex flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 to-rose-500/15 border border-amber-500/30 text-amber-300 font-mono text-xs mb-6">
          <Sparkles className="w-4 h-4" />
          <span>Interactive Canvas Particle Playground</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Feel the physics of <span className="text-gradient">festive-ui</span>.
        </h1>

        <p className="text-slate-300 max-w-xl text-sm sm:text-base mb-8 leading-relaxed">
          A zero-bloat, canvas-driven particle animation library for React and vanilla JavaScript.
          Designed with object pooling to maintain smooth 60fps performance without DOM thrashing.
        </p>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
          <button
            onClick={triggerFireworks}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-400 hover:to-red-500 text-white font-medium text-xs flex items-center gap-2 shadow-lg shadow-rose-500/25 transition-all cursor-pointer"
          >
            <Zap className="w-4 h-4" />
            <span>Launch Fireworks</span>
          </button>

          <button
            onClick={triggerDiyas}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-medium text-xs flex items-center gap-2 shadow-lg shadow-amber-500/25 transition-all cursor-pointer"
          >
            <Flame className="w-4 h-4 text-amber-200" />
            <span>Floating Diyas</span>
          </button>

          <button
            onClick={triggerConfetti}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Celebration Confetti</span>
          </button>
        </div>

        {/* Install box */}
        <div className="glass-card rounded-2xl p-4 max-w-md w-full flex items-center justify-between gap-4 font-mono text-xs border-white/15 mb-10">
          <span className="text-amber-300">pnpm add festive-ui</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Copied" : "Copy"}</span>
          </button>
        </div>

        {/* React Code Example */}
        <div className="glass-card rounded-2xl p-6 max-w-2xl w-full text-left font-mono text-xs text-slate-300 overflow-x-auto border-white/10">
          <div className="text-slate-500 mb-2">// React Usage Example</div>
          <pre className="text-cyan-300 leading-relaxed">
{`import { FestiveCanvas } from 'festive-ui';

export function Celebration() {
  return (
    <FestiveCanvas 
      effect="fireworks" 
      density="high" 
      respectReducedMotion={true} 
    />
  );
}`}
          </pre>
        </div>
      </main>
    </div>
  );
}

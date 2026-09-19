"use client";

import React, { useState, MouseEvent } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, ExternalLink, Calendar } from "lucide-react";

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) / 25;
    const y = (clientY - (top + height / 2)) / 25;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden"
    >
      {/* Dynamic Background Glow Mesh */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        <div
          className="w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full blur-[140px] opacity-25 transition-all duration-700"
          style={{
            background:
              "radial-gradient(circle, var(--accent-primary) 0%, var(--accent-secondary) 60%, transparent 100%)",
            transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px)`,
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 md:gap-14">
        {/* Left: Headline & Credibility */}
        <div className="flex-1 text-center md:text-left">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono mb-6 bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300">Sr. Frontend Engineer @</span>
            <span className="font-semibold text-white">Target</span>
            <span className="text-slate-500">·</span>
            <span className="text-cyan-400">Bangalore</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-100">
            I engineer web systems that scale,{" "}
            <span className="text-gradient">build products</span> that ship, and chase horizons.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
            Senior frontend engineer at Target. Founder of{" "}
            <a
              href="https://onlyfrontendjobs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline font-medium inline-flex items-center gap-0.5"
            >
              OnlyFrontendJobs.com
              <ExternalLink className="w-3.5 h-3.5" />
            </a>{" "}
            (720+ live roles). I build tools that help engineers find signal, craft Chrome extensions,
            and document the journey across tech & travel.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3.5">
            <a
              href="#work"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-sm shadow-lg shadow-cyan-500/25 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href="https://topmate.io/deepak_sharma/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-medium text-sm backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-rose-400" />
              <span>Book 1:1 on Topmate</span>
            </a>

            <a
              href="#horizons"
              className="px-4 py-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 text-amber-300 font-medium text-sm backdrop-blur-md transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>The Nomad Side</span>
            </a>
          </div>
        </div>

        {/* Right: Portrait Cutout with Parallax Depth */}
        <div className="relative flex items-center justify-center">
          <div
            className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl p-1.5 bg-gradient-to-b from-white/20 to-transparent shadow-2xl transition-transform duration-200 ease-out"
            style={{
              transform: `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`,
            }}
          >
            <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-900 border border-white/10 relative">
              <Image
                src="/images/deepak-avatar.png"
                alt="Deepak Sharma"
                fill
                priority
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Floating micro-badges */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-slate-300 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Building OFJ
                </span>
                <span className="text-slate-400">@deepu0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

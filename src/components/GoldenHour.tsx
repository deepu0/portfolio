"use client";

import React, { useState } from "react";
import { Sun, Heart, Sparkles, Feather, Compass, Mountain } from "lucide-react";

export function GoldenHour() {
  const [activeTab, setActiveTab] = useState<"sunsets" | "yoga" | "osho">("sunsets");

  const sunsetMemories = [
    {
      title: "Himalayan Ridge Twilight",
      location: "Himachal Pradesh",
      caption: "When the sun dips behind the snow peaks, the whole world turns amber.",
      gradient: "from-amber-500/30 via-rose-500/20 to-indigo-900/40",
    },
    {
      title: "Western Ghats Monsoon Glow",
      location: "Sahyadris, Maharashtra",
      caption: "Mist rising over green cliffs under the evening golden rays.",
      gradient: "from-emerald-500/20 via-amber-500/30 to-purple-900/40",
    },
    {
      title: "Southern Coastline Dusk",
      location: "Goa & Karnataka Coast",
      caption: "The sound of waves meeting the fiery horizon at 6:45 PM.",
      gradient: "from-orange-500/30 via-pink-500/20 to-blue-900/40",
    },
  ];

  return (
    <section id="horizons" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-12 text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono mb-3 bg-amber-500/15 border border-amber-500/30 text-amber-300">
          <Sun className="w-3.5 h-3.5 text-amber-400" />
          <span>Golden Hour & Horizons</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
          Sunsets, Yoga & Stillness.
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
          Code creates order on screens. Nature and meditation restore order within. When the IDE
          closes, I chase golden hours, practice yoga, and reflect on awareness.
        </p>

        {/* Tab switchers */}
        <div className="flex flex-wrap items-center gap-2 mt-6">
          <button
            onClick={() => setActiveTab("sunsets")}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
              activeTab === "sunsets"
                ? "bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20"
                : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
            }`}
          >
            🌅 Chasing Sunsets
          </button>
          <button
            onClick={() => setActiveTab("yoga")}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
              activeTab === "yoga"
                ? "bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20"
                : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
            }`}
          >
            🧘 Yoga & Balance
          </button>
          <button
            onClick={() => setActiveTab("osho")}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
              activeTab === "osho"
                ? "bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20"
                : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
            }`}
          >
            ✨ Osho & Awareness
          </button>
        </div>
      </div>

      {/* Dynamic Tab Content */}
      {activeTab === "sunsets" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
          {sunsetMemories.map((item, idx) => (
            <div
              key={idx}
              className={`glass-card rounded-2xl p-6 flex flex-col justify-between border-amber-500/20 bg-gradient-to-b ${item.gradient} hover:scale-[1.02] transition-transform`}
            >
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300/80 mb-1 block">
                  {item.location}
                </span>
                <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                <p className="text-xs text-slate-200/90 leading-relaxed italic">
                  &ldquo;{item.caption}&rdquo;
                </p>
              </div>
              <div className="pt-6 flex items-center justify-between text-[11px] text-amber-200/80 font-mono">
                <span className="flex items-center gap-1">
                  <Mountain className="w-3.5 h-3.5" />
                  Trail Memory
                </span>
                <span>Golden Hour</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "yoga" && (
        <div className="glass-card rounded-3xl p-6 sm:p-10 border-amber-500/20 bg-gradient-to-r from-amber-500/5 via-rose-500/5 to-purple-500/5 animate-in fade-in duration-300">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 font-mono text-xs">
              <span>Mind-Body Alignment</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              The Antidote to High-Velocity Engineering
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Writing complex JavaScript systems, debugging race conditions, and shipping products can
              pull consciousness into frantic mental loops. Yoga grounds that energy back into the
              breath and physical posture.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Every morning on the mat is a rehearsal of presence: holding difficulty with calm
              breathing, acknowledging tension without reactivity, and returning to center. It is
              the foundation that makes deep technical focus sustainable over years.
            </p>
          </div>
        </div>
      )}

      {activeTab === "osho" && (
        <div className="glass-card rounded-3xl p-6 sm:p-10 border-amber-500/20 bg-gradient-to-r from-rose-500/10 via-amber-500/10 to-indigo-500/10 animate-in fade-in duration-300">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 font-mono text-xs">
              <Feather className="w-3.5 h-3.5" />
              <span>Consciousness & Awareness</span>
            </div>

            <blockquote className="text-xl sm:text-2xl font-medium text-white italic leading-snug border-l-2 border-amber-400 pl-4 py-1">
              &ldquo;Life is not a problem to be solved, but a mystery to be lived. Celebrate the
              moment, let awareness be your flame.&rdquo;
              <footer className="text-xs font-mono text-amber-400 mt-2 not-italic">
                — Osho (Reflections on Present-Moment Living)
              </footer>
            </blockquote>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Listening to discourses on awareness, meditation, and creative freedom has shaped how I
              approach both code and life: work with relentless intensity, build products with pure
              craft, but remain inwardly detached, playful, and completely here now.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

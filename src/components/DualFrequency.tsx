"use client";

import React from "react";
import { Compass, Code2, ExternalLink } from "lucide-react";
import { YouTubeIcon, InstagramIcon } from "./Icons";

export function DualFrequency() {
  return (
    <section id="channels" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-14 text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono mb-3 bg-rose-500/10 border border-rose-500/20 text-rose-400">
          <YouTubeIcon className="w-3.5 h-3.5" />
          <span>The Dual Frequency</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
          Two channels. One curious mind.
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
          By day, breaking down web internals, frontend architecture, and DevTools mysteries. Over the
          weekend, packing bags, riding trails, and capturing unfiltered journeys.
        </p>
      </div>

      {/* Split Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Side 1: THE ENGINEER BHAI */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-mono text-xs flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5" />
                <span>Tech & Engineering</span>
              </span>
              <span className="text-xs font-mono text-slate-400">@THEENGINEERBHAI</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <span>The Engineer Bhai</span>
              <span className="text-xs font-normal px-2 py-0.5 rounded bg-white/10 text-slate-300 font-mono">
                YouTube
              </span>
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Practical engineering breakdowns, frontend interview preparation, browser runtime
              quirks, and the viral DevTools inspection stories (IRCTC pricing bugs, Traya hair fall
              report mechanisms, Swiggy SSR deep-dives).
            </p>

            {/* Content themes */}
            <div className="space-y-2.5 mb-6 font-mono text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 flex items-center gap-2">
                <span className="text-cyan-400 font-bold">01</span>
                <span>DevTools real-world website bug audits & mechanisms</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 flex items-center gap-2">
                <span className="text-cyan-400 font-bold">02</span>
                <span>Frontend system design & round-by-round interview strategy</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 flex items-center gap-2">
                <span className="text-cyan-400 font-bold">03</span>
                <span>Modern React, Next.js 16, and web performance tuning</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
            <a
              href="https://www.youtube.com/@THEENGINEERBHAI"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-medium text-xs flex items-center gap-2 shadow-lg shadow-red-600/20 transition-all"
            >
              <YouTubeIcon className="w-4 h-4" />
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.instagram.com/devmemes.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-medium flex items-center gap-1.5 transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
              <span>@devmemes.ai</span>
            </a>
          </div>
        </div>

        {/* Side 2: GHUMTA FIRTA TECHIE */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-amber-500/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono text-xs flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                <span>Travel & Nomad Life</span>
              </span>
              <span className="text-xs font-mono text-slate-400">@ghumta_firta_techie</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <span>Ghumta Firta Techie</span>
              <span className="text-xs font-normal px-2 py-0.5 rounded bg-white/10 text-slate-300 font-mono">
                YouTube
              </span>
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              When the laptops shut down: road trips across mountain passes, remote work setups from
              misty valleys, unfiltered travel vlogs, local cultures, and chasing sunsets along remote
              trails.
            </p>

            {/* Content themes */}
            <div className="space-y-2.5 mb-6 font-mono text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 flex items-center gap-2">
                <span className="text-amber-400 font-bold">01</span>
                <span>Mountain roads, bike expeditions, and off-beat hikes</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 flex items-center gap-2">
                <span className="text-amber-400 font-bold">02</span>
                <span>Remote work from mountain cafes with a single backpack</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 flex items-center gap-2">
                <span className="text-amber-400 font-bold">03</span>
                <span>Golden hour photography and soulful travel narratives</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
            <a
              href="https://www.youtube.com/@ghumta_firta_techie"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all"
            >
              <YouTubeIcon className="w-4 h-4 text-red-600" />
              <span>Explore Travel Vlogs</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.instagram.com/ghumta_phirta_techie"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-medium flex items-center gap-1.5 transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-amber-400" />
              <span>@ghumta_phirta_techie</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

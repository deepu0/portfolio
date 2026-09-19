"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Sparkles, Star, Layers, Code, ShieldCheck } from "lucide-react";
import { ChromeIcon } from "./Icons";

export function TheForge() {
  const extensions = [
    {
      title: "LinkedIn Exact Applicant Counter",
      desc: "Reveals exact applicant counts on job posts instead of LinkedIn's opaque '100+ applicants'.",
      users: "133 users",
      rating: "2.5/5 (6 ratings)",
      link: "https://chromewebstore.google.com/detail/linkedin-exact-applicant/bckkpagmbcpfomemacgpcladlpdckiop",
      tag: "CWS Live",
    },
    {
      title: "Next.js Detector",
      desc: "Detects whether a site runs on Next.js and surfaces the exact version and render mechanism.",
      users: "69 users",
      rating: "4.7/5 (3 ratings)",
      link: "https://chromewebstore.google.com/detail/nextjs-detector/ipfpjgnhbgimgfpjjabeafphchkhimah",
      tag: "Top Rated",
    },
    {
      title: "EkSaath Tab Manager",
      desc: "Instant one-click tab deduplication, grouping by domain, and 30-second undo buffer for tab hoarders.",
      users: "3 users",
      rating: "5.0/5 (1 rating)",
      link: "https://chromewebstore.google.com/detail/eksaath-%E2%80%94-group-tabs-by-d/dmbddhflionebnjhlopafpggcegkkklo",
      tag: "Productivity",
    },
    {
      title: "WhatStack",
      desc: "Local-only DOM-probing tech stack detector. High-confidence detection with zero telemetry.",
      users: "5 users",
      rating: "Manifest V3",
      link: "https://chromewebstore.google.com/detail/whatstack/kpmbanlddakoocgimdenfeppfaidmcgk",
      tag: "DevTools",
    },
  ];

  return (
    <section id="work" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-14 text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono mb-3 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
          <Layers className="w-3.5 h-3.5" />
          <span>The Forge</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
          Products built for developers.
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
          From curated career platforms to Chrome extensions and published npm packages—every
          project solves a real problem with verifiable evidence.
        </p>
      </div>

      {/* Flagship 1: OnlyFrontendJobs */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 mb-12 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold">
                Flagship Platform
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
                723 Live Roles
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              OnlyFrontendJobs.com
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Mainstream job boards bury frontend developers under generic backend and fullstack
              noise. OFJ fixes this with a strictly curated, frontend-only taxonomy, human referral
              paths, transparent salaries, and an open MCP agent server.
            </p>

            {/* Architecture Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-slate-400 block mb-1">Architecture</span>
                <span className="text-slate-200 font-medium">Next.js 16 App Router</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-slate-400 block mb-1">AI Protocol</span>
                <span className="text-slate-200 font-medium">Model Context Protocol (MCP)</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="https://onlyfrontendjobs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all flex items-center gap-1.5"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://www.onlyfrontendjobs.com/building"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-sm transition-all flex items-center gap-1.5"
              >
                <span>Read Building Log</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl group-hover:border-cyan-500/40 transition-colors">
              <Image
                src="/images/ofj-home.png"
                alt="OnlyFrontendJobs Preview"
                width={800}
                height={500}
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Flagship 2: Frontend Junction & festive-ui Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        {/* Frontend Junction */}
        <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 font-mono text-xs">
                Open Source Community
              </span>
              <span className="text-slate-400 text-xs font-mono">106+ Stories · 103 Companies</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Frontend Junction</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-5">
              Round-by-round interview experiences from companies like Target, Google, Uber, and
              Swiggy, helping frontend engineers prepare with actual questions, DSA rounds, and system
              design rubrics.
            </p>
            <div className="rounded-xl overflow-hidden border border-white/10 mb-5">
              <Image
                src="/images/fj-home.png"
                alt="Frontend Junction"
                width={700}
                height={350}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://www.frontend-junction.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
            >
              <span>Explore Frontend Junction</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com/deepu0/frontend-junction"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-white transition-colors"
            >
              GitHub Repo →
            </a>
          </div>
        </div>

        {/* festive-ui Playground Teaser */}
        <div className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-amber-500/10 to-rose-500/10 border-amber-500/20">
          <div>
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono text-xs mb-4">
              <Sparkles className="w-3 h-3" />
              <span>npm package · v2.0.0</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">festive-ui</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-5">
              14 festive particle effects (snow, confetti, diyas, fireworks) for React & vanilla JS.
              Lightweight (~7KB gzipped), zero bloat, object-pooled for 60fps canvas performance.
            </p>
            <div className="p-4 rounded-xl bg-black/50 border border-white/10 font-mono text-xs text-amber-300 mb-5 flex items-center justify-between">
              <code>pnpm add festive-ui</code>
              <Code className="w-4 h-4 text-slate-400" />
            </div>
          </div>
          <Link
            href="/playground/festive-ui"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-400 hover:to-rose-400 text-white font-medium text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>Launch Interactive Canvas Playground</span>
          </Link>
        </div>
      </div>

      {/* Chrome Extension Dock */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <ChromeIcon className="w-4 h-4 text-emerald-400" />
          <h4 className="text-base font-bold text-white uppercase tracking-wider font-mono text-xs">
            Chrome Extensions Suite (Manifest V3)
          </h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {extensions.map((ext, idx) => (
            <a
              key={idx}
              href={ext.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-5 flex flex-col justify-between group hover:border-emerald-500/40"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                    {ext.tag}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </div>
                <h5 className="font-semibold text-sm text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {ext.title}
                </h5>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">{ext.desc}</p>
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono border-t border-white/10 pt-3 text-slate-400">
                <span className="text-emerald-400 font-medium">{ext.users}</span>
                <span>{ext.rating}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

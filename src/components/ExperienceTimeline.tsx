"use client";

import React from "react";
import { Briefcase, Building2, TrendingUp, CheckCircle2 } from "lucide-react";

export function ExperienceTimeline() {
  const experiences = [
    {
      company: "Target",
      role: "Senior Frontend Engineer",
      period: "Present · Bangalore",
      summary:
        "Architecting enterprise-scale retail frontend systems, micro-frontend modernization, and internal engineering productivity tooling.",
      highlights: [
        "Led MFE-v2 transition for key guest-facing journeys, cutting initial bundle load by up to ~70%.",
        "Engineered automated bug-bot validation pipeline for PR review reliability and regression catches.",
        "Driving Core Web Vitals optimizations (LCP < 1.8s) across high-concurrency cart and checkout pages.",
      ],
      current: true,
      accent: "text-rose-400 border-rose-500/30 bg-rose-500/10",
    },
    {
      company: "Acko",
      role: "Frontend Engineer",
      period: "Bangalore",
      summary:
        "Engineered customer-facing insurance purchase and policy management experiences with zero-friction checkout.",
      highlights: [
        "Built modular UI primitives used across auto and health insurance web checkout funnels.",
        "Refactored multi-step form state management, cutting abandonment rate and improving mobile responsiveness.",
      ],
      current: false,
      accent: "text-purple-400 border-purple-500/30 bg-purple-500/10",
    },
    {
      company: "LogicMonitor",
      role: "Software Engineer — Frontend",
      period: "Pune",
      summary:
        "Focused on high-density observability dashboards, real-time charting, and client performance tuning.",
      highlights: [
        "Reduced initial telemetry dashboard load time by over 3 seconds through query caching and code-splitting.",
        "Modernized legacy visualization widgets into reusable React components.",
      ],
      current: false,
      accent: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
    },
    {
      company: "Wipro",
      role: "Project Engineer",
      period: "India",
      summary:
        "Full-stack and frontend development for global enterprise accounts, laying deep JavaScript foundation.",
      highlights: [
        "Developed responsive web interfaces and integrated REST APIs with rigorous unit test coverage.",
        "Received client excellence recognitions for rapid delivery and defect-free releases.",
      ],
      current: false,
      accent: "text-slate-400 border-slate-500/30 bg-slate-500/10",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="mb-14 text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono mb-3 bg-white/5 border border-white/10 text-slate-300">
          <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
          <span>Track Record</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
          Engineering at scale.
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl">
          Quantified impact from enterprise micro-frontends at Target to high-speed fintech and
          observability engines.
        </p>
      </div>

      <div className="relative pl-6 sm:pl-8 border-l border-white/15 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative group">
            {/* Timeline node icon */}
            <div
              className={`absolute -left-[35px] sm:-left-[43px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center ${exp.accent} shadow-lg backdrop-blur-md`}
            >
              <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {exp.company}
                  </h3>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-cyan-300">
                    {exp.role}
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400">{exp.period}</span>
              </div>

              <p className="text-slate-300 text-sm mb-4 leading-relaxed">{exp.summary}</p>

              <ul className="space-y-2">
                {exp.highlights.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

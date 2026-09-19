"use client";

import React from "react";
import { Star, MessageSquare, Calendar, ExternalLink, CheckCircle2 } from "lucide-react";

export function MentorshipWall() {
  const testimonials = [
    {
      author: "Senior Frontend Engineer",
      company: "Top Product Unicorn",
      topic: "Mock Interview & System Design",
      quote:
        "Deepak's mock interview was the closest simulation to my actual Tier-1 frontend loops. The machine coding feedback alone changed how I structure state under pressure.",
      rating: 5,
    },
    {
      author: "React Developer",
      company: "Transitioned to Global Remote",
      topic: "Career & Job Switch Strategy",
      quote:
        "Clear, zero-fluff guidance on resume keywords, positioning my React/Next.js depth, and cold outreach. Landed 3 interviews within 2 weeks of the call.",
      rating: 5,
    },
    {
      author: "Frontend Specialist",
      company: "Enterprise SaaS",
      topic: "Portfolio & Resume Review",
      quote:
        "Deepak spotted exactly where my resume was being filtered out. He gave line-by-line rewrite suggestions that immediately got recruiter replies.",
      rating: 5,
    },
  ];

  return (
    <section id="mentorship" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-14 text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono mb-3 bg-amber-500/10 border border-amber-500/20 text-amber-400">
          <Star className="w-3.5 h-3.5 fill-amber-400" />
          <span>Wall of Proof</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
              1,400+ Mentorship Journeys.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              1:1 mock interviews, frontend resume audits, and job switch strategies on Topmate with
              4.5/5 rating across 200+ verified reviews.
            </p>
          </div>
          <a
            href="https://topmate.io/deepak_sharma/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-400 hover:to-rose-400 text-white font-medium text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all shrink-0 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book 1:1 on Topmate</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <div key={idx} className="glass-card rounded-2xl p-6 flex flex-col justify-between">
            <div>
              {/* Star rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            <div className="border-t border-white/10 pt-4 flex flex-col">
              <span className="text-sm font-semibold text-white">{t.author}</span>
              <span className="text-xs text-slate-400">{t.company}</span>
              <span className="text-[11px] font-mono text-cyan-400 mt-1">{t.topic}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

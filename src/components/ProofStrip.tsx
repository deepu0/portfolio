"use client";

import React from "react";
import { Briefcase, Users, Star, MessageCircle } from "lucide-react";
import { ChromeIcon } from "./Icons";

export function ProofStrip() {
  const proofItems = [
    {
      icon: Briefcase,
      value: "723",
      label: "Curated Live Roles",
      sub: "onlyfrontendjobs.com",
      accent: "text-cyan-400",
      link: "https://onlyfrontendjobs.com",
    },
    {
      icon: Users,
      value: "52.3k+",
      label: "LinkedIn Audience",
      sub: "verified followers",
      accent: "text-blue-400",
      link: "https://www.linkedin.com/in/depaksharma/",
    },
    {
      icon: MessageCircle,
      value: "4.7k+",
      label: "Telegram Devs",
      sub: "React jobs community",
      accent: "text-sky-400",
      link: "https://t.me/+T824I7hHtsc4YWNl",
    },
    {
      icon: Star,
      value: "1.4k+",
      label: "Topmate Bookings",
      sub: "4.5★ · 157 reviews",
      accent: "text-amber-400",
      link: "https://topmate.io/deepak_sharma/",
    },
    {
      icon: ChromeIcon,
      value: "4 Apps",
      label: "Chrome Web Store",
      sub: "133u · 69u (4.7★)",
      accent: "text-emerald-400",
      link: "#work",
    },
  ];

  return (
    <div className="border-y border-white/10 bg-black/40 backdrop-blur-md py-6 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-6 sm:gap-4">
        {proofItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <a
              key={i}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : undefined}
              rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex-1 min-w-[140px] flex items-center gap-3.5 group hover:opacity-90 transition-opacity"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Icon className={`w-5 h-5 ${item.accent}`} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                  {item.value}
                </span>
                <span className="text-xs text-slate-300 font-medium">{item.label}</span>
                <span className="text-[10px] text-slate-400 font-mono">{item.sub}</span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

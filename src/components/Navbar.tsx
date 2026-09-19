"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeContext";
import { Terminal, Sun, Moon, Sparkles, Compass } from "lucide-react";

interface NavbarProps {
  onOpenTerminal: () => void;
}

export function Navbar({ onOpenTerminal }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand identity */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            DS
          </div>
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight text-sm text-slate-100 group-hover:text-cyan-400 transition-colors">
              Deepak Sharma
            </span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">
              Sr. Frontend @ Target
            </span>
          </div>
        </Link>

        {/* Section links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
          <a href="#work" className="hover:text-cyan-400 transition-colors">
            Work & Products
          </a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">
            Experience
          </a>
          <a href="#channels" className="hover:text-cyan-400 transition-colors">
            YouTube
          </a>
          <a href="#horizons" className="hover:text-amber-400 transition-colors flex items-center gap-1">
            <Compass className="w-3.5 h-3.5" />
            Horizons
          </a>
          <a href="#mentorship" className="hover:text-rose-400 transition-colors">
            Mentorship
          </a>
          <Link
            href="/playground/festive-ui"
            className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-mono text-[11px] px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20"
          >
            <Sparkles className="w-3 h-3" />
            Playground
          </Link>
        </nav>

        {/* Actions: Reality Shifter & Terminal Trigger */}
        <div className="flex items-center gap-2.5">
          {/* Reality Shifter Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition-all cursor-pointer"
            title={`Switch to ${theme === "code" ? "Sunset Mode" : "Code Mode"}`}
          >
            {theme === "code" ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
                <span className="hidden sm:inline text-amber-400/90 font-mono text-[11px]">
                  Sunset Mode
                </span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden sm:inline text-cyan-400/90 font-mono text-[11px]">
                  Code Mode
                </span>
              </>
            )}
          </button>

          {/* Terminal Easter Egg Trigger */}
          <button
            onClick={onOpenTerminal}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer"
            title="Open Interactive Terminal (~)"
          >
            <Terminal className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

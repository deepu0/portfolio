"use client";

import React from "react";
import { Calendar, Terminal } from "lucide-react";
import {
  LinkedInIcon,
  YouTubeIcon,
  InstagramIcon,
  TelegramIcon,
  XIcon,
  GitHubIcon,
} from "./Icons";

interface ConnectDockProps {
  onOpenTerminal: () => void;
}

export function ConnectDock({ onOpenTerminal }: ConnectDockProps) {
  const socials = [
    {
      name: "LinkedIn (52k+)",
      icon: LinkedInIcon,
      href: "https://www.linkedin.com/in/depaksharma/",
      hover: "hover:text-[#0A66C2]",
    },
    {
      name: "Topmate (1.4k)",
      icon: Calendar,
      href: "https://topmate.io/deepak_sharma/",
      hover: "hover:text-rose-400",
    },
    {
      name: "YouTube (Dev)",
      icon: YouTubeIcon,
      href: "https://www.youtube.com/@THEENGINEERBHAI",
      hover: "hover:text-red-500",
    },
    {
      name: "YouTube (Nomad)",
      icon: YouTubeIcon,
      href: "https://www.youtube.com/@ghumta_firta_techie",
      hover: "hover:text-amber-400",
    },
    {
      name: "Instagram",
      icon: InstagramIcon,
      href: "https://www.instagram.com/ghumta_phirta_techie",
      hover: "hover:text-pink-400",
    },
    {
      name: "Telegram (4.7k)",
      icon: TelegramIcon,
      href: "https://t.me/+T824I7hHtsc4YWNl",
      hover: "hover:text-sky-400",
    },
    {
      name: "Twitter / X",
      icon: XIcon,
      href: "https://x.com/sharmadeepak__",
      hover: "hover:text-white",
    },
    {
      name: "GitHub",
      icon: GitHubIcon,
      href: "https://github.com/deepu0",
      hover: "hover:text-white",
    },
  ];

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40">
      <div className="glass-dock rounded-full px-4 py-2 flex items-center gap-3 sm:gap-4 shadow-2xl shadow-black/50 border border-white/10">
        {socials.map((s, idx) => {
          const Icon = s.icon;
          return (
            <a
              key={idx}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-slate-400 ${s.hover} transition-all p-1 hover:scale-115 cursor-pointer`}
              title={s.name}
            >
              <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </a>
          );
        })}

        <div className="w-[1px] h-4 bg-white/15 mx-0.5" />

        {/* Terminal trigger */}
        <button
          onClick={onOpenTerminal}
          className="text-slate-400 hover:text-cyan-400 transition-all p-1 hover:scale-115 cursor-pointer"
          title="Terminal (~)"
        >
          <Terminal className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
        </button>
      </div>
    </div>
  );
}

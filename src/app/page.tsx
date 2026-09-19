"use client";

import React, { useState } from "react";
import { ThemeProvider } from "@/components/ThemeContext";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProofStrip } from "@/components/ProofStrip";
import { TheForge } from "@/components/TheForge";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { DualFrequency } from "@/components/DualFrequency";
import { GoldenHour } from "@/components/GoldenHour";
import { MentorshipWall } from "@/components/MentorshipWall";
import { ConnectDock } from "@/components/ConnectDock";
import { TerminalModal } from "@/components/TerminalModal";

export default function Home() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
        <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />
        
        <main className="flex flex-col pb-24">
          <Hero />
          <ProofStrip />
          <TheForge />
          <ExperienceTimeline />
          <DualFrequency />
          <GoldenHour />
          <MentorshipWall />
        </main>

        <ConnectDock onOpenTerminal={() => setIsTerminalOpen(true)} />
        <TerminalModal
          isOpen={isTerminalOpen}
          onClose={() => setIsTerminalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}

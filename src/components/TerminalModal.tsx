"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, Terminal as TerminalIcon } from "lucide-react";
import { useTheme } from "./ThemeContext";

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TerminalModal({ isOpen, onClose }: TerminalModalProps) {
  const { setTheme } = useTheme();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Array<{ text: string; type: "input" | "output" }>>([
    {
      text: "Deepak Sharma Interactive Terminal v1.0.0. Type 'help' for available commands.",
      type: "output",
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { text: `$ ${input}`, type: "input" as const }];

    switch (cmd) {
      case "help":
        newHistory.push({
          text: "Available commands:\n  cat skills.txt   - View core technical capabilities\n  theme sunset     - Shift interface to Sunset Mode\n  theme code       - Shift interface to Code Mode\n  book --topmate   - Open 1:1 mentorship booking\n  open youtube     - Launch @THEENGINEERBHAI\n  open nomad       - Launch @ghumta_firta_techie\n  clear            - Clear terminal buffer\n  exit             - Close terminal",
          type: "output",
        });
        break;
      case "cat skills.txt":
        newHistory.push({
          text: "Core Competencies:\n• Architecture: Next.js 16 (App Router), React 19, TypeScript strict mode\n• Performance: Core Web Vitals (LCP < 1.5s), code-splitting, bundle reduction (-70%)\n• Browser Internals: Chrome Extensions (MV3), DOM probing, DevTools inspection\n• AI Tooling: Model Context Protocol (MCP), LLM agent skills, Gemini pipelines",
          type: "output",
        });
        break;
      case "theme sunset":
        setTheme("sunset");
        newHistory.push({
          text: "Switched to Sunset Mode [Warm Amber Twilight].",
          type: "output",
        });
        break;
      case "theme code":
        setTheme("code");
        newHistory.push({
          text: "Switched to Code Mode [Deep Obsidian Cyber].",
          type: "output",
        });
        break;
      case "book --topmate":
        window.open("https://topmate.io/deepak_sharma/", "_blank");
        newHistory.push({ text: "Opening Topmate in new window...", type: "output" });
        break;
      case "open youtube":
        window.open("https://www.youtube.com/@THEENGINEERBHAI", "_blank");
        newHistory.push({ text: "Opening @THEENGINEERBHAI...", type: "output" });
        break;
      case "open nomad":
        window.open("https://www.youtube.com/@ghumta_firta_techie", "_blank");
        newHistory.push({ text: "Opening @ghumta_firta_techie...", type: "output" });
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "exit":
        onClose();
        return;
      default:
        newHistory.push({
          text: `Command not found: '${cmd}'. Type 'help' for command list.`,
          type: "output",
        });
        break;
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-2xl rounded-2xl bg-[#0b0f17] border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 overflow-hidden font-mono text-xs flex flex-col h-[400px]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-white/5 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <span className="text-slate-400 text-[11px] ml-2 flex items-center gap-1">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              deepak@terminal: ~
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-2 text-slate-300">
          {history.map((h, i) => (
            <div
              key={i}
              className={`whitespace-pre-wrap ${
                h.type === "input" ? "text-cyan-400 font-bold" : "text-slate-300"
              }`}
            >
              {h.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Line Input */}
        <form onSubmit={handleCommand} className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border-t border-white/10">
          <span className="text-cyan-400 font-bold">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help'..."
            className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder:text-slate-600"
          />
        </form>
      </div>
    </div>
  );
}

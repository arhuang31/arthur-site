"use client";

import { useState } from "react";
import type { Thought } from "../data/thoughts";
import ThoughtDetail from "./ThoughtDetail";

// Score 1–10 → percent along an axis, leaving a margin so dots never sit on the frame.
const toPercent = (score: number) => 5 + ((score - 1) / 9) * 90;

const quadrants = [
  { label: "hills i'd die on", className: "right-3 top-3 text-right" },
  { label: "obvious, but i live by them", className: "left-3 top-3" },
  { label: "still figuring out", className: "bottom-3 left-3" },
  { label: "half-baked hot takes", className: "bottom-3 right-3 text-right" },
];

export default function ThoughtMap({ thoughts }: { thoughts: Thought[] }) {
  const [activeId, setActiveId] = useState<string>(thoughts[0]?.id);
  const active = thoughts.find((t) => t.id === activeId);

  return (
    <div className="mx-auto max-w-4xl pt-10">
      <div className="flex gap-3">
        {/* Y axis label */}
        <div className="flex w-5 shrink-0 items-center justify-center">
          <span className="-rotate-90 whitespace-nowrap text-sm text-current/50">how sure i am →</span>
        </div>

        <div className="flex-1">
          <div className="relative aspect-[4/3] w-full border border-current/20 sm:aspect-[16/10]">
            <div className="absolute inset-y-0 left-1/2 w-px bg-current/15" />
            <div className="absolute inset-x-0 top-1/2 h-px bg-current/15" />
            {quadrants.map((q) => (
              <span key={q.label} className={`absolute font-mono text-xs text-current/35 ${q.className}`}>
                {q.label}
              </span>
            ))}

            {thoughts.map((t) => {
              const isActive = t.id === activeId;
              const x = toPercent(t.controversy);
              const y = 100 - toPercent(t.conviction);
              // Keep labels inside the frame: flip them to the left of the dot near the right edge.
              const labelLeft = x > 70;
              return (
                <button
                  key={t.id}
                  type="button"
                  onMouseEnter={() => setActiveId(t.id)}
                  onFocus={() => setActiveId(t.id)}
                  onClick={() => setActiveId(t.id)}
                  className={`group absolute flex -translate-y-1/2 items-center gap-2 ${
                    labelLeft ? "-translate-x-[calc(100%-6px)] flex-row-reverse" : "-translate-x-[6px]"
                  } ${isActive ? "z-10" : ""}`}
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <span
                    className={`block h-3.5 w-3.5 shrink-0 rounded-full border border-current transition-colors ${
                      isActive ? "bg-current" : "bg-background group-hover:bg-current/50"
                    }`}
                  />
                  {/* Only the active label shows — neighbouring dots are too close for all twenty to fit. */}
                  {isActive ? (
                    <span className="hidden whitespace-nowrap bg-background px-1 text-sm md:block">{t.title}</span>
                  ) : null}
                </button>
              );
            })}
          </div>
          <div className="mt-2 text-right text-sm text-current/50">how controversial it is →</div>
        </div>
      </div>

      <div className="mt-10 min-h-48 md:ml-8">
        <ThoughtDetail thought={active} />
      </div>
    </div>
  );
}

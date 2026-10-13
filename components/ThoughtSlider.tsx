"use client";

import { useRef, useState } from "react";
import type { Thought } from "../data/thoughts";

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export default function ThoughtSlider({ thoughts }: { thoughts: Thought[] }) {
  const last = thoughts.length - 1;
  const [position, setPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const activeIndex = Math.round(position);

  const positionFromPointer = (clientX: number) => {
    const track = trackRef.current;
    if (!track) return position;
    const rect = track.getBoundingClientRect();
    return clamp((clientX - rect.left) / rect.width, 0, 1) * last;
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDragging(true);
    setPosition(positionFromPointer(e.clientX));
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setPosition(positionFromPointer(e.clientX));
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    setPosition((prev) => Math.round(prev));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const moves: Record<string, number> = {
      ArrowRight: activeIndex + 1,
      ArrowUp: activeIndex + 1,
      ArrowLeft: activeIndex - 1,
      ArrowDown: activeIndex - 1,
      Home: 0,
      End: last,
    };
    if (!(e.key in moves)) return;
    e.preventDefault();
    setPosition(clamp(moves[e.key], 0, last));
  };

  const transition = isDragging ? "none" : "all 400ms ease-out";

  return (
    <div className="mx-auto flex min-h-[55vh] max-w-2xl flex-col justify-between pt-16">
      <div className="grid">
        {thoughts.map((thought, i) => {
          const distance = position - i;
          // Fades out fully by the halfway point so neighbouring thoughts never overlap at full strength.
          const opacity = clamp(1 - Math.abs(distance) * 2, 0, 1);
          return (
            <article
              key={thought.title}
              aria-hidden={i !== activeIndex}
              className={`col-start-1 row-start-1 ${opacity === 0 ? "pointer-events-none" : ""}`}
              style={{
                opacity,
                transform: `translateX(${clamp(distance, -1, 1) * -24}px)`,
                filter: `blur(${Math.min(Math.abs(distance), 0.5) * 8}px)`,
                transition,
              }}
            >
              <span className="font-mono text-sm text-current/40">
                {String(i + 1).padStart(2, "0")} / {String(thoughts.length).padStart(2, "0")}
              </span>
              <h2 className="mt-4 text-2xl font-semibold">{thought.title}</h2>
              <p className="mt-6 text-lg leading-8">{thought.body}</p>
            </article>
          );
        })}
      </div>

      <div className="mt-16 select-none">
        <div
          ref={trackRef}
          role="slider"
          tabIndex={0}
          aria-label="Controversy level"
          aria-valuemin={1}
          aria-valuemax={thoughts.length}
          aria-valuenow={activeIndex + 1}
          aria-valuetext={`${thoughts[activeIndex].title}, ${activeIndex + 1} of ${thoughts.length}`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onKeyDown={handleKeyDown}
          className="group relative h-10 cursor-grab touch-none outline-none active:cursor-grabbing"
        >
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-current/30" />
          <div
            className="absolute left-0 top-1/2 h-px -translate-y-1/2 bg-current"
            style={{ width: `${(position / last) * 100}%`, transition }}
          />
          {thoughts.map((thought, i) => (
            <span
              key={thought.title}
              className={`absolute top-1/2 mt-3 h-1.5 w-px -translate-x-1/2 transition-colors ${
                i <= position ? "bg-current" : "bg-current/30"
              }`}
              style={{ left: `${(i / last) * 100}%` }}
            />
          ))}
          <div
            className={`absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current group-focus-visible:ring-1 group-focus-visible:ring-current group-focus-visible:ring-offset-4 group-focus-visible:ring-offset-black ${
              isDragging ? "scale-125" : ""
            }`}
            style={{ left: `${(position / last) * 100}%`, transition: isDragging ? "transform 150ms" : transition }}
          />
        </div>
        <div className="mt-1 flex justify-between text-sm text-current/50">
          <span>agreeable</span>
          <span>controversial</span>
        </div>
      </div>
    </div>
  );
}

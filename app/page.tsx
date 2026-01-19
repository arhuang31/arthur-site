"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Highlight from "../components/Highlight";

const TYPING_SPEED_MS = 40;

function useTyping(totalChars: number, speedMs: number) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= totalChars) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setCount((prev) => Math.min(prev + 1, totalChars));
    }, speedMs);

    return () => window.clearTimeout(timeoutId);
  }, [count, totalChars, speedMs]);

  return count;
}

type Segment = { type: "text" | "highlight" | "underline"; value: string };

export default function Home() {
  const segments = useMemo<Segment[]>(
    () => [
      {
        type: "text",
        value:
          "Hey! I'm Arthur, welcome to my website. I like to learn, create, travel, and cook. I am building this page to serve as a ",
      },
      { type: "highlight", value: "memory bank" },
      { type: "text", value: " for my life and to share my " },
      { type: "underline", value: "journey" },
      { type: "text", value: ", " },
      { type: "underline", value: "projects" },
      { type: "text", value: ", and " },
      { type: "underline", value: "art" },
      { type: "text", value: "." },
    ],
    [],
  );
  const totalChars = segments.reduce(
    (sum, segment) => sum + segment.value.length,
    0,
  );
  const typedCount = useTyping(totalChars, TYPING_SPEED_MS);
  const showCaret = typedCount < totalChars;

  const renderSegments = (visibleCount: number, highlightClassName?: string) => {
    let remaining = visibleCount;
    return segments.map((segment, index) => {
      if (remaining <= 0) {
        return null;
      }
      const text = segment.value.slice(
        0,
        Math.min(remaining, segment.value.length),
      );
      remaining -= text.length;

      if (segment.type === "highlight") {
        return (
          <Highlight key={index} className={highlightClassName}>
            {text}
          </Highlight>
        );
      }
      if (segment.type === "underline") {
        return (
          <span
            key={index}
            className="underline underline-offset-4 decoration-current"
          >
            {text}
          </span>
        );
      }
      return <span key={index}>{text}</span>;
    });
  };

  return (
    <main className="max-w-2xl mx-auto px-6 py-32 min-h-screen flex flex-col justify-center bg-white text-black">
      <h1 className="text-4xl font-semibold">Arthur Huang</h1>
      <p className="mt-6 text-lg leading-8">
        <span className="relative block">
          <span className="invisible">
            {renderSegments(totalChars, "highlight-animate")}
          </span>
          <span className="absolute inset-0">
            {renderSegments(typedCount, "highlight-animate")}
            {showCaret ? <span className="text-orange-400">|</span> : null}
          </span>
        </span>
      </p>
      <nav className="mt-10 flex flex-col gap-2">
        <Link href="/journey" className="group w-fit">
          <Highlight className="highlight-hover [&_.highlight-decor]:opacity-0 group-hover:[&_.highlight-decor]:opacity-100">
            my journey →
          </Highlight>
        </Link>
        <Link href="/projects" className="group w-fit">
          <Highlight className="highlight-hover [&_.highlight-decor]:opacity-0 group-hover:[&_.highlight-decor]:opacity-100">
            my projects →
          </Highlight>
        </Link>
        <Link href="/art" className="group w-fit">
          <Highlight className="highlight-hover [&_.highlight-decor]:opacity-0 group-hover:[&_.highlight-decor]:opacity-100">
            my art →
          </Highlight>
        </Link>
      </nav>
      <div className="mt-6 flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/arthurhuang001/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.78 0-2.05 1.38-2.05 2.8V21H10z" />
          </svg>
        </a>
        <a
          href="https://x.com/a31zh"
          aria-label="X"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M18.3 2H21l-6.6 7.6L22 22h-6.2l-4.9-6.4L5.3 22H2.6l7.1-8.2L2 2h6.3l4.4 5.8Zm-1.1 18h1.7L7.9 4h-1.8z" />
          </svg>
        </a>
        <a href="mailto:arthur.huang@queensu.ca" aria-label="Email">
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.2l8 5 8-5V7H4Zm16 10V9.3l-7.5 4.7a1 1 0 0 1-1 0L4 9.3V17h16Z" />
          </svg>
        </a>
      </div>
    </main>
  );
}

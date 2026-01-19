import type { ReactNode } from "react";

type HighlightProps = {
  children: ReactNode;
  className?: string;
};

export default function Highlight({ children, className }: HighlightProps) {
  return (
    <span
      className={`relative inline-block align-baseline ${className ?? ""}`.trim()}
    >
      <span className="highlight-decor absolute inset-0 z-0 -mx-1 -my-0.5 -rotate-2 pointer-events-none transition-opacity">
        <svg
          aria-hidden="true"
          viewBox="0 0 120 44"
          className="h-full w-full text-orange-400/70"
          preserveAspectRatio="none"
        >
          <path
            className="highlight-draw"
            d="M6 22 C10 6, 44 2, 82 6 C108 9, 114 20, 112 28 C108 40, 70 42, 38 38 C18 36, 4 30, 6 22"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="relative z-10 px-0.5">{children}</span>
    </span>
  );
}

"use client";

import { useState } from "react";

export type MapCountry = {
  name: string;
  label?: string;
  d: string;
  cx: number;
  cy: number;
  isMarker?: boolean;
  visit?: { highlight?: string };
};

type Props = { countries: MapCountry[]; width: number; height: number };

export default function WorldMap({ countries, width, height }: Props) {
  const [active, setActive] = useState<string | null>(null);

  const visited = countries
    .filter((c) => c.visit)
    .sort((a, b) => (a.label ?? a.name).localeCompare(b.label ?? b.name));
  const activeCountry = visited.find((c) => c.name === active);
  return (
    <div className="mt-8">
      <p className="text-sm text-current/60">
        {visited.length} countries so far. hover over one to see what stuck with me.
      </p>

      <div className="relative mx-auto mt-6 w-full max-w-6xl" onMouseLeave={() => setActive(null)}>
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="h-auto w-full"
          role="img"
          aria-label="World map of countries I have visited"
        >
          <defs>
            <pattern id="visited-dots" width="3" height="3" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="0.75" fill="currentColor" />
            </pattern>
          </defs>

          {countries
            .filter((c) => !c.isMarker)
            .map((c) => {
              const isActive = c.name === active;
              if (!c.visit) {
                return (
                  <path
                    key={c.name}
                    d={c.d}
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity={0.2}
                    strokeWidth={0.5}
                  />
                );
              }
              return (
                <path
                  key={c.name}
                  d={c.d}
                  fill={isActive ? "currentColor" : "url(#visited-dots)"}
                  stroke="currentColor"
                  strokeOpacity={0.8}
                  strokeWidth={0.75}
                  className="cursor-pointer transition-[fill] duration-200"
                  onMouseEnter={() => setActive(c.name)}
                  onClick={() => setActive(c.name)}
                />
              );
            })}

          {countries
            .filter((c) => c.isMarker)
            .map((c) => {
              const isActive = c.name === active;
              return (
                <g
                  key={c.name}
                  className="cursor-pointer"
                  onMouseEnter={() => setActive(c.name)}
                  onClick={() => setActive(c.name)}
                >
                  <circle cx={c.cx} cy={c.cy} r={9} fill="transparent" />
                  <circle
                    cx={c.cx}
                    cy={c.cy}
                    r={isActive ? 4 : 3}
                    fill={isActive ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth={1}
                    className="transition-all duration-200"
                  />
                </g>
              );
            })}
        </svg>

        {activeCountry?.visit ? (
          <div
            className="pointer-events-none absolute z-10 w-64 border border-current/20 bg-background p-4 text-sm leading-6"
            style={{
              left: `${(activeCountry.cx / width) * 100}%`,
              top: `${(activeCountry.cy / height) * 100}%`,
              transform: `translate(${activeCountry.cx > width * 0.65 ? "calc(-100% - 16px)" : "16px"}, ${
                activeCountry.cy > height * 0.6 ? "calc(-100% - 16px)" : "16px"
              })`,
            }}
          >
            <h3 className="text-base font-semibold">{activeCountry.label ?? activeCountry.name}</h3>
            {activeCountry.visit.highlight ? <p className="mt-2">{activeCountry.visit.highlight}</p> : null}
          </div>
        ) : null}
      </div>

      <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-sm">
        {visited.map((c) => (
          <li key={c.name}>
            <button
              type="button"
              onMouseEnter={() => setActive(c.name)}
              onFocus={() => setActive(c.name)}
              onClick={() => setActive(c.name)}
              className={`transition-colors ${
                c.name === active ? "text-current underline underline-offset-4" : "text-current/50 hover:text-current"
              }`}
            >
              {c.label ?? c.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

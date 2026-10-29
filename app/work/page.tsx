"use client";

import { useMemo, useState } from "react";

type Block = {
  id: string;
  title: string;
  tags: string[];
  logoUrl: string;
  href?: string;
};

type Section = "Writing" | "products";

export default function ProjectsPage() {
  const [activeSection, setActiveSection] = useState<Section>("Writing");
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const writingStartup = useMemo<Block[]>(
    () => [
      {
        id: "startup-delphi",
        title: "delphi",
        tags: [],
        logoUrl: "/logos/delphi.png",
        href: "https://startupsignals.substack.com/p/delphi-can-you-package-a-mind",
      },
      {
        id: "startup-beli",
        title: "beli",
        tags: [],
        logoUrl: "/logos/beli.png",
        href: "https://startupsignals.substack.com/p/beli-your-food-diary-and-dining-advisor",
      },
      {
        id: "startup-strava",
        title: "strava",
        tags: [],
        logoUrl: "/logos/strava.png",
        href: "https://startupsignals.substack.com/p/strava-if-its-not-on-strava-it-didnt",
      },
      {
        id: "startup-kalshi",
        title: "kalshi",
        tags: [],
        logoUrl: "/logos/kalshi.jpeg",
        href: "https://startupsignals.substack.com/p/kalshi-the-winner-of-the-2024-election",
      },
      {
        id: "startup-substack",
        title: "substack",
        tags: [],
        logoUrl: "/logos/substack.png",
        href: "https://startupsignals.substack.com/p/substack-make-reading-cool-again",
      },
      {
        id: "startup-notion",
        title: "notion",
        tags: [],
        logoUrl: "/logos/notion.png",
        href: "https://startupsignals.substack.com/p/notion-why-customizability-may-be-the-winning-advantage-in-productivtiy",
      },
      {
        id: "startup-alltrails",
        title: "alltrails",
        tags: [],
        logoUrl: "/logos/alltrails.jpeg",
        href: "https://startupsignals.substack.com/p/alltrails-getting-people-outdoors",
      },
      {
        id: "startup-whatnot",
        title: "whatnot",
        tags: [],
        logoUrl: "/logos/whatnot.webp",
        href: "https://startupsignals.substack.com/p/whatnot-a-new-era-of-e-commerce",
      },
      {
        id: "startup-perplexity",
        title: "perplexity",
        tags: [],
        logoUrl: "/logos/perplexity.webp",
        href: "https://startupsignals.substack.com/p/perplexity-how-ai-is-challenging-googles-monopoly-on-search",
      },
      {
        id: "startup-ambrook",
        title: "ambrook",
        tags: [],
        logoUrl: "/logos/ambrook.png",
        href: "https://research.contrary.com/company/ambrook",
      },
    ],
    [],
  );

  const writingOther = useMemo<Block[]>(
    () => [
      {
        id: "writing-canada",
        title: "canadian exceptionalism",
        tags: [],
        logoUrl: "/logos/canada.png",
        href: "https://startupsignals.substack.com/p/canadian-exceptionalism",
      },
      {
        id: "writing-1",
        title: "blockchain and inequality",
        tags: [],
        logoUrl: "/logos/blockchain.png",
        href: "https://medium.com/@arthur.huang_93195/blockchain-and-inequality-2be842e9017b",
      },
      {
        id: "writing-2",
        title: "first principle thinking on AI",
        tags: [],
        logoUrl: "/logos/AI.png",
        href: "https://startupsignals.substack.com/p/first-principle-thinking-on-ai",
      },
    ],
    [],
  );

  const appBlocks = useMemo<Block[]>(
    () => [
      {
        id: "app-1",
        title: "Memory archive",
        tags: ["web", "notes"],
        logoUrl: "",
      },
      {
        id: "app-2",
        title: "Travel logbook",
        tags: ["mobile", "journal"],
        logoUrl: "",
      },
    ],
    [],
  );

  const renderBlocks = (blocks: Block[], linked: boolean) => (
    <div className="grid gap-6 md:grid-cols-3">
      {blocks.map((block) => {
        const href = block.href ?? "#";
        const isExternal = /^https?:\/\//.test(href);

        const content = (
          <div className="space-y-3 rounded-md border border-current/20 p-4">
            <div
              role="img"
              aria-label={`${block.title} logo`}
              className={`h-28 w-full rounded-sm bg-center bg-no-repeat ${
                block.id === "startup-beli" || block.id === "startup-whatnot"
                  ? "bg-black"
                  : "bg-current/5"
              }`}
              style={{
                backgroundImage: block.logoUrl ? `url("${block.logoUrl}")` : undefined,
                backgroundSize: "contain",
              }}
            />
            <h3 className="text-lg font-semibold">{block.title}</h3>
            {block.tags.length ? (
              <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wide">
                {block.tags.map((tag) => (
                  <span key={tag} className="border border-current/20 px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        );

        if (linked) {
          return (
            <a
              key={block.id}
              href={href}
              className="block"
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
            >
              {content}
            </a>
          );
        }

        const isFlipped = flippedCards[block.id];
        return (
          <button
            key={block.id}
            type="button"
            onClick={() =>
              setFlippedCards((prev) => ({
                ...prev,
                [block.id]: !prev[block.id],
              }))
            }
            className="text-left"
            aria-pressed={isFlipped}
          >
            {isFlipped ? (
              <div className="space-y-3 rounded-md border border-current/20 p-4">
                <h3 className="text-lg font-semibold">{block.title}</h3>
                <p className="text-sm leading-7">
                  Placeholder recipe notes and a short description of ingredients,
                  steps, and little variations worth remembering.
                </p>
              </div>
            ) : (
              content
            )}
          </button>
        );
      })}
    </div>
  );

  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-2xl font-semibold">Work</h1>
      <div className="mt-6 flex flex-wrap gap-4 text-sm uppercase tracking-wide">
        {(["Writing", "products"] as Section[]).map((section) => (
          <div key={section} className="relative inline-flex items-start">
            <button
              type="button"
              onClick={() => section !== "products" && setActiveSection(section)}
              disabled={section === "products"}
              className={`border-b pb-1 ${
                activeSection === section ? "border-current" : "border-transparent"
              } ${section === "products" ? "text-current/50 cursor-not-allowed" : ""}`}
            >
              {section === "products" ? "Products" : section}
            </button>
            {section === "products" && (
              <div className="relative group ml-1 -mt-0.5">
                <svg
                  className="w-3.5 h-3.5 text-current/50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-3 py-2 bg-background border border-current/20 rounded text-xs text-current whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10">
                  under construction, to be updated
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {activeSection === "Writing" ? (
        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-xl font-semibold">Startup Analysis</h2>
            <div className="mt-4">{renderBlocks(writingStartup, true)}</div>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Other Writing</h2>
            <div className="mt-4">{renderBlocks(writingOther, true)}</div>
          </section>
        </div>
      ) : null}

      {activeSection === "products" ? (
        <div className="mt-10"></div>
      ) : null}
    </main>
  );
}

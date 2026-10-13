"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

type JourneySection = {
  number: string;
  title: string;
  paragraph: string | React.ReactNode;
  imageSrc: string;
};

const journeyData: JourneySection[] = [
  {
    number: "01",
    title: "Consulting @ McKinsey",
    paragraph: (
      <>
        Solving complex problems across tech, finance, pe, and philanthropy sectors. Primarily focusing on{" "}
        <a href="https://www.mckinsey.com/capabilities/transformation/how-we-help-clients" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-70">
          digital transformation
        </a>{" "}
        for F500s, and building & scaling{" "}
        <a href="https://www.mckinsey.com/capabilities/business-building/how-we-help-clients" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-70">
          new businesses
        </a>{" "}
        with forward deployed engineers. Trying my best to turn pretty powerpoints into actual products
      </>
    ),
    imageSrc: "/photos/v2/01_mck.jpg",
  },
  {
    number: "02",
    title: "Writing on Substack",
    paragraph: (
      <>
        Writing about breakout B2C startups through a vc lens, like{" "}
        <a href="https://startupsignals.substack.com/p/beli-your-food-diary-and-dining-advisor" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-70">
          beli
        </a>
        ,{" "}
        <a href="https://startupsignals.substack.com/p/strava-if-its-not-on-strava-it-didnt" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-70">
          Strava
        </a>
        ,{" "}
        <a href="https://startupsignals.substack.com/p/kalshi-the-winner-of-the-2024-election" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-70">
          Kalshi
        </a>
        . Sometimes i also write about tech and social trends
      </>
    ),
    imageSrc: "/photos/v2/02_substack.jpg",
  },
  {
    number: "03",
    title: "Learning How to Cook @ GBC",
    paragraph:
      "Pursuing my interest and learning the fundamentals of cooking during the weekends. Back to being a beginner",
    imageSrc: "/photos/v2/03_gbc.jpg",
  },
  {
    number: "04",
    title: "Graduated BCom @ Queen's University",
    paragraph: (
      <>
        graduated first-gen student at queens commerce on a{" "}
        <a href="https://smith.queensu.ca/sobey/index.php" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-70">
          full-ride
        </a>
        . Mostly focused on finance and tech, with an occasional dose of philosophy. Had a lot of fun and met lifelong friends
      </>
    ),
    imageSrc: "/photos/v2/04_queens.jpg",
  },
  {
    number: "05",
    title: "Traveled during gap (half) year",
    paragraph: (
      <>
        Saw the world before graduation.{" "}
        <a href="https://drive.google.com/file/d/12_-2YdQ1rpWW342CgCWoDKNDofSRZrXn/view" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-70">
          Drove
        </a>{" "}
        15,000 km across the US with my best friends in a minivan (Bertha), experienced a proper euro summer, and worked as a bartender while solo backpacking South America for 3 months
      </>
    ),
    imageSrc: "/photos/v2/05_trip.jpg",
  },
  {
    number: "06",
    title: "Invested @ Round13 Capital",
    paragraph: (
      <>
        hired as first non-partner investor for R13's{" "}
        <a href="https://r13daf.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-70">
          digital asset fund
        </a>
        . Led due diligence and invested in 10+ early-stage blockchain-enabled companies. Learned how to build and validate theses
      </>
    ),
    imageSrc: "/photos/v2/06_r13.jpg",
  },
  {
    number: "07",
    title: "Invested @ PROPELR Growth",
    paragraph: (
      <>
        Learned how to distinguish supposedly vs actually successful companies. Invested $34.5m to support{" "}
        <a href="https://www.propelrgrowth.com/portfolio-articles/field-effect" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-70">
          field effect
        </a>
        's mission to provide cybersecurity to SMEs
      </>
    ),
    imageSrc: "/photos/v2/07_propelr.jpg",
  },
  {
    number: "08",
    title: "Wrote for Contrary & Horizon",
    paragraph: (
      <>
        Sharpened my thinking through long-form research and editorial writing for{" "}
        <a href="https://research.contrary.com/company" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-70">
          Contrary Research
        </a>{" "}
        and{" "}
        <a href="https://www.horizonsearch.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-70">
          Horizon Search
        </a>
        . Published thoughts on startups and tech trends
      </>
    ),
    imageSrc: "/photos/v2/08_contrary.jpg",
  },
  {
    number: "09",
    title: "Founded The Blockchain Lab",
    paragraph: (
      <>
        Started a{" "}
        <a href="https://www.linkedin.com/company/tblcapital/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-70">
          student organization
        </a>{" "}
        focused on blockchain education. Built teams, scaled org, hosted conferences, and raised capital. Learned about leadership through failings and iterations
      </>
    ),
    imageSrc: "/photos/v2/09_tbl.jpg",
  },
  {
    number: "10",
    title: "Lived in Singapore during exchange @ SMU",
    paragraph: (
      <>
        Made friends from all over the world, traveled across SEA, ate amazing food, and occasionally attended some cool classes. Deeply{" "}
        <a href="https://biblioasia.nlb.gov.sg/vol-13/issue-1/apr-jun-2017/land-from-sand/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-70">
          inspired
        </a>{" "}
        by the tiny city-state
      </>
    ),
    imageSrc: "/photos/v2/10_sg.jpg",
  },
  {
    number: "11",
    title: "Grew up in Shanghai and Halifax",
    paragraph:
      "Spent the first 11 years of my life in China (primarily Shanghai) before moving to Halifax, Canada. The drastically different environments shaped how i think about ambition and identity",
    imageSrc: "/photos/v2/11_growing_up.jpg",
  },
  {
    number: "12",
    title: "Put people first",
    paragraph:
      "Surround myself with a group of mutually inspiring people. Love each other",
    imageSrc: "/photos/v2/12_people.jpg",
  },
  {
    number: "13",
    title: "Create something that matters",
    paragraph:
      "Build, deliver, and scale impact against meaningful problems",
    imageSrc: "/photos/v2/13_create.jpg",
  },
  {
    number: "14",
    title: "Live with no regrets",
    paragraph:
      "Keep adding new chapters and stories. Experience new things. Stay unfinished",
    imageSrc: "/photos/v2/14_life.jpg",
  },
];

type NavItem = {
  type: "header" | "item";
  label?: string; // For headers
  itemIndex?: number; // For items, the index in journeyData
};

export default function JourneyPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const isScrollingRef = useRef(false);

  // Create navigation items with section headers
  const navItems: NavItem[] = [
    { type: "header", label: "// present" },
    { type: "item", itemIndex: 0 },
    { type: "item", itemIndex: 1 },
    { type: "item", itemIndex: 2 },
    { type: "header", label: "// past" },
    { type: "item", itemIndex: 3 },
    { type: "item", itemIndex: 4 },
    { type: "item", itemIndex: 5 },
    { type: "item", itemIndex: 6 },
    { type: "item", itemIndex: 7 },
    { type: "item", itemIndex: 8 },
    { type: "item", itemIndex: 9 },
    { type: "item", itemIndex: 10 },
    { type: "header", label: "// future" },
    { type: "item", itemIndex: 11 },
    { type: "item", itemIndex: 12 },
    { type: "item", itemIndex: 13 },
  ];

  const activeSection = journeyData[activeIndex];

  // Handle click - scroll item into view and update active index
  const handleItemClick = (index: number) => {
    const item = itemRefs.current[index];
    const nav = navRef.current;
    if (!item || !nav) return;

    isScrollingRef.current = true;
    setActiveIndex(index);

    // Calculate position to center the item in the nav viewport
    const navRect = nav.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    const navScrollTop = nav.scrollTop;
    const itemOffsetTop = item.offsetTop;
    const navCenter = navRect.height / 2;
    const itemHeight = itemRect.height;
    const targetScroll = itemOffsetTop - navCenter + itemHeight / 2;

    nav.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });

    // Reset scrolling flag after animation
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 500);
  };

  // Track scroll position to determine active section
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const handleScroll = () => {
      if (isScrollingRef.current) return; // Don't update during programmatic scroll

      const scrollTop = nav.scrollTop;
      const scrollHeight = nav.scrollHeight;
      const clientHeight = nav.clientHeight;
      const scrollBottom = scrollHeight - clientHeight;

      // Check if at top - activate first item
      if (scrollTop < 10) {
        if (activeIndex !== 0) {
          setActiveIndex(0);
        }
        return;
      }

      // Check if at bottom - activate last item
      if (scrollTop >= scrollBottom - 10) {
        if (activeIndex !== journeyData.length - 1) {
          setActiveIndex(journeyData.length - 1);
        }
        return;
      }

      // Calculate scroll percentage (0 to 1)
      const scrollPercentage = scrollTop / (scrollBottom || 1);
      
      // Map scroll percentage to item index with more sensitivity
      // Use a more linear distribution to ensure all items are reachable
      const totalItems = journeyData.length;
      const itemIndex = Math.min(
        Math.floor(scrollPercentage * totalItems),
        totalItems - 1
      );

      // Also check which item is actually closest to center for more accuracy
      const navRect = nav.getBoundingClientRect();
      const navCenter = navRect.top + navRect.height / 2;
      
      let closestIndex = itemIndex;
      let closestDistance = Infinity;

      // Check items around the calculated index for better accuracy
      // Only check actual items (not headers)
      const checkRange = 2; // Check ±2 items around calculated position
      const startCheck = Math.max(0, itemIndex - checkRange);
      const endCheck = Math.min(totalItems - 1, itemIndex + checkRange);

      for (let i = startCheck; i <= endCheck; i++) {
        const item = itemRefs.current[i];
        if (!item) continue;
        
        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.top + itemRect.height / 2;
        const distance = Math.abs(navCenter - itemCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      }

      if (closestIndex !== activeIndex) {
        setActiveIndex(closestIndex);
      }
    };

    nav.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => nav.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  return (
    <main className="mx-auto w-full px-6 py-20">
      <h1 className="text-3xl font-semibold">Journey</h1>
      
      <div className="mt-10 flex gap-12">
        {/* Left column: Narrative index */}
        <div className="w-1/3">
          <nav ref={navRef} className="space-y-1 journey-nav-scrollable">
            {navItems.map((navItem, navIndex) => {
              if (navItem.type === "header") {
                return (
                  <div
                    key={`header-${navIndex}`}
                    className="block w-full text-left py-2 text-current/60 font-mono text-base"
                  >
                    {navItem.label}
                  </div>
                );
              } else {
                const itemIndex = navItem.itemIndex!;
                const item = journeyData[itemIndex];
                return (
                  <button
                    key={`item-${itemIndex}`}
                    ref={(el) => {
                      itemRefs.current[itemIndex] = el;
                    }}
                    onClick={() => handleItemClick(itemIndex)}
                    className={`block w-full text-left py-2 transition-colors ${
                      itemIndex === activeIndex
                        ? "text-current"
                        : "text-current/40 hover:text-current/60"
                    }`}
                  >
                    {itemIndex === activeIndex && <span>– </span>}
                    <span>{item.title}</span>
                  </button>
                );
              }
            })}
          </nav>
        </div>

        {/* Right column: Dynamic content */}
        <div className="w-2/3 flex flex-col items-center">
          <div className="mt-10 mb-10 leading-relaxed text-lg transition-opacity duration-300 w-full">
            {activeSection.paragraph}
          </div>

          {/* Image */}
          <div
            className={`relative ${
              activeSection.number === "12" ? "w-[90%]" : "w-3/4"
            } aspect-video bg-black overflow-hidden transition-opacity duration-300`}
          >
            {activeSection.imageSrc ? (
              <Image
                src={activeSection.imageSrc}
                alt={activeSection.title}
                fill
                className="object-contain"
                priority={activeIndex === 0}
              />
            ) : (
              <div className="absolute inset-0">
                <div className="w-full h-full bg-gradient-to-br from-white/10 via-gray-500/30 to-black/50"></div>
                {/* Pattern overlay for texture */}
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)`,
                  }}
                ></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

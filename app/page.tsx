"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Highlight from "../components/Highlight";

const TYPING_SPEED_MS = 31;

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

function useTypingText(text: string, startDelay: number, speedMs: number) {
  const [count, setCount] = useState(0);
  const totalChars = text.length;

  useEffect(() => {
    if (count >= totalChars) {
      return;
    }

    const delay = count === 0 ? startDelay : speedMs;
    const timeoutId = window.setTimeout(() => {
      setCount((prev) => Math.min(prev + 1, totalChars));
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [count, totalChars, speedMs, startDelay]);

  return { typedCount: count, showCaret: count < totalChars };
}

function useDelayedVisibility(delay: number) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [delay]);

  return isVisible;
}

type Segment = { type: "text" | "highlight" | "underline"; value: string };

export default function Home() {
  const segments = useMemo<Segment[]>(
    () => [
      {
        type: "text",
        value:
          "Hi, welcome! I am building this page to serve as a ",
      },
      { type: "highlight", value: "memory bank" },
      { type: "text", value: " for my life, highlighting some of the defining moments that shaped who I am today. i want to share with you a glimpse into my life through my " },
      { type: "underline", value: "journey" },
      { type: "text", value: ", my " },
      { type: "underline", value: "work" },
      { type: "text", value: ", my " },
      { type: "underline", value: "mind" },
      { type: "text", value: ", and my " },
      { type: "underline", value: "world" },
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

  // Navigation links with typing animation
  const navLinks = useMemo(
    () => [
      { text: "my journey →", href: "/journey" },
      { text: "my work →", href: "/work" },
      { text: "my mind →", href: "/mind/readings" },
      { text: "my world →", href: "/world/travels" },
    ],
    [],
  );

  // Calculate when nav links should start (after main text finishes + small delay)
  const navStartDelay = totalChars * TYPING_SPEED_MS + 234;
  const navDelay = (index: number) =>
    navStartDelay +
    navLinks.slice(0, index).reduce((sum, link) => sum + link.text.length, 0) * TYPING_SPEED_MS +
    index * 156;
  const navLink1 = useTypingText(navLinks[0].text, navDelay(0), TYPING_SPEED_MS);
  const navLink2 = useTypingText(navLinks[1].text, navDelay(1), TYPING_SPEED_MS);
  const navLink3 = useTypingText(navLinks[2].text, navDelay(2), TYPING_SPEED_MS);
  const navLink4 = useTypingText(navLinks[3].text, navDelay(3), TYPING_SPEED_MS);
  const navTyping = [navLink1, navLink2, navLink3, navLink4];

  // Social links - show them sequentially after nav links
  const socialLinks = useMemo(
    () => [
      {
        href: "https://www.linkedin.com/in/arthurhuang001/",
        ariaLabel: "LinkedIn",
        svg: (
          <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.78 0-2.05 1.38-2.05 2.8V21H10z" />
        ),
      },
      {
        href: "https://x.com/a31zh",
        ariaLabel: "X",
        svg: (
          <path d="M18.3 2H21l-6.6 7.6L22 22h-6.2l-4.9-6.4L5.3 22H2.6l7.1-8.2L2 2h6.3l4.4 5.8Zm-1.1 18h1.7L7.9 4h-1.8z" />
        ),
      },
      {
        href: "https://startupsignals.substack.com?utm_campaign=profile_chips",
        ariaLabel: "Substack",
        svg: (
          <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
        ),
      },
      {
        href: "mailto:arthur.huang@queensu.ca",
        ariaLabel: "Email",
        svg: (
          <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.2l8 5 8-5V7H4Zm16 10V9.3l-7.5 4.7a1 1 0 0 1-1 0L4 9.3V17h16Z" />
        ),
      },
    ],
    [],
  );

  const totalNavChars = navLinks.reduce((sum, link) => sum + link.text.length, 0);
  const socialStartDelay = navStartDelay + totalNavChars * TYPING_SPEED_MS + navLinks.length * 156 + 234;
  const social1 = useDelayedVisibility(socialStartDelay);
  const social2 = useDelayedVisibility(socialStartDelay + 125);
  const social3 = useDelayedVisibility(socialStartDelay + 250);
  const social4 = useDelayedVisibility(socialStartDelay + 375);

  const renderNavLink = (text: string, typedCount: number, showCaret: boolean) => {
    return (
      <span className="relative inline-block">
        <span className="invisible">{text}</span>
        <span className="absolute inset-0">
          {text.slice(0, typedCount)}
          {showCaret ? <span className="text-orange-400">|</span> : null}
        </span>
      </span>
    );
  };

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
    <main className="max-w-2xl mx-auto px-6 py-32 min-h-screen flex flex-col justify-center bg-transparent text-current">
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
        {navLinks.map((link, index) =>
          navTyping[index].typedCount > 0 ? (
            <Link key={link.href} href={link.href} className="group w-fit">
              <Highlight className="highlight-hover [&_.highlight-decor]:opacity-0 group-hover:[&_.highlight-decor]:opacity-100">
                {renderNavLink(link.text, navTyping[index].typedCount, navTyping[index].showCaret)}
              </Highlight>
            </Link>
          ) : null,
        )}
      </nav>
      <div className="mt-6 flex items-center gap-4">
        {social1 && (
          <a
            href={socialLinks[0].href}
            aria-label={socialLinks[0].ariaLabel}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
              aria-hidden="true"
            >
              {socialLinks[0].svg}
            </svg>
          </a>
        )}
        {social2 && (
          <a
            href={socialLinks[1].href}
            aria-label={socialLinks[1].ariaLabel}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
              aria-hidden="true"
            >
              {socialLinks[1].svg}
            </svg>
          </a>
        )}
        {social3 && (
          <a
            href={socialLinks[2].href}
            aria-label={socialLinks[2].ariaLabel}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
              aria-hidden="true"
            >
              {socialLinks[2].svg}
            </svg>
          </a>
        )}
        {social4 && (
          <a
            href={socialLinks[3].href}
            aria-label={socialLinks[3].ariaLabel}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
              aria-hidden="true"
            >
              {socialLinks[3].svg}
            </svg>
          </a>
        )}
      </div>
    </main>
  );
}

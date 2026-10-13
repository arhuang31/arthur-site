"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Tab = { href: string; label: string };

export default function SectionTabs({ title, tabs }: { title: string; tabs: Tab[] }) {
  const pathname = usePathname();

  return (
    <div className="w-full px-6 pt-20">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <nav className="mt-6 flex flex-wrap gap-4 text-sm uppercase tracking-wide">
        {tabs.map((tab) => {
          const isActive = pathname.startsWith(tab.href);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`border-b pb-1 transition-colors ${
                isActive
                  ? "border-current"
                  : "border-transparent text-current/60 hover:text-current/80"
              }`}
            >
              {tab.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

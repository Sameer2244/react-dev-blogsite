"use client";

import Link from "next/link";
import { useState } from "react";
import { topics } from "@/app/data/topics";
import AdSenseSlot from "./AdSenseSlot";

interface NavItem {
  href: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/topics/virtual-dom-vs-real-dom", label: "Topics" },
];

export default function Header() {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50">
      {/* ── Adblocker awareness banner ──────────────────────────────── */}
      <div
        className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-mono font-semibold"
        style={{
          background: "linear-gradient(90deg, rgba(245,158,11,0.12), rgba(251,191,36,0.08), rgba(245,158,11,0.12))",
          borderBottom: "1px solid rgba(245,158,11,0.2)",
          color: "rgba(251,191,36,0.85)",
        }}
      >
        <span style={{ fontSize: "13px" }}>🛡️</span>
        <span>
          This site is ad-supported — please{" "}
          <strong style={{ color: "#fbbf24" }}>turn off your adblocker</strong>
          {" "}to support free web dev content.
        </span>
        <span style={{ opacity: 0.5 }}>🙏</span>
      </div>

      <nav
        className="flex items-center justify-between px-4 sm:px-6 h-16"
        style={{
          background: "rgba(6, 9, 19, 0.88)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0"
          aria-label="Dev Shorts Hub — Home"
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center font-mono font-black text-sm shrink-0"
            style={{
              background: "linear-gradient(135deg, #38bdf8, #d2a8ff)",
              boxShadow: "0 0 16px rgba(56,189,248,0.35)",
            }}
          >
            ⚛
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span
              className="font-mono font-black text-sm tracking-tight"
              style={{
                background: "linear-gradient(90deg, #38bdf8, #d2a8ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Dev Shorts
            </span>
            <span
              className="font-mono text-xs"
              style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}
            >
              WEB DEV HUB
            </span>
          </div>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Page navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150"
              style={{
                color: hoveredNav === item.href ? "#e1e4e8" : "rgba(255,255,255,0.55)",
                background: hoveredNav === item.href ? "rgba(255,255,255,0.05)" : "transparent",
              }}
              onMouseEnter={() => setHoveredNav(item.href)}
              onMouseLeave={() => setHoveredNav(null)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side: Instagram badge */}
        <a
          href="https://instagram.com/react_devdas"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-bold transition-all duration-200"
          style={{
            background:
              "linear-gradient(90deg, rgba(240,148,51,0.12), rgba(220,39,67,0.12), rgba(188,24,136,0.12))",
            border: "1px solid rgba(220,39,67,0.2)",
            color: "rgba(255,255,255,0.7)",
          }}
          aria-label="Follow @react_devdas on Instagram"
        >
          {/* Instagram icon */}
          <svg
            viewBox="0 0 24 24"
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{ color: "#dc2743" }}
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4.5" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
          </svg>
          <span className="hidden sm:inline">@react_devdas</span>
        </a>
      </nav>

      {/* AdSense sub-header banner */}
      <div
        className="w-full flex items-center justify-center py-1.5 px-4"
        style={{
          background: "rgba(6, 9, 19, 0.7)",
          borderBottom: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <AdSenseSlot
          slot="1111111111"
          format="horizontal"
          width={728}
          height={40}
          mockLabel="Top Leaderboard"
        />
      </div>
    </header>
  );
}

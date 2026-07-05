"use client";

import Link from "next/link";
import { topics } from "./data/topics";
import AdSenseSlot from "./components/AdSenseSlot";

const CATEGORY_COLORS: Record<string, string> = {
  Hooks: "#38bdf8",
  Performance: "#10b981",
  Patterns: "#d2a8ff",
  Rendering: "#3b82f6",
  Architecture: "#f59e0b",
};

const DIFFICULTY_CLASSES: Record<string, string> = {
  Beginner: "chip-beginner",
  Intermediate: "chip-intermediate",
  Advanced: "chip-advanced",
};

export default function HomePage() {
  return (
    <main>
      {/* ── Hero Section ─────────────────────────────────────────── */}
      <section
        className="relative flex flex-col items-center text-center px-6 pt-20 pb-24 overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 font-mono text-xs font-bold uppercase tracking-widest animate-fade-in"
            style={{
              color: "#38bdf8",
              background: "rgba(56,189,248,0.08)",
              border: "1px solid rgba(56,189,248,0.2)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-glow-pulse"
              style={{ background: "#38bdf8" }}
            />
            Daily React Shorts · Companion Hub
          </div>

          {/* Main heading */}
          <h1
            id="hero-heading"
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-6 animate-fade-up"
          >
            <span className="gradient-text-hero">React in</span>
            <br />
            <span className="gradient-text-hero">60 Seconds</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg sm:text-xl leading-relaxed mb-10 animate-fade-up"
            style={{
              color: "#6b7280",
              animationDelay: "150ms",
            }}
          >
            Deep-dive articles for every{" "}
            <span style={{ color: "#e1e4e8" }}>Daily React Shorts</span>{" "}
            episode. One concept. One article. Daily.
          </p>

          {/* CTA buttons */}
          <div
            className="flex flex-wrap gap-4 items-center justify-center animate-fade-up"
            style={{ animationDelay: "220ms" }}
          >
            <Link
              href={`/topics/${topics[0].slug}`}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #38bdf8, #d2a8ff)",
                color: "#060913",
                boxShadow: "0 0 28px rgba(56,189,248,0.3)",
              }}
              id="hero-start-reading-btn"
            >
              Start Reading
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </Link>

            <a
              href="https://instagram.com/react_devdas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:bg-white/10"
              style={{
                color: "rgba(255,255,255,0.7)",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              id="hero-instagram-btn"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#dc2743" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4.5" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="#dc2743" stroke="none" />
              </svg>
              @react_devdas
            </a>
          </div>

          {/* Stats row */}
          <div
            className="flex flex-wrap items-center justify-center gap-8 mt-14 pt-10 animate-fade-in"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.06)",
              animationDelay: "350ms",
            }}
          >
            {[
              { value: topics.length.toString(), label: "Topics" },
              { value: "60s", label: "Per Reel" },
              { value: "Daily", label: "New Content" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span
                  className="text-2xl font-black font-mono"
                  style={{
                    background: "linear-gradient(90deg, #38bdf8, #d2a8ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="font-mono text-xs uppercase tracking-wider"
                  style={{ color: "#4b5563" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Topics Grid ──────────────────────────────────────────── */}
      <section
        className="px-6 pb-20 max-w-7xl mx-auto w-full"
        aria-labelledby="topics-grid-heading"
      >
        <div className="flex items-center justify-between mb-8">
          <h2
            id="topics-grid-heading"
            className="text-2xl font-black"
            style={{ color: "#e1e4e8" }}
          >
            All Episodes
          </h2>
          <span
            className="font-mono text-xs px-3 py-1.5 rounded-full"
            style={{
              color: "#38bdf8",
              background: "rgba(56,189,248,0.08)",
              border: "1px solid rgba(56,189,248,0.15)",
            }}
          >
            {topics.length} topics
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {topics.map((topic, idx) => {
            const catColor = CATEGORY_COLORS[topic.category] ?? "#38bdf8";
            const diffClass = DIFFICULTY_CLASSES[topic.difficulty] ?? "chip-beginner";
            const delays = [
              "delay-100", "delay-200", "delay-300",
              "delay-400", "delay-500", "delay-600",
            ];
            const delayClass = delays[idx % 6];

            return (
              <Link
                key={topic.slug}
                href={`/topics/${topic.slug}`}
                className={`group block rounded-2xl p-6 animate-fade-up ${delayClass} transition-all duration-200 hover:-translate-y-1`}
                style={{
                  background: "rgba(13,17,23,0.75)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  textDecoration: "none",
                }}
                id={`topic-card-${topic.slug}`}
                aria-label={`Read ${topic.title}`}
              >
                {/* Top row: category accent + difficulty */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="font-mono text-xs font-bold uppercase tracking-widest"
                    style={{ color: `${catColor}80` }}
                  >
                    {topic.category}
                  </span>
                  <span className={`badge-pill ${diffClass}`}>
                    {topic.difficulty}
                  </span>
                </div>

                {/* spacer keeps layout consistent */}

                {/* Title */}
                <h3
                  className="text-lg font-bold leading-snug mb-3 transition-colors group-hover:text-white"
                  style={{ color: "#d1d5db" }}
                >
                  {topic.shortTitle}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed line-clamp-2 mb-5"
                  style={{ color: "rgba(255,255,255,0.28)" }}
                >
                  {topic.description}
                </p>

                {/* Accent line + read link */}
                <div className="flex items-center justify-between">
                  <div
                    className="h-0.5 flex-1 mr-4 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${topic.accentColor}40, transparent)`,
                    }}
                  />
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span
                      className="text-xs font-mono font-bold"
                      style={{ color: topic.accentColor }}
                    >
                      Read
                    </span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={topic.accentColor}
                      strokeWidth="2.5"
                      className="transition-transform group-hover:translate-x-0.5"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── Bottom AdSense Banner ─────────────────────────────────── */}
      <section
        className="px-6 pb-16 max-w-5xl mx-auto w-full"
        aria-label="Advertisement"
      >
        <div
          className="flex items-center justify-center rounded-2xl overflow-hidden"
          style={{
            border: "1px solid rgba(255,255,255,0.05)",
            background: "rgba(13,17,23,0.5)",
          }}
        >
          <AdSenseSlot
            slot="5555555555"
            format="horizontal"
            width={728}
            height={90}
            mockLabel="Bottom Leaderboard"
            className="w-full max-w-2xl"
          />
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer
        className="px-6 py-10 text-center"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <p className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
          Built with ♥ by{" "}
          <a
            href="https://instagram.com/react_devdas"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#38bdf8" }}
          >
            @react_devdas
          </a>{" "}
          · React · Daily
        </p>
      </footer>
    </main>
  );
}

"use client";

import Link from "next/link";
import type { Topic } from "@/app/data/topics";
import AdSenseSlot from "./AdSenseSlot";

const DIFFICULTY_CONFIG: Record<string, { className: string }> = {
  Beginner: { className: "chip-beginner" },
  Intermediate: { className: "chip-intermediate" },
  Advanced: { className: "chip-advanced" },
};

interface SuggestedTopicsProps {
  currentSlug: string;
  relatedTopics: Topic[];
}

export default function SuggestedTopics({
  currentSlug,
  relatedTopics,
}: SuggestedTopicsProps) {
  if (relatedTopics.length === 0) return null;

  return (
    <section className="mt-16" aria-labelledby="suggested-topics-heading">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="h-px flex-1"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />
        <h2
          id="suggested-topics-heading"
          className="text-sm font-mono font-bold uppercase tracking-widest px-4"
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          Keep Learning
        </h2>
        <div
          className="h-px flex-1"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />
      </div>

      {/* Grid: related topic cards + native ad card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedTopics.map((topic) => {
          const diffConfig =
            DIFFICULTY_CONFIG[topic.difficulty] ?? DIFFICULTY_CONFIG["Beginner"];
          return (
            <Link
              key={topic.slug}
              href={`/topics/${topic.slug}`}
              className="group block rounded-xl p-5 transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "rgba(13,17,23,0.7)",
                border: "1px solid rgba(255,255,255,0.06)",
                textDecoration: "none",
              }}
              aria-label={`Read ${topic.title}`}
            >
              {/* Difficulty row */}
              <div className="flex items-center justify-end mb-3">
                <span className={`badge-pill ${diffConfig.className}`}>
                  {topic.difficulty}
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-bold text-base leading-snug mb-2 group-hover:text-white transition-colors"
                style={{ color: "#d1d5db" }}
              >
                {topic.shortTitle}
              </h3>

              {/* Description preview */}
              <p
                className="text-sm leading-relaxed line-clamp-2 mb-4"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                {topic.description}
              </p>

              {/* Read arrow */}
              <div className="flex items-center gap-1.5">
                <span
                  className="text-xs font-mono font-bold"
                  style={{ color: topic.accentColor }}
                >
                  Read article
                </span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={topic.accentColor}
                  strokeWidth="2.5"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          );
        })}

        {/* Native Ad Card — blends with related topic cards */}
        <div
          className="rounded-xl overflow-hidden"
          style={{
            background: "rgba(13,17,23,0.5)",
            border: "1px dashed rgba(255,255,255,0.07)",
          }}
        >
          {/* Sponsored label */}
          <div className="px-5 pt-4 pb-2">
            <span
              className="font-mono text-xs px-2 py-0.5 rounded"
              style={{
                color: "rgba(255,255,255,0.2)",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Sponsored
            </span>
          </div>

          {/* Ad slot */}
          <div className="px-3 pb-4">
            <AdSenseSlot
              slot="4444444444"
              format="rectangle"
              width={300}
              height={200}
              mockLabel="Native Card Ad"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

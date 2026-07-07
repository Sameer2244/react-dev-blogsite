"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { topics } from "@/app/data/topics";
import AdSenseSlot from "./AdSenseSlot";

// Category grouping
const CATEGORIES = [
  { label: "Hooks", topics: topics.filter((t) => t.category === "Hooks") },
  { label: "Performance", topics: topics.filter((t) => t.category === "Performance") },
  { label: "Patterns", topics: topics.filter((t) => t.category === "Patterns") },
  { label: "Rendering", topics: topics.filter((t) => t.category === "Rendering") },
  { label: "Architecture", topics: topics.filter((t) => t.category === "Architecture") },
];

const DIFFICULTY_COLORS: Record<string, string> = {
  Beginner: "#10b981",
  Intermediate: "#f59e0b",
  Advanced: "#f43f5e",
};

function SidebarContent({ currentSlug }: { currentSlug?: string }) {
  const pathname = usePathname();
  const activeSlug = currentSlug || pathname.split("/topics/")[1]?.split("/")[0];

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-4 pb-4 pt-2">
        <p
          className="font-mono text-xs font-bold uppercase tracking-widest"
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          Dev Shorts
        </p>
        <p
          className="font-mono text-xs mt-0.5"
          style={{ color: "rgba(255,255,255,0.15)" }}
        >
          {topics.length} topics · Daily
        </p>
      </div>

      {/* Topic list by category */}
      <nav className="flex-1 overflow-y-auto pr-1 space-y-5" aria-label="Topics navigation">
        {CATEGORIES.filter((cat) => cat.topics.length > 0).map((category) => (
          <div key={category.label}>
            <p
              className="px-4 mb-1.5 font-mono text-xs font-bold uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              {category.label}
            </p>
            <ul className="space-y-0.5">
              {category.topics.map((topic) => {
                const isActive = topic.slug === activeSlug;
                return (
                  <li key={topic.slug}>
                    <Link
                      href={`/topics/${topic.slug}`}
                      className="flex items-center gap-2.5 px-4 py-2 rounded-lg transition-all duration-150 group text-sm"
                      style={{
                        color: isActive ? topic.accentColor : "rgba(255,255,255,0.45)",
                        background: isActive
                          ? `${topic.accentColor}10`
                          : "transparent",
                        borderLeft: isActive
                          ? `2px solid ${topic.accentColor}`
                          : "2px solid transparent",
                      }}
                      aria-current={isActive ? "page" : undefined}
                    >

                      {/* Title */}
                      <span
                        className="font-medium leading-snug line-clamp-2 flex-1"
                        style={{
                          color: isActive
                            ? topic.accentColor
                            : "rgba(255,255,255,0.5)",
                        }}
                      >
                        {topic.shortTitle}
                      </span>

                      {/* Difficulty dot */}
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0 opacity-60"
                        style={{
                          background: DIFFICULTY_COLORS[topic.difficulty] ?? "#888",
                        }}
                        title={topic.difficulty}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Sidebar Ad */}
      <div className="pt-4 px-2">
        <div
          className="pt-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p
            className="text-center font-mono text-xs mb-2"
            style={{ color: "rgba(255,255,255,0.12)", letterSpacing: "0.08em" }}
          >
            SPONSORED
          </p>
          <AdSenseSlot
            slot="2222222222"
            format="rectangle"
            width={250}
            height={200}
            mockLabel="Sidebar Rectangle"
          />
        </div>
      </div>
    </div>
  );
}

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile hamburger toggle */}
      <button
        className="fixed bottom-5 right-5 z-50 flex md:hidden items-center justify-center w-12 h-12 rounded-full font-bold text-sm shadow-lg transition-all duration-200"
        style={{
          background: "linear-gradient(135deg, #38bdf8, #d2a8ff)",
          boxShadow: "0 0 24px rgba(56,189,248,0.4)",
        }}
        onClick={() => setMobileOpen((v) => !v)}
        aria-label={mobileOpen ? "Close topics menu" : "Open topics menu"}
        id="sidebar-mobile-toggle"
      >
        {mobileOpen ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {/* Mobile overlay backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile slide-in drawer */}
      <aside
        className="fixed left-0 top-0 bottom-0 z-50 md:hidden w-72 pt-4 pb-6 overflow-hidden"
        style={{
          background: "rgba(9, 11, 18, 0.97)",
          backdropFilter: "blur(20px)",
          borderRight: "1px solid rgba(255,255,255,0.06)",
          transform: mobileOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        aria-label="Mobile sidebar navigation"
      >
        <SidebarContent />
      </aside>

      {/* Desktop sticky sidebar */}
      <aside
        className="hidden md:flex flex-col w-64 shrink-0 sticky top-[108px] h-[calc(100vh-108px)] pb-6 overflow-hidden"
        aria-label="Topics sidebar navigation"
      >
        <div
          className="h-full rounded-xl overflow-hidden"
          style={{
            background: "rgba(13, 17, 23, 0.6)",
            border: "1px solid rgba(255,255,255,0.06)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div className="h-full pt-4 pb-4 overflow-hidden flex flex-col">
            <SidebarContent />
          </div>
        </div>
      </aside>
    </>
  );
}

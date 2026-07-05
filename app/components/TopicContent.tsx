import type { Topic } from "@/app/data/topics";
import CodeBlock from "./CodeBlock";
import AdSenseSlot from "./AdSenseSlot";

const DIFFICULTY_CONFIG: Record<string, { label: string; className: string }> = {
  Beginner: { label: "Beginner", className: "chip-beginner" },
  Intermediate: { label: "Intermediate", className: "chip-intermediate" },
  Advanced: { label: "Advanced", className: "chip-advanced" },
};

interface TopicContentProps {
  topic: Topic;
}

export default function TopicContent({ topic }: TopicContentProps) {
  const diffConfig = DIFFICULTY_CONFIG[topic.difficulty] ?? DIFFICULTY_CONFIG["Beginner"];

  return (
    <article className="min-w-0 flex-1">
      {/* ── Article Header ───────────────────────────────────────── */}
      <header className="mb-10">
        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span
            className="badge-pill"
            style={{
              color: "rgba(255,255,255,0.4)",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {topic.category}
          </span>

          <span className={`badge-pill ${diffConfig.className}`}>
            {diffConfig.label}
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-3xl sm:text-4xl font-black tracking-tight leading-tight mb-5"
          style={{
            background: `linear-gradient(135deg, #ffffff 0%, ${topic.accentColor} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {topic.title}
        </h1>

        {/* Description */}
        <p
          className="text-base sm:text-lg leading-relaxed"
          style={{ color: "#6b7280", maxWidth: "68ch" }}
        >
          {topic.description}
        </p>

        {/* Divider */}
        <div
          className="mt-8 h-px w-full"
          style={{
            background: `linear-gradient(90deg, ${topic.accentColor}30, transparent)`,
          }}
        />
      </header>

      {/* ── Content Sections ─────────────────────────────────────── */}
      <div className="space-y-12">
        {topic.sections.map((section, idx) => (
          <section key={idx}>
            {/* Mid-article AdSense slot — between sections 2 and 3 */}
            {idx === 2 && (
              <div className="mb-10">
                <div
                  className="flex items-center justify-center rounded-xl overflow-hidden"
                  style={{
                    border: "1px solid rgba(255,255,255,0.05)",
                    background: "rgba(13,17,23,0.4)",
                  }}
                >
                  <AdSenseSlot
                    slot="3333333333"
                    format="horizontal"
                    width={728}
                    height={90}
                    mockLabel="In-Article Leaderboard"
                    className="w-full"
                  />
                </div>
              </div>
            )}

            {/* Section Badge */}
            {section.badge && (
              <div className="mb-4">
                <span
                  className="badge-pill"
                  style={{
                    color: section.badgeColor ?? topic.accentColor,
                    background: `${section.badgeColor ?? topic.accentColor}10`,
                    border: `1px solid ${section.badgeColor ?? topic.accentColor}25`,
                  }}
                >
                  {section.badge}
                </span>
              </div>
            )}

            {/* Section Heading */}
            <h2
              className="text-xl sm:text-2xl font-bold mb-4 leading-snug"
              style={{ color: "#e1e4e8" }}
            >
              {section.heading}
            </h2>

            {/* Body Text */}
            <p className="prose-dark mb-6">{section.body}</p>

            {/* Code Snippet */}
            {section.code && (
              <div className="mb-2">
                <CodeBlock
                  filename={section.code.filename}
                  lines={section.code.lines}
                  accentColor={section.code.accentColor}
                />
              </div>
            )}
          </section>
        ))}
      </div>

      {/* ── Decision Rules ───────────────────────────────────────── */}
      {topic.decisionRules.length > 0 && (
        <section className="mt-14" aria-labelledby="decision-rules-heading">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-1 h-6 rounded-full"
              style={{ background: topic.accentColor }}
            />
            <h2
              id="decision-rules-heading"
              className="text-xl font-bold"
              style={{ color: "#e1e4e8" }}
            >
              Decision Rules
            </h2>
          </div>

          <div className="space-y-3">
            {topic.decisionRules.map((rule, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between gap-4 px-5 py-4 rounded-xl"
                style={{
                  background: "rgba(13,17,23,0.7)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span
                  className="font-mono text-sm flex-1"
                  style={{ color: "#9ca3af" }}
                >
                  {rule.question}
                </span>
                <span
                  className="font-mono text-sm font-black px-4 py-1.5 rounded-lg shrink-0"
                  style={{
                    color: rule.color,
                    background: `${rule.color}12`,
                    border: `1px solid ${rule.color}28`,
                  }}
                >
                  {rule.answer}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Key Takeaways ────────────────────────────────────────── */}
      {topic.keyTakeaways.length > 0 && (
        <section className="mt-12" aria-labelledby="key-takeaways-heading">
          <div
            className="rounded-2xl p-6 sm:p-8"
            style={{
              background: "rgba(13,17,23,0.85)",
              border: `1px solid ${topic.accentColor}20`,
              boxShadow: `0 0 40px ${topic.accentColor}08`,
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: `${topic.accentColor}15`,
                  border: `1px solid ${topic.accentColor}30`,
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={topic.accentColor}
                  strokeWidth="2.5"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h2
                id="key-takeaways-heading"
                className="text-lg font-bold"
                style={{ color: "#e1e4e8" }}
              >
                Key Takeaways
              </h2>
            </div>

            <div
              className="h-px w-full mb-6"
              style={{
                background: `linear-gradient(90deg, ${topic.accentColor}25, transparent)`,
              }}
            />

            <ul className="space-y-4">
              {topic.keyTakeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span
                    className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0 font-mono text-xs font-black"
                    style={{
                      background: `${topic.accentColor}18`,
                      border: `1px solid ${topic.accentColor}35`,
                      color: topic.accentColor,
                    }}
                  >
                    {idx + 1}
                  </span>
                  <p
                    className="text-sm sm:text-base leading-relaxed"
                    style={{ color: "#9ca3af" }}
                  >
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </article>
  );
}

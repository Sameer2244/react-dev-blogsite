import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  getTopicBySlug,
  getRelatedTopics,
  getAllSlugs,
} from "@/app/data/topics";
import Sidebar from "@/app/components/Sidebar";
import TopicContent from "@/app/components/TopicContent";
import SuggestedTopics from "@/app/components/SuggestedTopics";

// Generate all static paths at build time
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// Per-page metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);

  if (!topic) {
    return {
      title: "Topic Not Found",
      description: "This React Shorts topic could not be found.",
    };
  }

  return {
    title: topic.title,
    description: topic.description,
    keywords: [
      "React",
      topic.shortTitle,
      topic.category,
      topic.difficulty,
      "React tutorial",
      "Daily React Shorts",
    ],
    openGraph: {
      title: `${topic.title} | React Devdas Shorts`,
      description: topic.description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: topic.title,
      description: topic.description,
    },
  };
}

// Main page component — async Server Component, awaits params per Next.js 16
export default async function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);

  if (!topic) {
    notFound();
  }

  const relatedTopics = getRelatedTopics(slug);

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Breadcrumb */}
      <nav
        className="mb-6 flex items-center gap-2 font-mono text-xs"
        aria-label="Breadcrumb"
        style={{ color: "rgba(255,255,255,0.25)" }}
      >
        <Link
          href="/"
          className="transition-colors hover:text-white"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          Home
        </Link>
        <span>/</span>
        <span style={{ color: topic.accentColor }}>{topic.shortTitle}</span>
      </nav>

      {/* Two-column layout: Sidebar + Content */}
      <div className="flex gap-8 items-start">
        {/* Left: Sidebar */}
        <Sidebar />

        {/* Right: Main content */}
        <main className="flex-1 min-w-0">
          {/* Topic article */}
          <TopicContent topic={topic} />

          {/* Suggested reading */}
          <SuggestedTopics
            currentSlug={slug}
            relatedTopics={relatedTopics}
          />

          {/* Footer */}
          <footer
            className="mt-16 pt-8 text-center"
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
          >
            <p
              className="font-mono text-xs"
              style={{ color: "rgba(255,255,255,0.18)" }}
            >
              {topic.badge} · React Devdas Shorts ·{" "}
              <a
                href="https://instagram.com/react_devdas"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: topic.accentColor }}
              >
                @react_devdas
              </a>
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}

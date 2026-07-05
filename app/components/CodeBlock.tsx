"use client";

import { useState, useCallback } from "react";
import type { CodeToken } from "@/app/data/topics";

interface CodeBlockProps {
  filename: string;
  lines: CodeToken[][];
  accentColor?: string;
}

export default function CodeBlock({
  filename,
  lines,
  accentColor = "#38bdf8",
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const plainText = lines
    .map((line) => line.map((t) => t.text).join(""))
    .join("\n");

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(plainText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard not available
    }
  }, [plainText]);

  return (
    <div
      className="w-full rounded-xl overflow-hidden"
      style={{
        border: `1px solid rgba(255,255,255,0.08)`,
        background: "rgba(7, 9, 14, 0.92)",
        boxShadow: `0 0 0 1px rgba(0,0,0,0.4), 0 8px 32px rgba(0,0,0,0.4)`,
      }}
    >
      {/* Header Bar */}
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{
          background: "rgba(18, 22, 32, 0.9)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="flex items-center gap-3">
          {/* Traffic lights */}
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
          </div>
          <span
            className="font-mono text-xs"
            style={{ color: "#6b7280" }}
          >
            {filename}
          </span>
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          aria-label="Copy code to clipboard"
          className="flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono transition-all duration-200"
          style={{
            color: copied ? accentColor : "#6b7280",
            background: copied
              ? `${accentColor}15`
              : "rgba(255,255,255,0.03)",
            border: `1px solid ${copied ? accentColor + "30" : "rgba(255,255,255,0.06)"}`,
          }}
        >
          {copied ? (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <div className="overflow-x-auto">
        <pre
          className="px-5 py-4 text-sm leading-7 font-mono"
          style={{ minWidth: "max-content" }}
        >
          {lines.map((line, lineIdx) => (
            <div key={lineIdx} className="flex">
              {/* Line number */}
              <span
                className="select-none text-right mr-4 shrink-0"
                style={{
                  color: "rgba(107, 114, 128, 0.4)",
                  width: "1.5rem",
                  fontSize: "0.8em",
                  lineHeight: "inherit",
                  paddingTop: "0.05em",
                }}
              >
                {lineIdx + 1}
              </span>

              {/* Tokens */}
              <span>
                {line.length === 0 || (line.length === 1 && line[0].text === "") ? (
                  <span>&nbsp;</span>
                ) : (
                  line.map((token, tokenIdx) => (
                    <span
                      key={tokenIdx}
                      style={{
                        color: token.color,
                        fontWeight: token.isBold ? 700 : undefined,
                        textShadow: token.glow
                          ? `0 0 12px ${token.color}80`
                          : undefined,
                      }}
                    >
                      {token.text}
                    </span>
                  ))
                )}
              </span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}

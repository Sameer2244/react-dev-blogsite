"use client";

import { useEffect, useRef } from "react";

interface AdSenseSlotProps {
  /** AdSense slot ID */
  slot?: string;
  /** Display format */
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  /** Width in px (used for mock display) */
  width?: number;
  /** Height in px (used for mock display) */
  height?: number;
  /** Label shown on mock ad in dev mode */
  mockLabel?: string;
  /** Optional className wrapper */
  className?: string;
}

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
const IS_PROD = process.env.NODE_ENV === "production";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdSenseSlot({
  slot = "1234567890",
  format = "auto",
  width = 300,
  height = 250,
  mockLabel = "Advertisement",
  className = "",
}: AdSenseSlotProps) {
  const adRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (!IS_PROD || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // ad blocker or init error — silent fail
    }
  }, []);

  // ── Dev / Mock Mode ────────────────────────────────────────────────────────
  if (!IS_PROD) {
    return (
      <div
        className={`flex flex-col items-center justify-center rounded-xl overflow-hidden relative ${className}`}
        style={{
          width: "100%",
          minHeight: height,
          maxWidth: width,
          margin: "0 auto",
          border: "1px dashed rgba(255,255,255,0.1)",
          background:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 8px)",
        }}
        aria-label={`Ad placeholder: ${mockLabel}`}
        role="img"
      >
        {/* Subtle AD watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{ opacity: 0.04 }}
        >
          <span
            className="font-mono font-black"
            style={{ fontSize: Math.max(height / 3, 24), color: "#fff" }}
          >
            AD
          </span>
        </div>

        {/* Label */}
        <div className="relative flex flex-col items-center gap-2 text-center px-4">
          <div
            className="font-mono text-xs px-3 py-1 rounded-full"
            style={{
              color: "rgba(255,255,255,0.25)",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Mock Ad
          </div>
          <span
            className="font-mono text-xs"
            style={{ color: "rgba(255,255,255,0.15)" }}
          >
            {mockLabel} · {width}×{height}
          </span>
          <span
            className="font-mono text-xs"
            style={{ color: "rgba(56,189,248,0.2)" }}
          >
            slot/{slot}
          </span>
        </div>
      </div>
    );
  }

  // ── Production AdSense ─────────────────────────────────────────────────────
  return (
    <div
      className={`flex items-center justify-center overflow-hidden ${className}`}
      style={{ minHeight: height }}
    >
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block", width: "100%", height }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}

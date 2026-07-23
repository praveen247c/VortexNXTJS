"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Click-to-copy pill used across /branding for colour values and design tokens.
 * Falls back to a hidden textarea + execCommand where the async clipboard API
 * is unavailable (older Safari, non-secure contexts).
 */
export default function CopyChip({
  value,
  label,
  className = "",
  title,
}: {
  value: string;
  /** What the chip shows. Defaults to the value itself. */
  label?: string;
  className?: string;
  title?: string;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const copy = useCallback(async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        const ta = document.createElement("textarea");
        ta.value = value;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1400);
    } catch {
      /* clipboard blocked: leave the chip in its resting state */
    }
  }, [value]);

  return (
    <button
      type="button"
      onClick={copy}
      className={`copy-chip${copied ? " is-copied" : ""} ${className}`.trim()}
      title={title ?? `Copy ${value}`}
      aria-label={`Copy ${value}`}
    >
      <span className="cc-text">{copied ? "Copied" : (label ?? value)}</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {copied ? (
          <path d="M20 6 9 17l-5-5" />
        ) : (
          <>
            <rect x="9" y="9" width="11" height="11" rx="2" />
            <path d="M5 15V5a2 2 0 0 1 2-2h8" />
          </>
        )}
      </svg>
    </button>
  );
}

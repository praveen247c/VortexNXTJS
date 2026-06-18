"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const OPTIONS = [
  {
    main: "AI agents that turn insights into actions across every store you run.",
    sub: "Detect what's broken. Understand why. Fix it safely.",
  },
  {
    main: "Connect your data, tools and AI agents in one command centre that turns insights into actions.",
    sub: "Detect what's broken. Understand why. Fix it safely.",
  },
  {
    main: "Detect. Diagnose. Act. Learn.",
    sub: "AI agents that continuously turn insights into actions across every store you run.",
  },
  {
    main: "From monitoring to action, Vortex IQ uses AI agents to detect issues, uncover opportunities and deploy fixes safely.",
    sub: "Across 200+ connected systems.",
  },
];
const N = OPTIONS.length;
const INTERVAL = 8500;

export default function HeroRotator() {
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [swapping, setSwapping] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const fade = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = useCallback((next: number) => {
    setSwapping(true);
    if (fade.current) clearTimeout(fade.current);
    fade.current = setTimeout(() => {
      setIdx(((next % N) + N) % N);
      setSwapping(false);
    }, 500);
  }, []);

  // randomize start once, after mount (keeps SSR markup stable)
  useEffect(() => {
    setIdx(Math.floor(Math.random() * N));
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) setPlaying(false);
  }, []);

  useEffect(() => {
    if (timer.current) clearInterval(timer.current);
    if (playing) {
      timer.current = setInterval(() => setIdxNext(), INTERVAL);
    }
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing, idx]);

  const setIdxNext = () => go(idx + 1);

  return (
    <>
      <div className={`hero-rotator reveal in${swapping ? " swapping" : ""}`}>
        <p className="lede">{OPTIONS[idx].main}</p>
        <p className="hero-sub">{OPTIONS[idx].sub}</p>
      </div>
      <div className="hero-nav ready reveal in" aria-label="Hero message navigation">
        <button type="button" className="hero-nav-btn" aria-label="Previous message" onClick={() => go(idx - 1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <div className="hero-dots">
          {OPTIONS.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`hero-dot${i === idx ? " active" : ""}`}
              aria-label={`Show message ${i + 1} of ${N}`}
              aria-current={i === idx ? "true" : "false"}
              onClick={() => go(i)}
            />
          ))}
        </div>
        <button type="button" className="hero-nav-btn" aria-label="Next message" onClick={() => go(idx + 1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
        <button
          type="button"
          className="hero-nav-btn hero-play"
          aria-label={playing ? "Pause auto-rotation" : "Play auto-rotation"}
          aria-pressed={playing}
          onClick={() => setPlaying((p) => !p)}
        >
          {playing ? (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6.5" y="5" width="3.5" height="14" rx="1" /><rect x="14" y="5" width="3.5" height="14" rx="1" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 5 L19 12 L7 19 Z" /></svg>
          )}
        </button>
      </div>
    </>
  );
}

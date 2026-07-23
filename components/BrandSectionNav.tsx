"use client";

import { useEffect, useRef, useState } from "react";

type Section = { id: string; label: string };

/**
 * Sticky chapter rail for /branding. Highlights the section currently under the
 * header and keeps the active chip scrolled into view on narrow screens.
 */
export default function BrandSectionNav({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");
  const railRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const nodes = sections
      .map((s) => document.getElementById(s.id))
      .filter((n): n is HTMLElement => Boolean(n));
    if (!nodes.length) return;

    // Trigger line sits just under the fixed header + the rail itself.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-160px 0px -70% 0px", threshold: 0 },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const chip = rail.querySelector<HTMLAnchorElement>(`a[href="#${active}"]`);
    if (!chip) return;
    const left = chip.offsetLeft - rail.clientWidth / 2 + chip.clientWidth / 2;
    rail.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
  }, [active]);

  return (
    <nav className="brand-rail" aria-label="Brand book sections">
      <div className="container">
        <div className="brand-rail-track" ref={railRef}>
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={active === s.id ? "is-active" : undefined}
              aria-current={active === s.id ? "true" : undefined}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { NAV, LOGIN_HREF, DEMO_HREF, LOGO_SRC, type MegaItem } from "./nav.config";

// Mega-menu / mobile icons — the actual SVG assets from vortexiq.ai (AI OS icons
// are purple gradients; Solutions/Resources are white). The three not published
// on the live site (integrations, stories, trust) are matching local white SVGs.
const ICON_SRC: Record<string, string> = {
  nerve: "/assets/icons/nerve.svg",
  mind: "/assets/icons/mind.svg",
  ask: "/assets/icons/ask.svg",
  apps: "/assets/icons/apps.svg",
  actions: "/assets/icons/actions.svg",
  memory: "/assets/icons/memory.svg",
  merchants: "/assets/icons/merchants.svg",
  agencies: "/assets/icons/agencies.svg",
  partners: "/assets/icons/partners.svg",
  enablement: "/assets/icons/enablement.svg",
  integrations: "/assets/icons/integrations.svg",
  blog: "/assets/icons/blog.svg",
  stories: "/assets/icons/stories.svg",
  about: "/assets/icons/about.svg",
  careers: "/assets/icons/careers.svg",
  trust: "/assets/icons/trust.svg",
  contact: "/assets/icons/contact.svg",
  academy: "/assets/icons/academy.svg",
};

/* eslint-disable @next/next/no-img-element */
function Icon({ icon, className }: { icon?: string; className: string }) {
  return <span className={className}>{icon && ICON_SRC[icon] ? <img src={ICON_SRC[icon]} alt="" /> : null}</span>;
}
/* eslint-enable @next/next/no-img-element */

function MegaRow({ item }: { item: MegaItem }) {
  const inner = (
    <>
      <Icon icon={item.icon} className="mega-ic" />
      <span className="mega-tx">
        <b>{item.label}</b>
        {item.desc ? <span>{item.desc}</span> : null}
      </span>
    </>
  );
  return item.external ? (
    <a className="mega-row" href={item.href} target="_blank" rel="noopener noreferrer">{inner}</a>
  ) : (
    <Link className="mega-row" href={item.href}>{inner}</Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const enter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(label);
  };
  const leave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(null), 140);
  };

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
    <header className="nav" onMouseLeave={leave}>
      <div className="container">
        <Link className="brandlink" href="/" onClick={() => setMobileOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO_SRC} alt="Vortex IQ" style={{ height: 39 }} />
        </Link>

        <ul className="navmenu">
          {NAV.map((entry) =>
            entry.panel ? (
              <li key={entry.label} onMouseEnter={() => enter(entry.label)}>
                <button className="navitem" data-open={open === entry.label} aria-expanded={open === entry.label}>
                  {entry.label}
                  <span className="ind" />
                </button>
              </li>
            ) : (
              <li key={entry.label} onMouseEnter={() => enter(entry.label)}>
                {entry.external ? (
                  <a className="navitem" href={entry.href} target="_blank" rel="noopener noreferrer">{entry.label}</a>
                ) : (
                  <Link className="navitem" href={entry.href!}>{entry.label}</Link>
                )}
              </li>
            )
          )}
        </ul>

        <div className="nav-actions">
          <a className="login" href={LOGIN_HREF} target="_blank" rel="noopener noreferrer">Login</a>
          <a className="btn btn--sm" href={DEMO_HREF}>Demo</a>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
            )}
          </button>
        </div>

        {/* desktop mega panel */}
        {NAV.map((entry) =>
          entry.panel && open === entry.label ? (
            <div
              key={entry.label}
              className={`mega ${entry.panel.layout === "split" ? "mega--split" : "mega--cols"}`}
              onMouseEnter={() => enter(entry.label)}
            >
              {entry.panel.overview && entry.panel.layout === "split" ? (
                <div className="mega-overview">
                  <h3>{entry.panel.overview.title}</h3>
                  <p>{entry.panel.overview.text}</p>
                  <Link className="more" href={entry.panel.overview.moreHref}>{entry.panel.overview.moreLabel}</Link>
                  {entry.panel.overview.works ? (
                    <div className="mega-works">
                      <span className="lbl">{entry.panel.overview.works.label}</span>
                      {entry.panel.overview.works.items.map((w) => (
                        <Link key={w.label} href={w.href}>{w.label}</Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : null}
              <div className="mega-list">
                {entry.panel.items.map((it) => (
                  <MegaRow key={it.label} item={it} />
                ))}
              </div>
            </div>
          ) : null
        )}
      </div>
    </header>

      {/* mobile drawer */}
      {mobileOpen ? (
        <div className="mobile-menu">
          <div className="container">
            {NAV.map((entry) =>
              entry.panel ? (
                <div className="m-group" key={entry.label}>
                  <button
                    className="m-grouphead"
                    data-open={mobileGroup === entry.label}
                    onClick={() => setMobileGroup((g) => (g === entry.label ? null : entry.label))}
                  >
                    {entry.label}
                    <svg className="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                  </button>
                  {mobileGroup === entry.label ? (
                    <div className="m-sub">
                      {entry.panel.items.map((it) => {
                        const row = (
                          <>
                            <Icon icon={it.icon} className="m-ic" />
                            <span className="m-tx">
                              <b>{it.label}</b>
                              {it.desc ? <span>{it.desc}</span> : null}
                            </span>
                          </>
                        );
                        return it.external ? (
                          <a key={it.label} className="m-row" href={it.href} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>
                            {row}
                          </a>
                        ) : (
                          <Link key={it.label} className="m-row" href={it.href} onClick={() => setMobileOpen(false)}>
                            {row}
                          </Link>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link key={entry.label} className="m-link" href={entry.href!} onClick={() => setMobileOpen(false)}>
                  {entry.label}
                  <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </Link>
              )
            )}
            <div className="m-cta">
              <a className="btn btn--ghost" href={LOGIN_HREF} target="_blank" rel="noopener noreferrer">Login</a>
              <a className="btn" href={DEMO_HREF}>Demo</a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

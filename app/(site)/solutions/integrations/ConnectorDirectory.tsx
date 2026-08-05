"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CONNECTORS, CONNECTOR_CATEGORIES, CONNECTOR_STATS } from "./connectors";

function monogram(name: string): string {
  const words = name.replace(/[^A-Za-z0-9 ]/g, " ").trim().split(/\s+/).filter(Boolean);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  return (name.replace(/[^A-Za-z0-9]/g, "").slice(0, 2) || "?").toUpperCase();
}

// One connector tile. Renders as a link to its docs when documented, otherwise a
// plain tile. Both are in the server-rendered HTML so the whole list is crawlable.
function Tile({ name, desc, docUrl }: { name: string; desc: string; docUrl?: string }) {
  const inner = (
    <>
      <span className="int-dir-mono" aria-hidden="true">{monogram(name)}</span>
      <span className="int-dir-body">
        <span className="int-dir-name">{name}</span>
        <span className="int-dir-desc">{desc}</span>
      </span>
      {docUrl ? <span className="int-dir-arrow" aria-hidden="true">&rarr;</span> : null}
    </>
  );

  if (docUrl) {
    return (
      <a
        className="int-dir-tile int-dir-tile--link"
        href={docUrl}
        target="_blank"
        rel="noopener noreferrer"
        title={`${name} documentation`}
      >
        {inner}
      </a>
    );
  }
  return <div className="int-dir-tile">{inner}</div>;
}

export default function ConnectorDirectory() {
  const [cat, setCat] = useState<string>("All");
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();

  const list = useMemo(
    () =>
      CONNECTORS.filter(
        (c) =>
          (cat === "All" || c.category === cat) &&
          (query === "" ||
            c.name.toLowerCase().includes(query) ||
            c.desc.toLowerCase().includes(query)),
      ),
    [cat, query],
  );

  return (
    <div className="int-dir reveal in">
      <div className="int-dir-controls">
        <input
          className="int-dir-search"
          type="search"
          placeholder="Search integrations..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
          aria-label="Search integrations"
        />
        <div className="int-dir-cats">
          <button type="button" className={cat === "All" ? "on" : ""} onClick={() => setCat("All")}>
            All <span>{CONNECTOR_STATS.total}</span>
          </button>
          {CONNECTOR_CATEGORIES.map((c) => (
            <button
              type="button"
              key={c.key}
              className={cat === c.key ? "on" : ""}
              onClick={() => setCat(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {list.length > 0 ? (
        <div className="int-dir-grid">
          {list.map((c) => (
            <Tile key={c.name} name={c.name} desc={c.desc} docUrl={c.docUrl} />
          ))}
        </div>
      ) : (
        <p className="int-dir-empty muted">
          No integrations match that search. <Link href="/contact-us">Request one &rarr;</Link>
        </p>
      )}

      <p className="int-dir-foot muted">
        Documented connectors link to their live docs. {CONNECTOR_STATS.documented} of{" "}
        {CONNECTOR_STATS.total} have a documentation page today, and we add more continuously.
      </p>
    </div>
  );
}

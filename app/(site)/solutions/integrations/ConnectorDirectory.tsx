"use client";

import { useState } from "react";
import Link from "next/link";
import { CONNECTORS, CONNECTOR_CATEGORIES, CONNECTOR_STATS } from "./connectors";

function monogram(name: string): string {
  const words = name.replace(/[^A-Za-z0-9 ]/g, " ").trim().split(/\s+/).filter(Boolean);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  return (name.replace(/[^A-Za-z0-9]/g, "").slice(0, 2) || "?").toUpperCase();
}

export default function ConnectorDirectory() {
  const [cat, setCat] = useState<string>("All");
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();

  const list = CONNECTORS.filter(
    (c) =>
      (cat === "All" || c.category === cat) &&
      (query === "" || c.name.toLowerCase().includes(query))
  );

  return (
    <div className="int-dir reveal">
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
            <button type="button" key={c} className={cat === c ? "on" : ""} onClick={() => setCat(c)}>
              {c}
            </button>
          ))}
        </div>
      </div>

      {list.length > 0 ? (
        <div className="int-dir-grid">
          {list.map((c) => (
            <div className="int-dir-tile" key={c.name}>
              <span className="int-dir-mono" aria-hidden="true">{monogram(c.name)}</span>
              <span className="int-dir-name">{c.name}</span>
              {c.status === "planned" ? <span className="int-dir-soon">Soon</span> : null}
            </div>
          ))}
        </div>
      ) : (
        <p className="int-dir-empty muted">
          No integrations match that search. <Link href="/contact-us">Request one →</Link>
        </p>
      )}
    </div>
  );
}

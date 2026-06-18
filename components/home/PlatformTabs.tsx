"use client";

import { useRef, useState } from "react";

const TABS = [
  { id: "detect", step: "01 · Detect", label: "Nerve Centre" },
  { id: "diagnose", step: "02 · Diagnose", label: "Vortex Mind + Ask Viq" },
  { id: "cross", step: "Cross-channel", label: "Cross-Channel Insights" },
  { id: "act", step: "03–04 · Act + Deploy", label: "Actions + Vortex Apps" },
  { id: "learn", step: "05 · Learn", label: "Vortex Memory" },
];

export default function PlatformTabs() {
  const [active, setActive] = useState("detect");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: React.KeyboardEvent, i: number) => {
    let n = -1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") n = (i + 1) % TABS.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") n = (i - 1 + TABS.length) % TABS.length;
    else if (e.key === "Home") n = 0;
    else if (e.key === "End") n = TABS.length - 1;
    if (n >= 0) {
      e.preventDefault();
      setActive(TABS[n].id);
      tabRefs.current[n]?.focus();
    }
  };

  return (
    <div className="container tabs reveal">
      <div className="tablist" role="tablist" aria-label="The platform behind each step of the loop">
        {TABS.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => { tabRefs.current[i] = el; }}
            className="tab"
            role="tab"
            id={`tab-${t.id}`}
            aria-controls={`panel-${t.id}`}
            aria-selected={active === t.id}
            tabIndex={active === t.id ? 0 : -1}
            onClick={() => setActive(t.id)}
            onKeyDown={(e) => onKey(e, i)}
          >
            <span className="t-step">{t.step}</span>
            <span className="t-label">{t.label}</span>
          </button>
        ))}
      </div>

      <div className="tabpanels">
        {/* Detect */}
        <div className={`tabpanel${active === "detect" ? " active" : ""}`} id="panel-detect" role="tabpanel" aria-labelledby="tab-detect">
          <div className="split">
            <div>
              <span className="tag">01 / Detect · Nerve Centre</span>
              <h2>Catch what&apos;s breaking before your customers do.</h2>
              <p className="lede" style={{ marginTop: "1.2rem" }}>The Nerve Centre watches every KPI live across 200+ connectors and tells you the moment something breaks, drops or spikes: revenue, ad spend, conversion, inventory, payments and site health, all in one pane instead of a dozen browser tabs.</p>
              <p className="muted" style={{ marginTop: "1rem" }}>Every alert is one finding that flows straight into diagnosis and a fix, not a notification you screenshot and forget.</p>
            </div>
            <div className="grid" style={{ gap: ".9rem" }}>
              <div className="minicard"><span className="name">Add-to-cart rate</span><span className="chip chip--danger">Down 8% · declining</span></div>
              <div className="minicard"><span className="name">Payment decline rate</span><span className="chip chip--danger">Rising · anomaly</span></div>
              <div className="minicard"><span className="name">Largest Contentful Paint</span><span className="chip chip--danger">Over threshold</span></div>
              <div className="minicard"><span className="name">Checkout completion</span><span className="chip chip--ok">Stable</span></div>
              <p className="stat-label" style={{ textAlign: "center", marginTop: ".4rem" }}>Thousands of live cards · representative values</p>
            </div>
          </div>
        </div>

        {/* Diagnose */}
        <div className={`tabpanel${active === "diagnose" ? " active" : ""}`} id="panel-diagnose" role="tabpanel" aria-labelledby="tab-diagnose">
          <div className="split">
            <div className="grid" style={{ gap: ".9rem", order: 2 }}>
              <div className="card card--soft" style={{ padding: "1.4rem" }}><h3 style={{ fontSize: "1rem" }}>Daily Revenue Leakage</h3><p className="muted" style={{ fontSize: ".9rem" }}>AI-written report. Where revenue is leaking today, with the root cause attached.</p></div>
              <div className="card card--soft" style={{ padding: "1.4rem" }}><h3 style={{ fontSize: "1rem" }}>Google Ads Revenue Intelligence</h3><p className="muted" style={{ fontSize: ".9rem" }}>Which products are losing money on ads, and why.</p></div>
              <div className="chat">
                <div className="line"><span className="who you">You</span> &nbsp;Which products are losing money on ads this week?</div>
                <div className="line"><span className="who viq">Viq</span> &nbsp;Here are the SKUs spending above target with no return.</div>
                <div className="src">Sourced from: Google Ads · Inventory · Orders</div>
              </div>
            </div>
            <div>
              <span className="tag">02 / Diagnose · Vortex Mind + Ask Viq</span>
              <h2>Understand why, in plain English.</h2>
              <p className="lede" style={{ marginTop: "1.2rem" }}>Detecting a drop is easy. Knowing why is the hard part, and it&apos;s where most tools hand you a chart and walk away. Vortex Mind walks the connector graph to find the root cause and writes the report, so you get the answer, not homework.</p>
              <p className="muted" style={{ marginTop: "1rem" }}>Then Ask Viq lets anyone ask a question in plain English, with every answer cited back to the graph. The intern and the CEO get the same straight answer from the same source of truth.</p>
            </div>
          </div>
        </div>

        {/* Cross-channel */}
        <div className={`tabpanel${active === "cross" ? " active" : ""}`} id="panel-cross" role="tabpanel" aria-labelledby="tab-cross">
          <div>
            <span className="tag">The findings no single tool can compute</span>
            <h2 style={{ maxWidth: "20ch" }}>Cross-channel kill-shots: the money that leaks between channels.</h2>
            <p className="lede" style={{ margin: "1.2rem 0 2.4rem" }}>Most tools watch one channel at a time, so they miss what leaks between them. Vortex IQ fuses two or more connectors into one finding a single tool physically cannot see, then attaches the revenue at stake.</p>
          </div>
          <div className="grid grid-3">
            <div className="card"><span className="chip chip--brand" style={{ marginBottom: "1rem" }}>Google Ads + Inventory</span><h3 style={{ marginTop: ".4rem" }}>Active ads on out-of-stock SKUs</h3><p style={{ marginTop: ".8rem" }}><span className="chip chip--danger">Revenue at risk</span></p></div>
            <div className="card"><span className="chip chip--brand" style={{ marginBottom: "1rem" }}>Stripe + Klaviyo</span><h3 style={{ marginTop: ".4rem" }}>Card declines on email-recovery customers</h3><p style={{ marginTop: ".8rem" }}><span className="chip chip--danger">Revenue at risk</span></p></div>
            <div className="card"><span className="chip chip--brand" style={{ marginBottom: "1rem" }}>Inventory + Ad platforms</span><h3 style={{ marginTop: ".4rem" }}>Dead stock soaking up live ad spend</h3><p style={{ marginTop: ".8rem" }}><span className="chip chip--danger">Revenue at risk</span></p></div>
          </div>
          <p className="stat-label" style={{ marginTop: "1.6rem", color: "var(--brand-purple)" }}>Computable only on one graph that holds every channel at once. Figures shown are illustrative.</p>
        </div>

        {/* Act + Deploy */}
        <div className={`tabpanel${active === "act" ? " active" : ""}`} id="panel-act" role="tabpanel" aria-labelledby="tab-act">
          <div className="split">
            <div>
              <span className="tag">03–04 / Act + Deploy · Actions + Vortex Apps</span>
              <h2>Act on findings. Ship safely. Undo in one click.</h2>
              <p className="lede" style={{ marginTop: "1.2rem" }}>Knowing is not fixing. Actions turns every finding into real work on a Kanban board with owners and due dates, runs the SEO &amp; GEO engine on a schedule, and edits thousands of products in a single pass. It syncs both ways with the tools your team already lives in.</p>
              <p className="muted" style={{ marginTop: "1rem" }}>Then Vortex Apps makes that autonomy safe: preview on StagingPro, approve, ship, and roll back in one click with RollbackPro.</p>
            </div>
            <div className="grid" style={{ gap: ".9rem" }}>
              <div className="card card--soft" style={{ padding: "1.4rem" }}><h3 style={{ fontSize: "1rem" }}>StagingPro</h3><p className="muted" style={{ fontSize: ".9rem" }}>Production-parity staging to preview every change before it goes live.</p></div>
              <div className="card card--soft" style={{ padding: "1.4rem" }}><h3 style={{ fontSize: "1rem" }}>RollbackPro</h3><p className="muted" style={{ fontSize: ".9rem" }}>Continuous backup and one-click rollback.</p></div>
              <div className="card card--soft" style={{ padding: "1.4rem" }}><h3 style={{ fontSize: "1rem" }}>App Builder</h3><p className="muted" style={{ fontSize: ".9rem" }}>An agent builds custom business-operations workflows for your store.</p></div>
              <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap", alignItems: "center" }}><span className="chip chip--brand">Bidirectional sync</span><span className="chip">Jira</span><span className="chip">Asana</span><span className="chip">Linear</span></div>
            </div>
          </div>
        </div>

        {/* Learn */}
        <div className={`tabpanel${active === "learn" ? " active" : ""}`} id="panel-learn" role="tabpanel" aria-labelledby="tab-learn">
          <div className="split">
            <div className="grid" style={{ order: 2 }}>
              <div className="card card--brand" style={{ padding: "2.4rem" }}>
                <h3 style={{ fontSize: "1rem", color: "#fff" }}>Vortex Memory</h3>
                <p style={{ marginTop: ".6rem", color: "rgba(255,255,255,.8)" }}>The one place every connector, finding, fix and decision is remembered over time, so Vortex Mind diagnoses faster on every store, every report and every day.</p>
                <p className="stat-label" style={{ marginTop: "1.4rem" }}>Mind reasons. Memory remembers. Together they compound.</p>
              </div>
            </div>
            <div>
              <span className="tag">05 / Learn · Vortex Memory</span>
              <h2>The longer you run it, the sharper it gets.</h2>
              <p className="lede" style={{ marginTop: "1.2rem" }}>The loop closes here and feeds straight back into detection. Vortex Memory is the moat underneath everything: it&apos;s why the answer gets better every time you ask, and why the second fix is always faster than the first.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

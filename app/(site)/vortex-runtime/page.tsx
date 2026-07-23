import type { Metadata } from "next";
import { pageOpenGraph } from "@/lib/seo";
import RuntimeAccessForm from "./RuntimeAccessForm";

const TITLE = "Vortex Runtime | The fair-code AI OS you run yourself";
const DESCRIPTION =
  "Vortex Runtime is the fair-code, source-available AI operating system for ecommerce. Self-host in minutes: a crew of agents that watch your store, explain what is wrong, and fix it, with every action staged, human-approved and reversible. In private validation.";

export const metadata: Metadata = {
  alternates: { canonical: "/vortex-runtime" },
  title: TITLE,
  description: DESCRIPTION,
  openGraph: pageOpenGraph({
    title: TITLE,
    description: DESCRIPTION,
    path: "/vortex-runtime",
  }),
};

// All styles are scoped under .vrt so nothing leaks into the rest of the site.
// The page is light-only, to match the site (which has no dark mode).
const CSS = `
.vrt{
  --bg:#ffffff;--bg-tint:#faf8fe;--panel:#f4f1fb;--card:#ffffff;--ink:#17122a;--body:#4d4661;--faded:#8a819e;
  --line:#ebe6f6;--line-strong:#ddd5ef;--brand:#5529d6;--brand-ink:#4a1fc4;--brand-2:#8a5cf6;--brand-soft:#efe9fd;
  --ok:#0f8a6a;--ok-soft:#e4f6ef;--warn:#b26a09;--warn-soft:#fbeed6;--sky:#1f6fd6;--sky-soft:#e6f0fc;
  --term-bg:#160f28;--term-ink:#e8e2f7;--term-dim:#9c93b6;--term-green:#57d9a3;--term-purple:#b79cff;
  --vmono:ui-monospace,"Cascadia Code",Consolas,"SF Mono",monospace;--vrad:16px;
  color:var(--body);line-height:1.6;
}
.vrt *{box-sizing:border-box}
.vrt .wrap{max-width:70rem;margin:0 auto;padding:0 24px}
.vrt a{color:inherit;text-decoration:none}
.vrt h1,.vrt h2,.vrt h3{color:var(--ink);letter-spacing:-.02em;margin:0}
.vrt p{margin:0}
.vrt .mono{font-family:var(--vmono)}
.vrt code{font-family:var(--vmono);font-size:.86em;background:var(--panel);border:1px solid var(--line);border-radius:5px;padding:1px 5px;color:var(--ink)}
.vrt section{padding:70px 0}
.vrt .eyebrow{font-family:var(--vmono);font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;color:var(--brand-ink);display:inline-flex;align-items:center;gap:10px;margin-bottom:16px}
.vrt .eyebrow::before{content:"";width:1.5rem;height:2px;background:var(--brand);border-radius:2px}
.vrt h2{font-size:clamp(1.7rem,3.4vw,2.35rem);line-height:1.08;font-weight:800;text-wrap:balance}
.vrt .sub{font-size:1.08rem;color:var(--body);max-width:60ch;margin-top:14px}
.vrt .hero{padding:52px 0 40px;position:relative;overflow:hidden}
.vrt .hero .grid{display:grid;gap:40px;align-items:center}
@media(min-width:900px){.vrt .hero .grid{grid-template-columns:1.05fr .95fr}}
.vrt .h-eyebrow{display:inline-flex;flex-wrap:wrap;align-items:center;gap:8px;font-family:var(--vmono);font-size:.74rem;letter-spacing:.04em;color:var(--faded);margin-bottom:18px}
.vrt .h-eyebrow b{color:var(--brand-ink)}
.vrt .tag{font-family:var(--vmono);font-size:11px;padding:3px 9px;border-radius:20px;border:1px solid var(--line-strong);color:var(--body)}
.vrt .status{display:inline-flex;align-items:center;gap:7px;font-family:var(--vmono);font-size:11px;font-weight:600;color:var(--warn);background:var(--warn-soft);border:1px solid color-mix(in srgb,var(--warn) 40%,transparent);padding:4px 10px;border-radius:20px}
.vrt .status .dot{width:6px;height:6px;border-radius:50%;background:var(--warn)}
.vrt h1{font-size:clamp(2.2rem,5vw,3.3rem);line-height:1.04;font-weight:850;text-wrap:balance}
.vrt h1 .g{background:linear-gradient(100deg,var(--brand),var(--brand-2));-webkit-background-clip:text;background-clip:text;color:transparent}
.vrt .hero .lede{font-size:1.14rem;color:var(--body);max-width:44ch;margin:18px 0 14px}
.vrt .hero .subhook{display:inline-block;font-size:.98rem;color:var(--brand-ink);background:var(--brand-soft);border:1px solid color-mix(in srgb,var(--brand) 24%,transparent);border-radius:11px;padding:9px 14px;margin:0 0 22px}
.vrt .hero .subhook b{color:var(--brand-ink);font-weight:750}
.vrt .cta{display:flex;flex-wrap:wrap;gap:12px;align-items:center}
.vrt .hero .micro{font-family:var(--vmono);font-size:11.5px;color:var(--faded);margin-top:16px}
.vrt .btn{display:inline-flex;align-items:center;gap:8px;font-weight:650;font-size:.94rem;border-radius:11px;padding:11px 18px;cursor:pointer;border:1px solid transparent;transition:transform .12s,box-shadow .12s;font-family:inherit}
.vrt .btn.primary{background:var(--brand);color:#fff;box-shadow:0 6px 18px -6px color-mix(in srgb,var(--brand) 70%,transparent)}
.vrt .btn.primary:hover{transform:translateY(-1px)}
.vrt .btn.primary:disabled{opacity:.65;cursor:default;transform:none}
.vrt .btn.ghost{background:transparent;color:var(--ink);border-color:var(--line-strong)}
.vrt .btn.ghost:hover{border-color:var(--brand);color:var(--brand-ink)}
.vrt .term{background:var(--term-bg);border:1px solid #2c2147;border-radius:14px;overflow:hidden;box-shadow:0 30px 60px -30px rgba(30,10,80,.5);font-family:var(--vmono);font-size:13.5px;line-height:1.85}
.vrt .term .top{display:flex;align-items:center;gap:7px;padding:11px 14px;border-bottom:1px solid #2c2147;background:#120c22}
.vrt .term .top i{width:11px;height:11px;border-radius:50%;display:inline-block}
.vrt .term .top .t{margin-left:10px;color:var(--term-dim);font-size:11.5px}
.vrt .term .body{padding:16px 18px;color:var(--term-ink)}
.vrt .term .body .ln{white-space:pre-wrap}
.vrt .term .p{color:var(--term-purple)}
.vrt .term .d{color:var(--term-dim)}
.vrt .term .g{color:var(--term-green)}
.vrt .term .cap{padding:10px 18px;border-top:1px solid #2c2147;color:var(--term-dim);font-size:11px;background:#120c22}
.vrt .cards{display:grid;gap:16px;margin-top:32px;grid-template-columns:repeat(auto-fit,minmax(220px,1fr))}
.vrt .card{background:var(--card);border:1px solid var(--line);border-radius:var(--vrad);padding:22px}
.vrt .card h3{font-size:1.06rem;font-weight:750;margin-bottom:7px}
.vrt .card p{font-size:.94rem;color:var(--body)}
.vrt .card .lbl{font-family:var(--vmono);font-size:10.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--faded);margin-bottom:12px}
.vrt .tint{background:var(--bg-tint)}
.vrt .panelsec{background:var(--panel)}
.vrt .pipe{display:flex;flex-wrap:wrap;gap:10px;margin:26px 0 6px;font-family:var(--vmono);font-size:.82rem}
.vrt .pipe span{padding:7px 14px;border-radius:10px;background:var(--brand-soft);color:var(--brand-ink);border:1px solid color-mix(in srgb,var(--brand) 24%,transparent);font-weight:600}
.vrt .pipe .ar{align-self:center;color:var(--faded);padding:0;background:none;border:none}
.vrt .crew{display:grid;gap:12px;margin-top:28px}
@media(min-width:680px){.vrt .crew{grid-template-columns:1fr 1fr}}
.vrt .desk{display:flex;gap:14px;align-items:flex-start;background:var(--card);border:1px solid var(--line);border-radius:14px;padding:16px 18px}
.vrt .desk .av{width:40px;height:40px;border-radius:10px;flex:0 0 auto;display:inline-flex;align-items:center;justify-content:center;font-weight:800;color:#fff;font-size:1rem}
.vrt .desk .n{font-weight:750;color:var(--ink);display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.vrt .desk .role{font-family:var(--vmono);font-size:10px;letter-spacing:.05em;text-transform:uppercase;padding:2px 7px;border-radius:20px}
.vrt .role.det{background:var(--sky-soft);color:var(--sky)}
.vrt .role.ung{background:var(--ok-soft);color:var(--ok)}
.vrt .role.gat{background:var(--warn-soft);color:var(--warn)}
.vrt .role.mem{background:var(--brand-soft);color:var(--brand-ink)}
.vrt .desk p{font-size:.9rem;margin-top:5px;color:var(--body)}
.vrt .post{display:grid;gap:14px;margin-top:28px}
@media(min-width:720px){.vrt .post{grid-template-columns:1fr 1fr}}
.vrt .post .p{border:1px solid var(--line);border-radius:14px;padding:18px 20px;background:var(--card)}
.vrt .post .p.feat{border-color:color-mix(in srgb,var(--brand) 45%,transparent);background:var(--bg-tint)}
.vrt .post .p .h{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:6px}
.vrt .post .p .h b{color:var(--ink);font-size:1.02rem}
.vrt .post .p .h .k{font-family:var(--vmono);font-size:10px;color:var(--faded);text-transform:uppercase;letter-spacing:.05em}
.vrt .post .p p{font-size:.9rem}
.vrt .seal{display:inline-flex;align-items:center;gap:7px;font-family:var(--vmono);font-size:11px;color:var(--ok);background:var(--ok-soft);border:1px solid color-mix(in srgb,var(--ok) 35%,transparent);padding:3px 10px;border-radius:20px}
.vrt .honest{font-family:var(--vmono);font-size:11.5px;color:var(--faded)}
.vrt .fc{display:grid;gap:16px;margin-top:28px}
@media(min-width:760px){.vrt .fc{grid-template-columns:1fr 1fr}}
.vrt .fc .col{border:1px solid var(--line);border-radius:var(--vrad);padding:22px 24px;background:var(--card)}
.vrt .fc .col.free{border-top:3px solid var(--ok)}
.vrt .fc .col.cloud{border-top:3px solid var(--brand)}
.vrt .fc .col h3{font-size:1.12rem;margin-bottom:4px}
.vrt .fc ul{margin:14px 0 0;padding-left:0;list-style:none}
.vrt .fc li{display:flex;gap:10px;font-size:.93rem;margin:9px 0;color:var(--body)}
.vrt .fc li::before{content:"";width:7px;height:7px;border-radius:2px;margin-top:7px;flex:0 0 auto}
.vrt .fc .free li::before{background:var(--ok)}
.vrt .fc .cloud li::before{background:var(--brand)}
.vrt .push{margin-top:18px;font-family:var(--vmono);font-size:12px;color:var(--faded);background:var(--panel);border:1px dashed var(--line-strong);border-radius:10px;padding:10px 13px}
.vrt .lic{border:1px solid var(--line-strong);border-radius:var(--vrad);padding:24px 26px;background:var(--bg-tint);margin-top:8px}
.vrt .lic .name{font-family:var(--vmono);font-size:.82rem;color:var(--brand-ink);letter-spacing:.03em}
.vrt .lic .big{font-size:1.3rem;font-weight:800;color:var(--ink);margin:8px 0 12px;letter-spacing:-.015em}
.vrt .lic .two{display:grid;gap:12px;margin-top:16px}
@media(min-width:640px){.vrt .lic .two{grid-template-columns:1fr 1fr}}
.vrt .lic .two div{font-size:.92rem}
.vrt .lic .yes{color:var(--ok);font-weight:700}
.vrt .lic .no{color:var(--warn);font-weight:700}
.vrt .final{background:linear-gradient(135deg,color-mix(in srgb,var(--brand) 14%,var(--bg)),var(--bg) 70%);border:1px solid var(--line);border-radius:22px;padding:48px 40px;text-align:center;margin:20px 0}
.vrt .final h2{font-size:clamp(1.7rem,3.6vw,2.4rem)}
.vrt .final .fp{max-width:52ch;margin:14px auto 26px;color:var(--body);font-size:1.05rem}
.vrt .capture{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;max-width:30rem;margin:0 auto}
.vrt .capture input{flex:1 1 220px;min-width:0;padding:12px 15px;border-radius:11px;border:1px solid var(--line-strong);background:var(--card);color:var(--ink);font-size:.95rem;font-family:inherit}
.vrt .capture input:focus{outline:2px solid color-mix(in srgb,var(--brand) 45%,transparent);outline-offset:1px;border-color:var(--brand)}
.vrt .capture-done{max-width:34rem;margin:10px auto 0;color:var(--ok);font-weight:650}
.vrt .capture-error{max-width:34rem;margin:12px auto 0;color:var(--warn);font-size:.92rem}
.vrt .final .disc{font-family:var(--vmono);font-size:11.5px;color:var(--faded);margin-top:18px}
`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <main className="vrt">
        {/* Hero */}
        <header className="hero">
          <div className="wrap grid">
            <div>
              <div className="h-eyebrow">
                <span className="tag">fair-code</span>
                <span className="tag">source-available</span>
                <b>Vortex Runtime</b>
                <span className="status">
                  <span className="dot" />
                  In private validation
                </span>
              </div>
              <h1>
                The AI operating system for ecommerce, <span className="g">running on your own machine.</span>
              </h1>
              <p className="lede">
                A crew of agents that watch your store, explain what is wrong, and fix it. Every action staged,
                human-approved and reversible. Self-host in minutes: one command, and it runs in your browser.
                Source-available; your data never leaves.
              </p>
              <p className="subhook">
                Already building in <b>n8n</b>? Import your workflow and compile it into an agent in one click.
              </p>
              <div className="cta">
                <a className="btn primary" href="#access">
                  Request early access
                </a>
                <a className="btn ghost" href="#run">
                  See how it runs
                </a>
              </div>
              <p className="micro">
                One command · runs at localhost · SQLite on disk · no telemetry · bring your own LLM key
              </p>
            </div>
            <div>
              <div className="term" role="img" aria-label="Terminal showing Vortex Runtime starting a local server">
                <div className="top">
                  <i style={{ background: "#ff5f57" }} />
                  <i style={{ background: "#febc2e" }} />
                  <i style={{ background: "#28c840" }} />
                  <span className="t">merchant@localhost · vortex-runtime</span>
                </div>
                <div className="body">
                  <div className="ln d"># one command, no account, no cloud</div>
                  <div className="ln">
                    <span className="p">$</span> npx vortex-runtime
                  </div>
                  <div className="ln">&nbsp;</div>
                  <div className="ln">
                    <span className="g">✔</span> Vortex Runtime ready
                  </div>
                  <div className="ln">
                    <span className="g">✔</span> Crew office → <span className="p">http://127.0.0.1:8420</span>
                  </div>
                  <div className="ln">
                    <span className="g">✔</span> Scout, Kai, Rai &amp; Memo reporting for work
                  </div>
                  <div className="ln d">&nbsp;&nbsp;audit running… 143 findings · 11 fixable</div>
                  <div className="ln d">&nbsp;&nbsp;data: ~/.vortex-runtime (local) · no telemetry</div>
                </div>
                <div className="cap">Install commands go live with the public release. Today: private validation.</div>
              </div>
            </div>
          </div>
        </header>

        {/* n8n on-ramp */}
        <section id="n8n" className="tint">
          <div className="wrap">
            <p className="eyebrow">The on-ramp</p>
            <h2>Your n8n workflows, compiled into agents.</h2>
            <p className="sub">
              Paste any n8n workflow JSON and Vortex Runtime compiles it into a working agent: triggers become
              schedules, HTTP and app nodes become real tools, code nodes run verbatim in a sandbox, and AI prompts
              become the agent&apos;s objective. Import your n8n credentials into the encrypted local vault, picked up
              automatically. Or skip n8n entirely and build an agent from scratch.
            </p>
            <div className="cards">
              <div className="card">
                <div className="lbl">One click</div>
                <h3>Import, don&apos;t rebuild</h3>
                <p>Workflow JSON in, agent out. Nothing to re-wire, nothing to re-learn.</p>
              </div>
              <div className="card">
                <div className="lbl">Templates</div>
                <h3>20 community templates</h3>
                <p>Start from a pre-converted n8n template. The simple ones run as-is; the richer ones are a head start.</p>
              </div>
              <div className="card">
                <div className="lbl">Or from scratch</div>
                <h3>No n8n required</h3>
                <p>Build an agent in a six-step wizard, or let the built-in crew audit and fix your store out of the box.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How it runs */}
        <section id="run">
          <div className="wrap">
            <p className="eyebrow">How it runs</p>
            <h2>Not a SaaS login. A local server you own.</h2>
            <p className="sub">
              Launch it with one command and Vortex Runtime starts a small web server on your own machine, then opens
              the full crew office in your browser at <code>127.0.0.1:8420</code>. Everything lives in local SQLite.
              Deploy it headless with Docker for on-prem and it works the same.
            </p>
            <div className="pipe">
              <span>one command</span>
              <span className="ar">→</span>
              <span>local server</span>
              <span className="ar">→</span>
              <span>crew office in your browser</span>
              <span className="ar">→</span>
              <span>local SQLite · no telemetry</span>
            </div>
            <div className="cards">
              <div className="card">
                <div className="lbl mono">npx</div>
                <h3>One-command launcher</h3>
                <p>Opens the office at a tokenised localhost URL. The fastest way to see your crew work.</p>
              </div>
              <div className="card">
                <div className="lbl mono">npm start</div>
                <h3>From a checkout</h3>
                <p>Clone, install, run. Read every line. The audience for fair-code is technical, and welcome to be.</p>
              </div>
              <div className="card">
                <div className="lbl mono">docker run</div>
                <h3>Headless / on-prem</h3>
                <p>The same artifact self-hosts on a server behind your firewall for enterprise.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Crew */}
        <section className="panelsec">
          <div className="wrap">
            <p className="eyebrow">The crew</p>
            <h2>Detect · Explain · Fix · Remember.</h2>
            <p className="sub">
              The office is laid out as the pipeline, not a feature grid. Four named agents do the work out of the box.
              You can watch every one of them, and rename them if you like.
            </p>
            <div className="crew">
              <div className="desk">
                <span className="av" style={{ background: "linear-gradient(135deg,#3f8be0,#1f6fd6)" }}>
                  S
                </span>
                <div>
                  <div className="n">
                    Scout <span className="role det">detect</span>
                  </div>
                  <p>
                    Audits your store and every connected source. Finds what is broken, risky, or quietly costing money.
                    Deterministic, no model needed.
                  </p>
                </div>
              </div>
              <div className="desk">
                <span className="av" style={{ background: "linear-gradient(135deg,#2fbd8a,#0f8a6a)" }}>
                  K
                </span>
                <div>
                  <div className="n">
                    Kai <span className="role ung">ungated fix</span>
                  </div>
                  <p>Runs the auto-approved, provably-safe fixes: schema, robots, llms.txt, meta. The fixes that cannot go wrong.</p>
                </div>
              </div>
              <div className="desk">
                <span className="av" style={{ background: "linear-gradient(135deg,#e0a34e,#b26a09)" }}>
                  R
                </span>
                <div>
                  <div className="n">
                    Rai <span className="role gat">gated fix</span>
                  </div>
                  <p>Prepares the reversible changes that need a human go. Staged, diffed against a real page, waiting for your approval.</p>
                </div>
              </div>
              <div className="desk">
                <span className="av" style={{ background: "linear-gradient(135deg,#a985ff,#5529d6)" }}>
                  M
                </span>
                <div>
                  <div className="n">
                    Memo <span className="role mem">remember</span>
                  </div>
                  <p>Files what every run teaches about your store. The memory that makes month twelve smarter than month one.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Governance */}
        <section>
          <div className="wrap">
            <p className="eyebrow">Governance, from the first run</p>
            <h2>Nothing touches your live store without you.</h2>
            <p className="sub">
              Every change is staged, never live until you approve it, and exactly reversible. You see what each agent
              will do, why, and how to undo it, with signed provenance on every action. The free runtime teaches the
              same trust model the paid platform runs on.
            </p>
            <div className="cards">
              <div className="card">
                <div className="lbl">Staged</div>
                <h3>Preview before live</h3>
                <p>Changes run against a working copy and show a real before/after diff. Nothing writes to production unannounced.</p>
              </div>
              <div className="card">
                <div className="lbl">Approved</div>
                <h3>You hold the go button</h3>
                <p>Ungated fixes auto-apply; anything with risk waits for a human. Write access never means autonomy.</p>
              </div>
              <div className="card">
                <div className="lbl">Reversible</div>
                <h3>One-click rollback</h3>
                <p>A restore point is verified before the first write. Proven byte-exact on live stores.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Self-host */}
        <section id="sovereign" className="tint">
          <div className="wrap">
            <p className="eyebrow">Self-host and sovereignty</p>
            <h2>Choose how much stays inside your walls.</h2>
            <p className="sub">
              Same crew, same skills, same governance: you decide where the reasoning runs. From cloud-assisted with
              your own key, all the way to no model ever called.
            </p>
            <div className="post">
              <div className="p">
                <div className="h">
                  <b>Cloud, bring-your-own-key</b>
                  <span className="k">most teams</span>
                </div>
                <p>Local, deterministic skills; escalate the hard reasoning to a model on your own API key. Cheapest to run.</p>
              </div>
              <div className="p feat">
                <div className="h">
                  <b>On-prem, local AI</b>
                  <span className="seal">no data leaves</span>
                </div>
                <p>Everything inside your walls. A local model only. No third-party model is ever called.</p>
              </div>
              <div className="p">
                <div className="h">
                  <b>On-prem, your own model</b>
                  <span className="k">frontier, inside</span>
                </div>
                <p>Escalate to a large model you host yourself. Full capability, zero exposure.</p>
              </div>
              <div className="p">
                <div className="h">
                  <b>Zero-LLM</b>
                  <span className="k">strictest</span>
                </div>
                <p>Deterministic skills only: audits, schema, feeds. No model runs at all.</p>
              </div>
            </div>
            <p className="honest" style={{ marginTop: "18px" }}>
              One honest exception, shown before you choose: Google Ads calls route through a thin Vortex IQ proxy (a
              Google developer-token rule, not ours).
            </p>
          </div>
        </section>

        {/* Fair-code license */}
        <section id="faircode">
          <div className="wrap">
            <p className="eyebrow">The licence, in plain words</p>
            <h2>Fair-code. Not open source, and we will always say so.</h2>
            <p className="sub">
              Source-available means you can read it, run it, and change it. Fair-code means one honest limit: you cannot
              take it and sell it back to the market as a hosted service. It is the model n8n, Sentry and others run real
              businesses on.
            </p>
            <div className="lic">
              <div className="name">Vortex IQ Sustainable Use License 1.0</div>
              <div className="big">Yours to run. Not yours to resell.</div>
              <div className="two">
                <div>
                  <span className="yes">✓ You can</span>: self-host it, modify it, and use it internally in production,
                  for your own business or personal use. Bring your own LLM key.
                </div>
                <div>
                  <span className="no">✕ You cannot</span>: sell it, or offer it (modified or not) to third parties as a
                  hosted or managed service.
                </div>
              </div>
              <p className="honest" style={{ marginTop: "16px" }}>
                We call it &quot;fair-code&quot; or &quot;source-available&quot;, never &quot;open source&quot;. Claiming
                pure OSS when it is not burns the trust this is built on.
              </p>
            </div>
          </div>
        </section>

        {/* Free vs cloud */}
        <section className="panelsec">
          <div className="wrap">
            <p className="eyebrow">Free runtime · Vortex cloud</p>
            <h2>Start free on your machine. Graduate when you want it hosted.</h2>
            <p className="sub">
              The runtime is genuinely useful on its own, never crippled. You move up when you want it always-on,
              unifying your whole stack, with your team. A graduation, not a paywall.
            </p>
            <div className="fc">
              <div className="col free">
                <h3>Vortex Runtime</h3>
                <p className="mono" style={{ fontSize: ".8rem", color: "var(--faded)" }}>
                  fair-code · self-hosted · free
                </p>
                <ul className="free">
                  <li>The full agent framework, connectors and the crew office</li>
                  <li>Deterministic audits, scans and the staged fix loop</li>
                  <li>n8n import and the agent studio</li>
                  <li>One store, run locally; bring your own LLM key</li>
                  <li>Runs offline; your data stays on your machine</li>
                </ul>
              </div>
              <div className="col cloud">
                <h3>Vortex Cloud</h3>
                <p className="mono" style={{ fontSize: ".8rem", color: "var(--faded)" }}>
                  hosted · always-on · from the AIOS ladder
                </p>
                <ul className="cloud">
                  <li>Hosted with no infra; Vortex-run models for heavy agents</li>
                  <li>Always-on scheduling and monitoring</li>
                  <li>Cross-platform data unification and memory at scale</li>
                  <li>Teams, governance and multi-store</li>
                  <li>Dedicated support</li>
                </ul>
                <div className="push">
                  <b style={{ color: "var(--brand-ink)" }}>vortex-runtime push</b>: graduate in one step. Your
                  connections come with you; nothing to reconnect.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="access">
          <div className="wrap">
            <div className="final">
              <h2>Be first on Vortex Runtime.</h2>
              <p className="fp">
                We are inviting a small group of merchants and builders to the private beta ahead of the public release.
                Tell us where to reach you.
              </p>
              <RuntimeAccessForm />
              <p className="disc">
                Vortex Runtime is built and in private validation. We will notify you the moment the public,
                source-available release is ready. No spam, no &quot;launched&quot; before it is true.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

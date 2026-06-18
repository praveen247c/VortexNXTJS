import HeroRotator from "@/components/home/HeroRotator";
import ConnectorChips from "@/components/home/ConnectorChips";
import PlatformTabs from "@/components/home/PlatformTabs";

const Check = () => (
  <i>
    <svg viewBox="0 0 12 12" fill="none" stroke="#5529d6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 6.2 5 8.7 9.5 3.3" />
    </svg>
  </i>
);

export default function Home() {
  return (
    <main id="top">
      {/* ============ HERO ============ */}
      <section className="section section--hero hero-wrap">
        <div className="container hero">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="statusbar reveal in"><span className="dot"></span> Live across 200+ connectors</span>
              <div className="eyebrow reveal in">AGENTIC &amp; AUTONOMOUS</div>
              <h1 className="reveal in">
                The AI <span className="grad">Operating System</span> for{" "}
                <span style={{ whiteSpace: "nowrap" }}>E&#8209;Commerce.</span>
              </h1>
              <HeroRotator />
              <div className="cta-row reveal in">
                <a className="btn" href="#audit">Run a free audit</a>
                <a className="btn btn--ghost" href="#how">See how the loop runs &rarr;</a>
              </div>
            </div>

            {/* animated Nerve Centre visual */}
            <div className="hero-visual reveal in" aria-hidden="true">
              <div className="hv-orbit"></div>
              <ConnectorChips />
              <div className="hv-card">
                <div className="hv-head">
                  <span className="hv-live"><span className="dot"></span> Nerve Centre</span>
                  <span className="hv-tag">200+ connectors</span>
                </div>
                <div className="hv-chart">
                  <svg className="hv-svg" viewBox="0 0 300 122" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="hvFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#5529d6" stopOpacity=".22" />
                        <stop offset="1" stopColor="#5529d6" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path className="hv-area" fill="url(#hvFill)" d="M0,122 L0,72 C5,71 20,66.3 30,66 C40,65.7 50,67 60,70 C70,73 80,79 90,84 C100,89 110,98.7 120,100 C130,101.3 140,97.3 150,92 C160,86.7 170,74 180,68 C190,62 200,59.3 210,56 C220,52.7 230,51 240,48 C250,45 260,40.7 270,38 C280,35.3 295,33 300,32 L300,122 Z" />
                    <path className="hv-line" fill="none" stroke="#5529d6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M0,72 C5,71 20,66.3 30,66 C40,65.7 50,67 60,70 C70,73 80,79 90,84 C100,89 110,98.7 120,100 C130,101.3 140,97.3 150,92 C160,86.7 170,74 180,68 C190,62 200,59.3 210,56 C220,52.7 230,51 240,48 C250,45 260,40.7 270,38 C280,35.3 295,33 300,32" />
                  </svg>
                  <span className="hv-sweep"></span>
                  <span className="hv-badge hv-badge--alert"><span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--danger)" }}></span>Leak detected</span>
                  <span className="hv-badge hv-badge--fixed"><span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--success)" }}></span>Fixed safely</span>
                </div>
                <div className="hv-row">
                  <span className="nm">Add-to-cart rate</span>
                  <span className="hv-state"><span className="s bad">Down 8%</span><span className="s good">Recovered</span></span>
                </div>
                <div className="hv-row">
                  <span className="nm">Payment declines</span>
                  <span className="hv-state"><span className="s bad" style={{ animationDelay: ".5s" }}>Rising</span><span className="s good" style={{ animationDelay: ".5s" }}>Resolved</span></span>
                </div>
                <div className="hv-row">
                  <span className="nm">Checkout completion</span>
                  <span className="hv-state"><span className="s good" style={{ animation: "none", opacity: 1 }}>Stable</span></span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-foot reveal in">
            <span className="ck"><Check />Performance Optimisation</span>
            <span className="ck"><Check />Revenue Protection</span>
            <span className="ck"><Check />AI-Powered Automation</span>
            <span className="ck"><Check />24/7 Monitoring</span>
            <span className="ck"><Check />Safe One-Click Rollback</span>
          </div>
        </div>
      </section>

      {/* bridge / manifesto */}
      <section className="section section--soft">
        <div className="container manifesto reveal">
          <p>A dashboard tells you a number went down. <span className="why">An operating system finds out why, fixes it, and remembers, so it never costs you twice.</span> That difference is the whole reason Vortex IQ exists.</p>
        </div>
      </section>

      {/* ============ HOW ============ */}
      <section className="section" id="how">
        <div className="container">
          <div className="eyebrow reveal">How it&apos;s different</div>
          <h2 className="reveal" style={{ maxWidth: "18ch" }}>One loop. Five steps. Always running on live revenue.</h2>
          <p className="lede reveal" style={{ margin: "1.4rem 0 2.6rem" }}>Detect, diagnose, act, deploy safely, learn. The same loop runs continuously, with you in approval control at every step, and feeds one commerce graph that gets sharper every day. This is not a dashboard you read. It is a system that resolves the work.</p>

          <div className="loop reveal">
            <div className="lnode"><span className="step">01</span><b>Detect</b><span className="do">watch every KPI live</span></div>
            <div className="lnode"><span className="step">02</span><b>Diagnose</b><span className="do">find the root cause</span></div>
            <div className="lnode"><span className="step">03</span><b>Act</b><span className="do">turn findings into work</span></div>
            <div className="lnode"><span className="step">04</span><b>Deploy safely</b><span className="do">approval-gated · reversible</span></div>
            <div className="lnode"><span className="step">05</span><b>Learn</b><span className="do">remember &amp; compound</span></div>
          </div>
          <div className="loop-meta reveal">
            <span>&#8631; Learn feeds straight back into Detect, so the next problem is caught faster than the last.</span>
            <a className="textlink" href="#product">See the platform behind each step &rarr;</a>
          </div>
        </div>
      </section>

      {/* HOW: the moat */}
      <section className="section section--soft">
        <div className="container split">
          <div className="reveal">
            <span className="tag">The difference</span>
            <h2>It remembers. That&apos;s the part a dashboard with AI bolted on can&apos;t copy.</h2>
            <p className="lede" style={{ marginTop: "1.4rem" }}>Every connector, finding, fix and decision is written to one live commerce graph. The longer you run it, the more it compounds, so the system starts from everything you already know: what broke last quarter, what fixed it, what moved the number and what didn&apos;t.</p>
            <p className="muted" style={{ marginTop: "1.2rem" }}>Bolt-on tools start from zero on every question. Vortex IQ starts from memory, and acts on the second occurrence twice as fast as the first.</p>
          </div>
          <div className="grid reveal">
            <div className="card"><div className="stat stat--accent">200+</div><div className="stat-label">connectors mapped onto one graph</div></div>
            <div className="card"><div className="stat stat--accent">6,000+</div><div className="stat-label">KPI anchors tracked continuously</div></div>
            <div className="card card--brand"><div className="stat stat--on-brand">One</div><div className="stat-label">live commerce graph that compounds per store</div></div>
          </div>
        </div>
      </section>

      {/* HOW: safety */}
      <section className="section">
        <div className="container">
          <div className="eyebrow reveal">How we make autonomy safe</div>
          <h2 className="reveal" style={{ maxWidth: "20ch" }}>Nothing reaches live revenue without you. Every change can be undone.</h2>
          <p className="lede reveal" style={{ margin: "1.4rem 0 2.6rem" }}>The AI moves fast on the work; you stay in control of what reaches real revenue. That approval-gated, reversible design is exactly what makes it safe to let a system act on a live store.</p>
          <div className="grid grid-3">
            <div className="card card--media reveal">
              <div className="card-media">
                <svg viewBox="0 0 48 48" fill="none" stroke="#5529d6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 24 C9 15 16 10 24 10 C32 10 39 15 44 24 C39 33 32 38 24 38 C16 38 9 33 4 24 Z" /><circle cx="24" cy="24" r="6" /></svg>
              </div>
              <div className="card-body"><h3>Preview first</h3><p className="muted">StagingPro renders every change on a production-parity copy of your store, so you see the exact result before it ships.</p></div>
            </div>
            <div className="card card--media reveal">
              <div className="card-media">
                <svg viewBox="0 0 48 48" fill="none" stroke="#5529d6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 25 l8 8 20-20" /><path d="M30 13 a15 15 0 1 0 7 11" /></svg>
              </div>
              <div className="card-body"><h3>You approve what applies</h3><p className="muted">Every change sits behind your approval. The system proposes; you decide what reaches live revenue.</p></div>
            </div>
            <div className="card card--media reveal">
              <div className="card-media">
                <svg viewBox="0 0 48 48" fill="none" stroke="#5529d6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 16 a16 16 0 1 1 -2 12" /><path d="M10 7 V16 H19" /><path d="M24 18 v7 l5 3" /></svg>
              </div>
              <div className="card-body"><h3>Undo in one click</h3><p className="muted">RollbackPro keeps a continuous backup with one-click rollback, and logs every action in a full audit trail.</p></div>
            </div>
          </div>
          <p className="reveal" style={{ marginTop: "2rem" }}><span className="chip"><span className="dot"></span> Approval-gated · One-click rollback · Full audit trail</span></p>
        </div>
      </section>

      {/* ============ WHAT ============ */}
      <section className="section section--soft" id="product">
        <div className="container">
          <div className="eyebrow reveal">What you actually get</div>
          <h2 className="reveal" style={{ maxWidth: "18ch" }}>Five products. One loop. Every store you run.</h2>
          <p className="lede reveal" style={{ margin: "1.4rem 0" }}>Each part of the platform does one job in the loop, and hands off cleanly to the next.</p>
        </div>

        <PlatformTabs />
      </section>

      {/* WHAT: proof */}
      <section className="section" id="proof">
        <div className="container">
          <div className="eyebrow reveal">The proof</div>
          <h2 className="reveal" style={{ maxWidth: "18ch" }}>Results you can verify, line by line.</h2>
          <p className="lede reveal" style={{ margin: "1.4rem 0 2.6rem" }}>Real stores, dated and attributed. Revenue and conversion figures are top-quartile merchant results in the first 90 days.</p>
          <div className="grid grid-4">
            <div className="card card--brand reveal"><div className="stat stat--on-brand">1,400%</div><div className="stat-label">organic growth · Soak &amp; Sleep, Google Analytics</div></div>
            <div className="card reveal"><div className="stat">+35%</div><div className="stat-label">revenue recovered from cross-channel fixes</div></div>
            <div className="card reveal"><div className="stat">+30%</div><div className="stat-label">higher conversion · top-quartile merchants</div></div>
            <div className="card reveal"><div className="stat">50%</div><div className="stat-label">faster problem resolution · the closed loop</div></div>
          </div>

          <div className="grid grid-2 reveal" style={{ marginTop: "1.4rem" }}>
            <div className="card"><p style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", fontWeight: 600, color: "var(--primary)", letterSpacing: "-.01em" }}>&quot;A genuine step change in how we run the store.&quot;</p><p className="stat-label" style={{ marginTop: "1rem" }}>Wells Stringham · Apply Digital</p></div>
            <div className="card"><p style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", fontWeight: 600, color: "var(--primary)", letterSpacing: "-.01em" }}>&quot;The kind of operating layer commerce has been missing.&quot;</p><p className="stat-label" style={{ marginTop: "1rem" }}>Olaf Akkerman · Microsoft</p></div>
          </div>

          <div className="grid grid-2 reveal" style={{ marginTop: "1.4rem" }}>
            <div className="card">
              <h4 style={{ fontFamily: "var(--font-mono)", fontSize: ".72rem", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--text-faded)", marginBottom: "1.4rem" }}>Customers</h4>
              <div className="plogos plogos--clients">
                {/* eslint-disable @next/next/no-img-element */}
                <img src="/assets/logos/clients/coldwater-creek.svg" alt="Coldwater Creek" />
                <img src="/assets/logos/clients/richer-sounds.svg" alt="Richer Sounds" />
                <img className="dhs" src="/assets/logos/clients/dhs-equipment.svg" alt="DHS Equipment" />
                <img src="/assets/logos/clients/krispy-kreme.svg" alt="Krispy Kreme" />
              </div>
            </div>
            <div className="card">
              <h4 style={{ fontFamily: "var(--font-mono)", fontSize: ".72rem", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--text-faded)", marginBottom: "1.4rem" }}>Platform partners</h4>
              <div className="plogos">
                <img src="/assets/logos/bigcommerce.svg" alt="BigCommerce" title="BigCommerce" />
                <img src="/assets/logos/shopify.svg" alt="Shopify" />
                <img src="/assets/logos/adobe-commerce.svg" alt="Adobe Commerce" />
                <img src="/assets/logos/viva-payments.svg" alt="Viva Payments" title="Viva Payments" />
                <img src="/assets/logos/dotdigital.svg" alt="DotDigital" />
                <img src="/assets/logos/amazon.svg" alt="Amazon" />
                <img src="/assets/logos/google.svg" alt="Google" />
                <img src="/assets/logos/microsoft.svg" alt="Microsoft" />
                <img className="barclays" src="/assets/logos/barclays.svg" alt="Barclays" />
                {/* eslint-enable @next/next/no-img-element */}
              </div>
            </div>
          </div>
          <div className="cta-row reveal" style={{ marginTop: "2.4rem" }}>
            <a className="btn" href="#audit">Run a free audit</a>
            <a className="textlink" href="/customer-stories">Read the customer stories &rarr;</a>
          </div>
        </div>
      </section>

      {/* WHAT: trust */}
      <section className="section section--soft">
        <div className="container">
          <div className="eyebrow reveal">Distribution &amp; trust</div>
          <h2 className="reveal" style={{ maxWidth: "22ch" }}>Built on the platforms you already run, and safe to run on live revenue.</h2>
          <p className="lede reveal" style={{ margin: "1.4rem 0 2.6rem" }}>Vortex IQ runs on the platforms you already use, including BigCommerce, Shopify and Adobe Commerce. ISO 27001 certified, with approval-gated AI, one-click rollback and a full audit trail on every change.</p>
          <div className="grid grid-3">
            <div className="card card--media reveal">
              <div className="card-media">
                <svg viewBox="0 0 48 48" fill="none" stroke="#5529d6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M24 4 L40 10 V23 C40 33 33 41 24 44 C15 41 8 33 8 23 V10 Z" /><path d="M17 24 l5 5 9-11" /></svg>
              </div>
              <div className="card-body"><h3>Approval-gated AI</h3><p className="muted" style={{ fontSize: ".95rem" }}>Nothing reaches live revenue without your sign-off, and every change is previewed before it ships.</p></div>
            </div>
            <div className="card card--media reveal">
              <div className="card-media">
                <svg viewBox="0 0 48 48" fill="none" stroke="#5529d6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="24" cy="19" r="12" /><path d="M18 19 l4 4 8-9" /><path d="M16 29 l-3 13 11-5 11 5 -3-13" /></svg>
              </div>
              <div className="card-body"><h3>ISO 27001 certified</h3><p className="muted" style={{ fontSize: ".95rem" }}>Security governance and risk tracking on every system state change.</p></div>
            </div>
            <div className="card card--media reveal">
              <div className="card-media">
                <svg viewBox="0 0 48 48" fill="none" stroke="#5529d6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="7" width="23" height="33" rx="3" /><path d="M16 7 V5 a2 2 0 0 1 2-2 h5 a2 2 0 0 1 2 2 V7" /><path d="M15 18 h11 M15 24 h8" /><circle cx="33" cy="33" r="9" fill="#efeafc" /><path d="M33 29 v4 l3 2" /></svg>
              </div>
              <div className="card-body"><h3>SOC 2 in progress</h3><p className="muted" style={{ fontSize: ".95rem" }}>Approval-gated engines, immediate rollback and historical operations logs.</p></div>
            </div>
          </div>
          <div className="cta-row reveal" style={{ marginTop: "2.4rem" }}>
            <a className="textlink" href="/solutions/for-tech-partners">Partner with us &rarr;</a>
            <a className="textlink" href="https://www.vortexiq.ai/trust/trust-center">Visit the Trust Centre &rarr;</a>
          </div>
        </div>
      </section>

      {/* WHAT: In the Press */}
      <section className="section" id="press">
        <div className="container">
          <div className="eyebrow reveal">Press</div>
          <h2 className="reveal">In the Press</h2>
        </div>
        <div className="container" style={{ marginTop: "2.6rem" }}>
          <div className="press-grid">
            <article className="card press-card reveal">
              {/* eslint-disable @next/next/no-img-element */}
              <img className="press-banner" src="/assets/logos/press/raise-summit.svg" alt="RAISE Summit" />
              <p className="press-text">Vortex IQ is proud to be the <strong>winner of the RAISE Your Hack 2025 (Vultr Track)</strong> with its breakthrough product <strong>Autonomous Agents from APIs, Zero-Code Builder</strong>. The platform enables anyone to turn any&hellip;</p>
              <a className="btn" href="https://lablab.ai/event/raise-your-hack/autonomous-agents-from-apis-vultr-track/autonomous-agents-from-apis-zero-code-builder" target="_blank" rel="noopener noreferrer">Read More</a>
            </article>
            <article className="card press-card reveal">
              <img className="press-banner" src="/assets/logos/press/businesswire.svg" alt="Business Wire" />
              <p className="press-text">BigCommerce Merchants Gain AI Superpowers Delivered by Digital Workers: Vortex IQ Becomes Elite Partner After Microsoft GenAI Accelerator Success, Launches Ecommerce Agentic Hub</p>
              <a className="btn" href="https://www.businesswire.com/news/home/20250507496273/en/BigCommerce-Merchants-Gain-AI-Superpowers-Delivered-by-Digital-Workers-Vortex-IQ-Becomes-Elite-Partner-After-Microsoft-GenAI-Accelerator-Success-Launches-Ecommerce-Agentic-Hub" target="_blank" rel="noopener noreferrer">Read More</a>
            </article>
            <article className="card press-card reveal">
              <img className="press-banner" src="/assets/logos/press/businesscloud.svg" alt="BusinessCloud" />
              {/* eslint-enable @next/next/no-img-element */}
              <p className="press-text">Vortex IQ was listed among the UK&apos;s most innovative retail technology creators in the <strong>Business Cloud Retail Tech 50</strong> ranking for <strong>2025</strong>. The company was ranked at position <strong>#20</strong>.</p>
              <a className="btn" href="https://businesscloud.co.uk/retailtech-50-uks-most-innovative-retail-technology-creators-for-2025/" target="_blank" rel="noopener noreferrer">Read More</a>
            </article>
          </div>
          <div className="cta-row reveal" style={{ marginTop: "2.6rem" }}>
            <a className="textlink" href="/resources/blog">More news &rarr;</a>
          </div>
        </div>
      </section>

      {/* WHAT: FAQ */}
      <section className="section" id="faq">
        <div className="container">
          <div className="eyebrow reveal">FAQ</div>
          <h2 className="reveal">Questions, answered.</h2>
          <div className="faq reveal" style={{ marginTop: "2.5rem" }}>
            <details className="faq-item" open><summary>What is Vortex IQ?</summary><p>Vortex IQ is the AI Operating System for e-commerce. It connects your store and the tools around it, watches everything in real time, tells you what is wrong and why, and helps you fix it safely. One system, across 200+ connectors.</p></details>
            <details className="faq-item"><summary>How is it different from analytics or a dashboard?</summary><p>Analytics tells you what happened. Vortex IQ tells you what is wrong, why it happened, and helps you fix it. It is the difference between a report you read and a system that acts, with your approval.</p></details>
            <details className="faq-item"><summary>Which platforms and tools does it work with?</summary><p>BigCommerce, Shopify, Adobe Commerce, and WooCommerce, plus 200+ connectors across advertising, analytics, email, payments, shipping, and more. Connect the tools you already use in minutes.</p></details>
            <details className="faq-item"><summary>Do I need a developer to set it up?</summary><p>No. Connect your stack from the dashboard and the platform does the rest. Your first findings appear within the hour, ranked by the revenue at stake.</p></details>
            <details className="faq-item"><summary>Will the AI make changes to my live store?</summary><p>Vortex IQ does the watching. Your team makes the calls. Every change runs through staging first, is approval-gated, and can be rolled back in one click, with a full audit trail. Nothing touches live revenue untested unless you choose to automate it.</p></details>
            <details className="faq-item"><summary>What is Viq?</summary><p>Viq is the AI agent you talk to inside Vortex IQ. Ask it plain questions like &quot;Where am I losing revenue?&quot; or &quot;Summarise last week&apos;s sales&quot; and get an answer in seconds. Just ask Viq.</p></details>
            <details className="faq-item"><summary>How does it keep my store safe?</summary><p>Test every change on StagingPro before it goes live, and keep a full backup with one-click rollback through RollbackPro. You always have a recent restore point, and we never lose anything you delete.</p></details>
            <details className="faq-item"><summary>What does it cost?</summary><p>Start with a 14-day free trial, then $499 a month. Higher plans add SEO and GEO, more connectors, deeper retention, and dedicated support. See full pricing for details.</p></details>
            <details className="faq-item"><summary>How is my data used and is it secure?</summary><p>Your data powers your own insights and recommendations. It is not used to train shared AI models. We are ISO 27001 certified with SOC 2 in progress, and your data is processed in the United Kingdom under our Privacy Policy.</p></details>
            <details className="faq-item"><summary>What results can I expect?</summary><p>Across 60+ store audits we surfaced 749 issues and resolve 55% of them automatically, approval-gated and reversible. When the SEO and GEO engine runs, growth compounds; one recent deployment saw organic search rise 1,750% in 28 days.</p></details>
          </div>
        </div>
      </section>

      {/* WHAT: final CTA */}
      <section className="section final" id="audit" style={{ padding: "8rem 0" }}>
        <div className="container">
          <div className="eyebrow reveal" style={{ justifyContent: "center", display: "flex" }}>Ready when you are</div>
          <h2 className="reveal">Connect your store in 10 minutes and watch the loop run.</h2>
          <p className="lede reveal" style={{ margin: "0 auto 2.6rem" }}>Detect, diagnose, act, deploy safely, learn, and every fix after it gets faster. Your always-on commerce OS is ready when you are.</p>
          <div className="cta-row reveal" style={{ justifyContent: "center", marginBottom: "2.6rem" }}>
            <a className="btn" href="https://app.vortexiq.ai/login" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Run a free audit</a>
          </div>
          <p className="reveal"><span className="chip">Revenue Protection</span> <span className="chip">ISO 27001</span> <span className="chip">Safe One-Click Rollback</span></p>
        </div>
      </section>
    </main>
  );
}

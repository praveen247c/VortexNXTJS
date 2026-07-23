export const css = `/* scoped to .company-page so nothing leaks into the shared system */
/* alternating soft-grey section backgrounds, same as the home page */
.company-page .section--soft{background:var(--surface-soft)}
/* match the home page: a clear gap between a heading and the lede that follows it */
.company-page h1 + .lede,.company-page h2 + .lede{margin-top:1.4rem}
/* faint grid texture filling the empty right side of the hero, fading into white toward the text */
.company-page .section--hero{overflow:hidden}
.company-page .section--hero::before{content:"";position:absolute;top:0;right:0;bottom:0;width:64%;z-index:0;pointer-events:none;background-image:linear-gradient(rgba(85,41,214,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(85,41,214,.07) 1px,transparent 1px);background-size:40px 40px;-webkit-mask-image:radial-gradient(120% 135% at 100% 45%,#000 20%,transparent 72%);mask-image:radial-gradient(120% 135% at 100% 45%,#000 20%,transparent 72%)}
@media(max-width:760px){.company-page .section--hero::before{display:none}}
.company-page .company-meta{display:flex;flex-wrap:wrap;gap:.7rem;margin:1.8rem 0 2.2rem}
.company-page .company-why{max-width:760px;margin-top:2.4rem;padding-top:1.6rem;border-top:1px solid var(--border-dark);font-size:.98rem}
.company-page .company-body{margin-top:1rem;max-width:62ch}
.company-page .company-pillars{margin-top:2.4rem}
.company-page .company-ic{width:46px;height:46px;border-radius:12px;background:var(--surface-tint);border:1px solid var(--border-brand);display:inline-flex;align-items:center;justify-content:center;margin-bottom:1.2rem}
.company-page .company-ic img{width:27px;height:27px;display:block}
.company-page .company-traction{margin-top:2.6rem;align-items:stretch}
.company-page .company-traction .card--brand{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:.9rem}
.company-page .company-traction .stat--on-brand{font-size:clamp(3rem,7vw,5rem)}
.company-page .company-traction-body{display:flex;flex-direction:column;justify-content:center}
.company-page .company-stats{margin-top:1.8rem;gap:1.2rem}
.company-page .company-clients{margin-top:3.4rem;padding-top:2.2rem;border-top:1px solid var(--border-dark)}
.company-page .company-clients-label{font-family:var(--font-mono);font-size:.72rem;text-transform:uppercase;letter-spacing:.12em;color:var(--text-faded);margin-bottom:1.1rem}
.company-page .company-clients-row{display:flex;flex-wrap:wrap;gap:.7rem 1rem}
.company-page .company-clients-row span{font-family:var(--font-heading);font-weight:600;font-size:1rem;color:var(--primary);background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius-pill);padding:.45rem 1.1rem}
.company-page .company-quote{margin:3.4rem 0 0;max-width:720px}
.company-page .company-quote blockquote{font-family:var(--font-heading);font-weight:600;font-size:clamp(1.4rem,2.6vw,1.9rem);line-height:1.3;letter-spacing:-.015em;color:var(--primary)}
.company-page .company-quote figcaption{font-family:var(--font-mono);font-size:.8rem;color:var(--brand-purple);margin-top:1rem;letter-spacing:.02em}
.company-page .company-backers{margin-top:2.4rem}
.company-page .company-awards{margin-top:1.6rem}
.company-page .company-team{margin-top:2.6rem}
.company-page .company-role{font-family:var(--font-mono);font-size:.82rem;color:var(--text-body);letter-spacing:.01em}
.company-page .company-photo{width:100%;aspect-ratio:1/1;object-fit:cover;border-radius:var(--radius);border:1px solid var(--border-dark);display:block;margin-bottom:1.2rem;background:var(--surface-soft)}
.company-page .company-social{display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;border:1px solid var(--border-dark);color:var(--text-body);margin-top:1rem;transition:background .2s,border-color .2s,color .2s}
.company-page .company-social svg{width:15px;height:15px}
.company-page .company-social:hover{background:var(--brand-purple);border-color:var(--brand-purple);color:#fff}
.company-page .company-facts{margin-top:2.6rem}
.company-page .company-facts .card h3{color:var(--brand-purple)}
@media(max-width:1024px){
  .company-page .company-stats{grid-template-columns:repeat(3,1fr)}
}
@media(max-width:640px){
  .company-page .company-stats{grid-template-columns:1fr}
}`;
export const html = `<div class="company-page">

  <section class="section section--hero">
    <div class="container">
      <div class="eyebrow">Company</div>
      <div class="statusbar reveal"><span class="dot"></span>Agentic commerce &middot; Backed by Sure Valley Ventures &amp; Techstars</div>
      <h1>Vortex IQ is the <em class="hl">AI Operating System</em> for e-commerce.</h1>
      <p class="lede reveal">One command centre that detects what is wrong across your stack, explains why, and helps you fix it safely. We are building the agentic commerce category: software that does the work, with a human approving every change.</p>
      <div class="company-meta reveal">
        <span class="chip"><span class="dot"></span>Brentford, London</span>
        <span class="chip chip--brand">AI Operating System for e-commerce</span>
        <span class="chip">ISO 27001 certified</span>
      </div>
      <div class="cta-row reveal">
        <a class="btn" href="/contact-us">Talk to the team</a>
        <a class="btn btn--ghost" href="/ai-os-platform">See the platform</a>
      </div>
      <p class="company-why muted reveal">Why now: merchants run more platforms, more connectors and more SKUs than any team can watch by hand, and AI answer engines now decide a growing share of discovery. The work has outgrown the dashboard. It needs an operating system.</p>
    </div>
  </section>

  <section class="section section--soft">
    <div class="container">
      <div class="split">
        <div class="reveal">
          <div class="eyebrow">Mission</div>
          <h2>Running a store should not feel like fighting fires.</h2>
        </div>
        <div class="reveal">
          <p class="lede">We have lived the chaos, fixed the chaos, and built the AI system that stops the chaos.</p>
          <p class="muted company-body">Commerce teams are buried under fragmented tools, alerts they cannot act on, and changes they are afraid to ship. Our thesis is simple: the stack should run on one operating layer that watches every signal, explains the root cause in plain English, and acts safely on your approval. Detect. Explain. Fix. That loop is the product, and it gets sharper every time it runs.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="eyebrow">How it works</div>
      <h2>Detect. Explain. Fix. The loop is the product.</h2>
      <p class="lede reveal">One operating layer watches every signal, explains the root cause in plain English, acts safely on your approval, and remembers every decision so it gets sharper each run.</p>
      <div class="grid grid-2 company-pillars">
        <div class="card reveal">
          <span class="company-ic"><img src="/assets/icons/nerve.svg" alt="" /></span>
          <h3>Nerve Centre</h3>
          <p class="muted">Continuous detection across your connectors. The eyes on every KPI.</p>
        </div>
        <div class="card reveal">
          <span class="company-ic"><img src="/assets/icons/mind.svg" alt="" /></span>
          <h3>Vortex Mind</h3>
          <p class="muted">The diagnostic layer. It investigates a moving number, explains the root cause, and remembers every fix so the AI OS gets sharper over time.</p>
        </div>
        <div class="card reveal">
          <span class="company-ic"><img src="/assets/icons/ask.svg" alt="" /></span>
          <h3>Ask Viq</h3>
          <p class="muted">The conversational interface. Ask in plain English, get an answer you can act on.</p>
        </div>
        <div class="card reveal">
          <span class="company-ic"><img src="/assets/icons/actions.svg" alt="" /></span>
          <h3>Vortex Agents</h3>
          <p class="muted">AI agents that monitor, analyse and act across the stack, safely and on approval, with staging, backup and one-click rollback (StagingPro and RollbackPro) keeping every change predictable.</p>
        </div>
      </div>
      <p class="muted company-body reveal">Runs on BigCommerce, Shopify, Adobe Commerce and WooCommerce.</p>
    </div>
  </section>

  <section class="section section--soft">
    <div class="container">
      <div class="eyebrow">Traction</div>
      <h2>What the audits found.</h2>
      <div class="grid grid-2 company-traction">
        <div class="card card--brand reveal">
          <div class="stat stat--on-brand">65%</div>
          <div class="stat-label">Reduction in development cycle time at The Revere Group, working on Glerup.</div>
        </div>
        <div class="reveal company-traction-body">
          <p class="muted company-body">Across more than 60 store audits we have surfaced 749 issues for merchants, and about 55% are resolvable agentically: approval-gated and reversible. That is the wedge. Merchants connect a store, see what is leaking revenue in plain English, then let the AI OS fix the safe ones.</p>
          <div class="company-stats grid grid-3">
            <div>
              <div class="stat stat--accent">60+</div>
              <div class="stat-label">Store audits run</div>
            </div>
            <div>
              <div class="stat stat--accent">749</div>
              <div class="stat-label">Issues surfaced</div>
            </div>
            <div>
              <div class="stat stat--accent">~55%</div>
              <div class="stat-label">Resolvable agentically</div>
            </div>
          </div>
        </div>
      </div>
      <div class="company-clients reveal">
        <p class="company-clients-label">Merchants and teams that work with Vortex IQ</p>
        <div class="company-clients-row">
          <span>Krispy Kreme</span>
          <span>Avios</span>
          <span>Supreme CBD</span>
          <span>Crown Packaging</span>
          <span>Glerup / The Revere Group</span>
          <span>Interlight</span>
          <span>Menkind</span>
          <span>Radiant Health</span>
          <span>The Tire Man</span>
        </div>
      </div>
      <figure class="company-quote reveal">
        <blockquote>&ldquo;A genuine step change in how we run the store.&rdquo;</blockquote>
        <figcaption>Wells Stringham, Apply Digital</figcaption>
      </figure>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="eyebrow">Backed &amp; recognised</div>
      <h2>Investors who know the category.</h2>
      <p class="lede reveal">Vortex IQ is backed by Sure Valley Ventures and Techstars, and recognised across the AI and retail-tech ecosystem.</p>
      <div class="grid grid-2 company-backers reveal">
        <div class="card card--tint"><h3>Sure Valley Ventures</h3><p class="muted">Investor.</p><a class="textlink" style="display:block;margin-top:.7rem" href="https://www.svv.ai/" target="_blank" rel="noopener noreferrer">svv.ai &rarr;</a></div>
        <div class="card card--tint"><h3>Techstars</h3><p class="muted">Investor and accelerator.</p><a class="textlink" style="display:block;margin-top:.7rem" href="https://www.techstars.com/" target="_blank" rel="noopener noreferrer">techstars.com &rarr;</a></div>
      </div>
      <div class="grid grid-3 company-awards">
        <div class="card reveal"><h3>RAISE Your Hack 2025</h3><p class="muted">Winner, Vultr Track and the Fetch.ai &amp; Coral Protocol track, for Autonomous Agents from APIs, outperforming 922 teams among 6,000+ developers at the RAISE Summit, Carrousel du Louvre, Paris.</p><a class="textlink" style="display:block;margin-top:.7rem" href="https://www.youtube.com/watch?v=ciADZ-Q2XjM" target="_blank" rel="noopener noreferrer">Watch the win (31:53) &rarr;</a><a class="textlink" style="display:block;margin-top:.4rem" href="https://lablab.ai/ai-articles/lablab-hackathon-success-stories-part-1" target="_blank" rel="noopener noreferrer">Read: lablab.ai feature &rarr;</a></div>
        <div class="card reveal"><h3>Microsoft GenAI Accelerator</h3><p class="muted">Elite Partner.</p><a class="textlink" style="display:block;margin-top:.7rem" href="https://www.microsoft.com/en-gb/microsoft-cloud/blog/cross-industry/2024/12/09/announcing-12-companies-selected-for-microsoft-uk-genai-accelerator/" target="_blank" rel="noopener noreferrer">View announcement &rarr;</a></div>
        <div class="card reveal"><h3>RetailTech 50 (2026)</h3><p class="muted">Ranked 16th, up from 20th in 2025, in Business Cloud&apos;s list of the UK&apos;s most innovative retail technology creators.</p><a class="textlink" style="display:block;margin-top:.7rem" href="https://businesscloud.co.uk/retailtech-50-uks-most-innovative-retail-technology-creators-for-2026/" target="_blank" rel="noopener noreferrer">View 2026 list &rarr;</a><a class="textlink" style="display:block;margin-top:.4rem" href="https://businesscloud.co.uk/retailtech-50-uks-most-innovative-retail-technology-creators-for-2025/" target="_blank" rel="noopener noreferrer">View 2025 list &rarr;</a></div>
        <div class="card reveal"><h3>Startup Battlefield 2024</h3><p class="muted">TechCrunch.</p><a class="textlink" style="display:block;margin-top:.7rem" href="https://techcrunch.com/startup-battlefield/company/vortex-iq/" target="_blank" rel="noopener noreferrer">View profile &rarr;</a></div>
        <div class="card reveal"><h3>Focal W24</h3><p class="muted">Demo Day.</p></div>
        <div class="card reveal"><h3>BigCommerce Elite Partner</h3><p class="muted">AI-Pilots Elite tier.</p><a class="textlink" style="display:block;margin-top:.7rem" href="https://www.linkedin.com/posts/bigcommerce_bigcommerce-vortexiq-aiinecommerce-activity-7327814886913118208-ZMV6/" target="_blank" rel="noopener noreferrer">View announcement &rarr;</a></div>
      </div>
    </div>
  </section>

  <section class="section section--soft">
    <div class="container">
      <div class="eyebrow">Team</div>
      <h2>The people behind the AI OS.</h2>
      <p class="lede reveal">Built by people who lived the problem.</p>
      <div class="grid grid-4 company-team">
        <div class="card reveal">
          <img class="company-photo" src="/assets/webflow/susant.jpg" alt="Susant Patro" loading="lazy" />
          <h3>Susant Patro</h3>
          <p class="company-role">CEO</p>
          <a class="company-social" href="https://www.linkedin.com/in/susantpatro247/" target="_blank" rel="noopener noreferrer" aria-label="Susant Patro on LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.74v20.51C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.74C24 .78 23.2 0 22.22 0z" /></svg></a>
        </div>
        <div class="card reveal">
          <img class="company-photo" src="/assets/webflow/sambi.jpg" alt="Sambit Patra" loading="lazy" />
          <h3>Sambit Patra</h3>
          <p class="company-role">COO</p>
          <a class="company-social" href="https://www.linkedin.com/in/sambit-patra-4764a4184/" target="_blank" rel="noopener noreferrer" aria-label="Sambit Patra on LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.74v20.51C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.74C24 .78 23.2 0 22.22 0z" /></svg></a>
        </div>
        <div class="card reveal">
          <img class="company-photo" src="/assets/webflow/jaiganesh.jpg" alt="Jaiganesh V." loading="lazy" />
          <h3>Jaiganesh V.</h3>
          <p class="company-role">CTO</p>
          <a class="company-social" href="https://www.linkedin.com/in/jaiganesh-vanasubramanian/" target="_blank" rel="noopener noreferrer" aria-label="Jaiganesh V. on LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.74v20.51C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.74C24 .78 23.2 0 22.22 0z" /></svg></a>
        </div>
        <div class="card reveal">
          <img class="company-photo" src="/assets/webflow/benjamin.jpg" alt="Benjamin Gisvold" loading="lazy" />
          <h3>Benjamin Gisvold</h3>
          <p class="company-role">CRO</p>
          <a class="company-social" href="https://www.linkedin.com/in/bgisvold/" target="_blank" rel="noopener noreferrer" aria-label="Benjamin Gisvold on LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.74v20.51C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.74C24 .78 23.2 0 22.22 0z" /></svg></a>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="eyebrow">Facts at a glance</div>
      <h2>The company, on the record.</h2>
      <div class="grid grid-4 company-facts reveal">
        <div class="card">
          <h3>Company</h3>
          <p class="muted">Vortex IQ Ltd. Registered in England and Wales, No. 14925424. VAT GB 459 547 641. D-U-N-S 230712948.</p>
        </div>
        <div class="card">
          <h3>Headquarters</h3>
          <p class="muted">Brentford, London. Working with merchants worldwide.</p>
        </div>
        <div class="card">
          <h3>Category</h3>
          <p class="muted">Agentic commerce: the AI Operating System for e-commerce. Runs on BigCommerce, Shopify, Adobe Commerce and WooCommerce.</p>
        </div>
        <div class="card">
          <h3>Security</h3>
          <p class="muted">ISO 27001 certified. SOC 2 in progress. Approval-gated AI, staging-first, one-click rollback, full audit trail.</p>
        </div>
        <div class="card">
          <h3>History</h3>
          <p class="muted">Founded June 2023 by the team behind 247 Commerce, an agency running BigCommerce, Shopify and Adobe Commerce stores since 2011 and winner of Adobe Commerce Rockstar 2023. 247 Commerce joined Vortex IQ as its managed-services arm in 2026. <a class="textlink" href="/about-us">Read the story &rarr;</a></p>
        </div>
      </div>
    </div>
  </section>

  <section class="section final">
    <div class="container">
      <h2>Want the longer version?</h2>
      <p class="lede reveal" style="margin:0 auto 2rem">Read the full story, from 247 Commerce to the AI Operating System, or talk to the founding team.</p>
      <div class="cta-row reveal" style="justify-content:center">
        <a class="btn" href="/about-us">Read our story</a>
        <a class="btn btn--ghost" href="/contact-us">Talk to the team</a>
      </div>
    </div>
  </section>

</div>`;

export const css = `
/* ===== Press / Newsroom (built on the shared design system) ===== */
.press-page .press-hero{max-width:760px}
.press-page .press-hero h1{margin:0 0 1.4rem}

/* coverage feed */
.press-page .news-feed{display:flex;flex-direction:column;gap:1rem;margin-top:2.4rem}
.press-page .news-row{display:grid;grid-template-columns:auto 1fr auto;gap:1.2rem;align-items:center;background:var(--white);border:1px solid var(--border-dark);border-radius:14px;padding:1.2rem 1.4rem}
.press-page .news-date{font-family:var(--font-mono);font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;color:var(--text-faded);white-space:nowrap}
.press-page .news-body h3{font-family:var(--font-heading);font-size:1.05rem;color:var(--primary);margin:0 0 .25rem;letter-spacing:-.01em}
.press-page .news-body p{font-size:.9rem;color:var(--text-body);line-height:1.5;margin:0}
.press-page .news-body .news-src{font-family:var(--font-mono);font-size:.68rem;letter-spacing:.06em;text-transform:uppercase;color:var(--brand-purple)}
.press-page .news-row .textlink{white-space:nowrap;font-size:.85rem}
@media(max-width:720px){
  .press-page .news-row{grid-template-columns:1fr}
  .press-page .news-row .textlink{justify-self:start}
}

/* media kit */
.press-page .kit-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--bento-gap);margin-top:1.4rem}
.press-page .kit-card h3{font-size:1.05rem;color:var(--primary);margin:0 0 .5rem}
.press-page .kit-card p{font-size:.9rem;color:var(--text-body);line-height:1.5;margin:0 0 1rem}
@media(max-width:900px){.press-page .kit-grid{grid-template-columns:1fr}}

/* quote bank */
.press-page .quote-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:var(--bento-gap);margin-top:1.4rem}
.press-page .quote-card blockquote{font-family:var(--font-heading);font-size:1.15rem;font-weight:600;color:var(--primary);letter-spacing:-.01em;line-height:1.4;margin:0 0 1rem}
.press-page .quote-card figcaption{font-family:var(--font-mono);font-size:.72rem;letter-spacing:.06em;text-transform:uppercase;color:var(--text-faded)}
@media(max-width:720px){.press-page .quote-grid{grid-template-columns:1fr}}

/* contact strip */
.press-page .press-contact{display:flex;flex-wrap:wrap;gap:1rem;align-items:center;justify-content:space-between;background:var(--surface-tint);border:1px solid var(--border-brand);border-radius:16px;padding:1.6rem 1.8rem;margin-top:1.4rem}
.press-page .press-contact p{margin:0;font-size:1rem;color:var(--primary)}
.press-page .press-contact a{color:var(--brand-purple);font-weight:600}
`;

export const html = `<div class="press-page">

  <!-- HERO -->
  <section class="section section--hero">
    <div class="container">
      <div class="press-hero">
        <div class="eyebrow reveal">Press &amp; Newsroom</div>
        <h1 class="reveal">The news, coverage and assets behind <em class="hl">the AI Operating System for e-commerce.</em></h1>
        <p class="lede reveal">Everything a journalist, analyst or partner needs to write about Vortex IQ accurately: our recognition and coverage, a downloadable media kit, approved quotes, and a direct line to the team.</p>
      </div>
    </div>
  </section>

  <!-- COVERAGE & RECOGNITION -->
  <section class="section section--soft">
    <div class="container">
      <div class="eyebrow reveal">Coverage &amp; recognition</div>
      <h2 class="reveal" style="max-width:22ch">Where Vortex IQ has been recognised.</h2>
      <div class="news-feed reveal">

        <div class="news-row">
          <span class="news-date">2025</span>
          <div class="news-body">
            <span class="news-src">RAISE Your Hack 2025</span>
            <h3>Winner, Vultr Track</h3>
            <p>Recognised for &ldquo;Autonomous Agents from APIs&rdquo; &mdash; a zero-code builder that turns any API into an autonomous agent.</p>
          </div>
          <a class="textlink" href="https://lablab.ai/event/raise-your-hack/autonomous-agents-from-apis-vultr-track/autonomous-agents-from-apis-zero-code-builder" target="_blank" rel="noopener noreferrer">Read more &rarr;</a>
        </div>

        <div class="news-row">
          <span class="news-date">2025</span>
          <div class="news-body">
            <span class="news-src">Business Wire</span>
            <h3>BigCommerce Elite Partner after Microsoft GenAI Accelerator</h3>
            <p>Vortex IQ becomes a BigCommerce Elite Partner and launches its Ecommerce Agentic Hub, delivering AI superpowers to merchants through digital workers.</p>
          </div>
          <a class="textlink" href="https://www.businesswire.com/news/home/20250507496273/en/BigCommerce-Merchants-Gain-AI-Superpowers-Delivered-by-Digital-Workers-Vortex-IQ-Becomes-Elite-Partner-After-Microsoft-GenAI-Accelerator-Success-Launches-Ecommerce-Agentic-Hub" target="_blank" rel="noopener noreferrer">Read the release &rarr;</a>
        </div>

        <div class="news-row">
          <span class="news-date">2025</span>
          <div class="news-body">
            <span class="news-src">Business Cloud</span>
            <h3>RetailTech 50 &mdash; ranked #20</h3>
            <p>Listed among the UK&rsquo;s most innovative retail technology creators for 2025.</p>
          </div>
          <a class="textlink" href="https://businesscloud.co.uk/retailtech-50-uks-most-innovative-retail-technology-creators-for-2025/" target="_blank" rel="noopener noreferrer">Read more &rarr;</a>
        </div>

        <div class="news-row">
          <span class="news-date">2024</span>
          <div class="news-body">
            <span class="news-src">TechCrunch</span>
            <h3>Startup Battlefield 2024</h3>
            <p>Selected to compete in TechCrunch&rsquo;s flagship startup competition.</p>
          </div>
          <span class="news-src" style="justify-self:end;align-self:center">Recognition</span>
        </div>

        <div class="news-row">
          <span class="news-date">2024</span>
          <div class="news-body">
            <span class="news-src">Focal</span>
            <h3>Focal W24 Demo Day</h3>
            <p>Part of the Focal Winter 2024 cohort.</p>
          </div>
          <span class="news-src" style="justify-self:end;align-self:center">Recognition</span>
        </div>

      </div>
    </div>
  </section>

  <!-- MEDIA KIT -->
  <section class="section">
    <div class="container">
      <div class="eyebrow reveal">Media kit</div>
      <h2 class="reveal" style="max-width:24ch">Everything you need to write about us, in one place.</h2>
      <p class="lede reveal" style="margin:1.2rem 0 0;max-width:64ch">Use our name as <b>Vortex IQ</b> (two words). We are the AI Operating System for e-commerce. For anything not covered here, email <a href="mailto:press@vortexiq.ai">press@vortexiq.ai</a>.</p>
      <div class="kit-grid reveal">
        <div class="card kit-card">
          <h3>Logos &amp; brand assets</h3>
          <p>Logo pack, colours and usage guidance for print and web.</p>
          <a class="btn btn--ghost" href="/branding">Open the brand page &rarr;</a>
        </div>
        <div class="card kit-card">
          <h3>Boilerplate</h3>
          <p>Vortex IQ is the AI Operating System for e-commerce: one command centre that detects what is wrong across a merchant&rsquo;s stack, explains why in plain English, and helps fix it safely, with a human approving every change. ISO&nbsp;27001 certified; SOC&nbsp;2 in progress.</p>
          <a class="btn btn--ghost" href="/company">Company facts &rarr;</a>
        </div>
        <div class="card kit-card">
          <h3>Company facts</h3>
          <p>Vortex IQ Ltd. Registered in England &amp; Wales, No.&nbsp;14925424. HQ: Brentford, London. Backed by Sure Valley Ventures and Techstars.</p>
          <a class="btn btn--ghost" href="/company">See the record &rarr;</a>
        </div>
      </div>
    </div>
  </section>

  <!-- QUOTE BANK -->
  <section class="section section--soft">
    <div class="container">
      <div class="eyebrow reveal">Quote bank</div>
      <h2 class="reveal" style="max-width:22ch">Approved quotes you can use without a call.</h2>
      <div class="quote-grid reveal">
        <figure class="card quote-card">
          <blockquote>&ldquo;A dashboard tells you a number went down. An operating system finds out why, fixes it, and remembers, so it never costs you twice.&rdquo;</blockquote>
          <figcaption>Vortex IQ &mdash; on the category</figcaption>
        </figure>
        <figure class="card quote-card">
          <blockquote>&ldquo;A genuine step change in how we run the store.&rdquo;</blockquote>
          <figcaption>Wells Stringham &middot; Apply Digital</figcaption>
        </figure>
        <figure class="card quote-card">
          <blockquote>&ldquo;The kind of operating layer commerce has been missing.&rdquo;</blockquote>
          <figcaption>Olaf Akkerman &middot; Microsoft</figcaption>
        </figure>
        <figure class="card quote-card">
          <blockquote>&ldquo;The work has outgrown the dashboard. It needs an operating system.&rdquo;</blockquote>
          <figcaption>Vortex IQ &mdash; on why now</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- PRESS CONTACT -->
  <section class="section">
    <div class="container">
      <div class="eyebrow reveal">Press contact</div>
      <h2 class="reveal" style="max-width:20ch">Working on a story?</h2>
      <div class="press-contact reveal">
        <p>For interviews, quotes, or additional assets, email <a href="mailto:press@vortexiq.ai">press@vortexiq.ai</a> and we&rsquo;ll get back to you quickly.</p>
        <a class="btn" href="mailto:press@vortexiq.ai">Contact press</a>
      </div>
    </div>
  </section>

</div>`;

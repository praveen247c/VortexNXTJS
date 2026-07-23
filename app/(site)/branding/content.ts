/**
 * /branding content.
 *
 * Naming and positioning source of truth: the "Naming & Positioning FINAL"
 * canon (VortexIQ-Strategy/11-naming-positioning-final.html, owner-confirmed
 * 19 Jul 2026), which supersedes the six-pillar and "world's first" framing in
 * AI_DOCS/BRAND_TONE_OF_VOICE.md until that doc is revised. Voice and vocabulary
 * still follow the ToV doc. Tokens follow app/globals.css (the live stylesheet).
 *
 * House rule: no em dashes and no en dashes in any visible string below.
 */

export const BRAND_VERSION = "v3.0";
export const BRAND_UPDATED = "July 2026";

export const DL_MD = "/downloads/VortexIQ-Brand-Guidelines.md";
export const DL_HTML = "/downloads/VortexIQ-Brand-Guidelines.html";

export const SECTIONS = [
  { id: "foundation", label: "Foundation" },
  { id: "logo", label: "Logo" },
  { id: "colour", label: "Colour" },
  { id: "type", label: "Type" },
  { id: "tokens", label: "Tokens" },
  { id: "components", label: "Components" },
  { id: "pillars", label: "Four pillars" },
  { id: "voice", label: "Voice" },
  { id: "tone", label: "Tone" },
  { id: "triggers", label: "Triggers" },
  { id: "vocabulary", label: "Vocabulary" },
  { id: "patterns", label: "Patterns" },
  { id: "channels", label: "Channels" },
  { id: "rewrites", label: "Rewrites" },
  { id: "downloads", label: "Downloads" },
];

/* ------------------------------------------------------------------ *
 * 01. Foundation
 * ------------------------------------------------------------------ */

export const NORTH_STAR = {
  promise: "Vortex IQ is the fair-code AI Operating System for e-commerce.",
  support:
    "Intelligent agents that watch your store, explain what's wrong, and fix it. Every action staged, human-approved, and exactly reversible. Across every platform you run.",
  words: [
    {
      word: "Fair-code (coming soon)",
      body: "Source-available and self-hostable, not open source. A Sustainable Use license keeps cloud rivals from reselling our hosted version.",
    },
    {
      word: "AI",
      body: "Not analytics. Not dashboards. Active, not passive. The system does the watching so your team does the deciding.",
    },
    {
      word: "Operating System",
      body: "The thing your stack runs on, not another tool you bolt on beside it. That distinction carries the whole positioning.",
    },
    {
      word: "For e-commerce",
      body: "A narrow category, named in the first line. Not for businesses. Not for retailers. Specifically e-commerce.",
    },
  ],
};

// The full owner-confirmed positioning statement. The self-host and n8n clauses
// stay future-tense in public copy until Vortex Runtime ships publicly, so this
// is documented here as the canon rather than dropped straight into the hero.
export const CANONICAL_STATEMENT =
  "Fair-code (source-available) AI Operating System for ecommerce. Intelligent agents that watch your store, explain what's wrong, and fix it, every action staged, human-approved, and exactly reversible. Turn any n8n workflow into an agent in one click. Self-host in minutes, or graduate to the Vortex cloud.";

export const LOOP = [
  { step: "01", name: "Detect", detail: "watch every KPI live" },
  { step: "02", name: "Diagnose", detail: "find the root cause" },
  { step: "03", name: "Act", detail: "turn findings into work" },
  { step: "04", name: "Deploy", detail: "approval-gated, reversible" },
  { step: "05", name: "Learn", detail: "remember and compound" },
];

/* ------------------------------------------------------------------ *
 * 02. Logo
 * ------------------------------------------------------------------ */

export const LOGO_DO = [
  "Use the full-colour logo on white and light surfaces.",
  "Switch to the white logo on dark or brand-deep backgrounds.",
  "Keep clear space around the mark equal to the height of the V.",
  "Scale proportionally and use the provided SVG wherever possible.",
  "Hold a minimum width of 110px on screen and 25mm in print.",
  "Place it on enough contrast that it stays clearly legible.",
];

export const LOGO_DONT = [
  "Recolour, add gradients, or apply effects to the mark.",
  "Stretch, squash, rotate, or distort the proportions.",
  "Place the logo on a busy image or a low-contrast background.",
  "Add a drop shadow, outline, or box around the mark.",
  "Recreate, re-typeset, or alter the wordmark in any way.",
  "Write VortexIQ, Vortex-IQ, or VORTEX IQ. It is Vortex IQ, two words.",
];

/* ------------------------------------------------------------------ *
 * 03. Colour
 * ------------------------------------------------------------------ */

export type Swatch = {
  token: string;
  hex: string;
  role: string;
  light?: boolean;
};

export const COLOUR_GROUPS: { name: string; note: string; swatches: Swatch[] }[] = [
  {
    name: "Brand",
    note: "Purple leads everything. Deep purple grounds dark sections and the footer. Blue is a rare secondary accent, never a substitute for purple.",
    swatches: [
      { token: "--brand-purple", hex: "#5529d6", role: "Primary, buttons, links" },
      { token: "--brand-purple-mid", hex: "#392bd5", role: "Hover, secondary" },
      { token: "--brand-purple-light", hex: "#a58af3", role: "Soft accent, gradient stop" },
      { token: "--brand-purple-deep", hex: "#0c061f", role: "Dark backgrounds, footer" },
      { token: "--brand-blue", hex: "#004794", role: "Secondary accent, sparing" },
    ],
  },
  {
    name: "Surfaces",
    note: "White is the canvas. Soft grey separates alternating sections. The purple tint carries callouts, chips, and anything that should read as brand-owned.",
    swatches: [
      { token: "--white", hex: "#ffffff", role: "Base canvas", light: true },
      { token: "--surface-soft", hex: "#f6f5f3", role: "Alternating sections", light: true },
      { token: "--surface-tint", hex: "#f3f0fc", role: "Brand wash, callouts", light: true },
      { token: "--neutral-2", hex: "#e8e6e3", role: "Warm panel", light: true },
    ],
  },
  {
    name: "Text",
    note: "Near-black for headings, 60% black for body, 40% for metadata. Pure black is never used.",
    swatches: [
      { token: "--primary", hex: "#222325", role: "Headings and ink" },
      { token: "--text-body", hex: "rgba(0,0,0,.60)", role: "Body copy" },
      { token: "--text-faded", hex: "rgba(0,0,0,.40)", role: "Labels and metadata" },
      { token: "--border-dark", hex: "rgba(0,0,0,.10)", role: "Hairline borders", light: true },
    ],
  },
  {
    name: "Status",
    note: "Status colours carry meaning, so they never appear as decoration. Green is healthy or recovered, red is revenue at risk, amber is watching.",
    swatches: [
      { token: "--success", hex: "#1f9e54", role: "Healthy, fixed, live" },
      { token: "--danger", hex: "#d23f31", role: "Incident, at risk" },
      { token: "--warning", hex: "#c47d12", role: "Watching, anomaly" },
    ],
  },
];

export const GRADIENTS = [
  {
    token: "--brand-gradient",
    css: "linear-gradient(135deg,#5529d6,#0c061f 50%,#5529d6 75%)",
    role: "Brand cards, icon tiles, the banner above the footer",
  },
  {
    token: "--brand-gradient-soft",
    css: "linear-gradient(135deg,#a58af3,#5529d6)",
    role: "Gradient text, underline sweeps, progress states",
  },
];

/* ------------------------------------------------------------------ *
 * 04. Typography
 * ------------------------------------------------------------------ */

export const TYPE_SCALE = [
  { token: "display", size: "clamp(2.6rem, 6vw, 4.6rem)", weight: "500", use: "Page hero, one per page" },
  { token: "h1", size: "clamp(2.6rem, 6vw, 4.6rem)", weight: "500", use: "The single page title" },
  { token: "h2", size: "clamp(2rem, 3.8vw, 3.1rem)", weight: "500", use: "Section headings" },
  { token: "h3", size: "1.18rem", weight: "600", use: "Card titles, sub-headings" },
  { token: "lede", size: "1.22rem", weight: "400", use: "The paragraph under a heading" },
  { token: "body", size: "1.0625rem", weight: "400", use: "Running text" },
  { token: "eyebrow", size: "0.72rem mono", weight: "500", use: "Section label above a heading" },
  { token: "label", size: "0.72rem mono", weight: "500", use: "Chips, metadata, step numbers" },
];

/* ------------------------------------------------------------------ *
 * 05. Tokens
 * ------------------------------------------------------------------ */

export const TOKEN_GROUPS = [
  {
    name: "Radius",
    rows: [
      { token: "--radius", value: "10px", use: "Cards, panels, inputs" },
      { token: "--radius-pill", value: "200px", use: "Every button and chip" },
      { token: "(product visuals)", value: "14px to 18px", use: "Floating console cards" },
    ],
  },
  {
    name: "Layout",
    rows: [
      { token: "--max", value: "1180px", use: "Container width" },
      { token: "--bento-gap", value: "30px", use: "Grid gap, every bento" },
      { token: ".section", value: "7.5rem 0", use: "Vertical section rhythm" },
      { token: "nav height", value: "4.5rem", use: "Fixed header" },
    ],
  },
  {
    name: "Elevation",
    rows: [
      { token: "--shadow-sm", value: "0 1px 2px / 0 1px 3px", use: "Chips, small tiles" },
      { token: "--shadow-md", value: "0 6px 20px / 0 2px 6px", use: "Raised cards" },
      { token: "--shadow-lg", value: "0 20px 50px / 0 6px 16px", use: "Hover state, floating visuals" },
      { token: "--shadow-brand", value: "0 14px 40px rgba(85,41,214,.22)", use: "Primary button hover" },
    ],
  },
  {
    name: "Motion",
    rows: [
      { token: "--ease", value: "cubic-bezier(.16,1,.3,1)", use: "Every transition" },
      { token: "hover lift", value: "translateY(-1px to -3px)", use: "Buttons and cards" },
      { token: "reveal", value: "600ms, 22px rise", use: "Scroll-in sections" },
      { token: "reduced motion", value: "animations off", use: "Always honoured" },
    ],
  },
];

/* ------------------------------------------------------------------ *
 * 06. The six pillars
 * ------------------------------------------------------------------ */

export const PILLARS = [
  {
    name: "Nerve Centre",
    icon: "/assets/webflow/nerve-centre.svg",
    what: "The detection layer. Every KPI, live, across 200+ connectors.",
    write: "Always title-case. Always paired with real-time or continuous. It senses, it does not diagnose or act.",
    href: "/ai-os-platform/nerve-centre",
    role: "Sense",
  },
  {
    name: "Vortex Mind",
    icon: "/assets/webflow/vortex-mind.svg",
    what: "The diagnostic layer. It investigates the finding, returns the root cause, and remembers per store. The knowledge graph (the memory graph) lives here.",
    write: "Always paired with explains why or root cause. It absorbs the memory graph, so Vortex Memory is now only the name of that graph, never a standalone pillar.",
    href: "/ai-os-platform/vortex-mind",
    role: "Think",
  },
  {
    name: "Ask Viq",
    icon: "/assets/webflow/ask-viq.svg",
    what: "The conversational layer, answering from the graph and citing what it drew the answer from.",
    write: "Ask Viq™ on the first prominent mention of a page. Bare Ask Viq after that. It answers, it does not act.",
    href: "/ai-os-platform/ask-viq",
    role: "Talk",
  },
  {
    name: "Vortex Agents",
    icon: "/assets/webflow/agenthub-icon.svg",
    what: "Execute changes safely. Staging, backup, and one-click rollback are the harness every agent runs inside.",
    write: "Always paired with act safely or safe and reversible. It absorbs staging, backup, and rollback. Team members inside an agent are sub-agents, never specialists. Agent Hub and the old Vortex Apps pillar are retired.",
    href: "/ai-os-platform/vortex-agents",
    role: "Act",
  },
];

export const PILLAR_NOTE =
  "Say four pillars, not six, and never six modules. The four map to one rail: Sense (Nerve Centre), Think (Vortex Mind), Talk (Ask Viq), Act (Vortex Agents). Vortex Mind absorbs the memory graph, and Vortex Agents absorbs staging, backup, and rollback. AI OS always takes a noun: the AI OS for commerce, not a bare AI OS.";

// The fair-code foundation beneath the four pillars, not a fifth pillar.
// Built and in private validation now. Public availability, the self-host and
// n8n one-click hooks, stays future-tense until it ships publicly (about six
// weeks out). Features inside it (studio, board, connectors, vault, office)
// stay lowercase.
export const RUNTIME = {
  name: "Vortex Runtime",
  status: "In private validation",
  what: "The fair-code foundation beneath the four pillars, not a fifth pillar. It is designed to turn any n8n workflow into an agent in one click and to self-host in minutes, with the option to graduate to the Vortex cloud.",
  write: "Reference it as the fair-code foundation, never a fifth pillar. Keep every claim future-tense until it ships publicly. Never say launched, shipped, or GA yet. Features inside it stay lowercase: studio, board, connectors, vault, office.",
};

/* ------------------------------------------------------------------ *
 * 07. Voice pillars
 * ------------------------------------------------------------------ */

export const VOICE_PILLARS = [
  {
    n: "01",
    title: "Confident, not arrogant",
    body: "We have built this for global brands. We know the chaos because we have fixed it. Write from that authority, but never lecture, never condescend, never imply the reader is failing.",
    yes: "We've lived the chaos, fixed the chaos, and built the AI system that stops the chaos.",
    no: "Most e-commerce teams get this completely wrong.",
  },
  {
    n: "02",
    title: "Anti-chaos, action-led",
    body: "The brand exists because running e-commerce should not feel like fighting fires. Every line should imply less work, less anxiety, more control. Lead with verbs. Stop X, start Y is on-brand and repeatable.",
    yes: "Stop fighting fires. Protect revenue and automate ops.",
    no: "Our advanced platform uses cutting-edge AI to deliver insights.",
  },
  {
    n: "03",
    title: "Concrete over abstract",
    body: "Numbers, names, mechanisms. If a sentence could appear on any SaaS landing page, rewrite it until it could only appear on ours.",
    yes: "Reduced quote turnaround by 96% for an Adobe Commerce B2B merchant.",
    no: "Powerful AI-driven insights for the modern merchant.",
  },
  {
    n: "04",
    title: "Warm, not corporate",
    body: "Vortex IQ is built by people who lived the problem. The voice should feel like a senior peer pulling up a chair, not a vendor pitching from a stage. Contractions, second person, plain words.",
    yes: "Your store is already generating signals every second. It's time those signals worked for you, not against you.",
    no: "Vortex IQ enables organisations to optimise their digital commerce operations.",
  },
];

/* ------------------------------------------------------------------ *
 * 08. Tone by surface
 * ------------------------------------------------------------------ */

export const TONE_ROWS = [
  {
    context: "Marketing hero",
    up: "Anti-chaos",
    down: "Concrete, concision beats numbers here",
    anchor: "Stop fighting fires. Protect revenue and automate ops.",
  },
  {
    context: "Product pages",
    up: "Concrete, name mechanisms and proof",
    down: "Nothing, all four run high",
    anchor: "Six pillars, one platform. Eyes, Voice, Hands.",
  },
  {
    context: "Help docs",
    up: "Concrete plus Confident",
    down: "Anti-chaos, less rallying and more explaining",
    anchor: "The Shopify connector is one of 200+ feeding the Nerve Centre.",
  },
  {
    context: "In-app labels",
    up: "Concrete, short and specific",
    down: "Warm, no chatter inside buttons",
    anchor: "Run Audit, not Get started with your audit journey.",
  },
  {
    context: "Empty states and errors",
    up: "Warm",
    down: "Confident, apologise softly when something is wrong",
    anchor: "We couldn't reach Shopify just now. Reconnecting in 30s.",
  },
  {
    context: "Social",
    up: "All four, the format demands voice density",
    down: "Nothing, but keep it short",
    anchor: "One mechanism named per post. One proof point per post.",
  },
];

/* ------------------------------------------------------------------ *
 * 09. The nine triggers
 * ------------------------------------------------------------------ */

export const TRIGGERS = [
  {
    stage: "TOFU",
    question: "Am I in the right place?",
    intro:
      "The reader has never heard of us. They scan in half a second. One job: make them feel named, seen, and at ease.",
    items: [
      {
        n: "01",
        title: "Frame the specific category",
        body: "Name the exact bucket the reader sits in. A specific role plus a specific pain, never a general audience.",
        yes: "For e-commerce ops leads who can't see across their stack.",
        no: "Business intelligence for everyone.",
      },
      {
        n: "02",
        title: "Identity matching, not identity attacking",
        body: "Mirror who they already think they are. Never open with you're doing it wrong. That wakes the defensive brain and they are gone.",
        yes: "You've already built a smart stack. Vortex IQ makes it work as one.",
        no: "Most teams have set up their stack completely wrong.",
      },
      {
        n: "03",
        title: "Fluency",
        body: "Short sentences. Familiar words. Predictable rhythm. Read every top-of-funnel paragraph out loud, and wherever you stumble, rewrite. Non-negotiable on the homepage hero.",
        yes: "Your store is talking. Until now, no one's been listening.",
        no: "Vortex IQ uses multi-modal anomaly detection across heterogeneous commerce platforms to surface latent operational signals.",
      },
    ],
  },
  {
    stage: "MOFU",
    question: "Will it actually work for me?",
    intro:
      "The reader is interested and is now testing plausibility. We are not asking for the sale, we are earning the right to.",
    items: [
      {
        n: "04",
        title: "Name the unique mechanism",
        body: "Don't just say what we do, name how. Give it a noun so a sceptic can file the how away and stop asking. Our nouns are the six pillars.",
        yes: "The Nerve Centre watches it. Vortex Mind explains it. Vortex Apps ships the fix behind staging.",
        no: "Our platform monitors your data and provides recommendations.",
      },
      {
        n: "05",
        title: "Typically atypical",
        body: "Strong claims need calibrating language so the brain does not reject them. Add time frames. Add ratios. Prefer more than half to an exact multiple that sounds invented.",
        yes: "In one Adobe Commerce B2B engagement, quote turnaround dropped 96% over the first quarter.",
        no: "100x faster quotes.",
      },
      {
        n: "06",
        title: "Boring by design",
        body: "Kill objections in monotone. Flat, factual prose signals this is not a big deal. Drama signals the opposite. Two or three lines per objection, no exclamation marks.",
        yes: "Every change runs through staging first. Backup runs continuously. Rollback is one click.",
        no: "Don't worry, your store is totally safe with us!",
      },
    ],
  },
  {
    stage: "BOFU",
    question: "Should I buy?",
    intro: "The reader believes. Now they need to feel safe saying yes.",
    items: [
      {
        n: "07",
        title: "Choice framing",
        body: "Three options, ours in the middle. The brain pattern-matches on three. Make the other two real, not strawmen, so the choice reads as honest.",
        yes: "Three ways to start: keep firefighting in your current stack, hire a contractor at £4k a month to watch it, or start your free 14-day Vortex IQ trial in 10 minutes.",
        no: "Vortex IQ has many ways to start.",
      },
      {
        n: "08",
        title: "Transparent trade-offs",
        body: "Name what is not included. Result, but limitation. Stating the limit builds trust faster than any feature list.",
        yes: "Vortex Apps catches most regressions before they hit production, but it can't catch what your theme partner pushes outside our staging.",
        no: "Total protection across every change.",
      },
      {
        n: "09",
        title: "Big proof, small bite",
        body: "One boulder, not a wall. A grid of twelve logos triggers suspicion. One specific, credible, named proof point lets both the fast and the slow brain sign off.",
        yes: "Olaf Akkerman, GM Retail UK at Microsoft: Vortex IQ stands out by showing merchants what's broken, why it happened, and how to fix it automatically.",
        no: "Trusted by industry leaders worldwide.",
      },
    ],
  },
];

export const PROOF_POINTS = [
  "Krispy Kreme's e-commerce ops team uses Vortex IQ to monitor across BigCommerce, Stripe and GA4 from a single Nerve Centre.",
  "Wells Stringham, Head of Experience at Apply Digital: saved us at least a week of dev time.",
  "Olaf Akkerman, GM Retail UK at Microsoft: Vortex IQ stands out by showing merchants what's broken, why it happened, and how to fix it automatically.",
  "Reduced quote turnaround by 96% on a single Adobe Commerce B2B engagement.",
];

export const OBJECTIONS = [
  {
    q: "Will AI replace my team?",
    a: "Vortex IQ does the watching. Your team makes the calls. Every action ships through human approval unless you say otherwise.",
  },
  {
    q: "Will I lose control of my store?",
    a: "Every change runs through staging first. Backup runs continuously. Rollback is one click.",
  },
  {
    q: "How is this different from analytics tools?",
    a: "Analytics tells you what happened. The AI OS tells you what's wrong, why, and helps you fix it.",
  },
  {
    q: "Do I need a developer?",
    a: "No. Connect your stack from the UI. The AI OS handles the rest.",
  },
];

/* ------------------------------------------------------------------ *
 * 10. Vocabulary
 * ------------------------------------------------------------------ */

export const VOCAB = [
  { use: "AI OS, AI Operating System", not: "platform, tool, app, software" },
  { use: "commerce, e-commerce", not: "online retail, e-tail, digital commerce" },
  { use: "merchant", not: "client, customer, user, end-user" },
  { use: "ops lead, growth lead, founder", not: "stakeholder, decision-maker, executive" },
  { use: "connector", not: "integration, plugin, app" },
  {
    use: "Nerve Centre, Vortex Mind, Ask Viq, Vortex Apps, Vortex Agents, Vortex Memory",
    not: "any paraphrase, any lower-case version",
  },
  { use: "Ask Viq™ on first prominent mention", not: "AskViq, Ask VIQ, ask viq" },
  { use: "detect, explain, fix", not: "monitor, analyse, recommend" },
  { use: "safe, predictable, controlled", not: "bulletproof, guaranteed, foolproof" },
  { use: "over 200 connectors, in the AI OS catalogue", not: "many, all the major, 215+, 70+" },
  { use: "catalogue, mapped", not: "supported, integrated" },
  { use: "14-day free trial, free for 14 days", not: "free forever, freemium" },
  { use: "six pillars", not: "six modules, six products" },
];

export const BANNED_PHRASES = [
  { term: "powered by AI", why: "We are AI. This is filler." },
  { term: "leverage, leveraging", why: "Say use." },
  { term: "best-in-class, world-class, industry-leading", why: "Unfalsifiable, so it reads as noise." },
  { term: "seamless, frictionless, effortless", why: "Every vendor says it, so it says nothing." },
  { term: "transform your business overnight", why: "Fails the calibration test in Trigger 05." },
  { term: "unlock insights", why: "Overworked past the point of meaning." },
  { term: "robust, powerful, scalable", why: "Empty without a specific number beside them." },
  { term: "synergy, ecosystem play, holistic", why: "Consultant language, not merchant language." },
  { term: "most teams get this wrong", why: "Breaks Voice Pillar 01 and Trigger 02." },
  { term: "free forever", why: "Retired June 2026. The offer is a 14-day free trial." },
];

export const PUNCTUATION = [
  {
    instead: "Parenthetical aside",
    use: "comma, comma",
    example: "Vortex IQ, the AI OS for commerce, runs on every connector you have.",
  },
  {
    instead: "Emphasis or summary clause",
    use: "colon or full stop",
    example: "One operating system. Detect, explain, fix.",
  },
  {
    instead: "Strong aside or clarification",
    use: "parentheses",
    example: "Connect your stack (10 minutes max). The Nerve Centre does the rest.",
  },
  { instead: "Range or span", use: "to, or a hyphen", example: "5 to 15 minutes. Q2-Q3." },
  { instead: "Compound modifier", use: "hyphen", example: "AI-driven, 24-7, top-quartile." },
];

export const HOOKS = [
  { line: "Stop fighting fires.", note: "The anti-chaos opener. Also: stop flying blind, stop chasing problems." },
  { line: "Connect. Activate. Optimise.", note: "The three-step process." },
  { line: "Detect. Explain. Fix.", note: "The product loop." },
  { line: "Eyes, Voice, Hands.", note: "The pillar metaphor. Marketing surfaces only, not docs." },
  { line: "The AI OS for commerce.", note: "The elevator line." },
  { line: "Built for merchants, agencies, and tech partners.", note: "The audience triad." },
];

/* ------------------------------------------------------------------ *
 * 11. Structural patterns
 * ------------------------------------------------------------------ */

export const PATTERNS = [
  {
    tag: "Pattern A",
    title: "StoryBrand",
    use: "Long-form: landing pages, sales decks, video scripts",
    steps: [
      "Character: name the merchant and what they want",
      "Problem: external (fragmented tools), internal (overwhelmed team), philosophical (this shouldn't feel like firefighting)",
      "Guide: empathy (we've lived it) plus authority (the logos, the case studies)",
      "Plan: Connect, Activate, Optimise",
      "Call to action: direct (start free) plus transitional (see a sample report)",
      "Success: what life looks like running Vortex IQ",
      "Failure: what it costs to keep doing it the old way",
    ],
  },
  {
    tag: "Pattern B",
    title: "PEACE soundbite",
    use: "Short-form: social, ads, opening paragraphs",
    steps: [
      "Problem: the one most readers nod at",
      "Empathy: we know how this feels",
      "Authority: one credible proof point",
      "CTA: one clear next step",
      "Evidence: one quantified outcome",
    ],
  },
  {
    tag: "Pattern C",
    title: "Three-option close",
    use: "Bottom-of-funnel CTAs and pricing",
    steps: [
      "Always offer exactly three",
      "Position ours as the middle",
      "Make the other two real options, not strawmen",
      "Mark the middle one, the way pricing marks Growth as most popular",
    ],
  },
  {
    tag: "Pattern D",
    title: "Card body",
    use: "KPI and connector cards in the docs",
    steps: [
      "Card class line, category, tier",
      "At a glance",
      "Calculation",
      "Worked example",
      "Sibling cards",
      "Reconciling against the vendor's own dashboard",
      "Known limitations and merchant FAQs",
      "Tracked live in Nerve Centre, the closing CTA",
    ],
  },
];

/* ------------------------------------------------------------------ *
 * 12. Channel playbook
 * ------------------------------------------------------------------ */

export const CHANNELS = [
  {
    name: "Marketing site",
    where: "vortexiq.ai",
    rules: [
      "Lead every page with the AI OS framing.",
      "The hero must pass the half-second scan test.",
      "One big proof point per page, never a wall of logos.",
      "One headline price per pricing tier, with the annual maths in small print.",
      "Keep Growth as the marked middle of the self-serve path.",
    ],
  },
  {
    name: "Comparison hub",
    where: "/vs and /vs/{competitor}",
    rules: [
      "Facts only. Every competitor claim sourced to their own public pages and cited on the page.",
      "No disparagement. Describe accurately what they do well.",
      "Complementary, not superior. They own one slice, we are the cross-stack operating layer.",
      "One clear CTA at the end, the free audit.",
    ],
  },
  {
    name: "Limits and guardrails",
    where: "/trust/limits",
    rules: [
      "Boring by design. State the hard rules in flat prose. The calm tone is the message.",
      "Transparent trade-offs. Ranges not guarantees, live connector counts not roadmap totals.",
      "Keep safety mechanics scoped. Staging and one-click rollback are BigCommerce, Shopify, and Adobe Commerce. Approval-gating is universal.",
    ],
  },
  {
    name: "Help docs",
    where: "docs.vortexiq.ai",
    rules: [
      "Open each connector landing with the AI OS connection: this connector is one of 200+ feeding the Nerve Centre.",
      "Merchant-friendly does not mean stripping the brand frame. Keep the pillar names.",
      "Avoid jargon the merchant will not recognise. Never avoid our own product names.",
      "Worked examples stay concrete and merchant-readable.",
    ],
  },
  {
    name: "In-app",
    where: "app.vortexiq.ai",
    rules: [
      "Buttons: one to three words, verb-led. Run Audit, Connect, View finding.",
      "Empty states: warm and specific. No findings yet. Connect your first source to put the Nerve Centre to work.",
      "Errors: monotone and factual, and always name the next step.",
      "Alerts: lead with impact in plain English. Catalogue drift on 14 SKUs. £8,400 at risk.",
      "Onboarding: name the AI OS on the first screen and set the frame.",
    ],
  },
  {
    name: "Social",
    where: "LinkedIn and X",
    rules: [
      "All four voice pillars run high. The format rewards voice density.",
      "One mechanism named per post.",
      "One proof point per post.",
      "Short. If it needs a scroll, it needs a cut.",
    ],
  },
];

/* ------------------------------------------------------------------ *
 * 13. Worked rewrites
 * ------------------------------------------------------------------ */

export const REWRITES = [
  {
    label: "Homepage hero",
    before:
      "The AI Operating System That Runs Your Entire eCommerce Operation. Deploy a 24/7 Digital Workforce that connects every app in your stack. We give your business the Eyes to monitor every KPI, the Voice to strategize, and the Hands to execute tasks automatically.",
    after:
      "The AI Operating System for E-Commerce. Detect what's broken. Understand why. Fix it safely. Across every platform you run.",
    note: "The original is strong on authority and specifics, but the subhead is one long sentence that fails the fluency test. Eyes, Voice, Hands belongs in the next section, not the hero.",
  },
  {
    label: "KPI card opener",
    before:
      "Active Subscribers (Est.) is a customer lifecycle metric tracked from ActiveCampaign data.",
    after:
      "The Nerve Centre tracks Active Subscribers (Est.) from your ActiveCampaign account in real time. When the number moves, Vortex Mind investigates why, and Ask Viq acts on the finding.",
    note: "Same merchant-readable explanation, but it now ships the brand frame and chains three pillars. Costs nothing in clarity.",
  },
  {
    label: "In-app empty state",
    before:
      "You don't have any findings yet. To get started, please connect your first data source by going to the Connectors page in your Settings.",
    after: "No findings yet. Connect your first source to put the Nerve Centre to work.",
    note: "Shorter, names the mechanism, one CTA.",
  },
  {
    label: "Email subject line",
    before: "Vortex IQ: your weekly performance report is ready",
    after: "What the Nerve Centre found in your store this week",
    note: "Names the mechanism, leads with the value, no brand-stuffing.",
  },
  {
    label: "Pricing display",
    before: "Starter £39/month. Save 20%. £199/month.",
    after: "Growth $1,199/mo, most popular. Billed annually at $14,388. Save 20% a year.",
    note: "One headline figure carries the card. The toggle switches monthly and annual, and the total lives in small print. Never two prices competing for the eye.",
  },
];

/* ------------------------------------------------------------------ *
 * 14. Downloads
 * ------------------------------------------------------------------ */

export const DOWNLOADS = [
  {
    kind: "Markdown",
    ext: ".md",
    title: "Brand guidelines, Markdown",
    body: "The full book as plain Markdown. Drop it into Notion, a docs repo, or an AI writing assistant as the house style file.",
    href: DL_MD,
    size: "One file, no assets",
  },
  {
    kind: "HTML",
    ext: ".html",
    title: "Brand guidelines, HTML",
    body: "A styled, self-contained page. Open it in any browser, share it with an agency, or print it to PDF straight from the browser.",
    href: DL_HTML,
    size: "One file, print-ready",
  },
  {
    kind: "SVG",
    ext: ".svg",
    title: "Logo, full colour",
    body: "The primary mark for white and light surfaces. Vector, so it scales to any size without loss.",
    href: "/assets/webflow/vlogo.svg",
    size: "SVG, transparent",
  },
  {
    kind: "SVG",
    ext: ".svg",
    title: "Logo, white",
    body: "The reversed mark for dark and brand-deep backgrounds. Same geometry, single colour.",
    href: "/assets/webflow/vlogo-white.svg",
    size: "SVG, transparent",
  },
];

# Vortex IQ Brand Guidelines

**Version 2.1 · Updated July 2026 · Owned jointly by marketing and product**

The single source of truth for how Vortex IQ looks and sounds, across the marketing site, the help docs, and the in-app product surfaces. Anyone producing customer-facing work reads this first.

Live version: https://www.vortexiq.ai/branding
Questions, corrections, asset requests: hey@vortexiq.ai

If another document contradicts this one, this one wins. Update this document; do not fork the brand in your channel.

---

## Contents

1. [The North Star](#1-the-north-star)
2. [Logo](#2-logo)
3. [Colour](#3-colour)
4. [Typography](#4-typography)
5. [Design tokens](#5-design-tokens)
6. [Components](#6-components)
7. [The six pillars](#7-the-six-pillars)
8. [Voice pillars](#8-voice-pillars)
9. [Tone by surface](#9-tone-by-surface)
10. [The nine triggers](#10-the-nine-triggers)
11. [Vocabulary](#11-vocabulary)
12. [Structural patterns](#12-structural-patterns)
13. [Channel playbook](#13-channel-playbook)
14. [Worked rewrites](#14-worked-rewrites)
15. [How to use this document](#15-how-to-use-this-document)

---

## 1. The North Star

> **Vortex IQ is the world's first AI Operating System for e-commerce.**
> One command centre that detects what's wrong, explains why, and helps you fix it safely, across every platform you run.

AI OS and AI Operating System are the public umbrella. Use them. This is the brand promise, not internal lingo.

The promise has three load-bearing words:

**AI.** Not analytics, not dashboards. Active, not passive. The system does the watching so your team does the deciding.

**Operating System.** The thing your stack runs on, not another tool you bolt on beside it. That distinction carries the whole positioning.

**For e-commerce.** A narrow category, named in the first line. Not "for businesses." Not "for retailers." Specifically e-commerce.

### One loop, five steps

| Step | Name | What happens |
|---|---|---|
| 01 | Detect | watch every KPI live |
| 02 | Diagnose | find the root cause |
| 03 | Act | turn findings into work |
| 04 | Deploy | approval-gated, reversible |
| 05 | Learn | remember and compound |

Six pillars run this loop. When both numbers appear together, keep them reconciled: six pillars, five steps.

---

## 2. Logo

One mark, two finishes.

| Finish | File | Use on |
|---|---|---|
| Full colour | `vlogo.svg` | White and light surfaces |
| White | `vlogo-white.svg` | Dark and brand-deep (`#0c061f`) backgrounds |

Download both from https://www.vortexiq.ai/branding

### Clear space

Keep clear space around the mark on all four sides equal to the height of the V. Nothing enters that space: no text, no rule, no other logo, no image edge.

### Minimum size

| Medium | Minimum width |
|---|---|
| Digital | 110px |
| Print | 25mm |

Below these sizes the IQ stops resolving. If the space is tighter, use the icon on its own rather than shrinking the full mark.

### Do

- Use the full-colour logo on white and light surfaces.
- Switch to the white logo on dark or brand-deep backgrounds.
- Keep clear space around the mark equal to the height of the V.
- Scale proportionally and use the provided SVG wherever possible.
- Hold a minimum width of 110px on screen and 25mm in print.
- Place it on enough contrast that it stays clearly legible.

### Don't

- Recolour, add gradients, or apply effects to the mark.
- Stretch, squash, rotate, or distort the proportions.
- Place the logo on a busy image or a low-contrast background.
- Add a drop shadow, outline, or box around the mark.
- Recreate, re-typeset, or alter the wordmark in any way.
- Write VortexIQ, Vortex-IQ, or VORTEX IQ. It is Vortex IQ, two words.

Need a transparent PNG, an EPS, the icon on its own, or a co-branded lock-up? Email hey@vortexiq.ai and we will send the full asset pack the same day.

---

## 3. Colour

Purple leads. Deep purple grounds dark sections and the footer. Everything else supports. Status colours carry meaning, so they never appear as decoration.

### Brand

| Token | Value | Role |
|---|---|---|
| `--brand-purple` | `#5529d6` | Primary, buttons, links |
| `--brand-purple-mid` | `#392bd5` | Hover, secondary |
| `--brand-purple-light` | `#a58af3` | Soft accent, gradient stop |
| `--brand-purple-deep` | `#0c061f` | Dark backgrounds, footer |
| `--brand-blue` | `#004794` | Secondary accent, sparing |

### Surfaces

| Token | Value | Role |
|---|---|---|
| `--white` | `#ffffff` | Base canvas |
| `--surface-soft` | `#f6f5f3` | Alternating sections |
| `--surface-tint` | `#f3f0fc` | Brand wash, callouts |
| `--neutral-2` | `#e8e6e3` | Warm panel |

### Text

| Token | Value | Role |
|---|---|---|
| `--primary` | `#222325` | Headings and ink |
| `--text-body` | `rgba(0,0,0,.60)` | Body copy |
| `--text-faded` | `rgba(0,0,0,.40)` | Labels and metadata |
| `--border-dark` | `rgba(0,0,0,.10)` | Hairline borders |

Pure black is never used.

### Status

| Token | Value | Meaning |
|---|---|---|
| `--success` | `#1f9e54` | Healthy, fixed, live |
| `--danger` | `#d23f31` | Incident, revenue at risk |
| `--warning` | `#c47d12` | Watching, anomaly |

### Gradients

| Token | Value | Use |
|---|---|---|
| `--brand-gradient` | `linear-gradient(135deg,#5529d6,#0c061f 50%,#5529d6 75%)` | Brand cards, icon tiles, the banner above the footer |
| `--brand-gradient-soft` | `linear-gradient(135deg,#a58af3,#5529d6)` | Gradient text, underline sweeps, progress states |

### Contrast rule

Purple text sits on white or the purple tint, never on the mid purple. White text sits on purple or purple-deep. Every text and background pair we ship clears WCAG AA at body size.

---

## 4. Typography

Geist sets every headline and paragraph. Geist Mono handles eyebrows, labels, metadata, and code: the small, precise type that gives the brand its technical edge.

| Family | Weights | Use |
|---|---|---|
| Geist | 400, 500, 600, 700 | Display, headings, running text |
| Geist Mono | 400, 500 | Eyebrows, labels, metadata, code |

Stylistic sets `ss01`, `ss03` and `ss04` are enabled site-wide via `font-feature-settings`.

### The scale

| Token | Size | Weight | Use |
|---|---|---|---|
| display / h1 | `clamp(2.6rem, 6vw, 4.6rem)` | 500 | Page hero, one per page |
| h2 | `clamp(2rem, 3.8vw, 3.1rem)` | 500 | Section headings |
| h3 | `1.18rem` | 600 | Card titles, sub-headings |
| lede | `1.22rem` | 400 | The paragraph under a heading |
| body | `1.0625rem` | 400 | Running text |
| eyebrow | `0.72rem` mono | 500 | Section label above a heading |
| label | `0.72rem` mono | 500 | Chips, metadata, step numbers |

### Rules

- One h1 per page. Headings never skip a level.
- Headline tracking is negative (-0.02em to -0.025em).
- Mono labels run positive (0.14em to 0.16em), uppercase.
- That tracking contrast is a brand signal. Keep it.

---

## 5. Design tokens

### Radius

| Token | Value | Use |
|---|---|---|
| `--radius` | `10px` | Cards, panels, inputs |
| `--radius-pill` | `200px` | Every button and chip |
| (product visuals) | `14px to 18px` | Floating console cards |

### Layout

| Token | Value | Use |
|---|---|---|
| `--max` | `1180px` | Container width |
| `--bento-gap` | `30px` | Grid gap, every bento |
| `.section` | `7.5rem 0` | Vertical section rhythm |
| nav height | `4.5rem` | Fixed header |

### Elevation

| Token | Value | Use |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgba(20,12,40,.06), 0 1px 3px rgba(20,12,40,.05)` | Chips, small tiles |
| `--shadow-md` | `0 6px 20px rgba(20,12,40,.07), 0 2px 6px rgba(20,12,40,.05)` | Raised cards |
| `--shadow-lg` | `0 20px 50px rgba(20,12,40,.10), 0 6px 16px rgba(20,12,40,.06)` | Hover state, floating visuals |
| `--shadow-brand` | `0 14px 40px rgba(85,41,214,.22)` | Primary button hover |

### Motion

| Token | Value | Use |
|---|---|---|
| `--ease` | `cubic-bezier(.16,1,.3,1)` | Every transition |
| hover lift | `translateY(-1px to -3px)` | Buttons and cards |
| reveal | 600ms, 22px rise | Scroll-in sections |
| reduced motion | animations off | Always honoured |

---

## 6. Components

Everything below is built from the tokens in sections 3 to 5. If a component already exists, use it. If it does not, build it from the tokens rather than inventing new ones.

### Buttons

Always pills (`--radius-pill`). Verb-led labels, one to three words.

| Variant | Height | Use |
|---|---|---|
| primary large | 56px | The single hero CTA |
| primary | 50px | Section CTAs |
| primary small | 40px | Nav, cards |
| ghost | 50px | The secondary of a pair |
| text link | inline | Tertiary, mono, purple underline |

### Chips and badges

Default, brand, healthy (green with a pulsing dot), incident (red), watching (amber), category tag, version chip, status bar. Status colour always maps to state, never to decoration.

### Cards

10px radius, hairline border, 2rem padding, lift on hover. Four variants: default (white), tint (purple wash), brand (gradient, white text), soft (grey, turns white on hover).

### Building blocks

Gradient icon tile, small icon tile, step number, checklist (brand tick and danger cross), mono feature list, stat callout, tag row.

### Signature product visuals

Two visuals carry the product story and should appear on any surface that needs to show the loop:

- **Detect, explain, fix loop card.** Three rows, each naming the pillar that owns the step. Rows highlight in sequence.
- **Ask Viq diagnosis console.** Question, typing state, cited answer, three confirmed steps, recovered value, apply-fix CTA.

---

## 7. The six pillars

Do not just say what we do, name how. A sceptic who can file the how away stops asking. These six nouns are the how, and they are always title-case and never paraphrased.

| Pillar | Metaphor | What it is | How to write it |
|---|---|---|---|
| **Nerve Centre** | Eyes | The detection layer. Every KPI, live, across 200+ connectors. | Always title-case. Always paired with real-time or continuous. |
| **Vortex Mind** | Judgement | The diagnostic layer. It investigates the finding and returns the root cause. | Always paired with explains why or root cause. |
| **Ask Viq** | Voice | The conversational interface, cited back to the graph it answered from. | Ask Viq™ on the first prominent mention of a page. Bare Ask Viq after that. |
| **Vortex Apps** | Guardrails | Staging, backup, and one-click rollback around every change. | Always paired with safe or predictable. |
| **Vortex Agents** | Hands | Build and manage the AI agents that monitor, analyse, and act across the stack. | Always paired with AI agents or act safely. Agent Hub is retired. |
| **Vortex Memory** | Recall | The graph that remembers every signal, fix, and decision, per store. | Always paired with learns or gets sharper over time. |

Say **six pillars**, not six modules. The six run one continuous five-step loop, so when both numbers appear together, keep them reconciled: six pillars, five steps.

**AI OS** is the umbrella over all six, and it always takes a noun: *the AI OS for commerce*, not a bare *AI OS*.

The **Eyes, Voice, Hands** metaphor is approved shorthand for a marketing surface. Use it sparingly, and not in docs.

---

## 8. Voice pillars

Four qualities. Run any sentence against these four. If it fails one, it is not finished.

### Pillar 01: Confident, not arrogant

We have built this for global brands. We know the chaos because we have fixed it. Write from that authority, but never lecture, never condescend, never imply the reader is failing.

- Yes: "We've lived the chaos, fixed the chaos, and built the AI system that stops the chaos."
- No: "Most e-commerce teams get this completely wrong."

### Pillar 02: Anti-chaos, action-led

The brand exists because running e-commerce should not feel like fighting fires. Every line should imply less work, less anxiety, more control. Lead with verbs. Stop X, start Y is on-brand and repeatable.

- Yes: "Stop fighting fires. Protect revenue and automate ops."
- No: "Our advanced platform uses cutting-edge AI to deliver insights."

### Pillar 03: Concrete over abstract

Numbers, names, mechanisms. If a sentence could appear on any SaaS landing page, rewrite it until it could only appear on ours.

- Yes: "Reduced quote turnaround by 96% for an Adobe Commerce B2B merchant."
- No: "Powerful AI-driven insights for the modern merchant."

### Pillar 04: Warm, not corporate

Vortex IQ is built by people who lived the problem. The voice should feel like a senior peer pulling up a chair, not a vendor pitching from a stage. Contractions, second person, plain words.

- Yes: "Your store is already generating signals every second. It's time those signals worked for you, not against you."
- No: "Vortex IQ enables organisations to optimise their digital commerce operations."

---

## 9. Tone by surface

Voice stays constant. Tone shifts.

| Surface | Dial up | Dial down | Anchor |
|---|---|---|---|
| Marketing hero | Anti-chaos | Concrete, concision beats numbers here | *Stop fighting fires. Protect revenue and automate ops.* |
| Product pages | Concrete, name mechanisms and proof | Nothing, all four run high | *Six pillars, one platform. Eyes, Voice, Hands.* |
| Help docs | Concrete plus Confident | Anti-chaos, less rallying and more explaining | *The Shopify connector is one of 200+ feeding the Nerve Centre.* |
| In-app labels | Concrete, short and specific | Warm, no chatter inside buttons | *Run Audit, not Get started with your audit journey.* |
| Empty states and errors | Warm | Confident, apologise softly when something is wrong | *We couldn't reach Shopify just now. Reconnecting in 30s.* |
| Social | All four, the format demands voice density | Nothing, but keep it short | *One mechanism named per post. One proof point per post.* |

---

## 10. The nine triggers

Where the reader stands changes what they need to hear. Use this as a checklist before anything ships.

### TOFU: "Am I in the right place?"

The reader has never heard of us. They scan in half a second. One job: make them feel named, seen, and at ease.

#### Trigger 01: Frame the specific category

Name the exact bucket the reader sits in. A specific role plus a specific pain, never a general audience.

- Yes: "For e-commerce ops leads who can't see across their stack."
- No: "Business intelligence for everyone."

#### Trigger 02: Identity matching, not identity attacking

Mirror who they already think they are. Never open with "you're doing it wrong". That wakes the defensive brain and they are gone.

- Yes: "You've already built a smart stack. Vortex IQ makes it work as one."
- No: "Most teams have set up their stack completely wrong."

#### Trigger 03: Fluency

Short sentences. Familiar words. Predictable rhythm. Read every top-of-funnel paragraph out loud, and wherever you stumble, rewrite. Non-negotiable on the homepage hero.

- Yes: "Your store is talking. Until now, no one's been listening."
- No: "Vortex IQ uses multi-modal anomaly detection across heterogeneous commerce platforms to surface latent operational signals."

### MOFU: "Will it actually work for me?"

The reader is interested and is now testing plausibility. We are not asking for the sale, we are earning the right to.

#### Trigger 04: Name the unique mechanism

Don't just say what we do, name how. Give it a noun so a sceptic can file the how away and stop asking. Our nouns are the six pillars.

- Yes: "The Nerve Centre watches it. Vortex Mind explains it. Vortex Apps ships the fix behind staging."
- No: "Our platform monitors your data and provides recommendations."

#### Trigger 05: Typically atypical

Strong claims need calibrating language so the brain does not reject them. Add time frames. Add ratios. Prefer "more than half" to an exact multiple that sounds invented.

- Yes: "In one Adobe Commerce B2B engagement, quote turnaround dropped 96% over the first quarter."
- No: "100x faster quotes."

#### Trigger 06: Boring by design

Kill objections in monotone. Flat, factual prose signals this is not a big deal. Drama signals the opposite. Two or three lines per objection, no exclamation marks.

| Objection | Answer |
|---|---|
| Will AI replace my team? | Vortex IQ does the watching. Your team makes the calls. Every action ships through human approval unless you say otherwise. |
| Will I lose control of my store? | Every change runs through staging first. Backup runs continuously. Rollback is one click. |
| How is this different from analytics tools? | Analytics tells you what happened. The AI OS tells you what's wrong, why, and helps you fix it. |
| Do I need a developer? | No. Connect your stack from the UI. The AI OS handles the rest. |

### BOFU: "Should I buy?"

The reader believes. Now they need to feel safe saying yes.

#### Trigger 07: Choice framing

Three options, ours in the middle. The brain pattern-matches on three. Make the other two real, not strawmen, so the choice reads as honest.

- Yes: "Three ways to start: keep firefighting in your current stack, hire a contractor at £4k a month to watch it, or start your free 14-day Vortex IQ trial in 10 minutes."
- No: "Vortex IQ has many ways to start."

#### Trigger 08: Transparent trade-offs

Name what is not included. Result, but limitation. Stating the limit builds trust faster than any feature list.

- Yes: "Vortex Apps catches most regressions before they hit production, but it can't catch what your theme partner pushes outside our staging."
- No: "Total protection across every change."

#### Trigger 09: Big proof, small bite

One boulder, not a wall. A grid of twelve logos triggers suspicion. One specific, credible, named proof point lets both the fast and the slow brain sign off.

Approved proof points. Pick the one that fits the audience, and show one, never all four:

- Krispy Kreme's e-commerce ops team uses Vortex IQ to monitor across BigCommerce, Stripe and GA4 from a single Nerve Centre.
- Wells Stringham, Head of Experience at Apply Digital: "Saved us at least a week of dev time."
- Olaf Akkerman, GM Retail UK at Microsoft: "Vortex IQ stands out by showing merchants what's broken, why it happened, and how to fix it automatically."
- Reduced quote turnaround by 96% on a single Adobe Commerce B2B engagement.

---

## 11. Vocabulary

### Always use

| Use | Not |
|---|---|
| AI OS, AI Operating System | platform, tool, app, software |
| commerce, e-commerce | online retail, e-tail, digital commerce |
| merchant | client, customer, user, end-user |
| ops lead, growth lead, founder | stakeholder, decision-maker, executive |
| connector | integration, plugin, app |
| Nerve Centre, Vortex Mind, Ask Viq, Vortex Apps, Vortex Agents, Vortex Memory | any paraphrase, any lower-case version |
| Ask Viq™ on first prominent mention | AskViq, Ask VIQ, ask viq |
| detect, explain, fix | monitor, analyse, recommend |
| safe, predictable, controlled | bulletproof, guaranteed, foolproof |
| over 200 connectors, in the AI OS catalogue | many, all the major, 215+, 70+ |
| catalogue, mapped | supported, integrated |
| 14-day free trial, free for 14 days | free forever, freemium |
| six pillars | six modules, six products |

On "catalogue" versus "supported": the catalogue has manifests, cards, and audits ready to light up. Production coverage is broadest where merchants connect first. "Supported" implies production-tested for all, which is not the claim we are making.

### Banned phrases

| Phrase | Why |
|---|---|
| powered by AI | We are AI. This is filler. |
| leverage, leveraging | Say use. |
| best-in-class, world-class, industry-leading | Unfalsifiable, so it reads as noise. |
| seamless, frictionless, effortless | Every vendor says it, so it says nothing. |
| transform your business overnight | Fails the calibration test in Trigger 05. |
| unlock insights | Overworked past the point of meaning. |
| robust, powerful, scalable | Empty without a specific number beside them. |
| synergy, ecosystem play, holistic | Consultant language, not merchant language. |
| most teams get this wrong | Breaks Voice Pillar 01 and Trigger 02. |
| free forever | Retired June 2026. The offer is a 14-day free trial. |

"Start free" stays valid as a CTA, because the trial does start free.

### Punctuation

**Never use an em dash. Never use an en dash either.** Not in marketing copy, not in docs, not in CMS content, not in a social post. The em dash is overused, it reads as machine-written to a lot of readers, and the voice prefers shorter, more declarative sentences anyway. A hyphen covers every legitimate compound case.

| Where you would reach for one | Use instead | Example |
|---|---|---|
| Parenthetical aside | comma, comma | *Vortex IQ, the AI OS for commerce, runs on every connector you have.* |
| Emphasis or summary clause | colon or full stop | *One operating system. Detect, explain, fix.* |
| Strong aside or clarification | parentheses | *Connect your stack (10 minutes max). The Nerve Centre does the rest.* |
| Range or span | "to", or a hyphen | *5 to 15 minutes. Q2-Q3.* |
| Compound modifier | hyphen | *AI-driven, 24-7, top-quartile.* |

### Owned hooks

House style. Repeat them, they build recall.

| Hook | Note |
|---|---|
| Stop fighting fires. | The anti-chaos opener. Also: stop flying blind, stop chasing problems. |
| Connect. Activate. Optimise. | The three-step process. |
| Detect. Explain. Fix. | The product loop. |
| Eyes, Voice, Hands. | The pillar metaphor. Marketing surfaces only, not docs. |
| The AI OS for commerce. | The elevator line. |
| Built for merchants, agencies, and tech partners. | The audience triad. |

---

## 12. Structural patterns

### Pattern A: StoryBrand

For long-form: landing pages, sales decks, video scripts.

1. Character: name the merchant and what they want
2. Problem: external (fragmented tools), internal (overwhelmed team), philosophical (this shouldn't feel like firefighting)
3. Guide: empathy (we've lived it) plus authority (the logos, the case studies)
4. Plan: Connect, Activate, Optimise
5. Call to action: direct (start free) plus transitional (see a sample report)
6. Success: what life looks like running Vortex IQ
7. Failure: what it costs to keep doing it the old way

### Pattern B: PEACE soundbite

For short-form: social, ads, opening paragraphs.

1. **P**roblem: the one most readers nod at
2. **E**mpathy: we know how this feels
3. **A**uthority: one credible proof point
4. **C**TA: one clear next step
5. **E**vidence: one quantified outcome

### Pattern C: Three-option close

For bottom-of-funnel CTAs and pricing.

1. Always offer exactly three
2. Position ours as the middle
3. Make the other two real options, not strawmen
4. Mark the middle one, the way pricing marks Growth as most popular

### Pattern D: Card body

For KPI and connector cards in the docs.

1. Card class line, category, tier
2. At a glance
3. Calculation
4. Worked example
5. Sibling cards
6. Reconciling against the vendor's own dashboard
7. Known limitations and merchant FAQs
8. Tracked live in Nerve Centre, the closing CTA

---

## 13. Channel playbook

### Marketing site (vortexiq.ai)

- Lead every page with the AI OS framing.
- The hero must pass the half-second scan test.
- One big proof point per page, never a wall of logos.
- One headline price per pricing tier, with the annual maths in small print.
- Keep Growth as the marked middle of the self-serve path.

### Comparison hub (/vs and /vs/{competitor})

These pages carry legal and trust risk, so the voice is tighter here than anywhere else on the site.

- Facts only. Every competitor claim sourced to their own public pages and cited on the page.
- No disparagement. Describe accurately what they do well.
- Complementary, not superior. They own one slice, we are the cross-stack operating layer.
- One clear CTA at the end, the free audit.

### Limits and guardrails (/trust/limits)

The honest "what the agent will never do without you" page, and the clearest expression of the North Star.

- Boring by design. State the hard rules in flat prose. The calm tone is the message.
- Transparent trade-offs. Ranges not guarantees, live connector counts not roadmap totals.
- Keep safety mechanics scoped. Staging and one-click rollback are BigCommerce, Shopify, and Adobe Commerce. Approval-gating is universal.

### Help docs

- Open each connector landing with the AI OS connection: this connector is one of 200+ feeding the Nerve Centre.
- Merchant-friendly does not mean stripping the brand frame. Keep the pillar names.
- Avoid jargon the merchant will not recognise. Never avoid our own product names.
- Worked examples stay concrete and merchant-readable.

### In-app (app.vortexiq.ai)

- Buttons: one to three words, verb-led. Run Audit, Connect, View finding.
- Empty states: warm and specific. "No findings yet. Connect your first source to put the Nerve Centre to work."
- Errors: monotone and factual, and always name the next step.
- Alerts: lead with impact in plain English. "Catalogue drift on 14 SKUs. £8,400 at risk."
- Onboarding: name the AI OS on the first screen and set the frame.

### Social

- All four voice pillars run high. The format rewards voice density.
- One mechanism named per post.
- One proof point per post.
- Short. If it needs a scroll, it needs a cut.

---

## 14. Worked rewrites

### Homepage hero

**Before:** The AI Operating System That Runs Your Entire eCommerce Operation. Deploy a 24/7 Digital Workforce that connects every app in your stack. We give your business the Eyes to monitor every KPI, the Voice to strategize, and the Hands to execute tasks automatically.

**After:** The AI Operating System for E-Commerce. Detect what's broken. Understand why. Fix it safely. Across every platform you run.

The original is strong on authority and specifics, but the subhead is one long sentence that fails the fluency test. Eyes, Voice, Hands belongs in the next section, not the hero.

### KPI card opener

**Before:** Active Subscribers (Est.) is a customer lifecycle metric tracked from ActiveCampaign data.

**After:** The Nerve Centre tracks Active Subscribers (Est.) from your ActiveCampaign account in real time. When the number moves, Vortex Mind investigates why, and Ask Viq acts on the finding.

Same merchant-readable explanation, but it now ships the brand frame and chains three pillars. Costs nothing in clarity.

### In-app empty state

**Before:** You don't have any findings yet. To get started, please connect your first data source by going to the Connectors page in your Settings.

**After:** No findings yet. Connect your first source to put the Nerve Centre to work.

Shorter, names the mechanism, one CTA.

### Email subject line

**Before:** Vortex IQ: your weekly performance report is ready

**After:** What the Nerve Centre found in your store this week

Names the mechanism, leads with the value, no brand-stuffing.

### Pricing display

**Before:** Starter £39/month. Save 20%. £199/month.

**After:** Growth $1,199/mo, most popular. Billed annually at $14,388. Save 20% a year.

One headline figure carries the card. The toggle switches monthly and annual, and the total lives in small print. Never two prices competing for the eye.

---

## 15. How to use this document

**Writing for any Vortex IQ surface?** Read section 8 (voice pillars), section 9 (the tone modifier for your channel), section 11 (vocabulary), and the relevant example in section 14.

**Designing a new page or screen?** Read sections 3 to 6. If a component already exists, use it. If it does not, build it from the tokens rather than inventing new ones.

**Editing existing copy?** Run it through the vocabulary table in section 11, then check the trigger relevant to its funnel position in section 10.

**Using an AI writing assistant?** Give it this file as the house style. The em dash rule and the banned phrase list are the two it most often needs told twice.

**Disagree with something here?** Update this document. Do not fork the brand in your channel.

**Spotted drift on the live product?** Flag it at hey@vortexiq.ai. The cost of an inconsistent voice is trust. The cost of one fix is ten minutes.

---

Vortex IQ · The AI OS for commerce · https://www.vortexiq.ai
Brand guidelines v2.1, July 2026. Owned jointly by marketing and product.

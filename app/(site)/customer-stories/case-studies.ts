// Case study content ported from vortexiq.ai/customer-stories/* (wording preserved).
// Each entry powers the dynamic route app/(site)/customer-stories/[slug]/page.tsx
// and is linked from the customer-stories listing grid.

export type Metric = { value: string; label: string };
export type Quote = { text: string; name?: string; role?: string };
export type Section = {
  heading: string;
  paras?: string[];
  lead?: string; // bold intro line above bullets
  bullets?: string[];
};
export type Block =
  | ({ type: "section" } & Section)
  | ({ type: "quote" } & Quote);

export type CaseStudy = {
  slug: string;
  company: string;
  eyebrow: string;
  title: string;
  lede: string;
  logo: string;
  metrics: Metric[];
  blocks: Block[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "case-study-glerup-revere",
    company: "The Revere Group · Glerup",
    eyebrow: "Ecommerce growth with AI",
    title: "Deploy or destroy? How The Revere Group eliminated the fear of BigCommerce updates",
    lede:
      "The Revere Group eliminated deployment fear with Vortex IQ StagingPro: 65% shorter development cycles and 100% incident-free deployments on BigCommerce.",
    logo: "https://cdn.prod.website-files.com/68bff49fa25caa581ab0524a/68da28056b56c687e9008e87_image%2036.avif",
    metrics: [
      { value: "65%", label: "Reduction in development cycle" },
      { value: "100%", label: "Incident-free deployments" },
      { value: "40%", label: "Increase in agency productivity" },
    ],
    blocks: [
      {
        type: "section",
        heading: "The problem: a broken development workflow",
        paras: [
          "The company's existing sandbox environment required manual data synchronization that was both time-consuming and unreliable. This created three critical business challenges:",
        ],
        bullets: [
          "Development teams couldn't accurately test changes since staging never matched production.",
          "New features and updates had to be tested either blindly or directly in production.",
          "Collaboration with their newly onboarded development agency was hampered by data inconsistency concerns.",
        ],
      },
      {
        type: "quote",
        text:
          "We essentially had two separate environments that never talked to each other. Every change required double work and we still couldn't be confident things would work when deployed.",
        name: "Josh Smith",
        role: "Application Developer",
      },
      {
        type: "section",
        heading: "The solution: implementing Vortex IQ StagingPro",
        paras: [
          "StagingPro provided an integrated solution that transformed their development process through three key capabilities.",
        ],
        lead: "First, automated bulk and selective migrations eliminated manual data transfers. The team could now:",
        bullets: [
          "Create perfect production copies quickly.",
          "Push specific updates like product variants or category changes.",
          "Schedule deployments during off-peak hours.",
        ],
      },
      {
        type: "section",
        heading: "Safe testing and secure collaboration",
        lead: "Second, the secure staging environment enabled proper testing of all changes before deployment, including:",
        bullets: [
          "Full ADA compliance validation.",
          "Complex product reorganisations.",
          "B2B-specific workflows like case quantity.",
        ],
        paras: [
          "Third, built-in data anonymisation allowed safe collaboration with external developers while protecting sensitive customer information.",
        ],
      },
      {
        type: "section",
        heading: "Conclusion",
        paras: [
          "With StagingPro now fully integrated into their workflow, The Revere Group has established a robust foundation for ongoing digital innovation. The solution has not only solved their immediate staging challenges but has created new opportunities for efficient development and testing.",
          "The company plans to further leverage StagingPro's capabilities for upcoming initiatives including staged testing of new B2B features, expansion of scheduled deployment workflows, and automated monthly catalog updates.",
        ],
      },
    ],
  },
  {
    slug: "case-study-radiant-health",
    company: "Apply Digital · Radiant Health",
    eyebrow: "Ecommerce AI success",
    title: "How Apply Digital enabled Radiant Health to launch dual-market e-commerce stores in record time",
    lede:
      "Apply Digital used StagingPro to help Radiant Health launch dual-region e-commerce stores in three months, cutting storefront duplication from 7-10 developer days to under one day.",
    logo: "https://cdn.prod.website-files.com/68bff49fa25caa581ab0524a/68da2805906c5fe5e3e7ba26_image%2035.avif",
    metrics: [
      { value: "3 Months", label: "Launched dual-region stores within the project deadline" },
      { value: "90%", label: "Cut development efforts, saving time and cost" },
      { value: "<1 Day", label: "To duplicate a full storefront, down from 7 to 10 days" },
    ],
    blocks: [
      {
        type: "section",
        heading: "The problem: a broken development workflow",
        paras: [
          "Radiant Health had no prior digital infrastructure, no e-commerce platform, CRM, or branded email, despite being an established wellness brand. The team needed to launch two region-specific stores (Canada and US) with slightly different content due to Canadian health compliance rules. With only a small team and a three-month deadline, manual duplication of the site was estimated to take 7 to 10 developer days, time they couldn't afford.",
        ],
        lead: "Key challenges:",
        bullets: [
          "No existing e-commerce setup or automation tools.",
          "Regulatory requirements demanded two separate but similar storefronts.",
          "A strict three-month launch timeline.",
          "Manual duplication would be slow and error-prone.",
          "Ongoing updates required selective content control.",
        ],
      },
      {
        type: "section",
        heading: "The solution: implementing StagingPro for speed and control",
        paras: [
          "Apply Digital used StagingPro's Plus Plan to rapidly clone Radiant Health's Canadian storefront for the US market. With Bulk Content Migration, they copied products, content, themes, and settings in hours, saving over a week of manual effort.",
          "Selective Content Migration then allowed them to update regional content such as regulatory messaging and shipping policies without touching the entire site. This approach was ideal for a small product catalogue and ensured both stores were compliant, consistent, and quick to launch.",
          "To support code deployment, the team integrated GitHub for version-controlled theme changes and rollbacks, enabling safe, fast iterations. Instead of using a multi-storefront setup, the team opted for two separate sites, each tailored to its respective market, allowing clearer separation of codebases, easier region-specific updates, and more control during deployment.",
        ],
        lead: "Key capabilities used:",
        bullets: [
          "Bulk Content Migration: duplicated entire storefronts in hours.",
          "Selective Content Migration: enabled precise regional updates.",
          "Multi-Storefront Dashboard: central control over all environments.",
          "GitHub Integration: safe, trackable code deployment and rollback.",
        ],
      },
      {
        type: "quote",
        text:
          "We realized early in our strategy & planning phase that using StagingPro made duplicating the Canadian site for the US market a no-brainer. It saved us at least a week of dev time and let us focus on localisation and compliance, not rebuilding. For a small but high-growth merchant like Radiant Health, this was crucial.",
        name: "Wells Stringham",
        role: "Head of Experience, Apply Digital",
      },
      {
        type: "section",
        heading: "Conclusion: a foundation for growth",
        paras: [
          "This engagement illustrates how an agency like Apply Digital can empower digital-first transformation for a legacy brand using the right tools. StagingPro's ability to manage multi-storefront development, push code via GitHub, and enable granular content control meant Radiant Health could go live faster, reduce risk, and support future scalability.",
          "From no online sales to a dual-market e-commerce engine, Radiant Health now has the infrastructure in place to pursue multi-million growth.",
        ],
      },
    ],
  },
  {
    slug: "case-study-menkind",
    company: "Menkind",
    eyebrow: "Ecommerce staging",
    title: "Menkind safely implemented a new, business-critical search platform",
    lede:
      "Gift and gadget retailer Menkind used StagingPro to mirror their live store, giving Algolia a complete product catalogue and enabling safe, confident search testing before launch.",
    logo: "https://cdn.prod.website-files.com/68bff49fa25caa581ab0524a/68da280551fda1d89b0b73a1_image%2037.avif",
    metrics: [
      { value: "100%", label: "Production data available for testing" },
      { value: "Zero", label: "Risk to live operations" },
      { value: "Faster", label: "Time to market" },
    ],
    blocks: [
      {
        type: "section",
        heading: "The challenge",
        paras: [
          "Gift and gadget retailer Menkind used StagingPro to mirror their live store, giving Algolia a complete product catalogue and enabling safe, confident search testing before launch.",
        ],
      },
      {
        type: "section",
        heading: "The solution",
        paras: [
          "Menkind used Vortex IQ's StagingPro to create a high-fidelity staging environment mirroring their live store, enabling:",
        ],
        bullets: [
          "Replicate the entire product catalogue: bulk content migration provided Algolia with complete, real-world data for accurate indexing and testing.",
          "Test configurations with confidence: the merchandising team could safely test new search configurations and rules in a production-like environment.",
          "Collaborate efficiently with agency: enabled smooth implementation with agency partner IDHL, reducing risk and accelerating deployment.",
        ],
      },
      {
        type: "quote",
        text:
          "StagingPro is going to be instrumental in its success and massively reducing the time to go live.",
      },
      {
        type: "section",
        heading: "From safe integrations to intelligent monitoring",
        paras: [
          "The ability to safely test and deploy third-party integrations is fundamental to healthy e-commerce operations. Vortex IQ's Agent Hub extends this principle: AI agents facilitate safe testing while monitoring third-party tool performance 24/7, alerting to issues and optimization opportunities.",
        ],
      },
    ],
  },
  {
    slug: "case-study-crown-packaging",
    company: "Crown Packaging",
    eyebrow: "Ecommerce growth with AI",
    title: "Crown Packaging builds a transactional B2B storefront with Vortex IQ StagingPro",
    lede:
      "Crown Packaging, an $800M global packaging leader, embarked on a major digital initiative to launch its first fully transactional B2B ecommerce storefront. Their previous online store was purely informational: customers could browse but could not purchase.",
    logo: "https://cdn.prod.website-files.com/68bff49fa25caa581ab0524a/68da28059b19ca42560e8874_image%2038.avif",
    metrics: [
      { value: "30 to 40%", label: "Faster time to launch" },
      { value: "100%", label: "ERP integration tested with real data" },
      { value: "50 to 60%", label: "Simplified and safer deployments" },
    ],
    blocks: [
      {
        type: "section",
        heading: "Introduction",
        paras: [
          "Crown Packaging, an $800M global packaging leader, embarked on a major digital initiative to launch its first fully transactional B2B ecommerce storefront. Their previous online store was purely informational: customers could browse but could not purchase.",
          "To modernise and support future growth, Crown needed a solution to migrate essential business data, safely test ERP integrations, and streamline the deployment of new features. They selected Vortex IQ's StagingPro, a tool purpose-built for controlled environment management and safe ecommerce development workflows, which came highly recommended from their agency partner VIVID SITES.",
        ],
      },
      {
        type: "section",
        heading: "The problem: replatforming without disrupting business operations",
        paras: [
          "Crown's existing B2B site functioned purely as a digital catalogue, offering no ability for customers to complete purchases online. Orders were handled manually and routed through internal teams via email. With growing sales volumes and a roadmap to reach $1B in revenue, Crown needed to move fast, launching a transactional BigCommerce store while maintaining operational stability.",
          "They faced challenges in replicating store configurations, testing JD Edwards ERP integration, and ensuring third-party apps like ShipperHQ worked as intended, all without risking live customer experiences or overloading internal development resources.",
        ],
      },
      {
        type: "quote",
        text:
          "We explored several vendors, but Vortex IQ stood out. They move the most data points, support B2B edition and provide an unmatched ability to manage and replicate environments. The integration with GitHub and ability to support ShipperHQ configuration testing were huge wins for us.",
        name: "Mark Prater",
        role: "Technology Strategy & Architecture Lead, Crown Packaging",
      },
      {
        type: "section",
        heading: "The solution: implementing Vortex IQ StagingPro",
        lead: "With StagingPro, Crown Packaging gained a reliable framework for managing environments, testing updates, and deploying changes safely. Key capabilities used:",
        bullets: [
          "Automated store replication across production and sandbox environments.",
          "Migration of core data entities, including companies, users, orders, invoices, addresses and product custom fields.",
          "Exclusion of sensitive data such as passwords, sales staff assignments, and unsupported B2B fields.",
          "Secure ERP testing with realistic data in non-production environments.",
          "Ability to install and configure apps like ShipperHQ on the replicated staging store for development and testing purposes.",
          "GitHub integration for theme and code deployment, with rollback support and release visibility.",
        ],
        paras: [
          "VIVID SITES, a digital agency led by David Black (an ecommerce, UI/UX, and ERP integration expert), designed and developed Crown Packaging's new BigCommerce storefront. In addition to building the site, VIVID SITES managed the full technical implementation: architecting the infrastructure, integrating with JD Edwards ERP, configuring third-party applications, and overseeing the development workflow.",
          "They also led the setup and use of StagingPro across multiple environments, ensuring smooth data replication, version control, and safe, test-driven deployments without requiring involvement from Crown's internal teams.",
        ],
      },
      {
        type: "quote",
        text:
          "Building a modern B2B ecommerce site involves complex data, integrations, and stakeholder expectations. StagingPro allowed us to manage all of that seamlessly: replicating environments, testing ERP workflows, and deploying with confidence.",
        name: "David Black",
        role: "CEO, VIVID SITES",
      },
      {
        type: "section",
        heading: "Conclusion: from catalogue to commerce, a confident transformation",
        paras: [
          "With VIVID SITES managing the implementation and Vortex IQ's StagingPro powering the deployment workflow, Crown Packaging has established a robust foundation for its digital evolution. The ability to replicate environments, test ERP integrations with real data, and deploy changes safely has transformed the way Crown builds and launches ecommerce functionality.",
          "By choosing the Premium Plan, Crown now operates with greater confidence, able to iterate faster, reduce risk, and maintain consistency across environments. As the company continues its trajectory toward $1B in revenue, StagingPro ensures that its ecommerce infrastructure remains scalable, agile, and future-ready.",
        ],
      },
    ],
  },
  {
    slug: "case-study-inter-light",
    company: "Interlight",
    eyebrow: "AI ecommerce success",
    title: "How Interlight enabled safe A/B testing on a 2 million SKU catalogue",
    lede:
      "Interlight used Vortex IQ StagingPro to safely A/B test changes across a 2 million SKU BigCommerce catalogue, saving 8 hours of manual work per sync and cutting costs by 20%.",
    logo: "https://cdn.prod.website-files.com/68bff49fa25caa581ab0524a/68da2805bdf96f07e722e286_Clip%20path%20group.avif",
    metrics: [
      { value: "2M", label: "SKUs in the product catalogue" },
      { value: "8 hrs", label: "Manual work saved per sync" },
      { value: "20%", label: "Time and cost savings" },
    ],
    blocks: [
      {
        type: "section",
        heading: "The challenge: replicating production for testing and evaluation",
        paras: [
          "Interlight is a trusted source for lighting products and replacement parts for both commercial and residential needs. With a robust online presence at interlightus.com, they serve as a go-to destination for energy-efficient and specialty lighting products.",
          "As Interlight continues to grow, its leadership team, particularly Aaron Gray (COO/CTO), sought to enhance testing capabilities by replicating their BigCommerce production environment into a sandbox environment. This was especially important as Interlight began working with vendors looking to implement tools like VWO for A/B testing, which require a fully operational and populated staging store.",
        ],
        lead: "Their goals included:",
        bullets: [
          "Evaluating vendor-proposed design and functionality changes.",
          "Testing new tools and apps in a safe, production-like environment.",
          "Running A/B tests without risking live storefront performance.",
        ],
      },
      {
        type: "section",
        heading: "Scale and complexity",
        paras: [
          "The scale of their catalogue, with around two million SKUs, introduced additional complexity to the process. Manual export-import approaches were quickly ruled out for being time-consuming and error-prone. Interlight needed a reliable, automated solution that could scale with their needs and support frequent testing cycles.",
        ],
      },
      {
        type: "quote",
        text:
          "StagingPro has significantly improved our ability to test and evaluate changes efficiently. It's a tool that's helped us streamline processes we used to spend hours on.",
        name: "Aaron Gray",
        role: "COO/CTO, Interlight",
      },
      {
        type: "section",
        heading: "The solution: implementing Vortex IQ StagingPro",
        paras: [
          "Interlight adopted Vortex IQ's StagingPro platform to automate the replication of their BigCommerce production store into a staging environment. The platform's ability to move extensive data elements, including product catalogues, custom pages, store settings, and themes, meant Interlight's team could maintain a realistic test environment with minimal manual intervention.",
        ],
        lead: "Key benefits included:",
        bullets: [
          "Bulk migration of catalogue and configuration data.",
          "Support for ongoing updates between staging and production.",
          "Elimination of redundant manual effort for environment setup.",
        ],
      },
      {
        type: "section",
        heading: "The outcome: an efficient, scalable testing environment",
        paras: [
          "With StagingPro, Interlight now operates a scalable sandbox that mirrors their live BigCommerce store. Where their internal vendor previously spent 5 to 8 hours on manual replication, StagingPro offers a scalable and time-saving alternative.",
        ],
        bullets: [
          "Test site changes and third-party tools safely before deploying to production.",
          "Achieved significant time and cost savings by eliminating manual environment setup.",
          "Selectively migrate content and configuration with the Plus Plan.",
          "Manage theme files efficiently.",
        ],
      },
      {
        type: "section",
        heading: "Looking ahead",
        paras: [
          "Interlight continues to explore how StagingPro can play a central role in their digital operations. With a stable, production-like sandbox in place, they are well positioned to vet third-party apps and changes in a secure space, run meaningful A/B tests using platforms like VWO, and deliver a consistent, high-quality experience to their customers.",
        ],
      },
    ],
  },
  {
    slug: "case-study-the-tire-man",
    company: "The Tire Man",
    eyebrow: "Ecommerce AI automation",
    title: "The Tire Man implements Vortex IQ StagingPro for safer BigCommerce development",
    lede:
      "The Tire Man used StagingPro to eliminate disconnected staging environments on BigCommerce, achieving 30% faster mobile optimisation and 100% error-free deployments across all devices.",
    logo: "https://cdn.prod.website-files.com/68bff49fa25caa581ab0524a/68da2805a5e493b26156ecc7_image%2039.avif",
    metrics: [
      { value: "30%", label: "Faster mobile optimisation" },
      { value: "50%", label: "Increase in team productivity" },
      { value: "100%", label: "Error-free mobile deployments" },
    ],
    blocks: [
      {
        type: "section",
        heading: "The problem: development bottlenecks in a mobile-first world",
        paras: [
          "The company's development process revealed three critical limitations:",
        ],
        bullets: [
          "Teams couldn't properly test responsive designs across devices before deployment.",
          "Multiple environments (production, staging, development) lacked proper synchronization.",
          "Collaboration with external developers was hampered by inconsistent testing conditions.",
        ],
      },
      {
        type: "quote",
        text:
          "We were making important UX decisions without proper mobile testing capabilities. Every deployment felt like rolling the dice on customer experience.",
        name: "Alicia Marshall",
        role: "Systems Analyst, The Tire Man",
      },
      {
        type: "section",
        heading: "The solution: implementing Vortex IQ StagingPro",
        paras: [
          "StagingPro provided an integrated solution that transformed their development process through key capabilities:",
        ],
        bullets: [
          "True Responsive Preview: generated device-specific testing URLs that accurately simulated both mobile and desktop experiences.",
          "Centralized Environment Control: a single dashboard to manage all development, staging and production environments.",
          "Version-Protected Workflows: Git/Bitbucket integration safeguarded all theme changes with rollback capabilities.",
          "Secure Collaboration Tools: role-based access control enabled safe external developer participation.",
          "Future-Ready Architecture: pre-configured support for upcoming B2B features and multi-storefront needs.",
        ],
      },
      {
        type: "section",
        heading: "From mobile testing to AI-powered monitoring",
        paras: [
          "Ensuring a flawless mobile experience is non-negotiable in modern e-commerce. The Vortex IQ Agent Hub takes this a step further: our AI agents continuously monitor your site's Core Web Vitals and mobile performance 24/7, proactively alerting you to issues that could be affecting your mobile conversion rates.",
        ],
      },
      {
        type: "section",
        heading: "Conclusion: a foundation for growth",
        paras: [
          "With StagingPro now fully integrated, The Tire Man has established a robust framework for ongoing digital innovation. The solution has not only solved immediate testing challenges but also created new opportunities for efficient development.",
          "The company plans to further leverage StagingPro's capabilities for their B2B expansion and multi-storefront synchronization, proving the solution's value as both an immediate problem-solver and long-term growth enabler.",
        ],
      },
      {
        type: "quote",
        text:
          "StagingPro has given us the ability to innovate faster while significantly reducing risk. We're now deploying updates with full confidence that they will work seamlessly across all devices.",
        name: "Alicia Marshall",
        role: "Systems Analyst, The Tire Man",
      },
    ],
  },
];

export const caseStudyBySlug = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);

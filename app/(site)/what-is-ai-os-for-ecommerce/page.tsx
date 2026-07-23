import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { faqPageLd, type Faq } from "@/lib/structured-data";
import { pageOpenGraph } from "@/lib/seo";
import { css, html } from "./content";

const TITLE = "What is an AI Operating System for E-Commerce? | Vortex IQ";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "A plain-English definition of the AI Operating System for e-commerce: one operating layer that detects what is wrong across your stack, explains why, and helps fix it safely, with a human approving every change.",
  alternates: { canonical: "/what-is-ai-os-for-ecommerce" },
  openGraph: pageOpenGraph({
    title: TITLE,
    description:
      "A plain-English definition of the AI Operating System for e-commerce, why the category exists, and how the detect-diagnose-act-learn loop works.",
    path: "/what-is-ai-os-for-ecommerce",
  }),
};

// Single source of truth: the visible FAQ AND the FAQPage JSON-LD both render
// from this array, so the schema always matches on-page content (Google policy).
const faq: Faq[] = [
  {
    question: "What is an AI Operating System for e-commerce?",
    answer:
      "It is a single operating layer that connects a merchant's store and the tools around it, watches every signal in real time, explains in plain English what is wrong and why, and helps fix it safely, with a human approving every change.",
  },
  {
    question: "How is it different from analytics or a dashboard?",
    answer:
      "Analytics tells you what happened. An AI Operating System tells you what is wrong, why it happened, and helps you fix it, then remembers it so the same problem is less likely to cost you twice. It is the difference between a report you read and a system that resolves the work.",
  },
  {
    question: "Does the AI make changes to a live store on its own?",
    answer:
      "No. Changes are approval-gated with a full audit trail, and on BigCommerce, Shopify and Adobe Commerce they are previewed on staging first and can be rolled back in one click. Nothing reaches live revenue without a human approving it.",
  },
  {
    question: "Which platforms does it work with?",
    answer:
      "Vortex IQ runs on BigCommerce, Shopify, Adobe Commerce and WooCommerce, and connects the advertising, analytics, email, payments and shipping tools a merchant already uses.",
  },
  {
    question: "What does the detect-diagnose-act-learn loop mean?",
    answer:
      "Detect watches every KPI live; Diagnose finds the root cause and explains it in plain English; Act turns findings into approval-gated, reversible fixes; Learn remembers every signal and fix so the next problem is caught faster. The same loop runs continuously.",
  },
  {
    question: "Is Vortex IQ an AI Operating System for e-commerce?",
    answer:
      "Yes. Vortex IQ is an AI Operating System for e-commerce, built around the detect-diagnose-act-learn loop across four pillars: Nerve Centre, Vortex Mind, Ask Viq and Vortex Agents.",
  },
];

function renderFaq(items: Faq[]): string {
  return items
    .map(
      (item, i) =>
        `<details class="faq-item"${i === 0 ? " open" : ""}><summary>${item.question}</summary><p>${item.answer}</p></details>`,
    )
    .join("");
}

export default function Page() {
  const body = html.replace("__FAQ__", renderFaq(faq));
  return (
    <>
      <JsonLd data={faqPageLd(faq)} />
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main dangerouslySetInnerHTML={{ __html: body }} />
    </>
  );
}

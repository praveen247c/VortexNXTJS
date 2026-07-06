// Mirrors the compute() logic in app/(site)/roi-calculator/RoiCalculator.tsx
// (duplicated rather than imported since that file is a "use client" component
// with no exported function — same constants, same formula).

const RATE: Record<string, number> = { GBP: 25, USD: 50 };
const CONTENT_HRS = { low: 3, high: 5 };
const AUDIT_HRS = { low: 1, high: 2 };
const REPORT_FACTOR = { low: 0.7, high: 1 };
const CFR = { low: 0.05, high: 0.15 };
const ORGANIC = { low: 0.25, high: 0.35 };

export type RoiInputs = {
  cur: "GBP" | "USD";
  revenue: number;
  products: number;
  articles: number;
  reportHours: number;
  connectors: number;
  deploys: number;
  deployCost: number;
};

export function computeRoi(c: RoiInputs) {
  const rate = RATE[c.cur] ?? RATE.USD;
  const contentHrsLow = c.articles * CONTENT_HRS.low * 12;
  const contentHrsHigh = c.articles * CONTENT_HRS.high * 12;
  const auditHrsLow = c.connectors * AUDIT_HRS.low * 12;
  const auditHrsHigh = c.connectors * AUDIT_HRS.high * 12;
  const repHrsLow = c.reportHours * REPORT_FACTOR.low * 52;
  const repHrsHigh = c.reportHours * REPORT_FACTOR.high * 52;
  const repAuditHrsLow = repHrsLow + auditHrsLow;
  const repAuditHrsHigh = repHrsHigh + auditHrsHigh;
  const protLow = c.deploys * 12 * CFR.low * c.deployCost;
  const protHigh = c.deploys * 12 * CFR.high * c.deployCost;
  const directLow = (contentHrsLow + repAuditHrsLow) * rate + protLow;
  const directHigh = (contentHrsHigh + repAuditHrsHigh) * rate + protHigh;
  const annual = c.revenue * 12;
  const orgLow = annual * ORGANIC.low;
  const orgHigh = annual * ORGANIC.high;
  const seoPages = c.products > 0 ? c.products + Math.round(c.products * 0.06) + 15 : 0;

  return {
    articlesYr: c.articles * 12,
    contentMoneyLow: contentHrsLow * rate,
    contentMoneyHigh: contentHrsHigh * rate,
    contentHrsLow,
    contentHrsHigh,
    repAuditHrsLow,
    repAuditHrsHigh,
    repAuditMoneyLow: repAuditHrsLow * rate,
    repAuditMoneyHigh: repAuditHrsHigh * rate,
    protLow,
    protHigh,
    directLow,
    directHigh,
    orgLow,
    orgHigh,
    seoPages,
  };
}

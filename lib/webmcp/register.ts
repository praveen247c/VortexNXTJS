import { initializeWebMCPPolyfill } from "@mcp-b/webmcp-polyfill";
import { TabServerTransport } from "@mcp-b/transports";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { TOOL_SPECS, callTool, type ToolName } from "./tools";

function desc(name: ToolName): string {
  return TOOL_SPECS.find((t) => t.name === name)!.description;
}

// 1) Native/spec path: document.modelContext.registerTool(...).
export function registerWebMcpTools() {
  initializeWebMCPPolyfill({ installTestingShim: true });

  const modelContext = (document as any).modelContext;
  if (!modelContext) return;

  for (const spec of TOOL_SPECS) {
    modelContext.registerTool({
      name: spec.name,
      description: spec.description,
      inputSchema: spec.inputSchema,
      annotations: { readOnlyHint: spec.readOnlyHint },
      async execute(args: Record<string, unknown>) {
        return callTool(spec.name as ToolName, args ?? {});
      },
    });
  }
}

// 2) Bridge path: same tools as a real MCP server over TabServerTransport.
export async function registerMcpBridge() {
  const server = new McpServer(
    { name: "vortexiq-live", version: "1.0.0" },
    { instructions: "The real Vortex IQ site, exposing WebMCP tools backed by real app data." }
  );

  server.tool(
    "search_connectors",
    desc("search_connectors"),
    { query: z.string().optional(), category: z.string().optional() },
    async (args) => callTool("search_connectors", args)
  );

  server.tool("list_connector_categories", desc("list_connector_categories"), {}, async () =>
    callTool("list_connector_categories", {})
  );

  server.tool(
    "search_blog_posts",
    desc("search_blog_posts"),
    { query: z.string().optional(), category: z.string().optional() },
    async (args) => callTool("search_blog_posts", args)
  );

  server.tool(
    "get_blog_post",
    desc("get_blog_post"),
    { slug: z.string() },
    async (args) => callTool("get_blog_post", args)
  );

  server.tool(
    "calculate_roi",
    desc("calculate_roi"),
    {
      cur: z.enum(["USD", "GBP"]),
      revenue: z.number().min(0),
      products: z.number().min(0),
      articles: z.number().min(0),
      reportHours: z.number().min(0),
      connectors: z.number().min(0),
      deploys: z.number().min(0),
      deployCost: z.number().min(0),
    },
    async (args) => callTool("calculate_roi", args)
  );

  server.tool(
    "submit_brochure_request",
    desc("submit_brochure_request"),
    { name: z.string(), email: z.string(), company: z.string() },
    async (args) => callTool("submit_brochure_request", args)
  );

  server.tool("list_comparisons", desc("list_comparisons"), {}, async () => callTool("list_comparisons", {}));

  server.tool(
    "get_comparison",
    desc("get_comparison"),
    { slug: z.string() },
    async (args) => callTool("get_comparison", args)
  );

  server.tool("list_trust_policies", desc("list_trust_policies"), {}, async () =>
    callTool("list_trust_policies", {})
  );

  server.tool(
    "get_trust_policy",
    desc("get_trust_policy"),
    { slug: z.string() },
    async (args) => callTool("get_trust_policy", args)
  );

  server.tool("get_pricing_plans", desc("get_pricing_plans"), {}, async () => callTool("get_pricing_plans", {}));

  server.tool(
    "compare_plans",
    desc("compare_plans"),
    { planA: z.string(), planB: z.string() },
    async (args) => callTool("compare_plans", args)
  );

  server.tool(
    "set_billing_period",
    desc("set_billing_period"),
    { period: z.enum(["monthly", "annual"]) },
    async (args) => callTool("set_billing_period", args)
  );

  server.tool(
    "search_case_studies",
    desc("search_case_studies"),
    { query: z.string().optional() },
    async (args) => callTool("search_case_studies", args)
  );

  server.tool(
    "get_case_study",
    desc("get_case_study"),
    { slug: z.string() },
    async (args) => callTool("get_case_study", args)
  );

  const transport = new TabServerTransport({ allowedOrigins: ["*"] });
  await server.connect(transport);
}

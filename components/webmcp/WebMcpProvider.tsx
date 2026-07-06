"use client";

import { useEffect } from "react";
import { registerWebMcpTools, registerMcpBridge } from "@/lib/webmcp/register";

export default function WebMcpProvider() {
  useEffect(() => {
    registerWebMcpTools();
    registerMcpBridge().catch((err) => console.error("mcp-b bridge failed to start", err));
  }, []);

  return null;
}

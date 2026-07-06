"use client";

import { useEffect, useRef, useState } from "react";
import { TOOL_SPECS } from "@/lib/webmcp/tools";

type LogEntry = { tool: string; args: string; result?: string; error?: string; time: string };

export default function WebMcpConsole() {
  const [open, setOpen] = useState(false);
  const [tool, setTool] = useState<string>(TOOL_SPECS[0].name);
  const [args, setArgs] = useState("{}");
  const [log, setLog] = useState<LogEntry[]>([]);
  const ready = useRef(false);

  useEffect(() => {
    ready.current = true;
  }, []);

  async function run() {
    const testing = (navigator as any).modelContextTesting;
    if (!testing) {
      setLog((l) => [
        { tool, args, error: "navigator.modelContextTesting unavailable - polyfill did not install", time: new Date().toLocaleTimeString() },
        ...l,
      ]);
      return;
    }
    try {
      const resultJson = await testing.executeTool(tool, args);
      let resultText = resultJson;
      try {
        const parsed = JSON.parse(resultJson);
        resultText = parsed?.content?.[0]?.text ?? resultJson;
      } catch {
        // leave as-is
      }
      setLog((l) => [{ tool, args, result: resultText, time: new Date().toLocaleTimeString() }, ...l]);
    } catch (err) {
      setLog((l) => [
        { tool, args, error: err instanceof Error ? err.message : String(err), time: new Date().toLocaleTimeString() },
        ...l,
      ]);
    }
  }

  const box: React.CSSProperties = {
    position: "fixed",
    bottom: 16,
    right: 16,
    zIndex: 999999,
    width: open ? 420 : "auto",
    maxHeight: "80vh",
    overflow: "auto",
    background: "#16161f",
    color: "#d6d6e0",
    border: "1px solid #33334a",
    borderRadius: 12,
    padding: open ? 16 : 0,
    fontFamily: "ui-monospace, Consolas, monospace",
    fontSize: 12.5,
    boxShadow: "0 12px 32px rgba(0,0,0,.4)",
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        style={{ ...box, padding: "10px 16px", cursor: "pointer", border: "1px solid #5529d6", background: "#1c1530" }}
      >
        WebMCP console
      </button>
    );
  }

  return (
    <div style={box}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
        <b style={{ color: "#a58af3" }}>WebMCP agent console</b>
        <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", color: "#888", cursor: "pointer" }}>
          &times;
        </button>
      </div>
      <select
        value={tool}
        onChange={(e) => setTool(e.target.value)}
        style={{ width: "100%", marginBottom: 8, background: "#0e0e14", color: "#eee", border: "1px solid #333", borderRadius: 6, padding: 6 }}
      >
        {TOOL_SPECS.map((t) => (
          <option key={t.name} value={t.name}>
            {t.name}
          </option>
        ))}
      </select>
      <textarea
        value={args}
        onChange={(e) => setArgs(e.target.value)}
        rows={2}
        style={{ width: "100%", marginBottom: 8, background: "#0e0e14", color: "#eee", border: "1px solid #333", borderRadius: 6, padding: 6, boxSizing: "border-box" }}
      />
      <button
        onClick={run}
        style={{ width: "100%", marginBottom: 12, padding: "8px 0", background: "#5529d6", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer" }}
      >
        Execute via WebMCP
      </button>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {log.length === 0 && <div style={{ color: "#666" }}>No tool calls yet.</div>}
        {log.map((entry, i) => (
          <div key={i} style={{ borderLeft: "2px solid #5529d6", paddingLeft: 8 }}>
            <div style={{ color: "#4fd1ff" }}>{entry.tool}({entry.args})</div>
            {entry.result && <div style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{entry.result}</div>}
            {entry.error && <div style={{ color: "#ff7a7a" }}>error: {entry.error}</div>}
            <div style={{ color: "#666", fontSize: 10.5 }}>{entry.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

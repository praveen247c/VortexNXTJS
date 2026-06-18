import type { Metadata } from "next";
import { css, html } from "./content";

export const metadata: Metadata = {
  title: "The AI Operating System for E-Commerce — Vortex IQ",
  description: "The how-it-works layer of Vortex IQ. Six modules, one platform. Unified signals, stateful agents, and safe execution across your entire commerce stack.",
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}

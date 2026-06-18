import type { Metadata } from "next";
import { css, html } from "./content";

export const metadata: Metadata = {
  title: "Ask Viq — AI Chatbot for Ecommerce: Ask, Answer, Act | Vortex IQ",
  description: "Ask Viq is the command centre for your commerce stack. It pulls live data, delegates to specialised agents, and proposes safe fixes you can approve and ship.",
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}

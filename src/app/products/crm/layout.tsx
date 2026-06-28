import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Native CRM | SIAIEIN Agentic AI",
  description: "The world's first CRM built from the ground up for AI agents. Data enters itself, agents work the leads, and records update autonomously.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent Playground | SIAIEIN Agentic AI",
  description: "Watch our AI agents in action. Simulate real-world workflows like lead generation and data processing in our playground.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

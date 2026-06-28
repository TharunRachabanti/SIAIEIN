import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | SIAIEIN Agentic AI",
  description: "Transparent pricing for custom AI architectures, autonomous agents, and enterprise automation.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

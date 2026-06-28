import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Vision | SIAIEIN Agentic AI",
  description: "Software should perform work, not just assist humans. Discover SIAIEIN's vision for the future of autonomous systems.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries | SIAIEIN Agentic AI",
  description: "We build deep, specialized AI solutions for E-commerce, SaaS, Healthcare, Finance, Manufacturing, and more.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

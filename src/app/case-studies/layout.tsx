import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | SIAIEIN Agentic AI",
  description: "See how SIAIEIN has transformed operations for leading companies with Agentic AI.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

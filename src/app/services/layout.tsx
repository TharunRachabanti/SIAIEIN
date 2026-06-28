import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | SIAIEIN Agentic AI",
  description: "From custom AI automation to Agentic AI development, discover how SIAIEIN can build your autonomous infrastructure.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

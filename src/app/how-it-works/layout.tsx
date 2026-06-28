import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | SIAIEIN Agentic AI",
  description: "Understand our process for designing, building, and deploying autonomous AI architectures for your business.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

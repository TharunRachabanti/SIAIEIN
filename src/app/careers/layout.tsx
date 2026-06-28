import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | SIAIEIN Agentic AI",
  description: "Join SIAIEIN to help build the world's first autonomous workforce infrastructure. View our open positions.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

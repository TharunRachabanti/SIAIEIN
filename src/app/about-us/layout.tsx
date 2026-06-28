import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | SIAIEIN Agentic AI",
  description: "Learn about the team behind SIAIEIN and our mission to build the infrastructure for the autonomous economy.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

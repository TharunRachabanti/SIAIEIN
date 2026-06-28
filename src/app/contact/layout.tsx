import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | SIAIEIN Agentic AI",
  description: "Get in touch with the SIAIEIN team to discuss how Agentic AI can transform your business operations.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

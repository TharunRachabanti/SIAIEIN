import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { GlobalBackground } from "@/components/ui/global-background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SIAIEIN - Intelligence + AI = Innovation | AI Business Agents",
  description: "Transform your Indian business with AI agents from SIAIEIN. Automate operations, boost sales, and drive growth with intelligent automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col text-foreground relative bg-transparent`}>
        <GlobalBackground />
        <Navbar />
        <main className="flex-grow z-0 relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

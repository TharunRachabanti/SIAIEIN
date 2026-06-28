import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { GlobalBackground } from "@/components/ui/global-background";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });

export const metadata: Metadata = {
  title: "SIAIEIN | The Autonomous Economy Infrastructure",
  description: "We build Agentic AI workforces that execute digital labor autonomously. Stop managing software. Start managing outcomes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} ${inter.variable} ${fraunces.variable} min-h-screen flex flex-col text-foreground relative bg-[#0a0604]`}>
        <GlobalBackground />
        <Navbar />
        <main className="flex-grow z-0 relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

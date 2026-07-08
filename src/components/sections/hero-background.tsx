"use client";

import { motion } from "framer-motion";
import * as React from "react";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#07030100]">

      {/* ── Dark deep base ── */}
      <div className="absolute inset-0" style={{ background: "#060200" }} />

      {/* ── AURORA BLOB 1: Large warm orange — top left ── */}
      <motion.div
        className="absolute top-[-5%] md:top-[-30%]"
        style={{
          width: "80vw",
          height: "80vw",
          maxWidth: 900,
          maxHeight: 900,
          left: "-15%",
          borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
          background:
            "radial-gradient(ellipse at center, rgba(234,88,12,0.30) 0%, rgba(249,115,22,0.12) 50%, transparent 75%)",
          filter: "blur(60px)",
        }}
        animate={{
          borderRadius: [
            "40% 60% 70% 30% / 40% 50% 60% 50%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 70% 50% 50% / 50% 60% 30% 60%",
            "40% 60% 70% 30% / 40% 50% 60% 50%",
          ],
          x: [0, 60, 30, 0],
          y: [0, 40, -30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── AURORA BLOB 2: Deep amber — top right ── */}
      <motion.div
        className="absolute top-[5%] md:top-[-25%]"
        style={{
          width: "70vw",
          height: "70vw",
          maxWidth: 800,
          maxHeight: 800,
          right: "-20%",
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          background:
            "radial-gradient(ellipse at center, rgba(180,60,0,0.22) 0%, rgba(251,191,36,0.08) 50%, transparent 75%)",
          filter: "blur(70px)",
        }}
        animate={{
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 40% 60%",
            "50% 50% 40% 60% / 40% 40% 60% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
          ],
          x: [0, -50, -20, 0],
          y: [0, 60, 20, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── AURORA BLOB 3: Crimson/deep red — center ── */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-[10%] md:top-[-10%]"
        style={{
          width: "60vw",
          height: "60vw",
          maxWidth: 700,
          maxHeight: 700,
          borderRadius: "50% 50% 40% 60% / 40% 60% 40% 60%",
          background:
            "radial-gradient(ellipse at 40% 40%, rgba(220,70,0,0.18) 0%, rgba(249,115,22,0.08) 45%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{
          borderRadius: [
            "50% 50% 40% 60% / 40% 60% 40% 60%",
            "40% 60% 55% 45% / 60% 40% 60% 40%",
            "55% 45% 40% 60% / 40% 60% 50% 50%",
            "50% 50% 40% 60% / 40% 60% 40% 60%",
          ],
          scale: [1, 1.08, 0.97, 1],
          x: [0, 30, -20, 0],
          y: [0, -20, 40, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── AURORA BLOB 4: Subtle cool tone (deep purple/indigo) — bottom left ── */}
      <motion.div
        className="absolute"
        style={{
          width: "55vw",
          height: "55vw",
          maxWidth: 600,
          maxHeight: 600,
          bottom: "5%",
          left: "-10%",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(120,40,180,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── NOISE TEXTURE: Adds premium film grain ── */}
      <div
        className="absolute inset-0 opacity-[0.4] mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* ── TOP VIGNETTE: Keep text fully readable ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% -20%, transparent 0%, rgba(6,2,0,0.5) 60%, rgba(6,2,0,0.9) 100%)",
        }}
      />

      {/* ── BOTTOM FADE into page ── */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "45%",
          background: "linear-gradient(to bottom, transparent, #060200 100%)",
        }}
      />
    </div>
  );
}

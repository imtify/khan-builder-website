"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-slate-950">
      {/* Background Image with Dark/Gold Tint Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat transition-transform duration-10000 scale-110"
        style={{
          backgroundImage: "url('/images/Hero2.png')",
        }}
      />

      {/* Gradient Overlays for premium look */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/80 z-0" />
      <div className="absolute inset-0 bg-radial-at-c from-transparent via-slate-950/40 to-slate-950 z-0" />

      {/* Decorative Golden Ambient Light */}
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none z-0 animate-pulse duration-3000" />
      <div className="absolute -bottom-40 left-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/10 text-accent font-semibold text-xs tracking-wider uppercase mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
            Quality Construction. Transparent Commitment.
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-none mb-6"
          >
            Building Trust.
            <br />
            <span className="text-amber-400">Creating Better Living.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-100 font-medium max-w-2xl mb-10 leading-relaxed"
          >
            Khan Builders Ltd. delivers reliable real estate solutions through
            quality construction, modern planning, transparent documentation,
            and timely handover — for landowners, apartment buyers, and
            investors alike.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-gold-dark hover:text-white font-bold rounded-full px-8 py-6 flex items-center gap-2 cursor-pointer shadow-md transition-all"
            >
              <Link href="/properties">
                <span>View Properties</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white font-bold rounded-full px-8 py-6 flex items-center gap-2 cursor-pointer backdrop-blur-sm transition-all"
            >
              <Link href="/#land-share">
                <MapPin className="w-4 h-4" />
                <span>Land Share Inquiry</span>
              </Link>
            </Button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-white"
          >
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-black text-accent">
                100%
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-1 block">
                Transparent Agreements
              </span>
            </div>
            <div className="text-center border-l border-white/10 pl-8 md:pl-16">
              <span className="block text-2xl md:text-3xl font-black text-accent">
                RAJUK
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-1 block">
                Approval Support
              </span>
            </div>
            <div className="text-center border-l border-white/10 pl-8 md:pl-16">
              <span className="block text-2xl md:text-3xl font-black text-accent">
                On-Time
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-1 block">
                Project Handover
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

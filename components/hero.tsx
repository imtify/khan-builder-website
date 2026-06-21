"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { Search, MapPin, Building, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const router = useRouter();
  const [search, setSearch] = React.useState("");
  const [type, setType] = React.useState("all");
  const [status, setStatus] = React.useState("all");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct query parameters
    const params = new URLSearchParams();
    if (search) params.append("search", search);
    if (type !== "all") params.append("type", type);
    if (status !== "all") params.append("status", status);

    router.push(`/properties?${params.toString()}`);
  };

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
            The Smartest Investment in Real Estate
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
            className="text-lg md:text-xl text-slate-100 font-medium max-w-2xl mb-12 leading-relaxed"
          >
            A trusted real estate development partner for landowners, apartment
            buyers and investors seeking quality construction, transparent
            documentation and long-term value.
          </motion.p>

          {/* Search Widget */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full max-w-4xl p-2 rounded-3xl border border-white/10 glassmorphism shadow-2xl shadow-gold"
          >
            <form
              onSubmit={handleSearch}
              className="flex flex-col md:flex-row items-stretch gap-2 p-2 bg-slate-950/70 dark:bg-slate-950/50 rounded-2xl"
            >
              {/* Keyword Search */}
              <div className="flex-1 flex items-center gap-3 px-3 py-2 border-b md:border-b-0 md:border-r border-white/10 text-white">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <div className="flex-1 text-left">
                  <label className="block text-[10px] font-bold text-accent uppercase tracking-wider">
                    Location / Project
                  </label>
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="e.g. Mirpur, Kalshi..."
                    className="w-full bg-transparent text-sm text-white placeholder-slate-400 font-semibold focus:outline-none mt-0.5 border-none"
                  />
                </div>
              </div>

              {/* Property Type Filter */}
              <div className="w-full md:w-48 flex items-center gap-3 px-3 py-2 border-b md:border-b-0 md:border-r border-white/10 text-white">
                <Building className="w-5 h-5 text-accent shrink-0" />
                <div className="flex-1 text-left">
                  <label className="block text-[10px] font-bold text-accent uppercase tracking-wider">
                    Property Type
                  </label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full bg-gray-900 text-sm text-white font-semibold focus:outline-none mt-0.5 border-none [color-scheme:dark] cursor-pointer"
                  >
                    <option value="all">All Types</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>
              </div>

              {/* Status Filter */}
              <div className="w-full md:w-48 flex items-center gap-3 px-3 py-2 border-b md:border-b-0 text-white">
                <DollarSign className="w-5 h-5 text-accent shrink-0" />
                <div className="flex-1 text-left">
                  <label className="block text-[10px] font-bold text-accent uppercase tracking-wider">
                    Status
                  </label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full bg-gray-900 text-sm text-white font-semibold focus:outline-none mt-0.5 border-none [color-scheme:dark] cursor-pointer"
                  >
                    <option value="all">All Statuses</option>
                    <option value="ready">Ready</option>
                    <option value="under-construction">Construction</option>
                    <option value="booking-open">Booking Open</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-gold-dark hover:text-white font-bold rounded-xl px-8 flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all self-center py-5 md:py-6"
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
              </Button>
            </form>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-16 text-white"
          >
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-black text-accent">
                10+
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-1 block">
                Years of Trusted Delivery
              </span>
            </div>
            <div className="text-center border-l border-white/10 pl-8 md:pl-16">
              <span className="block text-2xl md:text-3xl font-black text-accent">
                10+
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-1 block">
                Projects, Zero Compromises
              </span>
            </div>
            <div className="text-center border-l border-white/10 pl-8 md:pl-16">
              <span className="block text-2xl md:text-3xl font-black text-accent">
                Best
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-1 block">
                Price-to-Value Ratio
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

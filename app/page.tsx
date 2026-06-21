import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { getCachedProperties } from "@/lib/api";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ProjectShowcase } from "@/components/project-showcase";
import { Footer } from "@/components/footer";
import { WhatsappButton } from "@/components/whatsapp-button";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Award,
  Leaf,
  Timer,
  FileText,
  Building2,
  ArrowRight,
  Send,
} from "lucide-react";

export const revalidate = 3600; // Cache page for 1 hour

export default async function Home() {
  const properties = await getCachedProperties();

  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />
        {/* Our Mission Section */}
        <section
          id="our-story"
          className="py-24 bg-background relative border-b border-border/40"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Side: Images */}
              <div className="relative">
                <div className="relative h-[480px] w-full rounded-3xl overflow-hidden shadow-xl shadow-gold border border-border">
                  <Image
                    src="/images/prop_imperial_heights.jpg"
                    alt="Khan Builders Quality Construction"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                </div>
                {/* Floating card */}
                <div className="absolute -bottom-6 -right-6 md:right-8 bg-card/95 backdrop-blur border border-accent/20 p-6 rounded-2xl shadow-xl max-w-xs text-left">
                  <span className="text-3xl font-black text-accent block">
                    100%
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mt-1">
                    Transparent Documentation
                  </span>
                </div>
              </div>

              {/* Right Side: Text details */}
              <div className="text-left flex flex-col items-start">
                <span className="text-accent font-bold text-xs tracking-widest uppercase mb-2">
                  Our Purpose
                </span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-tight">
                  We Build More Than Buildings
                </h2>

                <p className="text-muted-foreground mt-6 text-sm md:text-base leading-relaxed">
                  Khan Builders Ltd. exists to create safe, modern, and
                  value-driven living spaces while building long-term trust with
                  landowners, apartment buyers, and investors.
                </p>

                <p className="text-muted-foreground mt-4 text-sm md:text-base leading-relaxed">
                  Our vision is simple: to be a trusted, modern, and
                  quality-driven real estate development company in Bangladesh —
                  one transparent agreement, one well-built home at a time.
                </p>

                <div className="grid grid-cols-2 gap-6 w-full mt-8">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">
                        Transparent Process
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Clear agreements, no hidden terms.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">
                        Quality Supervision
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Verified materials, disciplined construction.
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  asChild
                  className="mt-10 rounded-full bg-primary text-primary-foreground hover:bg-accent font-bold"
                >
                  <Link href="/properties">
                    <span>Explore Our Projects</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Project Showcase Section */}
        <ProjectShowcase initialProperties={properties} />

        {/* Why Khan Builders Section */}
        <section
          id="why-us"
          className="py-24 bg-muted/40 relative border-b border-border/40"
        >
          <div className="container mx-auto px-4 md:px-6">
            {/* Section Header */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-accent font-bold text-xs tracking-widest uppercase block mb-2">
                The Khan Standard
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-tight">
                Why Clients Choose Us
              </h2>
              <p className="text-muted-foreground mt-4 text-sm md:text-base">
                We maintain disciplined execution, transparent partnership, and
                quality construction for every landowner, buyer, and investor we
                work with.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: ShieldCheck,
                  title: "Solid Construction",
                  description:
                    "Reinforced structures and quality materials, with no shortcuts on safety — ever.",
                },
                {
                  icon: Award,
                  title: "Honest Pricing",
                  description:
                    "No inflated markups or hidden fees. The price you see is the value you get.",
                },
                {
                  icon: Leaf,
                  title: "Smart Design",
                  description:
                    "Efficient layouts and sustainable choices that lower your long-term living costs.",
                },
                {
                  icon: Timer,
                  title: "On-time Delivery",
                  description:
                    "Strict project timelines managed by automated tracking, so handovers are always on time.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-gold transition-all duration-300 flex flex-col items-start text-left group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-slate-950 transition-colors">
                    <item.icon className="w-6 h-6 text-accent group-hover:text-slate-950" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="py-24 bg-background border-b border-border/40"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5 text-left flex flex-col items-start">
                <span className="text-accent font-bold text-xs tracking-widest uppercase mb-2">
                  Our Capabilities
                </span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-tight">
                  Built End-to-End.
                </h2>
                <p className="text-muted-foreground mt-6 text-sm md:text-base leading-relaxed">
                  Khan Builders handles every stage in-house — from the first
                  architectural sketch to the final handover — so nothing gets
                  lost in outsourced markups. Every step is built to deliver
                  real value, not just a bigger bill.
                </p>

                <div className="mt-8 p-6 rounded-2xl border border-accent/20 bg-accent/5 max-w-md">
                  <h4 className="font-bold text-accent text-sm flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    <span>In-House Architectural Lab</span>
                  </h4>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    Our team of experienced architects designs space-efficient
                    layouts that maximize livability without inflating your
                    budget.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Trust",
                    description:
                      "Long-term confidence for every client and landowner we work with — built one honest project at a time.",
                  },
                  {
                    icon: Award,
                    title: "Quality Construction",
                    description:
                      "Verified materials, disciplined supervision, and durability standards with no shortcuts on safety.",
                  },
                  {
                    icon: FileText,
                    title: "Transparency",
                    description:
                      "Clear agreements and complete documentation, including RAJUK approval support — nothing hidden.",
                  },
                  {
                    icon: Timer,
                    title: "Timely Handover",
                    description:
                      "Structured project timelines and disciplined supervision, so handovers happen when promised.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-card border border-border p-6 rounded-2xl text-left shadow-sm hover:border-accent/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center mb-4">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-bold text-base text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 bg-muted/30 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto rounded-3xl border border-border bg-card shadow-lg p-8 md:p-12 text-left relative overflow-hidden">
              {/* Glow accent */}
              <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-accent/10 blur-[60px] pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
                {/* Text column */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <span className="text-accent font-bold text-xs tracking-widest uppercase block mb-2">
                      Connect With Us
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black text-foreground tracking-tight">
                      Schedule a Private consultation
                    </h3>
                    <p className="text-muted-foreground mt-4 text-xs md:text-sm leading-relaxed">
                      Our advisors are ready to guide you on property viewings,
                      investment returns, and custom build layouts.
                    </p>
                  </div>

                  <div className="mt-8 lg:mt-0 flex flex-col gap-4">
                    <div className="p-4 rounded-xl bg-muted/60 border border-border/60">
                      <span className="block text-[10px] font-bold text-accent uppercase tracking-widest">
                        Client Hotline
                      </span>
                      <span className="text-sm font-bold text-foreground mt-1 block">
                        +880 1700000000
                      </span>
                    </div>
                    <p className="text-[10px] text-muted-foreground font-semibold">
                      * Inquiries are handled with complete confidentiality.
                    </p>
                  </div>
                </div>

                {/* Form column */}
                <div className="lg:col-span-7">
                  <form className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1 text-left">
                        <label className="text-[10px] font-bold text-foreground uppercase tracking-widest">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-xs text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-1 text-left">
                        <label className="text-[10px] font-bold text-foreground uppercase tracking-widest">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="john@example.com"
                          className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-xs text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1 text-left">
                        <label className="text-[10px] font-bold text-foreground uppercase tracking-widest">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+880 17..."
                          className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-xs text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-1 text-left">
                        <label className="text-[10px] font-bold text-foreground uppercase tracking-widest">
                          Interest Category
                        </label>
                        <select className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-xs text-foreground focus:outline-none focus:border-accent transition-colors cursor-pointer">
                          <option>Luxury Penthouse</option>
                          <option>Residential Villa</option>
                          <option>Commercial Space</option>
                          <option>Joint Venture Project</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1 text-left">
                      <label className="text-[10px] font-bold text-foreground uppercase tracking-widest">
                        Your Message
                      </label>
                      <textarea
                        rows={4}
                        placeholder="I would like to inquire about..."
                        className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-xs text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground font-bold rounded-xl py-3 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Secure Inquiry</span>
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsappButton />
    </>
  );
}

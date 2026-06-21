"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Property } from "@/data/properties";
import { PropertyCard } from "@/components/property-card";
import { Button } from "@/components/ui/button";

interface ProjectShowcaseProps {
  initialProperties: Property[];
}

export function ProjectShowcase({ initialProperties }: ProjectShowcaseProps) {
  const [activeTab, setActiveTab] = React.useState<
    "all" | "Ready" | "Under Construction" | "Booking Open"
  >("all");

  const filtered = React.useMemo(() => {
    if (activeTab === "all") return initialProperties.slice(0, 3);
    return initialProperties.filter((p) => p.status === activeTab).slice(0, 3);
  }, [activeTab, initialProperties]);

  const tabItems = [
    { id: "all", label: "All Projects" },
    { id: "Ready", label: "Ready" },
    { id: "Under Construction", label: "Under Construction" },
    { id: "Booking Open", label: "Booking Open" },
  ] as const;

  return (
    <section
      className="py-24 bg-background relative overflow-hidden"
      id="projects"
    >
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-accent/3 blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <span className="text-accent font-bold text-xs tracking-widest uppercase block mb-2">
              Our Projects
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-tight">
              Quality Homes at Best Price
            </h2>
            <p className="text-muted-foreground mt-3 text-sm md:text-base leading-relaxed">
              From move-in-ready apartments to upcoming developments, every Khan
              Builders project is built to last and priced to make sense.
            </p>
          </div>

          <Button
            asChild
            variant="outline"
            className="rounded-full border-accent/30 hover:border-accent hover:bg-accent/5 font-semibold self-start md:self-auto cursor-pointer"
          >
            <Link href="/properties" className="flex items-center gap-2">
              <span>View All Properties</span>
              <ArrowRight className="w-4 h-4 text-accent" />
            </Link>
          </Button>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-border/80 pb-4">
          {tabItems.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative px-5 py-2.5 text-xs md:text-sm font-bold uppercase tracking-wider rounded-full transition-colors cursor-pointer focus:outline-none"
              >
                <span
                  className={
                    isActive
                      ? "text-primary dark:text-accent z-10 relative"
                      : "text-muted-foreground hover:text-foreground relative"
                  }
                >
                  {tab.label}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="active-showcase-tab"
                    className="absolute inset-0 bg-accent/10 dark:bg-accent/20 rounded-full border border-accent/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Property Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filtered.map((property, idx) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  index={idx}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-border rounded-2xl bg-muted/20">
              <p className="text-muted-foreground font-semibold">
                No properties currently listed in this category.
              </p>
              <Button
                asChild
                className="mt-4 rounded-full bg-primary hover:bg-accent"
              >
                <Link href="/properties">See all properties</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

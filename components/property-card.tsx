"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { MapPin, Bed, Bath, Maximize, ArrowUpRight } from "lucide-react";
import { Property } from "@/data/properties";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PropertyCardProps {
  property: Property;
  index: number;
}

export function PropertyCard({ property, index }: PropertyCardProps) {
  // Get status badge classes
  const getStatusStyle = (status: Property["status"]) => {
    switch (status) {
      case "Ready":
        return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
      case "Under Construction":
        return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20";
      case "Booking Open":
        return "bg-accent/15 text-accent-foreground dark:text-accent border-accent/25";
      default:
        return "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-gold transition-all duration-300 flex flex-col h-full">
        {/* Card Image section */}
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={property.image}
            alt={property.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            priority={index < 3}
          />

          {/* Top Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent z-10" />

          {/* Status Badge */}
          <div className="absolute top-4 left-4 z-20">
            <span
              className={cn(
                "px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md shadow-sm",
                getStatusStyle(property.status),
              )}
            >
              {property.status}
            </span>
          </div>

          {/* Property Category Badge */}
          <div className="absolute top-4 right-4 z-20">
            <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-slate-950/70 border border-white/10 text-white backdrop-blur-md">
              {property.type}
            </span>
          </div>
        </div>

        {/* Card Details */}
        <CardContent className="p-6 flex-1 flex flex-col justify-between">
          <div className="flex-1">
            {/* Title & Tagline */}
            <h3 className="text-lg font-bold text-foreground line-clamp-1 group-hover:text-accent transition-colors">
              {property.title}
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1 mb-4 italic">
              {property.tagline}
            </p>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
              <MapPin className="w-4 h-4 text-accent shrink-0" />
              <span className="line-clamp-1">{property.location}</span>
            </div>
          </div>

          <div className="pt-4 border-t border-border flex items-center justify-between">
            {/* Specs */}
            <div className="flex items-center gap-4 text-xs font-semibold text-foreground/80">
              {property.beds && (
                <div className="flex items-center gap-1">
                  <Bed className="w-4 h-4 text-accent" />
                  <span>{property.beds} Bed</span>
                </div>
              )}
              {property.baths && (
                <div className="flex items-center gap-1">
                  <Bath className="w-4 h-4 text-accent" />
                  <span>{property.baths} Bath</span>
                </div>
              )}
              <div className="flex items-center gap-1">
                <Maximize className="w-4 h-4 text-accent" />
                <span>{property.area}</span>
              </div>
            </div>

            {/* CTA Arrow */}
            <Link
              href={`/properties/${property.id}`}
              className="w-8 h-8 rounded-full border border-border bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary dark:hover:bg-accent dark:hover:text-accent-foreground dark:hover:border-accent flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm"
              aria-label={`View details of ${property.title}`}
            >
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

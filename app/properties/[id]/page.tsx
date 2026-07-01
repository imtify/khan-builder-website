import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getCachedPropertyById } from "@/lib/api";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsappButton } from "@/components/whatsapp-button";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  MapPin,
  Bed,
  Bath,
  Maximize,
  Calendar,
  CheckCircle2,
  FileText,
  User,
  Mail,
  Phone,
  Send,
} from "lucide-react";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PropertyDetailPage({ params }: PageProps) {
  // Await the params Promise as required by Next.js 15/16
  const { id } = await params;

  // Fetch the specific property by ID
  const property = await getCachedPropertyById(id);

  // Trigger 404 if property not found
  if (!property) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="flex-1 min-h-screen bg-background pt-28 pb-20 text-left">
        <div className="container mx-auto px-4 md:px-6">
          {/* Back button */}
          <div className="mb-6">
            <Button
              asChild
              variant="ghost"
              className="pl-2 rounded-full hover:bg-muted text-xs font-bold text-muted-foreground hover:text-foreground cursor-pointer"
            >
              <Link href="/properties" className="flex items-center gap-1">
                <ArrowLeft className="w-4 h-4" />
                Back to Properties
              </Link>
            </Button>
          </div>

          {/* Hero Banner Section */}
          <div className="relative h-[350px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-md shadow-gold border border-border mb-12">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover"
              style={property.imageFilter ? { filter: property.imageFilter } : undefined}
              priority
            />
            {/* Dark gradient overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10" />

            {/* Status / Category Badges */}
            <div className="absolute top-6 left-6 z-20 flex gap-2">
              <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-slate-950/70 border border-white/10 text-white backdrop-blur-md">
                {property.type.toUpperCase()}
              </span>
              <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-accent/25 border border-accent/35 text-white backdrop-blur-md">
                {property.status}
              </span>
            </div>

            {/* Banner Text overlay */}
            <div className="absolute bottom-8 left-6 md:left-12 z-20 right-6 text-left">
              <span className="text-accent font-bold text-xs tracking-widest uppercase block mb-2">
                ✦ Built by Khan Builders
              </span>
              <h1 className="text-2xl md:text-5xl font-black text-white tracking-tight leading-tight">
                {property.title}
              </h1>
              <div className="flex items-center gap-2 text-xs md:text-sm text-slate-300 mt-2 font-medium">
                <MapPin className="w-4 h-4 text-accent shrink-0" />
                <span>{property.location}</span>
              </div>
            </div>
          </div>

          {/* Two Column Layout: Details vs Booking Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Property Description & Details */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              {/* Core Features Specs Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl border border-border bg-card shadow-sm text-center">
                {property.beds && (
                  <div className="flex flex-col items-center">
                    <span className="text-muted-foreground text-[10px] font-bold uppercase tracking-wider">
                      Bedrooms
                    </span>
                    <span className="flex items-center gap-1.5 text-lg font-black text-foreground mt-1">
                      <Bed className="w-4 h-4 text-accent" />
                      {property.beds} Bedrooms
                    </span>
                  </div>
                )}
                {property.baths && (
                  <div className="flex flex-col items-center border-l border-border/80">
                    <span className="text-muted-foreground text-[10px] font-bold uppercase tracking-wider">
                      Bathrooms
                    </span>
                    <span className="flex items-center gap-1.5 text-lg font-black text-foreground mt-1">
                      <Bath className="w-4 h-4 text-accent" />
                      {property.baths} Bathrooms
                    </span>
                  </div>
                )}
                <div className="flex flex-col items-center border-l border-border/80">
                  <span className="text-muted-foreground text-[10px] font-bold uppercase tracking-wider">
                    Total Area
                  </span>
                  <span className="flex items-center gap-1.5 text-lg font-black text-foreground mt-1">
                    <Maximize className="w-4 h-4 text-accent" />
                    {property.area}
                  </span>
                </div>
                <div className="flex flex-col items-center border-l border-border/80">
                  <span className="text-muted-foreground text-[10px] font-bold uppercase tracking-wider">
                    Build Year
                  </span>
                  <span className="flex items-center gap-1.5 text-lg font-black text-foreground mt-1">
                    <Calendar className="w-4 h-4 text-accent" />
                    {property.yearBuilt}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-4 border-b border-border pb-2">
                  Property Description
                </h2>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Key Features Checkbox List */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-4 border-b border-border pb-2">
                  Features Included
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {property.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 bg-muted/20 border border-border/60 rounded-xl"
                    >
                      <CheckCircle2 className="w-4.5 h-4.5 text-accent shrink-0" />
                      <span className="text-xs md:text-sm font-semibold text-foreground/80">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Builder Engineering Notes */}
              <div className="p-6 rounded-2xl border border-accent/20 bg-accent/5 relative overflow-hidden">
                {/* Decorative mark */}
                <span className="absolute right-4 bottom-2 text-8xl font-black text-accent/5 pointer-events-none uppercase">
                  KHAN
                </span>

                <h3 className="text-sm font-bold text-accent uppercase tracking-widest flex items-center gap-2 mb-3">
                  <FileText className="w-4 h-4" />
                  <span>Engineering & Construction Log</span>
                </h3>
                <p className="text-xs md:text-sm text-foreground/80 leading-relaxed italic">
                  &ldquo;{property.builderNotes}&rdquo;
                </p>
                <div className="mt-4 text-[10px] font-semibold text-muted-foreground">
                  — Signed: Chief Architect & Structural Advisor, Khan Builders
                </div>
              </div>
            </div>

            {/* Right Column: Inquire / Booking Sticky Sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <div className="p-6 rounded-2xl border border-border bg-card shadow-lg flex flex-col gap-6">
                <div className="border-t border-border pt-4 first:border-t-0 first:pt-0">
                  <h3 className="font-bold text-sm text-foreground mb-4">
                    Request a Site Visit
                  </h3>

                  <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-foreground uppercase tracking-wider flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-accent" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full bg-muted/40 border border-border rounded-xl px-3.5 py-2.5 text-xs text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-foreground uppercase tracking-wider flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5 text-accent" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full bg-muted/40 border border-border rounded-xl px-3.5 py-2.5 text-xs text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-foreground uppercase tracking-wider flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5 text-accent" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+880 17..."
                        className="w-full bg-muted/40 border border-border rounded-xl px-3.5 py-2.5 text-xs text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground font-bold rounded-xl py-3 flex items-center justify-center gap-2 cursor-pointer shadow-md text-xs mt-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Request</span>
                    </Button>
                  </form>
                </div>

                <div className="border-t border-border pt-4 text-center">
                  <span className="text-[10px] text-muted-foreground">
                    Or direct phone inquiries at
                  </span>
                  <span className="block text-sm font-bold text-primary dark:text-accent mt-1">
                    +880 1700000000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsappButton />
    </>
  );
}

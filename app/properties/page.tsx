import * as React from "react";
import Link from "next/link";
import { getCachedProperties } from "@/lib/api";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsappButton } from "@/components/whatsapp-button";
import { PropertyCard } from "@/components/property-card";
import { Button } from "@/components/ui/button";
import {
  Search,
  MapPin,
  Building,
  DollarSign,
  Filter,
  RefreshCcw,
} from "lucide-react";

// Force dynamic fetch to read dynamic search params on every request
export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Promise<{
    type?: string;
    status?: string;
    search?: string;
  }>;
}

export default async function PropertiesPage({ searchParams }: PageProps) {
  // Await the searchParams as required by Next.js 15/16
  const { type = "all", status = "all", search = "" } = await searchParams;

  // Fetch properties from the cached API layer with filters applied
  const properties = await getCachedProperties({ type, status, search });

  return (
    <>
      <Header />

      <main className="flex-1 min-h-screen bg-background pt-28 pb-20 text-left">
        <div className="container mx-auto px-4 md:px-6">
          {/* Page Header */}
          <div className="max-w-3xl mb-12">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-none">
              Our Properties
            </h1>
            <p className="text-muted-foreground mt-4 text-sm md:text-base leading-relaxed">
              Explore Khan Builders&apos; full catalog of completed homes,
              active bookings, and under-construction developments — all built
              to last and priced to make sense.
            </p>
          </div>

          {/* Filters Card */}
          <div className="p-6 rounded-2xl border border-border bg-card shadow-sm mb-12">
            <h2 className="text-xs font-bold text-accent uppercase tracking-widest flex items-center gap-2 mb-4">
              <Filter className="w-4 h-4" />
              <span>Search Filters</span>
            </h2>

            <form
              method="GET"
              className="grid grid-cols-1 md:grid-cols-4 gap-4"
            >
              {/* Keyword Location */}
              <div className="flex items-center gap-3 px-3 py-2 bg-muted/30 border border-border rounded-xl">
                <MapPin className="w-4 h-4 text-accent shrink-0" />
                <div className="flex-1">
                  <label className="block text-[9px] font-bold text-muted-foreground uppercase tracking-wider">
                    Location / Project
                  </label>
                  <input
                    type="text"
                    name="search"
                    defaultValue={search}
                    placeholder="Search keywords..."
                    className="w-full bg-transparent text-xs text-foreground font-semibold focus:outline-none mt-0.5 border-none"
                  />
                </div>
              </div>

              {/* Property Type */}
              <div className="flex items-center gap-3 px-3 py-2 bg-muted/30 border border-border rounded-xl">
                <Building className="w-4 h-4 text-accent shrink-0" />
                <div className="flex-1">
                  <label className="block text-[9px] font-bold text-muted-foreground uppercase tracking-wider">
                    Property Type
                  </label>
                  <select
                    name="type"
                    defaultValue={type}
                    className="w-full bg-transparent text-xs text-foreground font-semibold focus:outline-none mt-0.5 border-none cursor-pointer"
                  >
                    <option value="all">All Categories</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center gap-3 px-3 py-2 bg-muted/30 border border-border rounded-xl">
                <DollarSign className="w-4 h-4 text-accent shrink-0" />
                <div className="flex-1">
                  <label className="block text-[9px] font-bold text-muted-foreground uppercase tracking-wider">
                    Status
                  </label>
                  <select
                    name="status"
                    defaultValue={status}
                    className="w-full bg-transparent text-xs text-foreground font-semibold focus:outline-none mt-0.5 border-none cursor-pointer"
                  >
                    <option value="all">All Statuses</option>
                    <option value="Ready">Ready</option>
                    <option value="Under Construction">
                      Under Construction
                    </option>
                    <option value="Booking Open">Booking Open</option>
                  </select>
                </div>
              </div>

              {/* Search Trigger */}
              <div className="flex gap-2 items-center">
                <Button
                  type="submit"
                  className="flex-1 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground font-bold rounded-xl py-5 text-xs cursor-pointer shadow-sm transition-all"
                >
                  <Search className="w-3.5 h-3.5 mr-1.5" />
                  Apply Filters
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="rounded-xl border-border px-3 py-5 hover:bg-muted shrink-0 cursor-pointer"
                  title="Reset Filters"
                >
                  <Link href="/properties">
                    <RefreshCcw className="w-3.5 h-3.5 text-muted-foreground" />
                  </Link>
                </Button>
              </div>
            </form>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
              Showing{" "}
              <span className="text-foreground">{properties.length}</span>{" "}
              properties found
            </p>
          </div>

          {/* Property Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, idx) => (
              <PropertyCard key={property.id} property={property} index={idx} />
            ))}
          </div>

          {/* No results */}
          {properties.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24 text-center border border-dashed border-border rounded-2xl bg-muted/10">
              <span className="text-accent text-3xl mb-4">✦</span>
              <h3 className="font-bold text-lg text-foreground">
                No matches found
              </h3>
              <p className="text-xs text-muted-foreground mt-2 max-w-sm leading-relaxed">
                We couldn&apos;t find any properties matching your current
                search parameters. Try clearing some filters or search for
                another keyword.
              </p>
              <Button
                asChild
                className="mt-6 rounded-full bg-primary hover:bg-accent text-xs font-bold px-6"
              >
                <Link href="/properties">Reset Search</Link>
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <WhatsappButton />
    </>
  );
}

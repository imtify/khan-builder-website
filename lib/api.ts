import { properties, Property } from "@/data/properties";
import { unstable_cache } from "next/cache";

// Helper to simulate database network query latency
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Fetches all properties or filters them based on criteria.
 * Uses Next.js unstable_cache to demonstrate explicit data caching.
 * Revalidates every 3600 seconds (1 hour) or via 'properties' tag.
 */
export const getCachedProperties = unstable_cache(
  async (filters?: { type?: string; status?: string; search?: string }): Promise<Property[]> => {
    await delay(600); // Simulate DB query latency
    
    let result = [...properties];
    
    if (filters) {
      const typeFilter = filters.type;
      const statusFilter = filters.status;
      const searchFilter = filters.search;

      if (typeFilter && typeFilter !== "all") {
        result = result.filter(p => p.type === typeFilter.toLowerCase());
      }
      if (statusFilter && statusFilter !== "all") {
        // Map search keys to property status values
        const statusMap: Record<string, string> = {
          "ready": "Ready",
          "under-construction": "Under Construction",
          "booking-open": "Booking Open"
        };
        const targetStatus = statusMap[statusFilter.toLowerCase()] || statusFilter;
        result = result.filter(p => p.status === targetStatus);
      }
      if (searchFilter) {
        const query = searchFilter.toLowerCase();
        result = result.filter(
          p =>
            p.title.toLowerCase().includes(query) ||
            p.location.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query)
        );
      }
    }
    
    return result;
  },
  ["properties-list"], // Cache key
  {
    revalidate: 3600, // Explicit cache lifetime (1 hour)
    tags: ["properties"], // Tag for on-demand revalidation (revalidateTag("properties"))
  }
);

/**
 * Fetches a single property by its ID.
 * Caches details with a specific key.
 */
export const getCachedPropertyById = unstable_cache(
  async (id: string): Promise<Property | null> => {
    await delay(300); // Simulate fast detail fetch
    return properties.find(p => p.id === id) || null;
  },
  ["property-detail"],
  {
    revalidate: 3600,
    tags: ["properties"],
  }
);

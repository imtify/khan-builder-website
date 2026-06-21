export interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  type: "residential" | "commercial";
  status: "Ready" | "Under Construction" | "Booking Open";
  beds?: number;
  baths?: number;
  area: string;
  features: string[];
  image: string;
  yearBuilt: number;
  builderNotes: string;
  tagline: string;
}

export const properties: Property[] = [
  {
    id: "kb-001",
    title: "Khan Imperial Heights",
    tagline: "Spacious family living, honestly priced",
    description:
      "A well-built apartment complex in the heart of the neighborhood, designed for families who want space and comfort without overpaying. Crest Residences offers wide layouts, natural light, and a rooftop community deck — built to last, priced to make sense.",
    location: "Mirpur 12, Dhaka",
    type: "residential",
    status: "Ready",
    beds: 3,
    baths: 3,
    area: "1,650 sqft",
    features: [
      "Rooftop Community Deck",
      "Smart Home Wiring (Ready)",
      "24/7 Security",
      "Dedicated Parking",
      "Generator Backup",
      "Energy-Efficient Windows",
    ],
    image: "/images/Project-1.png",
    yearBuilt: 2025,
    builderNotes:
      "Built with double-glazed windows for noise and heat insulation, and grade-60 reinforced steel framing for long-term structural safety — no shortcuts, even where buyers wouldn't notice.",
  },
  {
    id: "kb-002",
    title: "Khan Residences",
    tagline: "Real comfort for everyday family life",
    description:
      "A thoughtfully designed home in a quiet residential pocket. Featuring open layouts, a private courtyard, and solid construction throughout. Khan Imperial Heights delivers genuine quality living without the inflated price tag.",
    location: "DOHS, Mirpur, Dhaka",
    type: "residential",
    status: "Ready",
    beds: 4,
    baths: 4,
    area: "1,950 sqft",
    features: [
      "Private Courtyard",
      "Double Height Lounge",
      "Solar Panel Array",
      "Two Car Garage",
      "Integrated Security System",
    ],
    image: "/images/prop_imperial_heights.jpg",
    yearBuilt: 2026,
    builderNotes:
      "Designed with passive cooling architecture that reduces summer heat retention by 25%, lowering long-term electricity costs. Landscaped areas use a simple greywater recycling system.",
  },
  {
    id: "kb-003",
    title: "Khan Business Plaza",
    tagline: "Smart office space for growing businesses",
    description:
      "A practical commercial address with open-plan floors that businesses can actually afford to grow into. Built with energy-efficient glass facades and flexible layouts, designed for SMEs and corporate offices alike.",
    location: "ECB Chattar, Dhaka",
    type: "commercial",
    status: "Under Construction",
    area: "5,000 sqft",
    features: [
      "Energy-Efficient Glass Facade",
      "High-speed Elevators",
      "Flexible Open-Plan Floors",
      "Fiber Internet Ready",
      "Underground Parking for 30 Cars",
    ],
    image: "/images/Project-5.png",
    yearBuilt: 2027,
    builderNotes:
      "Uses a post-tensioned slab design for column-free floor space, reducing wasted square footage and keeping per-unit costs down for tenants.",
  },
  {
    id: "kb-004",
    title: "Lakeside Villas",
    tagline: "Peaceful living, fair pricing",
    description:
      "A quiet home tucked into a calm residential street near Kalshi. With wide window openings, a simple durable roofline, and a small outdoor deck — proof that a peaceful setting doesn't have to come at a premium.",
    location: "Kalshi, Mirpur, Dhaka",
    type: "residential",
    status: "Booking Open",
    beds: 3,
    baths: 3,
    area: "1,800 sqft",
    features: [
      "Private Balcony Deck",
      "Durable Weatherproof Roofing",
      "Outdoor Sitting Area",
      "Modern Kitchen",
      "Dedicated Parking",
    ],
    image: "/images/prop_lakeside_villa.jpg",
    yearBuilt: 2027,
    builderNotes:
      "Built on reinforced pile foundations for long-term stability, with weather-resistant exterior cladding chosen for durability over decorative cost.",
  },
  {
    id: "kb-005",
    title: "Platinum Residences",
    tagline: "Move-in ready, fairly priced",
    description:
      "Fully-finished apartments ready for immediate move-in, with simple modern interiors and a layout that maximizes usable space. Khan Builders offers flexible payment plans, ideal for first-time buyers and young families.",
    location: "Mirpur 12, Dhaka",
    type: "residential",
    status: "Ready",
    beds: 2,
    baths: 2,
    area: "1,100 sqft",
    features: [
      "Fully Furnished Option",
      "Flexible Payment Plans",
      "Rooftop Common Area",
      "Dedicated Parking",
      "On-Site Maintenance Team",
    ],
    image: "/images/prop_platinum_suites.jpg",
    yearBuilt: 2025,
    builderNotes:
      "Built to international earthquake safety standards with smart elevator scheduling to keep wait times under 15 seconds — quality details buyers feel, without the price tag they fear.",
  },
  {
    id: "kb-006",
    title: "Apex Plaza Commerce Centre",
    tagline: "Affordable retail & office space, together",
    description:
      "A practical retail and office space designed for small businesses and growing companies. Featuring a central atrium, shared dining plazas, and storefronts with strong pedestrian visibility — built to keep overhead low for tenants.",
    location: "Kalshi, Mirpur, Dhaka",
    type: "commercial",
    status: "Under Construction",
    area: "4,200 sqft",
    features: [
      "Central Atrium Skylight",
      "Central HVAC System",
      "Dual Road Access",
      "Solar-Assisted Power Grid",
      "Digital Wayfinding",
    ],
    image: "/images/prop_apex_plaza.jpg",
    yearBuilt: 2027,
    builderNotes:
      "Uses a steel-composite framework that sped up construction by 30% without compromising structural integrity — savings passed on to tenants, not absorbed as extra margin.",
  },
];

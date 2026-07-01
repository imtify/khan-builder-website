export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  type: 'residential' | 'commercial' | 'penthouse';
  status: 'Ready' | 'Under Construction' | 'Booking Open';
  beds?: number;
  baths?: number;
  area: string; // Measured in Katha
  features: string[];
  image: string;
  imageFilter?: string; // CSS Filter to shift building colors for uniqueness
  yearBuilt: number;
  builderNotes: string;
  tagline: string;
}

export const properties: Property[] = [
  {
    id: "park-haven-01",
    title: "Park Haven 01",
    tagline: "Premium Residential Oasis — Handover Completed",
    description: "Located in the quiet enclaves of Mirpur Kalshi, Park Haven 01 is a signature residential development by Khan Builders. Spanning 10 katha of prime land, this project features luxury design, imported structural finishes, and has been successfully handed over to its proud owners.",
    price: 320000,
    location: "Mirpur Kalshi, Dhaka",
    type: "residential",
    status: "Ready",
    beds: 3,
    baths: 3.5,
    area: "10 Katha (Land)",
    features: [
      "Secured Access Gates",
      "Rooftop Community Lounge",
      "Standby Generator",
      "Underground Water Reservoir",
      "Intercom Security System"
    ],
    image: "/images/Project-1.png",
    yearBuilt: 2024,
    builderNotes: "Successfully completed within the committed timeline. Features custom brick masonry facades and reinforced concrete piles driven to withstand high seismic loads."
  },
  {
    id: "park-haven-02",
    title: "Park Haven 02",
    tagline: "Exquisite Contemporary Living — Handover Completed",
    description: "Another masterpiece of comfort and luxury in Mirpur Kalshi. Park Haven 02 offers spacious residential layouts designed for modern families. Built on a 10 katha footprint, the building boasts energy-efficient double glazing, smart lobbies, and full handover clearance.",
    price: 340000,
    location: "Mirpur Kalshi, Dhaka",
    type: "residential",
    status: "Ready",
    beds: 3,
    baths: 3.5,
    area: "10 Katha (Land)",
    features: [
      "Solar Assisted Common Lighting",
      "Double Elevator System",
      "Basement Parking Spots",
      "Rainwater Harvesting System",
      "24/7 Security Guards"
    ],
    image: "/images/Project-2.png",
    yearBuilt: 2024,
    builderNotes: "Reflects our trademark premium finishing. Utilizing polished marble lobbies and grade-A structural reinforcing rods."
  },
  {
    id: "park-haven-03",
    title: "Park Haven 03",
    tagline: "Luxury Residential Landmark — Fully Completed",
    description: "Constructed on 10 katha of beautifully landscaped land in Mirpur Kalshi, Park Haven 03 stands as a symbol of architectural prestige. Fully complete and ready, this project offers high-end residential suites with premium fittings.",
    price: 350000,
    location: "Mirpur Kalshi, Dhaka",
    type: "residential",
    status: "Ready",
    beds: 4,
    baths: 4,
    area: "10 Katha (Land)",
    features: [
      "Modern CCTV Surveillance",
      "Community Banquet Hall",
      "Water Purification Plant",
      "Marble Floored Lobbies",
      "Fire Fighting Hydrants"
    ],
    image: "/images/Project-3.png",
    yearBuilt: 2025,
    builderNotes: "Engineered with optimized load-bearing frameworks. The luxury bathrooms feature custom brass copper detailing and premium sanitaryware."
  },
  {
    id: "park-haven-04",
    title: "Park Haven 04",
    tagline: "Luxurious Living Enclave — Handover Completed",
    description: "Khan Builders proudly presents Park Haven 04. Situated on 10 katha of prime Kalshi land, this completed residential enclave offers premium cross-ventilated layouts and has been completely handed over.",
    price: 360000,
    location: "Mirpur Kalshi, Dhaka",
    type: "residential",
    status: "Ready",
    beds: 3,
    baths: 3,
    area: "10 Katha (Land)",
    features: [
      "Infinity-edge Rooftop Area",
      "Central Gas Line Connection",
      "Imported Tile Finishings",
      "Emergency Evacuation Chute",
      "Smart Locker Room"
    ],
    image: "/images/Project-10.png",
    imageFilter: "hue-rotate(20deg) saturate(1.1)", // Gives it warmer masonry color tones
    yearBuilt: 2025,
    builderNotes: "Delivered with flawless interior paintwork and structured plumbing systems that prevent common leak issues."
  },
  {
    id: "park-haven-05",
    title: "Park Haven 05",
    tagline: "Sleek Boutique Apartments — Running Project",
    description: "An ongoing boutique residential construction on 4 katha of land. Located in the fast-growing Mirpur Kalshi zone, Park Haven 05 is tailored for professionals seeking high-end living in a compact, highly secure building layout.",
    price: 180000,
    location: "Mirpur Kalshi, Dhaka",
    type: "residential",
    status: "Under Construction",
    beds: 2,
    baths: 2,
    area: "4 Katha (Land)",
    features: [
      "Energy Efficient HVAC Prep",
      "Secured Stilt Car Parking",
      "Deep Tube Well Connection",
      "Automated Power Grid Transfer",
      "Rooftop Garden Layout"
    ],
    image: "/images/Project-5.png",
    yearBuilt: 2027,
    builderNotes: "Currently in the column reinforcement phase. Pile foundations have been successfully completed and tested for load bearing."
  },
  {
    id: "park-haven-06",
    title: "Park Haven 06",
    tagline: "Spacious Multi-Family Landmark — Running Project",
    description: "Spanning a massive 12 katha area in Mirpur Kalshi, Park Haven 06 is an active residential build featuring premium amenities and massive open floor layouts. Perfect investment for modern suburban luxury.",
    price: 450000,
    location: "Mirpur Kalshi, Dhaka",
    type: "residential",
    status: "Under Construction",
    beds: 4,
    baths: 4.5,
    area: "12 Katha (Land)",
    features: [
      "Stretching Balcony Vistas",
      "Dual Schindler Elevators",
      "Eco-Green Solar Grid",
      "Indoor Gymnasium Space",
      "Advanced Water Filtration"
    ],
    image: "/images/Project-9.png",
    imageFilter: "hue-rotate(-20deg) brightness(1.05)", // Shift facade details to cooler tones
    yearBuilt: 2027,
    builderNotes: "Roof casting for the 4th floor is complete. Quality checks verify concrete strength exceeding 4,000 PSI."
  },
  {
    id: "park-haven-07",
    title: "Park Haven 07",
    tagline: "Luxury Waterfront Residences — Running Project",
    description: "Overlooking local greens in Mirpur Kalshi, Park Haven 07 is built on 10 katha. Designed to offer panoramic window views, cross-ventilation, and ultra-high-end specifications.",
    price: 390000,
    location: "Mirpur Kalshi, Dhaka",
    type: "residential",
    status: "Under Construction",
    beds: 3,
    baths: 3.5,
    area: "10 Katha (Land)",
    features: [
      "Panoramic Bay Windows",
      "Smart Home Automation Pre-wiring",
      "Central Geothermal HVAC System",
      "Triple Security Gates",
      "Rooftop Infinity Deck"
    ],
    image: "/images/Project-7.png",
    imageFilter: "hue-rotate(180deg) brightness(0.95)", // Completely different paint trim scheme
    yearBuilt: 2027,
    builderNotes: "Foundation works and retaining walls are completed. Concrete framework columns are currently being erected."
  },
  {
    id: "park-haven-08",
    title: "Park Haven 08",
    tagline: "Premium Residential Icon — Running Project",
    description: "Park Haven 08 represents the pinnacle of Khan Builders' residential series. Built on 10 katha of land in Kalshi, this active project blends raw luxury concrete with gold brass aesthetics.",
    price: 410000,
    location: "Mirpur Kalshi, Dhaka",
    type: "residential",
    status: "Under Construction",
    beds: 3,
    baths: 3.5,
    area: "10 Katha (Land)",
    features: [
      "Gold Facade Highlights",
      "Soundproof Double Glass Panes",
      "Smart Intercom & Face-recognition",
      "Dual Backup Power Generators",
      "Executive Rooftop Pavilion"
    ],
    image: "/images/prop_apartment_render_1.jpg",
    imageFilter: "hue-rotate(40deg) saturate(1.2)", // Different siding details
    yearBuilt: 2028,
    builderNotes: "Soil consolidation and pile load tests successfully logged. Excavation and basement foundation pouring are in progress."
  },
  {
    id: "monalisha-tower",
    title: "Monalisha Tower",
    tagline: "Epicenter of Commercial Innovation — Running Project",
    description: "An architectural giant spanning 36 katha of premium commercial frontage in Mirpur Kalshi. Monalisha Tower features a modern double-skin glass facade, double-height grand lobby, and high-tech office floor spaces.",
    price: 4200000,
    location: "Mirpur Kalshi, Dhaka",
    type: "commercial",
    status: "Under Construction",
    area: "36 Katha (Land)",
    features: [
      "LEED Gold Standard Efficiency",
      "4-Story Automated Basement Parking",
      "Central HVAC with Clean Air HEPA Filters",
      "6 High-speed Destination Elevators",
      "Grand Business Convention Hall"
    ],
    image: "/images/Project-6.png",
    yearBuilt: 2028,
    builderNotes: "Core shear wall construction has reached the 8th floor. Fabricated steel composite pillars are being bolted for structural flexibility."
  },
  {
    id: "bondhon-tower",
    title: "Bondhon Tower",
    tagline: "Modern Retail & Corporate Convergence — Running Project",
    description: "Bondhon Tower sits on a 20 katha commercial plot on Kalshi Road. It combines lower-level premium retail shopping zones with upper-level corporate headquarter spaces in a glassmorphic aesthetic.",
    price: 2600000,
    location: "Mirpur Kalshi, Dhaka",
    type: "commercial",
    status: "Under Construction",
    area: "20 Katha (Land)",
    features: [
      "Premium Atrium Design",
      "Automated Fire Extinguisher Grids",
      "Central Atrium Skylight",
      "Fibre-Optic Network Infrastructure",
      "Rooftop Executive Restaurant Space"
    ],
    image: "/images/Project-10.png",
    yearBuilt: 2028,
    builderNotes: "Basement piling and concrete retaining walls completed. Currently proceeding with main beam casting."
  },
  {
    id: "daisy",
    title: "Daisy",
    tagline: "Boutique Residential Enclave — Running Project",
    description: "Daisy is an exclusive residential enclave built on 10 katha of land in Mirpur Kalshi. It is designed to host families with an emphasis on quiet, leafy green gardens and luxury interior spaces.",
    price: 360000,
    location: "Mirpur Kalshi, Dhaka",
    type: "residential",
    status: "Under Construction",
    beds: 3,
    baths: 3.5,
    area: "10 Katha (Land)",
    features: [
      "Private Landscaped Gardens",
      "Children's Rooftop Play Zone",
      "Smart Intercom Network",
      "Central Water Softener Filter",
      "Premium Imported Kitchen Finish"
    ],
    image: "/images/Project-12.png",
    yearBuilt: 2027,
    builderNotes: "Superstructure casting has commenced. Formwork is ready for the second-floor slab casting."
  },
  {
    id: "mastertek-tower",
    title: "Mastertek Tower",
    tagline: "Cantonment Gateway Commercial Landmark — Running Project",
    description: "Positioned at the entrance of the Mastertek Cantonment Area, Mastertek Tower is an executive commercial hub. Combining modern corporate offices, premium meeting lounges, and high-tech security.",
    price: 1850000,
    location: "Mastertek Cantonment Area, Dhaka",
    type: "commercial",
    status: "Under Construction",
    area: "15 Katha (Land)",
    features: [
      "High Security Cantonment Gateway Location",
      "Double Glazed Tinted Glass Curtain Wall",
      "Pre-installed Smart Access Controls",
      "Executive Meeting Rooms",
      "Premium Coffee Lounge & Terrace"
    ],
    image: "/images/Project-11.png",
    imageFilter: "hue-rotate(-30deg) brightness(1.05)", // Shift night lights for visual distinction
    yearBuilt: 2028,
    builderNotes: "Piling works completed. Structural grade-80 steel cages are being lowered for basement foundation columns."
  }
];

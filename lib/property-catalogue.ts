export type Property = {
  id: number;
  externalId?: string;
  slug: string;
  name: string;
  location: string;
  summary: string;
  description: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  nightlyFrom: number;
  rating: number;
  reviews: number;
  image: string;
  gallery: string[];
  amenities: string[];
  tags: string[];
  bookingUrl?: string;
};

export const properties: Property[] = [
  {
    id: 101,
    slug: "panoramic-penthouse-views",
    name: "Panoramic Penthouse Views",
    location: "Palm Beach",
    summary: "A light-filled coastal penthouse with sweeping ocean views and space for the whole group.",
    description: "Wake to ocean light, gather around the generous open-plan living space and walk to the best of Palm Beach. This elevated retreat is made for relaxed group stays, with generous entertaining areas and a private outlook across the coast.",
    guests: 11,
    bedrooms: 3,
    bathrooms: 3,
    nightlyFrom: 620,
    rating: 5,
    reviews: 38,
    image: "https://goldcoast-accom.com.au/wp-content/uploads/2024/09/48447-294141-0BIcAc3-IFhu0HJ2wRSbJT5ATfOCFxz18Ny-anB8AqU-66a45497c9b4d-1200x800.webp",
    gallery: [
      "https://goldcoast-accom.com.au/wp-content/uploads/2024/09/48447-294141-0BIcAc3-IFhu0HJ2wRSbJT5ATfOCFxz18Ny-anB8AqU-66a45497c9b4d-1200x800.webp",
      "https://goldcoast-accom.com.au/wp-content/uploads/2026/02/Palm-Beach.webp",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
    ],
    amenities: ["Ocean views", "Private balcony", "Full kitchen", "Air conditioning", "Parking", "Wi-Fi"],
    tags: ["Ocean view", "Luxury", "Groups"],
  },
  {
    id: 102,
    slug: "bilinga-beach-house",
    name: "Bilinga Beach House",
    location: "Bilinga",
    summary: "A relaxed beach house for families and friends, just moments from the sand.",
    description: "Designed for easy coastal living, Bilinga Beach House gives larger groups room to spread out while keeping the beach within effortless reach. Spend mornings by the water and evenings together in the garden and open living areas.",
    guests: 14,
    bedrooms: 4,
    bathrooms: 2,
    nightlyFrom: 540,
    rating: 4.75,
    reviews: 62,
    image: "https://goldcoast-accom.com.au/wp-content/uploads/2026/01/48447-270083-hg2BBOOgEL7-tApmwQ-lrhpH6a1hIoZ2Lq8DFvzkbgY-663cf7168b8c3-1024x683.webp",
    gallery: [
      "https://goldcoast-accom.com.au/wp-content/uploads/2026/01/48447-270083-hg2BBOOgEL7-tApmwQ-lrhpH6a1hIoZ2Lq8DFvzkbgY-663cf7168b8c3-1024x683.webp",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
    ],
    amenities: ["Walk to beach", "Garden", "BBQ", "Family friendly", "Parking", "Wi-Fi"],
    tags: ["Beach", "Families", "Groups"],
  },
  {
    id: 103,
    slug: "magnolia-palms",
    name: "Magnolia Palms",
    location: "Palm Beach",
    summary: "A warm, design-led home with a private pool and laid-back Palm Beach position.",
    description: "Magnolia Palms pairs a calm coastal palette with the kind of indoor-outdoor living the Gold Coast does best. The private pool, considered interiors and convenient location make it a natural choice for families or a slower weekend away.",
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    nightlyFrom: 420,
    rating: 4.85,
    reviews: 47,
    image: "https://goldcoast-accom.com.au/wp-content/uploads/2026/01/48447-269118-eBvpx0MNeHOiclavT1y-KMaeg4xFOMKIYnOmkPADdjI-6639ea5885aef-1024x684.webp",
    gallery: [
      "https://goldcoast-accom.com.au/wp-content/uploads/2026/01/48447-269118-eBvpx0MNeHOiclavT1y-KMaeg4xFOMKIYnOmkPADdjI-6639ea5885aef-1024x684.webp",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=1400&q=85",
    ],
    amenities: ["Private pool", "Outdoor dining", "Full kitchen", "Laundry", "Parking", "Wi-Fi"],
    tags: ["Pool", "Families", "Design"],
  },
  {
    id: 104,
    slug: "broadbeach-ocean-retreat",
    name: "Broadbeach Ocean Retreat",
    location: "Broadbeach",
    summary: "Contemporary apartment living with restaurants, shopping and the beach at your door.",
    description: "A polished base for guests who want to be close to everything. Enjoy ocean glimpses, resort-style facilities and an easy walk to Broadbeach dining, the convention centre and golden sand.",
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    nightlyFrom: 360,
    rating: 4.9,
    reviews: 31,
    image: "https://goldcoast-accom.com.au/wp-content/uploads/2026/02/Broadbeach.jpg",
    gallery: [
      "https://goldcoast-accom.com.au/wp-content/uploads/2026/02/Broadbeach.jpg",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85",
    ],
    amenities: ["Ocean view", "Shared pool", "Gym", "Air conditioning", "Parking", "Wi-Fi"],
    tags: ["Ocean view", "Walkable", "Couples"],
  },
  {
    id: 105,
    slug: "burleigh-hill-house",
    name: "Burleigh Hill House",
    location: "Burleigh Heads",
    summary: "An inviting hillside home close to Burleigh’s beach, village and headland walks.",
    description: "Set above the bustle with leafy outlooks, this generous home balances privacy with access to everything guests love about Burleigh. It is ideal for shared meals, pool afternoons and unhurried weekends.",
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    nightlyFrom: 590,
    rating: 4.92,
    reviews: 26,
    image: "https://goldcoast-accom.com.au/wp-content/uploads/2026/02/Burleigh.jpg",
    gallery: [
      "https://goldcoast-accom.com.au/wp-content/uploads/2026/02/Burleigh.jpg",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=1400&q=85",
    ],
    amenities: ["Private pool", "Leafy outlook", "BBQ", "Workspace", "Parking", "Wi-Fi"],
    tags: ["Pool", "Groups", "Burleigh"],
  },
  {
    id: 106,
    slug: "currumbin-coastal-cottage",
    name: "Currumbin Coastal Cottage",
    location: "Currumbin",
    summary: "A character-filled cottage for an easy beach break with pets welcome by request.",
    description: "Simple, comfortable and close to Currumbin’s natural highlights. The secure outdoor area and relaxed layout make this a practical base for families, couples and four-legged travelling companions.",
    guests: 5,
    bedrooms: 2,
    bathrooms: 1,
    nightlyFrom: 295,
    rating: 4.81,
    reviews: 54,
    image: "https://goldcoast-accom.com.au/wp-content/uploads/2026/02/Currumbin.jpg",
    gallery: [
      "https://goldcoast-accom.com.au/wp-content/uploads/2026/02/Currumbin.jpg",
      "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=85",
    ],
    amenities: ["Pet friendly", "Secure yard", "Full kitchen", "Laundry", "Parking", "Wi-Fi"],
    tags: ["Pet friendly", "Beach", "Families"],
  },
];

export const findProperty = (slug: string) => properties.find((property) => property.slug === slug);

// Frontend data contract. The future PropertyStack/PMS adapter only needs to
// return this shape; the page components do not need to know which PMS is used.
export type PropertySearch = {
  location?: string;
  guests?: number;
  feature?: string;
  checkIn?: string;
  checkOut?: string;
};

export const propertyCatalogue = {
  list: async (): Promise<Property[]> => properties,
  getBySlug: async (slug: string): Promise<Property | undefined> => findProperty(slug),
  search: async ({ location, guests = 1, feature }: PropertySearch): Promise<Property[]> =>
    properties.filter((property) =>
      (!location || location === "All locations" || location === "Gold Coast" || property.location === location) &&
      property.guests >= guests &&
      (!feature || feature === "All stays" || property.tags.includes(feature))
    ),
};

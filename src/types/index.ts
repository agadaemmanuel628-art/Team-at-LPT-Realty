export interface Property {
  id: string;
  title: string;
  price: number;
  address: string;
  town: string;
  county: 'Nassau' | 'Suffolk' | 'Queens' | 'Hamptons';
  zip: string;
  beds: number;
  baths: number;
  sqft: number;
  lotSize: string;
  propertyType: 'Single Family' | 'Condo' | 'Townhouse' | 'Multi-Family' | 'Luxury Estate' | 'Waterfront';
  status: 'Active' | 'Pending' | 'New' | 'Price Reduced';
  yearBuilt: number;
  garage: number;
  taxes: number;
  hoa?: number;
  description: string;
  features: string[];
  images: string[];
  featured?: boolean;
  agentId: string;
  mlsNumber: string;
}

export interface SoldProperty {
  id: string;
  title: string;
  address: string;
  town: string;
  salePrice: number;
  originalPrice: number;
  daysOnMarket: number;
  beds: number;
  baths: number;
  sqft: number;
  propertyType: string;
  soldDate: string;
  image: string;
}

export interface Agent {
  id: string;
  name: string;
  title: string;
  licenseNumber: string;
  phone: string;
  email: string;
  photo: string;
  bio: string;
  specialties: string[];
  areasServed: string[];
  languages: string[];
  experienceYears: number;
  recentSalesCount: number;
  rating: number;
  reviewCount: number;
  socials: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    zillow?: string;
  };
}

export interface Area {
  slug: string;
  name: string;
  county: 'Nassau' | 'Suffolk' | 'Hamptons' | 'North Shore' | 'South Shore';
  tagline: string;
  image: string;
  medianPrice: number;
  averageDaysOnMarket: number;
  schoolRating: string;
  commuteToPennStation: string;
  overview: string;
  lifestyle: string[];
  highlights: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Buyer Tips' | 'Seller Tips' | 'Market Updates' | 'Local News';
  author: string;
  authorRole: string;
  authorPhoto: string;
  date: string;
  readTime: string;
  coverImage: string;
  tags: string[];
}

export interface Review {
  id: string;
  clientName: string;
  role: 'Home Buyer' | 'Home Seller' | 'First-Time Buyer' | 'Real Estate Investor';
  location: string;
  rating: number;
  date: string;
  reviewText: string;
  agentName: string;
  verified: boolean;
}

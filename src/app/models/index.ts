export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  features: string[];
  specifications?: Record<string, string>;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  applications: string[];
  benefits: string[];
}

export interface Infrastructure {
  id: string;
  title: string;
  description: string;
  image: string;
  capabilities: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

export interface NavLink {
  label: string;
  path: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

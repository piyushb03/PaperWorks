export type ServiceCategory = 'research' | 'projects' | 'career' | 'academic';

export interface ServiceItem {
  slug: string;
  route: string;
  title: string;
  shortTitle: string;
  category: ServiceCategory;
  categoryLabel: string;
  tagline: string;
  shortDescription: string;
  description: string;
  audience: string[];
  scopePoints: string[];
  deliverables: string[];
  processSteps: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[]; // slugs
  relatedResources: string[]; // slugs
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  sampleVisualType: 'ieee' | 'research' | 'project' | 'resume';
}

export interface ResourceItem {
  slug: string;
  route: string;
  title: string;
  category: string;
  readTime: string;
  description: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  publishedDate: string; // ISO date string for schema
  relatedServices: string[]; // slugs
  relatedResources: string[]; // slugs
  sections: {
    heading: string;
    subheading?: string;
    paragraphs: string[];
    keyTakeaway?: string;
    checklist?: string[];
  }[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'research' | 'projects' | 'career' | 'pricing';
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  badge: 'Sample' | 'Demo' | 'Illustrative Example';
  description: string;
  highlights: string[];
  sampleType: 'research' | 'ieee' | 'project' | 'resume' | 'presentation';
  slugLink?: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  keywords?: string[];
  breadcrumbs?: BreadcrumbItem[];
  articleSchema?: {
    publishedTime: string;
    modifiedTime?: string;
    headline: string;
    description: string;
  };
}

import type { LucideIcon } from "lucide-react";
import type { ComponentType } from "react";

export interface ProblemItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  ctaDisabled: boolean;
  popular: boolean;
  plan: string;
}

export interface ComparisonNote {
  text: string;
  highlight: string;
}

export interface ProductConfig {
  // Brand
  slug: string;
  brandName: string;
  domain: string;
  contactEmail: string;
  tallyUrl: string;
  logoIcon: LucideIcon;

  // SEO
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;

  // Google Ads
  gtagId: string;
  gtagConversion: string;

  // Hero
  heroBadge: string;
  heroHeadline: string;
  heroHeadlineAccent: string;
  heroSubheadline: string;
  heroCta: string;
  heroCtaSub: string;
  heroDemo: ComponentType;

  // Problem section
  problemTitle: string;
  problemSubtitle: string;
  problems: ProblemItem[];
  problemSolution: string;

  // Pricing
  pricingTitle: string;
  pricingSubtitle: string;
  plans: PricingPlan[];
  comparison: ComparisonNote | null;

  // CTA section
  ctaTitle: string;
  ctaDescription: string;
  ctaOffer: string;
  ctaCta: string;
  ctaDisclaimer: string;
  ctaIcon: LucideIcon;

  // Noscript
  noscriptHeadline: string;
  noscriptDescription: string;
  noscriptProblems: string[];
  noscriptPricing: string[];
  noscriptCta: string;

  // Service description for terms/privacy
  serviceDescription: string;
}

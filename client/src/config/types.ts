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

// --- Optional section types ---

export interface BeforeAfterItem {
  niche: string;
  nicheIcon: LucideIcon;
  review: string;
  reviewRating: number;
  reply: string;
}

export interface BeforeAfterSection {
  title: string;
  subtitle: string;
  items: BeforeAfterItem[];
}

export interface HowItWorksStep {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
}

export interface HowItWorksSection {
  title: string;
  subtitle: string;
  steps: HowItWorksStep[];
}

export interface SocialProofMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  company: string;
  metric: string;
  description: string;
}

export interface SocialProofSection {
  title?: string;
  metrics: SocialProofMetric[];
  platforms?: string[];
  caseStudy?: CaseStudy;
}

export interface TemplateItem {
  name: string;
  description: string;
  color: string;
}

export interface TemplatesSection {
  title: string;
  subtitle: string;
  items: TemplateItem[];
}

export interface ComparisonFeature {
  feature: string;
  us: string | boolean;
  values: Record<string, string | boolean>;
}

export interface ComparisonTableSection {
  title: string;
  subtitle: string;
  usLabel: string;
  competitors: string[];
  features: ComparisonFeature[];
}

export interface AgencyFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ForAgenciesSection {
  title: string;
  subtitle: string;
  features: AgencyFeature[];
  cta: string;
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

  // Optional sections (product-specific)
  beforeAfter?: BeforeAfterSection;
  howItWorks?: HowItWorksSection;
  socialProof?: SocialProofSection;
  templates?: TemplatesSection;
  comparisonTable?: ComparisonTableSection;
  forAgencies?: ForAgenciesSection;
}

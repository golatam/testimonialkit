import { FileText, Rocket, Clock, DollarSign, AlertTriangle } from "lucide-react";
import { PolicyDemo } from "@/components/demos/policy-demo";
import type { ProductConfig } from "../types";

export const policykit: ProductConfig = {
  slug: "policykit",
  brandName: "PolicyKit",
  domain: "policykit.online",
  contactEmail: "hello@policykit.online",
  tallyUrl: "https://tally.so/r/EkPLxB",
  logoIcon: FileText,

  metaTitle: "PolicyKit - Privacy Policy Generator in 2 Minutes",
  metaDescription: "Generate legally compliant Privacy Policy, Terms of Service & Cookie Policy in minutes. GDPR & CCPA compliant. No lawyer needed. Free plan available.",
  ogTitle: "PolicyKit - Privacy Policy Generator in 2 Minutes",
  ogDescription: "Generate legally compliant Privacy Policy, Terms & Cookie Policy. GDPR & CCPA covered. No lawyer needed.",

  gtagId: "",
  gtagConversion: "",

  heroBadge: "Launching March 2026",
  heroHeadline: "Generate Your Privacy Policy",
  heroHeadlineAccent: "in 2 Minutes.",
  heroSubheadline: "Legally compliant Privacy Policy, Terms of Service & Cookie Policy.\nNo lawyer needed. GDPR & CCPA covered.",
  heroCta: "Generate Free",
  heroCtaSub: "No credit card required",
  heroDemo: PolicyDemo,

  problemTitle: "Every Website Needs Legal Pages",
  problemSubtitle: "Don't risk fines. Generate compliant legal documents in minutes.",
  problems: [
    {
      icon: DollarSign,
      title: "Lawyers Charge $2,000+",
      description: "A single Privacy Policy from a lawyer costs $1,000-3,000. Terms of Service is another $1,000+. Most founders can't afford that.",
    },
    {
      icon: AlertTriangle,
      title: "GDPR Fines Start at $50,000",
      description: "Every website collecting data needs a Privacy Policy by law. GDPR, CCPA, CalOPPA — the requirements keep growing.",
    },
    {
      icon: Clock,
      title: "DIY Templates Are Outdated",
      description: "Free templates you find online miss key clauses and don't update when laws change. One missing section = legal risk.",
    },
  ],
  problemSolution: "Answer 10 questions. Get all legal pages instantly.",

  pricingTitle: "Simple, Honest Pricing",
  pricingSubtitle: "No hidden fees. No surprises. Cancel anytime.",
  plans: [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Basic coverage",
      features: [
        "1 basic Privacy Policy",
        "Standard template",
        "HTML & text export",
        '"Powered by PolicyKit" badge',
      ],
      cta: "Coming March 2026",
      ctaDisabled: true,
      popular: false,
      plan: "free",
    },
    {
      name: "Starter",
      price: "$9",
      period: "/month",
      description: "Full legal coverage",
      features: [
        "Privacy + Terms + Cookie Policy",
        "GDPR & CCPA compliant",
        "Auto-updates when laws change",
        "Custom branding",
        "Embed or host on your site",
      ],
      cta: "Join the Waitlist",
      ctaDisabled: false,
      popular: true,
      plan: "starter",
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "For agencies & multiple sites",
      features: [
        "Everything in Starter, plus:",
        "Multiple websites",
        "Custom clauses",
        "Priority support",
        "White-label documents",
      ],
      cta: "Join the Waitlist",
      ctaDisabled: false,
      popular: false,
      plan: "pro",
    },
  ],
  comparison: {
    text: "Termly = $10-35/mo. TermsFeed = $9-49/mo. Iubenda = $29-99/year.",
    highlight: "We offer the same coverage at a fraction of the cost.",
  },

  ctaTitle: "Launching March 2026",
  ctaDescription: "Join our waitlist. Generate your first policy free.",
  ctaOffer: "Early supporters get special lifetime pricing when we launch.",
  ctaCta: "Generate My Privacy Policy",
  ctaDisclaimer: "No spam. Unsubscribe anytime. We respect your inbox.",
  ctaIcon: Rocket,

  noscriptHeadline: "PolicyKit — Generate Your Privacy Policy in 2 Minutes",
  noscriptDescription: "Generate legally compliant Privacy Policy, Terms of Service & Cookie Policy. No lawyer needed.",
  noscriptProblems: [
    "A lawyer charges $2,000+ for legal pages",
    "GDPR fines start at $50,000 for non-compliance",
    "DIY templates are outdated and miss key regulations",
  ],
  noscriptPricing: [
    "Free — $0/month: 1 basic Privacy Policy",
    "Starter — $9/month: Privacy + Terms + Cookies, auto-updates",
    "Pro — $29/month: Multiple sites, custom clauses, priority support",
  ],
  noscriptCta: "Launching March 2026. Generate your Privacy Policy free.",

  serviceDescription: "PolicyKit is a software-as-a-service (SaaS) platform that generates legally compliant Privacy Policies, Terms of Service, and Cookie Policies for websites and applications. The service helps businesses comply with GDPR, CCPA, and other privacy regulations without needing a lawyer.",
};

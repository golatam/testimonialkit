import { Star, Rocket, Clock, DollarSign, Code } from "lucide-react";
import { TestimonialDemo } from "@/components/demos/testimonial-demo";
import type { ProductConfig } from "../types";

export const testimonialkit: ProductConfig = {
  slug: "testimonialkit",
  brandName: "TestimonialKit",
  domain: "testimonialkit.online",
  contactEmail: "hello@testimonialkit.online",
  tallyUrl: "https://tally.so/r/9qDAZp",
  logoIcon: Star,

  metaTitle: "TestimonialKit - Collect Testimonials. Simple & Cheap.",
  metaDescription: "Collect and display beautiful testimonials for your website. An affordable alternative to Senja & Testimonial.to. Free plan available. Built for bootstrappers.",
  ogTitle: "TestimonialKit - Collect Testimonials. Simple & Cheap.",
  ogDescription: "An affordable alternative to Senja & Testimonial.to. Free to start. Built for indie hackers.",

  gtagId: "AW-17108387879",
  gtagConversion: "AW-17108387879/2nrMCNymms4aEKeQ9d0_",

  heroBadge: "Launching March 2026",
  heroHeadline: "Collect Testimonials.",
  heroHeadlineAccent: "Simple & Cheap.",
  heroSubheadline: "An affordable alternative to Senja & Testimonial.to.\nFree to start. Built for bootstrappers.",
  heroCta: "Join the Waitlist",
  heroCtaSub: "Free for first 50 signups",
  heroDemo: TestimonialDemo,

  problemTitle: "Why We're Building This",
  problemSubtitle: "Collecting testimonials shouldn't be painful or expensive.",
  problems: [
    {
      icon: Clock,
      title: "Manual Collection Takes Hours",
      description: "Screenshotting tweets, copying text, asking via email... Collecting 10 testimonials = 4-6 hours of work.",
    },
    {
      icon: DollarSign,
      title: "Existing Tools Too Expensive",
      description: "Senja: $19-39/month. Testimonial.to: $25-60/month. Too much for early-stage founders.",
    },
    {
      icon: Code,
      title: "Beautiful Widgets Need a Developer",
      description: "Free WordPress plugins look ugly. Making a custom widget means hiring a dev for $200-500.",
    },
  ],
  problemSolution: "We fix all of this. Starting free.",

  pricingTitle: "Simple, Honest Pricing",
  pricingSubtitle: "No hidden fees. No surprises. Cancel anytime.",
  plans: [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Get started with the basics",
      features: [
        "15 text testimonials",
        "1 testimonial form",
        "1 basic widget",
        '"Powered by TK" branding',
      ],
      cta: "Coming March 2026",
      ctaDisabled: true,
      popular: false,
      plan: "free",
    },
    {
      name: "Starter",
      price: "$7",
      period: "/month",
      description: "Everything you need to grow",
      features: [
        "Unlimited text testimonials",
        "3 collection forms",
        "Wall of Love widget",
        "Social images (Twitter/LinkedIn)",
        "Remove branding",
      ],
      cta: "Join the Waitlist",
      ctaDisabled: false,
      popular: true,
      plan: "starter",
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      description: "For power users",
      features: [
        "Everything in Starter, plus:",
        "5-10 video testimonials",
        "Import from Google/G2 reviews",
        "Custom domain",
        "Priority support",
      ],
      cta: "Join the Waitlist",
      ctaDisabled: false,
      popular: false,
      plan: "pro",
    },
  ],
  comparison: {
    text: "Senja Starter = $19/mo, Pro = $39/mo. Testimonial.to Basic = $25/mo, Premium = $60/mo.",
    highlight: "We're building a more affordable alternative.",
  },

  ctaTitle: "Launching March 2026",
  ctaDescription: "Join our waitlist. Free for first 50 signups.",
  ctaOffer: "Early supporters get special lifetime pricing when we launch.",
  ctaCta: "Join the Waitlist",
  ctaDisclaimer: "No spam. Unsubscribe anytime. We respect your inbox.",
  ctaIcon: Rocket,

  noscriptHeadline: "TestimonialKit — Collect Testimonials. Simple & Cheap.",
  noscriptDescription: "An affordable alternative to Senja & Testimonial.to. Free to start. Built for bootstrappers.",
  noscriptProblems: [
    "Manual collection takes hours — we automate it",
    "Existing tools cost $19-60/month — we start free",
    "Beautiful widgets without hiring a developer",
  ],
  noscriptPricing: [
    "Free — $0/month: 15 text testimonials, 1 form, 1 widget",
    "Starter — $7/month: Unlimited testimonials, 3 forms, Wall of Love widget",
    "Pro — $19/month: Everything in Starter plus video testimonials, import reviews, custom domain",
  ],
  noscriptCta: "Launching March 2026. Join our waitlist — free for first 50 signups.",

  serviceDescription: "TestimonialKit is a software-as-a-service (SaaS) platform that helps businesses collect, manage, and display customer testimonials on their websites. The service includes testimonial collection forms, embeddable widgets, and a management dashboard.",
};

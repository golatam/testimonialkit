import {
  Users,
  Rocket,
  Clock,
  DollarSign,
  Share2,
  FileText,
  Paintbrush,
  BarChart3,
} from "lucide-react";
import { WaitlistDemo } from "@/components/demos/waitlist-demo";
import type { ProductConfig } from "../types";

export const waitlistkit: ProductConfig = {
  slug: "waitlistkit",
  brandName: "WaitlistKit",
  domain: "waitlistkit.online",
  contactEmail: "hello@waitlistkit.online",
  tallyUrl: "https://tally.so/r/442LKA",
  logoIcon: Users,

  metaTitle: "WaitlistKit - Viral Waitlist Builder with Referrals",
  metaDescription:
    "Create a beautiful waitlist page with viral referral mechanics. Users share, move up the queue, grow your list 3x faster. Free plan available.",
  ogTitle: "WaitlistKit - Viral Waitlist Builder with Referrals",
  ogDescription:
    "Turn your waitlist into a viral growth engine. Built-in referral system. No code needed.",

  gtagId: "",
  gtagConversion: "",

  heroBadge: "Launching March 2026",
  heroHeadline: "Turn Your Waitlist Into",
  heroHeadlineAccent: "a Viral Growth Engine.",
  heroSubheadline:
    "Beautiful waitlist pages with built-in referral mechanics.\nUsers share, move up the queue, grow your list 3x faster.",
  heroCta: "Create Your Waitlist",
  heroCtaSub: "Free plan available",
  heroDemo: WaitlistDemo,

  // Social Proof + Robinhood case study
  socialProof: {
    title: "Why the best launches use viral waitlists",
    metrics: [
      { value: "3x", label: "Faster list growth" },
      { value: "2 min", label: "Setup time" },
      { value: "48%", label: "Avg. share rate" },
      { value: "0", label: "Lines of code" },
    ],
    caseStudy: {
      company: "Robinhood",
      metric: "1M+ signups before launch",
      description:
        'Robinhood\'s referral waitlist generated over 1 million signups before their app launched. Users moved up the queue by inviting friends — creating massive viral growth. WaitlistKit gives you the same mechanic, ready in 2 minutes.',
    },
  },

  problemTitle: "Your Launch Waitlist Is Broken",
  problemSubtitle:
    "Collecting emails is step one. Making your waitlist go viral is the game-changer.",
  problems: [
    {
      icon: Clock,
      title: "Simple Forms Don't Drive Growth",
      description:
        "A basic email form collects signups but doesn't incentivize sharing. Your waitlist grows linearly, not virally.",
    },
    {
      icon: Share2,
      title: "Building Referrals Takes Weeks",
      description:
        "Coding a referral system from scratch means tracking links, positions, rewards — weeks of engineering work.",
    },
    {
      icon: DollarSign,
      title: "Existing Tools Are Overpriced",
      description:
        "Viral Loops charges $49-299/mo. GetWaitlist starts at $15/mo. Too much when you're pre-revenue.",
    },
  ],
  problemSolution: "Launch a viral waitlist in 2 minutes. No code needed.",

  // How It Works — 3 steps
  howItWorks: {
    title: "Launch in 3 Simple Steps",
    subtitle: "From zero to viral waitlist in under 2 minutes.",
    steps: [
      {
        icon: Paintbrush,
        step: "1",
        title: "Pick a Template",
        description:
          "Choose from beautiful, mobile-ready waitlist templates. Customize colors, copy, and branding — no design skills needed.",
      },
      {
        icon: Share2,
        step: "2",
        title: "Share Your Page",
        description:
          "Publish your waitlist page instantly. Each signup gets a unique referral link to share with friends.",
      },
      {
        icon: BarChart3,
        step: "3",
        title: "Watch It Grow",
        description:
          "Referrers move up the queue automatically. Track signups, shares, and conversions in real-time.",
      },
    ],
  },

  // Templates
  templates: {
    title: "Start with a Template",
    subtitle: "4 beautiful, conversion-optimized templates. Customize everything.",
    items: [
      {
        name: "Minimal Clean",
        description: "Simple, focused design. Perfect for SaaS and dev tools.",
        color: "#f8fafc",
      },
      {
        name: "Gradient Bold",
        description: "Eye-catching gradients. Great for consumer apps and marketplaces.",
        color: "#ede9fe",
      },
      {
        name: "Dark Mode",
        description: "Sleek dark theme. Ideal for tech products and AI tools.",
        color: "#1e1b2e",
      },
      {
        name: "Playful",
        description: "Fun, colorful vibe. Best for communities and social apps.",
        color: "#fef3c7",
      },
    ],
  },

  // Comparison table
  comparisonTable: {
    title: "How We Compare",
    subtitle: "Everything you need, at a price that makes sense.",
    usLabel: "WaitlistKit",
    competitors: ["GetWaitlist", "LaunchRock", "Viral Loops"],
    features: [
      {
        feature: "Referral system",
        us: true,
        values: { GetWaitlist: true, LaunchRock: false, "Viral Loops": true },
      },
      {
        feature: "Beautiful templates",
        us: true,
        values: { GetWaitlist: false, LaunchRock: true, "Viral Loops": false },
      },
      {
        feature: "Custom domain",
        us: true,
        values: { GetWaitlist: true, LaunchRock: false, "Viral Loops": true },
      },
      {
        feature: "No-code setup",
        us: true,
        values: { GetWaitlist: true, LaunchRock: true, "Viral Loops": false },
      },
      {
        feature: "A/B testing",
        us: true,
        values: { GetWaitlist: false, LaunchRock: false, "Viral Loops": true },
      },
      {
        feature: "Free plan",
        us: true,
        values: { GetWaitlist: "Limited", LaunchRock: true, "Viral Loops": false },
      },
      {
        feature: "Starting price",
        us: "$9/mo",
        values: { GetWaitlist: "$15/mo", LaunchRock: "Free", "Viral Loops": "$49/mo" },
      },
    ],
  },

  pricingTitle: "Simple, Honest Pricing",
  pricingSubtitle: "No hidden fees. No surprises. Cancel anytime.",
  plans: [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Get started",
      features: [
        "1 waitlist page",
        "100 signups",
        "Basic referral tracking",
        '"Powered by WaitlistKit" badge',
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
      description: "For product launches",
      features: [
        "Unlimited signups",
        "Full referral system",
        "Custom domain",
        "Email notifications",
        "Remove branding",
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
      description: "For serious launches",
      features: [
        "Everything in Starter, plus:",
        "Multiple waitlists",
        "A/B testing",
        "Zapier integration",
        "Advanced analytics",
      ],
      cta: "Join the Waitlist",
      ctaDisabled: false,
      popular: false,
      plan: "pro",
    },
  ],
  comparison: {
    text: "GetWaitlist = $15-49/mo. Viral Loops = $49-299/mo. LaunchRock = free but no referrals.",
    highlight:
      "We combine beautiful pages + viral referrals at a fraction of the cost.",
  },

  ctaTitle: "Ready to Launch?",
  ctaDescription: "Create your viral waitlist page in 2 minutes. Free to start.",
  ctaOffer:
    "Early supporters get special lifetime pricing when we launch.",
  ctaCta: "Create Your Waitlist Free",
  ctaDisclaimer: "No spam. Unsubscribe anytime. We respect your inbox.",
  ctaIcon: Rocket,

  noscriptHeadline:
    "WaitlistKit — Turn Your Waitlist Into a Viral Growth Engine",
  noscriptDescription:
    "Create a beautiful waitlist page with viral referral mechanics. No code needed.",
  noscriptProblems: [
    "Simple email forms don't drive viral growth",
    "Building referral mechanics from scratch takes weeks",
    "Existing tools like LaunchRock lack referral features",
  ],
  noscriptPricing: [
    "Free — $0/month: 1 waitlist, 100 signups",
    "Starter — $9/month: Unlimited signups, referral system, custom domain",
    "Pro — $29/month: Multiple waitlists, Zapier, analytics, A/B testing",
  ],
  noscriptCta: "Launching March 2026. Create your waitlist free.",

  serviceDescription:
    "WaitlistKit is a software-as-a-service (SaaS) platform that helps businesses create beautiful waitlist pages with built-in viral referral mechanics for product launches. The service includes customizable templates, referral tracking, and analytics.",
};

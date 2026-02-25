import { Bell, Rocket, Clock, DollarSign, EyeOff } from "lucide-react";
import { ChangelogDemo } from "@/components/demos/changelog-demo";
import type { ProductConfig } from "../types";

export const changelogkit: ProductConfig = {
  slug: "changelogkit",
  brandName: "ChangelogKit",
  domain: "changelogkit.online",
  contactEmail: "hello@changelogkit.online",
  tallyUrl: "https://tally.so/r/changelogkit",
  logoIcon: Bell,

  metaTitle: "ChangelogKit - In-App Changelog Widget for SaaS",
  metaDescription: "Beautiful changelog widget for your SaaS. Show users what's new right inside your app. Like Beamer but 60% cheaper. Free plan available.",
  ogTitle: "ChangelogKit - In-App Changelog Widget for SaaS",
  ogDescription: "Your users miss every update. Fix that with an in-app changelog widget. Like Beamer, but 60% cheaper.",

  gtagId: "",
  gtagConversion: "",

  heroBadge: "Launching March 2026",
  heroHeadline: "Your Users Miss Every Update.",
  heroHeadlineAccent: "Fix That.",
  heroSubheadline: "In-app changelog widget that shows users what's new.\nLike Beamer, but 60% cheaper. Set up in 5 minutes.",
  heroCta: "Add Changelog Widget",
  heroCtaSub: "Free plan available",
  heroDemo: ChangelogDemo,

  problemTitle: "You Ship Features. Nobody Notices.",
  problemSubtitle: "80% of users never see your email announcements. Reach them where they are.",
  problems: [
    {
      icon: EyeOff,
      title: "Email Updates Get Ignored",
      description: "80% of users never open your product update emails. Your hard work goes unnoticed and adoption stays low.",
    },
    {
      icon: DollarSign,
      title: "Beamer Costs $49-99/Month",
      description: "Beamer starts at $49/mo for basic features. Headway charges $49/mo too. That's expensive for early-stage SaaS.",
    },
    {
      icon: Clock,
      title: "Building Custom Is a Waste",
      description: "Building a custom changelog system takes weeks of engineering time. Time better spent on your actual product.",
    },
  ],
  problemSolution: "Paste a script. Write an update. Users see it in-app.",

  pricingTitle: "Simple, Honest Pricing",
  pricingSubtitle: "No hidden fees. No surprises. Cancel anytime.",
  plans: [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Get started",
      features: [
        "1 project",
        "10 posts per month",
        "In-app widget",
        '"Powered by ChangelogKit" badge',
      ],
      cta: "Coming March 2026",
      ctaDisabled: true,
      popular: false,
      plan: "free",
    },
    {
      name: "Starter",
      price: "$19",
      period: "/month",
      description: "For growing SaaS",
      features: [
        "Unlimited posts",
        "Widget customization",
        "Read tracking & analytics",
        "Custom domain",
        "Remove branding",
      ],
      cta: "Join the Waitlist",
      ctaDisabled: false,
      popular: true,
      plan: "starter",
    },
    {
      name: "Pro",
      price: "$49",
      period: "/month",
      description: "For scaling teams",
      features: [
        "Everything in Starter, plus:",
        "Multiple projects",
        "User segmentation",
        "API access",
        "Scheduled posts",
      ],
      cta: "Join the Waitlist",
      ctaDisabled: false,
      popular: false,
      plan: "pro",
    },
  ],
  comparison: {
    text: "Beamer = $49-99/mo. AnnounceKit = $49-149/mo. Headway = $49/mo.",
    highlight: "We offer the same features at 60% less.",
  },

  ctaTitle: "Launching March 2026",
  ctaDescription: "Join our waitlist. Add a changelog widget free.",
  ctaOffer: "Early supporters get special lifetime pricing when we launch.",
  ctaCta: "Add Changelog Widget Free",
  ctaDisclaimer: "No spam. Unsubscribe anytime. We respect your inbox.",
  ctaIcon: Rocket,

  noscriptHeadline: "ChangelogKit — Your Users Miss Every Update. Fix That.",
  noscriptDescription: "Beautiful in-app changelog widget. Show users what's new right inside your app.",
  noscriptProblems: [
    "80% of users never see your email announcements",
    "Beamer costs $49-99/month — overkill for most SaaS",
    "Building a custom changelog system takes weeks",
  ],
  noscriptPricing: [
    "Free — $0/month: 1 project, 10 posts/month",
    "Starter — $19/month: Unlimited posts, widget customization, analytics",
    "Pro — $49/month: Multiple projects, user segmentation, API access",
  ],
  noscriptCta: "Launching March 2026. Add a changelog widget free.",

  serviceDescription: "ChangelogKit is a software-as-a-service (SaaS) platform that provides in-app changelog widgets for SaaS products. The service helps businesses communicate product updates to users directly inside their application, increasing feature adoption and user engagement.",
};

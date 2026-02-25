import { Users, Rocket, Clock, DollarSign, Share2 } from "lucide-react";
import { WaitlistDemo } from "@/components/demos/waitlist-demo";
import type { ProductConfig } from "../types";

export const waitlistkit: ProductConfig = {
  slug: "waitlistkit",
  brandName: "WaitlistKit",
  domain: "waitlistkit.online",
  contactEmail: "hello@waitlistkit.online",
  tallyUrl: "https://tally.so/r/waitlistkit",
  logoIcon: Users,

  metaTitle: "WaitlistKit - Viral Waitlist Builder with Referrals",
  metaDescription: "Create a beautiful waitlist page with viral referral mechanics. Users share, move up the queue, grow your list 3x faster. Free plan available.",
  ogTitle: "WaitlistKit - Viral Waitlist Builder with Referrals",
  ogDescription: "Turn your waitlist into a viral growth engine. Built-in referral system. No code needed.",

  gtagId: "",
  gtagConversion: "",

  heroBadge: "Launching March 2026",
  heroHeadline: "Turn Your Waitlist Into",
  heroHeadlineAccent: "a Viral Growth Engine.",
  heroSubheadline: "Beautiful waitlist pages with built-in referral mechanics.\nUsers share, move up the queue, grow your list 3x faster.",
  heroCta: "Create Your Waitlist",
  heroCtaSub: "Free plan available",
  heroDemo: WaitlistDemo,

  problemTitle: "Your Launch Waitlist Is Broken",
  problemSubtitle: "Collecting emails is step one. Making your waitlist go viral is the game-changer.",
  problems: [
    {
      icon: Clock,
      title: "Simple Forms Don't Drive Growth",
      description: "A basic email form collects signups but doesn't incentivize sharing. Your waitlist grows linearly, not virally.",
    },
    {
      icon: Share2,
      title: "Building Referrals Takes Weeks",
      description: "Coding a referral system from scratch means tracking links, positions, rewards — weeks of engineering work.",
    },
    {
      icon: DollarSign,
      title: "Existing Tools Are Overpriced",
      description: "Viral Loops charges $49-299/mo. GetWaitlist starts at $15/mo. Too much when you're pre-revenue.",
    },
  ],
  problemSolution: "Launch a viral waitlist in 2 minutes. No code needed.",

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
    highlight: "We combine beautiful pages + viral referrals at a fraction of the cost.",
  },

  ctaTitle: "Launching March 2026",
  ctaDescription: "Join our waitlist. Create your first waitlist page free.",
  ctaOffer: "Early supporters get special lifetime pricing when we launch.",
  ctaCta: "Create Your Waitlist Free",
  ctaDisclaimer: "No spam. Unsubscribe anytime. We respect your inbox.",
  ctaIcon: Rocket,

  noscriptHeadline: "WaitlistKit — Turn Your Waitlist Into a Viral Growth Engine",
  noscriptDescription: "Create a beautiful waitlist page with viral referral mechanics. No code needed.",
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

  serviceDescription: "WaitlistKit is a software-as-a-service (SaaS) platform that helps businesses create beautiful waitlist pages with built-in viral referral mechanics for product launches. The service includes customizable templates, referral tracking, and analytics.",
};

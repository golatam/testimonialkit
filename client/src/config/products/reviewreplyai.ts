import {
  MessageSquareReply,
  Rocket,
  Clock,
  DollarSign,
  Bot,
  UtensilsCrossed,
  Bed,
  Stethoscope,
  Building2,
  Palette,
  BarChart3,
} from "lucide-react";
import { ReviewReplyDemo } from "@/components/demos/review-reply-demo";
import type { ProductConfig } from "../types";

export const reviewreplyai: ProductConfig = {
  slug: "reviewreplyai",
  brandName: "ReviewReplyAI",
  domain: "reviewreplyai.online",
  contactEmail: "hello@reviewreplyai.online",
  tallyUrl: "https://tally.so/r/PdAlzB",
  logoIcon: MessageSquareReply,

  metaTitle: "ReviewReplyAI - AI Google Review Replies in 5 Seconds",
  metaDescription:
    "AI-powered review response generator. Paste any Google or Yelp review, get a professional reply instantly. Free 10 replies/month. Built for local businesses.",
  ogTitle: "ReviewReplyAI - AI Google Review Replies in 5 Seconds",
  ogDescription:
    "Stop wasting hours writing review responses. AI generates professional replies for Google, Yelp & TripAdvisor.",

  gtagId: "",
  gtagConversion: "",

  heroBadge: "Launching March 2026",
  heroHeadline: "Reply to Every Google Review",
  heroHeadlineAccent: "in 5 Seconds.",
  heroSubheadline:
    "AI generates professional responses for Google, Yelp & TripAdvisor.\nFree 10 replies/month. Built for local businesses.",
  heroCta: "Start Free",
  heroCtaSub: "No credit card required",
  heroDemo: ReviewReplyDemo,

  // Social Proof
  socialProof: {
    title: "Trusted by local businesses",
    metrics: [
      { value: "5s", label: "Average reply time" },
      { value: "76%", label: "Consumers read replies" },
      { value: "35%", label: "More revenue with replies" },
      { value: "4.8★", label: "Average response quality" },
    ],
    platforms: ["Google", "Yelp", "TripAdvisor", "Facebook", "Trustpilot"],
  },

  problemTitle: "Writing Review Replies Is Broken",
  problemSubtitle:
    "76% of consumers read review responses before visiting. You can't afford to ignore them.",
  problems: [
    {
      icon: Clock,
      title: "Replying Takes Hours Every Week",
      description:
        "Writing thoughtful responses to 20+ reviews weekly eats 5+ hours. Most businesses just stop replying.",
    },
    {
      icon: DollarSign,
      title: "Ignoring Reviews Costs Customers",
      description:
        "Businesses that reply to reviews get 35% more revenue. Not replying tells customers you don't care.",
    },
    {
      icon: Bot,
      title: "Generic Templates Sound Robotic",
      description:
        "Copy-paste responses are obvious and damage trust. Each review needs a unique, human-sounding reply.",
    },
  ],
  problemSolution: "Paste a review. Get a professional reply in 5 seconds.",

  // Before/After examples by niche
  beforeAfter: {
    title: "See It in Action",
    subtitle: "Real reviews, real AI replies — across different industries.",
    items: [
      {
        niche: "Restaurant",
        nicheIcon: UtensilsCrossed,
        review:
          "Waited 40 minutes for our food and it came out cold. Server was nice but the kitchen needs serious help.",
        reviewRating: 2,
        reply:
          "Hi, thank you for your honest feedback. We sincerely apologize for the long wait and the temperature of your food — that's not the experience we aim to provide. We're addressing this with our kitchen team immediately. We'd love to make it right — please reach out to us directly for a complimentary visit.",
      },
      {
        niche: "B&B / Hotel",
        nicheIcon: Bed,
        review:
          "Beautiful property but the room wasn't clean when we arrived. Found hair in the bathroom and stains on the sheets. Disappointing for the price.",
        reviewRating: 2,
        reply:
          "Thank you for your feedback, and we sincerely apologize for the cleanliness issues. This is absolutely unacceptable and does not reflect our standards. We've spoken with our housekeeping team and implemented additional inspection protocols. We'd love to offer you a complimentary night to show you the experience we're known for.",
      },
      {
        niche: "Dental Clinic",
        nicheIcon: Stethoscope,
        review:
          "Dr. Chen was amazing! Explained everything clearly, made me feel comfortable during the procedure. Best dental experience I've had. Highly recommend!",
        reviewRating: 5,
        reply:
          "Thank you so much for this wonderful review! Dr. Chen will be delighted to hear that you felt comfortable and well-informed during your visit. Patient comfort is our top priority, and your kind words motivate our entire team. We look forward to welcoming you back for your next appointment!",
      },
    ],
  },

  // For Agencies — white label
  forAgencies: {
    title: "White-Label AI Replies for Your Clients",
    subtitle:
      "Manage review responses for 10, 50, or 100+ locations. One dashboard, every client.",
    features: [
      {
        icon: Building2,
        title: "Multi-Location Dashboard",
        description:
          "Manage all client locations from one place. Switch between brands, track reply rates, spot trends.",
      },
      {
        icon: Palette,
        title: "Custom Brand Voice",
        description:
          "Train AI on each client's tone — casual for a coffee shop, professional for a law firm. No generic replies.",
      },
      {
        icon: BarChart3,
        title: "Client Reports",
        description:
          "Weekly reports per client: reviews received, replies sent, sentiment trends. Ready to share.",
      },
    ],
    cta: "Get Agency Access",
  },

  pricingTitle: "Simple, Honest Pricing",
  pricingSubtitle: "No hidden fees. No surprises. Cancel anytime.",
  plans: [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Try it out",
      features: [
        "10 AI replies per month",
        "Google & Yelp reviews",
        "Professional tone",
        "Copy & paste replies",
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
      description: "For single-location businesses",
      features: [
        "100 AI replies per month",
        "Brand voice training",
        "Multiple review platforms",
        "Reply history & analytics",
        "Priority support",
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
      description: "For agencies & multi-location",
      features: [
        "Unlimited AI replies",
        "Multi-location support",
        "Team accounts",
        "API access",
        "Custom response templates",
      ],
      cta: "Join the Waitlist",
      ctaDisabled: false,
      popular: false,
      plan: "pro",
    },
  ],
  comparison: {
    text: "ResponseScribe = $29-99/mo (manual). Hiring a VA = $500+/mo.",
    highlight: "AI replies for a fraction of the cost.",
  },

  ctaTitle: "Launching March 2026",
  ctaDescription: "Join our waitlist. Free for first 50 signups.",
  ctaOffer:
    "Early supporters get special lifetime pricing when we launch.",
  ctaCta: "Start Free",
  ctaDisclaimer: "No spam. Unsubscribe anytime. We respect your inbox.",
  ctaIcon: Rocket,

  noscriptHeadline: "ReviewReplyAI — AI Google Review Replies in 5 Seconds",
  noscriptDescription:
    "Stop wasting hours writing review responses. Paste any Google review, get a professional reply instantly.",
  noscriptProblems: [
    "Writing review replies takes hours every week",
    "Not replying to reviews costs you customers",
    "Generic templates sound robotic and impersonal",
  ],
  noscriptPricing: [
    "Free — $0/month: 10 AI replies per month",
    "Starter — $9/month: 100 replies, brand voice training",
    "Pro — $49/month: Unlimited replies, multi-location, API access",
  ],
  noscriptCta:
    "Launching March 2026. Start free — no credit card required.",

  serviceDescription:
    "ReviewReplyAI is a software-as-a-service (SaaS) platform that uses artificial intelligence to generate professional responses to customer reviews on platforms like Google, Yelp, and TripAdvisor. The service helps local businesses save time and maintain their online reputation.",
};

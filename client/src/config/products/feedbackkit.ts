import { MessageSquare, Rocket, Inbox, DollarSign, BarChart3 } from "lucide-react";
import { FeedbackDemo } from "@/components/demos/feedback-demo";
import type { ProductConfig } from "../types";

export const feedbackkit: ProductConfig = {
  slug: "feedbackkit",
  brandName: "FeedbackKit",
  domain: "feedbackkit.online",
  contactEmail: "hello@feedbackkit.online",
  tallyUrl: "https://tally.so/r/feedbackkit",
  logoIcon: MessageSquare,

  metaTitle: "FeedbackKit - Feature Request Board & Voting Widget",
  metaDescription: "Collect feature requests, let users vote, prioritize your roadmap. Like Canny but 4x cheaper. Embeddable widget + voting board. Free plan available.",
  ogTitle: "FeedbackKit - Feature Request Board & Voting Widget",
  ogDescription: "Know exactly what your users want. Feature voting board + embeddable widget. Like Canny, but 4x cheaper.",

  gtagId: "",
  gtagConversion: "",

  heroBadge: "Launching March 2026",
  heroHeadline: "Know Exactly What",
  heroHeadlineAccent: "Your Users Want.",
  heroSubheadline: "Feature request board with voting. Embeddable widget for your app.\nLike Canny, but 4x cheaper. Free to start.",
  heroCta: "Start Collecting Feedback",
  heroCtaSub: "Free plan available",
  heroDemo: FeedbackDemo,

  problemTitle: "Feedback Is Everywhere. Except Where You Need It.",
  problemSubtitle: "Stop guessing what to build next. Let your users tell you.",
  problems: [
    {
      icon: Inbox,
      title: "Feedback Scattered Everywhere",
      description: "Users send requests via email, Slack, Twitter, support tickets. You lose track and build the wrong things.",
    },
    {
      icon: DollarSign,
      title: "Canny Costs $79/Month",
      description: "Enterprise tools like Canny ($79/mo) and UserVoice ($799/mo) are overkill for early-stage SaaS companies.",
    },
    {
      icon: BarChart3,
      title: "No Way to Prioritize",
      description: "Without voting, every request feels equally important. You end up building what the loudest customer wants.",
    },
  ],
  problemSolution: "One board. User voting. Build what matters.",

  pricingTitle: "Simple, Honest Pricing",
  pricingSubtitle: "No hidden fees. No surprises. Cancel anytime.",
  plans: [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Get started",
      features: [
        "1 feedback board",
        "50 feature requests",
        "User voting",
        '"Powered by FeedbackKit" badge',
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
        "Unlimited feature requests",
        "Embeddable widget",
        "Custom domain",
        "Status updates (Planned, In Progress)",
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
        "Multiple boards",
        "Analytics & insights",
        "Zapier integration",
        "SSO & team roles",
      ],
      cta: "Join the Waitlist",
      ctaDisabled: false,
      popular: false,
      plan: "pro",
    },
  ],
  comparison: {
    text: "Canny = $79/mo. Upvoty = $15-75/mo. UserVoice = $799/mo.",
    highlight: "We're building a more affordable alternative to Canny.",
  },

  ctaTitle: "Launching March 2026",
  ctaDescription: "Join our waitlist. Start collecting feedback free.",
  ctaOffer: "Early supporters get special lifetime pricing when we launch.",
  ctaCta: "Start Collecting Feedback",
  ctaDisclaimer: "No spam. Unsubscribe anytime. We respect your inbox.",
  ctaIcon: Rocket,

  noscriptHeadline: "FeedbackKit — Know Exactly What Your Users Want",
  noscriptDescription: "Collect feature requests, let users vote, prioritize your roadmap. Like Canny but 4x cheaper.",
  noscriptProblems: [
    "Feedback scattered across email, Slack, and support tickets",
    "Canny costs $79/month — too much for early-stage SaaS",
    "Without voting, you guess what to build next",
  ],
  noscriptPricing: [
    "Free — $0/month: 1 board, 50 posts",
    "Starter — $19/month: Unlimited posts, embeddable widget, custom domain",
    "Pro — $49/month: Multiple boards, analytics, Zapier, SSO",
  ],
  noscriptCta: "Launching March 2026. Start collecting feedback free.",

  serviceDescription: "FeedbackKit is a software-as-a-service (SaaS) platform that helps businesses collect feature requests from users, organize them with voting boards, and prioritize their product roadmap based on user demand.",
};

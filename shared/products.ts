export interface ProductMeta {
  slug: string;
  brandName: string;
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  gtagId: string;
  gtagConversion: string;
  contactEmail: string;
  noscriptHeadline: string;
  noscriptDescription: string;
  noscriptProblems: string[];
  noscriptPricing: string[];
  noscriptCta: string;
}

const productsMeta: Record<string, ProductMeta> = {
  testimonialkit: {
    slug: "testimonialkit",
    brandName: "TestimonialKit",
    metaTitle: "TestimonialKit - Collect Testimonials. Simple & Cheap.",
    metaDescription: "Collect and display beautiful testimonials for your website. An affordable alternative to Senja & Testimonial.to. Free plan available. Built for bootstrappers.",
    ogTitle: "TestimonialKit - Collect Testimonials. Simple & Cheap.",
    ogDescription: "An affordable alternative to Senja & Testimonial.to. Free to start. Built for indie hackers.",
    gtagId: "AW-17108387879",
    gtagConversion: "AW-17108387879/2nrMCNymms4aEKeQ9d0_",
    contactEmail: "hello@testimonialkit.online",
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
  },
  reviewreplyai: {
    slug: "reviewreplyai",
    brandName: "ReviewReplyAI",
    metaTitle: "ReviewReplyAI - AI Google Review Replies in 5 Seconds",
    metaDescription: "AI-powered review response generator. Paste any Google or Yelp review, get a professional reply instantly. Free 10 replies/month. Built for local businesses.",
    ogTitle: "ReviewReplyAI - AI Google Review Replies in 5 Seconds",
    ogDescription: "Stop wasting hours writing review responses. AI generates professional replies for Google, Yelp & TripAdvisor.",
    gtagId: "",
    gtagConversion: "",
    contactEmail: "hello@reviewreplyai.online",
    noscriptHeadline: "ReviewReplyAI — AI Google Review Replies in 5 Seconds",
    noscriptDescription: "Stop wasting hours writing review responses. Paste any Google review, get a professional reply instantly.",
    noscriptProblems: [
      "Writing review replies takes hours every week",
      "Not replying to reviews costs you customers",
      "Generic templates sound robotic and impersonal",
    ],
    noscriptPricing: [
      "Free — $0/month: 10 AI replies per month",
      "Starter — $19/month: 100 replies, brand voice training",
      "Pro — $49/month: Unlimited replies, multi-location, API access",
    ],
    noscriptCta: "Launching March 2026. Start free — no credit card required.",
  },
  policykit: {
    slug: "policykit",
    brandName: "PolicyKit",
    metaTitle: "PolicyKit - Privacy Policy Generator in 2 Minutes",
    metaDescription: "Generate legally compliant Privacy Policy, Terms of Service & Cookie Policy in minutes. GDPR & CCPA compliant. No lawyer needed. Free plan available.",
    ogTitle: "PolicyKit - Privacy Policy Generator in 2 Minutes",
    ogDescription: "Generate legally compliant Privacy Policy, Terms & Cookie Policy. GDPR & CCPA covered. No lawyer needed.",
    gtagId: "",
    gtagConversion: "",
    contactEmail: "hello@policykit.online",
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
  },
  waitlistkit: {
    slug: "waitlistkit",
    brandName: "WaitlistKit",
    metaTitle: "WaitlistKit - Viral Waitlist Builder with Referrals",
    metaDescription: "Create a beautiful waitlist page with viral referral mechanics. Users share, move up the queue, grow your list 3x faster. Free plan available.",
    ogTitle: "WaitlistKit - Viral Waitlist Builder with Referrals",
    ogDescription: "Turn your waitlist into a viral growth engine. Built-in referral system. No code needed.",
    gtagId: "",
    gtagConversion: "",
    contactEmail: "hello@waitlistkit.online",
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
  },
  feedbackkit: {
    slug: "feedbackkit",
    brandName: "FeedbackKit",
    metaTitle: "FeedbackKit - Feature Request Board & Voting Widget",
    metaDescription: "Collect feature requests, let users vote, prioritize your roadmap. Like Canny but 4x cheaper. Embeddable widget + voting board. Free plan available.",
    ogTitle: "FeedbackKit - Feature Request Board & Voting Widget",
    ogDescription: "Know exactly what your users want. Feature voting board + embeddable widget. Like Canny, but 4x cheaper.",
    gtagId: "",
    gtagConversion: "",
    contactEmail: "hello@feedbackkit.online",
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
  },
  changelogkit: {
    slug: "changelogkit",
    brandName: "ChangelogKit",
    metaTitle: "ChangelogKit - In-App Changelog Widget for SaaS",
    metaDescription: "Beautiful changelog widget for your SaaS. Show users what's new right inside your app. Like Beamer but 60% cheaper. Free plan available.",
    ogTitle: "ChangelogKit - In-App Changelog Widget for SaaS",
    ogDescription: "Your users miss every update. Fix that with an in-app changelog widget. Like Beamer, but 60% cheaper.",
    gtagId: "",
    gtagConversion: "",
    contactEmail: "hello@changelogkit.online",
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
  },
};

const hostToSlug: Record<string, string> = {
  "testimonialkit.online": "testimonialkit",
  "www.testimonialkit.online": "testimonialkit",
  "reviewreplyai.online": "reviewreplyai",
  "www.reviewreplyai.online": "reviewreplyai",
  "policykit.online": "policykit",
  "www.policykit.online": "policykit",
  "waitlistkit.online": "waitlistkit",
  "www.waitlistkit.online": "waitlistkit",
  "feedbackkit.online": "feedbackkit",
  "www.feedbackkit.online": "feedbackkit",
  "changelogkit.online": "changelogkit",
  "www.changelogkit.online": "changelogkit",
};

export function resolveProductMeta(hostname: string): ProductMeta {
  const slug = hostToSlug[hostname];
  if (slug && productsMeta[slug]) {
    return productsMeta[slug];
  }
  return productsMeta.testimonialkit;
}

export { productsMeta, hostToSlug };

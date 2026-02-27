import type { ProductConfig } from "./types";
import { testimonialkit } from "./products/testimonialkit";
import { reviewreplyai } from "./products/reviewreplyai";
import { policykit } from "./products/policykit";
import { waitlistkit } from "./products/waitlistkit";
import { feedbackkit } from "./products/feedbackkit";
import { changelogkit } from "./products/changelogkit";

const products: Record<string, ProductConfig> = {
  testimonialkit,
  reviewreplyai,
  policykit,
  waitlistkit,
  feedbackkit,
  changelogkit,
};

const hostToSlug: Record<string, string> = {
  "gettestimonialkit.online": "testimonialkit",
  "www.gettestimonialkit.online": "testimonialkit",
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

export function resolveProduct(): ProductConfig {
  // Dev override via query param: ?product=reviewreplyai
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    const override = params.get("product");
    if (override && products[override]) {
      return products[override];
    }

    const hostname = window.location.hostname;
    const slug = hostToSlug[hostname];
    if (slug && products[slug]) {
      return products[slug];
    }
  }

  // Fallback to testimonialkit
  return products.testimonialkit;
}

export { products, hostToSlug };

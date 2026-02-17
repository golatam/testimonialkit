import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Info } from "lucide-react";

const TALLY_FORM_ID = "9qDAZp";

const plans = [
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
    plan: "free" as const,
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
    cta: "Get Early Access",
    ctaDisabled: false,
    popular: true,
    plan: "starter" as const,
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
    cta: "Get Early Access",
    ctaDisabled: false,
    popular: false,
    plan: "pro" as const,
  },
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-20 md:py-28"
      data-testid="pricing-section"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            data-testid="text-pricing-title"
          >
            Simple, Honest Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            No hidden fees. No surprises. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <Card
              key={i}
              className={`relative p-6 md:p-8 flex flex-col ${
                plan.popular
                  ? "border-primary ring-1 ring-primary/20"
                  : ""
              }`}
              data-testid={`card-pricing-${plan.plan}`}
            >
              {plan.popular && (
                <Badge
                  className="absolute -top-2.5 left-1/2 -translate-x-1/2"
                  data-testid="badge-popular"
                >
                  Popular
                </Badge>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "default" : "outline"}
                className="w-full"
                disabled={plan.ctaDisabled}
                {...(plan.ctaDisabled
                  ? {}
                  : {
                      "data-tally-open": TALLY_FORM_ID,
                      "data-tally-layout": "modal",
                      "data-tally-auto-close": "3000",
                      onClick: () => (window as any).gtag_report_conversion?.(),
                    })}
                data-testid={`button-pricing-${plan.plan}`}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        <Card
          className="max-w-2xl mx-auto p-5 flex items-start gap-3"
          data-testid="card-comparison"
        >
          <Info className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <div className="text-sm">
            <p className="font-medium mb-1">For reference:</p>
            <p className="text-muted-foreground leading-relaxed">
              Senja Starter = $19/mo, Pro = $39/mo.{" "}
              Testimonial.to Basic = $25/mo, Premium = $60/mo.{" "}
              <span className="font-medium text-foreground">
                We're 2-3x cheaper. Same features.
              </span>
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}

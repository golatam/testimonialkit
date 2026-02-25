import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Info } from "lucide-react";
import { useProduct } from "@/config/ProductContext";
import { reportConversion } from "@/lib/gtag";

export function PricingSection() {
  const p = useProduct();

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
            {p.pricingTitle}
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            {p.pricingSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
          {p.plans.map((plan, i) => (
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
                      asChild: true,
                      onClick: reportConversion,
                    })}
                data-testid={`button-pricing-${plan.plan}`}
              >
                {plan.ctaDisabled ? (
                  plan.cta
                ) : (
                  <a href={p.tallyUrl} target="_blank" rel="noopener noreferrer">
                    {plan.cta}
                  </a>
                )}
              </Button>
            </Card>
          ))}
        </div>

        {p.comparison && (
          <Card
            className="max-w-2xl mx-auto p-5 flex items-start gap-3"
            data-testid="card-comparison"
          >
            <Info className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <div className="text-sm">
              <p className="font-medium mb-1">For reference:</p>
              <p className="text-muted-foreground leading-relaxed">
                {p.comparison.text}{" "}
                <span className="font-medium text-foreground">
                  {p.comparison.highlight}
                </span>
              </p>
            </div>
          </Card>
        )}
      </div>
    </section>
  );
}

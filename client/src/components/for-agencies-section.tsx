import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useProduct } from "@/config/ProductContext";

export function ForAgenciesSection() {
  const p = useProduct();
  if (!p.forAgencies) return null;
  const { title, subtitle, features, cta } = p.forAgencies;

  return (
    <section
      className="py-20 md:py-28 bg-card/50 dark:bg-card/30"
      data-testid="for-agencies-section"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wide bg-primary/10 px-3 py-1 rounded-full mb-4">
              For Agencies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {title}
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto">
              {subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {features.map((f, i) => (
              <Card key={i} className="p-6 hover-elevate text-center">
                <div className="w-11 h-11 rounded-md bg-primary/10 dark:bg-primary/15 flex items-center justify-center mb-4 mx-auto">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <a href={p.tallyUrl} target="_blank" rel="noopener noreferrer">
                {cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

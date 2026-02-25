import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Shield } from "lucide-react";
import { useProduct } from "@/config/ProductContext";
import { reportConversion } from "@/lib/gtag";

export function HeroSection() {
  const p = useProduct();
  const HeroDemo = p.heroDemo;

  return (
    <section className="relative overflow-hidden" data-testid="hero-section">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3 dark:from-primary/10 dark:via-transparent dark:to-primary/5" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl dark:bg-primary/10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl dark:bg-primary/8" />

      <nav className="relative z-10 flex items-center justify-between gap-4 flex-wrap max-w-[1200px] mx-auto px-6 py-5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
            <p.logoIcon className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold tracking-tight" data-testid="text-brand">{p.brandName}</span>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            onClick={() => {
              const el = document.getElementById("pricing");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            data-testid="link-pricing"
          >
            Pricing
          </Button>
          <Button
            asChild
            onClick={reportConversion}
            data-testid="button-hero-cta-nav"
          >
            <a href={p.tallyUrl} target="_blank" rel="noopener noreferrer">
              {p.heroCta}
            </a>
          </Button>
        </div>
      </nav>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-6" data-testid="badge-launch">
            <Zap className="w-3 h-3 mr-1.5" />
            {p.heroBadge}
          </Badge>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
            data-testid="text-headline"
          >
            {p.heroHeadline}
            <br />
            <span className="text-primary">{p.heroHeadlineAccent}</span>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-8"
            data-testid="text-subheadline"
          >
            {p.heroSubheadline.split("\n").map((line, i) => (
              <span key={i}>
                {i > 0 && <br className="hidden sm:block" />}
                {line}
              </span>
            ))}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 mb-12">
            <Button
              size="lg"
              asChild
              onClick={reportConversion}
              data-testid="button-hero-cta"
            >
              <a href={p.tallyUrl} target="_blank" rel="noopener noreferrer">
                {p.heroCta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              {p.heroCtaSub}
            </p>
          </div>

          <HeroDemo />
        </div>
      </div>
    </section>
  );
}

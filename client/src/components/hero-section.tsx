import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Zap, Shield } from "lucide-react";

const TALLY_FORM_ID = "9qDAZp";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden" data-testid="hero-section">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3 dark:from-primary/10 dark:via-transparent dark:to-primary/5" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl dark:bg-primary/10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl dark:bg-primary/8" />

      <nav className="relative z-10 flex items-center justify-between gap-4 flex-wrap max-w-[1200px] mx-auto px-6 py-5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
            <Star className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold tracking-tight" data-testid="text-brand">TestimonialKit</span>
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
            data-tally-open={TALLY_FORM_ID}
            data-tally-layout="modal"
            data-tally-auto-close="3000"
            data-testid="button-hero-cta-nav"
          >
            Get Early Access
          </Button>
        </div>
      </nav>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-6" data-testid="badge-launch">
            <Zap className="w-3 h-3 mr-1.5" />
            Launching March 2026
          </Badge>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
            data-testid="text-headline"
          >
            Collect Testimonials.
            <br />
            <span className="text-primary">Simple & Cheap.</span>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-8"
            data-testid="text-subheadline"
          >
            Same features as Senja. 3x cheaper. Free to start.
            <br className="hidden sm:block" />
            Built for bootstrappers.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 mb-12">
            <Button
              size="lg"
              data-tally-open={TALLY_FORM_ID}
              data-tally-layout="modal"
              data-tally-auto-close="3000"
              data-testid="button-hero-cta"
            >
              Get Early Access
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <p className="text-sm text-muted-foreground flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              Free for first 50 signups
            </p>
          </div>

          <div className="w-full max-w-2xl" data-testid="widget-preview">
            <div className="rounded-md border bg-card p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex -space-x-2">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-card bg-muted flex items-center justify-center"
                    >
                      <span className="text-xs font-medium text-muted-foreground">
                        {["JD", "AK", "ML"][i]}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-0.5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground ml-1">Wall of Love</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    name: "Sarah K.",
                    role: "Founder, LaunchPad",
                    text: "This tool saved me hours of manual work. Beautiful widgets that just work.",
                  },
                  {
                    name: "Mike R.",
                    role: "Indie Hacker",
                    text: "Finally an affordable testimonial tool. No more Senja bills eating my margins.",
                  },
                ].map((testimonial, i) => (
                  <div key={i} className="rounded-md border bg-background p-4" data-testid={`card-testimonial-${i}`}>
                    <div className="flex gap-0.5 mb-2">
                      {[0, 1, 2, 3, 4].map((j) => (
                        <Star
                          key={j}
                          className="w-3 h-3 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-sm mb-3 leading-relaxed">"{testimonial.text}"</p>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-[10px] font-medium text-primary">
                          {testimonial.name[0]}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs font-medium">{testimonial.name}</p>
                        <p className="text-[10px] text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[10px] text-muted-foreground text-center mt-3 opacity-60">
                Preview of Wall of Love widget
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { Star, Rocket, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const TALLY_URL = "https://tally.so/r/9qDAZp";

export function CtaSection() {
  return (
    <>
      <section
        id="signup"
        className="py-20 md:py-28 bg-card/50 dark:bg-card/30"
        data-testid="cta-section"
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-12 h-12 rounded-md bg-primary/10 dark:bg-primary/15 flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-6 h-6 text-primary" />
            </div>

            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
              data-testid="text-cta-title"
            >
              Launching March 2026
            </h2>

            <p
              className="text-lg text-muted-foreground mb-3 leading-relaxed"
              data-testid="text-cta-description"
            >
              Get early access. Free for first 50 signups.
            </p>
            <p className="text-sm text-muted-foreground mb-8" data-testid="text-cta-offer">
              Lock in <span className="font-semibold text-foreground">$5/mo lifetime price</span> before
              we raise it.
            </p>

            <div className="flex justify-center">
              <Button
                size="lg"
                asChild
                onClick={() => (window as any).gtag_report_conversion?.()}
                data-testid="button-cta-signup"
              >
                <a href={TALLY_URL} target="_blank" rel="noopener noreferrer">
                  Get Early Access
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-4">
              No spam. Unsubscribe anytime. We respect your inbox.
            </p>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t" data-testid="footer">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
                <Star className="w-3.5 h-3.5 text-primary-foreground" />
              </div>
              <span className="text-sm font-semibold" data-testid="text-footer-brand">
                TestimonialKit
              </span>
            </div>

            <nav className="flex items-center gap-4 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <a
                href="mailto:hello@testimonialkit.online"
                className="hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </nav>

            <p className="text-xs text-muted-foreground" data-testid="text-footer-copyright">
              &copy; 2026 TestimonialKit. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

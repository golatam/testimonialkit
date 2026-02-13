import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { PricingSection } from "@/components/pricing-section";
import { CtaSection } from "@/components/cta-section";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background" data-testid="landing-page">
      <HeroSection />
      <ProblemSection />
      <PricingSection />
      <CtaSection />
    </div>
  );
}

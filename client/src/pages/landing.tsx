import { HeroSection } from "@/components/hero-section";
import { SocialProofSection } from "@/components/social-proof-section";
import { ProblemSection } from "@/components/problem-section";
import { BeforeAfterSection } from "@/components/before-after-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { TemplatesSection } from "@/components/templates-section";
import { ForAgenciesSection } from "@/components/for-agencies-section";
import { ComparisonTableSection } from "@/components/comparison-table-section";
import { PricingSection } from "@/components/pricing-section";
import { CtaSection } from "@/components/cta-section";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background" data-testid="landing-page">
      <HeroSection />
      <SocialProofSection />
      <ProblemSection />
      <BeforeAfterSection />
      <HowItWorksSection />
      <TemplatesSection />
      <ForAgenciesSection />
      <ComparisonTableSection />
      <PricingSection />
      <CtaSection />
    </div>
  );
}

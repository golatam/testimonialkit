import { useProduct } from "@/config/ProductContext";

export function SocialProofSection() {
  const p = useProduct();
  if (!p.socialProof) return null;
  const { metrics, platforms, caseStudy, title } = p.socialProof;

  return (
    <section className="py-14 md:py-20 border-b" data-testid="social-proof-section">
      <div className="max-w-[1200px] mx-auto px-6">
        {title && (
          <p className="text-center text-sm text-muted-foreground mb-8 font-medium uppercase tracking-wide">
            {title}
          </p>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-10">
          {metrics.map((m, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
                {m.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{m.label}</p>
            </div>
          ))}
        </div>

        {platforms && platforms.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-10">
            {platforms.map((platform, i) => (
              <span
                key={i}
                className="text-sm font-medium text-muted-foreground bg-muted/50 px-4 py-2 rounded-full"
              >
                {platform}
              </span>
            ))}
          </div>
        )}

        {caseStudy && (
          <div className="max-w-2xl mx-auto bg-card border rounded-lg p-6 text-center">
            <p className="text-2xl font-bold text-primary mb-1">{caseStudy.metric}</p>
            <p className="text-sm font-semibold mb-2">{caseStudy.company}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {caseStudy.description}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

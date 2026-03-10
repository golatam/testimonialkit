import { useProduct } from "@/config/ProductContext";

export function HowItWorksSection() {
  const p = useProduct();
  if (!p.howItWorks) return null;
  const { title, subtitle, steps } = p.howItWorks;

  return (
    <section className="py-20 md:py-28" data-testid="how-it-works-section">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center" data-testid={`step-${i}`}>
              <div className="relative mx-auto mb-5 w-14">
                <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/15 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {step.step}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

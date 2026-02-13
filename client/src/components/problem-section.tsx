import { Card } from "@/components/ui/card";
import { Clock, DollarSign, Code } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Manual Collection Takes Hours",
    description:
      "Screenshotting tweets, copying text, asking via email... Collecting 10 testimonials = 4-6 hours of work.",
  },
  {
    icon: DollarSign,
    title: "Existing Tools Too Expensive",
    description:
      "Senja: $19-39/month. Testimonial.to: $25-60/month. Too much for early-stage founders.",
  },
  {
    icon: Code,
    title: "Beautiful Widgets Need a Developer",
    description:
      "Free WordPress plugins look ugly. Making a custom widget means hiring a dev for $200-500.",
  },
];

export function ProblemSection() {
  return (
    <section
      className="py-20 md:py-28 bg-card/50 dark:bg-card/30"
      data-testid="problem-section"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            data-testid="text-problem-title"
          >
            Why We're Building This
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Collecting testimonials shouldn't be painful or expensive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {problems.map((problem, i) => (
            <Card
              key={i}
              className="p-6 md:p-8 hover-elevate"
              data-testid={`card-problem-${i}`}
            >
              <div className="w-11 h-11 rounded-md bg-primary/10 dark:bg-primary/15 flex items-center justify-center mb-5">
                <problem.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {problem.description}
              </p>
            </Card>
          ))}
        </div>

        <p
          className="text-center text-lg font-medium text-primary"
          data-testid="text-problem-solution"
        >
          We fix all of this. Starting free.
        </p>
      </div>
    </section>
  );
}

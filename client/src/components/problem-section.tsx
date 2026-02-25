import { Card } from "@/components/ui/card";
import { useProduct } from "@/config/ProductContext";

export function ProblemSection() {
  const p = useProduct();

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
            {p.problemTitle}
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            {p.problemSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {p.problems.map((problem, i) => (
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
          {p.problemSolution}
        </p>
      </div>
    </section>
  );
}

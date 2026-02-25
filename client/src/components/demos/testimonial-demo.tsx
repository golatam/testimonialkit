import { Star } from "lucide-react";

export function TestimonialDemo() {
  return (
    <div className="w-full max-w-2xl" data-testid="widget-preview">
      <div className="rounded-md border bg-card p-6 md:p-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex -space-x-2">
            {["JD", "AK", "ML"].map((initials, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-card bg-muted flex items-center justify-center"
              >
                <span className="text-xs font-medium text-muted-foreground">
                  {initials}
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
              name: "Jane D.",
              role: "SaaS Founder",
              text: "Your product changed how we collect feedback. Highly recommend!",
            },
            {
              name: "Alex M.",
              role: "Agency Owner",
              text: "Beautiful widgets, easy setup. Exactly what we needed.",
            },
          ].map((testimonial, i) => (
            <div key={i} className="rounded-md border bg-background p-4 opacity-80" data-testid={`card-testimonial-${i}`}>
              <div className="flex gap-0.5 mb-2">
                {[0, 1, 2, 3, 4].map((j) => (
                  <Star
                    key={j}
                    className="w-3 h-3 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-sm mb-3 leading-relaxed italic text-muted-foreground">"{testimonial.text}"</p>
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
          Widget preview — example content only
        </p>
      </div>
    </div>
  );
}

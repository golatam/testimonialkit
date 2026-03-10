import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useProduct } from "@/config/ProductContext";

export function BeforeAfterSection() {
  const p = useProduct();
  if (!p.beforeAfter) return null;
  const { title, subtitle, items } = p.beforeAfter;

  return (
    <section className="py-20 md:py-28" data-testid="before-after-section">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <Card key={i} className="overflow-hidden" data-testid={`before-after-${i}`}>
              <div className="flex items-center gap-2 px-6 pt-5 pb-3 border-b bg-muted/30">
                <item.nicheIcon className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold">{item.niche}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Before — the review */}
                <div className="p-5 md:p-6 border-b md:border-b-0 md:border-r">
                  <p className="text-xs font-medium text-red-500 uppercase tracking-wide mb-2">
                    Review
                  </p>
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className={`w-3.5 h-3.5 ${
                          s < item.reviewRating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    "{item.review}"
                  </p>
                </div>

                {/* After — AI reply */}
                <div className="p-5 md:p-6 bg-primary/5">
                  <p className="text-xs font-medium text-primary uppercase tracking-wide mb-2">
                    AI Reply
                  </p>
                  <p className="text-sm leading-relaxed">
                    "{item.reply}"
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Card } from "@/components/ui/card";
import { Users, ArrowUp, Share2 } from "lucide-react";
import { useProduct } from "@/config/ProductContext";

export function TemplatesSection() {
  const p = useProduct();
  if (!p.templates) return null;
  const { title, subtitle, items } = p.templates;

  return (
    <section
      className="py-20 md:py-28 bg-card/50 dark:bg-card/30"
      data-testid="templates-section"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {items.map((tpl, i) => (
            <Card
              key={i}
              className="overflow-hidden hover-elevate group cursor-default"
              data-testid={`template-${i}`}
            >
              {/* Mini preview */}
              <div
                className="h-36 relative flex flex-col items-center justify-center p-4"
                style={{ backgroundColor: tpl.color }}
              >
                <div className="bg-white/90 rounded-lg p-3 w-full max-w-[140px] shadow-sm">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Users className="w-3 h-3 text-gray-500" />
                    <span className="text-[9px] font-medium text-gray-600">Position</span>
                    <span className="text-xs font-bold text-gray-800 ml-auto">#12</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1 mb-1.5">
                    <div className="bg-gray-600 h-1 rounded-full" style={{ width: "70%" }} />
                  </div>
                  <div className="flex items-center gap-1">
                    <Share2 className="w-2.5 h-2.5 text-gray-400" />
                    <span className="text-[8px] text-gray-400">Share to move up</span>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-sm font-semibold mb-1">{tpl.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {tpl.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

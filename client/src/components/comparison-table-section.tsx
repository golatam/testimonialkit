import { Check, X, Minus } from "lucide-react";
import { useProduct } from "@/config/ProductContext";

function CellValue({ value }: { value: string | boolean }) {
  if (value === true) return <Check className="w-4 h-4 text-primary mx-auto" />;
  if (value === false) return <X className="w-4 h-4 text-muted-foreground/40 mx-auto" />;
  if (value === "—") return <Minus className="w-4 h-4 text-muted-foreground/40 mx-auto" />;
  return <span className="text-sm">{value}</span>;
}

export function ComparisonTableSection() {
  const p = useProduct();
  if (!p.comparisonTable) return null;
  const { title, subtitle, usLabel, competitors, features } = p.comparisonTable;

  return (
    <section className="py-20 md:py-28" data-testid="comparison-table-section">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 pr-4 font-medium text-muted-foreground min-w-[160px]">
                  Feature
                </th>
                <th className="py-3 px-3 text-center min-w-[100px]">
                  <span className="font-bold text-primary">{usLabel}</span>
                </th>
                {competitors.map((c) => (
                  <th
                    key={c}
                    className="py-3 px-3 text-center font-medium text-muted-foreground min-w-[100px]"
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr
                  key={i}
                  className="border-b last:border-0 hover:bg-muted/30 transition-colors"
                >
                  <td className="py-3 pr-4 font-medium">{row.feature}</td>
                  <td className="py-3 px-3 text-center bg-primary/5">
                    <CellValue value={row.us} />
                  </td>
                  {competitors.map((c) => (
                    <td key={c} className="py-3 px-3 text-center">
                      <CellValue value={row.values[c]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

import { FileText, Check, Shield } from "lucide-react";

export function PolicyDemo() {
  return (
    <div className="w-full max-w-2xl" data-testid="widget-preview">
      <div className="rounded-md border bg-card p-6 md:p-8">
        <p className="text-xs text-muted-foreground mb-3 font-medium uppercase tracking-wide">Generated in 2 Minutes</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          {[
            { name: "Privacy Policy", icon: Shield, active: true },
            { name: "Terms of Service", icon: FileText, active: false },
            { name: "Cookie Policy", icon: FileText, active: false },
          ].map((doc, i) => (
            <div
              key={i}
              className={`rounded-md border p-3 text-center ${
                doc.active ? "border-primary/30 bg-primary/5" : "bg-background opacity-70"
              }`}
            >
              <doc.icon className={`w-5 h-5 mx-auto mb-1.5 ${doc.active ? "text-primary" : "text-muted-foreground"}`} />
              <p className="text-xs font-medium">{doc.name}</p>
            </div>
          ))}
        </div>

        <div className="rounded-md border bg-background p-4">
          <div className="space-y-2">
            <div className="h-3 bg-primary/10 rounded w-3/4" />
            <div className="h-2 bg-muted rounded w-full" />
            <div className="h-2 bg-muted rounded w-5/6" />
            <div className="h-2 bg-muted rounded w-full" />
            <div className="h-3 bg-primary/10 rounded w-1/2 mt-3" />
            <div className="h-2 bg-muted rounded w-full" />
            <div className="h-2 bg-muted rounded w-4/5" />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-3 justify-center">
          {["GDPR", "CCPA", "CalOPPA", "COPPA"].map((badge) => (
            <span key={badge} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[10px] font-medium">
              <Check className="w-2.5 h-2.5" />
              {badge}
            </span>
          ))}
        </div>

        <p className="text-[10px] text-muted-foreground text-center mt-3 opacity-60">
          Demo preview — answer 10 questions, get all legal pages
        </p>
      </div>
    </div>
  );
}

import { ChevronUp, MessageCircle } from "lucide-react";

export function FeedbackDemo() {
  return (
    <div className="w-full max-w-2xl" data-testid="widget-preview">
      <div className="rounded-md border bg-card p-6 md:p-8">
        <p className="text-xs text-muted-foreground mb-3 font-medium uppercase tracking-wide">Feature Voting Board</p>

        <div className="space-y-2">
          {[
            { title: "Dark mode support", votes: 47, comments: 12, status: "planned" },
            { title: "API access for integrations", votes: 34, comments: 8, status: "under-review" },
            { title: "Export data to CSV", votes: 28, comments: 5, status: "planned" },
          ].map((feature, i) => (
            <div key={i} className="rounded-md border bg-background p-3 flex items-center gap-3">
              <div className="flex flex-col items-center gap-0.5 min-w-[40px]">
                <ChevronUp className={`w-4 h-4 ${i === 0 ? "text-primary" : "text-muted-foreground"}`} />
                <span className={`text-sm font-bold ${i === 0 ? "text-primary" : ""}`}>{feature.votes}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{feature.title}</p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                    <MessageCircle className="w-3 h-3" />
                    {feature.comments}
                  </span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                    feature.status === "planned"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {feature.status === "planned" ? "Planned" : "Under Review"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[10px] text-muted-foreground text-center mt-3 opacity-60">
          Demo preview — embeddable voting board for your app
        </p>
      </div>
    </div>
  );
}

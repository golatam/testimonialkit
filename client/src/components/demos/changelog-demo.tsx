import { Bell, Sparkles, Bug, Wrench } from "lucide-react";

export function ChangelogDemo() {
  return (
    <div className="w-full max-w-2xl" data-testid="widget-preview">
      <div className="rounded-md border bg-card p-6 md:p-8">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">In-App Widget Preview</p>
          <div className="relative">
            <Bell className="w-4 h-4 text-muted-foreground" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full text-[8px] text-primary-foreground flex items-center justify-center font-bold">3</span>
          </div>
        </div>

        <div className="space-y-3">
          {[
            {
              icon: Sparkles,
              type: "New",
              typeColor: "bg-green-100 text-green-700",
              title: "Team collaboration",
              description: "Invite team members and assign roles. Real-time editing on all projects.",
              date: "Feb 20, 2026",
            },
            {
              icon: Bug,
              type: "Fix",
              typeColor: "bg-red-100 text-red-700",
              title: "Dashboard loading speed",
              description: "Fixed slow loading on dashboards with 100+ items. 3x faster now.",
              date: "Feb 18, 2026",
            },
            {
              icon: Wrench,
              type: "Improved",
              typeColor: "bg-blue-100 text-blue-700",
              title: "Export functionality",
              description: "Added CSV and PDF export options for all reports.",
              date: "Feb 15, 2026",
            },
          ].map((entry, i) => (
            <div key={i} className="rounded-md border bg-background p-3">
              <div className="flex items-center gap-2 mb-1.5">
                <entry.icon className="w-3.5 h-3.5 text-primary" />
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${entry.typeColor}`}>
                  {entry.type}
                </span>
                <span className="text-[10px] text-muted-foreground ml-auto">{entry.date}</span>
              </div>
              <p className="text-sm font-medium mb-0.5">{entry.title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{entry.description}</p>
            </div>
          ))}
        </div>

        <p className="text-[10px] text-muted-foreground text-center mt-3 opacity-60">
          Demo preview — shows as a widget inside your app
        </p>
      </div>
    </div>
  );
}

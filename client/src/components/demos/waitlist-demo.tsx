import { Users, ArrowUp, Share2 } from "lucide-react";

export function WaitlistDemo() {
  return (
    <div className="w-full max-w-2xl" data-testid="widget-preview">
      <div className="rounded-md border bg-card p-6 md:p-8">
        <p className="text-xs text-muted-foreground mb-3 font-medium uppercase tracking-wide">Referral Waitlist Preview</p>

        <div className="rounded-md border bg-background p-4 mb-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Your position</span>
            </div>
            <span className="text-2xl font-bold text-primary">#47</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2 mb-2">
            <div className="bg-primary h-2 rounded-full" style={{ width: "65%" }} />
          </div>
          <p className="text-xs text-muted-foreground">1,247 people on the waitlist</p>
        </div>

        <div className="rounded-md border border-primary/30 bg-primary/5 p-4 mb-3">
          <div className="flex items-center gap-2 mb-2">
            <Share2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Move up the queue</span>
          </div>
          <p className="text-xs text-muted-foreground mb-2">Share your unique link to jump ahead:</p>
          <div className="flex items-center gap-2">
            <div className="flex-1 rounded border bg-background px-3 py-1.5 text-xs text-muted-foreground truncate">
              waitlist.app/ref/ak7x2m
            </div>
            <span className="text-xs font-medium text-primary cursor-pointer">Copy</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-muted-foreground px-1">
          <span className="flex items-center gap-1">
            <ArrowUp className="w-3 h-3 text-green-500" />
            3 referrals = skip 30 spots
          </span>
          <span>You referred: 2 friends</span>
        </div>

        <p className="text-[10px] text-muted-foreground text-center mt-3 opacity-60">
          Demo preview — built-in viral referral mechanics
        </p>
      </div>
    </div>
  );
}

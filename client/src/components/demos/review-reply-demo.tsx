import { Star, ArrowDown, Sparkles } from "lucide-react";

export function ReviewReplyDemo() {
  return (
    <div className="w-full max-w-2xl" data-testid="widget-preview">
      <div className="rounded-md border bg-card p-6 md:p-8">
        <p className="text-xs text-muted-foreground mb-3 font-medium uppercase tracking-wide">Live Demo Preview</p>

        {/* Incoming review */}
        <div className="rounded-md border bg-background p-4 mb-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
              <span className="text-[10px] font-medium text-red-600">G</span>
            </div>
            <span className="text-xs font-medium">Google Review</span>
            <div className="flex gap-0.5 ml-auto">
              {[0, 1].map((i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
              {[0, 1, 2].map((i) => (
                <Star key={i} className="w-3 h-3 text-muted-foreground/30" />
              ))}
            </div>
          </div>
          <p className="text-sm text-muted-foreground italic leading-relaxed">
            "Waited 40 minutes for our food and it came out cold. Server was nice but the kitchen needs serious help."
          </p>
          <p className="text-[10px] text-muted-foreground mt-2">— Mike R., 2 hours ago</p>
        </div>

        <div className="flex justify-center my-2">
          <ArrowDown className="w-4 h-4 text-primary animate-bounce" />
        </div>

        {/* AI-generated reply */}
        <div className="rounded-md border border-primary/30 bg-primary/5 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium text-primary">AI-Generated Reply</span>
          </div>
          <p className="text-sm text-foreground leading-relaxed">
            "Hi Mike, thank you for your honest feedback. We sincerely apologize for the long wait and the temperature of your food — that's not the experience we aim to provide. We're addressing this with our kitchen team immediately. We'd love to make it right — please reach out to us directly for a complimentary visit. Thank you for your patience."
          </p>
        </div>

        <p className="text-[10px] text-muted-foreground text-center mt-3 opacity-60">
          Demo preview — AI replies are generated in under 5 seconds
        </p>
      </div>
    </div>
  );
}

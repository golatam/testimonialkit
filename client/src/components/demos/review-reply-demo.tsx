import { useState, useEffect, useRef } from "react";
import { Star, Sparkles, Loader2, Clipboard } from "lucide-react";
import { Button } from "@/components/ui/button";

const SAMPLE_REVIEWS = [
  "Waited 40 minutes for our food and it came out cold. Server was nice but the kitchen needs serious help.",
  "Absolutely loved this place! The pasta was incredible and the staff made us feel at home. Will definitely be back!",
  "Room was clean but the AC didn't work. Front desk was helpful but couldn't fix it until next morning.",
];

const AI_REPLIES: Record<string, string> = {
  [SAMPLE_REVIEWS[0]]:
    "Hi, thank you for your honest feedback. We sincerely apologize for the long wait and the temperature of your food — that's not the experience we aim to provide. We're addressing this with our kitchen team immediately. We'd love to make it right — please reach out to us directly for a complimentary visit.",
  [SAMPLE_REVIEWS[1]]:
    "Thank you so much for the wonderful review! We're thrilled you enjoyed the pasta and felt welcome. Our team takes pride in creating a warm dining experience, and your kind words mean everything. We can't wait to welcome you back!",
  [SAMPLE_REVIEWS[2]]:
    "Thank you for staying with us and sharing your experience. We apologize for the AC issue — that's certainly not up to our standards. We're having our maintenance team inspect all units to prevent this from happening again. We appreciate your patience and hope to welcome you back for a much better stay.",
};

// Generic reply for custom input
const GENERIC_REPLY =
  "Thank you for taking the time to share your feedback. We truly value your input and take every comment seriously. Our team is reviewing your experience to ensure we continue improving our service. We'd love the opportunity to exceed your expectations — please don't hesitate to reach out to us directly.";

export function ReviewReplyDemo() {
  const [reviewText, setReviewText] = useState("");
  const [reply, setReply] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const replyRef = useRef<HTMLDivElement>(null);

  function handleGenerate() {
    if (!reviewText.trim() || isGenerating) return;
    setIsGenerating(true);
    setReply("");

    const matchedReply = AI_REPLIES[reviewText.trim()] || GENERIC_REPLY;

    // Simulate typing effect
    let index = 0;
    const interval = setInterval(() => {
      index += 2;
      setReply(matchedReply.slice(0, index));
      if (index >= matchedReply.length) {
        clearInterval(interval);
        setIsGenerating(false);
      }
    }, 15);
  }

  function handleTrySample() {
    const sample = SAMPLE_REVIEWS[Math.floor(Math.random() * SAMPLE_REVIEWS.length)];
    setReviewText(sample);
    setReply("");
  }

  function handleCopy() {
    if (!reply) return;
    navigator.clipboard.writeText(reply);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  useEffect(() => {
    if (reply && replyRef.current) {
      replyRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [reply]);

  return (
    <div className="w-full max-w-2xl" data-testid="widget-preview">
      <div className="rounded-md border bg-card p-5 md:p-7">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
            Try It Now
          </p>
          <button
            onClick={handleTrySample}
            className="text-xs text-primary hover:underline font-medium"
            type="button"
          >
            Use sample review
          </button>
        </div>

        {/* Review input */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
              <span className="text-[10px] font-medium text-red-600">G</span>
            </div>
            <span className="text-xs font-medium">Paste a review</span>
            <div className="flex gap-0.5 ml-auto">
              {[0, 1].map((i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
              {[0, 1, 2].map((i) => (
                <Star key={`e-${i}`} className="w-3 h-3 text-muted-foreground/30" />
              ))}
            </div>
          </div>
          <textarea
            value={reviewText}
            onChange={(e) => {
              setReviewText(e.target.value);
              setReply("");
            }}
            placeholder="Paste any Google, Yelp, or TripAdvisor review here..."
            className="w-full min-h-[80px] rounded-md border bg-background px-3 py-2.5 text-sm leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground/50"
            rows={3}
          />
        </div>

        <Button
          onClick={handleGenerate}
          disabled={!reviewText.trim() || isGenerating}
          className="w-full mb-3"
          size="sm"
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-3.5 h-3.5 mr-1.5 animate-spin" />
              Generating reply...
            </>
          ) : (
            <>
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              Generate AI Reply
            </>
          )}
        </Button>

        {/* AI reply */}
        {reply && (
          <div ref={replyRef} className="rounded-md border border-primary/30 bg-primary/5 p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-primary">AI-Generated Reply</span>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                type="button"
              >
                <Clipboard className="w-3 h-3" />
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <p className="text-sm text-foreground leading-relaxed">{reply}</p>
          </div>
        )}

        <p className="text-[10px] text-muted-foreground text-center mt-3 opacity-60">
          Demo preview — real AI replies are generated in under 5 seconds
        </p>
      </div>
    </div>
  );
}

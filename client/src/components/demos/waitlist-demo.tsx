import { useState, useEffect } from "react";
import { Users, ArrowUp, Share2, Sparkles, Trophy } from "lucide-react";

export function WaitlistDemo() {
  const [position, setPosition] = useState(247);
  const [referrals, setReferrals] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [showReward, setShowReward] = useState(false);

  function handleShare() {
    if (animating) return;
    setAnimating(true);

    // Animate position jumping up
    const skip = 10 + Math.floor(Math.random() * 15);
    const newPos = Math.max(1, position - skip);
    const steps = 12;
    let step = 0;
    const startPos = position;

    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      // Ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setPosition(Math.round(startPos - (startPos - newPos) * eased));

      if (step >= steps) {
        clearInterval(interval);
        setPosition(newPos);
        setReferrals((r) => r + 1);
        setAnimating(false);

        // Show reward at certain thresholds
        if (referrals + 1 >= 3 && !showReward) {
          setShowReward(true);
          setTimeout(() => setShowReward(false), 3000);
        }
      }
    }, 50);
  }

  const totalSignups = 1247;
  const progressPercent = Math.max(5, 100 - (position / totalSignups) * 100);

  return (
    <div className="w-full max-w-2xl" data-testid="widget-preview">
      <div className="rounded-md border bg-card p-5 md:p-7">
        <p className="text-xs text-muted-foreground mb-4 font-medium uppercase tracking-wide">
          Live Waitlist Preview
        </p>

        {/* Waitlist page mini-preview */}
        <div className="rounded-lg border-2 border-dashed border-primary/20 bg-gradient-to-b from-primary/5 to-transparent p-5 mb-4">
          <div className="text-center mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <p className="text-sm font-semibold">You're on the list!</p>
            <p className="text-xs text-muted-foreground">Thanks for joining the waitlist</p>
          </div>

          {/* Position */}
          <div className="rounded-md border bg-background p-4 mb-3">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Your position</span>
              </div>
              <span
                className={`text-2xl font-bold text-primary transition-all duration-300 ${
                  animating ? "scale-110" : ""
                }`}
              >
                #{position}
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-2 mb-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="flex justify-between">
              <p className="text-xs text-muted-foreground">
                {totalSignups.toLocaleString()} people on the waitlist
              </p>
              {referrals > 0 && (
                <p className="text-xs text-green-600 flex items-center gap-0.5">
                  <ArrowUp className="w-3 h-3" />
                  Moved up {1247 - position - (1247 - 247)} spots
                </p>
              )}
            </div>
          </div>

          {/* Share to move up */}
          <div className="rounded-md border border-primary/30 bg-primary/5 p-4 mb-3">
            <div className="flex items-center gap-2 mb-2">
              <Share2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Share & move up</span>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              Each friend who joins moves you up the queue
            </p>
            <div className="flex items-center gap-2">
              <div className="flex-1 rounded border bg-background px-3 py-1.5 text-xs text-muted-foreground truncate">
                waitlist.app/ref/ak7x2m
              </div>
              <button
                onClick={handleShare}
                disabled={animating}
                className="px-3 py-1.5 text-xs font-medium text-primary-foreground bg-primary rounded hover:bg-primary/90 transition-colors disabled:opacity-50"
                type="button"
              >
                {animating ? "Sharing..." : "Share"}
              </button>
            </div>
          </div>

          {/* Reward notification */}
          {showReward && (
            <div className="rounded-md bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 p-3 flex items-center gap-2 animate-in slide-in-from-bottom-2">
              <Trophy className="w-4 h-4 text-green-600" />
              <span className="text-xs font-medium text-green-700 dark:text-green-400">
                Early Access unlocked! You'll get the product first.
              </span>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-xs text-muted-foreground px-1">
          <span>
            You referred: <span className="font-semibold text-foreground">{referrals}</span> friends
          </span>
          <span className="flex items-center gap-1">
            <ArrowUp className="w-3 h-3 text-green-500" />3 referrals = Early Access
          </span>
        </div>

        <p className="text-[10px] text-muted-foreground text-center mt-3 opacity-60">
          Interactive demo — click "Share" to see the referral mechanic
        </p>
      </div>
    </div>
  );
}

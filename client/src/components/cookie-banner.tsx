import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
    // Disable gtag cookies
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
      });
    }
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-4 duration-300">
      <div className="max-w-2xl mx-auto bg-card border border-border rounded-xl shadow-lg p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
        <Cookie className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5 sm:mt-0 hidden sm:block" />
        <p className="text-sm text-muted-foreground flex-1">
          We use cookies for analytics and ad tracking to improve your experience.{" "}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
        </p>
        <div className="flex gap-2 shrink-0 w-full sm:w-auto">
          <Button variant="ghost" size="sm" onClick={decline} className="flex-1 sm:flex-none">
            Decline
          </Button>
          <Button size="sm" onClick={accept} className="flex-1 sm:flex-none">
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}

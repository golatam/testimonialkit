import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useProduct } from "@/config/ProductContext";
import { reportConversion } from "@/lib/gtag";

export default function ThankYou() {
  const p = useProduct();

  useEffect(() => {
    reportConversion();
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center" data-testid="thank-you-page">
      <div className="max-w-md mx-auto px-6 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
        </div>

        <h1 className="text-3xl font-bold tracking-tight mb-3">
          You're on the list!
        </h1>

        <p className="text-lg text-muted-foreground mb-2">
          Thanks for signing up for {p.brandName}.
        </p>
        <p className="text-muted-foreground mb-8">
          We'll notify you at launch with early access and special pricing.
        </p>

        <Button asChild variant="outline">
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to {p.brandName}
          </Link>
        </Button>
      </div>
    </div>
  );
}

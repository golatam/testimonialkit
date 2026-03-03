import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ProductProvider } from "@/config/ProductContext";
import { MetaTags } from "@/components/meta-tags";
import { CookieBanner } from "@/components/cookie-banner";
import NotFound from "@/pages/not-found";
import Landing from "@/pages/landing";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import ThankYou from "@/pages/thank-you";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/thank-you" component={ThankYou} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ProductProvider>
          <MetaTags />
          <Toaster />
          <Router />
          <CookieBanner />
        </ProductProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

import { Link } from "wouter";
import { ArrowLeft, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="flex items-center gap-4 max-w-[800px] mx-auto px-6 py-5">
        <Link href="/">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </Link>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
            <Star className="w-3.5 h-3.5 text-primary-foreground" />
          </div>
          <span className="text-sm font-semibold">TestimonialKit</span>
        </div>
      </nav>

      <article className="max-w-[800px] mx-auto px-6 pb-20">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: February 17, 2026</p>

        <div className="prose prose-sm max-w-none space-y-6 text-foreground">
          <section>
            <h2 className="text-lg font-semibold mb-2">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              TestimonialKit ("we", "our", "us") operates the website testimonialkit.online. This Privacy Policy explains how we collect, use, and protect your personal information when you use our service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">We collect the following information:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li><strong className="text-foreground">Email address</strong> — when you sign up for early access or create an account</li>
              <li><strong className="text-foreground">Plan selection</strong> — which pricing plan you're interested in</li>
              <li><strong className="text-foreground">Usage data</strong> — pages visited, collected via Google Analytics for improving our service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>To send you product launch updates and early access notifications</li>
              <li>To improve our website and service based on usage patterns</li>
              <li>To respond to your inquiries or support requests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">4. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              We use the following third-party services:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li><strong className="text-foreground">Google Analytics</strong> — to understand how visitors interact with our site (page views, traffic sources)</li>
              <li><strong className="text-foreground">Google Ads conversion tracking (gtag.js)</strong> — to measure the effectiveness of our advertising campaigns. This places cookies to track conversions when you interact with our ads.</li>
              <li><strong className="text-foreground">Tally.so</strong> — to host our waitlist signup form. When you submit our signup form, your data is processed by Tally according to their privacy policy.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-2">
              Google may collect and process data according to their own privacy policy. We do not sell your personal data to any third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">5. Data Storage and Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your data is stored securely in our database. We use industry-standard encryption and security measures to protect your information. We retain your data only for as long as necessary to provide our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">6. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">You have the right to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Request access to your personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Unsubscribe from our emails at any time</li>
              <li>Request a copy of your data in a portable format</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">7. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies for analytics purposes (Google Analytics) and to track ad conversions (Google Ads). You can disable cookies in your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">8. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:hello@testimonialkit.online" className="text-primary hover:underline">
                hello@testimonialkit.online
              </a>.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}

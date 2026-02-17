import { Link } from "wouter";
import { ArrowLeft, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Terms() {
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
        <h1 className="text-3xl font-bold tracking-tight mb-2">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: February 17, 2026</p>

        <div className="prose prose-sm max-w-none space-y-6 text-foreground">
          <section>
            <h2 className="text-lg font-semibold mb-2">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using TestimonialKit ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">2. Description of Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              TestimonialKit is a software-as-a-service (SaaS) platform that helps businesses collect, manage, and display customer testimonials on their websites. The service includes testimonial collection forms, embeddable widgets, and a management dashboard.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">3. Accounts and Registration</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>You must provide a valid email address to create an account</li>
              <li>You are responsible for maintaining the security of your account</li>
              <li>You must be at least 18 years old to use the Service</li>
              <li>One person or entity may not maintain more than one free account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">4. Pricing and Payment</h2>
            <p className="text-muted-foreground leading-relaxed">
              TestimonialKit offers free and paid plans. Paid plans are billed monthly. You may cancel your subscription at any time. Refunds are available within 14 days of payment if you are not satisfied with the service. Prices may change with 30 days notice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">5. Acceptable Use</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">You agree not to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>Submit fake or misleading testimonials</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the Service</li>
              <li>Resell or redistribute the Service without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">6. Content Ownership</h2>
            <p className="text-muted-foreground leading-relaxed">
              You retain ownership of all testimonials and content you submit to the Service. By using TestimonialKit, you grant us a license to store, display, and process your content solely for the purpose of providing the Service to you.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">7. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              TestimonialKit is provided "as is" without warranty of any kind. We shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of the Service. Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">8. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to suspend or terminate your account if you violate these Terms. You may delete your account at any time. Upon termination, your data will be deleted within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">9. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update these Terms from time to time. We will notify you of significant changes via email. Continued use of the Service after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">10. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms, please contact us at{" "}
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

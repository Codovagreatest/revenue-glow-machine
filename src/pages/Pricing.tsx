import { Button } from "@/components/ui/button";
import { Hero } from "@/components/ui/hero-1";
import { PricingCard } from "@/components/PricingCard";
import { Link } from "react-router-dom";
import { Zap, ArrowLeft, Check } from "lucide-react";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center space-x-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">24/7 Revenue Machine</span>
          </Link>
          
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/contact">Book Demo</Link>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <Link to="/pilot">Start Pilot</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero
        eyebrow="Transparent Pricing • No Hidden Fees"
        title="Choose your plan"
        subtitle="Start with a proven pilot, scale when you see results. All plans include setup, training, and our 3x ROI guarantee."
        ctaLabel="Start Your Pilot"
        ctaHref="/pilot"
      />

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-bold text-accent animate-pulse-glow">
              LIMITED: Only 10 spots this month
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid gap-8 lg:grid-cols-3">
            <PricingCard
              title="21-Day Pilot"
              setup="$997"
              monthly="$497"
              features={[
                "Chat suite + Voice caller",
                "Website voice agent",
                "2 booking flows",
                "Analytics dashboard",
                "Calendar & CRM integration",
                "Only pay monthly if you keep it",
                "3x ROI guarantee or we work free"
              ]}
              ctaText="Start Pilot Now"
              onCTAClick={() => window.location.href = "/pilot"}
            />
            
            <PricingCard
              title="Full Automation"
              setup="$2,500"
              monthly="$997"
              features={[
                "Everything in Pilot",
                "10+ automated flows",
                "CRM + payment integration",
                "Weekly KPI reports",
                "Voice tone customization",
                "Priority escalation rules",
                "Dedicated success manager",
                "Monthly optimization reviews"
              ]}
              highlight
              badge="POPULAR"
              ctaText="Get Started"
              onCTAClick={() => window.location.href = "/contact"}
            />
            
            <PricingCard
              title="Enterprise"
              setup="$5,000"
              monthly="$2,497"
              features={[
                "White-glove service",
                "Compliance-ready setup (GDPR/CCPA)",
                "Dedicated designer",
                "24/7 operations monitoring",
                "Custom integrations",
                "Advanced analytics & reporting",
                "Multi-location support",
                "6-month minimum commitment"
              ]}
              ctaText="Contact Sales"
              onCTAClick={() => window.location.href = "/contact"}
            />
          </div>

          {/* Urgency Banner */}
          <div className="mt-12 rounded-2xl border border-accent/30 bg-accent/5 p-8 text-center">
            <p className="text-lg font-semibold text-foreground">
              🔥 Lock your setup at $997 before Friday — spots limited to 10. 
              <span className="text-accent"> After that the fee doubles.</span>
            </p>
          </div>

          {/* Guarantee Section */}
          <div className="mt-20">
            <div className="mx-auto max-w-3xl rounded-3xl border border-primary/30 bg-gradient-card backdrop-blur-sm p-12 text-center shadow-glow">
              <h2 className="mb-6 text-3xl font-bold text-foreground">Our 3x ROI Guarantee</h2>
              <p className="mb-8 text-lg text-muted-foreground">
                If we don't make you at least 3x your investment in the first 30 days, 
                we'll work for free until we do. That's how confident we are in our system.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <div className="mb-2 text-4xl font-bold text-primary">3x</div>
                  <div className="text-sm text-muted-foreground">Minimum ROI guarantee</div>
                </div>
                <div>
                  <div className="mb-2 text-4xl font-bold text-primary">30</div>
                  <div className="text-sm text-muted-foreground">Days to prove results</div>
                </div>
                <div>
                  <div className="mb-2 text-4xl font-bold text-primary">$0</div>
                  <div className="text-sm text-muted-foreground">Risk if we don't deliver</div>
                </div>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="mt-20">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
              What's included in every plan
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm">
                <Check className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-semibold text-foreground">Complete Setup</h3>
                <p className="text-sm text-muted-foreground">
                  We handle all technical setup, integrations, and testing
                </p>
              </div>
              
              <div className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm">
                <Check className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-semibold text-foreground">Custom Training</h3>
                <p className="text-sm text-muted-foreground">
                  AI trained on your brand voice, FAQs, and tone
                </p>
              </div>
              
              <div className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm">
                <Check className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-semibold text-foreground">Analytics Dashboard</h3>
                <p className="text-sm text-muted-foreground">
                  Real-time metrics on bookings, revenue, and performance
                </p>
              </div>
              
              <div className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm">
                <Check className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-semibold text-foreground">CRM Integration</h3>
                <p className="text-sm text-muted-foreground">
                  Seamless connection to HubSpot, Salesforce, or your CRM
                </p>
              </div>
              
              <div className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm">
                <Check className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-semibold text-foreground">Team Training</h3>
                <p className="text-sm text-muted-foreground">
                  1:1 onboarding sessions for your team
                </p>
              </div>
              
              <div className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm">
                <Check className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-semibold text-foreground">Ongoing Support</h3>
                <p className="text-sm text-muted-foreground">
                  Continuous monitoring, optimization, and support
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Preview */}
          <div className="mt-20 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Still have questions?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Check out our FAQ or schedule a call with our team
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button variant="outline" size="lg" asChild>
                <Link to="/">View FAQ</Link>
              </Button>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Schedule a Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;

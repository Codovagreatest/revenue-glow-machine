import { Button } from "@/components/ui/button";
import { Hero } from "@/components/ui/hero-1";
import { GradientCard } from "@/components/ui/gradient-card";
import { Link } from "react-router-dom";
import { Zap, ArrowLeft, MessageSquare, Phone, Globe } from "lucide-react";

const Services = () => {
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
        eyebrow="Complete AI Automation Suite"
        title="Transform support into revenue"
        subtitle="AI-powered tools that capture, qualify, and convert leads 24/7 across every channel."
        ctaLabel="Start Your Pilot"
        ctaHref="/pilot"
      />

      {/* Services Grid with Premium Cards */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              Choose your <span className="bg-gradient-primary bg-clip-text text-transparent">automation</span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              Each service integrates seamlessly to create a revenue-generating machine
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <GradientCard
              icon={<MessageSquare className="h-6 w-6 text-primary" />}
              title="AI Chat Suite"
              description="24/7 DM handling across Instagram, WhatsApp, and Telegram that sounds like you and books in real time. Multi-channel bot deployment with custom FAQ & tone training, decision-tree qualification, instant calendar booking with invites & SMS reminders, human handover rules & priority escalation, and CRM integration via webhooks."
              linkText="Start Chat Pilot (14 days)"
              linkHref="/pilot"
            />
            
            <GradientCard
              icon={<Phone className="h-6 w-6 text-primary" />}
              title="AI Voice Caller"
              description="Human-like voice rep that confirms appointments, follows up with warm leads, and converts on your behalf. Outbound autodial for warm leads within hours, inbound after-hours call handling, real voice TTS + STT with conversational AI, appointment confirmation flow automation, recording transcripts & sentiment analysis, and fallback SMS if call unsuccessful."
              linkText="Book Voice Demo"
              linkHref="/contact"
            />
            
            <GradientCard
              icon={<Globe className="h-6 w-6 text-primary" />}
              title="Website Voice Agent"
              description="Convert passive visitors and form-abandoners into booked calls with proactive voice engagement. On-page waveform widget integration, proactive visitor intercept for idle users, form abandonment rescue triggers, seamless handoff to calendar booking, real-time analytics on engagement, and custom voice prompts & branding."
              linkText="Add Voice to Site"
              linkHref="/contact"
            />
          </div>

          {/* Additional Services */}
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm">
              <h3 className="mb-4 text-2xl font-bold text-foreground">Analytics Dashboard & Ops</h3>
              <p className="mb-6 text-muted-foreground">
                Metric-driven reporting showing bookings, revenue captured, and hours saved with full transparency.
              </p>
              <ul className="mb-6 space-y-2 text-sm text-foreground/90">
                <li>• Late-hour conversion rate tracking</li>
                <li>• Booking velocity metrics</li>
                <li>• Calls handled & top-performing flows</li>
                <li>• Revenue captured estimates</li>
                <li>• GA4, Segment, CRM integrations</li>
              </ul>
              <Button variant="outline" asChild>
                <Link to="/contact">See Sample Dashboard</Link>
              </Button>
            </div>

            <div className="rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm">
              <h3 className="mb-4 text-2xl font-bold text-foreground">Done-for-You Setup & Integration</h3>
              <p className="mb-6 text-muted-foreground">
                Full hands-on delivery: build, train, deploy, monitor. We handle everything so you can focus on your business.
              </p>
              <ul className="mb-6 space-y-2 text-sm text-foreground/90">
                <li>• Complete onboarding & access setup</li>
                <li>• Bot & voice script development</li>
                <li>• Calendar & CRM integration</li>
                <li>• Testing & quality assurance</li>
                <li>• 1:1 team training sessions</li>
              </ul>
              <Button variant="outline" asChild>
                <Link to="/pilot">Start Your Pilot</Link>
              </Button>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 rounded-3xl border border-primary/30 bg-gradient-card backdrop-blur-sm p-12 text-center shadow-glow">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Ready to automate your lead flow?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Book a 21-day pilot and see measurable ROI in 3 weeks.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/pilot">Book Your Pilot — $997 Setup</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Schedule a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

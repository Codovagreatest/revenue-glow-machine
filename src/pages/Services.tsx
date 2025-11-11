import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { Link } from "react-router-dom";
import { Zap, ArrowLeft } from "lucide-react";
import chatIcon from "@/assets/chat-icon.jpg";
import voiceIcon from "@/assets/voice-icon.jpg";
import webVoiceIcon from "@/assets/web-voice-icon.jpg";

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
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <Button variant="ghost" className="mb-8" asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-5xl font-bold text-foreground md:text-6xl">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              Complete AI automation suite to capture, qualify, and convert leads 24/7. 
              Each service integrates seamlessly to create a revenue-generating machine.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={chatIcon}
              title="AI Chat Suite"
              description="24/7 DM handling across Instagram, WhatsApp, and Telegram that sounds like you and books in real time."
              features={[
                "Multi-channel bot deployment",
                "Custom FAQ & tone training",
                "Decision-tree qualification (budget, timeframe, urgency)",
                "Instant calendar booking with invites & SMS reminders",
                "Human handover rules & priority escalation",
                "CRM integration via webhooks"
              ]}
              ctaText="Start Chat Pilot (14 days)"
              onCTAClick={() => window.location.href = "/pilot"}
            />
            
            <ServiceCard
              icon={voiceIcon}
              title="AI Voice Caller"
              description="Human-like voice rep that confirms appointments, follows up with warm leads, and converts on your behalf."
              features={[
                "Outbound autodial for warm leads within hours",
                "Inbound after-hours call handling",
                "Real voice TTS + STT with conversational AI",
                "Appointment confirmation flow automation",
                "Recording transcripts & sentiment analysis",
                "Fallback SMS if call unsuccessful"
              ]}
              ctaText="Book Voice Demo"
              onCTAClick={() => window.location.href = "/contact"}
            />
            
            <ServiceCard
              icon={webVoiceIcon}
              title="Website Voice Agent"
              description="Convert passive visitors and form-abandoners into booked calls with proactive voice engagement."
              features={[
                "On-page waveform widget integration",
                "Proactive visitor intercept for idle users",
                "Form abandonment rescue triggers",
                "Seamless handoff to calendar booking",
                "Real-time analytics on engagement",
                "Custom voice prompts & branding"
              ]}
              ctaText="Add Voice to Site"
              onCTAClick={() => window.location.href = "/contact"}
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
          <div className="mt-20 rounded-3xl border border-primary/30 bg-gradient-radial p-12 text-center">
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

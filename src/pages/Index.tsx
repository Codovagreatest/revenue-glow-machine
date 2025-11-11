import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { PricingCard } from "@/components/PricingCard";
import { StatsCounter } from "@/components/StatsCounter";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { 
  Phone, 
  MessageSquare, 
  Globe, 
  BarChart3, 
  Zap,
  Clock,
  TrendingUp,
  Shield,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import heroImage from "@/assets/hero-planet.jpg";
import chatIcon from "@/assets/chat-icon.jpg";
import voiceIcon from "@/assets/voice-icon.jpg";
import webVoiceIcon from "@/assets/web-voice-icon.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">24/7 Revenue Machine</span>
          </div>
          
          <div className="hidden items-center space-x-6 md:flex">
            <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Home
            </Link>
            <Link to="/services" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Services
            </Link>
            <Link to="/pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Pricing
            </Link>
            <Link to="/case-studies" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Case Studies
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </Link>
          </div>
          
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
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-fade-in space-y-8">
              <div className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Trusted by 50+ brands
              </div>
              
              <h1 className="text-5xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
                We make your nights{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  profitable
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground md:text-2xl">
                Bookings while your competitors sleep. AI chat, voice, and web agents that qualify, 
                book, and call 24/7 — so you capture revenue around the clock.
              </p>
              
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button variant="hero" size="lg" className="text-lg" asChild>
                  <Link to="/pilot">
                    Get Started — Book 21-Day Pilot
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg" asChild>
                  <Link to="/contact">See a Live Demo</Link>
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex -space-x-2">
                  <div className="h-10 w-10 rounded-full border-2 border-background bg-primary/20" />
                  <div className="h-10 w-10 rounded-full border-2 border-background bg-cyan/20" />
                  <div className="h-10 w-10 rounded-full border-2 border-background bg-accent/20" />
                </div>
                <div className="text-sm text-muted-foreground">
                  Join 50+ businesses capturing after-hours revenue
                </div>
              </div>
            </div>
            
            <div className="relative animate-float">
              <img 
                src={heroImage} 
                alt="AI Analytics Dashboard" 
                className="rounded-2xl shadow-glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border/50 bg-card/30 py-16 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <StatsCounter value="12" label="Avg. uplift in late-hour bookings" suffix="%" />
            <StatsCounter value="10" label="After-hours lead loss" suffix="%" />
            <StatsCounter value="40" label="Support cost reduction" suffix="%" />
          </div>
        </div>
      </section>

      {/* Problem Section A - Missed After-Hours Leads */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-destructive/10 px-3 py-1 text-sm font-medium text-destructive">
                Problem #1
              </div>
              
              <h2 className="text-4xl font-bold text-foreground md:text-5xl">
                Missed after-hours leads
              </h2>
              
              <p className="text-lg text-muted-foreground">
                A ringing phone at midnight, a cold lead who never answers morning calls — 
                "could've been revenue." Immediate lost revenue; higher CAC; missed competitive advantage.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h4 className="font-semibold text-foreground">Insta/WhatsApp/Telegram bots</h4>
                    <p className="text-sm text-muted-foreground">Always-on, brand-voiced qualification + instant booking</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h4 className="font-semibold text-foreground">AI voice caller (outbound)</h4>
                    <p className="text-sm text-muted-foreground">Warms, confirms, leaves booking & fallback SMS</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h4 className="font-semibold text-foreground">Website voice agent</h4>
                    <p className="text-sm text-muted-foreground">Rescues form-abandoners and converts passive visitors</p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg border border-primary/30 bg-primary/5 p-6">
                <div className="mb-2 text-sm font-medium text-primary">KPI Promise</div>
                <p className="text-foreground">
                  Increase late-hour conversion rate <strong>8–15%</strong> conservatively; 
                  reduce after-hours lost leads to <strong>&lt;10%</strong> of total leads.
                </p>
              </div>
              
              <Button variant="accent" size="lg" asChild>
                <Link to="/pilot">Run a 21-Day After-Hours Pilot</Link>
              </Button>
            </div>
            
            <div className="grid gap-4">
              <div className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm">
                <Clock className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-bold text-foreground">24/7 Coverage</h3>
                <p className="text-muted-foreground">Never miss a lead, even at 2 AM</p>
              </div>
              
              <div className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm">
                <TrendingUp className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-bold text-foreground">Higher Conversion</h3>
                <p className="text-muted-foreground">Strike while the iron is hot</p>
              </div>
              
              <div className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm">
                <Shield className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-bold text-foreground">Competitive Edge</h3>
                <p className="text-muted-foreground">Win while others sleep</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section B - Leads Going Cold */}
      <section className="border-y border-border/50 bg-card/30 py-20 backdrop-blur-sm md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <div className="space-y-6 rounded-2xl border border-primary/30 bg-gradient-radial p-8">
                <div className="text-center">
                  <div className="mb-4 text-6xl font-bold text-primary animate-pulse-glow">10-25%</div>
                  <div className="text-xl font-semibold text-foreground">Booking velocity increase</div>
                  <div className="text-sm text-muted-foreground">(bookings per 100 leads)</div>
                </div>
                
                <div className="space-y-3 pt-4">
                  <div className="flex items-center justify-between rounded-lg bg-background/50 p-3">
                    <span className="text-sm text-muted-foreground">Before</span>
                    <span className="font-bold text-foreground">18 bookings</span>
                  </div>
                  <ArrowRight className="mx-auto h-6 w-6 text-primary" />
                  <div className="flex items-center justify-between rounded-lg bg-primary/10 p-3">
                    <span className="text-sm text-foreground">After</span>
                    <span className="font-bold text-primary">22-23 bookings</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 space-y-6 lg:order-2">
              <div className="inline-block rounded-lg bg-destructive/10 px-3 py-1 text-sm font-medium text-destructive">
                Problem #2
              </div>
              
              <h2 className="text-4xl font-bold text-foreground md:text-5xl">
                Leads going cold between contact & booking
              </h2>
              
              <p className="text-lg text-muted-foreground">
                Promising DMs turn into silence — interest cools while agents chase calendars. 
                Win rates drop, CAC increases, pipeline fizzles.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">How we solve it:</h3>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-foreground">Qualifying messaging decision-trees (budget/timing/urgency)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-foreground">Instant calendar booking with SMS & calendar invite</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-foreground">AI voice autodials warm leads within hours</span>
                  </li>
                </ul>
              </div>
              
              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                "We close the gap between interest and schedule, so warm leads don't go cold."
              </blockquote>
              
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">See Messaging + Voice Flow</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              Automation that <span className="text-primary">converts</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              AI-powered tools that work 24/7 to capture, qualify, and convert leads 
              while you focus on closing deals.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={chatIcon}
              title="AI Chat Suite"
              description="24/7 DM handling that sounds like you and books in real time."
              features={[
                "Multi-channel bots (Instagram, WhatsApp, Telegram)",
                "Decision-tree qualification",
                "Instant calendar booking",
                "Human handover rules"
              ]}
              ctaText="Start Chat Pilot"
              onCTAClick={() => window.location.href = "/pilot"}
            />
            
            <ServiceCard
              icon={voiceIcon}
              title="AI Voice Caller"
              description="A human-like voice rep that confirms, follows-up, and converts."
              features={[
                "Outbound autodial for warm leads",
                "Inbound after-hours handling",
                "Real voice TTS + STT",
                "Recording transcripts & sentiment"
              ]}
              ctaText="Book Voice Demo"
              onCTAClick={() => window.location.href = "/contact"}
            />
            
            <ServiceCard
              icon={webVoiceIcon}
              title="Website Voice Agent"
              description="Turn passive visitors and form-abandoners into booked calls."
              features={[
                "On-page waveform widget",
                "Proactive visitor intercept",
                "Form abandonment rescue",
                "Seamless calendar handoff"
              ]}
              ctaText="Add Voice to Site"
              onCTAClick={() => window.location.href = "/contact"}
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="border-y border-border/50 bg-card/30 py-20 backdrop-blur-sm md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-bold text-accent">
              LIMITED: Only 10 spots this month
            </div>
            <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              Simple, transparent pricing
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Start with a proven pilot, scale when you see results. 
              All plans include setup, training, and our 3x ROI guarantee.
            </p>
          </div>
          
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
                "Only pay monthly if you keep it",
                "3x ROI guarantee"
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
                "Priority escalation"
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
                "Compliance-ready setup",
                "Dedicated designer",
                "24/7 operations monitoring",
                "Custom integrations",
                "6-month minimum"
              ]}
              ctaText="Contact Sales"
              onCTAClick={() => window.location.href = "/contact"}
            />
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              🔥 Lock your setup at $997 before Friday — spots limited to 10. After that the fee doubles.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Proven results for businesses like yours
            </h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border bg-card/50 p-8 backdrop-blur-sm">
              <div className="mb-4 text-4xl font-bold text-primary">38</div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Local Clinic</h3>
              <p className="mb-4 text-muted-foreground">
                21-day pilot captured 38 bookings with 3.2x ROI
              </p>
              <div className="flex items-center space-x-2 text-sm text-primary">
                <TrendingUp className="h-4 w-4" />
                <span>+320% ROI</span>
              </div>
            </div>
            
            <div className="rounded-xl border border-border bg-card/50 p-8 backdrop-blur-sm">
              <div className="mb-4 text-4xl font-bold text-primary">14%</div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">SaaS Company</h3>
              <p className="mb-4 text-muted-foreground">
                Uplift in after-hours conversion within first month
              </p>
              <div className="flex items-center space-x-2 text-sm text-primary">
                <Clock className="h-4 w-4" />
                <span>24/7 Coverage</span>
              </div>
            </div>
            
            <div className="rounded-xl border border-border bg-card/50 p-8 backdrop-blur-sm">
              <div className="mb-4 text-4xl font-bold text-primary">45%</div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">E-commerce Brand</h3>
              <p className="mb-4 text-muted-foreground">
                Reduction in support costs with automated responses
              </p>
              <div className="flex items-center space-x-2 text-sm text-primary">
                <BarChart3 className="h-4 w-4" />
                <span>Cost Savings</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-border/50 bg-card/30 py-20 backdrop-blur-sm md:py-32">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground">
              Frequently asked questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about the 24/7 Revenue Machine
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="rounded-lg border border-border bg-card/50 px-6">
              <AccordionTrigger className="text-left text-foreground hover:text-primary">
                Does this replace my sales team?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No — it automates repetitive first-touch and booking tasks so your team focuses on 
                high-value conversations. Your sales team will thank you for the warmer, more qualified leads.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="rounded-lg border border-border bg-card/50 px-6">
              <AccordionTrigger className="text-left text-foreground hover:text-primary">
                Is my customer data safe?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes — we use encrypted storage, secure API keys, and offer compliance-ready setups 
                (GDPR/CCPA options on enterprise). Your data security is our top priority.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="rounded-lg border border-border bg-card/50 px-6">
              <AccordionTrigger className="text-left text-foreground hover:text-primary">
                How quickly can we start?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Pilot setup in 72 hours after kickoff (access permitting). Full rollout timelines vary 
                by integrations, but most clients are live within a week.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="rounded-lg border border-border bg-card/50 px-6">
              <AccordionTrigger className="text-left text-foreground hover:text-primary">
                What if the AI messes up?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We include human escalation rules and iterative training in the first 21 days — plus our 
                3x ROI guarantee. If we don't deliver results, we work for free until we do.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="rounded-lg border border-border bg-card/50 px-6">
              <AccordionTrigger className="text-left text-foreground hover:text-primary">
                What's included in the 21-day pilot?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Full setup of chat suite, voice caller, website voice agent, 2 booking flows, analytics 
                dashboard, daily monitoring and optimization, and a final ROI report with growth plan recommendations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-radial p-12 text-center">
            <div className="relative z-10 mx-auto max-w-3xl space-y-8">
              <h2 className="text-4xl font-bold text-foreground md:text-5xl">
                Ready to turn your nights into profit?
              </h2>
              
              <p className="text-xl text-muted-foreground">
                Join 50+ businesses already capturing revenue 24/7. Start your 21-day pilot today 
                and see measurable ROI in 3 weeks — or we work for free.
              </p>
              
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button variant="hero" size="lg" className="text-lg" asChild>
                  <Link to="/pilot">
                    Book Your Pilot — $997 Setup
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg" asChild>
                  <Link to="/contact">Schedule a Demo Call</Link>
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Limited to 10 businesses this month • 3x ROI guarantee • Setup in 72 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 py-12 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Zap className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold text-foreground">24/7 Revenue Machine</span>
              </div>
              <p className="text-sm text-muted-foreground">
                AI automation that turns customer support into revenue.
              </p>
            </div>
            
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/services" className="hover:text-primary">Services</Link></li>
                <li><Link to="/pricing" className="hover:text-primary">Pricing</Link></li>
                <li><Link to="/pilot" className="hover:text-primary">21-Day Pilot</Link></li>
                <li><Link to="/case-studies" className="hover:text-primary">Case Studies</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">About</a></li>
                <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
                <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary">Twitter</a></li>
                <li><a href="#" className="hover:text-primary">support@example.com</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 24/7 Revenue Machine. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

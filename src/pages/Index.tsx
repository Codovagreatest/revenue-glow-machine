import { Button } from "@/components/ui/button";
import { Hero } from "@/components/ui/hero-1";
import { GradientCard } from "@/components/ui/gradient-card";
import { FeatureCard, CardHeading, CircularUI } from "@/components/ui/features-10";
import { ServiceCard } from "@/components/ServiceCard";
import { PricingCard } from "@/components/PricingCard";
import { StatsCounter } from "@/components/StatsCounter";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { LampContainer } from "@/components/ui/lamp";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns";
import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
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
  CheckCircle2,
  Bot,
  Sparkles
} from "lucide-react";
import chatIcon from "@/assets/chat-icon.jpg";
import voiceIcon from "@/assets/voice-icon.jpg";
import webVoiceIcon from "@/assets/web-voice-icon.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />

      {/* Hero Section with New Premium Component */}
      <div className="pt-20">
        <Hero 
          eyebrow="AI Automation That Never Sleeps"
          title="We make your nights profitable"
          subtitle="Never miss a lead again. AI chat, voice, and web agents that qualify, book, and call 24/7 — so you capture revenue around the clock, lower CAC, and keep your pipeline warm."
          ctaLabel="Book 21-Day Pilot"
          ctaHref="/pilot"
        />
      </div>

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
              
              <h2 className="text-4xl font-bold text-foreground md:text-5xl font-ubuntu">
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
              
              <h2 className="text-4xl font-bold text-foreground md:text-5xl font-ubuntu">
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

      {/* Services Section with Premium Gradient Cards */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl font-ubuntu">
              Automation that <span className="bg-gradient-primary bg-clip-text text-transparent">converts</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              AI-powered tools that work 24/7 to capture, qualify, and convert leads 
              while you focus on closing deals.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <GradientCard
              icon={<MessageSquare className="h-6 w-6 text-primary" />}
              title="AI Chat Suite"
              description="24/7 DM handling across Instagram, WhatsApp, and Telegram. Multi-channel bots with decision-tree qualification, instant calendar booking, and human handover rules. Turn every conversation into a booking opportunity."
              linkText="Start Chat Pilot"
              linkHref="/pilot"
            />
            
            <GradientCard
              icon={<Phone className="h-6 w-6 text-primary" />}
              title="AI Voice Caller"
              description="Human-like voice rep that confirms, follows-up, and converts. Outbound autodial for warm leads, inbound after-hours handling, real voice TTS + STT, and sentiment analysis. Never miss a call again."
              linkText="Book Voice Demo"
              linkHref="/contact"
            />
            
            <GradientCard
              icon={<Globe className="h-6 w-6 text-primary" />}
              title="Website Voice Agent"
              description="Convert passive visitors into booked calls. On-page waveform widget with proactive visitor intercept, form abandonment rescue, and seamless calendar handoff. Capture leads before they bounce."
              linkText="Add Voice to Site"
              linkHref="/contact"
            />
          </div>
        </div>
      </section>

      {/* Advanced Features Section with Premium Component */}
      <section className="border-y border-border/50 bg-card/30 py-20 backdrop-blur-sm md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl font-ubuntu">
              Enterprise-grade <span className="bg-gradient-primary bg-clip-text text-transparent">automation</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Advanced tracking, scheduling, and analytics built for scale
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid gap-4 lg:grid-cols-2">
              <FeatureCard>
                <CardHeader className="pb-3">
                  <CardHeading
                    icon={Clock}
                    title="Real-time Lead Tracking"
                    description="Instantly locate and track every lead across all channels with advanced monitoring"
                  />
                </CardHeader>

                <CardContent>
                  <div className="relative mb-6 border-t border-dashed">
                    <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,hsl(var(--muted)),hsl(var(--background))_125%)]"></div>
                    <div className="aspect-[76/59] flex items-center justify-center p-8">
                      <div className="relative">
                        <div className="absolute inset-0 animate-pulse-glow rounded-full bg-primary/20 blur-xl"></div>
                        <BarChart3 className="relative h-32 w-32 text-primary" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </FeatureCard>

              <FeatureCard>
                <CardHeader className="pb-3">
                  <CardHeading
                    icon={Bot}
                    title="AI-Powered Scheduling"
                    description="Smart scheduling with automated reminders and intelligent booking optimization"
                  />
                </CardHeader>

                <CardContent>
                  <div className="relative mb-6">
                    <div className="absolute -inset-6 [background:radial-gradient(50%_50%_at_75%_50%,transparent,hsl(var(--background))_100%)]"></div>
                    <div className="aspect-[76/59] flex items-center justify-center border border-primary/20 rounded-lg bg-gradient-to-br from-primary/5 to-transparent p-8">
                      <Sparkles className="h-32 w-32 text-primary animate-pulse-glow" />
                    </div>
                  </div>
                </CardContent>
              </FeatureCard>

              <FeatureCard className="p-6 lg:col-span-2">
                <p className="mx-auto my-6 max-w-md text-balance text-center text-2xl font-semibold text-foreground">
                  Multi-channel orchestration with seamless handoffs and intelligent routing
                </p>

                <div className="flex justify-center gap-6 overflow-hidden">
                  <CircularUI
                    label="Chat Bot"
                    circles={[{ pattern: 'primary' }, { pattern: 'border' }]}
                  />

                  <CircularUI
                    label="Voice AI"
                    circles={[{ pattern: 'none' }, { pattern: 'primary' }]}
                  />

                  <CircularUI
                    label="Web Agent"
                    circles={[{ pattern: 'blue' }, { pattern: 'none' }]}
                  />

                  <CircularUI
                    label="Human"
                    circles={[{ pattern: 'border' }, { pattern: 'none' }]}
                    className="hidden sm:block"
                  />
                </div>
              </FeatureCard>
            </div>
          </div>
        </div>
      </section>
      <section className="border-y border-border/50 bg-card/30 py-20 backdrop-blur-sm md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-bold text-accent">
              LIMITED: Only 10 spots this month
            </div>
            <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl font-ubuntu">
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

      {/* Integration Orbit Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              Seamlessly <span className="bg-gradient-primary bg-clip-text text-transparent">connects</span> with your stack
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Our AI agents integrate with the tools you already use. CRM, calendars, messaging platforms — all working in harmony.
            </p>
          </div>

          <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-primary/20 bg-card/30 backdrop-blur-sm md:shadow-xl">
            <iframe
              src="https://player.cloudinary.com/embed/?cloud_name=dm6naju6a&public_id=unicorn-1763185568755_online-video-cutter.com_zfec7d&profile=cld-default&autoplay=true&loop=true&muted=true&controls=false"
              className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
              allow="autoplay"
              style={{ border: 'none' }}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/60" />

            <span className="relative z-10 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-primary to-primary/40 bg-clip-text text-center text-6xl md:text-8xl font-bold leading-none text-transparent font-ubuntu">
              24/7
            </span>

            {/* Inner Circles */}
            <OrbitingCircles
              className="size-[40px] border-none bg-card/80 backdrop-blur-sm"
              duration={20}
              delay={20}
              radius={80}
            >
              <MessageSquare className="h-5 w-5 text-primary" />
            </OrbitingCircles>
            <OrbitingCircles
              className="size-[40px] border-none bg-card/80 backdrop-blur-sm"
              duration={20}
              delay={10}
              radius={80}
            >
              <Phone className="h-5 w-5 text-primary" />
            </OrbitingCircles>

            {/* Outer Circles (reverse) */}
            <OrbitingCircles
              className="size-[50px] border-none bg-card/80 backdrop-blur-sm"
              radius={190}
              duration={20}
              reverse
            >
              <Globe className="h-6 w-6 text-cyan" />
            </OrbitingCircles>
            <OrbitingCircles
              className="size-[50px] border-none bg-card/80 backdrop-blur-sm"
              radius={190}
              duration={20}
              delay={20}
              reverse
            >
              <BarChart3 className="h-6 w-6 text-cyan" />
            </OrbitingCircles>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-background py-20 md:py-32 relative">
        <div className="container z-10 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16"
          >
            <div className="flex justify-center">
              <div className="border border-primary/30 py-1 px-4 rounded-lg bg-primary/5 font-ubuntu">Testimonials</div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-5 text-foreground font-ubuntu">
              What our clients say
            </h2>
            <p className="text-center mt-5 text-muted-foreground">
              Real results from businesses capturing revenue 24/7
            </p>
          </motion.div>

          <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
            <TestimonialsColumn testimonials={[
              {
                text: "The 21-day pilot captured 38 bookings we would've missed. Our after-hours conversion rate jumped 14% in the first month. This pays for itself.",
                image: "https://randomuser.me/api/portraits/women/1.jpg",
                name: "Sarah Mitchell",
                role: "Operations Director, Local Clinic"
              },
              {
                text: "Setup was incredibly smooth. Within 72 hours, our AI chat was handling Instagram DMs like a pro. The voice caller is honestly better than our junior reps at qualification.",
                image: "https://randomuser.me/api/portraits/men/2.jpg",
                name: "Marcus Chen",
                role: "Growth Lead, SaaS Startup"
              },
              {
                text: "We were skeptical about AI handling customer conversations. But the team trained it so well on our brand voice, customers can't tell the difference. 3.2x ROI in 3 weeks.",
                image: "https://randomuser.me/api/portraits/women/3.jpg",
                name: "Jennifer Rodriguez",
                role: "CEO, E-commerce Brand"
              }
            ]} duration={15} />
            <TestimonialsColumn testimonials={[
              {
                text: "The ROI guarantee gave us confidence to try this. Now we're capturing leads at 2 AM that convert to $5K+ deals. Our competitors are still sleeping.",
                image: "https://randomuser.me/api/portraits/men/4.jpg",
                name: "David Park",
                role: "Sales Director, B2B Agency"
              },
              {
                text: "Support costs down 45%, booking velocity up 22%. The analytics dashboard shows exactly where we're winning. This is the future of customer ops.",
                image: "https://randomuser.me/api/portraits/women/5.jpg",
                name: "Amanda Foster",
                role: "COO, Healthcare Provider"
              },
              {
                text: "What impressed me most was the human escalation logic. The AI knows when to hand off, and our team only handles qualified, warm leads now. Game changer.",
                image: "https://randomuser.me/api/portraits/men/6.jpg",
                name: "Thomas Wright",
                role: "Customer Success VP"
              }
            ]} className="hidden md:block" duration={19} />
            <TestimonialsColumn testimonials={[
              {
                text: "The website voice agent rescued 18 form abandoners in the first week. That's $27K in potential revenue we almost lost. Worth every penny.",
                image: "https://randomuser.me/api/portraits/women/7.jpg",
                name: "Lisa Thompson",
                role: "Marketing Director"
              },
              {
                text: "Integration with our CRM was seamless. Twilio logs, calendar invites, SMS reminders — everything just works. The dev team was impressed.",
                image: "https://randomuser.me/api/portraits/men/8.jpg",
                name: "Ryan Kumar",
                role: "CTO, Tech Company"
              },
              {
                text: "Our booking velocity increased 25% without hiring more staff. The AI handles nights, weekends, holidays — when we used to lose the most leads.",
                image: "https://randomuser.me/api/portraits/women/9.jpg",
                name: "Nicole Adams",
                role: "VP Operations"
              }
            ]} className="hidden lg:block" duration={17} />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground font-ubuntu">
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
            <h2 className="mb-4 text-4xl font-bold text-foreground font-ubuntu">
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

      {/* Dramatic Lamp CTA Section */}
      <LampContainer className="my-20">
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 space-y-8"
        >
          <h2 className="bg-gradient-to-br from-foreground to-muted-foreground py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-7xl font-ubuntu">
            Turn nights into profit.<br />
            Start today.
          </h2>
          
          <p className="text-center text-xl text-muted-foreground max-w-2xl mx-auto">
            Join 50+ businesses capturing revenue 24/7 with AI that never sleeps
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center pt-4">
            <Button variant="hero" size="lg" className="text-lg font-roboto" asChild>
              <Link to="/pilot">
                Book Your Pilot — $997
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg font-roboto" asChild>
              <Link to="/contact">See Live Demo</Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground text-center pt-4">
            ⚡ Limited to 10 businesses this month • 3x ROI guarantee • Setup in 72 hours
          </p>
        </motion.div>
      </LampContainer>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 py-12 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Zap className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold text-foreground font-ubuntu">24/7 Revenue Machine</span>
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

import { Button } from "@/components/ui/button";
import { Hero } from "@/components/ui/hero-1";
import { GradientCard } from "@/components/ui/gradient-card";
import { FeatureCard, CardHeading, CircularUI } from "@/components/ui/features-10";
import { ServiceCard } from "@/components/ServiceCard";
import { PricingCard } from "@/components/PricingCard";
import { StatsCounter } from "@/components/StatsCounter";
import { GlowCard } from "@/components/ui/glow-card";
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

      {/* Problem Section A - Why You're Here */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block rounded-lg bg-destructive/10 px-3 py-1 text-sm font-medium text-destructive mb-8"
            >
              The Reality
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-6xl md:text-7xl font-black text-foreground mb-12 font-display leading-tight"
            >
              Why You're Here
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-2xl font-semibold text-foreground"
                >
                  If you're honest… your customer support is slow, expensive, and leaking revenue.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="space-y-3 text-lg text-foreground font-semibold"
                >
                  <p>You know it.</p>
                  <p>Your customers know it.</p>
                  <p className="text-destructive">Your competitors love it.</p>
                </motion.div>
              </div>

              <div className="space-y-4">
                {[
                  { icon: '🕐', text: 'Leads message you on Instagram at 1AM. You reply at 9AM. They\'re gone.' },
                  { icon: '🤖', text: 'Customers ask the same questions all day. Your team repeats themselves like broken robots.' },
                  { icon: '📈', text: 'Agents get overwhelmed. Tickets pile up. People wait. Reviews suffer.' },
                  { icon: '💸', text: 'Support eats payroll but doesn\'t bring revenue.' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-destructive/5 border border-destructive/30 rounded-lg p-5 hover:bg-destructive/10 hover:border-destructive/50 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform">{item.icon}</span>
                      <p className="text-foreground leading-relaxed">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-destructive/10 to-destructive/5 border border-destructive/30 rounded-xl p-8 mt-12 backdrop-blur-sm hover:border-destructive/50 transition-colors"
            >
              <p className="text-2xl font-bold text-foreground mb-3">The Cost of Every Minute You're Not Responding</p>
              <p className="text-lg text-destructive font-semibold">Someone else is. And they're winning.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section B - The Promise */}
      <section className="border-y border-border/50 bg-card/30 py-20 backdrop-blur-sm md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8"
            >
              The Solution
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-6xl md:text-7xl font-black text-foreground mb-12 font-display leading-tight"
            >
              The Promise
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-foreground mb-12 leading-relaxed"
            >
              We give you a Customer Support Team that never sleeps, never complains, never forgets, and never drops the ball.
            </motion.p>

            <div className="bg-gradient-to-br from-primary/10 via-card/50 to-primary/5 border border-primary/20 rounded-2xl p-10 backdrop-blur-sm mb-12">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lg text-foreground mb-8"
              >
                This isn't "AI bots."<br/>
                <span className="text-2xl font-bold text-primary block mt-2">This is your 24/7 Revenue & Support Infrastructure.</span>
              </motion.p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { emoji: '💬', title: 'It feels human.', desc: 'Conversations that convert, not bots that frustrate.' },
                  { emoji: '🎯', title: 'It talks like your best rep.', desc: 'Brand-voice matched perfectly.' },
                  { emoji: '⚡', title: 'It books faster.', desc: 'Instant calendar, zero friction.' },
                  { emoji: '🔔', title: 'It answers instantly.', desc: 'Not in minutes. Not in hours. Now.' },
                  { emoji: '🔄', title: 'It follows up relentlessly.', desc: 'Every lead, every time, perfect timing.' },
                  { emoji: '💰', title: 'And it makes you money while you\'re away.', desc: 'Revenue while you sleep.' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.08 }}
                    viewport={{ once: true }}
                    className="bg-background/40 border border-primary/20 rounded-lg p-5 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform">{item.emoji}</span>
                      <div>
                        <p className="font-bold text-foreground mb-1">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Button variant="accent" size="lg" asChild className="text-lg">
                <Link to="/pilot">Activate Your AI Team</Link>
              </Button>
            </motion.div>
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

      {/* Advanced Features Section - The Stuff Your Team Hates Doing */}
      <section className="border-y border-border/50 bg-card/30 py-20 backdrop-blur-sm md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block rounded-lg bg-accent/10 px-3 py-1 text-sm font-medium text-accent mb-8"
            >
              The Automation
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-6 text-5xl md:text-7xl font-black text-foreground font-display leading-tight"
            >
              The Stuff Your Team<br />Hates Doing.
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">We Automate All of It.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-muted-foreground max-w-3xl leading-relaxed"
            >
              Support. Booking. Follow-up. Tracking. Chasing.<br/>
              <span className="text-foreground font-semibold">All the repetitive garbage that drains your time, AI handles it.</span>
            </motion.p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                num: '1',
                icon: Zap,
                title: 'Instant Lead Detection',
                desc: 'Before your human team even sees the notification, our AI has already replied, qualified, and booked the lead.',
                highlight: 'You move faster than your competitors.'
              },
              {
                num: '2',
                icon: Clock,
                title: 'AI Scheduling That Fills Your Calendar Automatically',
                desc: 'No more "Does 3pm work?" No more "Let me check." AI gives your availability, books instantly, sends reminders, and kills no-shows.',
                highlight: 'Your days are packed without lifting a finger.'
              },
              {
                num: '3',
                icon: Phone,
                title: 'The Relentless Follow-Up Engine',
                desc: 'Your AI calls, texts, and messages your leads with zero shame and perfect timing. It never gets tired. Never forgets. Never loses a deal.',
                highlight: 'Revenue recovery on autopilot.'
              }
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlowCard
                    glowColor="blue"
                    customSize
                    className="w-full h-full"
                  >
                    <div className="flex flex-col h-full justify-between text-foreground">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary font-bold text-lg">
                            {item.num}
                          </div>
                          <IconComponent className="h-6 w-6 text-primary flex-shrink-0" />
                        </div>
                        <h3 className="text-xl font-bold leading-snug">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                      <div className="inline-flex items-center gap-2 pt-4">
                        <div className="h-1 w-4 bg-primary rounded-full" />
                        <p className="text-sm text-primary font-semibold">{item.highlight}</p>
                      </div>
                    </div>
                  </GlowCard>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Button variant="accent" size="lg" asChild className="text-lg">
              <Link to="/pilot">Activate Your AI Team</Link>
            </Button>
          </motion.div>
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

      {/* Integration Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative">
            <iframe
              src="https://player.cloudinary.com/embed/?cloud_name=dm6naju6a&public_id=unicorn-1763185568755_online-video-cutter.com_zfec7d&profile=cld-default&autoplay=true&loop=true&muted=true&controls=false"
              className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] object-cover opacity-20 pointer-events-none z-0"
              allow="autoplay"
              style={{ border: 'none' }}
            />

            <div className="relative z-10 text-center">
              <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
                Seamlessly <span className="bg-gradient-primary bg-clip-text text-transparent">connects</span> with your stack
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Our AI agents integrate with the tools you already use. CRM, calendars, messaging platforms — all working in harmony.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3 lg:grid-cols-4">
            <div className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm text-center">
              <MessageSquare className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground">Messaging</h3>
            </div>

            <div className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm text-center">
              <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground">Voice</h3>
            </div>

            <div className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm text-center">
              <Globe className="h-8 w-8 text-cyan mx-auto mb-3" />
              <h3 className="font-semibold text-foreground">Web</h3>
            </div>

            <div className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm text-center">
              <BarChart3 className="h-8 w-8 text-cyan mx-auto mb-3" />
              <h3 className="font-semibold text-foreground">Analytics</h3>
            </div>
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

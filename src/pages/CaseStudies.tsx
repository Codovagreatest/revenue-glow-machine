import { Button } from "@/components/ui/button";
import { Hero } from "@/components/ui/hero-1";
import { Navigation } from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowLeft, TrendingUp, Clock, BarChart3, Zap } from "lucide-react";

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />

      {/* Hero Section */}
      <div className="pt-20">
        <Hero
          eyebrow="Real Results • Real Businesses"
          title="Proven success stories"
          subtitle="See how businesses like yours are capturing more revenue, reducing costs, and never missing a lead again with our 24/7 AI automation."
          ctaLabel="Start Your Pilot"
          ctaHref="/pilot"
        />
      </div>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Case Study Cards with Premium Styling */}
          <div className="space-y-12">
            {/* Case Study 1 */}
            <div className="grid gap-8 rounded-3xl border border-primary/30 bg-gradient-card backdrop-blur-sm p-8 shadow-glow md:grid-cols-2 md:p-12">
              <div className="space-y-6">
                <div>
                  <div className="mb-2 inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    Healthcare
                  </div>
                  <h2 className="mb-4 text-4xl font-bold text-foreground font-ubuntu">Local Clinic</h2>
                  <p className="text-xl text-muted-foreground">
                    21-day pilot captured 38 bookings with 3.2x ROI
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">Problem</h3>
                    <p className="text-sm text-muted-foreground">
                      Missing 40% of after-hours calls, leading to lost patient bookings and 
                      revenue going to competitors who answered first.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">Solution</h3>
                    <p className="text-sm text-muted-foreground">
                      Deployed AI voice caller for after-hours + WhatsApp bot for instant booking. 
                      Integrated with existing scheduling system.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">Implementation</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Day 1-3: Setup & voice script development</li>
                      <li>• Day 4-7: WhatsApp bot + calendar integration</li>
                      <li>• Day 8-14: Ramped to 60% after-hours coverage</li>
                      <li>• Day 15-21: Optimization & final reporting</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm">
                  <h3 className="mb-6 text-xl font-bold text-foreground">Results</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="mb-2 text-5xl font-bold text-primary">38</div>
                      <p className="text-sm text-muted-foreground">New patient bookings in 21 days</p>
                    </div>
                    <div>
                      <div className="mb-2 text-5xl font-bold text-primary">3.2x</div>
                      <p className="text-sm text-muted-foreground">Return on investment</p>
                    </div>
                    <div>
                      <div className="mb-2 text-5xl font-bold text-primary">14%</div>
                      <p className="text-sm text-muted-foreground">Increase in after-hours bookings</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm">
                  <p className="mb-2 text-sm font-medium text-primary">Client Testimonial</p>
                  <p className="italic text-foreground">
                    "We went from missing calls every night to capturing bookings 24/7. 
                    The ROI was obvious within the first week."
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">— Dr. Sarah Chen, Practice Manager</p>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="grid gap-8 rounded-3xl border border-border bg-card/50 p-8 backdrop-blur-sm md:grid-cols-2 md:p-12">
              <div className="space-y-6">
                <div>
                  <div className="mb-2 inline-block rounded-lg bg-cyan/10 px-3 py-1 text-sm font-medium text-cyan">
                    SaaS
                  </div>
                  <h2 className="mb-4 text-4xl font-bold text-foreground">B2B Software Company</h2>
                  <p className="text-xl text-muted-foreground">
                    14% uplift in demo bookings within first month
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">Problem</h3>
                    <p className="text-sm text-muted-foreground">
                      High-intent leads from global markets arriving outside business hours. 
                      Competitors booking demos first.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">Solution</h3>
                    <p className="text-sm text-muted-foreground">
                      Website voice agent + LinkedIn DM bot with instant calendar booking. 
                      Qualification flow based on company size and use case.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">Metrics Tracked</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Demo booking velocity</li>
                      <li>• Lead qualification accuracy</li>
                      <li>• After-hours conversion rate</li>
                      <li>• Sales team time saved</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl border border-border bg-card/50 p-8">
                  <h3 className="mb-6 text-xl font-bold text-foreground">Impact</h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <TrendingUp className="mb-2 h-8 w-8 text-primary" />
                      <div className="mb-1 text-2xl font-bold text-primary">+14%</div>
                      <p className="text-xs text-muted-foreground">Demo bookings</p>
                    </div>
                    <div>
                      <Clock className="mb-2 h-8 w-8 text-primary" />
                      <div className="mb-1 text-2xl font-bold text-primary">20hrs</div>
                      <p className="text-xs text-muted-foreground">Sales time saved/week</p>
                    </div>
                    <div>
                      <BarChart3 className="mb-2 h-8 w-8 text-primary" />
                      <div className="mb-1 text-2xl font-bold text-primary">92%</div>
                      <p className="text-xs text-muted-foreground">Lead qualification accuracy</p>
                    </div>
                    <div>
                      <Zap className="mb-2 h-8 w-8 text-primary" />
                      <div className="mb-1 text-2xl font-bold text-primary">&lt;5min</div>
                      <p className="text-xs text-muted-foreground">Avg response time</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-card/50 p-6">
                  <p className="mb-2 text-sm font-medium text-primary">Client Testimonial</p>
                  <p className="italic text-foreground">
                    "Global leads used to go cold overnight. Now we're booking demos in real-time 
                    across all time zones."
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">— Michael Park, Head of Sales</p>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="grid gap-8 rounded-3xl border border-border bg-card/50 p-8 backdrop-blur-sm md:grid-cols-2 md:p-12">
              <div className="space-y-6">
                <div>
                  <div className="mb-2 inline-block rounded-lg bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                    E-commerce
                  </div>
                  <h2 className="mb-4 text-4xl font-bold text-foreground">Online Retail Brand</h2>
                  <p className="text-xl text-muted-foreground">
                    45% reduction in support costs with automated responses
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">Problem</h3>
                    <p className="text-sm text-muted-foreground">
                      Support team overwhelmed with repetitive questions about order status, 
                      shipping, and returns. High cost per ticket.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">Solution</h3>
                    <p className="text-sm text-muted-foreground">
                      Instagram + Facebook Messenger bots handling FAQ, order tracking, 
                      and return initiation. Human handoff for complex issues.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">Key Features</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Order status lookup automation</li>
                      <li>• Return & exchange flow</li>
                      <li>• Product recommendation engine</li>
                      <li>• Sentiment-based escalation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl border border-border bg-card/50 p-8">
                  <h3 className="mb-6 text-xl font-bold text-foreground">Business Impact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-lg bg-background/50 p-4">
                      <span className="text-sm text-muted-foreground">Support Cost</span>
                      <span className="font-bold text-primary">-45%</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-background/50 p-4">
                      <span className="text-sm text-muted-foreground">Response Time</span>
                      <span className="font-bold text-primary">Instant</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-background/50 p-4">
                      <span className="text-sm text-muted-foreground">Tickets Automated</span>
                      <span className="font-bold text-primary">78%</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-background/50 p-4">
                      <span className="text-sm text-muted-foreground">Customer Satisfaction</span>
                      <span className="font-bold text-primary">+22%</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-card/50 p-6">
                  <p className="mb-2 text-sm font-medium text-primary">Client Testimonial</p>
                  <p className="italic text-foreground">
                    "We cut our support costs in half while improving response times. 
                    Our team can now focus on complex issues that need a human touch."
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">— Jessica Rodriguez, Operations Director</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 rounded-3xl border border-primary/30 bg-gradient-card backdrop-blur-sm p-12 text-center shadow-glow">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Ready to see similar results?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Start your 21-day pilot and prove ROI in 3 weeks — or we work for free.
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

export default CaseStudies;

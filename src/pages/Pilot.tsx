import { Button } from "@/components/ui/button";
import { Hero } from "@/components/ui/hero-1";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { Zap, ArrowLeft, Calendar, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const Pilot = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Pilot request submitted! We'll contact you within 24 hours.");
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center space-x-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground font-ubuntu">24/7 Revenue Machine</span>
          </Link>
          
          <Button variant="ghost" size="sm" asChild>
            <Link to="/contact">Need Help?</Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Button variant="ghost" className="mb-8" asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Column - Info */}
            <div className="space-y-8">
              <div>
                <div className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-bold text-accent animate-pulse-glow">
                  LIMITED: Only 10 spots this month
                </div>
                <h1 className="mb-4 text-5xl font-bold text-foreground md:text-6xl font-ubuntu">
                  Book Your <span className="text-primary">21-Day Pilot</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Prove ROI in 21 days with measurable bookings and revenue captured. 
                  Setup fee $997 • Monthly $497 (only if you keep it)
                </p>
              </div>

              {/* What's Included */}
              <div className="rounded-2xl border border-primary/30 bg-gradient-card backdrop-blur-sm p-8 shadow-glow">
                <h2 className="mb-6 text-2xl font-bold text-foreground">What's included in your pilot</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">Complete Setup (Days 1-3)</h3>
                      <p className="text-sm text-muted-foreground">
                        Kickoff call, access collection, and initial audit of your lead channels
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">Build & Deploy (Days 4-7)</h3>
                      <p className="text-sm text-muted-foreground">
                        Chat bot flows, voice scripts, calendar integration, and analytics setup
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">Optimize & Scale (Days 8-14)</h3>
                      <p className="text-sm text-muted-foreground">
                        Ramp traffic to 50%, daily monitoring, and A/B testing
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">Final Review (Days 15-21)</h3>
                      <p className="text-sm text-muted-foreground">
                        ROI report, optimization recommendations, and growth plan
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantee */}
              <div className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm">
                <h3 className="mb-2 text-lg font-bold text-foreground">Our 3x ROI Guarantee</h3>
                <p className="text-sm text-muted-foreground">
                  If we don't make you at least 3x your investment in the first 30 days, 
                  we'll work for free until we do.
                </p>
              </div>

              {/* Success Metrics */}
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="text-center">
                  <div className="mb-1 text-3xl font-bold text-primary">8-15%</div>
                  <div className="text-xs text-muted-foreground">Late-hour conversion uplift</div>
                </div>
                <div className="text-center">
                  <div className="mb-1 text-3xl font-bold text-primary">&lt;10%</div>
                  <div className="text-xs text-muted-foreground">After-hours lead loss</div>
                </div>
                <div className="text-center">
                  <div className="mb-1 text-3xl font-bold text-primary">72hr</div>
                  <div className="text-xs text-muted-foreground">Setup timeline</div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="rounded-3xl border border-border bg-gradient-card backdrop-blur-sm p-8 shadow-glow lg:p-12">
              <div className="mb-8">
                <Calendar className="mb-4 h-12 w-12 text-primary" />
                <h2 className="mb-2 text-3xl font-bold text-foreground">Schedule Your Pilot</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll contact you within 24 hours to schedule your kickoff call.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input 
                    id="name" 
                    placeholder="John Smith" 
                    required 
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name *</Label>
                  <Input 
                    id="company" 
                    placeholder="Your Company Inc." 
                    required 
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@company.com" 
                    required 
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+1 (555) 123-4567" 
                    required 
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="channel">Top Lead Channel *</Label>
                  <select 
                    id="channel" 
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select a channel</option>
                    <option value="instagram">Instagram</option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="telegram">Telegram</option>
                    <option value="website">Website</option>
                    <option value="phone">Phone Calls</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="leads">Approximate Monthly Leads</Label>
                  <Input 
                    id="leads" 
                    type="number" 
                    placeholder="e.g., 500" 
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Notes (Optional)</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your biggest pain point with lead management..."
                    className="min-h-[100px] bg-background/50"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full text-lg">
                  Book Your Pilot — $997 Setup
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  By submitting this form, you agree to be contacted by our team. 
                  We respect your privacy and will never share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pilot;

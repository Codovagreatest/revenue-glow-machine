import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { Zap, ArrowLeft, Mail, Phone, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent! We'll respond within 24 hours.");
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center space-x-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">24/7 Revenue Machine</span>
          </Link>
          
          <Button variant="hero" size="sm" asChild>
            <Link to="/pilot">Start Pilot</Link>
          </Button>
        </div>
      </nav>

      {/* Contact Section */}
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
                <h1 className="mb-4 text-5xl font-bold text-foreground md:text-6xl">
                  Let's <span className="text-primary">talk</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Book a demo, ask a question, or start your 21-day pilot. 
                  We typically respond within 24 hours.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4 rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm">
                  <Mail className="h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Email</h3>
                    <p className="text-sm text-muted-foreground">support@example.com</p>
                    <p className="text-xs text-muted-foreground">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm">
                  <Phone className="h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Phone</h3>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-xs text-muted-foreground">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm">
                  <MessageSquare className="h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Live Chat</h3>
                    <p className="text-sm text-muted-foreground">Available on our website</p>
                    <p className="text-xs text-muted-foreground">Instant responses during business hours</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="rounded-2xl border border-primary/30 bg-gradient-radial p-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Quick Actions</h2>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/pilot">
                      <Zap className="mr-2 h-4 w-4" />
                      Book 21-Day Pilot ($997)
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/pricing">
                      <Mail className="mr-2 h-4 w-4" />
                      View Pricing & Plans
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/case-studies">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Read Case Studies
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Office Hours */}
              <div className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm">
                <h3 className="mb-3 font-semibold text-foreground">Office Hours</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-foreground">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday</span>
                    <span className="text-foreground">Closed</span>
                  </div>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  * Our AI systems run 24/7, even when we're not in the office!
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="rounded-3xl border border-border bg-card/50 p-8 backdrop-blur-sm lg:p-12">
              <div className="mb-8">
                <h2 className="mb-2 text-3xl font-bold text-foreground">Send us a message</h2>
                <p className="text-muted-foreground">
                  Fill out the form and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      required 
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Smith" 
                      required 
                      className="bg-background/50"
                    />
                  </div>
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
                  <Label htmlFor="company">Company Name</Label>
                  <Input 
                    id="company" 
                    placeholder="Your Company Inc." 
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <select 
                    id="subject" 
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select a subject</option>
                    <option value="demo">Request a Demo</option>
                    <option value="pilot">Start a Pilot</option>
                    <option value="pricing">Pricing Question</option>
                    <option value="technical">Technical Question</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your business and how we can help..."
                    className="min-h-[150px] bg-background/50"
                    required
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full text-lg">
                  Send Message
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

export default Contact;

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import codavaLogo from "@/assets/codova-logo.png";

export const Navigation = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="rounded-2xl border border-primary/20 bg-gradient-nav backdrop-blur-xl shadow-premium">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/30 transition-all duration-300" />
              <img 
                src={codavaLogo} 
                alt="Codova Logo" 
                className="h-20 w-auto relative z-10 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          
          <div className="hidden items-center space-x-8 md:flex font-roboto">
            <Link 
              to="/" 
              className="text-sm text-foreground/70 transition-all hover:text-primary relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
            </Link>
            <Link 
              to="/services" 
              className="text-sm text-foreground/70 transition-all hover:text-primary relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
            </Link>
            <Link 
              to="/pricing" 
              className="text-sm text-foreground/70 transition-all hover:text-primary relative group"
            >
              Pricing
              <span className="absolute -bottom-1 left-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
            </Link>
            <Link 
              to="/case-studies" 
              className="text-sm text-foreground/70 transition-all hover:text-primary relative group"
            >
              Case Studies
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
            </Link>
            <Link 
              to="/contact" 
              className="text-sm text-foreground/70 transition-all hover:text-primary relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
            </Link>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm" 
              asChild
              className="hidden md:inline-flex hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <Link to="/contact">Book Demo</Link>
            </Button>
            <Button 
              size="sm" 
              asChild
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 font-medium"
            >
              <Link to="/pilot">Start Pilot</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  setup: string;
  monthly: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
  ctaText: string;
  onCTAClick?: () => void;
}

export const PricingCard = ({ 
  title, 
  setup, 
  monthly, 
  features, 
  highlight, 
  badge,
  ctaText,
  onCTAClick 
}: PricingCardProps) => {
  return (
    <Card 
      className={`relative overflow-hidden p-8 transition-all duration-300 ${
        highlight 
          ? "border-primary bg-card shadow-glow scale-105" 
          : "border-border bg-card/50 backdrop-blur-sm hover:border-primary/30"
      }`}
    >
      {badge && (
        <div className="absolute -right-12 top-6 rotate-45 bg-accent px-12 py-1 text-xs font-bold text-accent-foreground">
          {badge}
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="mb-2 text-2xl font-bold text-foreground">{title}</h3>
        <div className="mb-4 space-y-1">
          <div className="flex items-baseline">
            <span className="text-4xl font-bold text-primary">{setup}</span>
            <span className="ml-2 text-sm text-muted-foreground">setup</span>
          </div>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-foreground">{monthly}</span>
            <span className="ml-2 text-sm text-muted-foreground">/month</span>
          </div>
        </div>
      </div>
      
      <ul className="mb-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm text-foreground/90">
            <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary" />
            {feature}
          </li>
        ))}
      </ul>
      
      <Button 
        variant={highlight ? "default" : "outline"}
        className="w-full"
        size="lg"
        onClick={onCTAClick}
      >
        {ctaText}
      </Button>
    </Card>
  );
};

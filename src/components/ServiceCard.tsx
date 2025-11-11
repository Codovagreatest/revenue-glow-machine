import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  onCTAClick?: () => void;
}

export const ServiceCard = ({ icon, title, description, features, ctaText, onCTAClick }: ServiceCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-border bg-card/50 backdrop-blur-sm p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-glow">
      <div className="absolute inset-0 bg-gradient-radial opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative z-10">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
          <img src={icon} alt={title} className="h-12 w-12 object-contain" />
        </div>
        
        <h3 className="mb-3 text-2xl font-bold text-foreground">{title}</h3>
        <p className="mb-6 text-muted-foreground">{description}</p>
        
        <ul className="mb-6 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-foreground/90">
              <span className="mr-2 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>
        
        <Button 
          variant="ghost" 
          className="group/btn w-full justify-between text-primary hover:text-primary-glow"
          onClick={onCTAClick}
        >
          {ctaText}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Button>
      </div>
    </Card>
  );
};

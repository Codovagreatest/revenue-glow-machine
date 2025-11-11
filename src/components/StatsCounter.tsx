import { useEffect, useState } from "react";

interface StatsCounterProps {
  value: string;
  label: string;
  suffix?: string;
}

export const StatsCounter = ({ value, label, suffix = "" }: StatsCounterProps) => {
  const [count, setCount] = useState(0);
  const targetValue = parseInt(value.replace(/\D/g, ''));

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = targetValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [targetValue]);

  return (
    <div className="text-center">
      <div className="mb-2 text-4xl font-bold text-primary">
        {count}{suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

'use client'
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface GradientCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
}

export const GradientCard = ({
  icon,
  title,
  description,
  linkText = "Learn More",
  linkHref = "#"
}: GradientCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = -(y / rect.height) * 5;
      const rotateY = (x / rect.width) * 5;
      setRotation({ x: rotateX, y: rotateY });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative rounded-3xl overflow-hidden w-full h-full font-roboto"
      style={{
        minHeight: "400px",
        transformStyle: "preserve-3d",
        backgroundColor: "hsl(var(--card))",
        boxShadow: "0 -10px 100px 10px hsl(var(--primary) / 0.15), 0 0 10px 0 rgba(0, 0, 0, 0.5)",
      }}
      initial={{ y: 0 }}
      animate={{
        y: isHovered ? -5 : 0,
        rotateX: rotation.x,
        rotateY: rotation.y,
        perspective: 1000,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Glass reflection */}
      <motion.div
        className="absolute inset-0 z-35 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 80%, rgba(255,255,255,0.05) 100%)",
          backdropFilter: "blur(2px)",
        }}
        animate={{
          opacity: isHovered ? 0.7 : 0.5,
        }}
      />

      {/* Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-card to-card" />

      {/* Glow effects */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-2/3 z-20"
        style={{
          background: `radial-gradient(ellipse at bottom, hsl(var(--primary) / 0.5) -10%, transparent 70%)`,
          filter: "blur(40px)",
        }}
        animate={{
          opacity: isHovered ? 0.9 : 0.8,
        }}
      />

      {/* Border glow */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] z-25"
        style={{
          background: "linear-gradient(90deg, transparent 0%, hsl(var(--primary)) 50%, transparent 100%)",
        }}
        animate={{
          boxShadow: isHovered
            ? "0 0 20px 4px hsl(var(--primary) / 0.8)"
            : "0 0 15px 3px hsl(var(--primary) / 0.6)",
        }}
      />

      {/* Content */}
      <motion.div className="relative flex flex-col h-full p-8 z-40">
        {/* Icon */}
        {icon && (
          <motion.div
            className="w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20"
            animate={{
              boxShadow: isHovered
                ? "0 8px 16px -2px hsl(var(--primary) / 0.3)"
                : "0 6px 12px -2px hsl(var(--primary) / 0.2)",
            }}
          >
            {icon}
          </motion.div>
        )}

        {/* Text content */}
        <div className="mb-auto">
          <h3 className="text-2xl font-semibold text-foreground mb-3 tracking-tight">
            {title}
          </h3>
          <p className="text-sm mb-6 text-muted-foreground leading-relaxed">
            {description}
          </p>

          {/* Link */}
          <a
            href={linkHref}
            className="inline-flex items-center text-primary text-sm font-medium group"
          >
            {linkText}
            <motion.svg
              className="ml-1 w-4 h-4"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{
                x: isHovered ? 4 : 0
              }}
            >
              <path
                d="M1 8H15M15 8L8 1M15 8L8 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

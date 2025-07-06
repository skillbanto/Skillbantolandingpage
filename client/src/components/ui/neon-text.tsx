import { forwardRef, HTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface NeonTextProps extends HTMLAttributes<HTMLDivElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  color?: "primary" | "secondary" | "accent" | "rainbow";
  intensity?: number;
  animated?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
}

const NeonText = forwardRef<HTMLDivElement, NeonTextProps>(
  (
    { 
      as: Component = "div", 
      className, 
      children, 
      color = "primary", 
      intensity = 1,
      animated = true,
      size = "md",
      ...props 
    }, 
    ref
  ) => {
    // Color mapping
    const colorStyles = {
      primary: {
        text: "text-primary",
        glow: "0 0 10px rgba(139, 92, 246, 0.8), 0 0 20px rgba(139, 92, 246, 0.5), 0 0 30px rgba(139, 92, 246, 0.3)"
      },
      secondary: {
        text: "text-secondary",
        glow: "0 0 10px rgba(34, 211, 238, 0.8), 0 0 20px rgba(34, 211, 238, 0.5), 0 0 30px rgba(34, 211, 238, 0.3)"
      },
      accent: {
        text: "text-accent",
        glow: "0 0 10px rgba(217, 70, 239, 0.8), 0 0 20px rgba(217, 70, 239, 0.5), 0 0 30px rgba(217, 70, 239, 0.3)"
      },
      rainbow: {
        text: "text-white",
        glow: "0 0 10px rgba(139, 92, 246, 0.8), 0 0 20px rgba(34, 211, 238, 0.5), 0 0 30px rgba(217, 70, 239, 0.3)"
      }
    };
    
    // Size mapping
    const sizeClasses = {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl"
    };
    
    const { text, glow } = colorStyles[color];
    const sizeClass = sizeClasses[size];
    
    // Adjust glow based on intensity
    const adjustedGlow = glow.replace(/[\d.]+/g, (match) => {
      const value = parseFloat(match);
      return (value * intensity).toString();
    });

    // Rainbow animation for text
    const rainbowAnimation = color === "rainbow" ? {
      background: [
        "linear-gradient(45deg, #6366f1, #8b5cf6, #d946ef)",
        "linear-gradient(45deg, #8b5cf6, #d946ef, #06b6d4)",
        "linear-gradient(45deg, #d946ef, #06b6d4, #6366f1)",
        "linear-gradient(45deg, #06b6d4, #6366f1, #8b5cf6)",
      ],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "loop"
      }
    } : {};

    // Pulse animation for glow
    const pulseAnimation = animated ? {
      textShadow: [
        adjustedGlow,
        adjustedGlow.replace(/[\d.]+/g, (match) => {
          const value = parseFloat(match);
          return (value * 0.7).toString();
        }),
        adjustedGlow
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    } : {};

    return (
      <motion.div
        ref={ref}
        className={cn(
          "font-bold",
          text,
          sizeClass,
          className
        )}
        style={{
          textShadow: adjustedGlow,
          ...(color === "rainbow" && {
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          })
        }}
        animate={{
          ...pulseAnimation,
          ...rainbowAnimation
        }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

NeonText.displayName = "NeonText";

export { NeonText };

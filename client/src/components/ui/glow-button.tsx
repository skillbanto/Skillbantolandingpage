import { forwardRef, ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  glowColor?: "primary" | "secondary" | "accent" | "rainbow";
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  (
    { 
      className, 
      children, 
      glowColor = "primary", 
      variant = "solid",
      size = "md",
      fullWidth = false,
      ...props 
    }, 
    ref
  ) => {
    // Size classes
    const sizeClasses = {
      sm: "py-1 px-3 text-sm",
      md: "py-2 px-5 text-base",
      lg: "py-3 px-8 text-lg"
    };
    
    // Variant classes
    const variants = {
      solid: {
        primary: "bg-primary text-white hover:bg-primary/90",
        secondary: "bg-secondary text-white hover:bg-secondary/90",
        accent: "bg-accent text-white hover:bg-accent/90",
        rainbow: "bg-gradient-to-r from-primary via-secondary to-accent text-white"
      },
      outline: {
        primary: "bg-transparent border border-primary text-primary hover:bg-primary/10",
        secondary: "bg-transparent border border-secondary text-secondary hover:bg-secondary/10",
        accent: "bg-transparent border border-accent text-accent hover:bg-accent/10",
        rainbow: "bg-transparent border border-primary text-white hover:bg-primary/10"
      },
      ghost: {
        primary: "bg-transparent text-primary hover:bg-primary/10",
        secondary: "bg-transparent text-secondary hover:bg-secondary/10",
        accent: "bg-transparent text-accent hover:bg-accent/10",
        rainbow: "bg-transparent text-white hover:bg-primary/10"
      }
    };

    // Glow effects
    const glowEffects = {
      primary: {
        color: "rgba(139, 92, 246, 0.7)"
      },
      secondary: {
        color: "rgba(34, 211, 238, 0.7)"
      },
      accent: {
        color: "rgba(217, 70, 239, 0.7)"
      },
      rainbow: {
        color: "rgba(139, 92, 246, 0.7)" // Base color, will be animated with rainbow
      }
    };

    const currentGlow = glowEffects[glowColor];
    const variantClasses = variants[variant][glowColor];

    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative rounded-lg font-medium",
          "transition-all duration-300 ease-out",
          "focus:outline-none focus:ring-2 focus:ring-offset-2",
          `focus:ring-${glowColor === 'rainbow' ? 'primary' : glowColor}`,
          "transform hover:-translate-y-1",
          sizeClasses[size],
          variantClasses,
          fullWidth ? "w-full" : "",
          "overflow-hidden",
          className
        )}
        whileHover={{ 
          boxShadow: `0 0 15px ${currentGlow.color}` 
        }}
        whileTap={{ 
          scale: 0.98,
          boxShadow: `0 0 5px ${currentGlow.color}` 
        }}
        {...props}
      >
        {/* Rainbow glow effect */}
        {glowColor === "rainbow" && (
          <motion.span
            className="absolute inset-0 -z-10 opacity-60"
            animate={{
              background: [
                "linear-gradient(90deg, #6366f1, #8b5cf6, #d946ef, #06b6d4, #6366f1)",
                "linear-gradient(180deg, #6366f1, #8b5cf6, #d946ef, #06b6d4, #6366f1)",
                "linear-gradient(270deg, #6366f1, #8b5cf6, #d946ef, #06b6d4, #6366f1)",
                "linear-gradient(360deg, #6366f1, #8b5cf6, #d946ef, #06b6d4, #6366f1)",
              ]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        )}
        
        {/* Button content */}
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }
);

GlowButton.displayName = "GlowButton";

export { GlowButton };

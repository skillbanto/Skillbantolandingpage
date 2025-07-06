import { forwardRef, HTMLAttributes, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

export interface FloatingPanelProps extends HTMLAttributes<HTMLDivElement> {
  color?: "primary" | "secondary" | "accent" | "neutral";
  intensity?: number;
  floatAmount?: number;
  floatDuration?: number;
}

const FloatingPanel = forwardRef<HTMLDivElement, FloatingPanelProps>(
  (
    { 
      className, 
      children, 
      color = "primary", 
      intensity = 0.3,
      floatAmount = 10,
      floatDuration = 4,
      ...props 
    }, 
    ref
  ) => {
    const controls = useAnimation();
    const panelRef = useRef<HTMLDivElement>(null);
    
    // Start floating animation on mount
    useEffect(() => {
      controls.start({
        y: [0, -floatAmount, 0],
        transition: {
          duration: floatDuration,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }
      });
    }, [controls, floatAmount, floatDuration]);
    
    // Color mapping
    const colorClasses = {
      primary: {
        border: "border-primary/30",
        bg: "bg-primary/5",
        glow: "rgba(139, 92, 246, 0.2)"
      },
      secondary: {
        border: "border-secondary/30",
        bg: "bg-secondary/5",
        glow: "rgba(34, 211, 238, 0.2)"
      },
      accent: {
        border: "border-accent/30",
        bg: "bg-accent/5",
        glow: "rgba(217, 70, 239, 0.2)"
      },
      neutral: {
        border: "border-gray-700/50",
        bg: "bg-gray-900/50",
        glow: "rgba(50, 50, 60, 0.3)"
      }
    };
    
    const { border, bg, glow } = colorClasses[color];

    return (
      <motion.div
        ref={panelRef}
        className={cn(
          "relative rounded-xl overflow-hidden",
          "backdrop-blur-md",
          border,
          bg,
          className
        )}
        style={{
          boxShadow: `0 0 20px ${glow}`
        }}
        animate={controls}
        {...props}
      >
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: `linear-gradient(
              45deg,
              transparent 0%,
              transparent 40%,
              rgba(255, 255, 255, ${intensity}) 50%,
              transparent 60%,
              transparent 100%
            )`,
            backgroundSize: "200% 200%"
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    );
  }
);

FloatingPanel.displayName = "FloatingPanel";

export { FloatingPanel };

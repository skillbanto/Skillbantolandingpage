import { forwardRef, HTMLAttributes, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface HolographicPanelProps extends HTMLAttributes<HTMLDivElement> {
  color?: "primary" | "secondary" | "accent" | "rainbow";
  intensity?: number;
  animated?: boolean;
}

const HolographicPanel = forwardRef<HTMLDivElement, HolographicPanelProps>(
  (
    { 
      className, 
      children, 
      color = "primary", 
      intensity = 0.5,
      animated = true,
      ...props 
    }, 
    ref
  ) => {
    const panelRef = useRef<HTMLDivElement>(null);
    
    // Handle mouse movement for holographic effect
    useEffect(() => {
      if (!panelRef.current || !animated) return;
      
      const panel = panelRef.current;
      
      const handleMouseMove = (e: MouseEvent) => {
        const rect = panel.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Calculate percentages
        const percentX = x / rect.width;
        const percentY = y / rect.height;
        
        // Update CSS variables
        panel.style.setProperty('--mouse-x', `${percentX}`);
        panel.style.setProperty('--mouse-y', `${percentY}`);
      };
      
      panel.addEventListener('mousemove', handleMouseMove);
      
      // Cleanup
      return () => {
        panel.removeEventListener('mousemove', handleMouseMove);
      };
    }, [animated]);
    
    // Color mapping
    const colorStyles = {
      primary: {
        border: "border-primary/30",
        bgBase: "bg-primary/5",
        gradient: `linear-gradient(
          130deg,
          rgba(99, 102, 241, ${intensity * 0.05}) 0%,
          rgba(139, 92, 246, ${intensity * 0.1}) 50%,
          rgba(99, 102, 241, ${intensity * 0.05}) 100%
        )`
      },
      secondary: {
        border: "border-secondary/30",
        bgBase: "bg-secondary/5",
        gradient: `linear-gradient(
          130deg,
          rgba(6, 182, 212, ${intensity * 0.05}) 0%,
          rgba(34, 211, 238, ${intensity * 0.1}) 50%,
          rgba(6, 182, 212, ${intensity * 0.05}) 100%
        )`
      },
      accent: {
        border: "border-accent/30",
        bgBase: "bg-accent/5",
        gradient: `linear-gradient(
          130deg,
          rgba(217, 70, 239, ${intensity * 0.05}) 0%,
          rgba(232, 121, 249, ${intensity * 0.1}) 50%,
          rgba(217, 70, 239, ${intensity * 0.05}) 100%
        )`
      },
      rainbow: {
        border: "border-gray-700/30",
        bgBase: "bg-gray-900/10",
        gradient: `linear-gradient(
          130deg,
          rgba(99, 102, 241, ${intensity * 0.1}) 0%,
          rgba(34, 211, 238, ${intensity * 0.1}) 25%,
          rgba(217, 70, 239, ${intensity * 0.1}) 50%,
          rgba(249, 115, 22, ${intensity * 0.1}) 75%,
          rgba(99, 102, 241, ${intensity * 0.1}) 100%
        )`
      }
    };
    
    const { border, bgBase, gradient } = colorStyles[color];

    return (
      <motion.div
        ref={panelRef}
        className={cn(
          "relative rounded-xl overflow-hidden",
          "backdrop-blur-md",
          border,
          bgBase,
          className
        )}
        style={{
          background: gradient,
          '--mouse-x': '0.5',
          '--mouse-y': '0.5',
        } as React.CSSProperties}
        whileHover={animated ? { scale: 1.02 } : {}}
        {...props}
      >
        {/* Holographic overlay */}
        {animated && (
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(
                circle at calc(var(--mouse-x) * 100%) calc(var(--mouse-y) * 100%),
                rgba(255, 255, 255, ${intensity * 0.4}) 0%,
                transparent 50%
              )`
            }}
          />
        )}
        
        {/* Border glow */}
        <div 
          className="absolute inset-0 rounded-xl opacity-30"
          style={{
            boxShadow: `inset 0 0 20px rgba(255, 255, 255, ${intensity * 0.3})`
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

HolographicPanel.displayName = "HolographicPanel";

export { HolographicPanel };

import { forwardRef, HTMLAttributes, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface Card3DProps extends HTMLAttributes<HTMLDivElement> {
  glowColor?: "primary" | "secondary" | "accent" | "none";
  intensity?: number;
  rotationFactor?: number;
}

const Card3D = forwardRef<HTMLDivElement, Card3DProps>(
  (
    { 
      className, 
      children, 
      glowColor = "primary", 
      intensity = 0.5,
      rotationFactor = 10,
      ...props 
    }, 
    ref
  ) => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    
    // Color variables based on prop
    const glowMap = {
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      accent: "var(--accent)",
      none: "transparent"
    };
    
    const glowColorCss = glowMap[glowColor];
    
    // Handle mouse movement for 3D effect
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      const rotateY = ((mouseX - centerX) / centerX) * rotationFactor;
      const rotateX = ((centerY - mouseY) / centerY) * rotationFactor;
      
      setRotation({ x: rotateX, y: rotateY });
    };
    
    const handleMouseLeave = () => {
      setRotation({ x: 0, y: 0 });
      setIsHovered(false);
    };
    
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
    
    // Reset rotation when not hovered
    useEffect(() => {
      if (!isHovered) {
        setRotation({ x: 0, y: 0 });
      }
    }, [isHovered]);

    return (
      <motion.div
        ref={cardRef}
        className={cn(
          "relative overflow-hidden rounded-xl perspective-800",
          className
        )}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        style={{
          transformStyle: "preserve-3d"
        }}
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
          transition: { type: "spring", stiffness: 400, damping: 30 }
        }}
        {...props}
      >
        {/* Glow effect */}
        {glowColor !== "none" && (
          <motion.div
            className="absolute inset-0 rounded-xl -z-10"
            style={{
              background: `radial-gradient(circle at ${isHovered ? '50%' : '100%'} 50%, hsl(${glowColorCss}) ${intensity * 15}%, transparent 70%)`
            }}
            animate={{
              opacity: isHovered ? 0.3 : 0.1,
              scale: isHovered ? 1 : 0.8,
              transition: { duration: 0.3 }
            }}
          />
        )}
        
        {/* Card content */}
        <div 
          className="relative z-0 h-full w-full"
          style={{ transform: "translateZ(0)" }}
        >
          {children}
        </div>
      </motion.div>
    );
  }
);

Card3D.displayName = "Card3D";

export { Card3D };

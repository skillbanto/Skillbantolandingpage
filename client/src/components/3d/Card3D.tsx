import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card3D({ children, className = "" }: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to card
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top; // y position within the element
    
    // Calculate rotation based on mouse position
    // Convert to percentage of element width/height, then to degrees (-15 to 15)
    const rotX = ((y / rect.height) - 0.5) * -10; // Invert Y axis
    const rotY = ((x / rect.width) - 0.5) * 10;
    
    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative bg-white rounded-xl overflow-hidden transition-all duration-200 transform-gpu ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: "preserve-3d"
      }}
      whileHover={{ 
        boxShadow: "0 20px 25px -5px rgba(16, 185, 129, 0.1), 0 10px 10px -5px rgba(16, 185, 129, 0.04)" 
      }}
    >
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Highlight effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ 
          transform: "translateZ(-10px)",
          pointerEvents: "none"
        }}
      />
    </motion.div>
  );
}
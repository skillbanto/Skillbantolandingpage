import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

interface ScrollProgressIndicatorProps {
  color?: string;
  height?: number;
  zIndex?: number;
  position?: 'top' | 'bottom';
  showPercentage?: boolean;
  barStyle?: 'solid' | 'gradient' | 'glow';
}

const ScrollProgressIndicator: React.FC<ScrollProgressIndicatorProps> = ({
  color = '#4F46E5', // Default to indigo color
  height = 4,
  zIndex = 50,
  position = 'top',
  showPercentage = false,
  barStyle = 'gradient',
}) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Transform for percentage indicator position
  const xPos = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', 'calc(100% - 40px)']
  );
  
  const [scrollPercentage, setScrollPercentage] = useState(0);
  
  useEffect(() => {
    // Update scroll percentage for display
    const unsubscribe = scrollYProgress.on("change", value => {
      setScrollPercentage(Math.round(value * 100));
    });
    
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Determine bar styling based on the barStyle prop
  const getBarStyle = () => {
    switch (barStyle) {
      case 'gradient':
        return {
          backgroundImage: `linear-gradient(to right, ${color}, ${adjustColor(color, 30)})`,
          boxShadow: 'none',
        };
      case 'glow':
        return {
          backgroundColor: color,
          boxShadow: `0 0 10px ${color}, 0 0 5px ${color}`,
        };
      case 'solid':
      default:
        return {
          backgroundColor: color,
          boxShadow: 'none',
        };
    }
  };
  
  // Helper function to lighten/darken a color
  const adjustColor = (color: string, amount: number) => {
    // Simple implementation that works for hex colors
    if (color.startsWith('#')) {
      let hex = color.substring(1);
      if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }
      
      const num = parseInt(hex, 16);
      let r = (num >> 16) + amount;
      let g = ((num >> 8) & 0x00FF) + amount;
      let b = (num & 0x0000FF) + amount;
      
      r = Math.min(255, Math.max(0, r));
      g = Math.min(255, Math.max(0, g));
      b = Math.min(255, Math.max(0, b));
      
      return `#${(b | (g << 8) | (r << 16)).toString(16).padStart(6, '0')}`;
    }
    return color; // Return original color if not hex
  };

  return (
    <>
      <motion.div
        className="fixed left-0 right-0"
        style={{
          top: position === 'top' ? 0 : 'auto',
          bottom: position === 'bottom' ? 0 : 'auto',
          height,
          transformOrigin: 'left',
          scaleX,
          ...getBarStyle(),
          zIndex,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Optional decorative elements along the bar */}
        <div className="absolute right-0 top-0 h-full w-2 bg-white/20 rounded-full" />
        
        {/* Subtle pulsing element at the end of the progress bar */}
        <motion.div 
          className="absolute right-0 top-0 h-full aspect-square rounded-full" 
          style={{ backgroundColor: color }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 0.2, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop'
          }}
        />
      </motion.div>
      
      {showPercentage && (
        <motion.div 
          className="fixed bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-medium shadow-md border border-gray-100 flex items-center justify-center"
          style={{
            x: xPos,
            top: position === 'top' ? `calc(${height}px + 8px)` : 'auto',
            bottom: position === 'bottom' ? `calc(${height}px + 8px)` : 'auto',
            zIndex,
            color,
            width: '40px',
            height: '24px',
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            transition: { type: 'spring', stiffness: 300, damping: 20 }
          }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: `0 0 8px ${color}40`,
            transition: { duration: 0.2 }
          }}
        >
          <motion.span
            animate={{ 
              scale: scrollPercentage % 10 === 0 && scrollPercentage > 0 ? [1, 1.2, 1] : 1,
              transition: { duration: 0.4 }
            }}
          >
            {scrollPercentage}%
          </motion.span>
        </motion.div>
      )}
    </>
  );
};

export default ScrollProgressIndicator;
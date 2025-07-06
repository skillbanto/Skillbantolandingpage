import { useState } from 'react';
import { motion } from 'framer-motion';

interface DynamicButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent';
}

export default function DynamicButton({
  children,
  onClick,
  className = '',
  variant = 'primary'
}: DynamicButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Button base styles based on variant
  const getBaseStyles = () => {
    switch(variant) {
      case 'primary':
        return 'bg-primary text-white';
      case 'secondary':
        return 'bg-white text-primary border border-primary';
      case 'accent':
        return 'bg-accent text-white';
      default:
        return 'bg-primary text-white';
    }
  };
  
  return (
    <motion.button
      className={`relative overflow-hidden rounded-md py-3 px-6 font-medium transition-all duration-200 ${getBaseStyles()} ${className}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.03,
        boxShadow: '0 10px 20px rgba(16, 185, 129, 0.15)'
      }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.span 
        className="relative z-10"
        initial={{ y: 0 }}
        animate={{ y: isHovered ? -2 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
      
      {/* Animated background bubble effect */}
      <motion.div
        className={`absolute inset-0 ${
          variant === 'primary' 
            ? 'bg-primary-600' 
            : variant === 'secondary' 
              ? 'bg-primary/10' 
              : 'bg-accent/90'
        }`}
        style={{ borderRadius: '100%', scale: 0, x: '50%', y: '50%' }}
        animate={{
          scale: isHovered ? 3 : 0,
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.button>
  );
}
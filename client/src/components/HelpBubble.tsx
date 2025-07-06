import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, X } from 'lucide-react';

// Ensure proper import paths for the project structure

interface HelpBubbleProps {
  tip: string;
  position?: 'top' | 'right' | 'bottom' | 'left';
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const HelpBubble: React.FC<HelpBubbleProps> = ({
  tip,
  position = 'top',
  color = 'bg-blue-500',
  size = 'md',
  children
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const positionClasses = {
    top: 'bottom-full mb-2',
    right: 'left-full ml-2',
    bottom: 'top-full mt-2',
    left: 'right-full mr-2'
  };

  const sizeClasses = {
    sm: 'w-48',
    md: 'w-64',
    lg: 'w-80'
  };

  const iconAnimation = {
    hover: {
      scale: 1.1,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const bubbleAnimation = {
    initial: { opacity: 0, scale: 0.8, y: 5 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      y: 5,
      transition: {
        duration: 0.2
      } 
    }
  };

  return (
    <div className="relative inline-flex">
      {children}
      
      <motion.div 
        className="absolute -top-1 -right-1 z-10"
        whileHover="hover"
        animate={{ y: [0, -2, 0] }}
        transition={{ 
          y: { 
            repeat: Infinity, 
            duration: 1.5,
            ease: "easeInOut"
          }
        }}
      >
        <motion.button
          variants={iconAnimation}
          className={`rounded-full flex items-center justify-center w-6 h-6 ${color} text-white shadow-md hover:shadow-lg focus:outline-none`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Help"
        >
          {isOpen ? <X size={14} /> : <HelpCircle size={14} />}
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`absolute z-20 ${positionClasses[position]} ${sizeClasses[size]} rounded-lg p-3 shadow-lg ${color} text-white text-sm`}
            {...bubbleAnimation}
          >
            <div className="relative">
              {tip}

              {/* Triangle pointer */}
              <div 
                className={`absolute w-3 h-3 rotate-45 ${color} ${
                  position === 'top' ? 'top-full -mt-1.5 left-1/2 -translate-x-1/2' : 
                  position === 'right' ? 'right-full -mr-1.5 top-1/2 -translate-y-1/2' :
                  position === 'bottom' ? 'bottom-full -mb-1.5 left-1/2 -translate-x-1/2' :
                  'left-full -ml-1.5 top-1/2 -translate-y-1/2'
                }`}
              ></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HelpBubble;
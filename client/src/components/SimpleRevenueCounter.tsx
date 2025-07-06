import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SimpleRevenueCounterProps {
  initialValue?: number;
}

const SimpleRevenueCounter = ({ initialValue = 649368137 }: SimpleRevenueCounterProps) => {
  const [revenue, setRevenue] = useState(initialValue);
  const [showMoneyEffect, setShowMoneyEffect] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRevenue(prev => {
        const increase = Math.floor(Math.random() * 2000) + 1000; // Increase by 1000-3000
        setShowMoneyEffect(true);
        
        // Hide money effect after animation
        setTimeout(() => {
          setShowMoneyEffect(false);
        }, 1000);
        
        return prev + increase;
      });
    }, 4000); // Every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block">
      <motion.span
        key={revenue}
        initial={{ scale: 1.1, color: '#fbbf24' }}
        animate={{ scale: 1, color: '#ffffff' }}
        transition={{ duration: 0.5 }}
        className="font-bold"
      >
        {revenue.toLocaleString()}
      </motion.span>
      
      {/* Money Effect Animation */}
      <AnimatePresence>
        {showMoneyEffect && (
          <>
            {/* Floating money emojis */}
            {[...Array(3)].map((_, i) => (
              <motion.span
                key={`money-${revenue}-${i}`}
                className="absolute text-yellow-300 text-lg pointer-events-none"
                initial={{ 
                  opacity: 1, 
                  y: 0, 
                  x: (i - 1) * 20,
                  scale: 1 
                }}
                animate={{ 
                  opacity: 0, 
                  y: -30, 
                  scale: 1.5 
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 1, 
                  delay: i * 0.1 
                }}
                style={{
                  left: '50%',
                  top: '-10px',
                }}
              >
                💰
              </motion.span>
            ))}
            
            {/* Coin sparkle effect */}
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={`sparkle-${revenue}-${i}`}
                className="absolute text-yellow-400 text-sm pointer-events-none"
                initial={{ 
                  opacity: 1, 
                  scale: 0,
                  x: Math.random() * 40 - 20,
                  y: Math.random() * 20 - 10
                }}
                animate={{ 
                  opacity: 0, 
                  scale: 1,
                  y: -20
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.05 
                }}
                style={{
                  left: '50%',
                  top: '0px',
                }}
              >
                ✨
              </motion.span>
            ))}
          </>
        )}
      </AnimatePresence>
    </span>
  );
};

export default SimpleRevenueCounter;
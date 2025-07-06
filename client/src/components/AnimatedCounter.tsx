import { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({
  from,
  to,
  duration = 2,
  delay = 0,
  prefix = '',
  suffix = '',
  className = ''
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from);
  const nodeRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration,
        delay,
        onUpdate: (value) => setCount(Math.floor(value)),
        ease: 'easeOut'
      });
      
      return () => controls.stop();
    }
  }, [from, to, duration, delay, isInView]);
  
  return (
    <motion.div
      ref={nodeRef}
      className={`font-bold ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      {prefix}{count.toLocaleString()}{suffix}
    </motion.div>
  );
}
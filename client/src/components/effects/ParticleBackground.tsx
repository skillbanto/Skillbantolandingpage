import { useEffect, useRef, useState } from 'react';
import ParticleSystem from './ParticleSystem';

interface ParticleBackgroundProps {
  className?: string;
  colorScheme?: 'primary' | 'green' | 'blue' | 'rainbow';
  density?: 'low' | 'medium' | 'high';
  speed?: 'slow' | 'medium' | 'fast';
  size?: 'small' | 'medium' | 'large';
  interactive?: boolean;
  zIndex?: string;
}

const ParticleBackground = ({
  className = '',
  colorScheme = 'primary',
  density = 'medium',
  speed = 'medium',
  size = 'medium',
  interactive = true,
  zIndex = '-1'
}: ParticleBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particleCount, setParticleCount] = useState(50);
  
  // Calculate particle count based on container size and density
  useEffect(() => {
    const updateParticleCount = () => {
      if (!containerRef.current) return;
      
      const { width, height } = containerRef.current.getBoundingClientRect();
      const area = width * height;
      
      // Base density factor
      let densityFactor = 0.00005; // particles per pixel
      
      switch (density) {
        case 'low':
          densityFactor = 0.00002;
          break;
        case 'medium':
          densityFactor = 0.00005;
          break;
        case 'high':
          densityFactor = 0.0001;
          break;
        default:
          densityFactor = 0.00005;
      }
      
      const count = Math.max(20, Math.floor(area * densityFactor));
      setParticleCount(count);
    };
    
    updateParticleCount();
    window.addEventListener('resize', updateParticleCount);
    
    return () => {
      window.removeEventListener('resize', updateParticleCount);
    };
  }, [density]);
  
  return (
    <div 
      ref={containerRef}
      className={`relative ${className}`}
      style={{ zIndex }}
    >
      <ParticleSystem
        count={particleCount}
        colorScheme={colorScheme}
        speed={speed}
        size={size}
        interactive={interactive}
      />
    </div>
  );
};

export default ParticleBackground;
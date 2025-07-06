import React, { useState, useEffect, useRef } from 'react';

interface FloatingAnimationProps {
  children: React.ReactNode;
  className?: string;
  yAmount?: number;
  xAmount?: number;
  rotation?: number;
  duration?: number;
  delay?: number;
  easing?: string;
  pauseOnHover?: boolean;
}

const FloatingAnimation: React.FC<FloatingAnimationProps> = ({
  children,
  className = '',
  yAmount = 15,
  xAmount = 0,
  rotation = 0,
  duration = 6,
  delay = 0,
  easing = 'ease-in-out',
  pauseOnHover = true
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const animationKeyframeId = useRef<string>(`float-${Math.random().toString(36).substring(2, 9)}`);

  useEffect(() => {
    const keyframeId = animationKeyframeId.current;
    const styleElement = document.createElement('style');
    
    const keyframes = `
      @keyframes ${keyframeId} {
        0% {
          transform: translate(0px, 0px) rotate(0deg);
        }
        50% {
          transform: translate(${xAmount}px, ${yAmount}px) rotate(${rotation}deg);
        }
        100% {
          transform: translate(0px, 0px) rotate(0deg);
        }
      }
    `;
    
    styleElement.innerHTML = keyframes;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, [yAmount, xAmount, rotation]);

  return (
    <div
      ref={elementRef}
      className={`${className}`}
      style={{
        animation: (!pauseOnHover || !isHovering) 
          ? `${animationKeyframeId.current} ${duration}s ${easing} ${delay}s infinite`
          : 'none',
        transformOrigin: 'center center',
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {children}
    </div>
  );
};

export default FloatingAnimation;
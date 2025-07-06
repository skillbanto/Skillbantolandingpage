import { useEffect, useCallback, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationOptions {
  threshold?: number;
  root?: Element | null;
  once?: boolean;
}

type AnimationCallback = (
  element: Element,
  progress: number,
  direction: 'up' | 'down'
) => void;

export const useScrollAnimation = (
  targetRef: React.RefObject<HTMLElement>,
  callback: AnimationCallback,
  options: ScrollAnimationOptions = {}
) => {
  const { threshold = 0.2, root = null, once = false } = options;
  const [triggered, setTriggered] = useState(false);
  
  // Setup animation
  useEffect(() => {
    if (!targetRef.current) return;
    
    const element = targetRef.current;
    let scrollTrigger: ScrollTrigger;
    
    // Create the scroll trigger
    scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start: `top ${(1 - threshold) * 100}%`,
      end: `bottom ${threshold * 100}%`,
      markers: false, // Set to true for debugging
      onUpdate: (self) => {
        const direction = self.direction > 0 ? 'down' : 'up';
        
        // Skip if we're only doing this once and it's already been triggered
        if (once && triggered && direction === 'down') return;
        
        if (self.isActive && direction === 'down') {
          setTriggered(true);
        }
        
        // Call the animation callback with the element, progress, and direction
        callback(element, self.progress, direction);
      }
    });
    
    // Clean up
    return () => {
      if (scrollTrigger) {
        scrollTrigger.kill();
      }
    };
  }, [targetRef, callback, threshold, once, triggered]);
  
  // Function to manually refresh scroll triggers (useful after content changes)
  const refresh = useCallback(() => {
    ScrollTrigger.refresh();
  }, []);
  
  return { refresh, triggered };
};

// Utility functions for common animations
export const fadeInAnimation = (
  element: Element, 
  progress: number, 
  direction: 'up' | 'down'
) => {
  if (direction === 'down') {
    gsap.to(element, {
      opacity: progress,
      y: (1 - progress) * 50,
      duration: 0.5,
      ease: 'power2.out'
    });
  } else {
    gsap.to(element, {
      opacity: progress,
      y: (1 - progress) * 30,
      duration: 0.5,
      ease: 'power2.out'
    });
  }
};

export const scaleAnimation = (
  element: Element, 
  progress: number, 
  direction: 'up' | 'down'
) => {
  gsap.to(element, {
    scale: 0.8 + progress * 0.2,
    opacity: progress,
    duration: 0.4,
    ease: 'power2.out'
  });
};

export const rotateAnimation = (
  element: Element, 
  progress: number, 
  direction: 'up' | 'down'
) => {
  if (direction === 'down') {
    gsap.to(element, {
      rotationY: progress * 360,
      opacity: progress,
      duration: 0.5,
      ease: 'power2.out'
    });
  } else {
    gsap.to(element, {
      rotationY: progress * 360,
      opacity: progress,
      duration: 0.5,
      ease: 'power2.out'
    });
  }
};

// Custom 3D perspective animation for cards
export const perspectiveAnimation = (
  element: Element, 
  progress: number, 
  direction: 'up' | 'down'
) => {
  const tiltAmount = 20;
  
  if (direction === 'down') {
    gsap.to(element, {
      rotationX: (0.5 - progress) * tiltAmount,
      opacity: progress,
      duration: 0.5,
      ease: 'power2.out'
    });
  } else {
    gsap.to(element, {
      rotationX: (0.5 - progress) * tiltAmount,
      opacity: progress,
      duration: 0.5,
      ease: 'power2.out'
    });
  }
};

// Neon glow animation 
export const neonPulseAnimation = (
  element: Element, 
  progress: number, 
  direction: 'up' | 'down'
) => {
  if (progress > 0.5) {
    // Start the pulsing animation once it's sufficiently in view
    gsap.to(element, {
      boxShadow: '0 0 15px var(--primary), 0 0 30px var(--primary)',
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: 'sine.inOut'
    });
  } else {
    // Stop the animation when out of view
    gsap.killTweensOf(element);
    gsap.to(element, {
      boxShadow: '0 0 0px transparent',
      duration: 0.3
    });
  }
};

// Staggered children animation
export const staggerChildren = (
  parentElement: Element,
  childSelector: string,
  staggerAmount: number = 0.1,
  fromProps = { y: 50, opacity: 0 },
  toProps = { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
) => {
  const children = parentElement.querySelectorAll(childSelector);
  
  gsap.to(children, {
    ...toProps,
    stagger: staggerAmount
  });
};

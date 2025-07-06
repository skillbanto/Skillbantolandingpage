import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const setupScrollAnimations = () => {
  // Clear any existing ScrollTriggers to prevent duplicates
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  
  // Function to create parallax effect
  const createParallax = (element: string, speed: number = 0.5) => {
    const elements = document.querySelectorAll(element);
    
    elements.forEach(el => {
      gsap.to(el, {
        y: () => -ScrollTrigger.maxScroll(window) * speed,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        }
      });
    });
  };
  
  // Function to reveal elements on scroll
  const revealOnScroll = (element: string, delay: number = 0) => {
    const elements = document.querySelectorAll(element);
    
    elements.forEach(el => {
      gsap.fromTo(
        el,
        { 
          y: 50, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  };
  
  // Function to animate value counting up
  const animateCounter = (element: string, delay: number = 0) => {
    const elements = document.querySelectorAll(element);
    
    elements.forEach(el => {
      const target = parseFloat(el.textContent!.replace(/[^\d.-]/g, ''));
      
      gsap.fromTo(
        el,
        { innerText: "0" },
        {
          innerText: target,
          duration: 2,
          delay,
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  };
  
  // Function to animate 3D rotation on hover
  const rotateOnHover = (element: string, amount: number = 10) => {
    const elements = document.querySelectorAll(element);
    
    elements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        gsap.to(el, {
          rotationY: amount,
          rotationX: -amount * 0.5,
          duration: 0.5,
          ease: "power2.out"
        });
      });
      
      el.addEventListener('mouseleave', () => {
        gsap.to(el, {
          rotationY: 0,
          rotationX: 0,
          duration: 0.5,
          ease: "power2.out"
        });
      });
      
      el.addEventListener('mousemove', (e) => {
        const rect = (el as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateY = (x / rect.width - 0.5) * amount * 2;
        const rotateX = (0.5 - y / rect.height) * amount;
        
        gsap.to(el, {
          rotationY: rotateY,
          rotationX: rotateX,
          duration: 0.5,
          ease: "power2.out"
        });
      });
    });
  };
  
  // Function to create stagger reveal animation
  const staggerReveal = (
    container: string, 
    items: string, 
    staggerTime: number = 0.1,
    delay: number = 0
  ) => {
    const containers = document.querySelectorAll(container);
    
    containers.forEach(container => {
      const elements = container.querySelectorAll(items);
      
      gsap.fromTo(
        elements,
        { 
          y: 30, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: staggerTime,
          delay,
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  };
  
  // Create smooth scroll animation between sections
  const createSmoothScroll = () => {
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = (link as HTMLAnchorElement).getAttribute('href');
        const targetElement = document.querySelector(targetId!);
        
        if (targetElement) {
          gsap.to(window, {
            duration: 1,
            scrollTo: {
              y: targetElement,
              offsetY: 100
            },
            ease: "power3.inOut"
          });
        }
      });
    });
  };
  
  // Initialize animations
  return {
    createParallax,
    revealOnScroll,
    animateCounter,
    rotateOnHover,
    staggerReveal,
    createSmoothScroll
  };
};

// Predefined animations for specific elements
export const setupPageAnimations = () => {
  const { 
    createParallax, 
    revealOnScroll, 
    animateCounter, 
    rotateOnHover,
    staggerReveal,
    createSmoothScroll
  } = setupScrollAnimations();
  
  // Apply animations to specific elements
  createParallax('.parallax-bg', 0.3);
  revealOnScroll('.feature-card', 0.2);
  revealOnScroll('.section-title', 0.1);
  animateCounter('.counter', 0.3);
  rotateOnHover('.hover-card', 15);
  staggerReveal('.feature-list', '.feature-item', 0.1, 0.2);
  createSmoothScroll();
  
  // Specialized animations for specific sections
  
  // Hero section animation
  gsap.fromTo(
    '.hero-title',
    { 
      opacity: 0, 
      y: -50 
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }
  );
  
  gsap.fromTo(
    '.hero-subtitle',
    { 
      opacity: 0, 
      y: 20 
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.3,
      ease: "power3.out"
    }
  );
  
  // Button entrance animation
  gsap.fromTo(
    '.hero-cta',
    { 
      opacity: 0, 
      scale: 0.8 
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      delay: 0.6,
      ease: "back.out(1.7)"
    }
  );
};

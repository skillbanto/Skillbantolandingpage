import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  opacitySpeed: number;
}

interface ParticleSystemProps {
  className?: string;
  count?: number;
  colorScheme?: 'primary' | 'green' | 'blue' | 'rainbow';
  speed?: 'slow' | 'medium' | 'fast';
  size?: 'small' | 'medium' | 'large';
  interactive?: boolean;
}

const ParticleSystem = ({
  className = '',
  count = 50,
  colorScheme = 'primary',
  speed = 'medium',
  size = 'medium',
  interactive = true
}: ParticleSystemProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0, radius: 100 });
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Get colors based on color scheme
  const getColors = () => {
    switch (colorScheme) {
      case 'primary':
        return ['#10b981', '#059669', '#047857'];
      case 'green':
        return ['#10b981', '#047857', '#065f46'];
      case 'blue':
        return ['#3b82f6', '#2563eb', '#1d4ed8'];
      case 'rainbow':
        return ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'];
      default:
        return ['#10b981', '#059669', '#047857'];
    }
  };

  // Get size multiplier
  const getSizeMultiplier = () => {
    switch (size) {
      case 'small': return 0.7;
      case 'medium': return 1;
      case 'large': return 1.5;
      default: return 1;
    }
  };

  // Get speed multiplier
  const getSpeedMultiplier = () => {
    switch (speed) {
      case 'slow': return 0.5;
      case 'medium': return 1;
      case 'fast': return 1.5;
      default: return 1;
    }
  };

  // Initialize particles
  const initParticles = (canvas: HTMLCanvasElement) => {
    const particles: Particle[] = [];
    const colors = getColors();
    const sizeMultiplier = getSizeMultiplier();
    const speedMultiplier = getSpeedMultiplier();

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 * sizeMultiplier + 1,
        speedX: (Math.random() - 0.5) * speedMultiplier,
        speedY: (Math.random() - 0.5) * speedMultiplier,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.1,
        opacitySpeed: 0.01 * (Math.random() > 0.5 ? 1 : -1)
      });
    }

    return particles;
  };

  // Animation loop
  const animate = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    const particles = particlesRef.current;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach((particle, index) => {
      // Update position
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      // Update opacity for fade in/out effect
      particle.opacity += particle.opacitySpeed;
      if (particle.opacity <= 0.1 || particle.opacity >= 0.6) {
        particle.opacitySpeed = -particle.opacitySpeed;
      }
      
      // Boundary check
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.speedX = -particle.speedX;
      }
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.speedY = -particle.speedY;
      }
      
      // Mouse interaction
      if (interactive) {
        const dx = particle.x - mouseRef.current.x;
        const dy = particle.y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouseRef.current.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouseRef.current.radius - distance) / mouseRef.current.radius;
          
          particle.x += Math.cos(angle) * force;
          particle.y += Math.sin(angle) * force;
        }
      }
      
      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
      ctx.fill();
      
      // Connect nearby particles with lines
      for (let j = index + 1; j < particles.length; j++) {
        const dx = particle.x - particles[j].x;
        const dy = particle.y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          ctx.beginPath();
          ctx.strokeStyle = particle.color + Math.floor((0.2 - (distance / 100) * 0.2) * 255).toString(16).padStart(2, '0');
          ctx.lineWidth = 0.5;
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    });
    
    animationFrameRef.current = requestAnimationFrame(() => animate(canvas, ctx));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      
      resizeTimeoutRef.current = setTimeout(() => {
        if (canvas) {
          canvas.width = canvas.clientWidth;
          canvas.height = canvas.clientHeight;
          particlesRef.current = initParticles(canvas);
        }
      }, 200);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    // Set canvas dimensions
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    // Initialize context and particles
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    particlesRef.current = initParticles(canvas);
    animationFrameRef.current = requestAnimationFrame(() => animate(canvas, ctx));

    // Add event listeners
    window.addEventListener('resize', handleResize);
    if (interactive) {
      canvas.addEventListener('mousemove', handleMouseMove);
    }

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        canvas.removeEventListener('mousemove', handleMouseMove);
      }
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, [count, colorScheme, speed, size, interactive]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default ParticleSystem;
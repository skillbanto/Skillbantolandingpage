import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  life: number;
  opacity: number;
}

interface ButtonParticleEffectProps {
  children: React.ReactNode;
  colorScheme?: 'primary' | 'success' | 'info' | 'warning' | 'danger';
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const ButtonParticleEffect = ({
  children,
  colorScheme = 'primary',
  className = '',
  onClick,
  disabled = false
}: ButtonParticleEffectProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const isAnimatingRef = useRef(false);
  const [isHovered, setIsHovered] = useState(false);

  // Get color based on color scheme
  const getColor = () => {
    switch (colorScheme) {
      case 'primary':
        return ['#10b981', '#059669', '#047857'];
      case 'success':
        return ['#22c55e', '#16a34a', '#15803d'];
      case 'info':
        return ['#3b82f6', '#2563eb', '#1d4ed8'];
      case 'warning':
        return ['#f59e0b', '#d97706', '#b45309'];
      case 'danger':
        return ['#ef4444', '#dc2626', '#b91c1c'];
      default:
        return ['#10b981', '#059669', '#047857'];
    }
  };

  // Create particles on click
  const createParticles = (x: number, y: number) => {
    const particles: Particle[] = [];
    const colors = getColor();
    
    for (let i = 0; i < 30; i++) {
      const particle: Particle = {
        x,
        y,
        size: Math.random() * 5 + 1,
        speedX: (Math.random() - 0.5) * 5,
        speedY: (Math.random() - 0.5) * 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: Math.random() * 60 + 20, // frames
        opacity: 1
      };
      
      particles.push(particle);
    }
    
    return particles;
  };

  // Animate particles
  const animateParticles = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw particles
    for (let i = 0; i < particlesRef.current.length; i++) {
      const p = particlesRef.current[i];
      
      p.life--;
      p.opacity = p.life / 80; // fade out
      
      if (p.life <= 0) {
        particlesRef.current.splice(i, 1);
        i--;
        continue;
      }
      
      p.x += p.speedX;
      p.y += p.speedY;
      
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color + Math.floor(p.opacity * 255).toString(16).padStart(2, '0');
      ctx.fill();
    }
    
    // Continue animation if particles exist
    if (particlesRef.current.length > 0) {
      animationRef.current = requestAnimationFrame(animateParticles);
    } else {
      isAnimatingRef.current = false;
    }
  };

  // Handle button click
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    
    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    // Get click position relative to button
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Create new particles
    particlesRef.current = createParticles(x, y);
    
    // Start animation if not already running
    if (!isAnimatingRef.current) {
      isAnimatingRef.current = true;
      animationRef.current = requestAnimationFrame(animateParticles);
    }
    
    // Call onClick handler if provided
    if (onClick) onClick(e);
  };

  // Set up canvas on mount
  useEffect(() => {
    const canvas = canvasRef.current;
    const button = buttonRef.current;
    
    if (!canvas || !button) return;
    
    const resizeCanvas = () => {
      canvas.width = button.clientWidth;
      canvas.height = button.clientHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Effect for hover glowing border
  useEffect(() => {
    const button = buttonRef.current;
    if (!button || !isHovered) return;

    const colors = getColor();
    const mainColor = colors[0];
    
    // Clean up classes when effect ends
    return () => {
      button.classList.remove('glow-pulse');
    };
  }, [isHovered, colorScheme]);

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={disabled}
      className={`relative overflow-hidden ${isHovered ? 'hover-effect' : ''} ${className}`}
      style={{ 
        transition: 'all 0.3s ease',
        ...(isHovered ? { boxShadow: `0 0 10px ${getColor()[0]}80, 0 0 20px ${getColor()[0]}40` } : {})
      }}
    >
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      {children}
    </button>
  );
};

export default ButtonParticleEffect;
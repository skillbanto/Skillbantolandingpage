import { useState, useEffect } from 'react';

interface TextEffectProps {
  text: string;
  className?: string;
  effect?: 'wave' | 'typing' | 'fade' | 'highlight' | 'sparkle';
  duration?: number;
  delay?: number;
  color?: string;
  highlightColor?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

const TextEffect = ({
  text,
  className = '',
  effect = 'wave',
  duration = 2,
  delay = 0.1,
  color = 'inherit',
  highlightColor = 'rgba(16, 185, 129, 0.3)', // primary color with opacity
  as: Component = 'span',
}: TextEffectProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [characters, setCharacters] = useState<string[]>([]);
  const [displayedText, setDisplayedText] = useState('');
  const [showSparkles, setShowSparkles] = useState<boolean[]>([]);
  
  useEffect(() => {
    setCharacters(text.split(''));
    
    if (effect === 'typing') {
      setDisplayedText('');
    }
    
    if (effect === 'sparkle') {
      setShowSparkles(new Array(text.length).fill(false));
    }
    
    setIsVisible(true);
  }, [text, effect]);
  
  // Typing effect logic
  useEffect(() => {
    if (effect !== 'typing' || !isVisible) return;
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, delay * 1000);
    
    return () => clearInterval(interval);
  }, [effect, text, delay, isVisible]);
  
  // Sparkle effect logic
  useEffect(() => {
    if (effect !== 'sparkle' || !isVisible) return;
    
    const runSparkles = () => {
      const randomIndex = Math.floor(Math.random() * text.length);
      setShowSparkles(prev => {
        const newArray = [...prev];
        newArray[randomIndex] = true;
        return newArray;
      });
      
      setTimeout(() => {
        setShowSparkles(prev => {
          const newArray = [...prev];
          newArray[randomIndex] = false;
          return newArray;
        });
      }, 700);
    };
    
    const interval = setInterval(runSparkles, 300);
    
    return () => clearInterval(interval);
  }, [effect, text, isVisible]);
  
  // Render different effects
  const renderContent = () => {
    switch (effect) {
      case 'wave':
        return (
          <>
            {characters.map((char, index) => (
              <span
                key={index}
                className="inline-block"
                style={{
                  animation: isVisible ? `waveAnim ${duration}s ease-in-out infinite` : 'none',
                  animationDelay: `${index * delay}s`,
                  color
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </>
        );
        
      case 'typing':
        return <span style={{ color }}>{displayedText}<span className="cursor">|</span></span>;
        
      case 'fade':
        return (
          <>
            {characters.map((char, index) => (
              <span
                key={index}
                className="inline-block"
                style={{
                  animation: isVisible ? `fadeIn 1s ease forwards` : 'none',
                  animationDelay: `${index * delay}s`,
                  opacity: 0,
                  color
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </>
        );
        
      case 'highlight':
        return (
          <span className="relative">
            <span
              className="absolute bottom-0 left-0 w-full"
              style={{
                height: '40%',
                backgroundColor: highlightColor,
                animation: isVisible ? `highlightAnim ${duration}s ease-out forwards` : 'none',
                transformOrigin: 'left',
                transform: 'scaleX(0)',
                zIndex: -1
              }}
            />
            <span style={{ color, position: 'relative' }}>{text}</span>
          </span>
        );
        
      case 'sparkle':
        return (
          <>
            {characters.map((char, index) => (
              <span
                key={index}
                className="inline-block relative"
              >
                {showSparkles[index] && (
                  <span 
                    className="absolute inset-0 text-primary"
                    style={{
                      animation: 'sparkleAnim 0.7s ease-in-out',
                      textShadow: '0 0 8px currentColor',
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                )}
                <span style={{ color }}>
                  {char === ' ' ? '\u00A0' : char}
                </span>
              </span>
            ))}
          </>
        );
        
      default:
        return <span style={{ color }}>{text}</span>;
    }
  };
  
  return (
    <Component
      className={`text-effect ${className}`}
      style={{
        display: 'inline-block',
        position: 'relative',
      }}
    >
      <style>
        {`
          @keyframes waveAnim {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes highlightAnim {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }
          
          @keyframes sparkleAnim {
            0% { opacity: 0; transform: scale(1.2); }
            50% { opacity: 1; transform: scale(1.1); }
            100% { opacity: 0; transform: scale(1); }
          }
          
          .cursor {
            animation: cursorBlink 1s step-end infinite;
          }
          
          @keyframes cursorBlink {
            from, to { opacity: 1; }
            50% { opacity: 0; }
          }
        `}
      </style>
      {renderContent()}
    </Component>
  );
};

export default TextEffect;
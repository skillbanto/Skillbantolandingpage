import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

interface Card {
  id: string | number;
  title: string;
  description: string;
  image?: string;
  badge?: string;
  color?: string;
}

interface HorizontalScrollCardsProps {
  cards: Card[];
  title?: string;
  subtitle?: string;
  cardWidth?: number;
  gap?: number;
  autoScroll?: boolean;
  autoScrollSpeed?: number;
  showNavigation?: boolean;
  className?: string;
}

export default function HorizontalScrollCards({
  cards,
  title,
  subtitle,
  cardWidth = 320,
  gap = 24,
  autoScroll = false,
  autoScrollSpeed = 30,
  showNavigation = true,
  className = ""
}: HorizontalScrollCardsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const handleResize = () => checkScrollButtons();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [cards]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = cardWidth + gap;
      const newScrollLeft = direction === 'left' 
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Header */}
      {(title || subtitle) && (
        <div className="mb-8 text-center">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Navigation Buttons */}
      {showNavigation && (
        <>
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg backdrop-blur-sm transition-all duration-200 ${
              canScrollLeft 
                ? 'hover:bg-white dark:hover:bg-gray-800 hover:shadow-xl' 
                : 'opacity-50 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg backdrop-blur-sm transition-all duration-200 ${
              canScrollRight 
                ? 'hover:bg-white dark:hover:bg-gray-800 hover:shadow-xl' 
                : 'opacity-50 cursor-not-allowed'
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Cards Container */}
      <div 
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
          onScroll={checkScrollButtons}
          animate={autoScroll && !isHovered ? {
            x: [0, -(cardWidth + gap) * cards.length]
          } : {}}
          transition={autoScroll && !isHovered ? {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: autoScrollSpeed,
              ease: "linear",
            },
          } : {}}
        >
          {/* Render cards twice for seamless loop if auto-scroll is enabled */}
          {(autoScroll ? [...cards, ...cards] : cards).map((card, index) => (
            <motion.div
              key={`${card.id}-${index}`}
              className="flex-shrink-0 group cursor-pointer"
              style={{ width: cardWidth }}
              whileHover={{ 
                scale: 1.02,
                y: -8,
                transition: { duration: 0.2 }
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
                {/* Image */}
                {card.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {card.badge && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                        {card.badge}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Color accent */}
                {card.color && (
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ backgroundColor: card.color }}
                  />
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-600/0 group-hover:from-blue-500/5 group-hover:to-purple-600/5 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none z-[5]" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none z-[5]" />
    </div>
  );
}
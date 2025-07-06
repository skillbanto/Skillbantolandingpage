import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { gsap } from "gsap";
import { cn } from "../lib/utils";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "SkillBanto transformed how I create and deliver courses. The analytics alone have increased my course completion rates by 40%.",
    author: "Sarah Ahmed",
    role: "UX Design Instructor",
    company: "CreativeTech Academy"
  },
  {
    quote: "My students are more engaged than ever with the interactive tools. The platform practically sells my courses for me!",
    author: "Tariq Khan",
    role: "Business Coach",
    company: "Impact Strategies"
  },
  {
    quote: "I've tried multiple platforms, but SkillBanto's intuitive course builder and student management system is unmatched in the market.",
    author: "Ayesha Malik",
    role: "Data Science Educator",
    company: "FutureLab Institute"
  },
  {
    quote: "The live session tools are revolutionary. My students feel like they're in a real classroom, even when connecting from across the country.",
    author: "Kamran Siddiqui",
    role: "Language Instructor",
    company: "Global Linguistics"
  }
];

// Testimonial bubble component
const TestimonialBubble = ({
  testimonial,
  index,
  isActive,
  onClick
}: {
  testimonial: Testimonial;
  index: number;
  isActive: boolean;
  onClick: () => void;
}) => {
  const bubbleRef = useRef<HTMLDivElement>(null);
  
  // Floating animation
  useEffect(() => {
    const bubble = bubbleRef.current;
    if (!bubble) return;
    
    gsap.to(bubble, {
      y: "random(-10, 10)",
      x: "random(-5, 5)",
      rotation: "random(-2, 2)",
      duration: "random(3, 5)",
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: index * 0.2
    });
  }, [index]);
  
  // Scale up when active
  useEffect(() => {
    const bubble = bubbleRef.current;
    if (!bubble) return;
    
    gsap.to(bubble, {
      scale: isActive ? 1.05 : 1,
      duration: 0.5,
      ease: "power2.out"
    });
  }, [isActive]);

  // Color based on index
  const colors = ["primary", "secondary", "accent", "primary"];
  const color = colors[index % colors.length];

  return (
    <div 
      ref={bubbleRef}
      className={cn(
        "relative cursor-pointer transition-all duration-300",
        "p-5 rounded-2xl max-w-xs", 
        "backdrop-blur-md border",
        isActive 
          ? `bg-${color}/20 border-${color}/50` 
          : "bg-card/20 border-gray-700/30",
        "interactive"
      )}
      onClick={onClick}
    >
      {/* Quote */}
      <p className="text-gray-300 text-sm leading-relaxed mb-4">
        "{testimonial.quote}"
      </p>
      
      {/* Author info */}
      <div className="flex items-center">
        <div className={cn(
          "w-8 h-8 rounded-full mr-3 flex items-center justify-center", 
          `bg-${color}/30 text-${color}`
        )}>
          {testimonial.author.charAt(0)}
        </div>
        <div>
          <p className="text-white font-medium text-sm">{testimonial.author}</p>
          <p className="text-gray-400 text-xs">{testimonial.role}, {testimonial.company}</p>
        </div>
      </div>
      
      {/* Decorative quote mark */}
      <div className={cn(
        "absolute top-3 right-3 opacity-30", 
        `text-${color}`
      )}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21,15a2,2,0,0,1-2,2H9a2,2,0,0,1-2-2V9A2,2,0,0,1,9,7H19a2,2,0,0,1,2,2v6m-8-2V9l-4,4,4,4V13h4v4" />
        </svg>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  // Animate elements when they come into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section ref={ref} className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 md:px-8">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      </div>
      
      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Section header */}
        <motion.div className="text-center mb-16" variants={titleVariants}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 neon-text-primary">
            What Educators Say
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Join the community of educators transforming online education
          </p>
        </motion.div>
        
        {/* Testimonial bubbles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialBubble
              key={index}
              testimonial={testimonial}
              index={index}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        
        {/* Stats */}
        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {[
            { value: "1,200+", label: "Active Educators", color: "primary" },
            { value: "15,000+", label: "Courses Created", color: "secondary" },
            { value: "500,000+", label: "Students Enrolled", color: "accent" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className={cn(
                "text-center p-6 rounded-xl",
                "backdrop-blur-md",
                `bg-${stat.color}/10 border border-${stat.color}/30`
              )}
            >
              <div className={cn(
                "text-4xl font-bold mb-2",
                `text-${stat.color}`
              )}>
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;

import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { gsap } from "gsap";
import { cn } from "../lib/utils";

// Feature card component with feature list
const FeatureCard = ({ 
  icon, 
  title, 
  features, 
  delay, 
  glowColor = "primary" 
}: { 
  icon: React.ReactNode; 
  title: string; 
  features: string[];
  delay: number;
  glowColor?: "primary" | "secondary" | "accent";
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    
    gsap.fromTo(
      card,
      {
        y: 50,
        opacity: 0,
        rotateY: -5,
      },
      {
        y: 0,
        opacity: 1,
        rotateY: 0,
        duration: 0.8,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [delay]);

  const glowClass = {
    primary: "before:bg-primary/20",
    secondary: "before:bg-secondary/20",
    accent: "before:bg-accent/20"
  }[glowColor];

  return (
    <div 
      ref={cardRef}
      className={cn(
        "relative w-full h-full",
        "bg-white shadow-lg",
        "rounded-xl overflow-hidden",
        "p-6 border border-gray-200",
        "transform perspective-1000 hover:shadow-xl transition-all duration-300",
        "before:absolute before:inset-0 before:opacity-0 before:transition-opacity",
        "hover:before:opacity-100 hover:-translate-y-1",
        glowClass,
        "interactive"
      )}
    >
      {/* Icon */}
      <div className={cn(
        "w-12 h-12 rounded-lg mb-4 flex items-center justify-center",
        `bg-${glowColor}/10`,
        `text-${glowColor}`
      )}>
        {icon}
      </div>
      
      {/* Title */}
      <h3 className={cn(
        "text-xl font-bold mb-4",
        `text-gray-800`
      )}>
        {title}
      </h3>
      
      {/* Features List */}
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className={`text-${glowColor} mr-2 mt-1`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-gray-600 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FeaturesSection = () => {
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

  // Feature data from the provided Skillbanto details
  const featuresData = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Course Builder",
      features: [
        "Create structured courses with multiple modules and lessons",
        "Upload video lectures, PDFs, and downloadable content",
        "Organize content with drag & drop simplicity"
      ],
      color: "primary"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Live Sessions",
      features: [
        "Host real-time sessions with your students",
        "Live session scheduling inside your dashboard",
        "Plan-specific limits apply"
      ],
      color: "secondary"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Student Management",
      features: [
        "Manual student enrollment system",
        "Track student progress and engagement",
        "Add/remove student access anytime",
        "Bulk enrollments for institutions"
      ],
      color: "accent"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "Creator Dashboard",
      features: [
        "Easy-to-use panel for course management",
        "Overview of activity, sessions, and enrollments",
        "Clean interface — no tech knowledge needed"
      ],
      color: "primary"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Practical Training",
      features: [
        "Course structuring guidance",
        "Video recording tips",
        "Pricing strategy assistance",
        "Marketing your course effectively",
        "Learn how to actually sell, not just build"
      ],
      color: "secondary"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: "Unlimited Students",
      features: [
        "No cap on the number of students you can enroll",
        "Whether you have 5 or 5,000 students — we can handle it"
      ],
      color: "accent"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Secure & Reliable",
      features: [
        "Your data is safe with secure infrastructure",
        "Fast load times for both creators and students",
        "Mobile-friendly experience"
      ],
      color: "primary"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Built for Pakistan",
      features: [
        "Local currency billing",
        "Support over WhatsApp",
        "Tailored for trainers, coaches, and freelancers in Pakistan"
      ],
      color: "secondary"
    },
  ];

  return (
    <section ref={ref} className="relative w-full bg-gray-50 flex flex-col items-center justify-center py-20 px-4 md:px-8">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100"></div>
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">
            Powerful Features Built for Creators
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Skillbanto gives you all the tools you need to launch, manage, and grow your online course business – without coding or complicated tech.
          </p>
        </motion.div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              features={feature.features}
              delay={index * 0.1}
              glowColor={feature.color as "primary" | "secondary" | "accent"}
            />
          ))}
        </div>
        
        {/* Pakistan-focused section */}
        <motion.div 
          className="mt-20 bg-white rounded-xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Built Specifically for Pakistani Educators</h3>
              <p className="text-gray-600 mb-6">
                We understand the unique challenges faced by course creators in Pakistan. That's why we've built a platform that addresses your specific needs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Local currency billing (PKR) with affordable pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">WhatsApp-based customer support for quick assistance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Optimized for local internet connections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Mobile-friendly for both creators and students</span>
                </li>
              </ul>
              <div className="mt-8">
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-6 rounded-md transition duration-300 inline-flex items-center">
                  Start Free Trial
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="bg-gray-800 h-full p-8 md:p-12 flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-video bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-emerald-500 opacity-80" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm py-2 px-4 rounded text-white text-sm">
                  How to Create Your First Course
                </div>
                <div className="absolute flex space-x-2 bottom-4 right-4">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <div className="text-white text-xs">05:32</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;

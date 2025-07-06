import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { gsap } from "gsap";
import { cn } from "../lib/utils";
import { useAudio } from "../lib/stores/useAudio";
import { Link } from "react-router-dom";
import { trackFacebookEvent } from './FacebookPixel'; // Added import statement

const CTASection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const ctaButtonRef = useRef<HTMLButtonElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const { playSuccess } = useAudio();

  // Animate elements when they come into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Button pulse animation
  useEffect(() => {
    if (ctaButtonRef.current && isInView) {
      const button = ctaButtonRef.current;

      // Pulse animation timeline
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

      tl.to(button, {
        scale: 1.05,
        duration: 0.5,
        ease: "power2.out"
      });

      tl.to(button, {
        scale: 1,
        duration: 0.5,
        ease: "power2.inOut"
      });

      // Glow animation
      gsap.to(button, {
        boxShadow: "0 0 15px rgba(139, 92, 246, 0.7)",
        repeat: -1,
        yoyo: true,
        duration: 2
      });

      return () => {
        tl.kill();
      };
    }
  }, [isInView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section ref={ref} className="relative min-h-[80vh] w-full flex flex-col items-center justify-center py-20 px-4 md:px-8">
      {/* Improved 2D gradient background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-primary/70 to-purple-600 opacity-30"></div>

        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 w-full h-8 bg-gradient-to-r from-emerald-300 via-emerald-500 to-emerald-300 opacity-20"></div>
          <div className="absolute bottom-0 w-full h-8 bg-gradient-to-r from-purple-300 via-purple-500 to-purple-300 opacity-20"></div>
          <div className="absolute left-0 h-full w-8 bg-gradient-to-b from-emerald-300 via-emerald-500 to-purple-300 opacity-20"></div>
          <div className="absolute right-0 h-full w-8 bg-gradient-to-b from-emerald-300 via-emerald-500 to-purple-300 opacity-20"></div>
        </div>

        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-[url('/src/assets/grid.svg')] bg-repeat opacity-5"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Main content */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 shadow-xl">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-primary"
            variants={itemVariants}
          >
            Revolutionize Your Teaching
          </motion.h2>

          <motion.p 
            className="text-xl text-gray-800 mb-10 max-w-2xl mx-auto text-center"
            variants={itemVariants}
          >
            Join thousands of educators who are transforming online education with cutting-edge technology
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            {/* Trial Info Card */}
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-6 rounded-lg shadow-md mb-8 w-full max-w-md">
              <div className="flex items-center justify-center mb-4">
                <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-md mr-3">
                  NEW
                </span>
                <h3 className="text-emerald-700 text-xl font-bold">7-Day Free Trial</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Full Access</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">No Credit Card</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Cancel Anytime</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Premium Support</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a 
              href="https://app.skillbanto.org/creator-registration"
              className="inline-block"
              onClick={() => {playSuccess(); trackFacebookEvent('StartFreeTrial', { source: 'cta_section' })}} // Added Facebook Pixel tracking
            >
              <button
                ref={ctaButtonRef}
                className={cn(
                  "px-8 py-4 text-xl font-bold rounded-lg",
                  "bg-gradient-to-r from-emerald-500 to-blue-500",
                  "text-white shadow-lg transform transition-all duration-300",
                  "hover:shadow-emerald-300/20 hover:shadow-xl hover:-translate-y-1",
                  "focus:outline-none focus:ring-2 focus:ring-emerald-300"
                )}
              >
                Start for free
              </button>
            </a>

            <p className="mt-4 text-gray-700 text-sm font-medium">
              No credit card required • 7-day free trial • Cancel anytime
            </p>
          </motion.div>
        </div>

        {/* Feature badges */}
        <motion.div 
          className="mt-10 flex flex-wrap justify-center gap-4"
          variants={itemVariants}
        >
          {[
            "AI-Powered Tools", 
            "Interactive Courses", 
            "Live Classes", 
            "Student Analytics"
          ].map((feature, index) => (
            <div
              key={index}
              className={cn(
                "px-4 py-2 rounded-md",
                "backdrop-blur-sm border",
                "text-sm font-medium",
                "shadow-md transition-all hover:shadow-lg",
                index % 2 === 0
                  ? "border-emerald-300/30 bg-emerald-100/70 text-emerald-700"
                  : "border-blue-300/30 bg-blue-100/70 text-blue-700"
              )}
            >
              {feature}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTASection;
import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { cn } from "../lib/utils";

// Pricing period toggle component
// No toggle component needed anymore since we only have monthly billing

// Pricing card component
const PricingCard = ({
  title,
  description,
  price,
  period,
  savings,
  features,
  ctaText,
  popular = false,
  delay,
  includesPracticalTraining,
  mostValue
}: {
  title: string;
  description: string;
  price: string;
  period: string;
  savings?: string;
  features: {text: string, included: boolean}[];
  ctaText: string;
  popular?: boolean;
  delay: number;
  includesPracticalTraining: boolean;
  mostValue?: boolean;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      className="relative w-full max-w-md mx-auto"
    >
      <div 
        ref={cardRef}
        className={cn(
          "bg-white rounded-xl overflow-hidden",
          "transition-all duration-300",
          "shadow-lg hover:shadow-xl transform hover:-translate-y-1",
          popular ? "border-2 border-emerald-500" : "border border-gray-200",
          popular ? "z-10" : ""
        )}
      >
        {popular && (
          <div className="bg-emerald-500 text-white text-sm font-medium py-2 text-center uppercase tracking-wide">
            Most Popular
          </div>
        )}
        
        {mostValue && (
          <div className="bg-purple-600 text-white text-sm font-medium py-2 text-center uppercase tracking-wide">
            Most Value
          </div>
        )}
        
        <div className="p-6 md:p-8">
          {/* Title */}
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
            <span className={`w-3 h-3 rounded-full ${popular ? 'bg-emerald-500' : mostValue ? 'bg-purple-600' : 'bg-primary'}`}></span>
          </div>
          
          <p className="text-gray-600 mb-5">{description}</p>
          
          {/* Price */}
          <div className="flex items-baseline mb-1">
            <span className="text-gray-800 mr-1">PKR</span>
            <span className="text-4xl font-bold text-gray-900">{price}</span>
            <span className="text-gray-600 ml-1">{period}</span>
          </div>
          
          {savings && (
            <p className="text-emerald-600 text-sm font-medium mb-5">{savings}</p>
          )}
          
          {/* Practical Training Badge */}
          {includesPracticalTraining && (
            <div className="bg-blue-50 border border-blue-200 text-blue-700 px-3 py-2 rounded-md text-sm mb-5 inline-block">
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                Practical Training Included
              </span>
            </div>
          )}
          
          {/* Features */}
          <ul className="space-y-3 mb-8">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start">
                {feature.included ? (
                  <span className="text-emerald-500 mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                ) : (
                  <span className="text-gray-400 mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </span>
                )}
                <span className={`${feature.included ? 'text-gray-700' : 'text-gray-500 line-through'}`}>
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
          
          {/* CTA Button */}
          <button 
            className={cn(
              "w-full py-3 rounded-md font-semibold transition-all",
              popular || mostValue
                ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                : "bg-white hover:bg-gray-100 text-gray-800 border border-gray-300",
            )}
          >
            {ctaText}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const PricingSection = () => {
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

  // Pricing plans data
  const pricingPlans = [
    {
      title: "Basic Plan",
      description: "Perfect for beginners creating their first online course",
      price: "5,000",
      period: "",
      features: [
        { text: "Up to 2 Courses", included: true },
        { text: "2 Live Sessions per month", included: true },
        { text: "Unlimited Students", included: true },
        { text: "Basic analytics", included: true },
        { text: "Student management", included: true },
        { text: "Email support", included: true },
        { text: "Practical Training", included: false },
        { text: "3-Day Free Trial", included: true },
      ],
      ctaText: "Start Free Trial",
      popular: false,
      includesPracticalTraining: false,
      mostValue: false
    },
    {
      title: "Premium Training Plan",
      description: "Focused exclusively on practical training",
      price: "9,000",
      period: "",
      features: [
        { text: "Practical Training Only", included: true },
        { text: "No Courses Included", included: true },
        { text: "No Live Sessions", included: true },
        { text: "Hands-on Practical Training", included: true },
        { text: "Personalized Feedback", included: true },
        { text: "Priority support", included: true },
        { text: "One-on-One Guidance", included: true },
        { text: "Real-world Projects", included: true },
      ],
      ctaText: "Get Training",
      popular: true,
      includesPracticalTraining: true,
      mostValue: false
    },
    {
      title: "Elite Training + 3 Month Premium Plan",
      description: "For established educators with high-volume sales",
      price: "9,000",
      period: "/3 months",
      features: [
        { text: "Up to 5 Courses", included: true },
        { text: "4 Live Sessions per month", included: true },
        { text: "Unlimited Students", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Student management", included: true },
        { text: "Priority support", included: true },
        { text: "Practical Training", included: true },
        { text: "Marketing tools", included: true },
      ],
      ctaText: "Get Most Value",
      popular: false,
      includesPracticalTraining: true,
      mostValue: true
    }
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
        <motion.div className="text-center mb-12" variants={titleVariants}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the plan that's right for your educational business
          </p>
        </motion.div>
        
        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={`${plan.title}`}
              title={plan.title}
              description={plan.description}
              price={plan.price}
              period={plan.period}
              savings={undefined}
              features={plan.features}
              ctaText={plan.ctaText}
              popular={plan.popular}
              delay={index * 0.2}
              includesPracticalTraining={plan.includesPracticalTraining}
              mostValue={plan.mostValue}
            />
          ))}
        </div>
        
        {/* Additional info */}
        <motion.div 
          className="mt-16 text-center max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-md border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Skillbanto?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="flex flex-col items-center md:items-start">
              <div className="bg-emerald-100 p-3 rounded-full mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-1">Built for Pakistan</h4>
              <p className="text-gray-600 text-sm">Local pricing & WhatsApp support tailored for Pakistani creators</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="bg-purple-100 p-3 rounded-full mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-1">Easy to Use</h4>
              <p className="text-gray-600 text-sm">No technical skills required to launch your courses</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="bg-blue-100 p-3 rounded-full mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-1">Free Trial</h4>
              <p className="text-gray-600 text-sm">Try the basic plan free for 3 days, no credit card required</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PricingSection;
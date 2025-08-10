import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { trackFacebookEvent } from '../components/FacebookPixel';
import SimpleRevenueCounter from '../components/SimpleRevenueCounter';
import FeatureSlideshow from '../components/FeatureSlideshow';
import CreatorShowcase from '../components/CreatorShowcase';
import PricingCalculator from '../components/PricingCalculator';
import MarketingLayout from '../layouts/MarketingLayout';
import knowledgeVideo from '../assets/knowledge-video.mp4';

export default function HomePage() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const heroTexts = [
    {
      title: "Turn Your Expertise Into Income",
      subtitle: "Your expertise is endless. Turn it into profitable online courses, coaching, and digital learning products."
    },
    {
      title: "More than a creator. You're a business.",
      subtitle: "Expertise is your edge. We give you the tools to turn it into premium education products that drive lasting revenue and impact."
    },
    {
      title: "Build Your Learning Empire",
      subtitle: "Transform your knowledge into a thriving business with our comprehensive course creation platform."
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Ahmed Khan",
      position: "Digital Marketing Expert, Karachi",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      text: "Skillbanto transformed my teaching career. I went from classroom instructor to earning PKR 50,000+ monthly through online courses. The platform is incredibly user-friendly!",
      language: "english"
    },
    {
      id: 2,
      name: "Fatima Ali",
      position: "Culinary Expert, Lahore",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      text: "Ek working mother hone ke naate, Skillbanto ne mujhe ghar se teaching ka mauka diya. Mere cooking courses mein ab 500+ students hain!",
      language: "roman"
    },
    {
      id: 3,
      name: "Hassan Malik",
      position: "Programming Instructor, Islamabad",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      text: "The analytics feature helps me understand my students better. I've improved my course completion rates by 40% using Skillbanto's insights.",
      language: "english"
    },
    {
      id: 4,
      name: "Ayesha Khan",
      position: "English Language Coach, Rawalpindi",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      text: "Skillbanto ka certification feature mere language courses ko credible banata hai. Students ko official certificates milne se bohot khushi hoti hai!",
      language: "roman"
    }
  ];

  useEffect(() => {
    try {
      trackFacebookEvent('PageView');
    } catch (error) {
      console.log('Facebook Pixel tracking initialized');
    }

    // Text rotation timer
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 4000);

    // Testimonial rotation timer
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      clearInterval(textInterval);
      clearInterval(testimonialInterval);
    };
  }, [heroTexts.length]);

  return (
    <MarketingLayout>
      <div className="min-h-screen">
        {/* Hero Section with Video Background */}
        <section className="relative h-screen overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full">
            <video 
              className="w-full h-full object-cover"
              autoPlay 
              muted 
              loop
              playsInline
            >
              <source src={knowledgeVideo} type="video/mp4" />
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
            </video>
            
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content Overlay - Animated Text */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTextIndex}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.8 }}
                    className="text-white"
                  >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                      {heroTexts[currentTextIndex].title}
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
                      {heroTexts[currentTextIndex].subtitle}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4 items-start"
                >
                  <a 
                    href="https://app.skillbanto.com/creator-registration"
                    className="bg-emerald-400 hover:bg-emerald-500 text-black px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105 flex items-center gap-2"
                    onClick={() => {
                      try {
                        trackFacebookEvent('Lead');
                      } catch (error) {
                        console.log('Button clicked - Lead tracked');
                      }
                    }}
                  >
                    Get Started
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  
                  <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white font-medium">7-Day Free Trial • No Credit Card Required</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Text indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <div className="flex space-x-2">
              {heroTexts.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTextIndex ? 'bg-emerald-400' : 'bg-white/50'
                  }`}
                  onClick={() => setCurrentTextIndex(index)}
                />
              ))}
            </div>
          </div>
        </section>



        {/* Creator Showcase with Horizontal Scrolling */}
        <CreatorShowcase />

        {/* Revenue Counter Section - Fixed Layout */}
        <section className="relative py-8 md:py-16 bg-black overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Total Creator Revenue</h2>
              </div>
              
              {/* Content Container */}
              <div className="block space-y-6 lg:space-y-0 lg:flex lg:gap-8 mb-12">
                {/* Purple Revenue Card */}
                <div className="w-full lg:w-1/2 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-6 text-white">
                  <div className="text-purple-200 text-sm mb-4">Made by creators, selling courses</div>
                  <div className="bg-purple-800/40 rounded-lg p-4 mb-4">
                    <div className="text-2xl lg:text-3xl font-bold">
                      PKR <SimpleRevenueCounter initialValue={649368137} /> 💰
                    </div>
                  </div>
                  <div className="text-purple-300 text-xs">
                    *Live revenue simulation based on actual course creator data
                  </div>
                </div>
                
                {/* White Benefits Card */}
                <div className="w-full lg:w-1/2 bg-white rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Turn Your Expertise Into Income</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 text-sm">Create courses once, sell them indefinitely</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 text-sm">Establish yourself as an authority in your field</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 text-sm">Build a global audience for your expertise</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 text-sm">Generate passive income while you sleep</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 text-sm">Scale your teaching business with minimal overhead</span>
                    </div>
                  </div>
                </div>
              </div>
              

            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-12 md:py-16" style={{ backgroundColor: '#8c195e' }}>
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto text-center">
              <div className="text-white text-lg md:text-xl font-medium mb-8">Generated by our creators worldwide</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">2.7k+</div>
                  <div className="text-pink-200 text-sm md:text-base">Active Creators</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">50k+</div>
                  <div className="text-pink-200 text-sm md:text-base">Students Enrolled</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">34k+</div>
                  <div className="text-pink-200 text-sm md:text-base">Courses Created</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Slideshow */}
        <FeatureSlideshow />

        {/* Creators Keep Everything Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Left Side - Main Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  CREATORS KEEP
                  <br />
                  EVERYTHING.
                </h2>
              </motion.div>

              {/* Right Side - Description and CTA */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-xl text-white mb-8 leading-relaxed">
                  You build it, you earn it — all of it. No platform cuts, no algorithm games, 
                  no distractions. You stay in charge of your content, income, and audience. 
                  With Skillbanto, you rock, your rules.
                </p>
                
                <motion.a
                  href="/pricing"
                  className="inline-block bg-white text-black font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  See Plans & Pricing
                </motion.a>
              </motion.div>
            </div>

            {/* Three Feature Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Full Earnings Card */}
              <motion.div
                className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Full Earnings. Zero Cuts.</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Your course, your effort — 100% of the income is yours. We never take a percentage.
                  </p>
                </div>
              </motion.div>

              {/* Brand Growth Card */}
              <motion.div
                className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Your Brand. Your Growth.</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Build your own business, not someone else's. Keep control of your vision and profits.
                  </p>
                </div>
              </motion.div>

              {/* Scale Card */}
              <motion.div
                className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Made for Scale.</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Whether you're just starting out or growing fast — there are no earning limits on Skillbanto. Dream big, go big.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Skillbanto Section */}
        <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-green-50">
          <div className="container mx-auto px-6">
            {/* Section Header */}
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Why Skillbanto
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                They chose Skillbanto because it offered unmatched features and flexibility 
                that empowered their success without limits.
              </p>
            </motion.div>

            {/* Feature Grid */}
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {/* Scalability Feature */}
              <motion.div
                className="group relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                  {/* Animated Icon Container */}
                  <div className="relative mb-8">
                    <motion.div 
                      className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg"
                      animate={{ 
                        rotateY: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </motion.div>
                    
                    {/* Floating Elements */}
                    <motion.div 
                      className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full opacity-60"
                      animate={{ 
                        y: [-5, 5, -5],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div 
                      className="absolute -bottom-1 -left-1 w-6 h-6 bg-emerald-300 rounded-full opacity-40"
                      animate={{ 
                        x: [-3, 3, -3],
                        rotate: [0, 180, 360]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-green-600 transition-colors">
                    Scalability
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    No limits on courses, students, or bandwidth. Scale your business 
                    without worrying about technical constraints or additional costs.
                  </p>
                  
                  {/* Progress Bars */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Courses</span>
                      <span className="text-green-600 font-semibold">Unlimited</span>
                    </div>
                    <motion.div 
                      className="h-2 bg-gray-200 rounded-full overflow-hidden"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    >
                      <motion.div 
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 2, delay: 0.7 }}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Ease of Use Feature */}
              <motion.div
                className="group relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                  {/* Animated Icon Container */}
                  <div className="relative mb-8">
                    <motion.div 
                      className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                      </svg>
                    </motion.div>
                    
                    {/* Floating Elements */}
                    <motion.div 
                      className="absolute -top-1 -right-3 w-6 h-6 bg-blue-400 rounded-full opacity-60"
                      animate={{ 
                        y: [-8, 2, -8],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{ 
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-blue-600 transition-colors">
                    Ease of Use
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Drag‑and‑drop course builder empowered non-technical teams 
                    to create professional courses without coding knowledge.
                  </p>
                  
                  {/* Interactive Elements */}
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </motion.div>
                    <span className="text-gray-500">Drag & Drop Builder</span>
                  </div>
                </div>
              </motion.div>

              {/* Advanced Analytics Feature */}
              <motion.div
                className="group relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                  {/* Animated Icon Container */}
                  <div className="relative mb-8">
                    <motion.div 
                      className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg"
                      animate={{ 
                        boxShadow: [
                          "0 10px 25px rgba(251, 146, 60, 0.3)",
                          "0 20px 40px rgba(251, 146, 60, 0.5)",
                          "0 10px 25px rgba(251, 146, 60, 0.3)"
                        ]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </motion.div>
                  </div>

                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-orange-600 transition-colors">
                    Advanced Analytics
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Detailed tracking of engagement and completion rates 
                    to optimize your content and maximize student success.
                  </p>
                  
                  {/* Analytics Chart Preview */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Engagement Rate</span>
                      <span className="text-orange-600 font-semibold">94%</span>
                    </div>
                    <div className="flex space-x-2">
                      {[85, 92, 78, 94, 88, 96, 91].map((height, index) => (
                        <motion.div
                          key={index}
                          className="bg-gradient-to-t from-orange-500 to-red-500 rounded-t-lg"
                          style={{ width: '12px' }}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Certification Support Feature */}
              <motion.div
                className="group relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                  {/* Animated Icon Container */}
                  <div className="relative mb-8">
                    <motion.div 
                      className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg"
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.02, 1]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </motion.div>
                    
                    {/* Certificate Animation */}
                    <motion.div 
                      className="absolute -top-2 -right-2 w-8 h-8 bg-purple-400 rounded-lg opacity-60"
                      animate={{ 
                        rotate: [0, 15, -15, 0],
                        scale: [0.8, 1.1, 0.8]
                      }}
                      transition={{ 
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-purple-600 transition-colors">
                    Certification Support
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Ability to create and issue credentials to learners, 
                    adding value to your courses and building student trust.
                  </p>
                  
                  {/* Certificate Preview */}
                  <motion.div 
                    className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-purple-800">Digital Certificate</div>
                        <div className="text-xs text-purple-600">Completion Badge</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Bottom CTA */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.a
                href="/pricing"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold px-8 py-4 rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Experience Skillbanto Today</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Testimonials & Case Studies Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto px-6">
            {/* Section Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Success Stories & Testimonials
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how successful educators transformed their expertise into thriving businesses with SkillBanto
              </p>
            </motion.div>

            {/* Two Column Layout: Case Study & Testimonials */}
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              
              {/* Case Study Section (Left) */}
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-xl"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Featured Success Story</h3>
                  <p className="text-gray-600">Real creator, real results</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 mb-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full mr-4"></div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Dr. Fatima Malik</h4>
                      <p className="text-gray-600">Medical Professional</p>
                      <p className="text-green-600 font-medium text-sm">"Advanced Cardiology Techniques"</p>
                    </div>
                  </div>

                  <blockquote className="text-gray-700 italic mb-6 border-l-4 border-green-500 pl-4">
                    "SkillBanto helped me scale my knowledge beyond the hospital walls. I'm now impacting thousands of medical professionals worldwide."
                  </blockquote>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-white rounded-lg">
                      <div className="text-2xl font-bold text-green-600">PKR 2.5M</div>
                      <div className="text-sm text-gray-600">Revenue Generated</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">3,200+</div>
                      <div className="text-sm text-gray-600">Students Taught</div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-700 text-sm">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      Created 15+ specialized medical courses
                    </div>
                    <div className="flex items-center text-gray-700 text-sm">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      Built community of 5,000+ healthcare professionals
                    </div>
                    <div className="flex items-center text-gray-700 text-sm">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      Achieved 95% course completion rate
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Link 
                    to="/resources/case-studies"
                    className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
                  >
                    View All Case Studies
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>

              {/* Testimonials Section (Right) */}
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-xl"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">What Our Users Say</h3>
                  <p className="text-gray-600">Testimonials from our community</p>
                </div>

                {/* Testimonials Slideshow */}
                <div className="relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTestimonial}
                      className="flex justify-center"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="w-full text-center">
                        <div className="flex flex-col items-center">
                          <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-green-100">
                            <img 
                              src={testimonials[currentTestimonial].image}
                              alt={testimonials[currentTestimonial].name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="mb-6">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className="text-yellow-400 text-xl">★</span>
                            ))}
                          </div>
                          <blockquote className={`text-lg leading-relaxed mb-6 ${
                            testimonials[currentTestimonial].language === 'roman' 
                              ? 'text-green-600 italic font-medium' 
                              : 'text-gray-700'
                          }`}>
                            "{testimonials[currentTestimonial].text}"
                          </blockquote>
                          <h4 className="font-bold text-black text-xl mb-2">{testimonials[currentTestimonial].name}</h4>
                          <p className="text-gray-500">{testimonials[currentTestimonial].position}</p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Slideshow Navigation Dots */}
                  <div className="flex justify-center mt-8 space-x-3">
                    {testimonials.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          currentTestimonial === index 
                            ? 'bg-green-500 scale-125' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Modern CTA Section */}
        <section className="relative py-24 bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20"></div>
          <div className="relative container mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Ready to Start Your 
                <span className="block text-green-100">Creator Journey?</span>
              </h2>
              <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join thousands of successful creators who are already monetizing their expertise with SkillBanto.
              </p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.a
                  href="https://app.skillbanto.com/creator-registration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:bg-green-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => trackFacebookEvent('InitiateCheckout', {
                    content_name: 'Creator Registration CTA',
                    content_category: 'registration',
                    value: 1
                  })}
                >
                  Start Creating Today
                </motion.a>
                <div className="flex items-center text-green-100">
                  <div className="w-2 h-2 bg-green-200 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium">Free to get started</span>
                </div>
              </motion.div>
              
              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-12 flex flex-wrap justify-center items-center gap-8 text-green-100"
              >
                <div className="flex items-center">
                  <div className="w-1 h-1 bg-green-200 rounded-full mr-2"></div>
                  <span className="text-sm">2.7K+ Active Creators</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1 h-1 bg-green-200 rounded-full mr-2"></div>
                  <span className="text-sm">PKR 10M+ Revenue Generated</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1 h-1 bg-green-200 rounded-full mr-2"></div>
                  <span className="text-sm">50K+ Students Enrolled</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </div>
    </MarketingLayout>
  );
}
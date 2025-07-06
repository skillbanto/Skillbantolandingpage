import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { trackFacebookEvent } from "./FacebookPixel";

const HeroSection = () => {
  useEffect(() => {
    // Track page view when hero loads
    trackFacebookEvent('PageView');
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-emerald-50 to-blue-50 py-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.h1 
              className="hero-title text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Turn Your Expertise Into Income
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your expertise is endless. Turn it into profitable online courses, coaching, and digital learning products.
            </motion.p>

            {/* CTA Button */}
            <motion.div 
              className="hero-cta"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <button 
                  className="bg-emerald-400 hover:bg-emerald-500 text-black px-8 py-3 text-lg font-medium rounded-md transition-colors inline-block"
                  onClick={() => trackFacebookEvent('Lead')}
                >
                  Start for free
                </button>
              </div>
              <div className="mt-4 inline-flex items-center bg-white px-4 py-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 font-medium">7-Day Free Trial • No Credit Card Required</span>
              </div>
            </motion.div>
          </div>

          {/* Right Video/Demo */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-indigo-100">
              {/* Video Container */}
              <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  muted 
                  loop
                  playsInline
                  poster="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                >
                  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                  {/* Fallback image */}
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="SkillBanto platform demo" 
                    className="w-full h-full object-cover"
                  />
                </video>
                
                {/* Video overlay with play button */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <motion.div 
                    className="bg-white/90 backdrop-blur-sm rounded-full p-4 cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </motion.div>
                </div>
              </div>
              
              {/* Floating UI elements */}
              <motion.div 
                className="absolute top-5 right-5 bg-white rounded-lg shadow-lg p-4 flex items-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Course Published</span>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-5 left-5 bg-white rounded-lg shadow-lg p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <div className="text-2xl font-bold text-emerald-600">$50k</div>
                <div className="text-sm text-gray-600">Monthly Revenue</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
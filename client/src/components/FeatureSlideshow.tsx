import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FeatureTab = {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  bgColor: string;
};

const features: FeatureTab[] = [
  {
    id: 'courses',
    label: 'Courses',
    title: 'Online Courses',
    description: 'Transform your knowledge into beautiful, profitable online courses that students love.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ctaText: 'Learn More →',
    ctaLink: '/courses',
    bgColor: 'emerald'
  },
  {
    id: 'coaching',
    label: 'Coaching',
    title: 'Personal Coaching',
    description: 'Offer one-on-one coaching sessions and group mentorship programs.',
    image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ctaText: 'Start Coaching →',
    ctaLink: '/coaching',
    bgColor: 'green'
  },
  {
    id: 'communities',
    label: 'Communities',
    title: 'Online Communities',
    description: 'Build thriving online communities and create exclusive member experiences.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ctaText: 'Build Community →',
    ctaLink: '/communities',
    bgColor: 'green'
  },
  {
    id: 'newsletters',
    label: 'Newsletters',
    title: 'Email Newsletters',
    description: 'Build a loyal subscriber base with engaging email content and monetize your expertise.',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ctaText: 'Create Newsletter →',
    ctaLink: '/newsletters',
    bgColor: 'green'
  }
];

export default function FeatureSlideshow() {
  const [activeTab, setActiveTab] = useState('courses');

  const activeFeature = features.find(f => f.id === activeTab) || features[0];

  // Auto-slide functionality
  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      setActiveTab(prevTab => {
        const currentIndex = features.findIndex(f => f.id === prevTab);
        const nextIndex = (currentIndex + 1) % features.length;
        return features[nextIndex].id;
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(autoSlideInterval);
  }, []);

  const getColorClasses = (color: string, active: boolean = false) => {
    // Use green theme for all buttons to match the website design
    if (active) {
      return 'bg-gradient-to-r from-green-500 to-green-600 text-white border-green-500 shadow-lg transform scale-105';
    } else {
      return 'text-green-600 border-green-200 hover:border-green-500 hover:bg-green-50 transition-all duration-300';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            THE MORE INCOME SOURCES,
            <br />
            THE MERRIER.
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Launch a newsletter. Build a SkillBanto community. Publish a course. Creating multiple revenue streams is the 
            secret to making the figures that make you smile.
          </p>
        </motion.div>

        {/* Tab Navigation - Responsive Auto-Sliding Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-12 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveTab(feature.id)}
              className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full border-2 font-medium text-sm sm:text-base transition-all duration-500 ${
                getColorClasses(feature.bgColor, activeTab === feature.id)
              }`}
            >
              {feature.label}
            </button>
          ))}
        </motion.div>

        {/* Feature Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-6 py-3 rounded-xl text-white font-medium bg-gradient-to-r from-green-500 to-green-600">
                {activeFeature.title}
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {activeFeature.description}
              </p>

              <motion.a
                href={activeFeature.ctaLink}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg font-medium transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeFeature.ctaText}
              </motion.a>
            </motion.div>
          </AnimatePresence>

          {/* Right Side - Visual */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={activeFeature.image} 
                  alt={activeFeature.title}
                  className="w-full h-96 object-cover"
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">{activeFeature.title}</h4>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Featured Service</span>
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
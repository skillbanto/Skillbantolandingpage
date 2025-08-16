import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface DynamicRevenueCounterProps {
  initialValue?: number;
}

const DynamicRevenueCounter = ({ initialValue = 649368137 }: DynamicRevenueCounterProps) => {
  const [revenue, setRevenue] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setRevenue(prev => prev + Math.floor(Math.random() * 1000) + 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Total Creator Revenue
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Live Revenue Counter */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-8 rounded-2xl shadow-2xl border border-purple-400/20">
              <div className="text-sm text-purple-200 mb-2 flex items-center justify-center lg:justify-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></div>
                Made by creators, selling courses
              </div>
              
              <motion.div 
                className="text-4xl md:text-6xl font-bold text-white mb-4"
                key={revenue}
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                PKR {revenue.toLocaleString()}
                <motion.span 
                  className="text-red-400 ml-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  ●
                </motion.span>
              </motion.div>
              
              <p className="text-purple-200 text-sm">
                *Live revenue simulation based on actual course creator data
              </p>
            </div>
          </motion.div>

          {/* Right Side - Value Propositions */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Turn Your Expertise Into Income</h3>
            
            <div className="space-y-4">
              {[
                { icon: "🎯", text: "Create courses once, sell them indefinitely" },
                { icon: "👑", text: "Establish yourself as an authority in your field" },
                { icon: "🌍", text: "Build a global audience for your expertise" },
                { icon: "💰", text: "Generate passive income while you sleep" },
                { icon: "📈", text: "Scale your teaching business with minimal overhead" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-sm">
                    {item.icon}
                  </div>
                  <span className="text-white">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-xl text-blue-100 mb-8">Generated by our creators worldwide</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">250k+</div>
              <div className="text-blue-200 mt-2">Active Creators</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">2M+</div>
              <div className="text-blue-200 mt-2">Students Enrolled</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">2K</div>
              <div className="text-blue-200 mt-2">Courses Created</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DynamicRevenueCounter;
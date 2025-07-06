import React from 'react';
import { motion } from 'framer-motion';
import MarketingLayout from '../layouts/MarketingLayout';
import { Mail, HelpCircle, MessageCircle } from 'lucide-react';

export default function HelpCenterPage() {

  return (
    <MarketingLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                How Can We <span className="text-green-600">Help You?</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Get support and information to help you succeed with SkillBanto.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Help Information Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Getting Help
              </motion.h2>
              
              <motion.div
                className="text-lg text-gray-600 mb-12 space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p>
                  Welcome to SkillBanto Help Center. We're here to support you in creating, 
                  marketing, and selling your courses successfully.
                </p>
                <p>
                  Whether you're just starting out or need advanced guidance, our team is 
                  ready to help you achieve your goals on the platform.
                </p>
                <p>
                  For any questions, technical support, or guidance, please don't hesitate 
                  to reach out to us directly.
                </p>
              </motion.div>

              {/* Contact Section */}
              <motion.div
                className="bg-green-50 p-8 rounded-xl border border-green-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="text-green-600 mb-4 flex justify-center">
                  <Mail className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Contact Support
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Send us your questions and we'll get back to you quickly
                </p>
                <a 
                  href="mailto:info@skillbanto.org"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  info@skillbanto.org
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}
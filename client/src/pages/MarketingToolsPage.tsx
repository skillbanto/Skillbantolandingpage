import React from 'react';
import { motion } from 'framer-motion';
import MarketingLayout from '../layouts/MarketingLayout';
import { Mail, BarChart3, Share2, Users, Zap, Target, ArrowRight, TrendingUp } from 'lucide-react';

export default function MarketingToolsPage() {
  const features = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Marketing Campaigns",
      description: "Create automated email sequences to nurture leads and convert them into paying students.",
      details: ["Automated drip campaigns", "Segmented email lists", "A/B testing", "Performance analytics"]
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media Integration",
      description: "Share your courses across all social platforms with one-click publishing and scheduling.",
      details: ["Multi-platform publishing", "Content scheduling", "Social analytics", "Engagement tracking"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Affiliate Program Management",
      description: "Build a network of affiliates to promote your courses and increase your reach exponentially.",
      details: ["Commission tracking", "Affiliate dashboard", "Payment automation", "Performance reports"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Track conversion rates, student behavior, and marketing ROI with detailed analytics.",
      details: ["Conversion tracking", "Student journey mapping", "ROI calculations", "Custom reports"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Landing Page Builder",
      description: "Create high-converting landing pages for your courses without any coding knowledge.",
      details: ["Drag-drop builder", "Mobile responsive", "A/B testing", "Conversion optimization"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lead Generation Tools",
      description: "Capture leads with pop-ups, forms, and lead magnets integrated into your marketing funnel.",
      details: ["Smart pop-ups", "Lead forms", "Free trial offers", "Lead scoring"]
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Increase Course Sales by 300%",
      description: "Our marketing tools help creators boost their course sales significantly"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Build Larger Audience",
      description: "Reach more potential students through multiple marketing channels"
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Track Marketing ROI",
      description: "Measure and optimize your marketing efforts with detailed analytics"
    }
  ];

  const tools = [
    {
      name: "Email Automation",
      description: "Set up automated email sequences that convert"
    },
    {
      name: "Social Media Manager",
      description: "Schedule and manage posts across all platforms"
    },
    {
      name: "Affiliate Dashboard",
      description: "Manage your affiliate network and track commissions"
    },
    {
      name: "Analytics Suite",
      description: "Comprehensive marketing analytics and reporting"
    },
    {
      name: "Landing Page Creator",
      description: "Build high-converting landing pages in minutes"
    },
    {
      name: "Lead Capture Tools",
      description: "Smart forms and pop-ups to capture more leads"
    }
  ];

  return (
    <MarketingLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-green-600">Marketing Tools</span> That Drive Results
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Boost your course sales with our comprehensive suite of marketing tools. 
                From email campaigns to social media management, everything you need to succeed.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <a 
                  href="https://app.skillbanto.org/creator-registration"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
                >
                  Start Marketing
                </a>
                <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                  See Demo
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Marketing Tools Matter
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Effective marketing is the key to successful course sales and building a sustainable business
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-8 rounded-xl bg-gray-50"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="text-green-600 mb-6 flex justify-center">
                      {benefit.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Complete Marketing Suite
                </h2>
                <p className="text-xl text-gray-600">
                  All the tools you need to market your courses effectively and grow your business
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="text-green-600 mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tools Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Marketing Tools at Your Fingertips
                </h2>
                <p className="text-xl text-gray-600">
                  Powerful tools designed to streamline your marketing workflow
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    className="p-6 border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-sm transition-all duration-200"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {tool.name}
                    </h3>
                    <p className="text-gray-600">
                      {tool.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-green-600">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-white mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Marketing Success Statistics
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { number: "300%", label: "Average Sales Increase" },
                  { number: "85%", label: "Email Open Rate" },
                  { number: "45%", label: "Conversion Rate Boost" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-green-200 text-lg">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Ready to Supercharge Your Marketing?
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Start using our powerful marketing tools to grow your course business today
              </motion.p>

              <motion.a
                href="https://app.skillbanto.org/creator-registration"
                className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
            </div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}
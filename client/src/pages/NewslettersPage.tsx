import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Send, Users, TrendingUp, Calendar, BarChart3, CheckCircle, Star } from 'lucide-react';
import MarketingLayout from '../layouts/MarketingLayout';

const NewslettersPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const newsletterFeatures = [
    {
      icon: Mail,
      title: 'Email Campaigns',
      description: 'Create beautiful, responsive email campaigns with our drag-and-drop editor.',
      stats: '98% Delivery Rate'
    },
    {
      icon: Users,
      title: 'Subscriber Management',
      description: 'Advanced segmentation and automation to target the right audience.',
      stats: '50,000+ Subscribers'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Detailed analytics to track opens, clicks, and subscriber engagement.',
      stats: '35% Avg Open Rate'
    },
    {
      icon: Calendar,
      title: 'Automated Sequences',
      description: 'Set up automated email sequences for onboarding and nurturing.',
      stats: '24/7 Automation'
    }
  ];

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 'PKR 8,000',
      period: '/month',
      subscribers: 'Up to 1,000 subscribers',
      emails: '10,000 emails/month',
      features: [
        'Email Builder',
        'Basic Templates',
        'Email Support',
        'Basic Analytics',
        'Single User'
      ],
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      price: 'PKR 18,000',
      period: '/month',
      subscribers: 'Up to 10,000 subscribers',
      emails: '100,000 emails/month',
      features: [
        'Advanced Email Builder',
        'Premium Templates',
        'Priority Support',
        'Advanced Analytics',
        'Team Collaboration',
        'Automation Workflows',
        'A/B Testing'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'PKR 35,000',
      period: '/month',
      subscribers: 'Unlimited subscribers',
      emails: 'Unlimited emails',
      features: [
        'Custom Email Builder',
        'Custom Templates',
        'Dedicated Support',
        'Advanced Analytics',
        'Team Management',
        'Advanced Automation',
        'Custom Integrations',
        'White-label Options'
      ],
      popular: false
    }
  ];

  const successStories = [
    {
      name: 'Sarah Marketing',
      industry: 'Digital Marketing',
      growth: '400%',
      metric: 'Subscriber Growth',
      revenue: 'PKR 2.5M',
      quote: 'Newsletter campaigns transformed our customer engagement and sales.'
    },
    {
      name: 'Tech Innovators',
      industry: 'Technology',
      growth: '250%',
      metric: 'Open Rate',
      revenue: 'PKR 1.8M',
      quote: 'Professional newsletter tools helped us build a loyal community.'
    },
    {
      name: 'Creative Studios',
      industry: 'Design',
      growth: '600%',
      metric: 'Click Rate',
      revenue: 'PKR 3.2M',
      quote: 'Beautiful newsletter designs increased our client conversions.'
    }
  ];

  return (
    <MarketingLayout>
      <div className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
                    Powerful Newsletter Platform
                  </h1>
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    Create, send, and track beautiful newsletters that engage your audience 
                    and drive meaningful conversions for your business.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <motion.button
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Start Newsletter
                      <Send className="ml-2 w-5 h-5" />
                    </motion.button>
                    
                    <motion.button
                      className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Templates
                    </motion.button>
                  </div>

                  {/* Key Stats */}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <motion.div
                        className="text-3xl font-bold text-green-600 mb-2"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      >
                        98%
                      </motion.div>
                      <div className="text-sm text-gray-600">Delivery Rate</div>
                    </div>
                    <div className="text-center">
                      <motion.div
                        className="text-3xl font-bold text-green-600 mb-2"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      >
                        35%
                      </motion.div>
                      <div className="text-sm text-gray-600">Avg Open Rate</div>
                    </div>
                    <div className="text-center">
                      <motion.div
                        className="text-3xl font-bold text-green-600 mb-2"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                      >
                        500K+
                      </motion.div>
                      <div className="text-sm text-gray-600">Emails Sent</div>
                    </div>
                  </div>
                </motion.div>

                {/* Animated Newsletter Analytics */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-2xl">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-black">Newsletter Performance</h3>
                      <div className="flex items-center text-green-600">
                        <TrendingUp className="w-5 h-5 mr-1" />
                        <span className="text-sm font-semibold">+145% growth</span>
                      </div>
                    </div>
                    
                    {/* Animated Performance Metrics */}
                    <div className="space-y-4">
                      {[
                        { metric: 'Open Rate', value: 42, color: 'bg-green-500', target: 45 },
                        { metric: 'Click Rate', value: 28, color: 'bg-green-400', target: 30 },
                        { metric: 'Conversion', value: 15, color: 'bg-green-300', target: 20 },
                        { metric: 'Engagement', value: 68, color: 'bg-green-600', target: 70 }
                      ].map((item, index) => (
                        <div key={item.metric} className="flex items-center">
                          <div className="w-20 text-sm text-gray-600">{item.metric}</div>
                          <div className="flex-1 bg-gray-200 rounded-full h-3 mx-3">
                            <motion.div
                              className={`h-3 rounded-full ${item.color}`}
                              initial={{ width: 0 }}
                              animate={{ width: `${item.value}%` }}
                              transition={{ duration: 1.5, delay: index * 0.2 + 0.5 }}
                            />
                          </div>
                          <div className="text-sm font-semibold text-black">{item.value}%</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-green-50 rounded-lg">
                      <div className="text-green-800 font-semibold text-lg">50,000+ Subscribers</div>
                      <div className="text-green-600 text-sm">across all newsletters</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-black mb-6">Newsletter Features</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Everything you need to create, send, and track professional newsletters
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {newsletterFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-lg p-3 mr-4">
                      <feature.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                      <p className="text-gray-700 mb-4">{feature.description}</p>
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block">
                        {feature.stats}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-black mb-6">Success Stories</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                See how businesses are growing with our newsletter platform
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {successStories.map((story, index) => (
                <motion.div
                  key={story.name}
                  className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-black mb-1">{story.name}</h3>
                    <p className="text-green-600 font-medium mb-3">{story.industry}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-2xl font-bold text-green-600">{story.growth}</div>
                        <div className="text-xs text-gray-600">{story.metric}</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">{story.revenue}</div>
                        <div className="text-xs text-gray-600">Revenue Generated</div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-center italic mb-4">"{story.quote}"</p>
                  
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-black mb-6">Newsletter Pricing</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Choose the perfect plan for your newsletter needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  className={`relative bg-white rounded-xl shadow-lg p-8 border-2 transition-all duration-300 ${
                    plan.popular ? 'border-green-500 transform scale-105' : 'border-gray-200'
                  } hover:shadow-xl`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-black mb-4">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-green-600">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">{plan.subscribers}</div>
                    <div className="text-sm text-gray-600">{plan.emails}</div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-gray-100 text-gray-800 hover:bg-green-600 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Choose {plan.name}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Start Your Newsletter?</h2>
              <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
                Join thousands of businesses using our platform to create engaging newsletters that drive results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free Trial
                </motion.button>
                
                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Newsletter Examples
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
};

export default NewslettersPage;
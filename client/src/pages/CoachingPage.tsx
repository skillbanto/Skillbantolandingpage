import { motion } from 'framer-motion';
import { useState } from 'react';
import { Users, Star, TrendingUp, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import MarketingLayout from '../layouts/MarketingLayout';

const CoachingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('basic');

  const coachingPlans = [
    {
      id: 'basic',
      name: 'Basic Coaching',
      price: 'PKR 15,000',
      period: '/month',
      features: [
        '1-on-1 Sessions (2 per month)',
        'Goal Setting & Planning',
        'Progress Tracking',
        'Email Support',
        'Resource Library Access'
      ],
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium Coaching',
      price: 'PKR 25,000',
      period: '/month',
      features: [
        '1-on-1 Sessions (4 per month)',
        'Personalized Action Plans',
        'Weekly Progress Reviews',
        'Priority Support',
        'Advanced Tools & Templates',
        'Group Mastermind Access'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise Coaching',
      price: 'PKR 45,000',
      period: '/month',
      features: [
        'Unlimited 1-on-1 Sessions',
        'Custom Business Strategy',
        'Team Coaching Sessions',
        '24/7 Support',
        'Custom Tools Development',
        'Exclusive Mastermind Group',
        'Direct Mentor Access'
      ],
      popular: false
    }
  ];

  const successStories = [
    {
      name: 'Sarah Ahmed',
      title: 'Business Coach',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b302?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      growth: '300%',
      metric: 'Revenue Growth',
      quote: 'SkillBanto coaching transformed my business from startup to success.'
    },
    {
      name: 'Ahmed Hassan',
      title: 'Life Coach',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      growth: '500+',
      metric: 'New Clients',
      quote: 'Professional coaching helped me scale my practice exponentially.'
    },
    {
      name: 'Fatima Khan',
      title: 'Career Coach',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      growth: '250%',
      metric: 'Client Success Rate',
      quote: 'The coaching program gave me the tools to help others succeed.'
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
                    Professional Coaching Services
                  </h1>
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    Transform your expertise into a thriving coaching business with personalized guidance, 
                    proven strategies, and ongoing support.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <motion.button
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Start Coaching Journey
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </motion.button>
                    
                    <motion.button
                      className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Schedule Consultation
                    </motion.button>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <motion.div
                        className="text-3xl font-bold text-green-600 mb-2"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      >
                        500+
                      </motion.div>
                      <div className="text-sm text-gray-600">Coaches Trained</div>
                    </div>
                    <div className="text-center">
                      <motion.div
                        className="text-3xl font-bold text-green-600 mb-2"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      >
                        95%
                      </motion.div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <motion.div
                        className="text-3xl font-bold text-green-600 mb-2"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                      >
                        24/7
                      </motion.div>
                      <div className="text-sm text-gray-600">Support</div>
                    </div>
                  </div>
                </motion.div>

                {/* Animated Growth Chart */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-2xl">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-black">Coaching Growth</h3>
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    
                    {/* Animated Growth Bars */}
                    <div className="space-y-4">
                      {[
                        { label: 'Month 1', value: 25, color: 'bg-green-200' },
                        { label: 'Month 2', value: 45, color: 'bg-green-300' },
                        { label: 'Month 3', value: 70, color: 'bg-green-400' },
                        { label: 'Month 4', value: 85, color: 'bg-green-500' },
                        { label: 'Month 5', value: 95, color: 'bg-green-600' }
                      ].map((item, index) => (
                        <div key={item.label} className="flex items-center">
                          <div className="w-16 text-sm text-gray-600">{item.label}</div>
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
                      <div className="text-green-800 font-semibold text-lg">Average Growth: 300%</div>
                      <div className="text-green-600 text-sm">in first 6 months</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-white">
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
                See how our coaching program has transformed careers and businesses
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
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-bold text-black mb-1">{story.name}</h3>
                    <p className="text-green-600 font-medium">{story.title}</p>
                  </div>
                  
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-green-600 mb-1">{story.growth}</div>
                    <div className="text-sm text-gray-600">{story.metric}</div>
                  </div>
                  
                  <p className="text-gray-700 text-center italic">"{story.quote}"</p>
                  
                  <div className="flex justify-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Coaching Plans */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-black mb-6">Choose Your Coaching Plan</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Select the perfect coaching package for your goals and budget
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {coachingPlans.map((plan, index) => (
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
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-green-600">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
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
              <h2 className="text-4xl font-bold mb-6">Ready to Start Your Coaching Journey?</h2>
              <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
                Join hundreds of successful coaches who have transformed their expertise into thriving businesses.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Coaching Today
                </motion.button>
                
                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Free Consultation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
};

export default CoachingPage;
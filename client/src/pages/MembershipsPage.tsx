import { motion } from 'framer-motion';
import { useState } from 'react';
import { Crown, Users, Lock, Gift, TrendingUp, Calendar, CheckCircle, Star } from 'lucide-react';
import MarketingLayout from '../layouts/MarketingLayout';

const MembershipsPage = () => {
  const [membershipType, setMembershipType] = useState('premium');

  const membershipTiers = [
    {
      id: 'basic',
      name: 'Basic Membership',
      price: 'PKR 12,000',
      period: '/month',
      description: 'Perfect for individuals starting their membership journey',
      features: [
        'Access to Basic Content',
        'Monthly Q&A Sessions',
        'Community Access',
        'Email Support',
        'Mobile App Access'
      ],
      benefits: ['Resource Library', 'Member Directory', 'Basic Analytics'],
      popular: false,
      icon: Users
    },
    {
      id: 'premium',
      name: 'Premium Membership',
      price: 'PKR 25,000',
      period: '/month',
      description: 'Advanced features for serious community builders',
      features: [
        'All Basic Features',
        'Premium Content Access',
        'Weekly Live Sessions',
        'Priority Support',
        'Advanced Analytics',
        'Custom Branding',
        'Member Segmentation'
      ],
      benefits: ['Exclusive Events', 'Networking Opportunities', 'Mentorship Programs'],
      popular: true,
      icon: Crown
    },
    {
      id: 'enterprise',
      name: 'Enterprise Membership',
      price: 'PKR 50,000',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'All Premium Features',
        'White-label Solution',
        'Dedicated Account Manager',
        'Custom Integrations',
        'Advanced Reporting',
        'Multi-language Support',
        'API Access'
      ],
      benefits: ['Custom Development', 'Training Sessions', 'Strategic Consulting'],
      popular: false,
      icon: Lock
    }
  ];

  const membershipFeatures = [
    {
      icon: Crown,
      title: 'Exclusive Content',
      description: 'Access premium content, courses, and resources available only to members.',
      stats: '500+ Premium Resources'
    },
    {
      icon: Users,
      title: 'Community Access',
      description: 'Connect with like-minded individuals in private member communities.',
      stats: '10,000+ Active Members'
    },
    {
      icon: Calendar,
      title: 'Live Events',
      description: 'Join exclusive webinars, workshops, and networking events.',
      stats: '50+ Events Monthly'
    },
    {
      icon: Gift,
      title: 'Member Perks',
      description: 'Enjoy special discounts, early access, and exclusive member benefits.',
      stats: '30% Average Savings'
    }
  ];

  const successMetrics = [
    { label: 'Active Members', value: '25,000+', growth: '+85%' },
    { label: 'Retention Rate', value: '92%', growth: '+12%' },
    { label: 'Member Satisfaction', value: '4.8/5', growth: '+18%' },
    { label: 'Revenue Growth', value: '340%', growth: '+240%' }
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
                    Exclusive Membership Programs
                  </h1>
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    Create premium membership experiences that build loyal communities, 
                    generate recurring revenue, and provide exceptional value to your members.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <motion.button
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Join Membership
                      <Crown className="ml-2 w-5 h-5" />
                    </motion.button>
                    
                    <motion.button
                      className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Explore Benefits
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
                        25K+
                      </motion.div>
                      <div className="text-sm text-gray-600">Active Members</div>
                    </div>
                    <div className="text-center">
                      <motion.div
                        className="text-3xl font-bold text-green-600 mb-2"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      >
                        92%
                      </motion.div>
                      <div className="text-sm text-gray-600">Retention Rate</div>
                    </div>
                    <div className="text-center">
                      <motion.div
                        className="text-3xl font-bold text-green-600 mb-2"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                      >
                        4.8/5
                      </motion.div>
                      <div className="text-sm text-gray-600">Satisfaction</div>
                    </div>
                  </div>
                </motion.div>

                {/* Animated Membership Growth */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-2xl">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-black">Membership Growth</h3>
                      <div className="flex items-center text-green-600">
                        <TrendingUp className="w-5 h-5 mr-1" />
                        <span className="text-sm font-semibold">+340% this year</span>
                      </div>
                    </div>
                    
                    {/* Animated Growth Chart */}
                    <div className="space-y-4">
                      {[
                        { tier: 'Basic', members: 8500, percentage: 60 },
                        { tier: 'Premium', members: 4200, percentage: 85 },
                        { tier: 'Enterprise', members: 1800, percentage: 95 },
                        { tier: 'VIP', members: 500, percentage: 40 }
                      ].map((data, index) => (
                        <div key={data.tier} className="flex items-center">
                          <div className="w-20 text-sm text-gray-600">{data.tier}</div>
                          <div className="flex-1 bg-gray-200 rounded-full h-3 mx-3">
                            <motion.div
                              className="bg-green-500 h-3 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${data.percentage}%` }}
                              transition={{ duration: 1.5, delay: index * 0.2 + 0.5 }}
                            />
                          </div>
                          <div className="text-sm font-semibold text-black">{data.members.toLocaleString()}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-green-50 rounded-lg text-center">
                      <div className="text-green-800 font-bold text-lg">15,000 Members Added</div>
                      <div className="text-green-600 text-sm">in the last 6 months</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {successMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-4xl font-bold text-green-600 mb-2">{metric.value}</div>
                  <div className="text-gray-700 font-medium mb-1">{metric.label}</div>
                  <div className="text-green-500 text-sm font-semibold">{metric.growth}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Membership Features */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-black mb-6">Membership Benefits</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Discover the exclusive benefits and features that make our membership program exceptional
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {membershipFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
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

        {/* Membership Tiers */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-black mb-6">Membership Tiers</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Choose the perfect membership level for your goals and needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {membershipTiers.map((tier, index) => (
                <motion.div
                  key={tier.id}
                  className={`relative bg-white rounded-xl shadow-lg p-8 border-2 transition-all duration-300 ${
                    tier.popular ? 'border-green-500 transform scale-105' : 'border-gray-200'
                  } hover:shadow-xl`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <tier.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-2">{tier.name}</h3>
                    <p className="text-gray-600 mb-4">{tier.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-green-600">{tier.price}</span>
                      <span className="text-gray-600">{tier.period}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-black mb-3">Features:</h4>
                    {tier.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 mb-8">
                    <h4 className="font-semibold text-black mb-3">Benefits:</h4>
                    {tier.benefits.map((benefit, bIndex) => (
                      <div key={bIndex} className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      tier.popular
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-gray-100 text-gray-800 hover:bg-green-600 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Choose {tier.name}
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
              <h2 className="text-4xl font-bold mb-6">Ready to Join Our Exclusive Community?</h2>
              <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
                Become part of an elite community of professionals and unlock exclusive benefits, content, and opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Membership Today
                </motion.button>
                
                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More About Benefits
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
};

export default MembershipsPage;
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Users, MessageCircle, Heart, Trophy, TrendingUp, Star, CheckCircle } from 'lucide-react';
import MarketingLayout from '../layouts/MarketingLayout';

const CommunitiesPage = () => {
  const [activeTab, setActiveTab] = useState('features');

  const communityFeatures = [
    {
      icon: Users,
      title: 'Member Management',
      description: 'Advanced tools to manage your community members, roles, and permissions.',
      stats: '10,000+ Members'
    },
    {
      icon: MessageCircle,
      title: 'Discussion Forums',
      description: 'Threaded discussions, Q&A sections, and real-time chat capabilities.',
      stats: '50,000+ Messages'
    },
    {
      icon: Trophy,
      title: 'Gamification',
      description: 'Badges, leaderboards, and achievement systems to boost engagement.',
      stats: '95% Engagement'
    },
    {
      icon: Heart,
      title: 'Community Events',
      description: 'Host virtual events, workshops, and networking sessions.',
      stats: '500+ Events'
    }
  ];

  const successMetrics = [
    { label: 'Active Communities', value: '1,200+', growth: '+45%' },
    { label: 'Monthly Messages', value: '2.5M+', growth: '+120%' },
    { label: 'Member Retention', value: '89%', growth: '+15%' },
    { label: 'Revenue Generated', value: '$5.2M+', growth: '+200%' }
  ];

  const communityTypes = [
    {
      title: 'Learning Communities',
      description: 'Create educational spaces for knowledge sharing and skill development.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['Course Integration', 'Study Groups', 'Progress Tracking', 'Peer Learning']
    },
    {
      title: 'Professional Networks',
      description: 'Build industry-specific networks for professionals and entrepreneurs.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['Networking Events', 'Job Board', 'Mentorship Programs', 'Industry Insights']
    },
    {
      title: 'Creative Collectives',
      description: 'Spaces for artists, designers, and creators to showcase and collaborate.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['Portfolio Sharing', 'Feedback Sessions', 'Collaboration Tools', 'Creative Challenges']
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
                    Build Thriving Communities
                  </h1>
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    Create engaging online communities that foster learning, networking, 
                    and meaningful connections around your expertise.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <motion.button
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Create Community
                    </motion.button>
                    
                    <motion.button
                      className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Explore Features
                    </motion.button>
                  </div>

                  {/* Key Stats */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <motion.div
                        className="text-3xl font-bold text-green-600 mb-1"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      >
                        1,200+
                      </motion.div>
                      <div className="text-sm text-gray-600">Active Communities</div>
                    </div>
                    <div>
                      <motion.div
                        className="text-3xl font-bold text-green-600 mb-1"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      >
                        89%
                      </motion.div>
                      <div className="text-sm text-gray-600">Member Retention</div>
                    </div>
                  </div>
                </motion.div>

                {/* Animated Community Growth */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-2xl">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-black">Community Growth</h3>
                      <div className="flex items-center text-green-600">
                        <TrendingUp className="w-5 h-5 mr-1" />
                        <span className="text-sm font-semibold">+200% this year</span>
                      </div>
                    </div>
                    
                    {/* Animated Growth Chart */}
                    <div className="space-y-4">
                      {[
                        { month: 'Jan', members: 1200, engagement: 75 },
                        { month: 'Feb', members: 1800, engagement: 80 },
                        { month: 'Mar', members: 2500, engagement: 85 },
                        { month: 'Apr', members: 3200, engagement: 88 },
                        { month: 'May', members: 4100, engagement: 92 }
                      ].map((data, index) => (
                        <div key={data.month} className="flex items-center">
                          <div className="w-12 text-sm text-gray-600">{data.month}</div>
                          <div className="flex-1 mx-3">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs text-gray-500">Members</span>
                              <span className="text-xs font-semibold text-black">{data.members.toLocaleString()}</span>
                            </div>
                            <div className="bg-gray-200 rounded-full h-2">
                              <motion.div
                                className="bg-green-500 h-2 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${(data.members / 5000) * 100}%` }}
                                transition={{ duration: 1.5, delay: index * 0.2 + 0.5 }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-green-50 rounded-lg text-center">
                      <div className="text-green-800 font-bold text-lg">50,000+ Active Members</div>
                      <div className="text-green-600 text-sm">across all communities</div>
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

        {/* Community Features */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-black mb-6">Powerful Community Features</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Everything you need to build, manage, and grow engaging online communities
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {communityFeatures.map((feature, index) => (
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
                      <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                        {feature.stats}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Types */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-black mb-6">Types of Communities</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Create the perfect community for your audience and goals
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {communityTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={type.image}
                      alt={type.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-3">{type.title}</h3>
                    <p className="text-gray-700 mb-4">{type.description}</p>
                    <div className="space-y-2">
                      {type.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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
              <h2 className="text-4xl font-bold mb-6">Ready to Build Your Community?</h2>
              <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
                Join thousands of community builders who are creating meaningful connections and driving engagement.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Building Today
                </motion.button>
                
                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Community Examples
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
};

export default CommunitiesPage;
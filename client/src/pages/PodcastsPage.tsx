import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mic, Play, Headphones, TrendingUp, Radio, Users, CheckCircle, Star, BarChart3 } from 'lucide-react';
import MarketingLayout from '../layouts/MarketingLayout';

const PodcastsPage = () => {
  const [activeFeature, setActiveFeature] = useState('hosting');

  const podcastFeatures = [
    {
      id: 'hosting',
      icon: Mic,
      title: 'Professional Hosting',
      description: 'High-quality hosting platform with unlimited storage and bandwidth.',
      stats: '99.9% Uptime'
    },
    {
      id: 'analytics',
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Detailed insights into your audience, downloads, and engagement metrics.',
      stats: '50+ Metrics'
    },
    {
      id: 'distribution',
      icon: Radio,
      title: 'Multi-Platform Distribution',
      description: 'Automatically distribute to all major podcast platforms and directories.',
      stats: '20+ Platforms'
    },
    {
      id: 'monetization',
      icon: TrendingUp,
      title: 'Monetization Tools',
      description: 'Multiple revenue streams including ads, sponsorships, and premium content.',
      stats: '80% Revenue Share'
    }
  ];

  const podcastPlans = [
    {
      id: 'starter',
      name: 'Podcast Starter',
      price: 'PKR 10,000',
      period: '/month',
      description: 'Perfect for new podcasters',
      features: [
        '5 hours of upload per month',
        'Basic analytics',
        'Distribution to major platforms',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional Podcaster',
      price: 'PKR 20,000',
      period: '/month',
      description: 'For serious podcasters and content creators',
      features: [
        'Unlimited uploads',
        'Advanced analytics',
        'Custom player embedding',
        'Priority support',
        'Monetization tools',
        'Team collaboration',
        'Custom RSS feeds'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise Podcast',
      price: 'PKR 40,000',
      period: '/month',
      description: 'Complete solution for podcast networks',
      features: [
        'Everything in Professional',
        'White-label solution',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced reporting',
        'API access',
        'Multiple shows management'
      ],
      popular: false
    }
  ];

  const successStories = [
    {
      name: 'Tech Talk Pakistan',
      host: 'Ahmad Ali',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      downloads: '500K+',
      revenue: 'PKR 1.2M',
      growth: '320%',
      quote: 'SkillBanto transformed our podcast from hobby to profitable business.'
    },
    {
      name: 'Business Insights',
      host: 'Sarah Khan',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b302?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      downloads: '1M+',
      revenue: 'PKR 2.8M',
      growth: '450%',
      quote: 'Professional tools helped us scale our podcast to new heights.'
    },
    {
      name: 'Creative Corner',
      host: 'Hassan Ahmed',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      downloads: '750K+',
      revenue: 'PKR 1.9M',
      growth: '280%',
      quote: 'The monetization features turned our passion into steady income.'
    }
  ];

  const podcastStats = [
    { label: 'Active Podcasts', value: '5,000+', growth: '+125%' },
    { label: 'Total Downloads', value: '50M+', growth: '+200%' },
    { label: 'Average Revenue', value: 'PKR 45K', growth: '+180%' },
    { label: 'Listener Satisfaction', value: '4.9/5', growth: '+8%' }
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
                    Professional Podcast Platform
                  </h1>
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    Launch, grow, and monetize your podcast with our comprehensive platform. 
                    From hosting to analytics, we provide everything you need to succeed.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <motion.button
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Launch Podcast
                      <Mic className="ml-2 w-5 h-5" />
                    </motion.button>
                    
                    <motion.button
                      className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="mr-2 w-5 h-5" />
                      Listen to Demo
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
                        5K+
                      </motion.div>
                      <div className="text-sm text-gray-600">Active Podcasts</div>
                    </div>
                    <div className="text-center">
                      <motion.div
                        className="text-3xl font-bold text-green-600 mb-2"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      >
                        50M+
                      </motion.div>
                      <div className="text-sm text-gray-600">Downloads</div>
                    </div>
                    <div className="text-center">
                      <motion.div
                        className="text-3xl font-bold text-green-600 mb-2"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                      >
                        4.9/5
                      </motion.div>
                      <div className="text-sm text-gray-600">Rating</div>
                    </div>
                  </div>
                </motion.div>

                {/* Animated Podcast Growth */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-2xl">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-black">Podcast Analytics</h3>
                      <div className="flex items-center text-green-600">
                        <TrendingUp className="w-5 h-5 mr-1" />
                        <span className="text-sm font-semibold">+200% growth</span>
                      </div>
                    </div>
                    
                    {/* Animated Growth Chart */}
                    <div className="space-y-4">
                      {[
                        { month: 'Jan', downloads: 15000, listeners: 8500 },
                        { month: 'Feb', downloads: 22000, listeners: 12200 },
                        { month: 'Mar', downloads: 35000, listeners: 18500 },
                        { month: 'Apr', downloads: 48000, listeners: 25000 },
                        { month: 'May', downloads: 65000, listeners: 32000 }
                      ].map((data, index) => (
                        <div key={data.month} className="flex items-center">
                          <div className="w-12 text-sm text-gray-600">{data.month}</div>
                          <div className="flex-1 mx-3">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs text-gray-500">Downloads</span>
                              <span className="text-xs font-semibold text-black">{data.downloads.toLocaleString()}</span>
                            </div>
                            <div className="bg-gray-200 rounded-full h-2">
                              <motion.div
                                className="bg-green-500 h-2 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${(data.downloads / 70000) * 100}%` }}
                                transition={{ duration: 1.5, delay: index * 0.2 + 0.5 }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-green-50 rounded-lg text-center">
                      <div className="text-green-800 font-bold text-lg">185K Downloads</div>
                      <div className="text-green-600 text-sm">this month</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Podcast Stats */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {podcastStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-4xl font-bold text-green-600 mb-2">{stat.value}</div>
                  <div className="text-gray-700 font-medium mb-1">{stat.label}</div>
                  <div className="text-green-500 text-sm font-semibold">{stat.growth}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Podcast Features */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-black mb-6">Podcast Features</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Professional tools and features to create, distribute, and monetize your podcast
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {podcastFeatures.map((feature, index) => (
                <motion.div
                  key={feature.id}
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
              <h2 className="text-4xl font-bold text-black mb-6">Podcast Success Stories</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                See how podcasters are building successful shows and generating revenue
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
                      alt={story.host}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-bold text-black mb-1">{story.name}</h3>
                    <p className="text-green-600 font-medium mb-3">Hosted by {story.host}</p>
                    
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div>
                        <div className="text-lg font-bold text-green-600">{story.downloads}</div>
                        <div className="text-xs text-gray-600">Downloads</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-green-600">{story.revenue}</div>
                        <div className="text-xs text-gray-600">Revenue</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-green-600">{story.growth}</div>
                        <div className="text-xs text-gray-600">Growth</div>
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
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-black mb-6">Podcast Pricing Plans</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Choose the perfect plan for your podcasting goals and budget
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {podcastPlans.map((plan, index) => (
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
                    <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-green-600">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
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
              <h2 className="text-4xl font-bold mb-6">Ready to Launch Your Podcast?</h2>
              <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
                Join thousands of successful podcasters who are building audiences and generating revenue with our platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Podcasting Today
                </motion.button>
                
                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Listen to Featured Podcasts
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
};

export default PodcastsPage;
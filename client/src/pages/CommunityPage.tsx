import React from 'react';
import { motion } from 'framer-motion';
import MarketingLayout from '../layouts/MarketingLayout';
import { Users, MessageCircle, Trophy, Heart, Share2, Calendar, Star, ArrowRight } from 'lucide-react';

export default function CommunityPage() {
  const communityStats = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Active Members",
      value: "25,000+",
      description: "Creators and learners"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Daily Discussions",
      value: "500+",
      description: "Messages exchanged"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Success Stories",
      value: "1,200+",
      description: "Shared achievements"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Support Interactions",
      value: "10,000+",
      description: "Helpful responses"
    }
  ];

  const features = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Discussion Forums",
      description: "Connect with fellow creators, share experiences, and get advice from the community.",
      details: ["Course creation tips", "Marketing strategies", "Technical support", "Success celebrations"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Networking Groups",
      description: "Join specialized groups based on your niche, experience level, or interests.",
      details: ["Industry-specific groups", "Beginner-friendly spaces", "Advanced creator circles", "Local meetups"]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Live Events",
      description: "Participate in webinars, workshops, and virtual meetups with expert speakers.",
      details: ["Weekly webinars", "Monthly workshops", "Quarterly conferences", "Expert Q&A sessions"]
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Resource Sharing",
      description: "Access and share templates, tools, and resources with the community.",
      details: ["Course templates", "Marketing materials", "Design assets", "Best practices guides"]
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Recognition Program",
      description: "Get recognized for your contributions and achievements within the community.",
      details: ["Community badges", "Feature spotlights", "Success story features", "Expert status recognition"]
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Mentorship Program",
      description: "Connect with experienced creators or become a mentor to help others succeed.",
      details: ["1-on-1 mentoring", "Group mentorship", "Peer partnerships", "Expert guidance"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Course Creator",
      avatar: "SA",
      quote: "The SkillBanto community has been invaluable for my growth. The support and knowledge sharing here is incredible.",
      courses: 8,
      students: 2500
    },
    {
      name: "Ahmed Hassan",
      role: "Digital Marketing Expert", 
      avatar: "AH",
      quote: "I've learned more from community discussions than any course. The networking opportunities are endless.",
      courses: 15,
      students: 8200
    },
    {
      name: "Fatima Khan",
      role: "Business Coach",
      avatar: "FK", 
      quote: "Being part of this community helped me scale from 0 to PKR 1M in revenue. The mentorship program is amazing.",
      courses: 12,
      students: 3800
    }
  ];

  const upcomingEvents = [
    {
      title: "Course Creation Masterclass",
      date: "January 15, 2025",
      time: "7:00 PM PKT",
      speaker: "Dr. Ali Raza",
      attendees: "250+ registered"
    },
    {
      title: "Marketing Strategies Workshop",
      date: "January 22, 2025", 
      time: "8:00 PM PKT",
      speaker: "Aisha Malik",
      attendees: "180+ registered"
    },
    {
      title: "Community Success Stories",
      date: "January 29, 2025",
      time: "7:30 PM PKT",
      speaker: "Multiple Speakers",
      attendees: "300+ registered"
    }
  ];

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
                Join the <span className="text-green-600">SkillBanto Community</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Connect with thousands of passionate creators, share knowledge, 
                get support, and grow your online education business together.
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
                  Join Community
                </a>
                <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                  Explore Features
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  A Thriving Community of Creators
                </h2>
                <p className="text-xl text-gray-600">
                  Join thousands of creators who support each other every day
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {communityStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-6 bg-gray-50 rounded-xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="text-green-600 mb-4 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {stat.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {stat.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community Features */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Community Features
                </h2>
                <p className="text-xl text-gray-600">
                  Everything you need to connect, learn, and grow together
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

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  What Our Community Says
                </h2>
                <p className="text-xl text-gray-600">
                  Hear from active community members about their experience
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-8 rounded-xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <blockquote className="text-gray-700 mb-6 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{testimonial.courses} Courses</span>
                      <span>{testimonial.students.toLocaleString()} Students</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Upcoming Community Events
                </h2>
                <p className="text-xl text-gray-600">
                  Join our live events and learn from industry experts
                </p>
              </div>

              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {event.title}
                        </h3>
                        <div className="flex items-center space-x-6 text-gray-600">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {event.date}
                          </div>
                          <span>{event.time}</span>
                          <span>by {event.speaker}</span>
                          <span className="text-green-600">{event.attendees}</span>
                        </div>
                      </div>
                      <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-lg transition-colors duration-200">
                        Register
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-green-600">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Ready to Join Our Community?
              </motion.h2>
              
              <motion.p 
                className="text-xl text-green-100 mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Connect with like-minded creators, share your journey, and accelerate your success
              </motion.p>

              <motion.a
                href="https://app.skillbanto.org/creator-registration"
                className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Join Community Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
            </div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}
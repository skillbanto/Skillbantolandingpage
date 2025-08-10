import React from 'react';
import { motion } from 'framer-motion';
import MarketingLayout from '../layouts/MarketingLayout';
import { Users, BookOpen, BarChart3, MessageCircle, Award, Bell, Calendar, Download } from 'lucide-react';

export default function StudentManagementPage() {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Student Dashboard",
      description: "Comprehensive view of all your students with progress tracking and engagement metrics.",
      details: ["Student profiles", "Progress tracking", "Engagement scores", "Activity logs"]
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Course Progress Monitoring",
      description: "Track individual and group progress through your courses with detailed analytics.",
      details: ["Lesson completion", "Quiz scores", "Time spent", "Learning paths"]
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Communication Tools",
      description: "Stay connected with your students through built-in messaging and announcement systems.",
      details: ["Direct messaging", "Group announcements", "Discussion forums", "Q&A sections"]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certificates & Achievements",
      description: "Automatically issue certificates and track student achievements and milestones.",
      details: ["Auto-certificates", "Custom badges", "Achievement tracking", "Completion rewards"]
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Automated Notifications",
      description: "Keep students engaged with automated reminders and progress notifications.",
      details: ["Progress reminders", "Course updates", "Deadline alerts", "Achievement notifications"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Deep insights into student behavior, course performance, and learning outcomes.",
      details: ["Learning analytics", "Engagement metrics", "Performance reports", "Retention analysis"]
    }
  ];

  const benefits = [
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "Save 10+ Hours Weekly",
      description: "Automate student management tasks and focus on creating great content"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Improve Student Success",
      description: "Track progress and provide timely support to help students succeed"
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Data-Driven Decisions",
      description: "Make informed course improvements based on student analytics"
    }
  ];

  const tools = [
    {
      name: "Student Profiles",
      description: "Detailed student information and learning history"
    },
    {
      name: "Progress Tracking",
      description: "Real-time monitoring of course completion and performance"
    },
    {
      name: "Engagement Analytics",
      description: "Understand how students interact with your content"
    },
    {
      name: "Communication Hub",
      description: "Centralized messaging and announcement system"
    },
    {
      name: "Automated Workflows",
      description: "Set up triggers for certificates, reminders, and follow-ups"
    },
    {
      name: "Reporting Suite",
      description: "Generate detailed reports on student performance and course metrics"
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
                <span className="text-green-600">Student Management</span> Made Easy
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Manage your students effectively with comprehensive tools for tracking progress, 
                communication, and course performance analytics.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <a 
                  href="https://app.skillbanto.com/creator-registration"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
                >
                  Start Managing Students
                </a>
                <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                  Watch Demo
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
                  Why Student Management Matters
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Effective student management leads to better outcomes for both you and your learners
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
                  Complete Student Management Suite
                </h2>
                <p className="text-xl text-gray-600">
                  Everything you need to manage and support your students effectively
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
                  Management Tools at Your Fingertips
                </h2>
                <p className="text-xl text-gray-600">
                  Powerful tools designed to streamline your student management workflow
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
                Student Success Statistics
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { number: "95%", label: "Student Satisfaction Rate" },
                  { number: "87%", label: "Course Completion Rate" },
                  { number: "10hrs", label: "Weekly Time Saved" }
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
                Ready to Transform Your Student Management?
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Start managing your students more effectively today
              </motion.p>

              <motion.a
                href="https://app.skillbanto.com/creator-registration"
                className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Get Started Now
              </motion.a>
            </div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}
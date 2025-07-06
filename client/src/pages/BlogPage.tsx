import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MarketingLayout from '../layouts/MarketingLayout';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const featuredPost = {
    title: "The Complete Guide to Creating Your First Online Course",
    excerpt: "Learn everything you need to know about planning, creating, and launching a successful online course that students love.",
    author: "Sarah Ahmed",
    date: "December 15, 2024",
    readTime: "12 min read",
    category: "Course Creation",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "complete-guide-creating-first-online-course"
  };

  const blogPosts = [
    {
      title: "10 Marketing Strategies That Actually Work for Course Creators",
      excerpt: "Discover proven marketing techniques that have helped thousands of creators build successful online education businesses.",
      author: "Ali Hassan",
      date: "December 12, 2024",
      readTime: "8 min read",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      slug: "marketing-strategies-course-creators"
    },
    {
      title: "Building a Sustainable Revenue Stream with Online Courses",
      excerpt: "Learn how to create multiple income streams and build long-term financial success through course creation.",
      author: "Fatima Khan",
      date: "December 8, 2024",
      readTime: "10 min read",
      category: "Business",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      slug: "building-sustainable-revenue-stream"
    },
    {
      title: "Student Engagement: Keeping Learners Motivated and Active",
      excerpt: "Practical tips and strategies to increase student engagement and completion rates in your online courses.",
      author: "Ahmad Malik",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "Education",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      slug: "student-engagement-motivation"
    },
    {
      title: "The Psychology of Pricing: How to Price Your Courses for Maximum Sales",
      excerpt: "Understanding the psychology behind pricing decisions and how to set prices that maximize both sales and revenue.",
      author: "Zara Qureshi",
      date: "December 1, 2024",
      readTime: "9 min read",
      category: "Pricing",
      image: "https://images.unsplash.com/photo-1554224154-26032fced8bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      slug: "psychology-pricing-courses"
    },
    {
      title: "Video Production Tips for Course Creators on a Budget",
      excerpt: "Create professional-looking course videos without breaking the bank. Equipment recommendations and filming techniques.",
      author: "Usman Sheikh",
      date: "November 28, 2024",
      readTime: "7 min read",
      category: "Production",
      image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      slug: "video-production-tips-budget"
    },
    {
      title: "Building Your Personal Brand as an Online Educator",
      excerpt: "Establish yourself as an authority in your field and build a strong personal brand that attracts students.",
      author: "Aisha Siddique",
      date: "November 25, 2024",
      readTime: "11 min read",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      slug: "building-personal-brand-online-educator"
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
                SkillBanto <span className="text-green-600">Blog</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Insights, tips, and strategies to help you succeed as an online course creator. 
                Learn from industry experts and successful educators.
              </motion.p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main Content */}
              <div className="lg:w-2/3">
                {/* Featured Post */}
                <motion.article
                  className="mb-16"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="h-64 bg-gradient-to-r from-green-400 to-green-500"></div>
                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm ml-2">
                          {featuredPost.category}
                        </span>
                      </div>
                      <Link to={`/blog/${featuredPost.slug}`}>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-green-600 transition-colors duration-200 cursor-pointer">
                          {featuredPost.title}
                        </h2>
                      </Link>
                      <p className="text-gray-600 text-lg mb-6">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {featuredPost.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {featuredPost.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {featuredPost.readTime}
                          </div>
                        </div>
                        <Link 
                          to={`/blog/${featuredPost.slug}`}
                          className="flex items-center text-green-600 hover:text-green-700 font-medium"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>

                {/* Blog Posts Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  {blogPosts.map((post, index) => (
                    <Link key={index} to={`/blog/${post.slug}`}>
                      <motion.article
                        className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <div className="h-48 bg-gradient-to-r from-gray-200 to-gray-300"></div>
                        <div className="p-6">
                          <div className="flex items-center mb-3">
                            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                              {post.category}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-200">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center space-x-3">
                              <span>{post.author}</span>
                              <span>{post.date}</span>
                            </div>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </motion.article>
                    </Link>
                  ))}
                </div>

                {/* Load More Button */}
                <motion.div
                  className="text-center mt-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-lg transition-colors duration-200">
                    Load More Posts
                  </button>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:w-1/3">
                <div className="sticky top-8 space-y-8">
                  {/* Recent Posts */}
                  <motion.div
                    className="bg-white rounded-xl p-6 shadow-sm"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Recent Posts
                    </h3>
                    <ul className="space-y-4">
                      {blogPosts.slice(0, 3).map((post, index) => (
                        <li key={index}>
                          <Link to={`/blog/${post.slug}`} className="text-left group block">
                            <h4 className="text-sm font-medium text-gray-900 group-hover:text-green-600 transition-colors duration-200 line-clamp-2">
                              {post.title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MarketingLayout>
  );
}
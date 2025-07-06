import { motion } from "framer-motion";
import { BookOpen, MessageCircle, FileText, Users, ArrowRight, Download } from "lucide-react";
import MarketingLayout from "../layouts/MarketingLayout";

interface Resource {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  items: Array<{
    title: string;
    description: string;
    type: string;
  }>;
  color: string;
  bgColor: string;
}

const resources: Resource[] = [
  {
    id: "help-center",
    title: "Help Center",
    description: "Get instant answers to common questions and comprehensive guides.",
    icon: <BookOpen className="w-8 h-8" />,
    items: [
      {
        title: "Getting Started Guide",
        description: "Complete walkthrough for new users",
        type: "Guide"
      },
      {
        title: "Course Creation Tutorial",
        description: "Step-by-step course building process",
        type: "Tutorial"
      },
      {
        title: "Payment Setup",
        description: "Configure payment gateways and pricing",
        type: "Documentation"
      },
      {
        title: "Marketing Best Practices",
        description: "Proven strategies to grow your audience",
        type: "Guide"
      }
    ],
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    id: "blog",
    title: "Blog",
    description: "Latest insights, tips, and success stories from the education industry.",
    icon: <FileText className="w-8 h-8" />,
    items: [
      {
        title: "10 Ways to Increase Course Engagement",
        description: "Proven techniques to keep students motivated",
        type: "Article"
      },
      {
        title: "The Future of Online Education",
        description: "Industry trends and predictions for 2024",
        type: "Insight"
      },
      {
        title: "Building a Profitable Course Business",
        description: "Complete business strategy guide",
        type: "Strategy"
      },
      {
        title: "Student Retention Strategies",
        description: "Keep your students coming back for more",
        type: "Guide"
      }
    ],
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    id: "case-studies",
    title: "Case Studies",
    description: "Real success stories from educators who transformed their businesses.",
    icon: <Users className="w-8 h-8" />,
    items: [
      {
        title: "Sarah's Photography Course Success",
        description: "From hobby to $50K/month business",
        type: "Success Story"
      },
      {
        title: "Language Learning Platform Growth",
        description: "How Ahmed scaled to 10,000 students",
        type: "Case Study"
      },
      {
        title: "Corporate Training Revolution",
        description: "Enterprise solution implementation",
        type: "Enterprise"
      },
      {
        title: "Creative Arts Community Building",
        description: "Building engaged learning communities",
        type: "Community"
      }
    ],
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    id: "community",
    title: "Community",
    description: "Connect with fellow educators and share experiences.",
    icon: <MessageCircle className="w-8 h-8" />,
    items: [
      {
        title: "Educator Discussion Forum",
        description: "Share tips and get advice from peers",
        type: "Forum"
      },
      {
        title: "Monthly Webinars",
        description: "Live sessions with industry experts",
        type: "Webinar"
      },
      {
        title: "Success Stories Network",
        description: "Celebrate achievements together",
        type: "Network"
      },
      {
        title: "Regional Meetups",
        description: "Local events and networking opportunities",
        type: "Events"
      }
    ],
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  }
];

export default function ResourcesPage() {
  return (
    <MarketingLayout>
      <div className="min-h-screen bg-gray-50">
        
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Resources & Support
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to succeed with SkillBanto. From comprehensive guides to community support, we're here to help you every step of the way.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-16 h-16 ${resource.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                    <div className={resource.color}>
                      {resource.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{resource.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{resource.description}</p>
                  
                  <div className="space-y-4 mb-8">
                    {resource.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                          </div>
                          <span className={`ml-3 px-2 py-1 text-xs font-medium rounded-full ${resource.bgColor} ${resource.color}`}>
                            {item.type}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <motion.button
                    className={`flex items-center gap-2 ${resource.color} font-semibold hover:gap-3 transition-all duration-200`}
                    whileHover={{ x: 5 }}
                  >
                    Explore {resource.title}
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Downloads */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Free Downloads
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get our exclusive guides and templates to accelerate your online education business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Course Creation Checklist",
                  description: "Complete 50-point checklist for launching successful courses",
                  downloads: "12.5K",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Marketing Strategy Template",
                  description: "Proven marketing plan template used by top educators",
                  downloads: "8.9K",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Pricing Strategy Guide",
                  description: "Data-driven approach to pricing your courses for maximum profit",
                  downloads: "15.2K",
                  color: "from-purple-500 to-pink-500"
                }
              ].map((download, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${download.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Download className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{download.title}</h3>
                  <p className="text-gray-600 mb-4">{download.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{download.downloads} downloads</span>
                    <motion.button
                      className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Download Free
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-12">
                Generated by our creators worldwide
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="text-5xl font-bold mb-2">2.7k+</div>
                  <div className="text-lg text-purple-100">Active Creators</div>
                </motion.div>
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="text-5xl font-bold mb-2">50k+</div>
                  <div className="text-lg text-purple-100">Students Enrolled</div>
                </motion.div>
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="text-5xl font-bold mb-2">34k+</div>
                  <div className="text-lg text-purple-100">Courses Created</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Community CTA */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Join Our Community
              </h2>
              <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
                Connect with thousands of educators, share experiences, and learn from the best in the industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Community
                </motion.button>
                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Browse Resources
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}
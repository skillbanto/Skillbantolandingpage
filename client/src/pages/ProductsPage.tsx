import { motion } from "framer-motion";
import { BookOpen, Users, BarChart3, CreditCard, ArrowRight } from "lucide-react";
import MarketingLayout from "../layouts/MarketingLayout";

interface Product {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  color: string;
  bgColor: string;
}

const products: Product[] = [
  {
    id: "course-creation",
    title: "Course Creation",
    description: "Build engaging courses with our intuitive drag-and-drop builder and professional templates.",
    icon: <BookOpen className="w-8 h-8" />,
    features: [
      "Drag & Drop Course Builder",
      "Professional Templates",
      "Video & Audio Integration",
      "Interactive Quizzes",
      "Downloadable Resources",
      "Mobile Responsive Design"
    ],
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    id: "student-management",
    title: "Student Management",
    description: "Manage your students, track progress, and provide personalized learning experiences.",
    icon: <Users className="w-8 h-8" />,
    features: [
      "Student Dashboard",
      "Progress Tracking",
      "Certificate Generation",
      "Discussion Forums",
      "Direct Messaging",
      "Grade Management"
    ],
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  }
];

export default function ProductsPage() {
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
                Our Products
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to create, market, and sell online courses. Our comprehensive platform provides all the tools to build a successful online education business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-16 h-16 ${product.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                    <div className={product.color}>
                      {product.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <motion.button
                    className={`flex items-center gap-2 ${product.color} font-semibold hover:gap-3 transition-all duration-200`}
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
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
                Seamless Integration
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                All our products work together seamlessly to provide you with a complete solution for your online education business.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      One Platform, Endless Possibilities
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Create your courses, market them effectively, process payments securely, and manage your students - all from one powerful platform.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Unified dashboard for all activities</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Data syncs across all products</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>24/7 customer support</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-4">
                      {products.map((product, index) => (
                        <motion.div
                          key={product.id}
                          className={`${product.bgColor} p-4 rounded-xl flex items-center justify-center`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                          <div className={product.color}>
                            {product.icon}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Join thousands of educators who are building successful online businesses with our comprehensive platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://skillbanto.com/register', '_blank')}
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://skillbanto.com/pricing', '_blank')}
                >
                  View Pricing
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}
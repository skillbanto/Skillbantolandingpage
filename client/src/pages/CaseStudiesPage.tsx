import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MarketingLayout from '../layouts/MarketingLayout';
import { TrendingUp, Users, DollarSign, Clock, Star, ArrowRight } from 'lucide-react';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      slug: "dr-fatima-malik-cardiology",
      name: "Dr. Fatima Malik",
      profession: "Medical Professional",
      course: "Advanced Cardiology Techniques",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      results: {
        revenue: "PKR 2.5M",
        students: "3,200+",
        timeToProfit: "2 months",
        rating: 4.9
      },
      story: "Dr. Malik transformed her medical expertise into a thriving online education business, reaching healthcare professionals across Pakistan and internationally.",
      quote: "SkillBanto helped me scale my knowledge beyond the hospital walls. I'm now impacting thousands of medical professionals worldwide.",
      highlights: [
        "Created 15+ specialized medical courses",
        "Built a community of 5,000+ healthcare professionals",
        "Achieved 95% course completion rate",
        "Expanded to international markets"
      ]
    },
    {
      slug: "ahmad-hassan-digital-marketing",
      name: "Ahmad Hassan",
      profession: "Digital Marketing Expert",
      course: "Complete Digital Marketing Mastery",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      results: {
        revenue: "PKR 4.2M",
        students: "8,500+",
        timeToProfit: "1 month",
        rating: 4.8
      },
      story: "Ahmad leveraged his agency experience to create comprehensive digital marketing courses that became the go-to resource for Pakistani entrepreneurs.",
      quote: "The platform's marketing tools helped me reach students I never thought possible. My courses are now helping thousands build successful businesses.",
      highlights: [
        "Launched 25+ marketing courses",
        "Created affiliate program with 200+ partners",
        "Generated PKR 500K in first month",
        "Built email list of 15,000+ subscribers"
      ]
    },
    {
      slug: "aisha-qureshi-graphic-design",
      name: "Aisha Qureshi",
      profession: "Graphic Designer",
      course: "Professional Graphic Design Portfolio",
      image: "https://images.unsplash.com/photo-1494790108755-2616c296e776?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      results: {
        revenue: "PKR 1.8M",
        students: "4,800+",
        timeToProfit: "6 weeks",
        rating: 4.9
      },
      story: "Aisha turned her freelance design skills into a comprehensive course series, helping aspiring designers build professional portfolios.",
      quote: "I went from struggling freelancer to successful course creator. Now I help others avoid the mistakes I made starting out.",
      highlights: [
        "Created 12 design courses across different niches",
        "Achieved 92% student satisfaction rate",
        "Built design community of 3,000+ members",
        "Collaborated with major Pakistani brands"
      ]
    },
    {
      slug: "usman-sheikh-business-consulting",
      name: "Usman Sheikh",
      profession: "Business Consultant",
      course: "Small Business Growth Strategies",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      results: {
        revenue: "PKR 3.1M",
        students: "2,400+",
        timeToProfit: "3 months",
        rating: 4.7
      },
      story: "Usman packaged his 15 years of business consulting experience into actionable courses that help small business owners scale their operations.",
      quote: "The analytics dashboard showed me exactly what my students needed. I could optimize my content based on real data.",
      highlights: [
        "Developed 20+ business strategy courses",
        "Mentored 500+ small business owners",
        "Created mastermind program with PKR 50K value",
        "Achieved 88% course completion rate"
      ]
    }
  ];

  const metrics = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Average Revenue Increase",
      value: "340%",
      description: "in first 6 months"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Students Reached",
      value: "50K+",
      description: "across all case studies"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Total Revenue Generated",
      value: "PKR 25M+",
      description: "by featured creators"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Average Time to Profit",
      value: "8 weeks",
      description: "from course launch"
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
                <span className="text-green-600">Success Stories</span> That Inspire
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Real creators, real results. See how Pakistani professionals transformed 
                their expertise into thriving online education businesses.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Success by the Numbers
                </h2>
                <p className="text-xl text-gray-600">
                  The impact our platform has made for course creators
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-6 bg-gray-50 rounded-xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="text-green-600 mb-4 flex justify-center">
                      {metric.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {metric.value}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {metric.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {metric.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Featured Success Stories
                </h2>
                <p className="text-xl text-gray-600">
                  Learn from creators who built successful online education businesses
                </p>
              </div>

              <div className="space-y-16">
                {caseStudies.map((study, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-green-100 rounded-full mr-4"></div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">
                              {study.name}
                            </h3>
                            <p className="text-gray-600">{study.profession}</p>
                            <p className="text-sm text-green-600 font-medium">
                              "{study.course}"
                            </p>
                          </div>
                        </div>

                        <blockquote className="text-lg text-gray-700 italic mb-6 border-l-4 border-green-500 pl-6">
                          "{study.quote}"
                        </blockquote>

                        <p className="text-gray-600 mb-6">
                          {study.story}
                        </p>

                        <ul className="space-y-2 mb-6">
                          {study.highlights.map((highlight, hIndex) => (
                            <li key={hIndex} className="flex items-center text-gray-700">
                              <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                              {highlight}
                            </li>
                          ))}
                        </ul>

                        <Link 
                          to={`/case-study/${study.slug}`}
                          className="flex items-center text-green-600 hover:text-green-700 font-medium transition-colors duration-200 hover:underline"
                        >
                          Read Full Case Study
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>

                      <div>
                        <div className="grid grid-cols-2 gap-6">
                          <div className="text-center p-6 bg-green-50 rounded-xl">
                            <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-3" />
                            <div className="text-2xl font-bold text-green-600 mb-1">
                              {study.results.revenue}
                            </div>
                            <div className="text-sm text-gray-600">Revenue Generated</div>
                          </div>

                          <div className="text-center p-6 bg-blue-50 rounded-xl">
                            <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                            <div className="text-2xl font-bold text-blue-600 mb-1">
                              {study.results.students}
                            </div>
                            <div className="text-sm text-gray-600">Students Taught</div>
                          </div>

                          <div className="text-center p-6 bg-purple-50 rounded-xl">
                            <Clock className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                            <div className="text-2xl font-bold text-purple-600 mb-1">
                              {study.results.timeToProfit}
                            </div>
                            <div className="text-sm text-gray-600">Time to Profit</div>
                          </div>

                          <div className="text-center p-6 bg-yellow-50 rounded-xl">
                            <Star className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                            <div className="text-2xl font-bold text-yellow-600 mb-1">
                              {study.results.rating}
                            </div>
                            <div className="text-sm text-gray-600">Average Rating</div>
                          </div>
                        </div>
                      </div>
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
                Ready to Write Your Success Story?
              </motion.h2>
              
              <motion.p 
                className="text-xl text-green-100 mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Join thousands of successful creators who have transformed their expertise into thriving businesses
              </motion.p>

              <motion.a
                href="https://app.skillbanto.org/creator-registration"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Start Your Success Story
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
            </div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}
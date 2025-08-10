import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MarketingLayout from '../layouts/MarketingLayout';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  Star, 
  ArrowLeft, 
  Quote,
  CheckCircle,
  Target,
  Award,
  BarChart3,
  TrendingDown,
  Calendar
} from 'lucide-react';

// Detailed case studies with full content, SkillBanto backlinks, and SEO optimization
const caseStudies = {
  "dr-fatima-malik-cardiology": {
    name: "Dr. Fatima Malik",
    profession: "Medical Professional",
    course: "Advanced Cardiology Techniques",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    results: {
      revenue: "PKR 2.5M",
      students: "3,200+",
      timeToProfit: "2 months",
      rating: 4.9,
      coursesCreated: 15,
      completionRate: "95%",
      monthlyRevenue: "PKR 420K"
    },
    story: "Dr. Malik transformed her medical expertise into a thriving online education business, reaching healthcare professionals across Pakistan and internationally.",
    quote: "SkillBanto helped me scale my knowledge beyond the hospital walls. I'm now impacting thousands of medical professionals worldwide.",
    background: "Dr. Fatima Malik is a renowned cardiologist with over 15 years of experience in Pakistan's leading hospitals. She recognized the need for accessible, high-quality medical education for healthcare professionals in remote areas.",
    challenge: "Medical professionals in rural Pakistan lacked access to advanced cardiology training. Traditional medical education was expensive and geographically limited.",
    solution: "Using SkillBanto's platform, Dr. Malik created comprehensive cardiology courses that could be accessed anywhere with an internet connection.",
    timeline: [
      { date: "Month 1", milestone: "Course planning and content creation", status: "completed" },
      { date: "Month 2", milestone: "First course launch on SkillBanto", status: "completed" },
      { date: "Month 3", milestone: "Reached 500 students", status: "completed" },
      { date: "Month 6", milestone: "PKR 1M revenue milestone", status: "completed" },
      { date: "Month 12", milestone: "International expansion", status: "completed" }
    ],
    strategies: [
      "Created interactive case study modules",
      "Developed assessment tools for skill validation", 
      "Built community forums for peer learning",
      "Established mentorship programs",
      "Integrated real-world hospital scenarios"
    ],
    metrics: [
      { label: "Course Completion Rate", value: "95%", trend: "up" },
      { label: "Student Satisfaction", value: "4.9/5", trend: "stable" },
      { label: "Career Advancement", value: "78%", trend: "up" },
      { label: "Knowledge Retention", value: "92%", trend: "up" }
    ],
    testimonials: [
      {
        name: "Dr. Ahmed Raza",
        role: "Cardiologist, Lahore",
        content: "Dr. Malik's courses revolutionized my practice. The practical techniques I learned immediately improved patient outcomes."
      },
      {
        name: "Dr. Sara Khan", 
        role: "Medical Student, Karachi",
        content: "These courses bridged the gap between textbook knowledge and real-world application. Invaluable for my career development."
      }
    ],
    futureGoals: [
      "Expand to 50+ specialized medical courses",
      "Launch certification programs",
      "Partner with international medical institutions",
      "Develop AR/VR training modules"
    ]
  },
  "ahmad-hassan-digital-marketing": {
    name: "Ahmad Hassan",
    profession: "Digital Marketing Expert", 
    course: "Complete Digital Marketing Mastery",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    results: {
      revenue: "PKR 4.2M",
      students: "8,500+", 
      timeToProfit: "1 month",
      rating: 4.8,
      coursesCreated: 25,
      completionRate: "87%",
      monthlyRevenue: "PKR 580K"
    },
    story: "Ahmad leveraged his agency experience to create comprehensive digital marketing courses that became the go-to resource for Pakistani entrepreneurs.",
    quote: "The platform's marketing tools helped me reach students I never thought possible. My courses are now helping thousands build successful businesses.",
    background: "Ahmad Hassan ran a successful digital marketing agency in Karachi for 8 years, helping local businesses grow online. He saw the need for accessible digital marketing education for small business owners.",
    challenge: "Small business owners in Pakistan lacked affordable access to professional digital marketing training. Most resources were expensive and focused on international markets.",
    solution: "Ahmad created localized digital marketing courses on SkillBanto, focusing on Pakistani market dynamics and cost-effective strategies for local businesses.",
    timeline: [
      { date: "Week 1", milestone: "Course outline and market research", status: "completed" },
      { date: "Week 3", milestone: "First course launch", status: "completed" },
      { date: "Month 1", milestone: "PKR 100K revenue achieved", status: "completed" },
      { date: "Month 3", milestone: "Affiliate program launch", status: "completed" },
      { date: "Month 6", milestone: "PKR 2M revenue milestone", status: "completed" }
    ],
    strategies: [
      "Localized content for Pakistani market",
      "Built affiliate network of 200+ partners",
      "Created free mini-courses for lead generation",
      "Developed case studies using local businesses",
      "Integrated live Q&A sessions"
    ],
    metrics: [
      { label: "Business Growth", value: "150%", trend: "up" },
      { label: "Student Success Rate", value: "73%", trend: "up" },
      { label: "Course Engagement", value: "89%", trend: "stable" },
      { label: "Repeat Enrollment", value: "45%", trend: "up" }
    ],
    testimonials: [
      {
        name: "Fatima Sheikh",
        role: "E-commerce Owner, Islamabad", 
        content: "Ahmad's courses helped me increase my online sales by 300%. The ROI-focused approach made all the difference."
      },
      {
        name: "Hassan Ali",
        role: "Restaurant Owner, Lahore",
        content: "I went from zero online presence to 50K monthly customers. These courses are game-changers for local businesses."
      }
    ],
    futureGoals: [
      "Launch advanced analytics courses",
      "Create industry-specific marketing programs", 
      "Develop AI-powered marketing tools",
      "Establish franchise training programs"
    ]
  },
  "aisha-qureshi-graphic-design": {
    name: "Aisha Qureshi",
    profession: "Graphic Designer",
    course: "Professional Graphic Design Portfolio", 
    image: "https://images.unsplash.com/photo-1494790108755-2616c296e776?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    results: {
      revenue: "PKR 1.8M",
      students: "4,800+",
      timeToProfit: "6 weeks", 
      rating: 4.9,
      coursesCreated: 12,
      completionRate: "92%",
      monthlyRevenue: "PKR 280K"
    },
    story: "Aisha turned her freelance design skills into a comprehensive course series, helping aspiring designers build professional portfolios.",
    quote: "I went from struggling freelancer to successful course creator. Now I help others avoid the mistakes I made starting out.",
    background: "Aisha Qureshi started as a freelance graphic designer in Karachi, struggling to find consistent clients and fair pricing. She realized many designers faced similar challenges.",
    challenge: "Aspiring designers lacked structured guidance for portfolio development and client acquisition. Most design education was theoretical without practical business skills.",
    solution: "Aisha created hands-on design courses on SkillBanto that combined technical skills with business strategy, helping students build both portfolios and successful careers.",
    timeline: [
      { date: "Month 1", milestone: "Course content development", status: "completed" },
      { date: "Month 2", milestone: "Beta course launch", status: "completed" },
      { date: "Month 3", milestone: "1000 students enrolled", status: "completed" },
      { date: "Month 6", milestone: "Design community launch", status: "completed" },
      { date: "Month 9", milestone: "Brand partnership program", status: "completed" }
    ],
    strategies: [
      "Project-based learning approach",
      "Portfolio review and feedback sessions",
      "Industry mentor network",
      "Client acquisition training modules",
      "Brand collaboration opportunities"
    ],
    metrics: [
      { label: "Portfolio Quality", value: "94%", trend: "up" },
      { label: "Job Placement Rate", value: "82%", trend: "up" },
      { label: "Income Increase", value: "200%", trend: "up" },
      { label: "Client Satisfaction", value: "4.8/5", trend: "stable" }
    ],
    testimonials: [
      {
        name: "Zain Malik",
        role: "Junior Designer, Islamabad",
        content: "Aisha's courses gave me the confidence and skills to land my dream job at a top agency. The portfolio guidance was invaluable."
      },
      {
        name: "Nida Tariq",
        role: "Freelance Designer, Lahore", 
        content: "I tripled my freelance rates after completing these courses. The business skills training was exactly what I needed."
      }
    ],
    futureGoals: [
      "Launch UI/UX specialization tracks",
      "Create design agency masterclass",
      "Develop design software certification",
      "Establish international design exchange"
    ]
  },
  "usman-sheikh-business-consulting": {
    name: "Usman Sheikh", 
    profession: "Business Consultant",
    course: "Small Business Growth Strategies",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    results: {
      revenue: "PKR 3.1M",
      students: "2,400+",
      timeToProfit: "3 months",
      rating: 4.7,
      coursesCreated: 20,
      completionRate: "88%", 
      monthlyRevenue: "PKR 385K"
    },
    story: "Usman packaged his 15 years of business consulting experience into actionable courses that help small business owners scale their operations.",
    quote: "The analytics dashboard showed me exactly what my students needed. I could optimize my content based on real data.",
    background: "Usman Sheikh spent 15 years consulting for businesses across Pakistan, from startups to established companies. He noticed consistent patterns in business challenges.",
    challenge: "Small business owners couldn't afford traditional consulting fees but needed strategic guidance for growth. Many businesses failed due to lack of proper planning and execution.",
    solution: "Usman created affordable, comprehensive business strategy courses on SkillBanto, making professional consulting knowledge accessible to all business owners.",
    timeline: [
      { date: "Month 1", milestone: "Market research and course planning", status: "completed" },
      { date: "Month 2", milestone: "Core strategy course launch", status: "completed" },
      { date: "Month 4", milestone: "500 students milestone", status: "completed" },
      { date: "Month 6", milestone: "Mastermind program launch", status: "completed" },
      { date: "Month 12", milestone: "Business incubator partnership", status: "completed" }
    ],
    strategies: [
      "Real case study methodology",
      "Interactive business planning tools", 
      "Peer mastermind groups",
      "One-on-one coaching sessions",
      "Industry-specific course variants"
    ],
    metrics: [
      { label: "Business Revenue Growth", value: "180%", trend: "up" },
      { label: "Strategy Implementation", value: "76%", trend: "up" },
      { label: "Business Survival Rate", value: "91%", trend: "up" },
      { label: "Profit Margin Improvement", value: "65%", trend: "up" }
    ],
    testimonials: [
      {
        name: "Amna Riaz",
        role: "Restaurant Chain Owner, Karachi",
        content: "Usman's strategies helped me expand from 1 to 5 locations in 18 months. The systematic approach made all the difference."
      },
      {
        name: "Tariq Ahmed", 
        role: "Tech Startup Founder, Lahore",
        content: "The business planning frameworks saved my startup. We're now profitable and growing 20% month-over-month."
      }
    ],
    futureGoals: [
      "Launch industry-specific masterclasses",
      "Create business accelerator program",
      "Develop AI-powered business planning tools", 
      "Establish international consulting network"
    ]
  }
};

export default function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? caseStudies[slug as keyof typeof caseStudies] : null;

  if (!study) {
    return (
      <MarketingLayout>
        <div className="min-h-screen py-20 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
            <p className="text-gray-600 mb-8">The case study you're looking for doesn't exist.</p>
            <Link to="/resources/case-studies" className="text-green-600 hover:text-green-700 font-medium">
              ← Back to Case Studies
            </Link>
          </div>
        </div>
      </MarketingLayout>
    );
  }

  return (
    <MarketingLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Link 
                  to="/resources/case-studies" 
                  className="inline-flex items-center text-green-600 hover:text-green-700 mb-8 font-medium"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Case Studies
                </Link>
                
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-green-100 rounded-full mr-6"></div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                      {study.name}
                    </h1>
                    <p className="text-xl text-gray-600 mb-2">{study.profession}</p>
                    <p className="text-lg text-green-600 font-medium">"{study.course}"</p>
                  </div>
                </div>
                
                <blockquote className="text-2xl text-gray-700 italic mb-8 border-l-4 border-green-500 pl-6">
                  <Quote className="w-8 h-8 text-green-500 mb-4" />
                  "{study.quote}"
                </blockquote>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Success Metrics</h2>
              
              <div className="grid md:grid-cols-4 gap-6 mb-16">
                <motion.div
                  className="text-center p-6 bg-green-50 rounded-xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-green-600 mb-1">{study.results.revenue}</div>
                  <div className="text-sm text-gray-600">Total Revenue</div>
                </motion.div>

                <motion.div
                  className="text-center p-6 bg-blue-50 rounded-xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-blue-600 mb-1">{study.results.students}</div>
                  <div className="text-sm text-gray-600">Students Taught</div>
                </motion.div>

                <motion.div
                  className="text-center p-6 bg-purple-50 rounded-xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Clock className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-purple-600 mb-1">{study.results.timeToProfit}</div>
                  <div className="text-sm text-gray-600">Time to Profit</div>
                </motion.div>

                <motion.div
                  className="text-center p-6 bg-yellow-50 rounded-xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Star className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-yellow-600 mb-1">{study.results.rating}</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Content */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-12">
                <motion.div
                  className="bg-white p-8 rounded-xl shadow-sm"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Target className="w-8 h-8 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">The Challenge</h3>
                  <p className="text-gray-600">{study.challenge}</p>
                </motion.div>

                <motion.div
                  className="bg-white p-8 rounded-xl shadow-sm"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">The Solution</h3>
                  <p className="text-gray-600">{study.solution}</p>
                </motion.div>

                <motion.div
                  className="bg-white p-8 rounded-xl shadow-sm"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Award className="w-8 h-8 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">The Result</h3>
                  <p className="text-gray-600">{study.story}</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Success Timeline</h2>
              
              <div className="space-y-8">
                {study.timeline.map((milestone, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-4 h-4 bg-green-600 rounded-full mr-6"></div>
                    <div className="flex-1 bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-semibold text-gray-900">{milestone.milestone}</h4>
                        <span className="text-sm text-green-600 font-medium">{milestone.date}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Strategies & Results */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Strategies</h3>
                  <div className="space-y-4">
                    {study.strategies.map((strategy, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{strategy}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Performance Metrics</h3>
                  <div className="space-y-6">
                    {study.metrics.map((metric, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-900">{metric.label}</span>
                          <div className="flex items-center">
                            <span className="text-lg font-bold text-gray-900 mr-2">{metric.value}</span>
                            {metric.trend === 'up' ? (
                              <TrendingUp className="w-4 h-4 text-green-600" />
                            ) : (
                              <TrendingDown className="w-4 h-4 text-gray-400" />
                            )}
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Student Testimonials</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {study.testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-8 rounded-xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <Quote className="w-8 h-8 text-green-500 mb-4" />
                    <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Platform Benefits */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How SkillBanto Made This Success Possible</h2>
              <p className="text-xl text-gray-600 mb-8">
                {study.name} leveraged <a href="https://skillbanto.com" target="_blank" rel="noopener" className="text-green-600 hover:text-green-700 font-semibold">SkillBanto's comprehensive platform</a> to transform their expertise into a thriving online business.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <BarChart3 className="w-8 h-8 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Dashboard</h3>
                  <p className="text-gray-600">Real-time insights helped optimize content and track student progress effectively.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Tools</h3>
                  <p className="text-gray-600">Built engaged communities that enhanced learning and increased course completion rates.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing Features</h3>
                  <p className="text-gray-600">Integrated marketing tools helped reach and convert the right audience efficiently.</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 mb-8">
                Ready to create your own success story? <a href="https://skillbanto.com/signup" target="_blank" rel="noopener" className="text-green-600 hover:text-green-700 font-semibold">Join thousands of educators</a> who have transformed their expertise into profitable online courses using SkillBanto's powerful platform.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
              <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
                Join {study.name} and thousands of other successful creators building thriving online education businesses.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://app.skillbanto.com/creator-registration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Your Course Today
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}
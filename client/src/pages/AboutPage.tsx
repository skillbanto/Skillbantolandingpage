import { motion } from "framer-motion";
import MarketingLayout from "../layouts/MarketingLayout";

// Import team images
import rafiqImage from "../assets/team/rafiq.png";
import hassanImage from "../assets/team/hassan.png";
import usmanImage from "../assets/team/usman.png";
import faisalImage from "../assets/team/faisal.png";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  title: string;
  image: string;
  color: string;
  description: string;
  details: {
    experience: string;
    achievements: string[];
    expertise: string[];
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Muhammad Rafiq",
    role: "CEO",
    title: "Visionary Leader",
    image: rafiqImage,
    color: "from-emerald-500 to-teal-600",
    description: "Leading innovation in education technology with 15+ years of experience in building scalable platforms.",
    details: {
      experience: "15+ years in education technology and platform development",
      achievements: [
        "Built 3 successful edtech startups",
        "Scaled platforms to 1M+ users",
        "Led $10M+ funding rounds",
        "Featured in Forbes 30 Under 30"
      ],
      expertise: ["Strategic Leadership", "Product Vision", "Team Building", "Investor Relations"]
    }
  },
  {
    id: 2,
    name: "Muhammad Hassan",
    role: "CMO & Co-Founder", 
    title: "Marketing Strategist",
    image: hassanImage,
    color: "from-purple-500 to-indigo-600",
    description: "Expert in digital marketing and brand strategy, driving global growth and user acquisition.",
    details: {
      experience: "12+ years in digital marketing and growth strategy",
      achievements: [
        "Grew user base by 500% in 2 years",
        "Led marketing for 3 unicorn startups",
        "Generated $50M+ in revenue",
        "Built viral marketing campaigns"
      ],
      expertise: ["Digital Marketing", "Growth Hacking", "Brand Strategy", "Content Marketing"]
    }
  },
  {
    id: 3,
    name: "Muhammad Usman",
    role: "CTO & Co-Founder",
    title: "Tech Innovator",
    image: usmanImage,
    color: "from-blue-500 to-cyan-600",
    description: "Building scalable technology solutions for millions of learners worldwide with cutting-edge architecture.",
    details: {
      experience: "14+ years in software engineering and system architecture",
      achievements: [
        "Built systems serving 10M+ users",
        "Led engineering teams of 50+",
        "Created 20+ patents in edtech",
        "Expert in cloud architecture"
      ],
      expertise: ["System Architecture", "Cloud Computing", "AI/ML", "DevOps"]
    }
  },
  {
    id: 4,
    name: "Dr Muhammad Faisal",
    role: "CFO",
    title: "Financial Expert",
    image: faisalImage,
    color: "from-teal-500 to-green-600",
    description: "Strategic financial leadership ensuring sustainable growth and innovation with data-driven decisions.",
    details: {
      experience: "18+ years in finance and investment banking",
      achievements: [
        "PhD in Financial Economics",
        "Managed $100M+ portfolios",
        "Advisor to 10+ startups",
        "Former Goldman Sachs VP"
      ],
      expertise: ["Financial Strategy", "Investment Analysis", "Risk Management", "Corporate Finance"]
    }
  }
];

const stats = [
  { number: "2.7K+", label: "Active Creators" },
  { number: "75M+", label: "Students Served" },
  { number: "34K+", label: "Courses Published" },
  { number: "1000+", label: "Success Stories" }
];

export default function AboutPage() {
  return (
    <MarketingLayout>
      <div className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-20"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block bg-green-500/20 text-green-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  About SkillBanto
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Transforming Education Through 
                  <span className="bg-gradient-to-r from-emerald-200 to-green-200 bg-clip-text text-transparent"> Technology</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Where some see challenges, we see a roadmap to innovation. Our vision is our compass, 
                  guiding us through the evolving terrains of education technology.
                </p>
              </motion.div>
              
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-3xl font-bold mb-2">{stat.number}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white relative">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50/50 to-transparent"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-green-500/20 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                The Team
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet the Founders
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Where some see challenges, we see a roadmap to innovation. Our vision is our compass, 
                guiding us through the evolving terrains of education technology.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.div
                    className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${member.color} p-1 cursor-pointer`}
                    whileHover={{ 
                      scale: 1.1,
                      width: 350,
                      height: 500,
                      zIndex: 10,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    style={{
                      width: 280,
                      height: 380,
                    }}
                  >
                    <div className="relative h-full bg-slate-900 rounded-xl overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500"
                      />
                      
                      {/* Default Overlay - Always visible */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                          <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                          <p className="text-sm text-gray-300">{member.role}</p>
                        </div>
                      </div>

                      {/* Expanded Details on Hover */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ zIndex: 10 }}
                      >
                        <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                          {/* Top section with name and role */}
                          <div>
                            <h3 className="font-bold text-xl mb-2">{member.name}</h3>
                            <p className="text-base text-gray-200 mb-3">{member.role}</p>
                          </div>
                          
                          {/* Middle section with description */}
                          <div className="flex-1 flex items-center">
                            <p className="text-sm text-gray-300 leading-relaxed">
                              {member.description}
                            </p>
                          </div>
                          
                          {/* Bottom section with quick stats */}
                          <div className="space-y-2">
                            <div className="text-xs text-gray-400">
                              <span className="font-medium text-white">{member.details.experience.split(' ')[0]}</span> Experience
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {member.details.expertise.slice(0, 2).map((skill, skillIndex) => (
                                <span 
                                  key={skillIndex}
                                  className="text-xs bg-white/20 text-white px-2 py-1 rounded-full"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                            <div className="text-xs text-gray-400 mt-2">
                              Key achievements and expertise
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Gradient Border Effect on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-xl`}></div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Join Our Mission?
              </h2>
              <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
                Be part of the education revolution. Start creating and sharing your knowledge with the world today.
              </p>
              <motion.a
                href="https://app.skillbanto.com/creator-registration"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Now
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}
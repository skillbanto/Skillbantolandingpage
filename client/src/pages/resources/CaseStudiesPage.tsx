import React from 'react';
import { ParticleBackground } from '../../components/effects';
import { Link } from 'react-router-dom';

const CaseStudiesPage = () => {
  // Sample case studies
  const caseStudies = [
    {
      id: 1,
      title: "How MindfulMaster Grew to 50,000 Students",
      excerpt: "Learn how a yoga instructor built a 7-figure online education business with SkillBanto.",
      category: "Course Creator",
      image: "https://via.placeholder.com/600x400",
      stats: [
        { label: "Revenue Increase", value: "432%" },
        { label: "Students", value: "50,000+" },
        { label: "Course Completion Rate", value: "87%" }
      ]
    },
    {
      id: 2,
      title: "TechAcademy's Journey to $1M in Course Sales",
      excerpt: "How a technical training company scaled their business with our platform.",
      category: "Education Business",
      image: "https://via.placeholder.com/600x400",
      stats: [
        { label: "Monthly Revenue", value: "$85,000" },
        { label: "Courses Created", value: "24" },
        { label: "Student Satisfaction", value: "4.8/5" }
      ]
    },
    {
      id: 3,
      title: "CulinaryPro: From Local Classes to Global Reach",
      excerpt: "A chef's journey from local cooking classes to an international culinary school.",
      category: "Solo Entrepreneur",
      image: "https://via.placeholder.com/600x400",
      stats: [
        { label: "Countries Reached", value: "47" },
        { label: "Student Growth", value: "328%" },
        { label: "Course Rating", value: "4.9/5" }
      ]
    },
  ];
  
  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Background particle effect */}
      <ParticleBackground 
        colorScheme="primary" 
        density="low" 
        speed="slow" 
        className="absolute inset-0 -z-10"
      />
      
      <div className="container mx-auto py-12 px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4">Success Stories</h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover how creators and businesses are achieving remarkable success with SkillBanto.
          </p>
        </div>

        {/* Featured case study */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16 max-w-5xl mx-auto">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src="https://via.placeholder.com/600x400" 
                alt="Featured case study" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="text-sm text-primary font-semibold mb-2">FEATURED SUCCESS STORY</div>
              <h2 className="text-2xl font-bold mb-3">LanguageMastery: Building a $2M Language Learning Empire</h2>
              <p className="text-gray-600 mb-6">
                From a single Spanish course to a comprehensive language learning platform with 12 languages and over 100,000 students worldwide.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">$2M+</div>
                  <div className="text-sm text-gray-500">Annual Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">12</div>
                  <div className="text-sm text-gray-500">Languages</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100K+</div>
                  <div className="text-sm text-gray-500">Students</div>
                </div>
              </div>
              
              <Link 
                to="/case-studies/language-mastery" 
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors inline-block"
              >
                Read Full Story
              </Link>
            </div>
          </div>
        </div>

        {/* Case studies grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
              <img 
                src={study.image} 
                alt={study.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-grow">
                <div className="text-sm text-primary font-semibold mb-2">{study.category}</div>
                <h3 className="text-xl font-semibold mb-3">{study.title}</h3>
                <p className="text-gray-600 mb-6">{study.excerpt}</p>
                
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {study.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-lg font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="px-6 pb-6">
                <Link 
                  to={`/case-studies/${study.id}`} 
                  className="text-primary font-medium hover:underline"
                >
                  Read Full Story →
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="bg-primary/10 rounded-lg p-8 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-gray-600 mb-6">
            Join thousands of creators who are building successful online education businesses with SkillBanto.
          </p>
          <Link 
            to="/pricing" 
            className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors inline-block font-medium"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
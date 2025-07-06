import React from 'react';
import { ParticleBackground } from '../../components/effects';
import { Link } from 'react-router-dom';

const CommunityPage = () => {
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
          <h1 className="text-4xl font-bold mb-4">SkillBanto Community</h1>
          <p className="text-xl text-gray-600 mb-8">
            Connect with fellow creators, share knowledge, and grow together.
          </p>
        </div>

        {/* Community Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2">10,000+ Members</h2>
            <p className="text-gray-600">
              Join a thriving community of course creators, educators, and entrepreneurs from around the world.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2">Active Forums</h2>
            <p className="text-gray-600">
              Participate in discussions on course creation, marketing, technology, and more.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2">Regular Events</h2>
            <p className="text-gray-600">
              Join webinars, workshops, and networking events designed to help you grow your business.
            </p>
          </div>
        </div>

        {/* Community Forums */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Popular Discussion Forums</h2>
          
          <div className="space-y-4">
            <div className="border-b pb-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium text-primary">Course Creation Strategies</h3>
                <span className="text-sm text-gray-500">485 topics</span>
              </div>
              <p className="text-gray-600 mb-2">
                Discuss course planning, content creation, video production, and more.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span>Latest: "Tips for Creating Engaging Video Lessons" • 2 hours ago</span>
              </div>
            </div>
            
            <div className="border-b pb-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium text-primary">Marketing & Sales</h3>
                <span className="text-sm text-gray-500">372 topics</span>
              </div>
              <p className="text-gray-600 mb-2">
                Share marketing strategies, sales tactics, and promotional ideas.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span>Latest: "Email Marketing Sequences That Convert" • 5 hours ago</span>
              </div>
            </div>
            
            <div className="border-b pb-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium text-primary">Student Engagement</h3>
                <span className="text-sm text-gray-500">298 topics</span>
              </div>
              <p className="text-gray-600 mb-2">
                Learn how to keep students engaged and improve completion rates.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span>Latest: "Building Community Within Your Course" • 1 day ago</span>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium text-primary">Technical Support</h3>
                <span className="text-sm text-gray-500">215 topics</span>
              </div>
              <p className="text-gray-600 mb-2">
                Get help with platform features, integrations, and technical issues.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span>Latest: "Setting Up Custom Domains" • 3 hours ago</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              to="/community/forums" 
              className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors inline-block"
            >
              Browse All Forums
            </Link>
          </div>
        </div>
        
        {/* Join Community CTA */}
        <div className="bg-primary/10 rounded-lg p-8 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Join Our Community Today</h2>
          <p className="text-gray-600 mb-6">
            Connect with fellow educators, get answers to your questions, and accelerate your growth.
          </p>
          <Link 
            to="/community/join" 
            className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors inline-block font-medium"
          >
            Sign Up For Free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
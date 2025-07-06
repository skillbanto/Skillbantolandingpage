import React from 'react';
import { ParticleBackground } from '../../components/effects';

const HelpCenterPage = () => {
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
          <h1 className="text-4xl font-bold mb-4">Help Center</h1>
          <p className="text-xl text-gray-600 mb-8">
            Find answers to your questions and learn how to get the most out of SkillBanto.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-primary">How do I create my first course?</h3>
                <p className="text-gray-600 mt-2">
                  To create your first course, navigate to the Dashboard, click on "Create Course," and follow the step-by-step process. You'll be able to add modules, lessons, and content to build your course.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-primary">How are payments processed?</h3>
                <p className="text-gray-600 mt-2">
                  We use secure payment processors to handle all transactions. You can receive payments via bank transfer, PayPal, or other supported methods. Funds are typically available for withdrawal within 7 days.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-primary">Can I offer free courses?</h3>
                <p className="text-gray-600 mt-2">
                  Yes, you can set your course price to free, or create free preview lessons to give students a taste of your content before they purchase the full course.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-primary">How do I contact support?</h3>
                <p className="text-gray-600 mt-2">
                  You can reach our support team by clicking the Support button in your dashboard, or by sending an email to support@skillbanto.com. We typically respond within 24 hours.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" 
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" 
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" 
                  rows={4}
                  placeholder="How can we help you?"
                />
              </div>
              
              <button 
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterPage;
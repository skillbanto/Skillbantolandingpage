import React from 'react';
import { ParticleBackground } from '../../components/effects';

const MarketingToolsPage = () => {
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
          <h1 className="text-4xl font-bold mb-4">Marketing Tools</h1>
          <p className="text-xl text-gray-600 mb-8">
            Powerful marketing tools to help you promote your courses and reach more students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Email Marketing</h2>
            <p className="text-gray-600 mb-4">
              Create and send professional email campaigns to your audience. Build automated sequences and track performance.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Automated email sequences</li>
              <li>Customizable email templates</li>
              <li>Performance analytics</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Social Media Integration</h2>
            <p className="text-gray-600 mb-4">
              Connect your social media accounts and schedule posts. Create shareable content and track engagement.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Social media scheduling</li>
              <li>Content creation tools</li>
              <li>Engagement analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingToolsPage;
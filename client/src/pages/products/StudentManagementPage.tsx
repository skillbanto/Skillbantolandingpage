import React from 'react';
import { ParticleBackground } from '../../components/effects';

const StudentManagementPage = () => {
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
          <h1 className="text-4xl font-bold mb-4">Student Management</h1>
          <p className="text-xl text-gray-600 mb-8">
            Powerful tools to manage your students, track progress, and engage with your audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Student Profiles</h2>
            <p className="text-gray-600 mb-4">
              Manage student profiles, track course progress, and view engagement metrics for each student.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Detailed student profiles</li>
              <li>Progress tracking</li>
              <li>Engagement analytics</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Communication Tools</h2>
            <p className="text-gray-600 mb-4">
              Stay connected with your students through integrated messaging, announcements, and feedback tools.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Direct messaging system</li>
              <li>Announcement broadcasts</li>
              <li>Feedback collection</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentManagementPage;
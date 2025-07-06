import React from 'react';
import { ParticleBackground } from '../../components/effects';

const CourseCreationPage = () => {
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
          <h1 className="text-4xl font-bold mb-4">Course Creation</h1>
          <p className="text-xl text-gray-600 mb-8">
            Build professional courses with our powerful yet easy-to-use course creation tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Course Builder</h2>
            <p className="text-gray-600 mb-4">
              Design your course structure with our intuitive drag-and-drop interface. Organize content into modules and lessons.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Drag-and-drop course organization</li>
              <li>Module and lesson management</li>
              <li>Schedule and drip content features</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Content Creation</h2>
            <p className="text-gray-600 mb-4">
              Create engaging content with our rich media editor. Support for text, images, video, and interactive elements.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Rich text editor with formatting</li>
              <li>Video and audio embedding</li>
              <li>PDF and document uploads</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCreationPage;
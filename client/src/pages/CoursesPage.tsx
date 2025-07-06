import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { getQueryFn } from '../lib/queryClient';
import { Button } from '../components/ui/button';

// Define the Course type
interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  creatorId: number;
  thumbnail: string | null;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

// Sample featured courses to show before API data loads
const sampleCourses: Course[] = [
  {
    id: 1,
    title: "Digital Marketing Masterclass",
    description: "Learn how to create and implement effective digital marketing strategies for your business or clients.",
    price: 15000,
    creatorId: 1,
    thumbnail: null,
    published: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 2,
    title: "Web Development for Beginners",
    description: "Start your journey to becoming a professional web developer with this comprehensive course.",
    price: 12000,
    creatorId: 1,
    thumbnail: null,
    published: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 3,
    title: "Personal Finance and Investing",
    description: "Master the fundamentals of personal finance and learn investment strategies for long-term wealth creation.",
    price: 8000,
    creatorId: 2,
    thumbnail: null,
    published: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

const CoursesPage = () => {
  // Use React Query to fetch the courses
  const { data: courses, isLoading, error } = useQuery<Course[]>({
    queryKey: ['/api/courses'],
    queryFn: getQueryFn<Course[]>({ on401: "returnNull" }),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  // Format price function
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  // State for course type filter
  const [courseType, setCourseType] = useState<'all' | 'featured' | 'new'>('all');

  // Get the courses to display based on the filter
  const displayedCourses = courses && courses.length > 0 ? courses : sampleCourses;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100V0l100 100H0z" fill="currentColor"></path>
          </svg>
        </div>
        <div className="container mx-auto py-16 px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Elevate Your Skills with Skillbanto Courses</h1>
            <p className="text-xl opacity-90 mb-8">
              Browse our collection of high-quality courses created by Pakistani experts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-emerald-700 hover:bg-gray-100">
                Start Learning
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Become an Instructor
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto py-12 px-4">
        {/* Course type filter */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              onClick={() => setCourseType('all')}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                courseType === 'all' 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              All Courses
            </button>
            <button
              onClick={() => setCourseType('featured')}
              className={`px-4 py-2 text-sm font-medium ${
                courseType === 'featured' 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => setCourseType('new')}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                courseType === 'new' 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              New Arrivals
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center">
            <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 py-8">
            <p>Error loading courses. Please try again later.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedCourses.map((course) => (
              <div 
                key={course.id} 
                className="bg-white rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-48 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 relative">
                  {course.thumbnail ? (
                    <img 
                      src={course.thumbnail} 
                      alt={course.title} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                        <span className="text-emerald-600 text-xl font-bold">
                          {course.title.substring(0, 2).toUpperCase()}
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="absolute top-3 left-3 bg-emerald-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    FEATURED
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{course.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">{course.description}</p>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map(star => (
                        <svg key={star} className="w-4 h-4 fill-current text-yellow-500" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                      <span className="text-gray-500 text-xs ml-1">(24 reviews)</span>
                    </div>
                    <div className="ml-auto flex items-center text-gray-500 text-sm">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      8 hours
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                    <div className="text-xl font-bold text-emerald-600">
                      {formatPrice(course.price)}
                    </div>
                    <Link 
                      to={`/courses/${course.id}`}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      View Course
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Skillbanto Platform Benefits */}
        <section className="mt-20 bg-white rounded-xl p-8 shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Why Create Courses on Skillbanto?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-emerald-100 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Turn Your Knowledge Into Income</h3>
              <p className="text-gray-600">Create courses once and earn continuously. Share your expertise and get paid for it.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Easy-to-Use Platform</h3>
              <p className="text-gray-600">No technical skills needed. Our drag-and-drop interface makes course creation simple.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Built for Pakistan</h3>
              <p className="text-gray-600">Local currency pricing, WhatsApp support, and features designed for Pakistani creators.</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/pricing"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md font-medium inline-flex items-center"
            >
              Become an Instructor
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CoursesPage;
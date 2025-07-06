import React from 'react';
import { ParticleBackground } from '../../components/effects';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: "How to Create Engaging Online Courses",
      excerpt: "Learn the top strategies for creating online courses that keep students engaged and coming back for more.",
      date: "April 15, 2025",
      author: "Sarah Johnson",
      category: "Course Creation",
      image: "https://via.placeholder.com/600x400"
    },
    {
      id: 2,
      title: "5 Marketing Strategies for Course Creators",
      excerpt: "Discover effective marketing strategies to promote your online courses and reach more students.",
      date: "April 10, 2025",
      author: "Michael Chen",
      category: "Marketing",
      image: "https://via.placeholder.com/600x400"
    },
    {
      id: 3,
      title: "Setting the Right Price for Your Online Course",
      excerpt: "Find the perfect balance between value and affordability when pricing your online courses.",
      date: "April 5, 2025",
      author: "Jessica Williams",
      category: "Sales",
      image: "https://via.placeholder.com/600x400"
    },
    {
      id: 4,
      title: "Building a Community Around Your Courses",
      excerpt: "Learn how to create an engaged community of students that enhances the learning experience.",
      date: "March 28, 2025",
      author: "David Rodriguez",
      category: "Community",
      image: "https://via.placeholder.com/600x400"
    }
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
          <h1 className="text-4xl font-bold mb-4">SkillBanto Blog</h1>
          <p className="text-xl text-gray-600 mb-8">
            Tips, strategies, and insights for course creators and online educators.
          </p>
        </div>

        {/* Featured post */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12 max-w-4xl mx-auto">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src="https://via.placeholder.com/600x400" 
                alt="Featured post" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="text-sm text-primary font-semibold mb-2">FEATURED POST</div>
              <h2 className="text-2xl font-bold mb-3">The Future of Online Education in 2025</h2>
              <p className="text-gray-600 mb-4">
                Explore the latest trends and technologies shaping the future of online education and what it means for course creators.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <span>April 20, 2025</span>
                <span className="mx-2">•</span>
                <span>By Robert Adams</span>
              </div>
              <Link 
                to="/blog/future-of-online-education" 
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors inline-block"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-primary font-semibold mb-2">{post.category.toUpperCase()}</div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>By {post.author}</span>
                </div>
                <Link 
                  to={`/blog/${post.id}`} 
                  className="text-primary font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
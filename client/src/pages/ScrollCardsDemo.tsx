import HorizontalScrollCards from "../components/HorizontalScrollCards";

const sampleCards = [
  {
    id: 1,
    title: "Web Development Mastery",
    description: "Learn modern web development with React, Node.js, and advanced JavaScript techniques to build professional applications.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop",
    badge: "Popular",
    color: "#3B82F6"
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Create stunning mobile applications using React Native and Flutter for both iOS and Android platforms.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    badge: "New",
    color: "#10B981"
  },
  {
    id: 3,
    title: "Data Science & Analytics",
    description: "Master data analysis, machine learning, and visualization using Python, pandas, and advanced statistical methods.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    color: "#8B5CF6"
  },
  {
    id: 4,
    title: "Digital Marketing",
    description: "Learn effective digital marketing strategies including SEO, social media marketing, and content creation.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    badge: "Trending",
    color: "#F59E0B"
  },
  {
    id: 5,
    title: "UI/UX Design",
    description: "Design beautiful and intuitive user interfaces with modern design principles and industry-standard tools.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop",
    color: "#EF4444"
  },
  {
    id: 6,
    title: "Cybersecurity Fundamentals",
    description: "Protect digital assets and learn ethical hacking techniques to secure networks and applications.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
    badge: "Expert",
    color: "#06B6D4"
  },
  {
    id: 7,
    title: "Cloud Computing",
    description: "Master cloud platforms like AWS, Azure, and Google Cloud for scalable application deployment.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
    color: "#84CC16"
  },
  {
    id: 8,
    title: "Artificial Intelligence",
    description: "Explore AI concepts, neural networks, and deep learning to build intelligent applications.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=300&fit=crop",
    badge: "Advanced",
    color: "#EC4899"
  }
];

const testimonialCards = [
  {
    id: 1,
    title: "Sarah Johnson",
    description: "This platform transformed my career! The courses are practical and the instructors are top-notch. I landed my dream job as a full-stack developer.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop",
    badge: "★★★★★",
    color: "#3B82F6"
  },
  {
    id: 2,
    title: "Michael Chen",
    description: "The data science course exceeded my expectations. Real-world projects and excellent support helped me transition to analytics.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    badge: "★★★★★",
    color: "#10B981"
  },
  {
    id: 3,
    title: "Emily Rodriguez",
    description: "Amazing learning experience! The UI/UX design course taught me everything I needed to start my freelancing business.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    badge: "★★★★★",
    color: "#8B5CF6"
  },
  {
    id: 4,
    title: "David Kim",
    description: "The mobile development course was comprehensive and well-structured. Now I'm building apps for major clients!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    badge: "★★★★★",
    color: "#F59E0B"
  }
];

export default function ScrollCardsDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Horizontal Scroll Cards Demo
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore different variations of horizontal scrolling cards with manual navigation, auto-scroll, and various configurations.
          </p>
        </div>

        {/* Manual Navigation Cards */}
        <div className="mb-20">
          <HorizontalScrollCards 
            cards={sampleCards}
            title="Featured Courses"
            subtitle="Discover our most popular courses with manual navigation controls"
            cardWidth={350}
            gap={24}
            showNavigation={true}
            autoScroll={false}
            className="mb-12"
          />
        </div>

        {/* Auto-Scroll Cards */}
        <div className="mb-20">
          <HorizontalScrollCards 
            cards={testimonialCards}
            title="Student Testimonials"
            subtitle="Auto-scrolling testimonials that pause on hover"
            cardWidth={320}
            gap={20}
            showNavigation={false}
            autoScroll={true}
            autoScrollSpeed={25}
            className="mb-12"
          />
        </div>

        {/* Compact Cards */}
        <div className="mb-20">
          <HorizontalScrollCards 
            cards={sampleCards.slice(0, 6)}
            title="Quick Browse"
            subtitle="Compact cards with both navigation and auto-scroll"
            cardWidth={280}
            gap={16}
            showNavigation={true}
            autoScroll={true}
            autoScrollSpeed={35}
            className="mb-12"
          />
        </div>

        {/* Configuration Examples */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Configuration Options</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Manual Navigation</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Left/Right arrow buttons</li>
                <li>• Smooth scrolling animation</li>
                <li>• Automatic button state management</li>
                <li>• Responsive design</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Auto-Scroll</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Continuous left-to-right scrolling</li>
                <li>• Pauses on hover interaction</li>
                <li>• Configurable scroll speed</li>
                <li>• Seamless loop animation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { Link } from "react-router-dom";

const features = [
  {
    id: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Powerful Course Builder",
    description: "Easily create engaging courses with our drag-and-drop builder, multimedia support, and customizable templates.",
    link: "#",
  },
  {
    id: 2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    title: "Marketing Automation",
    description: "Grow your audience with email marketing, sales funnels, landing pages, and automated campaigns.",
    link: "#",
  },
  {
    id: 3,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Simple Payment Solutions",
    description: "Accept payments globally with multiple pricing options, subscriptions, payment plans, and zero transaction fees.",
    link: "#",
  },
  {
    id: 4,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Student Management",
    description: "Easily manage your students with detailed profiles, progress tracking, and customized learning paths.",
    link: "#",
  },
  {
    id: 5,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Detailed Analytics",
    description: "Make data-driven decisions with comprehensive analytics on sales, student engagement, and course performance.",
    link: "#",
  },
  {
    id: 6,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Live Engagement Tools",
    description: "Engage with your students in real-time through live webinars, coaching calls, and interactive sessions.",
    link: "#",
  },
];

const FeaturesSection = () => {
  return (
    <section className="section bg-white relative" id="features">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white -z-10"></div>
      
      <div className="container-wide">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate slide-up">
          <h2 className="mb-4">Everything You Need To Create and Sell Courses</h2>
          <p className="text-xl text-gray-600">
            A complete toolkit to create, market, and sell your knowledge online without the technical hassle.
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className="feature-card animate slide-up" 
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <Link to={feature.link} className="text-primary font-medium hover:text-primary/80 inline-flex items-center">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        {/* Integration section */}
        <div className="mt-24 bg-white rounded-2xl shadow-xl overflow-hidden animate slide-up">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Seamless Integrations
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">Connect With Your Favorite Tools</h3>
              <p className="text-gray-600 mb-6">
                SkillBanto integrates with 100+ tools including email marketing platforms, CRMs, analytics tools, and payment gateways so you can keep using the tools you love.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {['Zapier', 'Mailchimp', 'Google Analytics', 'PayPal', 'Stripe', 'ConvertKit'].map((tool) => (
                  <div key={tool} className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">{tool}</span>
                  </div>
                ))}
              </div>
              <Link to="#" className="btn-primary self-start">
                View all integrations
              </Link>
            </div>
            
            <div className="bg-gray-100 p-8 md:p-0 flex items-center justify-center">
              <img 
                src="https://placehold.co/600x500/f3f4f6/1c64f2?text=Integrations&font=montserrat" 
                alt="SkillBanto Integrations" 
                className="w-full h-auto max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
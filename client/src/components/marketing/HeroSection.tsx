import { Link } from "react-router-dom";
import DynamicRevenueCounter from "../DynamicRevenueCounter";

const HeroSection = () => {
  return (
    <section className="section-hero bg-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10"></div>
      
      {/* Abstract shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-10 animate slide-up" style={{ animationDelay: "0.1s" }}>
            <h1 className="mb-6 tracking-tight">
              <span className="block font-bold text-gray-900">Create & Sell Amazing</span>
              <span className="gradient-text font-bold">Online Courses</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
              The all-in-one platform to easily create, market, and sell your knowledge online. Trusted by over 10,000 educators worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="#" className="btn-primary">
                Start for free
              </Link>
              <Link to="#" className="btn-secondary flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch demo
              </Link>
            </div>
            
            {/* Testimonial badge */}
            <div className="mt-10 bg-white rounded-lg border border-gray-100 shadow-sm p-4 max-w-md">
              <div className="flex items-center space-x-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-gray-500 text-sm">4.9/5 from 2,000+ reviews</span>
              </div>
              <p className="text-gray-700 text-sm italic">
                "SkillBanto has transformed how I create and sell courses. My revenue increased by 300% within 3 months!"
              </p>
              <div className="mt-2 flex items-center">
                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-800 font-semibold">
                  SA
                </div>
                <span className="ml-2 text-sm font-medium text-gray-900">Sarah Ahmed, Business Coach</span>
              </div>
            </div>
          </div>
          
          {/* Right Image/Video */}
          <div className="w-full lg:w-1/2 relative animate slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://placehold.co/800x600/f4f7ff/1c64f2?text=SkillBanto+Dashboard&font=montserrat" 
                alt="SkillBanto platform dashboard" 
                className="w-full h-auto rounded-xl"
              />
              
              {/* Floating UI elements */}
              <div className="absolute top-5 right-5 bg-white rounded-lg shadow-lg p-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-gray-800">Sales: +24%</span>
              </div>
              
              <div className="absolute bottom-5 left-5 bg-white rounded-lg shadow-lg py-2 px-4">
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="h-8 w-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-700">
                        U{i+1}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-700">42 students enrolled today</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Dynamic Revenue Counter Section */}
        <div className="mt-20 pt-10 border-t border-gray-100">
          <div className="w-full rounded-xl overflow-hidden bg-gradient-to-r from-purple-900 to-purple-700 py-12 px-8 text-center">
            <DynamicRevenueCounter initialValue={167000} />
            <p className="text-white/80 text-sm mt-2">made by creators, selling courses</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
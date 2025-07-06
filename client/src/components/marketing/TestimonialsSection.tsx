import { useState } from "react";

const testimonials = [
  {
    id: 1,
    quote: "SkillBanto transformed my coaching business. I was able to create and launch my signature course in just one week, and I've made over $50,000 in the first month alone.",
    author: "Sarah Ahmed",
    position: "Business Coach",
    company: "Growth Accelerator",
    avatar: "SA",
    rating: 5
  },
  {
    id: 2,
    quote: "The marketing automation tools saved me countless hours. My email sequences and sales funnels run on autopilot, and my course enrollments have increased by 230% since switching to SkillBanto.",
    author: "Muhammad Ali",
    position: "Digital Marketing Expert",
    company: "ClickConvert",
    avatar: "MA",
    rating: 5
  },
  {
    id: 3,
    quote: "As someone with no technical background, I was worried about creating an online course. SkillBanto made it incredibly simple with their drag-and-drop course builder and templates.",
    author: "Ayesha Khan",
    position: "Fitness Instructor",
    company: "Wellness Warriors",
    avatar: "AK",
    rating: 5
  },
  {
    id: 4,
    quote: "The analytics dashboard helps me understand exactly what's working in my courses. I've been able to optimize my content and increase completion rates by 45%.",
    author: "Zain Malik",
    position: "Technology Educator",
    company: "Code Masters Institute",
    avatar: "ZM",
    rating: 5
  },
];

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="section relative bg-white" id="testimonials">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50/30 to-white -z-10"></div>
      
      <div className="container-wide">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate slide-up">
          <h2 className="mb-4">Loved by Course Creators Worldwide</h2>
          <p className="text-xl text-gray-600">
            Thousands of educators and coaches rely on SkillBanto to create and sell their online courses.
          </p>
        </div>
        
        {/* Featured testimonial */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 mb-16 animate slide-up">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="w-full md:w-2/3">
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 mb-8 relative">
                <svg className="absolute -top-6 -left-8 h-16 w-16 text-primary/10" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                {testimonials[activeTestimonial].quote}
              </blockquote>
              
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-lg font-semibold">
                  {testimonials[activeTestimonial].avatar}
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">{testimonials[activeTestimonial].author}</p>
                  <p className="text-gray-600">{testimonials[activeTestimonial].position}, {testimonials[activeTestimonial].company}</p>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/3 space-y-4">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    index === activeTestimonial 
                      ? "bg-primary/10 border-l-4 border-primary" 
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                >
                  <p className="font-medium text-gray-900 mb-1">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm line-clamp-2">{testimonial.quote.substring(0, 70)}...</p>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate slide-up">
          {[
            { number: "10,000+", label: "Course Creators" },
            { number: "25M+", label: "Students Enrolled" },
            { number: "$150M+", label: "Creator Earnings" }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center">
              <p className="text-4xl font-bold text-primary mb-2">{stat.number}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
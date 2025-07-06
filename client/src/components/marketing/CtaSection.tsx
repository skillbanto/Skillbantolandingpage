import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="section bg-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary-foreground/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-tight text-center text-white">
        <div className="max-w-3xl mx-auto animate slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Ready to Launch Your Online Course?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of educators who are successfully sharing their knowledge and growing their business with SkillBanto.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="#" className="btn-accent px-8 py-4 text-lg">
              Start your free trial
            </Link>
            <Link to="#" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md text-white bg-transparent border border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200">
              Schedule a demo
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 max-w-2xl mx-auto">
            <p className="text-lg font-medium mb-6">
              No credit card required. 14-day free trial. Cancel anytime.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: "💰", text: "No transaction fees" },
                { icon: "🚀", text: "Launch in minutes" },
                { icon: "📊", text: "Detailed analytics" },
                { icon: "🔒", text: "Secure platform" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <span className="text-2xl mb-2">{item.icon}</span>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
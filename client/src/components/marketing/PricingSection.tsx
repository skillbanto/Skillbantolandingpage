import { useState } from "react";
import { Link } from "react-router-dom";
import PricingCalculator from "../PricingCalculator";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Basic",
      description: "Perfect for beginners creating their first online course",
      price: isAnnual ? "5,000" : "500",
      period: isAnnual ? "/year" : "/month",
      savings: isAnnual ? "Save PKR 1,000" : "",
      features: [
        "1 Course Product",
        "Unlimited Students",
        "Email Support",
        "Basic Course Builder",
        "Standard Checkout",
        "Student Management",
        "Basic Reports",
      ],
      cta: "Start for free",
      popular: false,
    },
    {
      name: "Professional",
      description: "For growing educators with multiple courses and marketing needs",
      price: isAnnual ? "15,000" : "1,500",
      period: isAnnual ? "/year" : "/month",
      savings: isAnnual ? "Save PKR 3,000" : "",
      features: [
        "10 Course Products",
        "Unlimited Students",
        "Priority Support",
        "Advanced Course Builder",
        "Custom Checkout",
        "Marketing Automation",
        "Payment Plans & Subscriptions",
        "Detailed Analytics",
        "Affiliate Management",
        "Live Webinars",
      ],
      cta: "Start free trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For established educators with high-volume sales",
      price: "Custom",
      period: "",
      savings: "",
      features: [
        "Unlimited Course Products",
        "Unlimited Students",
        "Dedicated Account Manager",
        "Advanced Course Builder",
        "Custom Branded Experience",
        "Advanced Marketing Tools",
        "Multiple Payment Options",
        "Advanced Analytics & Reporting",
        "API Access",
        "White-Labeling Options",
        "Custom Integrations",
      ],
      cta: "Contact sales",
      popular: false,
    },
  ];

  return (
    <section className="section bg-white relative" id="pricing">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white -z-10"></div>

      <div className="container-wide">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate slide-up">
          <h2 className="mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">
            Choose the plan that's right for your educational business
          </p>

          {/* Billing toggle */}
          <div className="mt-8 flex items-center justify-center">
            <span className={`mr-3 ${isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-600'}`}>
              Annual
            </span>
            <button
              type="button"
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                isAnnual ? 'bg-gray-300' : 'bg-primary'
              }`}
              role="switch"
              aria-checked={!isAnnual}
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <span
                aria-hidden="true"
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  isAnnual ? 'translate-x-0' : 'translate-x-5'
                }`}
              />
            </button>
            <span className={`ml-3 ${!isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-600'}`}>
              Monthly
            </span>
            <span className="ml-4 inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
              Save up to 20%
            </span>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-2xl overflow-hidden ${
                plan.popular
                  ? 'border-2 border-primary shadow-xl relative'
                  : 'border border-gray-200 shadow-md'
              }`}
            >
              {plan.popular && (
                <div className="bg-primary text-white text-center text-sm font-medium py-1">
                  Most Popular
                </div>
              )}

              <div className="p-6 md:p-8 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6 min-h-[50px]">{plan.description}</p>

                <div className="mb-6">
                  <div className="flex items-end">
                    <span className="text-gray-900 font-semibold">PKR</span>
                    <span className="text-4xl font-bold text-gray-900 mx-1">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  {plan.savings && (
                    <p className="text-green-600 text-sm font-medium mt-1">{plan.savings}</p>
                  )}
                </div>

                <a
                  href={plan.name === "Enterprise" ? "#contact" : "https://app.skillbanto.com/creator-registration"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    console.log('Pricing link clicked:', plan.name, e.currentTarget.href);
                    if (plan.name === "Enterprise") {
                      e.preventDefault();
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                  style={{ position: 'relative', zIndex: 10 }}
                  className={`block w-full py-3 px-4 rounded-md text-center font-medium mb-8 cursor-pointer ${
                    plan.popular
                      ? 'bg-primary text-white hover:bg-primary/90'
                      : 'bg-white text-primary border border-primary hover:bg-primary/5'
                  } transition-colors`}
                >
                  {plan.cta}
                </a>

                <div className="border-t border-gray-200 pt-6">
                  <p className="font-medium text-gray-900 mb-4">What's included:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ROI Calculator */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-6">Calculate Your Potential ROI</h3>
          <div className="max-w-5xl mx-auto">
            <PricingCalculator />
          </div>
        </div>


        {/* FAQ section */}
        <div className="mt-24 max-w-3xl mx-auto animate slide-up">
          <h3 className="text-2xl font-semibold text-center mb-10">Frequently Asked Questions</h3>

          <div className="space-y-6">
            {[
              { 
                question: "Can I switch plans later?", 
                answer: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you'll be billed the prorated amount for the remainder of your billing period. If you downgrade, the new rate will apply at the start of your next billing period." 
              },
              { 
                question: "Is there a free trial?", 
                answer: "Yes, we offer a 14-day free trial on all plans. No credit card required to start your trial." 
              },
              { 
                question: "What payment methods do you accept?", 
                answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans. For Pakistan, we also support JazzCash and EasyPaisa." 
              },
              { 
                question: "Can I get a refund if I'm not satisfied?", 
                answer: "We offer a 30-day money-back guarantee. If you're not satisfied with SkillBanto within the first 30 days, contact our support team for a full refund." 
              },
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h4 className="text-lg font-medium text-gray-900 mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Link to="#" className="btn-secondary">
              Contact our sales team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
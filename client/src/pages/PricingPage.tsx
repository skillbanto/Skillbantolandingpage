import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import MarketingLayout from "../layouts/MarketingLayout";
import ROICalculator from "../components/ROICalculator";

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  badge?: string;
  badgeColor?: string;
  buttonText: string;
  buttonColor: string;
  bgColor: string;
  textColor: string;
  features: Array<{
    text: string;
    included: boolean;
  }>;
  highlights?: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic Plan",
    description: "Perfect for beginners creating their first online course",
    price: "PKR 5,000",
    period: "",
    buttonText: "Get Started",
    buttonColor: "bg-green-500 hover:bg-green-600",
    bgColor: "bg-gray-50",
    textColor: "text-gray-900",
    features: [
      { text: "Up to 2 Courses", included: true },
      { text: "2 Live Sessions per month", included: true },
      { text: "Unlimited Students", included: true },
      { text: "Basic analytics", included: true },
      { text: "Student management", included: true },
      { text: "Email support", included: true },
      { text: "Skillbanto Partner Program", included: false }
    ]
  },
  {
    id: "elite",
    name: "3 Months Premium Bundle Plan",
    description: "For established educators with high-volume sales",
    price: "PKR 9,000",
    period: "/3 months",
    badge: "MOST VALUE",
    badgeColor: "bg-white text-purple-600",
    buttonText: "Get Started",
    buttonColor: "bg-white text-purple-600 hover:bg-gray-100",
    bgColor: "bg-purple-500",
    textColor: "text-white",
    features: [
      { text: "Up to 5 Courses", included: true },
      { text: "4 Live Sessions per month", included: true },
      { text: "Unlimited Students", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Student management", included: true },
      { text: "Priority support", included: true },
      { text: "Skillbanto Partner Program", included: true },
      { text: "Marketing tools", included: true }
    ],
    highlights: ["Skillbanto Partner Program"]
  }
];

export default function PricingPage() {
  return (
    <MarketingLayout>
      <div className="min-h-screen bg-gray-50">
        
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Available Plans
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose a plan that suits your needs and business goals
              </p>
            </motion.div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  className={`relative rounded-2xl p-8 ${plan.bgColor} ${plan.textColor} shadow-lg border-2 ${plan.id === 'premium' ? 'border-green-400' : plan.id === 'elite' ? 'border-purple-400' : 'border-gray-200'}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  {/* Badge */}
                  {plan.badge && (
                    <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 ${plan.badgeColor} rounded-full text-sm font-bold`}>
                      {plan.badge}
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className={`text-sm ${plan.id === 'basic' ? 'text-gray-600' : 'text-white/80'} mb-6`}>
                      {plan.description}
                    </p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.period && <span className="text-lg">{plan.period}</span>}
                    </div>
                  </div>

                  {/* Highlights */}
                  {plan.highlights && (
                    <div className="mb-6">
                      {plan.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium text-center mb-2">
                          {highlight}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Features List */}
                  <div className="mb-8 space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                        <span className={`${feature.included ? '' : 'opacity-50'}`}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${plan.buttonColor}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={plan.buttonText === "Current Plan"}
                  >
                    {plan.buttonText}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Plan Comparison Table */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-black mb-6">
                Plan Comparison
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Compare features between Basic and Elite Training plans to find the perfect fit for your needs
              </p>
            </motion.div>

            <motion.div
              className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Table Header */}
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8">
                <div className="grid grid-cols-3 gap-6 items-center">
                  <div>
                    <h3 className="text-2xl font-bold">Features</h3>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">Basic Plan</h3>
                    <p className="text-green-100 mt-2">PKR 5,000</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">3 Months Premium Bundle</h3>
                    <p className="text-green-100 mt-2">PKR 9,000/3 months</p>
                  </div>
                </div>
              </div>

              {/* Comparison Features */}
              <div className="divide-y divide-gray-100">
                {[
                  { feature: "Number of Courses", basic: "Up to 2", elite: "Up to 5" },
                  { feature: "Live Sessions", basic: "2 per month", elite: "4 per month" },
                  { feature: "Students", basic: "Unlimited", elite: "Unlimited" },
                  { feature: "Analytics", basic: "Basic", elite: "Advanced" },
                  { feature: "Student Management", basic: "✓", elite: "✓" },
                  { feature: "Support", basic: "Email", elite: "Priority" },
                  { feature: "Skillbanto Partner Program", basic: "✗", elite: "✓" },
                  { feature: "Marketing Tools", basic: "✗", elite: "✓" },
                  { feature: "Duration", basic: "Monthly", elite: "3 Months" }
                ].map((row, index) => (
                  <motion.div
                    key={index}
                    className="grid grid-cols-3 gap-6 p-6 hover:bg-gray-50 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="font-semibold text-gray-900">
                      {row.feature}
                    </div>
                    <div className="text-center">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        row.basic === "✓" ? "bg-green-100 text-green-800" :
                        row.basic === "✗" ? "bg-red-100 text-red-800" :
                        "bg-gray-100 text-gray-800"
                      }`}>
                        {row.basic}
                      </span>
                    </div>
                    <div className="text-center">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        row.elite === "✓" ? "bg-green-100 text-green-800" :
                        row.elite === "✗" ? "bg-red-100 text-red-800" :
                        "bg-purple-100 text-purple-800"
                      }`}>
                        {row.elite}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="bg-gray-50 p-8">
                <div className="grid grid-cols-3 gap-6 items-center">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Ready to get started?</h4>
                    <p className="text-gray-600">Choose the plan that fits your goals</p>
                  </div>
                  <div className="text-center">
                    <motion.button
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Basic Plan
                    </motion.button>
                  </div>
                  <div className="text-center">
                    <motion.button
                      className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Elite Plan
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ROI Calculator */}
        <ROICalculator variant="pricing" />

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  question: "Can I switch between plans?",
                  answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
                },
                {
                  question: "What's included in Skillbanto Partner Program?",
                  answer: "Skillbanto Partner Program includes exclusive partnership opportunities, advanced marketing resources, priority support, and special revenue sharing benefits."
                },
                {
                  question: "Do you offer refunds?",
                  answer: "We offer a 30-day money-back guarantee if you're not satisfied with our services."
                },
                {
                  question: "Can I cancel my subscription anytime?",
                  answer: "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your current billing period."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
                Join thousands of educators who are already building successful online businesses with SkillBanto.
              </p>
              <motion.button
                className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}
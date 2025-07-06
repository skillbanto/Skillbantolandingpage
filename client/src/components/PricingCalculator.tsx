import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Plan {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  maxCourses: number;
  liveSessionsPerMonth: number;
  hasPracticalTraining: boolean;
  color: string;
  features: string[];
}

const plans: Plan[] = [
  {
    name: "Basic Plan",
    monthlyPrice: 5000,
    yearlyPrice: 60000,
    maxCourses: 2,
    liveSessionsPerMonth: 2,
    hasPracticalTraining: false,
    color: "emerald",
    features: [
      "Up to 2 courses",
      "2 live sessions/month", 
      "Unlimited students",
      "No practical training"
    ]
  },
  {
    name: "Premium Training Plan",
    monthlyPrice: 15000,
    yearlyPrice: 180000,
    maxCourses: 10,
    liveSessionsPerMonth: 10,
    hasPracticalTraining: true,
    color: "blue",
    features: [
      "Up to 10 courses",
      "10 live sessions/month",
      "Unlimited students", 
      "Practical training included",
      "Priority support"
    ]
  }
];

export default function PricingCalculator() {
  const [courses, setCourses] = useState(1);
  const [pricePerCourse, setPricePerCourse] = useState(15000);
  const [studentsPerCourse, setStudentsPerCourse] = useState(20);
  const [timePeriod, setTimePeriod] = useState(12);
  const [billingType, setBillingType] = useState('monthly');

  const totalStudents = courses * studentsPerCourse;
  const monthlyRevenue = courses * pricePerCourse * studentsPerCourse;
  const totalRevenue = monthlyRevenue * timePeriod;
  const estimatedIncome = totalRevenue * 0.7; // 70% after platform fees
  const returnOnInvestment = ((estimatedIncome - (plans[0].monthlyPrice * timePeriod)) / (plans[0].monthlyPrice * timePeriod)) * 100;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="bg-emerald-500 text-white p-6 rounded-t-xl">
          <h2 className="text-2xl font-bold mb-2">Interactive ROI Calculator</h2>
          <p className="text-emerald-100">Calculate your potential earnings and find the perfect plan for your teaching business</p>
        </div>

        <div className="bg-white rounded-b-xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Panel - Calculator */}
            <div className="p-8 bg-gray-50">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Customize Your Scenario</h3>
              
              {/* Billing Type Toggle */}
              <div className="mb-6">
                <div className="flex bg-white rounded-lg p-1 border">
                  <button
                    onClick={() => setBillingType('monthly')}
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                      billingType === 'monthly' 
                        ? 'bg-emerald-500 text-white' 
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    Monthly Billing
                  </button>
                  <button
                    onClick={() => setBillingType('yearly')}
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                      billingType === 'yearly' 
                        ? 'bg-emerald-500 text-white' 
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    Yearly Billing
                  </button>
                </div>
              </div>

              {/* Number of Courses */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Courses
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={courses}
                    onChange={(e) => setCourses(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1</span>
                    <span className="font-medium text-emerald-600">{courses}</span>
                    <span>50</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1">How many courses do you plan to create?</p>
              </div>

              {/* Price Per Course */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Per Course
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="5000"
                    max="100000"
                    step="1000"
                    value={pricePerCourse}
                    onChange={(e) => setPricePerCourse(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>PKR 5,000</span>
                    <span className="font-medium text-emerald-600">PKR {pricePerCourse.toLocaleString()}</span>
                    <span>PKR 100,000</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1">How much will you charge per course?</p>
              </div>

              {/* Students Per Course */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Students Per Course
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="5"
                    max="500"
                    step="5"
                    value={studentsPerCourse}
                    onChange={(e) => setStudentsPerCourse(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>5</span>
                    <span className="font-medium text-emerald-600">{studentsPerCourse}</span>
                    <span>500</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1">Estimated number of students per course</p>
              </div>

              {/* Time Period */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time Period
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="1"
                    max="24"
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 month</span>
                    <span className="font-medium text-emerald-600">{timePeriod} months</span>
                    <span>24 months</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1">Calculate earnings over this period</p>
              </div>

              {/* Total Students Display */}
              <div className="bg-white p-4 rounded-lg border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">{totalStudents}</div>
                  <div className="text-sm text-gray-600">Total Students</div>
                </div>
              </div>
            </div>

            {/* Right Panel - Plan Comparison */}
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Plan Comparison</h3>
              
              <div className="space-y-4">
                {plans.map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    className={`p-6 rounded-xl border-2 ${
                      index === 0 ? 'border-emerald-500 bg-emerald-50' : 'border-blue-500 bg-blue-50'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-semibold text-lg">{plan.name}</h4>
                        <div className="text-2xl font-bold text-gray-800">
                          PKR {(billingType === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice).toLocaleString()}
                        </div>
                        {billingType === 'yearly' && (
                          <div className="text-sm text-gray-600">
                            Total cost ({timePeriod} months): PKR {(plan.monthlyPrice * timePeriod).toLocaleString()}
                          </div>
                        )}
                        <div className="text-sm text-gray-600 mt-1">
                          Estimated income: PKR {estimatedIncome.toLocaleString()}
                        </div>
                        <div className="text-sm font-medium text-emerald-600 mt-1">
                          Return on investment: {returnOnInvestment.toFixed(0)}%
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm">
                          <span className="text-emerald-500 mr-2">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <button className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                      index === 0 
                        ? 'bg-emerald-500 text-white hover:bg-emerald-600' 
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}>
                      Choose Plan
                    </button>
                    
                    {index === 1 && (
                      <div className="mt-3 text-center">
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                          Recommended
                        </span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Users, DollarSign } from 'lucide-react';

interface ROICalculatorProps {
  variant?: 'home' | 'pricing';
}

const ROICalculator = ({ variant = 'home' }: ROICalculatorProps) => {
  const [students, setStudents] = useState(100);
  const [coursePrice, setCoursePrice] = useState(15000);
  const [courses, setCourses] = useState(1);
  const [conversionRate, setConversionRate] = useState(5);

  // Calculate metrics
  const monthlyRevenue = (students * coursePrice * conversionRate / 100) * courses;
  const yearlyRevenue = monthlyRevenue * 12;
  const platformFee = monthlyRevenue * 0.05; // 5% platform fee
  const netRevenue = monthlyRevenue - platformFee;
  const roi = ((netRevenue - 9000) / 9000) * 100; // ROI based on Premium plan cost

  const isHomePage = variant === 'home';

  return (
    <section className={`py-16 ${isHomePage ? 'bg-gradient-to-br from-emerald-50 to-blue-50' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Calculator className="w-8 h-8 text-emerald-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Interactive ROI Calculator
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calculate your potential revenue and return on investment with SkillBanto
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Input Section */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 text-emerald-600 mr-2" />
                Your Course Details
              </h3>
              
              <div className="space-y-6">
                {/* Number of Students */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Website Visitors
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="50"
                      max="10000"
                      step="50"
                      value={students}
                      onChange={(e) => setStudents(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #10b981 0%, #10b981 ${(students - 50) / (10000 - 50) * 100}%, #e5e7eb ${(students - 50) / (10000 - 50) * 100}%, #e5e7eb 100%)`
                      }}
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>50</span>
                      <span className="font-semibold text-emerald-600">{students.toLocaleString()}</span>
                      <span>10,000</span>
                    </div>
                  </div>
                </div>

                {/* Course Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Course Price (PKR)
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="5000"
                      max="100000"
                      step="1000"
                      value={coursePrice}
                      onChange={(e) => setCoursePrice(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #10b981 0%, #10b981 ${(coursePrice - 5000) / (100000 - 5000) * 100}%, #e5e7eb ${(coursePrice - 5000) / (100000 - 5000) * 100}%, #e5e7eb 100%)`
                      }}
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>PKR 5k</span>
                      <span className="font-semibold text-emerald-600">PKR {(coursePrice / 1000).toFixed(0)}k</span>
                      <span>PKR 100k</span>
                    </div>
                  </div>
                </div>

                {/* Number of Courses */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Courses
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="1"
                      max="10"
                      step="1"
                      value={courses}
                      onChange={(e) => setCourses(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #10b981 0%, #10b981 ${(courses - 1) / (10 - 1) * 100}%, #e5e7eb ${(courses - 1) / (10 - 1) * 100}%, #e5e7eb 100%)`
                      }}
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>1</span>
                      <span className="font-semibold text-emerald-600">{courses}</span>
                      <span>10</span>
                    </div>
                  </div>
                </div>

                {/* Conversion Rate */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Conversion Rate (%)
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="1"
                      max="20"
                      step="0.5"
                      value={conversionRate}
                      onChange={(e) => setConversionRate(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #10b981 0%, #10b981 ${(conversionRate - 1) / (20 - 1) * 100}%, #e5e7eb ${(conversionRate - 1) / (20 - 1) * 100}%, #e5e7eb 100%)`
                      }}
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>1%</span>
                      <span className="font-semibold text-emerald-600">{conversionRate}%</span>
                      <span>20%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Results Section */}
            <motion.div
              className="bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl p-8 text-white shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <DollarSign className="w-6 h-6 mr-2" />
                Your Revenue Potential
              </h3>

              <div className="space-y-6">
                {/* Monthly Revenue */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-emerald-100 text-sm mb-1">Monthly Revenue</div>
                  <div className="text-3xl font-bold">
                    PKR {monthlyRevenue.toLocaleString()}
                  </div>
                </div>

                {/* Yearly Revenue */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-emerald-100 text-sm mb-1">Yearly Revenue</div>
                  <div className="text-3xl font-bold">
                    PKR {yearlyRevenue.toLocaleString()}
                  </div>
                </div>

                {/* Net Revenue (after platform fees) */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-emerald-100 text-sm mb-1">Monthly Net Revenue</div>
                  <div className="text-2xl font-bold">
                    PKR {netRevenue.toLocaleString()}
                  </div>
                  <div className="text-xs text-emerald-100 mt-1">
                    After 5% platform fee
                  </div>
                </div>

                {/* ROI */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-emerald-100 text-sm mb-1">Monthly ROI</div>
                  <div className={`text-2xl font-bold ${roi > 0 ? 'text-green-300' : 'text-red-300'}`}>
                    {roi > 0 ? '+' : ''}{roi.toFixed(1)}%
                  </div>
                  <div className="text-xs text-emerald-100 mt-1">
                    Based on Premium plan (PKR 9,000)
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                  <div className="text-center">
                    <Users className="w-6 h-6 mx-auto mb-2 text-emerald-300" />
                    <div className="text-2xl font-bold">{Math.round(students * conversionRate / 100)}</div>
                    <div className="text-xs text-emerald-100">Monthly Students</div>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-6 h-6 mx-auto mb-2 text-emerald-300" />
                    <div className="text-2xl font-bold">{Math.round(yearlyRevenue / 12000)}x</div>
                    <div className="text-xs text-emerald-100">Investment Return</div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <motion.div
                className="mt-8 pt-6 border-t border-white/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href="https://app.skillbanto.org/creator-registration"
                  className="block w-full bg-white text-emerald-600 text-center py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Building Your Revenue
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Note */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              * Results are estimates based on industry averages. Actual results may vary depending on course quality, 
              marketing efforts, and market conditions. SkillBanto provides tools to help you achieve these results.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ROICalculator;
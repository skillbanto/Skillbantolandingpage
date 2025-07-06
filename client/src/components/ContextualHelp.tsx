import React from 'react';
import { motion } from 'framer-motion';
import HelpBubble from '../components/HelpBubble';
import { Settings, User, Video, PenTool, DollarSign, Award } from 'lucide-react';

const ContextualHelp: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Interactive Feature Guidance</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Helpful tips appear right when you need them, making it easy to navigate and get the most out of SkillBanto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature Card 1 */}
          <motion.div 
            className="bg-white rounded-xl shadow-md overflow-hidden"
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
          >
            <div className="p-6">
              <HelpBubble 
                tip="Easily customize your profile with a bio, social links, and achievements to build trust with potential students."
                color="bg-blue-500"
                position="top"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Creator Profile</h3>
                </div>
              </HelpBubble>
              
              <p className="text-gray-600 mb-4">
                Showcase your expertise and build your personal brand with a customizable profile page.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-blue-700">Profile Completion</span>
                  <span className="text-sm font-medium text-blue-700">85%</span>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature Card 2 */}
          <motion.div 
            className="bg-white rounded-xl shadow-md overflow-hidden"
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
          >
            <div className="p-6">
              <HelpBubble 
                tip="Upload videos directly or connect YouTube/Vimeo links. Add timestamps and transcripts for better search visibility."
                color="bg-purple-500"
                position="top"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Video className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Video Lessons</h3>
                </div>
              </HelpBubble>
              
              <p className="text-gray-600 mb-4">
                Create engaging video content with our intuitive lesson builder and analytics.
              </p>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-700">Student engagement</span>
                  <span className="bg-purple-200 text-purple-800 text-xs px-2 py-1 rounded-full">
                    +23% this week
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature Card 3 */}
          <motion.div 
            className="bg-white rounded-xl shadow-md overflow-hidden"
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
          >
            <div className="p-6">
              <HelpBubble 
                tip="Choose from multiple pricing models including one-time purchases, subscriptions, and tiered membership levels."
                color="bg-green-500"
                position="top"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Pricing Options</h3>
                </div>
              </HelpBubble>
              
              <p className="text-gray-600 mb-4">
                Set flexible pricing options for your courses and maximize your earning potential.
              </p>
              
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-green-50 p-2 rounded text-center">
                  <p className="text-xs text-green-800">One-time</p>
                  <p className="font-semibold text-green-700">$99</p>
                </div>
                <div className="bg-green-50 p-2 rounded text-center">
                  <p className="text-xs text-green-800">Monthly</p>
                  <p className="font-semibold text-green-700">$19</p>
                </div>
                <div className="bg-green-50 p-2 rounded text-center">
                  <p className="text-xs text-green-800">Annual</p>
                  <p className="font-semibold text-green-700">$190</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature Card 4 */}
          <motion.div 
            className="bg-white rounded-xl shadow-md overflow-hidden"
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
          >
            <div className="p-6">
              <HelpBubble 
                tip="Customize color schemes, layout options, and branding elements to match your personal brand identity."
                color="bg-pink-500"
                position="right"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-pink-100 p-3 rounded-lg">
                    <PenTool className="w-6 h-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Design Studio</h3>
                </div>
              </HelpBubble>
              
              <p className="text-gray-600 mb-4">
                Design beautiful course pages with our drag-and-drop editor and templates.
              </p>
              
              <div className="flex space-x-2 mt-2">
                <div className="w-6 h-6 rounded-full bg-pink-500"></div>
                <div className="w-6 h-6 rounded-full bg-purple-500"></div>
                <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                <div className="w-6 h-6 rounded-full bg-green-500"></div>
                <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
                <div className="w-6 h-6 rounded-full bg-red-500"></div>
                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-gray-100">
                  <span className="text-xs text-gray-500">+8</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature Card 5 */}
          <motion.div 
            className="bg-white rounded-xl shadow-md overflow-hidden"
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
          >
            <div className="p-6">
              <HelpBubble 
                tip="Track engagement metrics and student progress. Get insights on which content performs best."
                color="bg-orange-500"
                position="left"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Settings className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Analytics Dashboard</h3>
                </div>
              </HelpBubble>
              
              <p className="text-gray-600 mb-4">
                Track student progress and course performance with detailed analytics.
              </p>
              
              <div className="flex items-center space-x-1">
                <div className="w-1/4">
                  <div className="h-16 bg-orange-200 rounded-sm"></div>
                  <p className="text-xs text-center mt-1 text-gray-500">Mon</p>
                </div>
                <div className="w-1/4">
                  <div className="h-12 bg-orange-300 rounded-sm"></div>
                  <p className="text-xs text-center mt-1 text-gray-500">Tue</p>
                </div>
                <div className="w-1/4">
                  <div className="h-20 bg-orange-400 rounded-sm"></div>
                  <p className="text-xs text-center mt-1 text-gray-500">Wed</p>
                </div>
                <div className="w-1/4">
                  <div className="h-24 bg-orange-500 rounded-sm"></div>
                  <p className="text-xs text-center mt-1 text-gray-500">Thu</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature Card 6 */}
          <motion.div 
            className="bg-white rounded-xl shadow-md overflow-hidden"
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
          >
            <div className="p-6">
              <HelpBubble 
                tip="Issue certificates with custom designs and digital badges that students can share on LinkedIn and other platforms."
                color="bg-amber-500"
                position="bottom"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Certificates</h3>
                </div>
              </HelpBubble>
              
              <p className="text-gray-600 mb-4">
                Award certificates of completion to your students and increase course value.
              </p>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-amber-800">Certificate Templates</p>
                  <p className="text-xs text-amber-700">Customizable designs</p>
                </div>
                <span className="text-amber-700 font-medium">12</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-medium shadow-lg"
          >
            Explore All Features
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ContextualHelp;
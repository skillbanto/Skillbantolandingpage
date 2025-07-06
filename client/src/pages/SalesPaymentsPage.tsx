import React from 'react';
import { motion } from 'framer-motion';
import MarketingLayout from '../layouts/MarketingLayout';
import { CreditCard, DollarSign, Globe, Shield, BarChart3, Repeat, ArrowRight, TrendingUp } from 'lucide-react';

export default function SalesPaymentsPage() {
  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Payment Processing",
      description: "Accept payments from students worldwide with support for multiple currencies and payment methods.",
      details: ["200+ countries supported", "Multiple currencies", "Local payment methods", "Real-time conversion"]
    },
    {
      icon: <Repeat className="w-8 h-8" />,
      title: "Subscription Management",
      description: "Offer flexible payment plans and recurring subscriptions to maximize your revenue potential.",
      details: ["Flexible billing cycles", "Payment plan options", "Automatic renewals", "Dunning management"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Transactions",
      description: "Bank-level security with PCI compliance ensures safe transactions for you and your students.",
      details: ["PCI DSS compliant", "SSL encryption", "Fraud protection", "Data security"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Revenue Analytics",
      description: "Track sales performance, revenue trends, and payment analytics with detailed reporting.",
      details: ["Real-time revenue tracking", "Sales analytics", "Payment reports", "Tax reporting"]
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Multiple Payment Methods",
      description: "Support all major payment methods including cards, digital wallets, and bank transfers.",
      details: ["Credit/debit cards", "PayPal integration", "Bank transfers", "Digital wallets"]
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Instant Payouts",
      description: "Get paid instantly with fast payout processing and low transaction fees.",
      details: ["Daily payouts", "Low fees", "Instant transfers", "Multiple payout methods"]
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Increase Revenue by 250%",
      description: "Flexible payment options and global reach boost course sales significantly"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Reach Global Audience",
      description: "Accept payments from students worldwide with local payment methods"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Secure & Compliant",
      description: "Bank-level security ensures safe transactions for all parties"
    }
  ];

  const paymentMethods = [
    {
      name: "Credit Cards",
      description: "Visa, Mastercard, American Express"
    },
    {
      name: "Digital Wallets",
      description: "PayPal, Apple Pay, Google Pay"
    },
    {
      name: "Bank Transfers",
      description: "Direct bank transfers and ACH payments"
    },
    {
      name: "Local Methods",
      description: "Region-specific payment options"
    },
    {
      name: "Cryptocurrencies",
      description: "Bitcoin, Ethereum, and other digital currencies"
    },
    {
      name: "Mobile Payments",
      description: "SMS payments and mobile wallet integration"
    }
  ];

  return (
    <MarketingLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-green-600">Sales & Payments</span> Made Simple
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Accept payments globally, manage subscriptions, and track revenue with our 
                comprehensive sales and payment processing platform.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <a 
                  href="https://app.skillbanto.org/creator-registration"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
                >
                  Start Accepting Payments
                </a>
                <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                  View Pricing
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Payment Processing Matters
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Seamless payment processing is crucial for maximizing course sales and student satisfaction
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-8 rounded-xl bg-gray-50"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="text-green-600 mb-6 flex justify-center">
                      {benefit.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Complete Payment Solution
                </h2>
                <p className="text-xl text-gray-600">
                  Everything you need to sell courses and manage payments globally
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="text-green-600 mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Accept All Major Payment Methods
                </h2>
                <p className="text-xl text-gray-600">
                  Offer your students flexible payment options to maximize conversions
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paymentMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    className="p-6 border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-sm transition-all duration-200"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {method.name}
                    </h3>
                    <p className="text-gray-600">
                      {method.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-green-600">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-white mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Payment Processing Statistics
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { number: "99.9%", label: "Payment Success Rate" },
                  { number: "200+", label: "Countries Supported" },
                  { number: "2.9%", label: "Transaction Fee" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-green-200 text-lg">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Ready to Start Accepting Payments?
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Set up secure payment processing for your courses in minutes
              </motion.p>

              <motion.a
                href="https://app.skillbanto.org/creator-registration"
                className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
            </div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
}
import React from 'react';
import MarketingLayout from '../layouts/MarketingLayout';

export default function CookiePolicyPage() {
  return (
    <MarketingLayout>
      <div className="min-h-screen bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Are Cookies</h2>
              <p className="text-gray-600 mb-4">
                Cookies are small text files that are stored on your computer or mobile device 
                when you visit our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Cookies</h2>
              <p className="text-gray-600 mb-4">
                We use cookies to improve your experience on our website, remember your preferences, 
                and analyze how our website is used.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about our use of cookies, please contact us at cookies@skillbanto.org
              </p>
            </section>
          </div>
        </div>
      </div>
    </MarketingLayout>
  );
}
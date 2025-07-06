import React from 'react';
import MarketingLayout from '../layouts/MarketingLayout';

export default function TermsOfServicePage() {
  return (
    <MarketingLayout>
      <div className="min-h-screen bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using SkillBanto, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use License</h2>
              <p className="text-gray-600 mb-4">
                Permission is granted to temporarily use SkillBanto for personal, 
                non-commercial transitory viewing only.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600">
                If you have any questions about these Terms of Service, please contact us at legal@skillbanto.org
              </p>
            </section>
          </div>
        </div>
      </div>
    </MarketingLayout>
  );
}
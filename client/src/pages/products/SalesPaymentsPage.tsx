import React from 'react';
import { ParticleBackground } from '../../components/effects';

const SalesPaymentsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Background particle effect */}
      <ParticleBackground 
        colorScheme="primary" 
        density="low" 
        speed="slow" 
        className="absolute inset-0 -z-10"
      />
      
      <div className="container mx-auto py-12 px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4">Sales & Payments</h1>
          <p className="text-xl text-gray-600 mb-8">
            Seamless sales and payment solutions for your online courses and digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Payment Processing</h2>
            <p className="text-gray-600 mb-4">
              Secure payment processing for multiple currencies. Support for credit cards, bank transfers, and digital wallets.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Multiple payment methods</li>
              <li>Secure transaction processing</li>
              <li>Automatic payout options</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Subscriptions & Plans</h2>
            <p className="text-gray-600 mb-4">
              Create flexible subscription plans for your courses. Offer one-time purchases, payment plans, or monthly subscriptions.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Multiple pricing models</li>
              <li>Subscription management</li>
              <li>Coupons and discounts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesPaymentsPage;
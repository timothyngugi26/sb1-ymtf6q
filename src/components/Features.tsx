import React from 'react';
import { Package, ShoppingBag, Calculator, Wallet } from 'lucide-react';

const features = [
  {
    name: 'On-Demand Pickies',
    description: 'Access our network of reliable delivery partners ready to fulfill your orders instantly.',
    icon: Package,
  },
  {
    name: 'Smart POS Calculator',
    description: 'Real-time pricing and cost estimation for accurate budgeting and planning.',
    icon: Calculator,
  },
  {
    name: 'Voucher System',
    description: 'Simplified payment process with our secure digital voucher system.',
    icon: Wallet,
  },
  {
    name: 'Bulk Orders',
    description: 'Efficiently handle large corporate orders with our specialized bulk ordering system.',
    icon: ShoppingBag,
  },
];

export default function Features() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for corporate deliveries
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Streamline your business deliveries with our comprehensive suite of features designed for corporate efficiency.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
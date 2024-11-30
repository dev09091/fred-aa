import React from 'react';
import { Shield, Zap, Lock, Gift } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-yellow-400" />,
      title: 'Secure & Audited',
      description: 'Smart contract audited by leading security firms ensuring your investment is safe.'
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-400" />,
      title: 'Fast Transactions',
      description: 'Lightning-fast transactions with minimal fees on the network.'
    },
    {
      icon: <Lock className="w-12 h-12 text-yellow-400" />,
      title: 'Locked Liquidity',
      description: 'Liquidity locked for 2 years to ensure long-term stability.'
    },
    {
      icon: <Gift className="w-12 h-12 text-yellow-400" />,
      title: 'Rewards System',
      description: 'Earn passive income through our innovative staking and rewards system.'
    }
  ];

  return (
    <div className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Fred?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Built with security and sustainability in mind, Fred The Dog Token offers unique features that set it apart from other meme tokens.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-gray-900/50 hover:bg-gray-900 transition-colors">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
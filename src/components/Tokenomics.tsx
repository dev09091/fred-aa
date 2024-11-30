import React from 'react';
import { PieChart, Wallet, Coins, Users } from 'lucide-react';

export default function Tokenomics() {
  const distributions = [
    { label: 'Presale', percentage: '40%', icon: <PieChart className="w-6 h-6" /> },
    { label: 'Liquidity', percentage: '30%', icon: <Wallet className="w-6 h-6" /> },
    { label: 'Development', percentage: '20%', icon: <Coins className="w-6 h-6" /> },
    { label: 'Team', percentage: '10%', icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <div className="bg-gradient-to-b from-black to-purple-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Tokenomics</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Transparent and fair distribution ensuring long-term sustainability
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {distributions.map((item, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-6 text-center backdrop-blur-sm">
              <div className="flex justify-center mb-4 text-yellow-400">
                {item.icon}
              </div>
              <div className="text-3xl font-bold mb-2 text-yellow-400">
                {item.percentage}
              </div>
              <div className="text-gray-300">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
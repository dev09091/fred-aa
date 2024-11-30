import React from 'react';
import { Dog, Rocket, Timer, Users } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-purple-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <Dog className="w-24 h-24 text-yellow-400" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Fred The Dog Token
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            The Most Loyal Token in the Crypto Space 🐕
          </p>
          <div className="mb-12">
            <CountdownTimer targetDate="2024-04-01T00:00:00" />
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors">
              Join Presale
            </button>
            <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400/10 transition-colors">
              Read Whitepaper
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Timer className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="font-bold text-2xl">3 Days</div>
              <div className="text-gray-400">Until Launch</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="font-bold text-2xl">2.5k+</div>
              <div className="text-gray-400">Community Members</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Rocket className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="font-bold text-2xl">$500k</div>
              <div className="text-gray-400">Raised</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Dog className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="font-bold text-2xl">10B</div>
              <div className="text-gray-400">Total Supply</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';

export default function Roadmap() {
  const phases = [
    {
      phase: 'Phase 1',
      items: [
        'Website Launch',
        'Community Building',
        'Smart Contract Audit',
        'Presale Launch'
      ]
    },
    {
      phase: 'Phase 2',
      items: [
        'DEX Listing',
        'Marketing Campaign',
        'Partnership Announcements',
        'Staking Platform Launch'
      ]
    },
    {
      phase: 'Phase 3',
      items: [
        'CEX Listings',
        'NFT Collection',
        'Mobile App Development',
        'Ecosystem Expansion'
      ]
    },
    {
      phase: 'Phase 4',
      items: [
        'Global Marketing',
        'Major Partnerships',
        'Governance Launch',
        'Metaverse Integration'
      ]
    }
  ];

  return (
    <div className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Roadmap</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our journey to becoming the leading community-driven token
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-900/50 rounded-xl p-6 h-full">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                  {phase.phase}
                </h3>
                <ul className="space-y-3">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
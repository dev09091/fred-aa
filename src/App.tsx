import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Features />
      <Tokenomics />
      <Roadmap />
    </div>
  );
}

export default App;
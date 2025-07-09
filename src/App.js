// src/App.js
import React, { useState } from 'react';
import AIVendorMarketShare from './components/AIVendorMarketShare';
import HealthcareCostAnalysis from './components/HealthcareCostAnalysis';
import PolicyImpactModeling from './components/PolicyImpactModeling';
import About from './components/About';

function App() {
  const [tab, setTab] = useState('ai');

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="text-center py-6 bg-gradient-to-r from-blue-500 to-purple-600">
        <h1 className="text-3xl font-bold">Policy Analysis Scripts</h1>
        <p className="text-sm text-gray-100">Evidence of Data-Driven Policy Work</p>
      </header>

      <nav className="flex justify-center space-x-4 py-4">
        <button className={tab === 'ai' ? 'font-bold text-blue-400' : ''} onClick={() => setTab('ai')}>AI Vendor Market Share</button>
        <button className={tab === 'health' ? 'font-bold text-blue-400' : ''} onClick={() => setTab('health')}>Healthcare Cost Analysis</button>
        <button className={tab === 'policy' ? 'font-bold text-blue-400' : ''} onClick={() => setTab('policy')}>Policy Impact Modeling</button>
        <button className={tab === 'about' ? 'font-bold text-blue-400' : ''} onClick={() => setTab('about')}>About</button>
      </nav>

      <main className="p-4">
        {tab === 'ai' && <AIVendorMarketShare />}
        {tab === 'health' && <HealthcareCostAnalysis />}
        {tab === 'policy' && <PolicyImpactModeling />}
        {tab === 'about' && <About />}
      </main>
    </div>
  );
}

export default App;

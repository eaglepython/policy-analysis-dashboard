// src/components/AIVendorMarketShare.jsx
import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import Papa from 'papaparse';

function calculateHHI(data) {
  const shares = data.map(row => parseFloat(row.MarketShare));
  return shares.reduce((acc, s) => acc + Math.pow(s / 100, 2), 0);
}

function getHHIInsight(hhi) {
  if (hhi < 0.15) return 'Low concentration — Competitive market';
  if (hhi < 0.25) return 'Moderate concentration — Caution advised';
  return 'High concentration — Antitrust risk';
}

const AIVendorMarketShare = () => {
  const [data, setData] = useState([
    { Vendor: 'OpenAI', MarketShare: 37.5 },
    { Vendor: 'Anthropic', MarketShare: 18.2 },
    { Vendor: 'Google', MarketShare: 22.1 },
    { Vendor: 'Meta', MarketShare: 14.7 },
    { Vendor: 'Mistral', MarketShare: 7.5 },
  ]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => setData(result.data),
    });
  };

  const hhi = calculateHHI(data).toFixed(3);
  const hhiInsight = getHHIInsight(hhi);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">AI Vendor Market Share</h2>

      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        className="mb-4 bg-gray-800 p-2 rounded"
      />

      <Plot
        data={[{
          type: 'pie',
          labels: data.map(d => d.Vendor),
          values: data.map(d => parseFloat(d.MarketShare)),
          textinfo: 'label+percent',
        }]}
        layout={{
          title: 'Market Share of AI Vendors',
          paper_bgcolor: '#111827',
          font: { color: 'white' },
        }}
      />

      <div className="mt-6 p-4 bg-gray-800 rounded">
        <p><strong>Herfindahl-Hirschman Index (HHI):</strong> {hhi}</p>
        <p className="mt-1 text-sm italic">{hhiInsight}</p>
      </div>

      <div className="mt-4 text-sm text-gray-400">
        Upload your own CSV with columns: <code>Vendor,MarketShare</code>
      </div>
    </div>
  );
};

export default AIVendorMarketShare;

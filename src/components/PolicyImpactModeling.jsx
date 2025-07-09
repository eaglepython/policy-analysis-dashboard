// src/components/PolicyImpactModeling.jsx
import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import Papa from 'papaparse';

const PolicyImpactModeling = () => {
  const [data, setData] = useState([
    { RegulationLevel: 0.1, InnovationIndex: 95, RiskReduction: 5 },
    { RegulationLevel: 0.3, InnovationIndex: 87, RiskReduction: 25 },
    { RegulationLevel: 0.5, InnovationIndex: 78, RiskReduction: 50 },
    { RegulationLevel: 0.7, InnovationIndex: 66, RiskReduction: 70 },
    { RegulationLevel: 0.9, InnovationIndex: 50, RiskReduction: 88 },
  ]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => setData(result.data.map(row => ({
        RegulationLevel: parseFloat(row.RegulationLevel),
        InnovationIndex: parseFloat(row.InnovationIndex),
        RiskReduction: parseFloat(row.RiskReduction),
      })));
    });
  };

  const downloadScript = () => {
    const element = document.createElement("a");
    const file = new Blob([
      `# policy_impact_modeling.py\n\n` +
      `import pandas as pd\n\n` +
      `data = pd.read_csv('policy_tradeoff.csv')\n` +
      `import matplotlib.pyplot as plt\n\n` +
      `plt.plot(data['RegulationLevel'], data['InnovationIndex'], label='Innovation')\n` +
      `plt.plot(data['RegulationLevel'], data['RiskReduction'], label='Risk Reduction')\n` +
      `plt.xlabel('Regulation Level')\n` +
      `plt.ylabel('Impact (%)')\n` +
      `plt.title('Policy Trade-Off: Innovation vs Risk')\n` +
      `plt.legend()\n` +
      `plt.grid(True)\n` +
      `plt.show()`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "policy_impact_modeling.py";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Policy Impact Modeling</h2>

      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        className="mb-4 bg-gray-800 p-2 rounded"
      />

      <Plot
        data={[
          {
            x: data.map(d => d.RegulationLevel),
            y: data.map(d => d.InnovationIndex),
            name: 'Innovation Index',
            type: 'scatter',
            mode: 'lines+markers'
          },
          {
            x: data.map(d => d.RegulationLevel),
            y: data.map(d => d.RiskReduction),
            name: 'Risk Reduction',
            type: 'scatter',
            mode: 'lines+markers'
          }
        ]}
        layout={{
          title: 'Regulation vs Innovation and Risk Reduction',
          paper_bgcolor: '#111827',
          font: { color: 'white' },
          xaxis: { title: 'Regulation Level (0 to 1)' },
          yaxis: { title: 'Impact (%)' },
        }}
      />

      <div className="mt-6 text-sm text-gray-400">
        Upload CSV with: <code>RegulationLevel,InnovationIndex,RiskReduction</code>
      </div>

      <div className="mt-6">
        <button
          onClick={downloadScript}
          className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded shadow"
        >
          Download Python Script
        </button>
      </div>
    </div>
  );
};

export default PolicyImpactModeling;

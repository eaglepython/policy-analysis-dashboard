// src/components/HealthcareCostAnalysis.jsx
import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import Papa from 'papaparse';

const HealthcareCostAnalysis = () => {
  const [data, setData] = useState([
    { Year: 2019, WithAI: 9400, WithoutAI: 10700 },
    { Year: 2020, WithAI: 9300, WithoutAI: 10650 },
    { Year: 2021, WithAI: 9100, WithoutAI: 10500 },
    { Year: 2022, WithAI: 8950, WithoutAI: 10420 },
    { Year: 2023, WithAI: 8700, WithoutAI: 10300 },
  ]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => setData(result.data.map(row => ({
        Year: parseInt(row.Year),
        WithAI: parseFloat(row.WithAI),
        WithoutAI: parseFloat(row.WithoutAI),
      })));
    });
  };

  const downloadScript = () => {
    const element = document.createElement("a");
    const file = new Blob([
      `# healthcare_cost_analysis.py\n\n` +
      `import pandas as pd\n\n` +
      `data = pd.read_csv('cost_comparison.csv')\n` +
      `data['Savings'] = data['WithoutAI'] - data['WithAI']\n` +
      `average_savings = data['Savings'].mean()\n` +
      `print(f'Average annual savings per patient: ${average_savings:.2f}')`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "healthcare_cost_analysis.py";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Healthcare Cost Analysis</h2>

      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        className="mb-4 bg-gray-800 p-2 rounded"
      />

      <Plot
        data={[
          {
            x: data.map(d => d.Year),
            y: data.map(d => d.WithoutAI),
            name: 'Without AI',
            type: 'scatter',
            mode: 'lines+markers',
          },
          {
            x: data.map(d => d.Year),
            y: data.map(d => d.WithAI),
            name: 'With AI',
            type: 'scatter',
            mode: 'lines+markers',
          }
        ]}
        layout={{
          title: 'Healthcare Spending per Patient (Annual)',
          paper_bgcolor: '#111827',
          font: { color: 'white' },
          xaxis: { title: 'Year' },
          yaxis: { title: 'Spending ($)' },
        }}
      />

      <div className="mt-6 text-sm text-gray-400">
        Upload CSV with: <code>Year,WithAI,WithoutAI</code>
      </div>

      <div className="mt-6">
        <button
          onClick={downloadScript}
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded shadow"
        >
          Download Python Script
        </button>
      </div>
    </div>
  );
};

export default HealthcareCostAnalysis;

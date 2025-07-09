import React from 'react';

const About = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">About the Platform</h2>
      <p>
        The Policy Analysis Dashboard is a web-based platform built to showcase real-world,
        data-driven insights for public policy and regulatory impact.
      </p>
      <p>
        It includes modules that analyze AI market concentration, healthcare cost reduction
        through AI, and the regulatory trade-offs between innovation and risk.
      </p>
      <p>
        This project was built using React, Tailwind CSS, and Plotly, and is deployed via GitHub Pages.
        You can upload your own CSV files to explore insights interactively.
      </p>
      <p className="text-sm text-gray-400">Created by Joseph Bidias · 2025</p>
    </div>
  );
};

export default About;

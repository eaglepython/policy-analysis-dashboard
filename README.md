<div align="center">

# Policy Analysis Dashboard

### Explore three AI-policy questions with your own data — market concentration, cost impact, and innovation-vs-safety trade-offs.

![Status](https://img.shields.io/badge/Status-Prototype-E67E22?style=flat-square)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)
![Plotly](https://img.shields.io/badge/Charts-Plotly-3F4F75?style=flat-square&logo=plotly&logoColor=white)
![Tailwind](https://img.shields.io/badge/Styling-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-2E7D32?style=flat-square)

<br/>

<img src="https://github.com/user-attachments/assets/15e8914b-0cfe-4b9e-a171-13dfe6936f3d" alt="How the dashboard works" width="92%"/>

</div>

---

> [!NOTE]
> **Status: prototype.** The charts load with example numbers so the app has something to show on open. Those numbers are illustrative, not measurements — upload a CSV to analyze real data.

## What it does

| View | What it computes |
|---|---|
| **AI vendor market share** | Herfindahl–Hirschman Index (HHI) from a list of vendors and shares, labeling the market low / moderate / high concentration. |
| **Healthcare cost analysis** | Cost with vs. without an AI tool over time, and the average difference. |
| **Policy impact modeling** | An innovation-vs-safety trade-off plotted across policy options. |

Each view accepts a CSV upload, and two of them generate a short Python script that reproduces the calculation.

## CSV format

For the market-share view, use two columns:

```csv
Vendor,MarketShare
Vendor A,40
Vendor B,35
Vendor C,25
```

## Run it locally

```bash
git clone https://github.com/eaglepython/policy-analysis-dashboard.git
cd policy-analysis-dashboard
npm install
npm start
```

## Built with

React · Plotly · PapaParse · Tailwind CSS

## Author

**Joseph Bidias** — [github.com/eaglepython](https://github.com/eaglepython)

<sub>Released under the MIT License.</sub>

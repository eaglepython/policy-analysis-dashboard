<img width="6024" height="4152" alt="diagram(2)" src="https://github.com/user-attachments/assets/15e8914b-0cfe-4b9e-a171-13dfe6936f3d" />


# Policy Analysis Dashboard

A small web app for exploring three policy questions about AI with your own data.

**Status: prototype.** The charts load with example numbers so the app has something to show. The example numbers are illustrative and are not measurements. Upload a CSV to use real data.

## What it does

- **AI vendor market share.** Calculates the Herfindahl-Hirschman Index (HHI) from a list of vendors and market shares, and labels the market as low, moderate, or high concentration.
- **Healthcare cost analysis.** Compares costs with and without an AI tool over time and reports the average difference.
- **Policy impact modeling.** Plots a trade-off between innovation and safety scores for different policy options.

Each view accepts a CSV upload, and two of them let you download a short Python script that repeats the calculation.

## CSV format

For the market share view, use two columns:

```
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

Built with React, Plotly, PapaParse, and Tailwind CSS.

## Author

Joseph Bidias

## License

MIT

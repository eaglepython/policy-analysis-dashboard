// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        dark: '#111827',
        primary: '#3b82f6',
        secondary: '#8b5cf6',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

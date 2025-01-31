/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Adjust paths based on your file structure
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-forward': 'spin-forward 2s linear infinite',
        'spin-reverse': 'spin-reverse 2s linear infinite',
      },
      keyframes: {
        'spin-forward': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
};




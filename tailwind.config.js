/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        "in-expo": "transform 1s cubic-bezier(1, 0, 0, 1)",
      },
    },
    plugins: [],
  },
};


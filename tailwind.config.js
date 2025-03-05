/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Path to your app directory
    "./pages/**/*.{js,ts,jsx,tsx}", // Path to your pages directory
    "./components/**/*.{js,ts,jsx,tsx}", // Path to your components directory
  ],
  theme: {
    extend: {
      fontFamily: {
        inria: ['Inria Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
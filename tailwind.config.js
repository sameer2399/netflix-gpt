/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      // Breakpoints for responsive design
      xl: { max: "1579px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1800px" },
      extralg: { min: "1801px" },
      sm: { max: "767px" },
    },
    extend: {},

  },
  plugins: [],

}


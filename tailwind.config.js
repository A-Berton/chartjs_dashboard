const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      // Configure your color palette here
      sky: colors.sky,
      green: colors.green,
      red: colors.red,
      gray: colors.gray,
      indigo: colors.indigo,
      neutral: colors.neutral,
      orange: colors.orange,
      slate: colors.slate,
    }
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      keyframes: {
        slideDown: {
          'from': { height: "0", "padding-bottom": "0" },
          'to': { height: "var(--radix-accordion-content-height)", "padding-bottom": "1.5rem"}
        },
        slideUp: {
          'from': { height: "var(--radix-accordion-content-height)", "padding-bottom": "1.5rem"},
          'to': { height: "0", "padding-bottom": "0"}
        },
      },

      animation: {
        slideDown: "slideDown 400ms ease-out",
        slideUp: "slideUp 400ms ease-out"
      }
    },
  },
  plugins: [
    require("tailwindcss-radix")(),
  ],
}

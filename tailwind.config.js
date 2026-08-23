/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        temple: {
          maroon: "#4A121A",
          maroonLight: "#6B1D27",
          maroonDark: "#300A0F",
          gold: "#C89D35",
          goldLight: "#E5BE5E",
          goldDark: "#9A751B",
          sand: "#F8F4EC",
          sandDark: "#EFE6D5",
          stone: "#2C2625",
          stoneLight: "#423B38",
          cream: "#FDFBF7",
          red: "#8B1E1E",
          redAccent: "#B22222",
          sacredGreen: "#2E5A36",
          terracotta: "#A84C32"
        }
      },
      fontFamily: {
        sans: ['"Noto Sans Tamil"', 'sans-serif'],
        serif: ['"Noto Serif Tamil"', 'serif']
      },
      boxShadow: {
        'temple': '0 4px 20px -2px rgba(74, 18, 26, 0.08), 0 2px 6px -1px rgba(74, 18, 26, 0.04)',
        'temple-lg': '0 10px 30px -3px rgba(74, 18, 26, 0.12), 0 4px 12px -2px rgba(74, 18, 26, 0.08)',
        'gold-glow': '0 0 15px rgba(200, 157, 53, 0.25)',
      }
    },
  },
  plugins: [],
}

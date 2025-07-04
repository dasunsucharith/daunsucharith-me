/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./contexts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'josefin': ['var(--font-josefin)', 'sans-serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        brand: {
          base: "#161E2F",
          surface: "#242F49",
          muted: "#384358",
          accent: "#FFA586",
          strong: "#B51A2B",
          deep: "#541A2E"
        },
        light: {
          base: "#F8FAFC",
          surface: "#FFFFFF",
          muted: "#F1F5F9",
          accent: "#3B82F6",
          strong: "#1E40AF",
          deep: "#1E3A8A"
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 6s ease infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        glow: {
          '0%': {
            'box-shadow': '0 0 20px rgba(255, 165, 134, 0.3)',
          },
          '100%': {
            'box-shadow': '0 0 30px rgba(255, 165, 134, 0.6), 0 0 40px rgba(181, 26, 43, 0.3)',
          },
        }
      }
    },
  },
  plugins: [],
}

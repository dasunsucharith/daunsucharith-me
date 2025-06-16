/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
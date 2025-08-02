/** @type {import('tailwindcss').Config} */
module.exports = {
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
        primary: {
          black: "#000000",
          white: "#FFFFFF",
          sky: "#0EA5E9",
          'sky-light': "#7DD3FC",
          'sky-dark': "#0284C7",
          'gray-light': "#F8FAFC",
          'gray-dark': "#1E293B"
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
            'box-shadow': '0 0 20px rgba(14, 165, 233, 0.3)',
          },
          '100%': {
            'box-shadow': '0 0 30px rgba(14, 165, 233, 0.6), 0 0 40px rgba(125, 211, 252, 0.3)',
          },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

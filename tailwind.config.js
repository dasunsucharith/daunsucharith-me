/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00F5A0',
        'accent': '#8F00FF',
        'background': '#0B0F19',
        'surface': '#161B27',
        'text-primary': '#F5F5F7',
        'text-secondary': '#A5ADC1',
        'border': '#2A2E3C',
        'error': '#FF5757',
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
            'box-shadow': '0 0 20px rgba(0, 245, 160, 0.3)',
          },
          '100%': {
            'box-shadow': '0 0 30px rgba(0, 245, 160, 0.6), 0 0 40px rgba(143, 0, 255, 0.3)',
          },
        }
      }
    },
  },
  plugins: [],
}
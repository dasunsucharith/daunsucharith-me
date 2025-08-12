/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./contexts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				black: '#000000',
  				white: '#FFFFFF',
  				sky: '#0EA5E9',
  				'sky-light': '#7DD3FC',
  				'sky-dark': '#0284C7',
  				'gray-light': '#F8FAFC',
  				'gray-dark': '#1E293B',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			brand: {
  				base: '#0C0A0E',
  				surface: '#1F1C23',
  				muted: '#6B7280',
  				accent: '#0EA5E9',
  				strong: '#0284C7',
  				primary: '#0EA5E9',
  				secondary: '#0284C7'
  			},
  			light: {
  				base: '#FFFFFF',
  				surface: '#F8FAFC',
  				muted: '#F1F5F9',
  				accent: '#0EA5E9',
  				strong: '#0284C7'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		animation: {
  			'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  			gradient: 'gradient 6s ease infinite',
  			glow: 'glow 2s ease-in-out infinite alternate'
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
  				}
  			},
  			glow: {
  				'0%': {
  					'box-shadow': '0 0 20px rgba(14, 165, 233, 0.3)'
  				},
  				'100%': {
  					'box-shadow': '0 0 30px rgba(14, 165, 233, 0.6), 0 0 40px rgba(125, 211, 252, 0.3)'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    require('@tailwindcss/typography'),
      require("tailwindcss-animate")
],
}

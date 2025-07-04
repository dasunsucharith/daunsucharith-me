# Dasun Sucharith - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, featuring sophisticated animations, glassmorphism design, and optimized performance.

## 🌟 Features

### ✨ Design & Animation
- **Dynamic Hero Section** - Full viewport homepage that adapts to mobile browsers
- **Sophisticated Animations** - Framer Motion powered micro-interactions
- **Glassmorphism UI** - Modern frosted glass effects with backdrop blur
- **Gradient Animations** - Dynamic color transitions and glowing effects
- **Floating Elements** - Animated infinity symbols and geometric shapes
- **Interactive Social Icons** - Hover effects with custom glow animations

### 🚀 Performance
- **Static Site Generation** - Pre-rendered for optimal performance
- **Optimized Bundle Size** - Minimal JavaScript footprint
- **60fps Animations** - Smooth animations with performance optimization
- **Lazy Loading** - Efficient resource loading
- **SEO Optimized** - Meta tags and structured data

### 🎨 User Experience
- **Responsive Design** - Perfect on all devices and screen sizes
- **Smooth Navigation** - Seamless transitions between pages
- **Custom Scrollbar** - Branded scrollbar design
- **Typography** - Josefin Sans + Inter font combination
- **Accessibility** - WCAG compliant design patterns

## 🛠️ Tech Stack

- **Framework:** [Next.js 15.3.3](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 3.4.17](https://tailwindcss.com/)
- **Animations:** [Framer Motion 12.18.1](https://www.framer.com/motion/)
- **Icons:** [Lucide React 0.515.0](https://lucide.dev/)
- **Typography:** [Google Fonts](https://fonts.google.com/) (Josefin Sans, Inter)

## 📁 Project Structure

```
daunsucharith-me/
├── app/                          # Next.js App Router
│   ├── about/                    # About page
│   ├── contact/                  # Contact page
│   ├── projects/                 # Projects page
│   ├── services/                 # Services page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── components/                   # React components
│   ├── HomePage.tsx              # Enhanced hero section
│   └── Navigation.tsx            # Navigation component
├── public/                       # Static assets
│   └── assets/                   # Images and icons
├── out/                          # Static export output
├── next.config.mjs               # Next.js configuration
├── tailwind.config.js            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dasunsucharith/daunsucharith-me.git
   cd daunsucharith-me
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run export` | Build and export static files |
| `npm run deploy` | Build for deployment |

## 🎨 Design System

### Color Palette
```css
:root {
  --brand-base: #161E2F;      /* Primary background */
  --brand-surface: #242F49;   /* Card backgrounds */
  --brand-muted: #6B7280;     /* Secondary text */
  --brand-accent: #FFA586;    /* Primary accent */
  --brand-strong: #B51A2B;    /* Secondary accent */
  --brand-primary: #FFA586;   /* Button primary */
  --brand-secondary: #B51A2B; /* Button secondary */
}
```

### Typography
- **Headers:** Josefin Sans (Google Fonts)
- **Body:** Inter (Google Fonts)
- **Font Sizes:** Responsive scale from 16px to 96px

### Animations
- **Duration:** 0.8s - 25s (varied for natural feel)
- **Easing:** easeInOut, linear, custom bezier curves
- **Performance:** Hardware accelerated with `will-change`

## 📱 Pages Overview

### 🏠 Homepage (`/`)
- Full viewport hero section (dynamic viewport height)
- Animated infinity symbols and geometric shapes
- Gradient text animations
- Social media links with glow effects
- No scrolling design for focused experience

### 👤 About (`/about`)
- Personal introduction and background
- Skills and technologies showcase
- Professional experience timeline
- Education and certifications
- Interactive stats and achievements

### 💼 Services (`/services`)
- Service offerings overview
- Detailed service descriptions
- Pricing and packages
- Call-to-action sections

### 🚀 Projects (`/projects`)
- Portfolio showcase
- Project case studies
- Technology stack highlights
- Live demos and GitHub links

### 📞 Contact (`/contact`)
- Contact form
- Social media links
- Location and availability
- Professional inquiry handling

## 🔧 Configuration

### Environment Variables
```bash
NODE_ENV=production  # For static export
```

### Next.js Configuration
- **Output:** Static export for hosting
- **Images:** Unoptimized for static hosting
- **Trailing Slash:** Enabled for better SEO

### Tailwind Configuration
- Custom color palette
- Extended spacing scale
- Custom animations
- Typography plugin integration

## 🚀 Deployment

### Static Hosting (Recommended)
```bash
npm run build
```
Deploy the `out/` folder to:
- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)
- [GitHub Pages](https://pages.github.com/)
- Any static hosting provider

### Manual Deployment
1. Build the project: `npm run build`
2. Copy the `out/` folder to your server
3. Configure your web server to serve the files

## 🐛 Troubleshooting

### Common Issues

**Build Warnings:**
- Headers warnings with static export are normal and don't affect functionality

**Animation Performance:**
- Animations are optimized for 60fps
- Use Chrome DevTools to monitor performance

**Font Loading:**
- Fonts are loaded from Google Fonts CDN
- Fallback fonts are configured

## 📈 Performance Metrics

- **Homepage Bundle:** ~3KB (gzipped)
- **Total JS:** ~141KB (includes framework)
- **First Paint:** <1s
- **Interactive:** <2s
- **SEO Score:** 100/100

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Dasun Sucharith**
- Portfolio: [daunsucharith.me](https://daunsucharith.me)
- Email: sucharith.dasun@gmail.com
- LinkedIn: [dasun-sucharith](https://www.linkedin.com/in/dasun-sucharith/)
- GitHub: [dasunsucharith](https://github.com/dasunsucharith)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Tailwind CSS](https://tailwindcss.com/) for rapid styling
- [Lucide](https://lucide.dev/) for beautiful icons
- [Google Fonts](https://fonts.google.com/) for typography

---

⭐ **Star this repository if you found it helpful!**
# Force deployment Sat Jul  5 12:29:08 AM +0530 2025

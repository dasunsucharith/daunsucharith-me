'use client'

import { ExternalLink } from 'lucide-react'

const AppsHubSection = () => {
  return (
    <section id="apps-hub" className="relative py-24 overflow-hidden">
      {/* Pixel art vibe background */}
      <div className="absolute inset-0 pixel-grid opacity-[0.06]"></div>
      <div className="absolute -top-10 -left-10 size-32 bg-primary-sky/15 rotate-12 pixelated-square"></div>
      <div className="absolute bottom-10 -right-6 size-16 bg-primary-sky-dark/20 -rotate-6 pixelated-square"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pixel-card bg-background/70 backdrop-blur-xl border border-border/50 rounded-2xl p-8 md:p-12 shadow-xl">
          <header className="text-center mb-8">
            <h2 className="heading-section tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-sky via-foreground to-primary-sky-dark">
              Dasun's Pixel Lab
            </h2>
            <h3 className="mt-2 text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary-sky to-primary-sky-dark">
              Pixel Powered Creations
            </h3>
            <p className="mt-4 text-body-lg text-muted-foreground">
              A home for my tiny, hand-coded, and AI-assisted experiments. Each project here started as an idea and became something real — built for fun, learning, and a bit of pixel-art flair.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Pixel blurb */}
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/5 border border-primary/10">
                <span className="size-3 bg-primary-sky rounded-[2px] shadow-[2px_2px_0_0_rgba(0,0,0,0.35)]"></span>
                <span className="text-sm text-primary-sky">Pixel Vibes</span>
              </div>
              <p className="text-body-lg leading-relaxed">
                Explore a collection of apps with a retro, pixel‑art aesthetic:
                utilities, experiments, and tiny ideas brought to life.
              </p>
              <ul className="text-body list-disc list-inside text-muted-foreground">
                <li>Clean, minimal UX with chunky, playful accents</li>
                <li>Frequent updates as I ship new ideas</li>
                <li>Open source spirit — many projects on GitHub</li>
              </ul>

              <div>
                <a
                  href="https://dasunsucharith.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary-sky text-white font-semibold shadow-[0_8px_28px_rgba(56,189,248,0.35)] hover:shadow-[0_12px_40px_rgba(56,189,248,0.45)] hover:bg-primary-sky-dark transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-sky/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Visit the Pixel Lab
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Pixel art image */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="pixel-card rounded-xl border border-border/60 bg-gradient-to-b from-background/80 to-background/40 p-3 md:p-4 overflow-hidden">
                <div className="relative aspect-[4/3] w-full bg-black rounded-lg overflow-hidden">
                  <img
                    src="/assets/Images/superman-pixel.webp"
                    alt="Pixel art: Superman"
                    className="w-full h-full object-contain bg-black"
                    style={{ imageRendering: 'pixelated' }}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="absolute -top-3 -left-3 size-3 bg-primary-sky rounded-[2px]"></div>
              <div className="absolute -bottom-3 -right-3 size-2 bg-primary-sky/70 rounded-[2px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppsHubSection

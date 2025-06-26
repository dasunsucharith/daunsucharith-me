import React from 'react';

export type WaveVariant = 'subtle' | 'dramatic' | 'angled';

interface WaveDividerProps {
  variant?: WaveVariant;
  fromColor?: string;
  toColor?: string;
  className?: string;
  rotate?: boolean;
}

const waveShapes: Record<WaveVariant, string> = {
  subtle: "M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,96L1392,96C1344,96,1248,96,1152,96C1056,96,960,96,864,96C768,96,672,96,576,96C480,96,384,96,288,96C192,96,96,96,48,96L0,96Z",
  
  dramatic: "M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,96L1360,96C1280,96,1120,96,960,96C800,96,640,96,480,96C320,96,160,96,80,96L0,96Z",
  
  angled: "M0,48L1440,96L1440,96L0,96Z"
};

export default function WaveDivider({
  variant = 'subtle',
  fromColor = 'var(--primary-color)',
  toColor = 'var(--brand-surface)',
  className = '',
  rotate = false
}: WaveDividerProps) {
  const pathData = waveShapes[variant];
  
  return (
    <div className={`relative w-full ${rotate ? 'rotate-180' : ''} ${className}`}>
      <svg
        className="w-full h-auto"
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`gradient-${variant}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={fromColor} />
            <stop offset="100%" stopColor={toColor} />
          </linearGradient>
        </defs>
        <path
          d={pathData}
          fill={`url(#gradient-${variant})`}
          className="transition-all duration-300 ease-in-out"
        />
      </svg>
    </div>
  );
}

// Preset components for easy use
export function SubtleWave(props: Omit<WaveDividerProps, 'variant'>) {
  return <WaveDivider variant="subtle" {...props} />;
}

export function DramaticWave(props: Omit<WaveDividerProps, 'variant'>) {
  return <WaveDivider variant="dramatic" {...props} />;
}

export function AngledWave(props: Omit<WaveDividerProps, 'variant'>) {
  return <WaveDivider variant="angled" {...props} />;
}

// Mobile-optimized versions with adjusted heights
export function MobileWaveDivider({
  variant = 'subtle',
  fromColor = 'var(--primary-color)',
  toColor = 'var(--brand-surface)',
  className = '',
  rotate = false
}: WaveDividerProps) {
  const pathData = waveShapes[variant];
  
  return (
    <div className={`relative w-full ${rotate ? 'rotate-180' : ''} ${className}`}>
      <svg
        className="w-full h-auto"
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`mobile-gradient-${variant}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={fromColor} />
            <stop offset="100%" stopColor={toColor} />
          </linearGradient>
        </defs>
        <path
          d={pathData.replace(/96/g, '64')}
          fill={`url(#mobile-gradient-${variant})`}
          className="transition-all duration-300 ease-in-out"
        />
      </svg>
    </div>
  );
}

// Responsive wrapper that uses appropriate wave for screen size
export function ResponsiveWaveDivider(props: WaveDividerProps) {
  return (
    <>
      <div className="hidden sm:block">
        <WaveDivider {...props} />
      </div>
      <div className="block sm:hidden">
        <MobileWaveDivider {...props} />
      </div>
    </>
  );
}
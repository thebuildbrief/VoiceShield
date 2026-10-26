import React, { useEffect, useRef } from 'react';

interface WaveformVisualizerProps {
  isPlaying: boolean;
  barCount?: number;
  height?: number;
  color?: 'lime' | 'lavender' | 'danger';
  interactive?: boolean;
  progress?: number; // 0 to 1
  onSeek?: (ratio: number) => void;
}

export const WaveformVisualizer: React.FC<WaveformVisualizerProps> = ({
  isPlaying,
  barCount = 36,
  height = 54,
  color = 'lime',
  interactive = false,
  progress = 0,
  onSeek,
}) => {
  const animationRef = useRef<number | null>(null);
  const barsRef = useRef<number[]>([]);

  // Seed initial wave bar heights
  if (barsRef.current.length !== barCount) {
    barsRef.current = Array.from({ length: barCount }, (_, i) => {
      // Natural voice speech waveform distribution (bell curved envelope with random jitter)
      const center = barCount / 2;
      const dist = Math.abs(i - center) / center;
      const baseHeight = Math.max(0.18, 1 - dist * 0.7);
      const jitter = (Math.sin(i * 1.4) + Math.cos(i * 0.8)) * 0.2;
      return Math.min(1, Math.max(0.15, baseHeight + jitter));
    });
  }

  const [, setTick] = React.useState(0);

  useEffect(() => {
    if (!isPlaying) {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      return;
    }

    let frame = 0;
    const animate = () => {
      frame++;
      if (frame % 3 === 0) {
        // Subtle dynamic wave motion while active
        barsRef.current = barsRef.current.map((orig, i) => {
          const wavePhase = Math.sin((frame * 0.1) + i * 0.4);
          const modulated = orig * (0.6 + 0.4 * Math.abs(wavePhase));
          return Math.max(0.12, Math.min(1, modulated));
        });
        setTick((t) => (t + 1) % 1000);
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPlaying]);

  const getColorClasses = (index: number) => {
    const isPast = progress > 0 ? index / barCount <= progress : false;
    
    if (color === 'lime') {
      if (isPast) return 'bg-lime-500 shadow-[0_0_8px_rgba(223,255,117,0.8)]';
      return isPlaying ? 'bg-lime-400/80 hover:bg-lime-300' : 'bg-lime-500/35';
    }
    if (color === 'danger') {
      if (isPast) return 'bg-red-500 shadow-[0_0_8px_rgba(255,107,107,0.8)]';
      return isPlaying ? 'bg-red-400/80 hover:bg-red-300' : 'bg-red-500/35';
    }
    // lavender default
    if (isPast) return 'bg-lavender-400 shadow-[0_0_8px_rgba(191,162,255,0.8)]';
    return isPlaying ? 'bg-lavender-400/80 hover:bg-lavender-300' : 'bg-lavender-500/35';
  };

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !onSeek) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    onSeek(ratio);
  };

  return (
    <div
      onClick={handleContainerClick}
      className={`relative flex items-center justify-between gap-[2px] sm:gap-1 px-2 py-1 rounded-lg bg-plum-950/60 border border-plum-700/40 select-none ${
        interactive ? 'cursor-pointer hover:border-lavender/40 transition-colors' : ''
      }`}
      style={{ height: `${height}px` }}
      title={interactive ? 'Click to jump to audio position' : undefined}
    >
      {barsRef.current.map((heightFactor, index) => {
        const barHeight = Math.round(heightFactor * (height - 12));
        return (
          <div
            key={index}
            className={`w-1 sm:w-1.5 rounded-full transition-all duration-150 ${getColorClasses(index)}`}
            style={{
              height: `${Math.max(4, barHeight)}px`,
            }}
          />
        );
      })}

      {/* Center scanline glow when playing */}
      {isPlaying && (
        <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-lime-400 to-transparent opacity-40 animate-pulse pointer-events-none" />
      )}
    </div>
  );
};

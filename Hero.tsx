import React from 'react';
import { Shield, Sparkles, ArrowRight, CheckCircle2, AlertOctagon, HelpCircle } from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';
import { audioFx } from '../utils/audioEffects';

interface HeroProps {
  onStartSimulator: () => void;
  onExploreLearn: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartSimulator, onExploreLearn }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background radial spotlights & subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] radial-spotlight pointer-events-none -z-10" />
      <div className="absolute top-20 right-0 w-96 h-96 radial-lime-spotlight pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copy, CTAs, Benefits */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Top Pill / Creator Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-plum-800/80 border border-lavender/30 text-xs sm:text-sm text-cream shadow-sm backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-lime animate-pulse" />
              <span className="font-semibold text-lavender">VoiceShield</span>
              <span className="text-cream-400">|</span>
              <span className="text-cream-300">An educational project by <strong className="text-cream font-medium">The Build Brief</strong></span>
            </div>

            {/* Core Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-cream tracking-tight leading-[1.12]">
              That voice sounds familiar.{' '}
              <span className="block mt-1 bg-gradient-to-r from-lavender via-cream to-lime bg-clip-text text-transparent">
                But is it really them?
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-cream-300 max-w-2xl font-normal leading-relaxed">
              AI voice cloning is changing the way scammers impersonate people. Learn to recognize red flags and verify suspicious requests before it's too late.
            </p>

            {/* Core Axiom Callout */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-plum-900/60 border border-lavender/20 flex items-start gap-3 max-w-xl">
              <div className="p-2 rounded-xl bg-lime/10 border border-lime/30 text-lime flex-shrink-0 mt-0.5">
                <AlertOctagon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-lime font-bold">The Golden Rule</span>
                <p className="text-sm sm:text-base font-semibold text-cream mt-0.5">
                  “Never trust a voice alone. Verify before you act.”
                </p>
                <p className="text-xs text-cream-400 mt-1">
                  Educational awareness prototype. Real voice clones cannot intercept outbound verification calls.
                </p>
              </div>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => {
                  audioFx.playTap(700);
                  onStartSimulator();
                }}
                className="px-6 py-3.5 rounded-2xl bg-lime hover:bg-lime-400 text-plum-950 font-bold text-base flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(223,255,117,0.35)] hover:shadow-[0_0_35px_rgba(223,255,117,0.5)] transition-all active:scale-[0.98] group"
              >
                <span>Try the Scam Simulator</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => {
                  audioFx.playTap(520);
                  onExploreLearn();
                }}
                className="px-6 py-3.5 rounded-2xl bg-plum-800/80 hover:bg-plum-700/80 text-cream border border-lavender/30 hover:border-lavender/60 font-semibold text-base flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <HelpCircle className="w-4 h-4 text-lavender" />
                <span>Learn How It Works</span>
              </button>
            </div>

            {/* Three concise benefit labels */}
            <div className="pt-6 border-t border-plum-700/50 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 text-sm text-cream-200">
                <CheckCircle2 className="w-4 h-4 text-lime flex-shrink-0" />
                <span>Spot suspicious requests</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-cream-200">
                <CheckCircle2 className="w-4 h-4 text-lavender flex-shrink-0" />
                <span>Learn verification techniques</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-cream-200">
                <CheckCircle2 className="w-4 h-4 text-lime flex-shrink-0" />
                <span>Protect people you trust</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <PhoneMockup />
          </div>

        </div>
      </div>
    </section>
  );
};

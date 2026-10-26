import React from 'react';
import {
  Info,
  Terminal,
  AlertTriangle,
  Lightbulb,
  Compass,
  ArrowUpRight,
  Shield,
  Layers,
  Sparkles,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative bg-plum-900/30 border-t border-plum-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-plum-800 border border-lavender/30 text-xs font-mono text-lavender mb-3">
            <Terminal className="w-3.5 h-3.5 text-lime" />
            <span>PROJECT BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-cream tracking-tight">
            About VoiceShield
          </h2>
          <p className="mt-3 text-base sm:text-lg text-cream-300">
            “VoiceShield is an educational prototype created by The Build Brief to explore how technology can be used to raise awareness about AI-enabled scams.”
          </p>
        </div>

        {/* Built in Public Card Grid */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="h-2 w-2 rounded-full bg-lime" />
            <h3 className="text-xl font-bold text-cream">Built in Public Breakdown</h3>
            <span className="text-xs text-cream-400 font-mono">| Transparency & Methodology</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* The Problem */}
            <div className="p-6 rounded-3xl bg-plum-950/80 border border-plum-700/80 shadow-lg space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-red-950/60 border border-red-700/60 text-red-400">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-cream">1. The Problem</h4>
              </div>
              <p className="text-xs sm:text-sm text-cream-300 leading-relaxed">
                Generative AI and zero-shot neural voice cloning have lowered the barrier to convincing audio impersonation to virtually zero. Criminals no longer need expensive equipment or voice actors; a short video clip from public social media accounts provides ample audio data to synthesize distress calls, kidnapping hoaxes, and urgent payment requests.
              </p>
              <div className="p-3 rounded-xl bg-plum-900/60 border border-plum-800 text-xs text-cream-400">
                <strong>Core vulnerability:</strong> Humans instinctively treat familiar voices as authenticated proof of identity.
              </div>
            </div>

            {/* Our Approach */}
            <div className="p-6 rounded-3xl bg-plum-950/80 border border-plum-700/80 shadow-lg space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-lime/10 border border-lime/30 text-lime">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-cream">2. Our Approach</h4>
              </div>
              <p className="text-xs sm:text-sm text-cream-300 leading-relaxed">
                Rather than promoting unproven "AI detector" algorithms that provide false reassurance, VoiceShield focuses on <strong>human behavioral protocols</strong>. The most effective security mechanism against synthetic media is not trying to guess if an audio file sounds robotic, but enforcing strict <em>out-of-band bilateral verification</em>.
              </p>
              <div className="p-3 rounded-xl bg-plum-900/60 border border-plum-800 text-xs text-cream-400">
                <strong>Core doctrine:</strong> “Never trust a voice alone. Verify before you act.”
              </div>
            </div>

            {/* Current Prototype Limitations */}
            <div className="p-6 rounded-3xl bg-plum-950/80 border border-plum-700/80 shadow-lg space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-amber-950/60 border border-amber-700/60 text-amber-400">
                  <Info className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-cream">3. Current Prototype Limitations</h4>
              </div>
              <p className="text-xs sm:text-sm text-cream-300 leading-relaxed">
                VoiceShield does <strong>not</strong> analyze uploaded recordings or claim to classify audio as synthetic or genuine in real time. The scenarios and waveform displays in this tool are interactive educational simulations designed to train critical judgment. Quiz scores measure user answers to the educational drill, not real-world fraud odds.
              </p>
              <div className="p-3 rounded-xl bg-plum-900/60 border border-plum-800 text-xs text-cream-400">
                <strong>Honest Claim:</strong> We make zero claims of automated detection accuracy or guaranteed scam prevention.
              </div>
            </div>

            {/* Future Improvements */}
            <div className="p-6 rounded-3xl bg-plum-950/80 border border-plum-700/80 shadow-lg space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-lavender/10 border border-lavender/30 text-lavender">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-cream">4. Future Improvements</h4>
              </div>
              <p className="text-xs sm:text-sm text-cream-300 leading-relaxed">
                We plan to expand VoiceShield into a comprehensive community safety kit, including downloadable offline family emergency cards, localized language audio drills (Hindi, Tamil, Bengali, Spanish), community-reported scam script transcripts, and corporate team training modules.
              </p>
              <div className="p-3 rounded-xl bg-plum-900/60 border border-plum-800 text-xs text-cream-400">
                <strong>Roadmap:</strong> Open-source educational guides, multilingual audio drills, and printable emergency cards.
              </div>
            </div>

          </div>
        </div>

        {/* Creator Brand Label Spotlight */}
        <div className="p-6 sm:p-8 rounded-3xl bg-plum-950 border border-lavender/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-mono uppercase text-lavender font-bold">
              Tech Creator Brand Initiative
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-cream">
              Created by <span className="text-lime">The Build Brief</span>
            </h4>
            <p className="text-xs sm:text-sm text-cream-400 max-w-xl">
              Exploring cutting-edge technology, cybersecurity literacy, and software engineering through transparent, build-in-public tools.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3.5 py-2 rounded-xl bg-plum-900 border border-plum-700 text-xs font-mono text-cream-300">
              #VoiceShield
            </span>
            <span className="px-3.5 py-2 rounded-xl bg-plum-900 border border-plum-700 text-xs font-mono text-cream-300">
              #TheBuildBrief
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

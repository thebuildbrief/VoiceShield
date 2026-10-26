import React, { useState } from 'react';
import {
  BookOpen,
  Cpu,
  Radio,
  Ear,
  ShieldCheck,
  Smartphone,
  ChevronDown,
  Sparkles,
  AlertTriangle,
  Lightbulb,
} from 'lucide-react';
import { LEARN_MODULES } from '../data/learnContent';
import { SafeWordTool } from './SafeWordTool';
import { audioFx } from '../utils/audioEffects';

export const LearnSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('what-is-cloning');

  const toggleExpand = (id: string) => {
    audioFx.playTap(520);
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-lime" />;
      case 'Radio':
        return <Radio className="w-5 h-5 text-red-400" />;
      case 'Ear':
        return <Ear className="w-5 h-5 text-lavender" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-lime" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-lavender" />;
      default:
        return <BookOpen className="w-5 h-5 text-cream" />;
    }
  };

  return (
    <section id="learn" className="py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-plum-800 border border-lavender/30 text-xs font-mono text-lavender mb-3">
            <BookOpen className="w-3.5 h-3.5 text-lime" />
            <span>KNOWLEDGE VAULT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-cream tracking-tight">
            Learn How AI Voice Scams Function
          </h2>
          <p className="mt-3 text-base text-cream-300">
            Clear, non-technical explanations of neural speech synthesis, cognitive traps, and practical defense protocols.
          </p>
        </div>

        {/* Two Column Layout: Educational Cards on Left & Interactive Safe Word Tool on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 5 Expandable Educational Cards */}
          <div className="lg:col-span-7 space-y-4">
            {LEARN_MODULES.map((module) => {
              const isExpanded = expandedId === module.id;

              return (
                <div
                  key={module.id}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isExpanded
                      ? 'bg-plum-950 border-lavender/40 shadow-xl'
                      : 'bg-plum-950/60 border-plum-800 hover:border-plum-700'
                  }`}
                >
                  {/* Card Header (Clickable) */}
                  <button
                    onClick={() => toggleExpand(module.id)}
                    className="w-full text-left p-5 flex items-start justify-between gap-4 select-none"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-xl bg-plum-900 border border-plum-700 flex-shrink-0 mt-0.5">
                        {getModuleIcon(module.icon)}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-lavender font-bold block mb-0.5">
                          {module.category}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-cream">
                          {module.title}
                        </h3>
                        <p className="text-xs text-cream-400 mt-0.5">{module.subtitle}</p>
                      </div>
                    </div>

                    <div
                      className={`p-1 rounded-lg bg-plum-900 border border-plum-700 text-cream-300 transition-transform ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Expanded Content Body */}
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 space-y-4 border-t border-plum-900 text-xs sm:text-sm text-cream-300 leading-relaxed">
                      <p className="text-cream-200">{module.summary}</p>

                      {/* Key Takeaways */}
                      <div className="p-3.5 rounded-xl bg-plum-900/60 border border-plum-800/80 space-y-2">
                        <span className="text-[11px] font-mono uppercase text-lime font-bold block">
                          Key Realities & Mechanics:
                        </span>
                        <ul className="space-y-1.5">
                          {module.takeaways.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-cream-300 text-xs">
                              <span className="text-lavender font-bold">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Real world context box */}
                      <div className="p-3 rounded-xl bg-plum-900/30 border border-plum-800 text-xs text-cream-400">
                        <strong className="text-cream block mb-1">Real-World Case Context:</strong>
                        {module.realWorldContext}
                      </div>

                      {/* Golden Rule for this topic */}
                      <div className="p-3 rounded-xl bg-lime/10 border border-lime/30 text-xs text-cream flex items-start gap-2">
                        <Lightbulb className="w-4 h-4 text-lime flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-lime block mb-0.5">Preventative Axiom:</strong>
                          {module.preventativeRule}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Interactive Safe Word Generator Tool & Visual Explainer */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            
            {/* Interactive Safe Word Generator */}
            <SafeWordTool />

            {/* Visual Comparison: Voice Note vs Out-of-band call */}
            <div className="p-5 rounded-2xl bg-plum-950/70 border border-plum-800 text-xs space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-cream-400 font-bold block">
                The Security Difference
              </span>
              
              <div className="p-3 rounded-xl bg-red-950/40 border border-red-700/40 space-y-1">
                <span className="text-red-300 font-bold block">Inbound Voice / Voicemail</span>
                <p className="text-cream-400 text-[11px]">
                  Unidirectional channel. Caller controls audio payload, caller ID spoofing, and background noise. Zero cryptographic guarantee.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-600/40 space-y-1">
                <span className="text-emerald-300 font-bold block">Outbound Cellular Callback</span>
                <p className="text-cream-400 text-[11px]">
                  Bidirectional channel initiated by YOU. Routed via telecom carrier to the physical SIM card in your contact's possession.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

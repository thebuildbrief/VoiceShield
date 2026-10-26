import React from 'react';
import {
  ShieldAlert,
  PauseOctagon,
  PhoneCall,
  Users,
  KeyRound,
  FileText,
  Landmark,
  ExternalLink,
  Phone,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Shield,
} from 'lucide-react';
import { SUSPECTED_SCAM_STEPS } from '../data/preventionGuide';
import { audioFx } from '../utils/audioEffects';

export const SuspiciousGuide: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'PauseOctagon':
        return <PauseOctagon className="w-5 h-5 text-lime" />;
      case 'PhoneCall':
        return <PhoneCall className="w-5 h-5 text-lime" />;
      case 'Users':
        return <Users className="w-5 h-5 text-lavender" />;
      case 'ShieldAlert':
        return <KeyRound className="w-5 h-5 text-red-400" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-lavender" />;
      case 'Landmark':
        return <Landmark className="w-5 h-5 text-lime" />;
      default:
        return <Shield className="w-5 h-5 text-lime" />;
    }
  };

  return (
    <section id="guide" className="py-16 md:py-24 relative bg-plum-900/40 border-t border-b border-plum-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-plum-800 border border-lavender/30 text-xs font-mono text-lavender mb-3">
            <ShieldAlert className="w-3.5 h-3.5 text-lime" />
            <span>INCIDENT PROTOCOL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-cream tracking-tight">
            What To Do If You Suspect a Scam
          </h2>
          <p className="mt-3 text-base text-cream-300">
            A precise, sequential 6-step playbook to protect yourself, isolate the threat, and take immediate recovery actions if funds were targeted.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SUSPECTED_SCAM_STEPS.map((step) => (
            <div
              key={step.stepNumber}
              className="p-6 rounded-3xl bg-plum-950/80 border border-plum-700/70 shadow-lg flex flex-col justify-between hover:border-lavender/40 transition-all group"
            >
              <div>
                {/* Step Top Bar */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-xl bg-plum-900 border border-plum-700 flex items-center justify-center font-mono font-bold text-sm text-lime group-hover:scale-105 transition-transform">
                    0{step.stepNumber}
                  </div>
                  <div className="flex items-center gap-2">
                    {step.badge && (
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-red-950/80 text-red-300 border border-red-700/50">
                        {step.badge}
                      </span>
                    )}
                    <div className="p-2 rounded-xl bg-plum-900/80 border border-plum-800">
                      {getStepIcon(step.icon)}
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-cream group-hover:text-white transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs font-mono text-lavender mt-1">{step.shortAction}</p>

                <p className="text-xs sm:text-sm text-cream-300 mt-3 leading-relaxed">
                  {step.description}
                </p>

                {/* Practical DOs and DONTs */}
                <div className="mt-4 pt-3 border-t border-plum-800/80 space-y-2">
                  <div className="space-y-1">
                    {step.doList.map((item, idx) => (
                      <div key={idx} className="text-xs text-cream-200 flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-lime flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-1 pt-1">
                    {step.dontList.map((item, idx) => (
                      <div key={idx} className="text-xs text-red-300 flex items-start gap-1.5">
                        <XCircle className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Hotline & Indian Cybercrime Portal Spotlight Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-plum-950 via-plum-900 to-plum-950 border-2 border-lime/40 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-600/60 text-xs font-mono font-bold text-red-300">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                OFFICIAL REPORTING CHANNELS (INDIA)
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-cream">
                Lost money or suspect an ongoing fraudulent transfer?
              </h3>
              <p className="text-sm sm:text-base text-cream-300 leading-relaxed max-w-2xl">
                Act within the <strong>"Golden Hours"</strong>. If money has been lost in India, contact the National Cyber Crime Reporting Helpline promptly at <strong className="text-lime">1930</strong> and file an incident on the official national portal so banks can freeze the scammer's destination accounts.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              {/* Dial 1930 Button */}
              <a
                href="tel:1930"
                onClick={() => audioFx.playAlert()}
                className="px-5 py-3.5 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(255,107,107,0.4)] transition-all active:scale-95 text-center"
              >
                <Phone className="w-5 h-5 fill-white" />
                <span>Call Helpline 1930</span>
              </a>

              {/* Official Portal External Link */}
              <a
                href="https://cybercrime.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => audioFx.playTap(600)}
                className="px-5 py-3.5 rounded-2xl bg-plum-800 hover:bg-plum-700 text-lime hover:text-white border border-lime/40 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-95 text-center group"
              >
                <span>Visit cybercrime.gov.in</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <p className="text-[11px] text-center text-cream-400 font-mono">
                Official Ministry of Home Affairs Portal
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

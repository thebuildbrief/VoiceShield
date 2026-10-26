import React from 'react';
import { Shield, Sparkles, ExternalLink, Heart, AlertOctagon } from 'lucide-react';
import { audioFx } from '../utils/audioEffects';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-plum-950 border-t border-plum-800/80 pt-16 pb-12 text-cream-300 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-plum-800/60">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-plum-900 border border-lavender/40 flex items-center justify-center">
                <Shield className="w-4 h-4 text-lime" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-cream">
                Voice<span className="text-lime">Shield</span>
              </span>
            </div>

            <p className="text-cream-300 text-sm leading-relaxed max-w-sm">
              An educational cybersecurity awareness prototype designed to teach proactive verification protocols against synthetic AI voice impersonation.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-plum-900 border border-plum-700/80 text-xs text-lavender font-medium">
              <Sparkles className="w-3.5 h-3.5 text-lime" />
              <span>Created for <strong>The Build Brief</strong></span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-wider text-cream font-bold">
              Navigation
            </h5>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('simulator')}
                  className="hover:text-lime transition-colors"
                >
                  Voice Scam Simulator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('checklist')}
                  className="hover:text-lime transition-colors"
                >
                  Suspicious Call Checklist
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('guide')}
                  className="hover:text-lime transition-colors"
                >
                  Suspected Scam Playbook
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('learn')}
                  className="hover:text-lime transition-colors"
                >
                  Learn & Safe Word Tool
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-lime transition-colors"
                >
                  About & Built in Public
                </button>
              </li>
            </ul>
          </div>

          {/* Emergency & Official Links */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-wider text-cream font-bold">
              Official Reporting
            </h5>
            <div className="p-4 rounded-2xl bg-plum-900/60 border border-plum-800 space-y-2">
              <p className="text-cream-300 leading-normal">
                If you have experienced a financial scam or voice fraud in India:
              </p>
              <div className="text-xs font-semibold text-lime">
                National Cyber Crime Helpline: 1930
              </div>
              <a
                href="https://cybercrime.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-lavender hover:text-white transition-colors underline underline-offset-2"
              >
                <span>cybercrime.gov.in</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-cream-400 text-[11px]">
          <p className="max-w-2xl text-center sm:text-left">
            <strong>Educational Disclaimer:</strong> VoiceShield is a demonstration prototype. It does not provide automated fraud detection or biometric speech authentication. Never send money or disclose OTPs without independent out-of-band verification.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> by{' '}
            <strong className="text-cream">The Build Brief</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

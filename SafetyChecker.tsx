import React, { useState } from 'react';
import {
  ShieldAlert,
  Clock,
  CreditCard,
  Lock,
  PhoneOff,
  KeyRound,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  CheckCircle,
  HelpCircle,
  ShieldCheck,
  ChevronRight,
  Info,
} from 'lucide-react';
import { SAFETY_WARNING_SIGNS, PRESET_TEST_CASES } from '../data/safetyChecklistData';
import { audioFx } from '../utils/audioEffects';

export const SafetyChecker: React.FC = () => {
  const [selectedSigns, setSelectedSigns] = useState<string[]>([]);

  const handleToggleSign = (id: string) => {
    audioFx.playTap(550);
    setSelectedSigns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleApplyPreset = (activeIds: string[]) => {
    audioFx.playTap(620);
    setSelectedSigns(activeIds);
  };

  const handleClearAll = () => {
    audioFx.playTap(440);
    setSelectedSigns([]);
  };

  // Determine dynamic risk states based on criteria
  const count = selectedSigns.length;
  const hasOTP = selectedSigns.includes('credentials');
  const hasUrgency = selectedSigns.includes('urgency');
  const hasMoney = selectedSigns.includes('money_giftcards') || selectedSigns.includes('unusual_channels');
  const hasCallbackBlock = selectedSigns.includes('discourages_callback');

  // Dynamic Headline Result as mandated by user prompt:
  // "Pause and verify.", "Several warning signs detected.", "Never share confidential credentials."
  let resultHeadline = 'Select observed behaviors to assess risk';
  let resultBadge = 'Awaiting Input';
  let badgeClasses = 'bg-plum-800 text-cream-400 border-plum-700';
  let resultDescription =
    'Check each warning indicator you observed during the call or voice message. The system will evaluate social-engineering pressure patterns.';

  if (hasOTP) {
    resultHeadline = 'Never share confidential credentials.';
    resultBadge = 'CRITICAL RED FLAG';
    badgeClasses = 'bg-red-950 text-red-300 border-red-600 animate-pulse';
    resultDescription =
      'Immediate Warning: No legitimate bank, telecommunications provider, or police force will EVER demand your SMS OTP, net-banking password, or ATM PIN over a call. Disclose nothing and hang up.';
  } else if (count >= 3) {
    resultHeadline = 'Several warning signs detected.';
    resultBadge = 'HIGH SCAM LIKELIHOOD';
    badgeClasses = 'bg-red-900/80 text-red-200 border-red-500';
    resultDescription =
      'Multiple classic coercion patterns are present simultaneously (urgency + isolation + payment demand). This combination is standard in organized AI voice impersonation campaigns.';
  } else if (count >= 1) {
    resultHeadline = 'Pause and verify.';
    resultBadge = 'SUSPICIOUS PATTERN';
    badgeClasses = 'bg-amber-950/80 text-amber-300 border-amber-600';
    resultDescription =
      'Even a single warning sign warrants caution. Break the communication loop, disconnect immediately, and verify using a known independent number.';
  }

  // Icons map
  const getIcon = (name: string) => {
    switch (name) {
      case 'Clock':
        return <Clock className="w-5 h-5" />;
      case 'CreditCard':
        return <CreditCard className="w-5 h-5" />;
      case 'Lock':
        return <Lock className="w-5 h-5" />;
      case 'PhoneOff':
        return <PhoneOff className="w-5 h-5" />;
      case 'KeyRound':
        return <KeyRound className="w-5 h-5" />;
      default:
        return <AlertTriangle className="w-5 h-5" />;
    }
  };

  return (
    <section id="checklist" className="py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-plum-800 border border-lavender/30 text-xs font-mono text-lavender mb-3">
            <ShieldAlert className="w-3.5 h-3.5 text-lime" />
            <span>REAL-TIME RED FLAG EVALUATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-cream tracking-tight">
            Suspicious Call Safety Checker
          </h2>
          <p className="mt-3 text-base text-cream-300">
            Received a high-pressure voice call or audio message? Check the warning signs below to analyze typical manipulation patterns.
          </p>
        </div>

        {/* Preset quick test shortcuts */}
        <div className="mb-8 p-3 rounded-2xl bg-plum-950/70 border border-plum-800 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-mono text-cream-400 uppercase tracking-wider flex items-center gap-1.5 px-2">
            <Sparkles className="w-3.5 h-3.5 text-lime" /> Quick Test Presets:
          </span>
          <div className="flex flex-wrap gap-2">
            {PRESET_TEST_CASES.map((preset) => (
              <button
                key={preset.id}
                onClick={() => handleApplyPreset(preset.activeIds)}
                className="px-3 py-1.5 rounded-xl text-xs bg-plum-900 hover:bg-plum-800 border border-plum-700 text-cream-300 hover:text-cream transition-colors"
              >
                {preset.title.split(':')[0]}
              </button>
            ))}
            {count > 0 && (
              <button
                onClick={handleClearAll}
                className="px-3 py-1.5 rounded-xl text-xs bg-red-950/60 hover:bg-red-900/60 border border-red-800/60 text-red-300 transition-colors flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" /> Clear
              </button>
            )}
          </div>
        </div>

        {/* Grid: Checklist Items & Dynamic Evaluation Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive 6 Warning Signs Checklist */}
          <div className="lg:col-span-7 space-y-3">
            {SAFETY_WARNING_SIGNS.map((sign) => {
              const isChecked = selectedSigns.includes(sign.id);

              return (
                <div
                  key={sign.id}
                  onClick={() => handleToggleSign(sign.id)}
                  className={`p-4 sm:p-4.5 rounded-2xl border transition-all cursor-pointer select-none flex items-start gap-3.5 group ${
                    isChecked
                      ? 'bg-plum-900/90 border-lavender/60 shadow-lg ring-1 ring-lavender/30'
                      : 'bg-plum-950/60 border-plum-800 hover:border-plum-700 hover:bg-plum-900/40'
                  }`}
                >
                  {/* Custom Checkbox */}
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                      isChecked
                        ? 'bg-lime text-plum-950'
                        : 'border-2 border-plum-600 bg-plum-900 group-hover:border-lavender'
                    }`}
                  >
                    {isChecked && <CheckCircle className="w-4 h-4 fill-plum-950 stroke-white" />}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                      <h4 className="text-sm sm:text-base font-semibold text-cream group-hover:text-white transition-colors">
                        {sign.title}
                      </h4>
                      {sign.highlightTag && (
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-plum-800 text-lavender border border-plum-700">
                          {sign.highlightTag}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-cream-300 leading-relaxed">{sign.description}</p>

                    {isChecked && (
                      <div className="mt-2.5 pt-2 border-t border-plum-800/80 text-[11px] text-lime flex items-start gap-1.5">
                        <span className="font-bold">Advice:</span>
                        <span>{sign.advice}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Threat Assessment Dashboard */}
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
            
            <div className="p-6 rounded-3xl bg-plum-950 border border-plum-700/80 shadow-2xl space-y-5">
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-cream-400 tracking-wider">
                  Live Evaluation
                </span>
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wide uppercase border ${badgeClasses}`}>
                  {resultBadge}
                </span>
              </div>

              {/* Dynamic Result Headline */}
              <div>
                <h3 className="text-2xl font-black text-cream tracking-tight">
                  “{resultHeadline}”
                </h3>
                <p className="text-xs sm:text-sm text-cream-300 mt-2 leading-relaxed">
                  {resultDescription}
                </p>
              </div>

              {/* Score / Danger Meter */}
              <div className="p-4 rounded-2xl bg-plum-900/60 border border-plum-800 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-cream-400">Warning Signs Triggered</span>
                  <span className="text-lime font-bold">{count} of {SAFETY_WARNING_SIGNS.length}</span>
                </div>
                <div className="w-full h-3 rounded-full bg-plum-950 overflow-hidden flex p-0.5 border border-plum-700/60">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      hasOTP
                        ? 'bg-red-500 shadow-[0_0_12px_rgba(255,107,107,0.8)]'
                        : count >= 3
                        ? 'bg-red-500'
                        : count >= 1
                        ? 'bg-amber-400'
                        : 'bg-emerald-500'
                    }`}
                    style={{ width: `${Math.max(5, (count / SAFETY_WARNING_SIGNS.length) * 100)}%` }}
                  />
                </div>
              </div>

              {/* Action recommendations based on state */}
              <div className="space-y-2 text-xs">
                <span className="font-mono text-lavender uppercase tracking-wider block">Recommended Protocol:</span>
                <div className="p-3 rounded-xl bg-plum-900/80 border border-plum-800 text-cream-200 space-y-1.5">
                  <div className="flex items-start gap-2">
                    <span className="text-lime font-bold">1.</span>
                    <span><strong>Disconnect the call:</strong> Do not worry about being polite to high-pressure callers.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-lime font-bold">2.</span>
                    <span><strong>Never read OTPs:</strong> No organization will ask for OTPs or PINs to cancel an alert.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-lime font-bold">3.</span>
                    <span><strong>Outbound verification:</strong> Call your friend, family, or bank's official number directly.</span>
                  </div>
                </div>
              </div>

              {/* MANDATORY EDUCATIONAL DISCLAIMER */}
              <div className="p-3.5 rounded-xl bg-plum-900/40 border border-plum-800/80 text-[11px] text-cream-400 leading-normal flex items-start gap-2.5">
                <Info className="w-4 h-4 text-lavender flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-cream-300 block mb-0.5">Strict Educational Disclaimer:</strong>
                  This checklist is an educational awareness tool, not a fraud-detection system. A legitimate caller can also sound urgent, and the absence of warning signs does not prove a call is genuine. Always verify independently.
                </div>
              </div>

              {/* Privacy Guarantee Note */}
              <div className="text-[10px] text-center text-cream-400/80 font-mono">
                🔒 Zero Personal Data Collected • No phone numbers or OTPs required
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

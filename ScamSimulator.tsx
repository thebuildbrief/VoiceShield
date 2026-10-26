import React, { useState } from 'react';
import {
  Shield,
  Volume2,
  Play,
  Pause,
  RotateCcw,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  Sparkles,
  Info,
  PhoneCall,
  Lock,
  Award,
  ChevronRight,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SIMULATOR_SCENARIOS } from '../data/simulatorScenarios';
import { WaveformVisualizer } from './WaveformVisualizer';
import { audioFx } from '../utils/audioEffects';
import { ScenarioChoice } from '../types';

export const ScamSimulator: React.FC = () => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedChoices, setSelectedChoices] = useState<Record<number, 'A' | 'B' | 'C'>>({});
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [completed, setCompleted] = useState(false);

  const scenario = SIMULATOR_SCENARIOS[currentScenarioIndex];
  const userChoiceId = selectedChoices[currentScenarioIndex];
  const selectedChoice: ScenarioChoice | undefined = scenario?.choices.find((c) => c.id === userChoiceId);

  const handlePlayVoice = () => {
    audioFx.playTap(600);
    if (isPlayingAudio) {
      audioFx.stopSpeech();
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      // Adjust pitch/rate based on scenario
      const pitch = scenario.number === 2 ? 1.2 : scenario.number === 3 ? 0.95 : 1.05;
      const rate = scenario.number === 2 ? 1.15 : 1.05;
      audioFx.speakScenarioAudio(scenario.audioSnippetText, {
        pitch,
        rate,
        onEnd: () => setIsPlayingAudio(false),
      });
    }
  };

  const handleSelectOption = (choiceId: 'A' | 'B' | 'C') => {
    if (selectedChoices[currentScenarioIndex]) return; // locked once chosen

    const choice = scenario.choices.find((c) => c.id === choiceId);
    if (choice?.isSafe) {
      audioFx.playSuccess();
    } else {
      audioFx.playAlert();
    }

    const updated = { ...selectedChoices, [currentScenarioIndex]: choiceId };
    setSelectedChoices(updated);
  };

  const handleNext = () => {
    audioFx.playTap(520);
    audioFx.stopSpeech();
    setIsPlayingAudio(false);

    if (currentScenarioIndex < SIMULATOR_SCENARIOS.length - 1) {
      setCurrentScenarioIndex((prev) => prev + 1);
    } else {
      setCompleted(true);
      // Trigger confetti if high score
      const totalScore = Object.entries(selectedChoices).reduce((acc, [idx, cId]) => {
        const sc = SIMULATOR_SCENARIOS[Number(idx)];
        const ch = sc?.choices.find((c) => c.id === cId);
        return acc + (ch?.scoreAwarded || 0);
      }, 0);

      if (totalScore >= 50) {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#DFFF75', '#BFA2FF', '#FFFFFF'],
        });
      }
    }
  };

  const handleRestartScenario = () => {
    audioFx.playTap(440);
    audioFx.stopSpeech();
    setIsPlayingAudio(false);
    const updated = { ...selectedChoices };
    delete updated[currentScenarioIndex];
    setSelectedChoices(updated);
  };

  const handleResetEntireSimulator = () => {
    audioFx.playTap(400);
    audioFx.stopSpeech();
    setIsPlayingAudio(false);
    setSelectedChoices({});
    setCurrentScenarioIndex(0);
    setCompleted(false);
  };

  // Calculate final score
  const totalScore = Object.entries(selectedChoices).reduce((acc, [idx, cId]) => {
    const sc = SIMULATOR_SCENARIOS[Number(idx)];
    const ch = sc?.choices.find((c) => c.id === cId);
    return acc + (ch?.scoreAwarded || 0);
  }, 0);
  const maxPossibleScore = SIMULATOR_SCENARIOS.length * 25;
  const scorePercentage = Math.round((totalScore / maxPossibleScore) * 100);

  return (
    <section id="simulator" className="py-16 md:py-24 relative bg-plum-900/50 border-t border-b border-plum-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-plum-800 border border-lavender/30 text-xs font-mono text-lavender mb-3">
            <Sparkles className="w-3.5 h-3.5 text-lime" />
            <span>INTERACTIVE VERIFICATION DRILL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-cream tracking-tight">
            The Voice Scam Simulator
          </h2>
          <p className="mt-3 text-base sm:text-lg text-cream-300">
            Step into three realistic high-pressure scenarios. Test your instinct, learn the safe verification protocol, and master out-of-band verification.
          </p>
        </div>

        {!completed ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Fictional Call / Audio Interface */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Progress Indicator */}
              <div className="p-4 rounded-2xl bg-plum-950/80 border border-plum-700/60 shadow-lg">
                <div className="flex items-center justify-between text-xs text-cream-400 font-mono mb-2">
                  <span>PROGRESS</span>
                  <span className="text-lime font-bold">
                    Scenario {currentScenarioIndex + 1} of {SIMULATOR_SCENARIOS.length}
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-plum-800 overflow-hidden flex gap-1 p-0.5">
                  {SIMULATOR_SCENARIOS.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-full flex-1 rounded-full transition-all duration-300 ${
                        idx < currentScenarioIndex
                          ? 'bg-lime'
                          : idx === currentScenarioIndex
                          ? 'bg-lavender animate-pulse'
                          : 'bg-plum-700/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Fictional Caller Profile Card */}
              <div className="rounded-2xl bg-plum-950/90 border border-plum-700/70 p-5 shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase bg-red-950/80 text-red-300 border border-red-700/50 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
                    {scenario.urgencyLevel}
                  </span>
                  <span className="text-xs text-cream-400 font-mono">{scenario.channel}</span>
                </div>

                <div className="flex items-center gap-3.5 mb-4">
                  <div className="relative">
                    <img
                      src={scenario.callerAvatarUrl}
                      alt={scenario.callerName}
                      className="w-14 h-14 rounded-2xl object-cover border-2 border-lavender/30"
                    />
                    <div className="absolute -bottom-1 -right-1 p-1 rounded-full bg-plum-950 border border-plum-700 text-lime">
                      <Volume2 className="w-3 h-3" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-cream">{scenario.callerName}</h3>
                    <p className="text-xs text-lavender-300">{scenario.callerSubtitle}</p>
                    <p className="text-[11px] text-cream-400 mt-0.5">Caller ID Display: Verified Name</p>
                  </div>
                </div>

                {/* Situation Context */}
                <div className="p-3 rounded-xl bg-plum-900/60 border border-plum-800 text-xs text-cream-300 leading-relaxed mb-4">
                  <strong className="text-cream block mb-1">Situation:</strong>
                  {scenario.situationContext}
                </div>

                {/* Voice Message Box & Waveform */}
                <div className="p-4 rounded-xl bg-plum-900 border border-plum-700 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-cream-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-lime" />
                      SIMULATED AUDIO NOTE
                    </span>
                    <span className="text-cream-400 font-mono">~{scenario.audioDurationSec}s</span>
                  </div>

                  <p className="text-xs sm:text-sm text-cream italic bg-plum-950/80 p-3 rounded-lg border border-plum-800/80">
                    {scenario.audioSnippetText}
                  </p>

                  {/* Waveform visualizer */}
                  <WaveformVisualizer isPlaying={isPlayingAudio} color="lime" height={44} barCount={30} />

                  {/* Play Audio Button */}
                  <button
                    onClick={handlePlayVoice}
                    className="w-full py-2.5 rounded-xl bg-plum-800 hover:bg-plum-700 border border-lavender/30 text-cream text-xs font-semibold flex items-center justify-center gap-2 transition-all active:scale-95"
                  >
                    {isPlayingAudio ? (
                      <>
                        <Pause className="w-4 h-4 text-lime" />
                        <span>Pause Voice Simulation</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 text-lime fill-lime" />
                        <span>Listen to Voice Simulation</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Cloning Clues breakdown */}
                <div className="mt-4 pt-3 border-t border-plum-800/70">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cream-400 block mb-1.5">
                    Anatomy of this attack:
                  </span>
                  <ul className="space-y-1">
                    {scenario.voiceCharacteristics.map((clue, idx) => (
                      <li key={idx} className="text-[11px] text-cream-300 flex items-start gap-1.5">
                        <span className="text-lavender font-bold">•</span>
                        <span>{clue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Choices & In-Depth Feedback */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="p-6 rounded-3xl bg-plum-950/90 border border-plum-700/80 shadow-2xl">
                <div className="mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-lavender font-semibold">
                    Decision Required
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-cream mt-0.5">
                    What is your immediate response?
                  </h3>
                  <p className="text-xs sm:text-sm text-cream-300 mt-1">
                    Select the safest protocol before taking action with funds or sensitive codes.
                  </p>
                </div>

                {/* The 3 Choice Buttons */}
                <div className="space-y-3.5">
                  {scenario.choices.map((choice) => {
                    const isSelected = userChoiceId === choice.id;
                    const hasAnswered = !!userChoiceId;

                    let cardClasses = 'border-plum-700/80 hover:border-lavender/50 hover:bg-plum-900/60';
                    if (isSelected) {
                      if (choice.isSafe) {
                        cardClasses = 'border-emerald-500 bg-emerald-950/40 ring-1 ring-emerald-400/30';
                      } else {
                        cardClasses = 'border-red-500 bg-red-950/40 ring-1 ring-red-400/30';
                      }
                    } else if (hasAnswered && choice.isSafe) {
                      cardClasses = 'border-emerald-500/50 bg-emerald-950/20 opacity-80';
                    }

                    return (
                      <button
                        key={choice.id}
                        disabled={hasAnswered}
                        onClick={() => handleSelectOption(choice.id)}
                        className={`w-full text-left p-4 rounded-2xl border transition-all text-sm relative group flex items-start gap-3.5 ${cardClasses} ${
                          hasAnswered ? 'cursor-default' : 'cursor-pointer active:scale-[0.99]'
                        }`}
                      >
                        <div
                          className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 transition-colors ${
                            isSelected
                              ? choice.isSafe
                                ? 'bg-emerald-500 text-plum-950'
                                : 'bg-red-500 text-white'
                              : 'bg-plum-800 text-cream group-hover:bg-lavender group-hover:text-plum-950'
                          }`}
                        >
                          {choice.id}
                        </div>

                        <div className="flex-1">
                          <p className="font-medium text-cream text-sm leading-snug">{choice.actionText}</p>
                          {isSelected && (
                            <span
                              className={`inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wide uppercase ${
                                choice.isSafe
                                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                                  : 'bg-red-500/20 text-red-300 border border-red-500/40'
                              }`}
                            >
                              {choice.badge}
                            </span>
                          )}
                        </div>

                        {isSelected && (
                          <div className="flex-shrink-0 mt-1">
                            {choice.isSafe ? (
                              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                            ) : (
                              <XCircle className="w-5 h-5 text-red-400" />
                            )}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Feedback Panel (Appears immediately on choice) */}
                {selectedChoice && (
                  <div
                    className={`mt-6 p-5 rounded-2xl border transition-all ${
                      selectedChoice.isSafe
                        ? 'bg-emerald-950/30 border-emerald-500/40'
                        : 'bg-red-950/30 border-red-500/40'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {selectedChoice.isSafe ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-red-400" />
                      )}
                      <h4
                        className={`text-base font-bold ${
                          selectedChoice.isSafe ? 'text-emerald-300' : 'text-red-300'
                        }`}
                      >
                        {selectedChoice.feedbackTitle}
                      </h4>
                    </div>

                    <p className="text-xs sm:text-sm text-cream-200 leading-relaxed">
                      {selectedChoice.feedbackExplanation}
                    </p>

                    <div className="mt-3 p-3 rounded-xl bg-plum-950/60 border border-plum-800 text-xs">
                      <strong className="text-cream-100 block mb-1">Why this choice matters:</strong>
                      <p className="text-cream-300">{selectedChoice.whyUnsafeOrSafe}</p>
                    </div>

                    {/* Practical Next Steps */}
                    <div className="mt-4">
                      <span className="text-[11px] font-mono uppercase text-lavender font-semibold block mb-1.5">
                        Practical Next Steps:
                      </span>
                      <ul className="space-y-1.5">
                        {selectedChoice.practicalNextSteps.map((step, idx) => (
                          <li key={idx} className="text-xs text-cream-200 flex items-start gap-2">
                            <span className="text-lime font-bold">✓</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action footer: Restart scenario or Next scenario */}
                    <div className="mt-5 pt-4 border-t border-plum-800/80 flex flex-wrap items-center justify-between gap-3">
                      <button
                        onClick={handleRestartScenario}
                        className="px-3.5 py-1.5 rounded-xl bg-plum-800 hover:bg-plum-700 text-cream-300 text-xs font-medium flex items-center gap-1.5 transition-colors"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Try Another Option</span>
                      </button>

                      <button
                        onClick={handleNext}
                        className="px-5 py-2 rounded-xl bg-lime hover:bg-lime-400 text-plum-950 font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-[0_0_15px_rgba(223,255,117,0.3)] transition-all active:scale-95"
                      >
                        <span>
                          {currentScenarioIndex < SIMULATOR_SCENARIOS.length - 1
                            ? 'Continue to Next Scenario'
                            : 'View Final Safety Score'}
                        </span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

              </div>

              {/* Bank Scenario Specific Safety Axiom Banner */}
              {scenario.number === 3 && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-red-950/50 via-plum-950 to-red-950/50 border border-red-700/60 flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-red-500/20 text-red-400 flex-shrink-0">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-mono uppercase font-bold text-red-300">
                      Fundamental Financial Protection Rule
                    </h5>
                    <p className="text-xs sm:text-sm text-cream-200 mt-1">
                      <strong>Banks NEVER call you to request an OTP, PIN, password, or CVV.</strong> No matter how convincing, polite, or panicky the bank representative sounds, disclosing an OTP authorizes the fraud directly.
                    </p>
                  </div>
                </div>
              )}

            </div>

          </div>
        ) : (
          /* Final Results and Safety Score Screen */
          <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl bg-plum-950 border border-lavender/30 shadow-2xl text-center relative overflow-hidden">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-lime/20 via-plum-800 to-lavender/30 border-2 border-lime/50 mx-auto flex items-center justify-center mb-4">
              <Award className="w-10 h-10 text-lime" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-cream">
              Simulator Drill Complete!
            </h3>
            <p className="text-xs sm:text-sm text-cream-400 mt-1">
              You evaluated all 3 high-stakes voice cloning scenarios.
            </p>

            {/* Score Display */}
            <div className="my-6 p-6 rounded-2xl bg-plum-900/70 border border-plum-700/80">
              <div className="text-xs font-mono uppercase text-lavender tracking-wider">
                Quiz Performance Score
              </div>
              <div className="text-5xl sm:text-6xl font-black text-lime mt-2 font-mono">
                {scorePercentage}%
              </div>
              <p className="text-xs text-cream-300 mt-2">
                {scorePercentage === 100
                  ? '🎯 Master Verifier: You demonstrated ideal out-of-band verification instincts!'
                  : scorePercentage >= 60
                  ? '👍 Good Vigilance: You spotted key dangers, but remember to never verify within the same channel.'
                  : '⚠️ High Vulnerability: Scammers could exploit emotional pressure. Review the checklist below!'}
              </p>
            </div>

            {/* IMPORTANT DISCLAIMER MANDATED BY REQUIREMENTS */}
            <div className="p-3.5 rounded-xl bg-plum-900/40 border border-plum-800 text-left text-xs text-cream-400 mb-6 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-lavender flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-cream-300 block mb-0.5">Quiz Metric Disclaimer:</strong>
                This score measures educational quiz performance only, <em>NOT</em> the likelihood that any real call you receive is fraudulent. Real-world calls must always be verified through independent known channels.
              </div>
            </div>

            {/* Scenario Breakdown */}
            <div className="space-y-2 text-left mb-6">
              {SIMULATOR_SCENARIOS.map((sc, idx) => {
                const choiceId = selectedChoices[idx];
                const choice = sc.choices.find((c) => c.id === choiceId);
                return (
                  <div
                    key={sc.id}
                    className="p-3 rounded-xl bg-plum-900/60 border border-plum-800 flex items-center justify-between text-xs"
                  >
                    <div>
                      <span className="font-semibold text-cream block">{sc.title}</span>
                      <span className="text-cream-400">Your choice: Option {choiceId}</span>
                    </div>
                    <div>
                      {choice?.isSafe ? (
                        <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 font-mono font-bold text-[10px]">
                          VERIFIED SAFE (+25)
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 rounded-md bg-red-500/20 text-red-300 font-mono font-bold text-[10px]">
                          UNSAFE / RISKY (+{choice?.scoreAwarded || 0})
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleResetEntireSimulator}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-lime hover:bg-lime-400 text-plum-950 font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Restart Simulator Drill</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

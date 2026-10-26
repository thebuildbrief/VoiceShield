import React, { useState, useEffect } from 'react';
import { Phone, PhoneOff, Play, Pause, AlertTriangle, ShieldCheck, Volume2, Sparkles, UserCheck } from 'lucide-react';
import { WaveformVisualizer } from './WaveformVisualizer';
import { audioFx } from '../utils/audioEffects';

export const PhoneMockup: React.FC = () => {
  const [callState, setCallState] = useState<'incoming' | 'active' | 'verified'>('incoming');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [duration, setDuration] = useState(0);

  const demoVoiceText =
    "Hey! It's me, please don't hang up! I was in a terrible car accident and need you to send money immediately before the police impound the vehicle. Don't call me back, just wire it right now!";

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (callState === 'active') {
      interval = setInterval(() => {
        setDuration((prev) => prev + 1);
      }, 1000);
    } else {
      setDuration(0);
    }
    return () => clearInterval(interval);
  }, [callState]);

  const handleAcceptCall = () => {
    audioFx.playTap(640);
    setCallState('active');
    setIsPlayingAudio(true);
    audioFx.speakScenarioAudio(demoVoiceText, {
      pitch: 1.1,
      rate: 1.08,
      onEnd: () => setIsPlayingAudio(false),
    });
  };

  const handleDeclineOrHangUp = () => {
    audioFx.playAlert();
    audioFx.stopSpeech();
    setIsPlayingAudio(false);
    setCallState('incoming');
  };

  const handleToggleAudio = () => {
    audioFx.playTap();
    if (isPlayingAudio) {
      audioFx.stopSpeech();
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      audioFx.speakScenarioAudio(demoVoiceText, {
        pitch: 1.1,
        rate: 1.08,
        onEnd: () => setIsPlayingAudio(false),
      });
    }
  };

  const handleSimulateOutboundVerify = () => {
    audioFx.playSuccess();
    audioFx.stopSpeech();
    setIsPlayingAudio(false);
    setCallState('verified');
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] select-none">
      {/* Ambient background glow behind phone */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-lavender/20 via-plum-700/30 to-lime/20 rounded-[44px] blur-2xl -z-10 opacity-70 animate-glow-pulse" />

      {/* Smartphone frame */}
      <div className="relative rounded-[36px] bg-plum-950 p-3 sm:p-4 border-2 border-plum-600/60 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl">
        {/* Notch / Speaker bar */}
        <div className="relative flex items-center justify-between px-4 pt-1 pb-3 text-[11px] text-cream-400 font-mono">
          <span>09:41</span>
          <div className="w-20 h-4 bg-plum-900 rounded-full border border-plum-700/50 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-plum-950 border border-plum-600/60 mr-1.5" />
            <div className="w-1.5 h-1.5 rounded-full bg-lavender/40" />
          </div>
          <div className="flex items-center gap-1">
            <span>5G</span>
            <div className="w-4 h-2 border border-cream-400 rounded-sm p-[1px]">
              <div className="h-full w-2.5 bg-lime" />
            </div>
          </div>
        </div>

        {/* DEMONSTRATION WATERMARK BADGE */}
        <div className="mb-3 px-3 py-1 rounded-full bg-plum-900/90 border border-lavender/30 flex items-center justify-between text-[11px]">
          <span className="flex items-center gap-1.5 text-lavender font-medium">
            <span className="w-2 h-2 rounded-full bg-lime animate-ping" />
            SIMULATED DEMO
          </span>
          <span className="text-cream-400 text-[10px]">No real audio parsed</span>
        </div>

        {/* Inner Phone Screen */}
        <div className="rounded-[26px] bg-gradient-to-b from-plum-900/90 via-plum-950 to-plum-900/95 border border-plum-700/50 p-4 sm:p-5 min-h-[460px] flex flex-col justify-between relative overflow-hidden">
          
          {/* Subtle grid texture inside phone */}
          <div className="absolute inset-0 bg-grid-cyber opacity-30 pointer-events-none" />

          {callState === 'incoming' && (
            <div className="relative z-10 flex flex-col items-center text-center my-auto">
              <div className="relative mb-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-lavender/30 to-plum-700 border-2 border-lavender/40 flex items-center justify-center shadow-lg">
                  <span className="text-3xl">👤</span>
                </div>
                <div className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full bg-red-500/90 text-[10px] font-bold text-white border border-red-300">
                  UNVERIFIED
                </div>
              </div>

              <h4 className="text-lg font-bold text-cream">"Alex Rivera"</h4>
              <p className="text-xs text-lavender-300 font-medium mt-0.5">Matched Contact Name</p>
              <div className="mt-2 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-plum-800/80 border border-plum-600/50 text-[11px] text-cream-400">
                <AlertTriangle className="w-3 h-3 text-warning-amber" />
                <span>Voice Clone Risk High</span>
              </div>

              <div className="w-full my-6 p-3 rounded-xl bg-plum-950/70 border border-plum-700/40 text-left">
                <p className="text-[11px] text-cream-400 font-mono uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-lime" /> Synthetic Voice Sample:
                </p>
                <p className="text-xs text-cream-200 italic line-clamp-2">
                  "{demoVoiceText}"
                </p>
              </div>

              {/* Incoming call buttons */}
              <div className="flex items-center justify-around w-full mt-4">
                <button
                  onClick={handleDeclineOrHangUp}
                  className="flex flex-col items-center gap-1 group"
                >
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-red-600/90 hover:bg-red-500 flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-105 active:scale-95">
                    <PhoneOff className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] text-cream-400">Decline</span>
                </button>

                <button
                  onClick={handleAcceptCall}
                  className="flex flex-col items-center gap-1 group"
                >
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-lime-500 hover:bg-lime-400 text-plum-950 flex items-center justify-center shadow-[0_0_20px_rgba(223,255,117,0.4)] transition-transform group-hover:scale-105 active:scale-95 animate-pulse">
                    <Phone className="w-6 h-6 fill-plum-950" />
                  </div>
                  <span className="text-[11px] text-lime-400 font-medium">Answer Demo</span>
                </button>
              </div>
            </div>
          )}

          {callState === 'active' && (
            <div className="relative z-10 flex flex-col items-center text-center my-auto">
              <div className="w-16 h-16 rounded-full bg-plum-800 border border-lavender/40 flex items-center justify-center mb-2">
                <Volume2 className="w-8 h-8 text-lime animate-bounce" />
              </div>

              <h4 className="text-base font-bold text-cream">"Alex Rivera" (Clone Test)</h4>
              <p className="text-xs text-lime font-mono mt-0.5">{formatTime(duration)} • Playing Audio</p>

              {/* Dynamic waveform visualizer */}
              <div className="w-full my-4">
                <div className="flex items-center justify-between text-[11px] text-cream-400 mb-1 px-1">
                  <span>Synthesized Waveform</span>
                  <span className="text-lavender font-mono">Neural 24kHz</span>
                </div>
                <WaveformVisualizer isPlaying={isPlayingAudio} color="lime" height={52} barCount={26} />
              </div>

              {/* Red flag indicators */}
              <div className="w-full space-y-1.5 text-left mb-4">
                <div className="text-[10px] uppercase font-mono text-cream-400 px-1">Detected Scam Patterns:</div>
                <div className="text-xs bg-red-950/60 border border-red-700/50 text-red-200 px-2.5 py-1.5 rounded-lg flex items-center gap-2">
                  <AlertTriangle className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                  <span>"Don't call me back" (Blocks verification)</span>
                </div>
                <div className="text-xs bg-red-950/60 border border-red-700/50 text-red-200 px-2.5 py-1.5 rounded-lg flex items-center gap-2">
                  <AlertTriangle className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                  <span>Demands immediate emergency cash</span>
                </div>
              </div>

              {/* Audio Controls */}
              <div className="flex items-center justify-center gap-3 w-full mb-3">
                <button
                  onClick={handleToggleAudio}
                  className="px-3 py-1.5 rounded-xl bg-plum-800 hover:bg-plum-700 border border-plum-600 text-xs text-cream flex items-center gap-1.5 transition-colors"
                >
                  {isPlayingAudio ? (
                    <>
                      <Pause className="w-3.5 h-3.5 text-lime" /> Pause Audio
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-lime" /> Replay Audio
                    </>
                  )}
                </button>

                <button
                  onClick={handleSimulateOutboundVerify}
                  className="px-3 py-1.5 rounded-xl bg-lavender/20 hover:bg-lavender/30 border border-lavender/40 text-xs text-lavender-300 font-medium flex items-center gap-1.5 transition-colors"
                >
                  <UserCheck className="w-3.5 h-3.5 text-lime" /> Verify Outbound
                </button>
              </div>

              {/* End call */}
              <button
                onClick={handleDeclineOrHangUp}
                className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 mx-auto"
                title="Disconnect call"
              >
                <PhoneOff className="w-5 h-5" />
              </button>
            </div>
          )}

          {callState === 'verified' && (
            <div className="relative z-10 flex flex-col items-center text-center my-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mb-3">
                <ShieldCheck className="w-9 h-9 text-emerald-400" />
              </div>

              <h4 className="text-base font-bold text-cream">Out-Of-Band Call Verified!</h4>
              <p className="text-xs text-cream-300 mt-1 px-2">
                You hung up and dialed Alex's real number directly. Alex answered: <strong className="text-lime">"I'm at home having coffee, I never sent that!"</strong>
              </p>

              <div className="my-4 p-3 rounded-xl bg-emerald-950/40 border border-emerald-600/40 text-left text-xs text-emerald-200">
                <div className="font-semibold text-emerald-300 mb-1">Scam Successfully Thwarted</div>
                Independent outbound calling neutralizes 99% of synthetic voice scams.
              </div>

              <button
                onClick={() => setCallState('incoming')}
                className="px-4 py-2 rounded-xl bg-plum-800 hover:bg-plum-700 border border-lavender/30 text-xs text-lavender-300 font-medium transition-all"
              >
                Reset Demo Mockup
              </button>
            </div>
          )}

          {/* Bottom home bar indicator */}
          <div className="w-28 h-1 bg-cream-500/40 rounded-full mx-auto mt-2" />
        </div>
      </div>
    </div>
  );
};

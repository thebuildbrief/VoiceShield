import React, { useState } from 'react';
import { KeyRound, Sparkles, Copy, Check, RefreshCw, ShieldCheck, ShieldAlert, PhoneCall } from 'lucide-react';
import { audioFx } from '../utils/audioEffects';

const WORD_LIST_A = ['Bicycle', 'Lantern', 'Compass', 'Whistle', 'Sparrow', 'Telescope', 'Cactus', 'Anchor'];
const WORD_LIST_B = ['Cobalt', 'Amber', 'Silver', 'Copper', 'Indigo', 'Emerald', 'Granite', 'Velvet'];

export const SafeWordTool: React.FC = () => {
  const [safeWord, setSafeWord] = useState('Cobalt Bicycle');
  const [copied, setCopied] = useState(false);
  const [drillState, setDrillState] = useState<'idle' | 'testing' | 'passed' | 'failed'>('idle');
  const [inputWord, setInputWord] = useState('');

  const generateNewWord = () => {
    audioFx.playTap(600);
    const w1 = WORD_LIST_B[Math.floor(Math.random() * WORD_LIST_B.length)];
    const w2 = WORD_LIST_A[Math.floor(Math.random() * WORD_LIST_A.length)];
    setSafeWord(`${w1} ${w2}`);
    setCopied(false);
    setDrillState('idle');
    setInputWord('');
  };

  const copyWord = () => {
    audioFx.playSuccess();
    navigator.clipboard.writeText(safeWord);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTestChallenge = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputWord.trim().toLowerCase() === safeWord.toLowerCase()) {
      audioFx.playSuccess();
      setDrillState('passed');
    } else {
      audioFx.playAlert();
      setDrillState('failed');
    }
  };

  return (
    <div className="p-6 rounded-3xl bg-plum-950 border border-lavender/30 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-lime/10 border border-lime/30 text-lime">
            <KeyRound className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-base font-bold text-cream">Family Safe Word Generator</h4>
            <p className="text-xs text-cream-400">Offline Challenge-Response Drill</p>
          </div>
        </div>
        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-plum-800 text-lime border border-plum-700">
          Zero Cloud Storage
        </span>
      </div>

      <p className="text-xs sm:text-sm text-cream-300 mb-4 leading-relaxed">
        Establish a secret code phrase with family members. If you receive an urgent call asking for money, demand the safe word. An AI voice model will have no access to an offline secret.
      </p>

      {/* Generated Safe Word Card */}
      <div className="p-4 rounded-2xl bg-plum-900 border border-plum-700/80 flex items-center justify-between gap-3 mb-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-cream-400 block mb-0.5">
            Recommended Secret Phrase:
          </span>
          <span className="text-xl sm:text-2xl font-black text-lime tracking-wide font-mono">
            {safeWord}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={generateNewWord}
            className="p-2 rounded-xl bg-plum-800 hover:bg-plum-700 text-cream-300 hover:text-cream border border-plum-600 transition-colors"
            title="Generate another combination"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            onClick={copyWord}
            className="px-3 py-2 rounded-xl bg-lavender/20 hover:bg-lavender/30 text-lavender border border-lavender/40 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-lime" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Interactive Simulation Drill */}
      <div className="p-4 rounded-2xl bg-plum-900/50 border border-plum-800">
        <span className="text-xs font-bold text-cream block mb-1">
          Simulate a Verification Drill:
        </span>
        <p className="text-xs text-cream-400 mb-3">
          Imagine an inbound caller is sobbing and demanding $1,000. You ask: <em className="text-lavender">"What is our safe word?"</em>
        </p>

        <form onSubmit={handleTestChallenge} className="flex gap-2">
          <input
            type="text"
            value={inputWord}
            onChange={(e) => setInputWord(e.target.value)}
            placeholder={`Type "${safeWord}" or a wrong word...`}
            className="flex-1 bg-plum-950 border border-plum-700 rounded-xl px-3 py-2 text-xs text-cream focus:outline-none focus:border-lime"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-xl bg-lime hover:bg-lime-400 text-plum-950 text-xs font-bold transition-all active:scale-95"
          >
            Verify
          </button>
        </form>

        {drillState === 'passed' && (
          <div className="mt-3 p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-600/50 text-emerald-200 text-xs flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span><strong>Identity Authenticated!</strong> The caller provided the correct offline secret.</span>
          </div>
        )}

        {drillState === 'failed' && (
          <div className="mt-3 p-2.5 rounded-xl bg-red-950/60 border border-red-600/50 text-red-200 text-xs flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-red-400 flex-shrink-0" />
            <span><strong>Imposter Detected!</strong> Hang up immediately and dial their known number directly.</span>
          </div>
        )}
      </div>

      {/* Rules */}
      <div className="mt-4 text-[11px] text-cream-400 space-y-1">
        <p>• <strong>Rule 1:</strong> Never send this word over WhatsApp, SMS, or email.</p>
        <p>• <strong>Rule 2:</strong> Change the word every 6 to 12 months with your household.</p>
      </div>
    </div>
  );
};

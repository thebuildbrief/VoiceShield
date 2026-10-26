// Audio synthesis utility using Web Audio API and SpeechSynthesis API
// Provides interactive audio feedback without external audio files

class AudioController {
  private ctx: AudioContext | null = null;
  private isSpeechActive: boolean = false;
  private currentUtterance: SpeechSynthesisUtterance | null = null;

  private getContext(): AudioContext {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  // Play realistic incoming phone ring chime
  playPhoneRing(): () => void {
    try {
      const ctx = this.getContext();
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gainNode = ctx.createGain();

      // Standard North American / International ring frequencies (440Hz + 480Hz)
      osc1.type = 'sine';
      osc2.type = 'sine';
      osc1.frequency.setValueAtTime(440, ctx.currentTime);
      osc2.frequency.setValueAtTime(480, ctx.currentTime);

      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      // Fade in
      gainNode.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 0.1);
      gainNode.gain.setValueAtTime(0.12, ctx.currentTime + 1.2);
      gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 1.4);

      osc1.connect(gainNode);
      osc2.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc1.start(ctx.currentTime);
      osc2.start(ctx.currentTime);
      osc1.stop(ctx.currentTime + 1.5);
      osc2.stop(ctx.currentTime + 1.5);

      return () => {
        try {
          osc1.stop();
          osc2.stop();
        } catch {
          // ignore
        }
      };
    } catch {
      return () => {};
    }
  }

  // Play button click / tap feedback
  playTap(frequency = 580): void {
    try {
      const ctx = this.getContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(frequency, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(240, ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch {
      // Audio might be blocked by autoplay policies
    }
  }

  // Play warning / danger alert sound
  playAlert(): void {
    try {
      const ctx = this.getContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      osc.frequency.setValueAtTime(220, ctx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    } catch {
      // ignore
    }
  }

  // Play success chime
  playSuccess(): void {
    try {
      const ctx = this.getContext();
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.09);

        gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.09);
        gain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + idx * 0.09 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.09 + 0.25);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.09);
        osc.stop(ctx.currentTime + idx * 0.09 + 0.25);
      });
    } catch {
      // ignore
    }
  }

  // Speak voice scenario text using Web Speech API with simulated voice tone
  speakScenarioAudio(
    text: string,
    options: {
      pitch?: number;
      rate?: number;
      onBoundary?: (charIndex: number) => void;
      onEnd?: () => void;
    } = {}
  ): void {
    if (!('speechSynthesis' in window)) {
      if (options.onEnd) options.onEnd();
      return;
    }

    this.stopSpeech();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = options.rate || 1.05;
    utterance.pitch = options.pitch || 1.0;
    utterance.lang = 'en-US';

    // Look for natural English voice
    const voices = window.speechSynthesis.getVoices();
    const naturalVoice = voices.find(
      (v) => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Alex'))
    ) || voices.find((v) => v.lang.startsWith('en'));

    if (naturalVoice) {
      utterance.voice = naturalVoice;
    }

    utterance.onend = () => {
      this.isSpeechActive = false;
      this.currentUtterance = null;
      if (options.onEnd) options.onEnd();
    };

    utterance.onerror = () => {
      this.isSpeechActive = false;
      this.currentUtterance = null;
      if (options.onEnd) options.onEnd();
    };

    this.currentUtterance = utterance;
    this.isSpeechActive = true;
    window.speechSynthesis.speak(utterance);
  }

  stopSpeech(): void {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    this.isSpeechActive = false;
    this.currentUtterance = null;
  }

  isPlaying(): boolean {
    return this.isSpeechActive;
  }
}

export const audioFx = new AudioController();

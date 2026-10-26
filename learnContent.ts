import { LearnTopic } from '../types';

export const LEARN_MODULES: LearnTopic[] = [
  {
    id: 'what-is-cloning',
    title: 'What is AI Voice Cloning?',
    subtitle: 'From minutes of training data to instant neural audio replicas',
    category: 'Technology Primer',
    icon: 'Cpu',
    summary:
      'AI voice cloning (neural speech synthesis) uses deep learning models to analyze the acoustic frequency, pitch, breathing patterns, accent, and inflection of a person\'s voice, generating new speech from typed text in real time.',
    takeaways: [
      'Just 3 to 10 seconds of clear audio from an Instagram Reel, YouTube video, or voicemail greeting is enough to train modern zero-shot voice cloning algorithms.',
      'Modern models replicate emotional inflections like laughter, hesitation, sobbing, and breath intake.',
      'Voice generation tools are now widely available as low-cost web apps and open-source models, lowering the technical barrier to entry for scammers worldwide.',
    ],
    realWorldContext:
      'In previous decades, impersonating someone required high acting talent or complex audio editing. Today, an attacker downloads a publicly posted social video, feeds it into an AI voice model, and types "Mom, please send money."',
    preventativeRule: 'Assume any recorded or inbound voice can be synthetic. Auditory familiarity is no longer cryptographic proof of identity.',
  },
  {
    id: 'how-scammers-misuse',
    title: 'How Scammers Misuse Cloned Voices',
    subtitle: 'High-pressure social engineering tactics weaponizing emotion',
    category: 'Attack Vectors',
    icon: 'Radio',
    summary:
      'Voice cloning is rarely used alone; it is almost always paired with extreme emotional pressure, artificial background noises (sirens, hospital beeps, transit sounds), and fabricated urgency.',
    takeaways: [
      'Emergency Bail & Hospital Scams: Claiming a child or grandchild was in a severe car crash or held in detention.',
      'Executive Impersonation (CEO Fraud): Cloned voice of a company CEO calling finance officers to authorize emergency supplier payments.',
      'Kidnapping & Extortion Hoaxes: Playing brief audio clips of a screaming loved one to force immediate ransom payments before victims can check reality.',
      'One-Way Voice Messages: Sending audio notes via WhatsApp or Signal with excuses like "my battery is dying" to avoid interactive questioning.',
    ],
    realWorldContext:
      'In 2024, corporate finance executives wired tens of millions after an entire video call was populated by AI-cloned executives and colleagues.',
    preventativeRule: 'The more urgent, secret, and emotional the voice call feels, the higher the mathematical probability it is an orchestrated scam.',
  },
  {
    id: 'why-voices-arent-proof',
    title: 'Why Familiar Voices Are Not Proof of Identity',
    subtitle: 'Overcoming the cognitive shortcut our brains naturally make',
    category: 'Cognitive Traps',
    icon: 'Ear',
    summary:
      'For thousands of years of human evolution, hearing someone\'s distinct voice was foolproof evidence of their physical presence or authentic participation. Generative AI has permanently broken that biological assumption.',
    takeaways: [
      'Voice is biometrics, not encryption. Your voice is publicly accessible whenever you speak in public, post videos, or leave voicemails.',
      'Audio quality over standard cellular lines or compressed VoIP apps is low (narrowband audio), masking slight synthetic acoustic artifacts.',
      'Background street noise or static is often deliberately added by scammers to conceal synthesizer glitches.',
    ],
    realWorldContext:
      'Our brains are hardwired to trust familiar acoustic patterns, especially from family. Cybercriminals exploit this exact evolutionary blind spot.',
    preventativeRule: 'Treat voice as a claim of identity, never as confirmation. Confirmation requires secondary authentication.',
  },
  {
    id: 'safe-word-protocol',
    title: 'How to Establish a Family Safe Word',
    subtitle: 'The ultimate zero-tech defense against AI voice impersonation',
    category: 'Practical Defense',
    icon: 'ShieldCheck',
    summary:
      'A Family Safe Word (or Duress Code) is a secret word or phrase shared strictly offline between family members or trusted friends, used to authenticate genuine emergencies.',
    takeaways: [
      'Choose an un-guessable word or phrase unrelated to pets, birthdays, street names, or social media posts (e.g. "Cobalt Bicycle" or "Pineapple Lantern").',
      'Never store this code in cloud notes, SMS threads, or WhatsApp groups where accounts could be hacked.',
      'Establish a strict protocol: If an emergency call demands money, the caller must supply the safe word. If they cannot or make excuses, immediately hang up.',
      'Teach older family members and children: "If anyone claims I am in trouble, ask for our safe word first."',
    ],
    realWorldContext:
      'Even if an AI perfectly simulates your voice, crying cadence, and cellular caller ID, the AI and the criminal operating it will not possess your private offline safe word.',
    preventativeRule: 'A 2-minute offline family conversation today neutralizes virtually all voice-cloning extortion attempts tomorrow.',
  },
  {
    id: 'caller-id-spoofing',
    title: 'Why Caller ID Alone Cannot Be Trusted',
    subtitle: 'The vulnerability of telecom routing and caller ID display',
    category: 'Telecom Security',
    icon: 'Smartphone',
    summary:
      'Caller ID spoofing allows callers to deliberately display a false number or institution name on your phone\'s caller ID display, easily mimicking your bank, police, or loved ones.',
    takeaways: [
      'VoIP services allow anyone to transmit custom caller ID headers, displaying "National Bank" or your spouse\'s exact phone number.',
      'When you answer an incoming call, you are not authenticated to the caller; they are in control of the circuit.',
      'The simple rule: Inbound calls cannot be trusted for verification. You must hang up and make an OUTBOUND call to a known number.',
    ],
    realWorldContext:
      'Scammers purchase numbers or use SIP trunks to spoof local police departments, hospital desks, and family cell numbers with zero technical obstacles.',
    preventativeRule: 'Hang up and dial outbound. Outbound cellular calls route through telecommunication switches to the authentic physical SIM card.',
  },
];

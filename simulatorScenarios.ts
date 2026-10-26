import { Scenario } from '../types';

export const SIMULATOR_SCENARIOS: Scenario[] = [
  {
    id: 'scenario-best-friend',
    number: 1,
    title: 'The "Don\'t Call Back" Urgent Voice Note',
    subtitle: 'Scenario 1: Fictional voice note from your best friend Alex',
    callerName: 'Alex Rivera',
    callerSubtitle: 'Best Friend (Simulated Voice Note)',
    callerAvatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    channel: 'Voice Note on Messaging App',
    urgencyLevel: 'Extreme Urgency',
    audioSnippetText:
      '"Hey, it\'s Alex! Listen, I\'m in a massive mess right now. My wallet got stolen at the transit station and my phone battery is literally at 1%. I need you to transfer $450 to this merchant ID right this second or I can\'t get home. Don\'t call me back, the phone is dying right now, just send it fast!"',
    audioDurationSec: 14,
    situationContext:
      'You receive an audio message on a messaging app from what sounds remarkably like your closest friend, Alex. The cadence, laugh, and tone match their voice, but they are asking for immediate funds and strictly advising against calling.',
    voiceCharacteristics: [
      'Authentic acoustic timber cloned from public social videos',
      'Artificial background noise layer added to mask speech synthesis artifacts',
      'Explicit barrier placed against two-way interactive phone verification',
    ],
    correctChoiceId: 'C',
    deepDiveEducationalNote:
      'Scammers intentionally claim "my battery is dead" or "I am in a meeting" so you do not attempt a real-time bilateral voice call. Always break the attacker\'s communication loop.',
    choices: [
      {
        id: 'A',
        label: 'Option A',
        actionText: 'Send the $450 immediately because they sound stressed and are your best friend.',
        isSafe: false,
        scoreAwarded: 0,
        badge: 'UNSAFE / HIGH RISK',
        feedbackTitle: 'Critical Risk: Financial Loss Likely',
        feedbackExplanation:
          'You just transferred unrecoverable money to an impersonator. Today\'s generative AI voice models require as little as 3 to 10 seconds of clear audio from Instagram reels or TikTok videos to mimic someone\'s vocal pitch, accent, and speech habits.',
        whyUnsafeOrSafe:
          'Scammers weaponize emotional urgency and panic to bypass your critical thinking. By obeying the instruction "don\'t call back", you prevented yourself from discovering your real friend was completely safe and never sent the message.',
        practicalNextSteps: [
          'Never transfer money based solely on an audio note or incoming voicemail.',
          'Immediately contact your bank or payment app to report unauthorized transaction fraud (though P2P transfers are rarely refundable).',
          'Warn your friend immediately that their voice or identity is being weaponized in targeted spear-phishing.',
        ],
      },
      {
        id: 'B',
        label: 'Option B',
        actionText: 'Ask them a personal question inside the same chat window to test if it is really them.',
        isSafe: false,
        scoreAwarded: 10,
        badge: 'INCOMPLETE VERIFICATION',
        feedbackTitle: 'Incomplete Protection: Channel Still Compromised',
        feedbackExplanation:
          'While asking personal questions is intuitive, doing it inside the same compromised channel is dangerous. If your friend\'s messaging account was hacked, the scammer can read past chat history to find personal answers.',
        whyUnsafeOrSafe:
          'Scammers frequently harvest personal tidbits (pet names, schools, vacations) from public social media profiles or compromised chat logs. Asking within the same channel leaves you vulnerable to confirmation bias or a calculated bluff.',
        practicalNextSteps: [
          'Never verify an identity within the identical message thread where the suspicious request originated.',
          'Switch to an out-of-band communication channel (regular cellular line, landline, or in-person).',
          'Use an agreed-upon offline "Family / Friend Safe Word" that is never stored in cloud chats.',
        ],
      },
      {
        id: 'C',
        label: 'Option C',
        actionText: 'Call them back using a phone number you already have saved, or reach out to a trusted mutual friend.',
        isSafe: true,
        scoreAwarded: 25,
        badge: 'SAFE & VERIFIED',
        feedbackTitle: 'Correct Safety Behavior: Out-Of-Band Verification',
        feedbackExplanation:
          'Outstanding safety protocol. By refusing to follow the attacker\'s constraints and initiating an out-of-band call to Alex\'s known phone number, you take control of the interaction.',
        whyUnsafeOrSafe:
          'Independent two-way verification destroys 99% of voice cloning scams. Voice clones can produce static audio notes or short scripted lines, but scammers cannot intercept a genuine cellular call to your friend\'s registered SIM card.',
        practicalNextSteps: [
          'Dial your friend directly on their known standard cellular number or home line.',
          'If they don\'t answer immediately, reach out to their roommate, partner, parent, or office colleague before sending a single cent.',
          'Remember: genuine emergencies can tolerate the 2 minutes it takes to verify through a secondary channel.',
        ],
      },
    ],
  },
  {
    id: 'scenario-family-emergency',
    number: 2,
    title: 'The Family Member Distress Call',
    subtitle: 'Scenario 2: A frantic phone call mimicking your younger sister or daughter',
    callerName: 'Sarah (Sister / Daughter)',
    callerSubtitle: 'Incoming Cellular Call from Unknown / Masked ID',
    callerAvatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    channel: 'Incoming Voice Call (Spoofed Caller ID)',
    urgencyLevel: 'Extreme Urgency',
    audioSnippetText:
      '"Mom... Dad... please help me! I was in a car crash near the highway and hit someone\'s luxury car! The police and the other driver are saying they\'re going to arrest me right now unless I settle damages with $1,800 wire transfer. Please don\'t tell anyone else, I\'m crying so hard, just wire the money to this lawyer\'s account!"',
    audioDurationSec: 16,
    situationContext:
      'A call comes in. The voice is sobbing, hyperventilating, and sounds identical to your daughter or younger sister. The background sounds like street sirens and tense argument. She insists you wire money immediately to prevent an arrest.',
    voiceCharacteristics: [
      'Emotional distress cues (crying, panting) simulated to suppress analytical judgment',
      'Artificial background siren sound effects playing in the call',
      'High-stakes legal threat ("arrest", "impound") designed to induce panic',
    ],
    correctChoiceId: 'B',
    deepDiveEducationalNote:
      'Imposters exploit love and primal fear. When people believe a loved one is in physical or legal peril, the amygdala hijacks logic. The rule is: breathe, pause, and verify.',
    choices: [
      {
        id: 'A',
        label: 'Option A',
        actionText: 'Wire the $1,800 immediately to the lawyer\'s account to protect them from arrest.',
        isSafe: false,
        scoreAwarded: 0,
        badge: 'UNSAFE / HIGH RISK',
        feedbackTitle: 'Critical Risk: The Classic "Virtual Kidnapping / Bail" Scam',
        feedbackExplanation:
          'This is the hallmark pattern of high-yield AI voice extortion. Scammers feed 15 seconds of your relative\'s voice into an emotion-enabled speech generator and synthesize weeping cries.',
        whyUnsafeOrSafe:
          'Law enforcement and legal systems do not accept peer-to-peer wire transfers or crypto settlements over roadside phone calls. The money goes directly into a criminal mule network.',
        practicalNextSteps: [
          'Recognize that emotional shock is an attacker\'s primary weapon.',
          'Never wire money, buy gift cards, or send cryptocurrency to resolve roadside arrests.',
          'Calmly take a 10-second breath before taking any action.',
        ],
      },
      {
        id: 'B',
        label: 'Option B',
        actionText: 'Hang up, immediately call Sarah on her actual phone number, or check with other family / friends.',
        isSafe: true,
        scoreAwarded: 25,
        badge: 'SAFE & VERIFIED',
        feedbackTitle: 'Correct Safety Behavior: Disconnect and Re-engage',
        feedbackExplanation:
          'Perfect defense. Hanging up feels counter-intuitive in an emergency, but calling Sarah\'s real phone or checking with her school/workplace almost always reveals that she is sitting safely at her desk, oblivious to the drama.',
        whyUnsafeOrSafe:
          'Scammers spoof caller IDs and fake background noise, but they cannot route incoming cellular calls made directly to your loved one\'s real device.',
        practicalNextSteps: [
          'End the call immediately without engaging in arguments with the "lawyer".',
          'Dial Sarah\'s personal number directly. If it goes to voicemail, call her workplace, school, or spouse.',
          'If you established a family "Safe Word", demand the safe word before discussing any crisis.',
        ],
      },
      {
        id: 'C',
        label: 'Option C',
        actionText: 'Demand that the "lawyer" or caller send a live photo or selfie with their ID card over text.',
        isSafe: false,
        scoreAwarded: 10,
        badge: 'INCOMPLETE VERIFICATION',
        feedbackTitle: 'Risky Delay: Scammers Use Deepfakes and Pressure',
        feedbackExplanation:
          'Engaging in negotiation keeps you on the hook. Sophisticated scam rings can produce forged badges, synthetic documents, and manipulated photos within minutes, creating further confusion.',
        whyUnsafeOrSafe:
          'Staying in conversation allows the scammer to maintain emotional pressure and psychological control. Direct disconnection and independent outbound calling is vastly superior.',
        practicalNextSteps: [
          'Do not negotiate with high-pressure callers.',
          'Hang up immediately and contact the real person on trusted channels.',
          'Report the incident to the police or cybercrime authorities.',
        ],
      },
    ],
  },
  {
    id: 'scenario-bank-otp',
    number: 3,
    title: 'The Bank "Fraud Security" Department Alert',
    subtitle: 'Scenario 3: Caller claiming to be a fraud officer from your bank',
    callerName: 'Officer Rajiv Patel',
    callerSubtitle: 'Alleged Fraud Operations, National Central Bank',
    callerAvatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    channel: 'Incoming Call (Display: "Bank Fraud Dept")',
    urgencyLevel: 'Official Authorization Alert',
    audioSnippetText:
      '"Good afternoon. This is Officer Rajiv Patel from your bank\'s Central Fraud Prevention Unit. We have just flagged an unauthorized debit of $1,280 originating from an overseas IP address. To block this fraudulent charge and protect your account balance, our system just dispatched a 6-digit verification OTP to your registered phone. Please read the 6 numbers to me immediately to cancel the transfer!"',
    audioDurationSec: 18,
    situationContext:
      'The caller speaks in a crisp, authoritative, professional tone. Your phone buzzes with a genuine SMS from your bank containing a 6-digit OTP. The caller insists that reading the OTP is the only way to cancel the illegal charge.',
    voiceCharacteristics: [
      'Authoritative, corporate customer support cadence synthesized with AI voice models',
      'Accurate bank terminology ("Central Fraud Prevention", "reversal authorization")',
      'Exploitation of SMS timing: scammer triggered an actual password reset or login request to generate the SMS',
    ],
    correctChoiceId: 'B',
    deepDiveEducationalNote:
      'CRITICAL SECURITY PRINCIPLE: Banks NEVER call you to request an OTP, PIN, password, or CVV. An OTP is an authentication key that authorizes transactions—sharing it hands the key to the criminal.',
    choices: [
      {
        id: 'A',
        label: 'Option A',
        actionText: 'Read the 6-digit OTP aloud to the officer so they can cancel the unauthorized debit.',
        isSafe: false,
        scoreAwarded: 0,
        badge: 'UNSAFE / HIGH RISK',
        feedbackTitle: 'Catastrophic Error: You Authorized the Fraud',
        feedbackExplanation:
          'Reading the OTP authorizes the attacker\'s login or pending money transfer! The SMS was generated because the scammer was sitting on the bank portal trying to drain your funds.',
        whyUnsafeOrSafe:
          'OTPs are strictly for outgoing verification and personal authentication. No legitimate financial institution employee ever needs your OTP to cancel a charge or secure an account.',
        practicalNextSteps: [
          'Immediately call your bank\'s official customer care number on the back of your card to freeze accounts.',
          'Change your internet banking and email passwords immediately from a secure browser.',
          'File a complaint with the cybercrime authorities without delay.',
        ],
      },
      {
        id: 'B',
        label: 'Option B',
        actionText: 'Never disclose the OTP. Hang up immediately, check your official banking app, and call the number on the back of your card.',
        isSafe: true,
        scoreAwarded: 25,
        badge: 'SAFE & VERIFIED',
        feedbackTitle: 'Correct Safety Behavior: Zero Credential Disclosure',
        feedbackExplanation:
          'Flawless defense. You recognized that OTPs, PINs, and passwords are never to be shared under any circumstances, regardless of how authoritative or convincing the caller sounds.',
        whyUnsafeOrSafe:
          'Legitimate bank fraud prevention teams have internal tools to freeze accounts; they never need customers to verbalize secret one-time codes over an inbound call.',
        practicalNextSteps: [
          'Hang up immediately without arguing.',
          'Open your official mobile banking app directly (never via links in SMS) to check actual transaction history.',
          'Call your bank\'s customer service number printed directly on the back of your physical debit or credit card.',
        ],
      },
      {
        id: 'C',
        label: 'Option C',
        actionText: 'Ask the caller for their employee ID and badge number, then give them the OTP once they recite it.',
        isSafe: false,
        scoreAwarded: 0,
        badge: 'UNSAFE / HIGH RISK',
        feedbackTitle: 'Dangerous Trap: Fake Credentials Are Trivial to Fabricate',
        feedbackExplanation:
          'Scammers always have elaborate fake employee IDs, branch addresses, and case reference numbers prepared. Believing a recited badge number provides false reassurance.',
        whyUnsafeOrSafe:
          'An imposter can recite any string of numbers like "EMP-88492-DELHI". Reciting credentials does not validate identity. Even with a valid bank employee, the golden rule remains: NEVER share your OTP.',
        practicalNextSteps: [
          'Remember: Caller ID can be spoofed, and employee ID numbers mean nothing over an unverified call.',
          'Repeat the core mantra: "Never disclose OTPs, passwords, or PINs to any caller."',
          'Report the spoofed call to your telecom provider and your bank\'s fraud division.',
        ],
      },
    ],
  },
];

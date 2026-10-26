export interface ScamStep {
  stepNumber: number;
  title: string;
  shortAction: string;
  description: string;
  doList: string[];
  dontList: string[];
  icon: string;
  badge?: string;
}

export const SUSPECTED_SCAM_STEPS: ScamStep[] = [
  {
    stepNumber: 1,
    title: 'Stop and Do Not Send Money Immediately',
    shortAction: 'Breathe and pause the interaction',
    description:
      'The primary weapon of an AI voice scammer is manufactured urgency. They want you moving before your rational neocortex engages. Take a breath and freeze all actions.',
    doList: [
      'Tell the caller: "I cannot talk right now, I will call you back in 5 minutes."',
      'Put your phone face down and take three slow, deliberate breaths.',
      'Remember that genuine legal, medical, or banking situations can always wait 5 to 10 minutes.',
    ],
    dontList: [
      'Do not approve biometric prompts, UPI requests, or one-click payment authorizations.',
      'Do not let the caller panic you into acting without independent confirmation.',
    ],
    icon: 'PauseOctagon',
  },
  {
    stepNumber: 2,
    title: 'Contact the Person Using a Known, Independent Number',
    shortAction: 'Initiate a fresh outbound cellular call',
    description:
      'Never use the redial button or reply to the specific incoming channel. Disconnect the call and dial the contact\'s known phone number directly from your address book.',
    doList: [
      'Use a pre-existing contact card saved on your phone before the event.',
      'If they don\'t pick up, send a text via SMS or an encrypted messenger asking for a return call.',
      'If they answer normally, ask if they just contacted you about an emergency.',
    ],
    dontList: [
      'Do not dial back any alternate number provided by the caller during the emergency.',
      'Do not reply directly within the unverified chat thread.',
    ],
    icon: 'PhoneCall',
  },
  {
    stepNumber: 3,
    title: 'Verify the Request with a Trusted Mutual Contact',
    shortAction: 'Reach out to friends, partners, or workplaces',
    description:
      'If your loved one or friend does not answer their phone immediately, contact someone physically near them or a trusted mutual family member.',
    doList: [
      'Call their spouse, roommate, parent, or office colleague to check their current physical location.',
      'Inquire calmly: "Is Sarah currently at home or at her desk?"',
      'Check their recent verified activity or social updates.',
    ],
    dontList: [
      'Do not assume silence means disaster—people frequently leave phones on silent during work or transit.',
      'Do not transfer money to a third party claiming to act on their behalf.',
    ],
    icon: 'Users',
  },
  {
    stepNumber: 4,
    title: 'Never Share OTPs, PINs or Passwords',
    shortAction: 'Maintain zero credential disclosure',
    description:
      'OTPs (One-Time Passwords) are your digital authorization signatures. Sharing an OTP is identical to handing an attacker signed blank checks.',
    doList: [
      'Treat OTPs as confidential secrets meant ONLY for your eyes.',
      'Read the SMS text carefully: notice phrases like "Do not share this OTP with ANYONE, including bank staff."',
      'Hang up immediately if an inbound caller asks for numbers sent to your phone.',
    ],
    dontList: [
      'NEVER read OTPs or authentication codes to any caller under any pretense.',
      'Never input your ATM PIN or UPI PIN into links sent via SMS or WhatsApp.',
    ],
    icon: 'ShieldAlert',
    badge: 'NON-NEGOTIABLE',
  },
  {
    stepNumber: 5,
    title: 'Save Relevant Evidence Responsibly',
    shortAction: 'Document the incident without exposing personal data',
    description:
      'Keep records of the interaction to help cybercrime investigators trace mule accounts and telecom routing channels.',
    doList: [
      'Take screenshots of caller ID, phone numbers, timestamps, and message threads.',
      'Record the transaction UPI ID, bank account number, or crypto wallet the scammer requested.',
      'Preserve the audio file or voicemail recording without modifying it.',
    ],
    dontList: [
      'Do not post screenshots publicly on social media containing your own sensitive banking info.',
      'Do not forward phishing links to other people.',
    ],
    icon: 'FileText',
  },
  {
    stepNumber: 6,
    title: 'Report Promptly to the Cybercrime Helpline & Portal',
    shortAction: 'Dial 1930 (India) & report on cybercrime.gov.in',
    description:
      'If money was transferred, the first 2 hours ("The Golden Hours") are critical for banks to freeze money in mule accounts before it is withdrawn.',
    doList: [
      'In India: Call the National Cybercrime Reporting Helpline at 1930 immediately.',
      'File an official complaint on the Citizen Financial Cyber Fraud Reporting Portal: https://cybercrime.gov.in/',
      'Contact your bank\'s dedicated 24/7 fraud helpline to place a hold on the destination account.',
    ],
    dontList: [
      'Do not hesitate out of embarrassment—thousands of sophisticated people are targeted daily.',
      'Do not pay "recovery agents" on social media promising to hack back your funds (they are secondary scammers).',
    ],
    icon: 'Landmark',
    badge: 'CRITICAL HOTLINE',
  },
];

import { ChecklistSign } from '../types';

export const SAFETY_WARNING_SIGNS: ChecklistSign[] = [
  {
    id: 'urgency',
    title: 'The caller creates extreme urgency',
    description: 'Demands action within minutes ("Send it right now!", "Before police arrive", "Your account will be suspended"). They refuse to let you think or pause.',
    weight: 20,
    iconName: 'Clock',
    highlightTag: 'Psychological Coercion',
    advice: 'High emotional pressure is designed to shut down analytical thinking. Deliberately slow down: tell them you will call back in 5 minutes.',
  },
  {
    id: 'money_giftcards',
    title: 'They demand money or gift cards',
    description: 'Requests immediate wire transfers, P2P payment app transfers, Apple/Google/Amazon gift cards, or cash couriers to settle an emergency.',
    weight: 25,
    iconName: 'CreditCard',
    highlightTag: 'Financial Transfer',
    advice: 'No government agency, hospital, or police department accepts gift cards or instant cryptocurrency as legitimate payment.',
  },
  {
    id: 'secrecy',
    title: 'They tell you to keep the request secret',
    description: 'Explicit instructions like "Don\'t tell Mom," "Keep this between us," or "Do not alert bank branch staff about the purpose of withdrawal."',
    weight: 25,
    iconName: 'Lock',
    highlightTag: 'Isolation Tactic',
    advice: 'Scammers deliberately isolate victims from family, friends, or trusted financial advisors who would instantly spot the scam.',
  },
  {
    id: 'discourages_callback',
    title: 'They discourage you from calling back',
    description: 'Claims their battery is dying, they are in a noisy hospital with poor reception, or warns that hanging up will forfeit your chance to resolve the crisis.',
    weight: 20,
    iconName: 'PhoneOff',
    highlightTag: 'Channel Control',
    advice: 'This is the telltale signature of an AI clone. Two-way independent voice calls to known numbers instantly defeat synthetic voice traps.',
  },
  {
    id: 'credentials',
    title: 'They ask for OTPs, PINs or passwords',
    description: 'Requests a one-time verification code (SMS OTP), banking password, ATM PIN, or remote desktop app access (AnyDesk, TeamViewer) to "cancel" a fraud alert.',
    weight: 35,
    iconName: 'KeyRound',
    highlightTag: 'Critical Credential Theft',
    advice: 'GOLDEN RULE: No bank, legitimate service, or police officer will EVER ask for your OTP or password over a phone call.',
  },
  {
    id: 'unusual_channels',
    title: 'They demand payment through unusual channels',
    description: 'Directs payments to personal UPI IDs, overseas crypto wallets, third-party payment gateways, or unregistered digital wallets not matching the alleged institution.',
    weight: 25,
    iconName: 'AlertTriangle',
    highlightTag: 'Irreversible Mules',
    advice: 'Mule accounts and cryptocurrency are favored by cyber syndicates because the money is converted and laundered in seconds.',
  },
];

export const PRESET_TEST_CASES = [
  {
    id: 'preset-kidnapping',
    title: 'Example A: Virtual Kidnapping / Distress Hoax',
    activeIds: ['urgency', 'money_giftcards', 'secrecy', 'discourages_callback'],
    description: 'Simulates a panicked voice alleging someone was kidnapped or arrested.',
  },
  {
    id: 'preset-bank',
    title: 'Example B: Fake Bank Fraud Dept',
    activeIds: ['urgency', 'credentials', 'discourages_callback'],
    description: 'Simulates a caller claiming an illegal transaction and demanding OTP.',
  },
  {
    id: 'preset-crypto',
    title: 'Example C: Tech Support / Gift Card Scheme',
    activeIds: ['urgency', 'money_giftcards', 'credentials', 'unusual_channels'],
    description: 'Simulates a technician demanding gift cards and access to your computer.',
  },
];

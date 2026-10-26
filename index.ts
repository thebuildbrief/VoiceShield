export interface ScenarioChoice {
  id: 'A' | 'B' | 'C';
  label: string;
  actionText: string;
  isSafe: boolean;
  scoreAwarded: number; // 0, 10, or 25
  badge: 'SAFE & VERIFIED' | 'UNSAFE / HIGH RISK' | 'INCOMPLETE VERIFICATION';
  feedbackTitle: string;
  feedbackExplanation: string;
  whyUnsafeOrSafe: string;
  practicalNextSteps: string[];
}

export interface Scenario {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  callerName: string;
  callerSubtitle: string;
  callerAvatarUrl?: string;
  channel: string; // e.g. "Voice Note (WhatsApp / Signal)", "Cellular Voice Call", "VoIP International"
  urgencyLevel: 'Extreme Urgency' | 'High Pressure' | 'Official Authorization Alert';
  audioSnippetText: string;
  audioDurationSec: number;
  situationContext: string;
  voiceCharacteristics: string[];
  choices: ScenarioChoice[];
  correctChoiceId: 'A' | 'B' | 'C';
  deepDiveEducationalNote: string;
}

export interface ChecklistSign {
  id: string;
  title: string;
  description: string;
  weight: number;
  iconName: string;
  highlightTag?: string;
  advice: string;
}

export interface LearnTopic {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  icon: string;
  summary: string;
  takeaways: string[];
  realWorldContext: string;
  preventativeRule: string;
}

export interface SimulatorState {
  currentScenarioIndex: number;
  userAnswers: Record<number, 'A' | 'B' | 'C'>;
  feedbackVisible: boolean;
  isCompleted: boolean;
  score: number; // based on selections
}

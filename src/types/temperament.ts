export type TemperamentType = 'sanguineo' | 'colerico' | 'melancolico' | 'flematico';

export type OptionKey = 'A' | 'B' | 'C' | 'D';

export interface QuestionOption {
  key: OptionKey;
  temperament: TemperamentType;
  text: string;
  behavioralNote: string;
}

export interface Question {
  id: number;
  category: string;
  scenario: string;
  options: QuestionOption[];
}

export interface TemperamentProfile {
  id: TemperamentType;
  name: string;
  tagline: string;
  elementSymbol: string;
  nature: string;
  angerPattern: {
    trigger: string;
    reaction: string;
    risk: string;
    blindSpot: string;
  };
  speechAndWord: {
    style: string;
    riskWords: string;
    constructiveGuidance: string;
  };
  characterForgingRules: {
    ruleTitle: string;
    ruleDescription: string;
    dailyPractice: string;
  }[];
  angerManagementProtocol: string[];
  peacemakingStrengths: string[];
}

export interface TestScore {
  counts: Record<TemperamentType, number>;
  percentages: Record<TemperamentType, number>;
  primary: TemperamentType;
  secondary: TemperamentType;
  totalAnswered: number;
}

export type FontFamilyChoice = 'sans' | 'serif' | 'mono';

export interface ThemeSettings {
  bgColor: string;
  fontFamily: FontFamilyChoice;
  cardTone: 'adaptive' | 'elevated';
}

export interface AppContentConfig {
  institutionTitle: string;
  institutionSubtitle: string;
  manifestoParagraph: string;
  reflectionQuote: {
    text: string;
    author: string;
  };
  questions: Question[];
}

export type TemperamentType = 'sanguineo' | 'colerico' | 'melancolico' | 'flematico';

export type OptionKey = 'A' | 'B' | 'C' | 'D';

export type AppView = 'theory' | 'glossary' | 'wizard' | 'results' | 'landing' | 'admin';

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

export interface MixedTemperamentDetail {
  id: string;
  title: string;
  predominant: TemperamentType;
  secondary: TemperamentType;
  description: string;
  balanceAdvice: string;
}

export interface TemperamentProfile {
  id: TemperamentType;
  name: string;
  tagline: string;
  elementSymbol: string;
  nature: string;
  excitability: {
    speed: string;
    depth: string;
    reaction: string;
    duration: string;
  };
  physicalSign: {
    gaze: string;
    gait: string;
  };
  goodQualities: string[];
  badQualities: string[];
  spiritualLifeAndPrayer: string;
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
  selfEducationDirectives: string[];
  howToTreatAndEducate: string[];
  angerManagementProtocol: string[];
  peacemakingStrengths: string[];
  historicalFigures: string[];
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

export interface PracticalExampleReaction {
  label: string;
  temperament?: TemperamentType;
  reaction: string;
  verdict?: string;
}

export interface PracticalExample {
  title: string;
  context: string;
  scenario: string;
  reactions?: PracticalExampleReaction[];
  keyLesson: string;
}

export interface PersonDimension {
  id: 'organico' | 'intelectual' | 'volitivo' | 'espiritual' | 'social';
  title: string;
  tagline: string;
  definition: string;
  initialTemperamentRole: string;
  characterForgingGoal: string;
  youthPracticalExample: string;
  iconName: string;
}

export interface MeasurementCriterion {
  number: 1 | 2 | 3;
  question: string;
  shortName: string;
  explanation: string;
  temperamentAnswers: {
    colerico: string;
    sanguineo: string;
    melancolico: string;
    flematico: string;
  };
}

export interface TheoryChapter {
  id: string;
  title: string;
  subtitle: string;
  sourceText: string;
  coreMessage: string;
  readingTimeMinutes: number;
  contentParagraphs: string[];
  practicalExample: PracticalExample;
  keyTakeaways: string[];
  youthChallenge: string;
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



export enum Language {
  ZH = 'ZH',
  EN = 'EN',
  MN = 'MN' // Mongolian (Cyrillic)
}

export enum GameMode {
  SINGLE = 'SINGLE',
  DUAL = 'DUAL',
  INTRO = 'INTRO'
}

export interface Translation {
  zh: string;    // Chinese Characters, e.g., 苹果
  pinyin: string; // Pinyin, e.g., píngguǒ
  en: string;    // English translation, e.g., Apple
  mn: string;    // Mongolian (Cyrillic) translation, e.g., Алим
}

export interface YCTWord {
  id: string;
  word: string;       // Chinese representation for key match
  translation: Translation;
  category: string;   // Category Identifier
  categoryZh: string; // Chinese Name of Category
  categoryEn: string; // English Name of Category
  categoryMn: string; // Mongolian Name of Category
  level: number;      // YCT Level (1-6)
  lesson: number;     // Lesson Number (1-12)
}

export interface CategoryTag {
  id: string;
  zh: string;
  en: string;
  mn: string;
  icon: string; // Icon identifier (e.g. 'Apple', 'Compass', etc.)
  color: string; // Tailwind color class for container / basket
  distractors: string[]; // Highly confusing category IDs for game generator (e.g., Food goes with Fruits, Colors with Shapes)
}

export interface GameScore {
  score: number;
  accuracy: number;
  correctHits: number;
  wrongHits: number;
  missed: number;
  gameDuration: number;
  errorsList: YCTWordError[];
  correctList?: YCTWord[];
}

export interface YCTWordError {
  word: YCTWord;
  userSelection: string; // Category or Selection
  correctAnswer: string;
  timestamp: string;
}

export type PowerUpType = 'FREEZE' | 'SHIELD' | 'HINT';

export interface PowerUp {
  type: PowerUpType;
  labelZh: string;
  labelEn: string;
  labelMn: string;
  count: number;
  descriptionZh: string;
  descriptionEn: string;
  descriptionMn: string;
}

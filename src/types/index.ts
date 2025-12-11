// ========================================
// TYPE DEFINITIONS - Vietnam History App
// ========================================

// Timeline Types
export interface TimelineEvent {
  id: string;
  year: number;
  month?: number;
  day?: number;
  title: string;
  description: string;
  category: 'north' | 'south' | 'general';
  importance: 'high' | 'medium' | 'low';
}

// History Content Types
export interface HistorySection {
  id: string;
  title: string;
  subtitle?: string;
  content: string[];
  keyPoints?: string[];
  statistics?: Statistic[];
  quotes?: Quote[];
}

export interface Statistic {
  value: string;
  label: string;
  description?: string;
}

export interface Quote {
  text: string;
  source?: string;
  year?: number;
}

// Quiz Types
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: 'north' | 'south' | 'general';
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface QuizState {
  currentQuestion: number;
  answers: number[];
  showResult: boolean;
  score: number;
}

// Game Types
export interface MatchingPair {
  id: string;
  event: string;
  match: string;
  category: 'north' | 'south' | 'general';
}

export interface MatchingCard {
  id: string;
  content: string;
  pairId: string;
  type: 'event' | 'match';
  isFlipped: boolean;
  isMatched: boolean;
}

export interface CrosswordClue {
  id: string;
  number: number;
  direction: 'across' | 'down';
  clue: string;
  answer: string;
  row: number;
  col: number;
}

export interface CrosswordCell {
  letter: string;
  isBlocked: boolean;
  clueNumbers: number[];
  userInput: string;
}

export interface MapQuestion {
  id: string;
  question: string;
  correctRegion: string;
  hint?: string;
  explanation: string;
}

// Game State Types
export interface MatchingGameState {
  cards: MatchingCard[];
  selectedCards: string[];
  matchedPairs: string[];
  attempts: number;
  isComplete: boolean;
}

export interface CrosswordGameState {
  grid: CrosswordCell[][];
  clues: CrosswordClue[];
  currentClue: string | null;
  completedClues: string[];
  isComplete: boolean;
}

export interface MapGameState {
  currentQuestion: number;
  questions: MapQuestion[];
  score: number;
  answeredQuestions: string[];
  isComplete: boolean;
}

// Navigation Types
export interface NavItem {
  path: string;
  label: string;
  icon?: string;
}

// AI Chatbox Types
export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatState {
  isOpen: boolean;
  messages: ChatMessage[];
  isLoading: boolean;
}


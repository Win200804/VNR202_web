import { MatchingCard, MapQuestion } from '../types';
import { 
  matchingPairs, 
  mapQuestions, 
  crosswordClues,
  keywordClues,
  KEYWORD,
  createMatchingCards,
  shuffleArray,
  checkKeywordAnswer,
  checkFinalKeyword
} from '../data/gameData';

// ========================================
// GAME SERVICE
// ========================================

// === MATCHING GAME ===

// Get matching cards
export const getMatchingCards = (pairCount: number = 10): MatchingCard[] => {
  const selectedPairs = shuffleArray(matchingPairs).slice(0, pairCount);
  return createMatchingCards(selectedPairs);
};

// Check if two cards match
export const checkCardsMatch = (card1: MatchingCard, card2: MatchingCard): boolean => {
  return card1.pairId === card2.pairId && card1.type !== card2.type;
};

// Calculate matching game score
export const calculateMatchingScore = (attempts: number, matchedPairs: number, totalPairs: number): number => {
  const baseScore = matchedPairs * 100;
  const penalty = Math.max(0, attempts - totalPairs) * 10;
  return Math.max(0, baseScore - penalty);
};

// === KEYWORD CROSSWORD GAME ===

// Get keyword clues
export const getKeywordClues = () => keywordClues;

// Get the keyword
export const getKeyword = () => KEYWORD;

// Check keyword clue answer
export { checkKeywordAnswer };

// Check final keyword
export { checkFinalKeyword };

// === LEGACY CROSSWORD GAME ===

// Get crossword clues (legacy)
export const getCrosswordClues = () => {
  return crosswordClues;
};

// Get clues by direction (legacy)
export const getCluesByDirection = (direction: 'across' | 'down') => {
  return crosswordClues.filter(clue => clue.direction === direction);
};

// Check crossword answer (legacy)
export const checkCrosswordAnswer = (clueId: string, userAnswer: string): boolean => {
  const clue = crosswordClues.find(c => c.id === clueId);
  if (!clue) return false;
  return userAnswer.toUpperCase().replace(/\s/g, '') === clue.answer.toUpperCase();
};

// Get crossword grid dimensions (legacy)
export const getCrosswordDimensions = () => {
  let maxRow = 0;
  let maxCol = 0;
  
  crosswordClues.forEach(clue => {
    const endRow = clue.direction === 'down' ? clue.row + clue.answer.length : clue.row;
    const endCol = clue.direction === 'across' ? clue.col + clue.answer.length : clue.col;
    maxRow = Math.max(maxRow, endRow);
    maxCol = Math.max(maxCol, endCol);
  });
  
  return { rows: maxRow + 1, cols: maxCol + 1 };
};

// === MAP GAME ===

// Get map questions
export const getMapQuestions = (): MapQuestion[] => {
  return shuffleArray(mapQuestions);
};

// Get limited map questions
export const getLimitedMapQuestions = (limit: number): MapQuestion[] => {
  return shuffleArray(mapQuestions).slice(0, limit);
};

// Check map answer
export const checkMapAnswer = (questionId: string, selectedRegion: string): boolean => {
  const question = mapQuestions.find(q => q.id === questionId);
  return question ? question.correctRegion === selectedRegion : false;
};

// Get map question by ID
export const getMapQuestionById = (id: string): MapQuestion | undefined => {
  return mapQuestions.find(q => q.id === id);
};

// Calculate map game score
export const calculateMapScore = (correctAnswers: number, totalQuestions: number): number => {
  return Math.round((correctAnswers / totalQuestions) * 100);
};

// === GENERAL GAME UTILITIES ===

// Format time display
export const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

// Get game difficulty settings
export const getDifficultySettings = (difficulty: 'easy' | 'medium' | 'hard') => {
  const settings = {
    easy: { timeLimit: 300, pairCount: 6, questionCount: 4 },
    medium: { timeLimit: 180, pairCount: 10, questionCount: 6 },
    hard: { timeLimit: 120, pairCount: 12, questionCount: 6 }
  };
  return settings[difficulty];
};

// Save high score to localStorage
export const saveHighScore = (game: string, score: number): void => {
  const key = `highScore_${game}`;
  const currentHigh = localStorage.getItem(key);
  if (!currentHigh || score > parseInt(currentHigh)) {
    localStorage.setItem(key, score.toString());
  }
};

// Get high score from localStorage
export const getHighScore = (game: string): number => {
  const score = localStorage.getItem(`highScore_${game}`);
  return score ? parseInt(score) : 0;
};

import { QuizQuestion, QuizState } from '../types';
import { quizQuestions, shuffleQuestions } from '../data/quizData';

// ========================================
// QUIZ SERVICE
// ========================================

// Get all questions
export const getAllQuestions = (): QuizQuestion[] => {
  return quizQuestions;
};

// Get shuffled questions
export const getShuffledQuestions = (): QuizQuestion[] => {
  return shuffleQuestions(quizQuestions);
};

// Get questions by category
export const getQuestionsByCategory = (category: 'north' | 'south' | 'general'): QuizQuestion[] => {
  return quizQuestions.filter(q => q.category === category);
};

// Get questions by difficulty
export const getQuestionsByDifficulty = (difficulty: 'easy' | 'medium' | 'hard'): QuizQuestion[] => {
  return quizQuestions.filter(q => q.difficulty === difficulty);
};

// Get limited number of questions
export const getLimitedQuestions = (limit: number): QuizQuestion[] => {
  const shuffled = shuffleQuestions(quizQuestions);
  return shuffled.slice(0, limit);
};

// Calculate score
export const calculateScore = (answers: number[], questions: QuizQuestion[]): number => {
  let score = 0;
  answers.forEach((answer, index) => {
    if (questions[index] && answer === questions[index].correctAnswer) {
      score++;
    }
  });
  return score;
};

// Calculate percentage
export const calculatePercentage = (score: number, total: number): number => {
  if (total === 0) return 0;
  return Math.round((score / total) * 100);
};

// Get grade based on percentage
export const getGrade = (percentage: number): { grade: string; message: string; color: string } => {
  if (percentage >= 90) {
    return { grade: 'A+', message: 'Xuất sắc! Bạn nắm vững kiến thức lịch sử!', color: 'text-green-600' };
  } else if (percentage >= 80) {
    return { grade: 'A', message: 'Giỏi! Kiến thức của bạn rất tốt!', color: 'text-green-500' };
  } else if (percentage >= 70) {
    return { grade: 'B', message: 'Khá! Bạn hiểu khá rõ về giai đoạn này.', color: 'text-blue-500' };
  } else if (percentage >= 60) {
    return { grade: 'C', message: 'Trung bình. Hãy ôn tập thêm nhé!', color: 'text-yellow-600' };
  } else if (percentage >= 50) {
    return { grade: 'D', message: 'Cần cố gắng hơn. Đọc lại nội dung bài học.', color: 'text-orange-500' };
  } else {
    return { grade: 'F', message: 'Chưa đạt. Hãy học lại từ đầu nhé!', color: 'text-red-500' };
  }
};

// Initialize quiz state
export const initializeQuizState = (): QuizState => {
  return {
    currentQuestion: 0,
    answers: [],
    showResult: false,
    score: 0
  };
};

// Check if answer is correct
export const isAnswerCorrect = (questionId: number, selectedAnswer: number): boolean => {
  const question = quizQuestions.find(q => q.id === questionId);
  return question ? question.correctAnswer === selectedAnswer : false;
};

// Get question statistics
export const getQuestionStats = () => {
  const total = quizQuestions.length;
  const byCategory = {
    north: quizQuestions.filter(q => q.category === 'north').length,
    south: quizQuestions.filter(q => q.category === 'south').length,
    general: quizQuestions.filter(q => q.category === 'general').length
  };
  const byDifficulty = {
    easy: quizQuestions.filter(q => q.difficulty === 'easy').length,
    medium: quizQuestions.filter(q => q.difficulty === 'medium').length,
    hard: quizQuestions.filter(q => q.difficulty === 'hard').length
  };
  
  return { total, byCategory, byDifficulty };
};


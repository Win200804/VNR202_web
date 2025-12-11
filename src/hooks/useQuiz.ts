import { useState, useCallback, useMemo } from 'react';
import { QuizQuestion, QuizState } from '../types';
import { 
  getShuffledQuestions, 
  calculateScore, 
  calculatePercentage, 
  getGrade,
  initializeQuizState 
} from '../services/quizService';

// ========================================
// USE QUIZ HOOK - Phiên bản mới
// Logic: Làm xong hết quiz mới hiển thị đáp án
// ========================================

interface UseQuizReturn {
  // State
  questions: QuizQuestion[];
  currentQuestion: number;
  selectedAnswer: number | null;
  answers: (number | null)[];
  isComplete: boolean;
  isReviewing: boolean;
  
  // Computed
  score: number;
  percentage: number;
  grade: { grade: string; message: string; color: string };
  progress: number;
  currentQuestionData: QuizQuestion | null;
  isLastQuestion: boolean;
  answeredCount: number;
  
  // Actions
  selectAnswer: (answerIndex: number) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  submitQuiz: () => void;
  resetQuiz: () => void;
  jumpToQuestion: (index: number) => void;
}

export const useQuiz = (questionCount: number = 20): UseQuizReturn => {
  // Get shuffled questions
  const [questions] = useState<QuizQuestion[]>(() => 
    getShuffledQuestions().slice(0, questionCount)
  );
  
  // Quiz state
  const [state, setState] = useState<QuizState>(initializeQuizState);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isReviewing, setIsReviewing] = useState(false);
  
  // Computed values
  const currentQuestionData = useMemo(() => 
    questions[state.currentQuestion] || null,
    [questions, state.currentQuestion]
  );
  
  const isLastQuestion = state.currentQuestion === questions.length - 1;
  
  // Progress = số câu đã trả lời / tổng số câu
  const answeredCount = useMemo(() => 
    state.answers.filter(a => a !== null && a !== undefined).length,
    [state.answers]
  );
  
  const progress = useMemo(() => 
    (answeredCount / questions.length) * 100,
    [answeredCount, questions.length]
  );
  
  const score = useMemo(() => 
    calculateScore(state.answers, questions),
    [state.answers, questions]
  );
  
  const percentage = useMemo(() => 
    calculatePercentage(score, questions.length),
    [score, questions.length]
  );
  
  const grade = useMemo(() => 
    getGrade(percentage),
    [percentage]
  );
  
  // Quiz complete khi đã review
  const isComplete = isReviewing;
  
  // Actions
  const selectAnswer = useCallback((answerIndex: number) => {
    if (isReviewing) return;
    
    setSelectedAnswer(answerIndex);
    
    // Lưu câu trả lời ngay khi chọn
    const newAnswers = [...state.answers];
    newAnswers[state.currentQuestion] = answerIndex;
    
    setState(prev => ({
      ...prev,
      answers: newAnswers
    }));
  }, [isReviewing, state.currentQuestion, state.answers]);
  
  const nextQuestion = useCallback(() => {
    if (state.currentQuestion < questions.length - 1) {
      setState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1
      }));
      setSelectedAnswer(state.answers[state.currentQuestion + 1] ?? null);
    }
  }, [state.currentQuestion, state.answers, questions.length]);
  
  const previousQuestion = useCallback(() => {
    if (state.currentQuestion > 0) {
      setState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1
      }));
      setSelectedAnswer(state.answers[state.currentQuestion - 1] ?? null);
    }
  }, [state.currentQuestion, state.answers]);
  
  const jumpToQuestion = useCallback((index: number) => {
    if (index >= 0 && index < questions.length) {
      setState(prev => ({
        ...prev,
        currentQuestion: index
      }));
      setSelectedAnswer(state.answers[index] ?? null);
    }
  }, [questions.length, state.answers]);
  
  // Submit quiz - chuyển sang chế độ review
  const submitQuiz = useCallback(() => {
    setIsReviewing(true);
    setState(prev => ({
      ...prev,
      currentQuestion: 0
    }));
    setSelectedAnswer(state.answers[0] ?? null);
  }, [state.answers]);
  
  const resetQuiz = useCallback(() => {
    setState(initializeQuizState());
    setSelectedAnswer(null);
    setIsReviewing(false);
  }, []);
  
  return {
    // State
    questions,
    currentQuestion: state.currentQuestion,
    selectedAnswer,
    answers: state.answers,
    isComplete,
    isReviewing,
    
    // Computed
    score,
    percentage,
    grade,
    progress,
    currentQuestionData,
    isLastQuestion,
    answeredCount,
    
    // Actions
    selectAnswer,
    nextQuestion,
    previousQuestion,
    submitQuiz,
    resetQuiz,
    jumpToQuestion
  };
};

export default useQuiz;

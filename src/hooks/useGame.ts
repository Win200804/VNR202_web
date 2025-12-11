import { useState, useCallback, useEffect, useMemo } from 'react';
import { MatchingCard, MapQuestion } from '../types';
import { 
  getMatchingCards, 
  checkCardsMatch, 
  calculateMatchingScore,
  getMapQuestions,
  checkMapAnswer,
  calculateMapScore,
  formatTime,
  saveHighScore,
  getHighScore
} from '../services/gameService';

// ========================================
// USE MATCHING GAME HOOK - PAIR SELECTION GAMEPLAY
// ========================================

interface UseMatchingGameReturn {
  // Mảng thẻ sự kiện (cột trái)
  eventCards: MatchingCard[];
  // Mảng thẻ thời gian/thông tin (cột phải)
  matchCards: MatchingCard[];
  // Thẻ event đang được chọn
  selectedEvent: MatchingCard | null;
  // Thẻ match đang được chọn
  selectedMatch: MatchingCard | null;
  // Danh sách các cặp đã ghép đúng
  matchedPairs: string[];
  // Số lần thử
  attempts: number;
  // Trạng thái hoàn thành
  isComplete: boolean;
  // Điểm số
  score: number;
  // Điểm cao nhất
  highScore: number;
  // Thời gian đã chơi
  time: number;
  // Thời gian đã format
  formattedTime: string;
  // Trạng thái feedback (correct/wrong/null)
  feedback: 'correct' | 'wrong' | null;
  
  // Chọn thẻ event
  selectEvent: (card: MatchingCard) => void;
  // Chọn thẻ match
  selectMatch: (card: MatchingCard) => void;
  // Reset game
  resetGame: () => void;
}

export const useMatchingGame = (pairCount: number = 10): UseMatchingGameReturn => {
  // State cho các thẻ event và match riêng biệt
  const [eventCards, setEventCards] = useState<MatchingCard[]>([]);
  const [matchCards, setMatchCards] = useState<MatchingCard[]>([]);
  // Thẻ đang được chọn
  const [selectedEvent, setSelectedEvent] = useState<MatchingCard | null>(null);
  const [selectedMatch, setSelectedMatch] = useState<MatchingCard | null>(null);
  // Các cặp đã ghép đúng
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  // Số lần thử
  const [attempts, setAttempts] = useState(0);
  // Thời gian
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  // Điểm cao
  const [highScore, setHighScore] = useState(0);
  // Feedback cho user
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  
  // Hàm shuffle array
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };
  
  // Khởi tạo game - chia cards thành 2 mảng riêng biệt
  useEffect(() => {
    const allCards = getMatchingCards(pairCount);
    // Tách thành 2 mảng: events và matches
    const events = allCards.filter(card => card.type === 'event');
    const matches = allCards.filter(card => card.type === 'match');
    // Xáo trộn từng mảng riêng
    setEventCards(shuffleArray(events));
    setMatchCards(shuffleArray(matches));
    // Lấy điểm cao
    setHighScore(getHighScore('matching'));
  }, [pairCount]);
  
  // Timer - đếm thời gian chơi
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);
  
  // Kiểm tra hoàn thành
  const isComplete = matchedPairs.length === pairCount;
  
  // Tính điểm
  const score = useMemo(() => 
    calculateMatchingScore(attempts, matchedPairs.length, pairCount),
    [attempts, matchedPairs.length, pairCount]
  );
  
  // Format thời gian
  const formattedTime = formatTime(time);
  
  // Lưu điểm cao khi hoàn thành
  useEffect(() => {
    if (isComplete) {
      setIsRunning(false);
      saveHighScore('matching', score);
      setHighScore(getHighScore('matching'));
    }
  }, [isComplete, score]);
  
  // Xử lý khi có cả 2 thẻ được chọn
  useEffect(() => {
    if (selectedEvent && selectedMatch) {
      // Bắt đầu timer nếu chưa chạy
      if (!isRunning) setIsRunning(true);
      // Tăng số lần thử
      setAttempts(prev => prev + 1);
      
      // Kiểm tra có phải cặp đúng không
      if (checkCardsMatch(selectedEvent, selectedMatch)) {
        // Ghép đúng
        setFeedback('correct');
        // Đánh dấu cặp đã ghép
        setMatchedPairs(prev => [...prev, selectedEvent.pairId]);
        // Cập nhật trạng thái matched cho cả 2 thẻ
        setEventCards(prev => prev.map(c => 
          c.id === selectedEvent.id ? { ...c, isMatched: true } : c
        ));
        setMatchCards(prev => prev.map(c => 
          c.id === selectedMatch.id ? { ...c, isMatched: true } : c
        ));
        // Reset selection sau 500ms
        setTimeout(() => {
          setSelectedEvent(null);
          setSelectedMatch(null);
          setFeedback(null);
        }, 500);
      } else {
        // Ghép sai
        setFeedback('wrong');
        // Reset selection sau 800ms
        setTimeout(() => {
          setSelectedEvent(null);
          setSelectedMatch(null);
          setFeedback(null);
        }, 800);
      }
    }
  }, [selectedEvent, selectedMatch, isRunning]);
  
  // Chọn thẻ event
  const selectEvent = useCallback((card: MatchingCard) => {
    // Không cho chọn thẻ đã matched hoặc đang có feedback
    if (card.isMatched || feedback) return;
    // Bỏ chọn nếu click lại thẻ đang chọn
    if (selectedEvent?.id === card.id) {
      setSelectedEvent(null);
      return;
    }
    setSelectedEvent(card);
  }, [selectedEvent, feedback]);
  
  // Chọn thẻ match
  const selectMatch = useCallback((card: MatchingCard) => {
    // Không cho chọn thẻ đã matched hoặc đang có feedback
    if (card.isMatched || feedback) return;
    // Bỏ chọn nếu click lại thẻ đang chọn
    if (selectedMatch?.id === card.id) {
      setSelectedMatch(null);
      return;
    }
    setSelectedMatch(card);
  }, [selectedMatch, feedback]);
  
  // Reset game
  const resetGame = useCallback(() => {
    const allCards = getMatchingCards(pairCount);
    const events = allCards.filter(card => card.type === 'event');
    const matches = allCards.filter(card => card.type === 'match');
    setEventCards(shuffleArray(events));
    setMatchCards(shuffleArray(matches));
    setSelectedEvent(null);
    setSelectedMatch(null);
    setMatchedPairs([]);
    setAttempts(0);
    setTime(0);
    setIsRunning(false);
    setFeedback(null);
  }, [pairCount]);
  
  return {
    eventCards,
    matchCards,
    selectedEvent,
    selectedMatch,
    matchedPairs,
    attempts,
    isComplete,
    score,
    highScore,
    time,
    formattedTime,
    feedback,
    selectEvent,
    selectMatch,
    resetGame
  };
};

// ========================================
// USE MAP GAME HOOK
// ========================================

interface UseMapGameReturn {
  questions: MapQuestion[];
  currentQuestion: number;
  currentQuestionData: MapQuestion | null;
  selectedRegion: string | null;
  isCorrect: boolean | null;
  showAnswer: boolean;
  score: number;
  isComplete: boolean;
  progress: number;
  highScore: number;
  
  selectRegion: (regionId: string) => void;
  nextQuestion: () => void;
  resetGame: () => void;
}

export const useMapGame = (questionCount: number = 6): UseMapGameReturn => {
  const [questions] = useState<MapQuestion[]>(() => 
    getMapQuestions().slice(0, questionCount)
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [highScore, setHighScore] = useState(0);
  
  useEffect(() => {
    setHighScore(getHighScore('map'));
  }, []);
  
  const currentQuestionData = questions[currentQuestion] || null;
  const isComplete = currentQuestion >= questions.length;
  const progress = (currentQuestion / questions.length) * 100;
  const score = calculateMapScore(correctAnswers, questions.length);
  
  // Save high score when complete
  useEffect(() => {
    if (isComplete) {
      saveHighScore('map', score);
      setHighScore(getHighScore('map'));
    }
  }, [isComplete, score]);
  
  const selectRegion = useCallback((regionId: string) => {
    if (showAnswer) return;
    
    setSelectedRegion(regionId);
    const correct = checkMapAnswer(currentQuestionData?.id || '', regionId);
    setIsCorrect(correct);
    setShowAnswer(true);
    
    if (correct) {
      setCorrectAnswers(prev => prev + 1);
    }
  }, [currentQuestionData, showAnswer]);
  
  const nextQuestion = useCallback(() => {
    setCurrentQuestion(prev => prev + 1);
    setSelectedRegion(null);
    setIsCorrect(null);
    setShowAnswer(false);
  }, []);
  
  const resetGame = useCallback(() => {
    setCurrentQuestion(0);
    setSelectedRegion(null);
    setIsCorrect(null);
    setShowAnswer(false);
    setCorrectAnswers(0);
  }, []);
  
  return {
    questions,
    currentQuestion,
    currentQuestionData,
    selectedRegion,
    isCorrect,
    showAnswer,
    score,
    isComplete,
    progress,
    highScore,
    selectRegion,
    nextQuestion,
    resetGame
  };
};

export default { useMatchingGame, useMapGame };

import { MatchingPair, CrosswordClue, MapQuestion } from '../types';

// ========================================
// MATCHING GAME DATA (1954-1960)
// ========================================
export const matchingPairs: MatchingPair[] = [
  {
    id: 'pair-1',
    event: 'Hiệp định Giơnevơ',
    match: 'Tháng 7/1954',
    category: 'general'
  },
  {
    id: 'pair-2',
    event: 'Giải phóng Hà Nội',
    match: '10/10/1954',
    category: 'north'
  },
  {
    id: 'pair-3',
    event: 'Hoàn thành khôi phục kinh tế miền Bắc',
    match: 'Năm 1957',
    category: 'north'
  },
  {
    id: 'pair-4',
    event: 'Kế hoạch ba năm',
    match: '1958-1960',
    category: 'north'
  },
  {
    id: 'pair-5',
    event: 'Nghị quyết 15',
    match: 'Tháng 1/1959',
    category: 'south'
  },
  {
    id: 'pair-6',
    event: 'Mở Đường Hồ Chí Minh',
    match: 'Năm 1959',
    category: 'general'
  },
  {
    id: 'pair-7',
    event: 'Luật 10/59',
    match: 'Tháng 5/1959',
    category: 'south'
  },
  {
    id: 'pair-8',
    event: 'Phong trào Đồng Khởi',
    match: '17/1/1960',
    category: 'south'
  },
  {
    id: 'pair-9',
    event: 'Mặt trận DTGPMN thành lập',
    match: '20/12/1960',
    category: 'south'
  },
  {
    id: 'pair-10',
    event: 'Đường HCM trên bộ',
    match: 'Đoàn 559',
    category: 'general'
  },
  {
    id: 'pair-11',
    event: 'Đại hội Đảng lần III',
    match: 'Tháng 9/1960',
    category: 'north'
  },
  {
    id: 'pair-12',
    event: 'Ruộng đất chia cho nông dân',
    match: '810.000 ha',
    category: 'north'
  }
];

// ========================================
// KEYWORD CROSSWORD DATA
// Từ khóa: ĐỒNGKHỞI (Đồng Khởi - 8 chữ)
// Điền hàng ngang để tìm từ khóa cột dọc
// ========================================
export interface KeywordClue {
  id: string;
  number: number;
  clue: string;
  answer: string;
  keywordIndex: number; // Vị trí chữ cái thuộc từ khóa (0-based)
}

// Từ khóa chính: ĐỒNGKHỞI
export const KEYWORD = 'ĐỒNGKHỞI';

export const keywordClues: KeywordClue[] = [
  {
    id: 'kw-1',
    number: 1,
    clue: 'Tổ chức lãnh đạo cách mạng Việt Nam, được thành lập ngày 3/2/1930',
    answer: 'ĐẢNG',
    keywordIndex: 0 // Đ
  },
  {
    id: 'kw-2',
    number: 2,
    clue: 'Cách xưng hô chính thức giữa các đảng viên trong Đảng Lao động Việt Nam',
    answer: 'ĐỒNGCHÍ',
    keywordIndex: 1 // Ồ (Đ-Ồ-N-G-C-H-Í, index 1)
  },
  {
    id: 'kw-3',
    number: 3,
    clue: 'Tỉnh miền Tây Nam Bộ, nơi "ngọn lửa" năm 1960 bùng lên đầu tiên',
    answer: 'BẾNTRE',
    keywordIndex: 2 // N (B-Ế-N-T-R-E, index 2)
  },
  {
    id: 'kw-4',
    number: 4,
    clue: 'Thành phố trở thành thủ đô của chính quyền Việt Nam Cộng hòa',
    answer: 'SÀIGÒN',
    keywordIndex: 3 // G (S-À-I-G-Ò-N, index 3)
  },
  {
    id: 'kw-5',
    number: 5,
    clue: 'Văn kiện định hướng phát triển kinh tế miền Bắc giai đoạn 1958-1960 (2 từ, viết liền)',
    answer: 'KẾHOẠCH',
    keywordIndex: 0 // K (K-Ế-H-O-Ạ-C-H, index 0)
  },
  {
    id: 'kw-6',
    number: 6,
    clue: 'Con sông chảy qua vĩ tuyến 17, trở thành ranh giới đau thương của dân tộc',
    answer: 'BẾNHẢI',
    keywordIndex: 3 // H (B-Ế-N-H-Ả-I, index 3)
  },
  {
    id: 'kw-7',
    number: 7,
    clue: 'Nhiệm vụ của Đoàn 559: vận ___ vũ khí, lương thực theo đường Trường Sơn',
    answer: 'CHỞ',
    keywordIndex: 2 // Ở (C-H-Ở, index 2)
  },
  {
    id: 'kw-8',
    number: 8,
    clue: 'Nghị quyết 15 ra đời khi ___ cơ cách mạng miền Nam đã chín muồi',
    answer: 'THỜI',
    keywordIndex: 3 // I (T-H-Ờ-I, index 3)
  }
];

// Tính toán độ dài lớn nhất để vẽ grid
export const getMaxAnswerLength = () => {
  return Math.max(...keywordClues.map(c => c.answer.length));
};

// Tính toán vị trí cột từ khóa (cột nào sẽ là cột vàng)
export const getKeywordColumnIndex = () => {
  // Tìm vị trí cột sao cho tất cả các chữ keyword đều nằm trong đó
  // Dựa trên keywordIndex của mỗi clue
  const maxLength = getMaxAnswerLength();
  // Cột keyword sẽ được tính toán dựa trên offset của mỗi từ
  return Math.floor(maxLength / 2);
};

// Legacy crossword data (không còn sử dụng)
export const crosswordClues: CrosswordClue[] = [];

// ========================================
// MAP GAME DATA (1954-1960)
// ========================================
export const mapQuestions: MapQuestion[] = [
  {
    id: 'map-1',
    question: 'Phong trào Đồng Khởi bắt đầu từ tỉnh nào?',
    correctRegion: 'ben-tre',
    hint: 'Một tỉnh ở đồng bằng sông Cửu Long',
    explanation: 'Phong trào Đồng Khởi bắt đầu từ Bến Tre vào ngày 17/1/1960, sau đó lan rộng khắp miền Nam.'
  },
  {
    id: 'map-2',
    question: 'Thủ đô nào được giải phóng ngày 10/10/1954?',
    correctRegion: 'ha-noi',
    hint: 'Thủ đô của Việt Nam',
    explanation: 'Hà Nội được giải phóng ngày 10/10/1954 sau khi thực dân Pháp rút lui theo Hiệp định Giơnevơ.'
  },
  {
    id: 'map-3',
    question: 'Vĩ tuyến 17 đi qua tỉnh nào, nơi có sông Bến Hải?',
    correctRegion: 'quang-tri',
    hint: 'Một tỉnh ở Bắc Trung Bộ',
    explanation: 'Vĩ tuyến 17 đi qua Quảng Trị, với sông Bến Hải là ranh giới tạm thời chia cắt hai miền theo Hiệp định Giơnevơ.'
  },
  {
    id: 'map-4',
    question: 'Đường Hồ Chí Minh bắt đầu từ tỉnh nào ở miền Bắc?',
    correctRegion: 'nghe-an',
    hint: 'Quê hương của Chủ tịch Hồ Chí Minh',
    explanation: 'Đường Hồ Chí Minh bắt đầu từ khu vực Nghệ An - Hà Tĩnh, xuyên qua dãy Trường Sơn để chi viện cho miền Nam.'
  },
  {
    id: 'map-5',
    question: 'Sài Gòn thuộc miền nào sau Hiệp định Giơnevơ?',
    correctRegion: 'sai-gon',
    hint: 'Thành phố lớn nhất miền Nam',
    explanation: 'Sài Gòn nằm ở miền Nam, trở thành thủ đô của chính quyền Ngô Đình Diệm do Mỹ dựng lên.'
  },
  {
    id: 'map-6',
    question: 'Tỉnh nào có căn cứ địa Tây Ninh nổi tiếng?',
    correctRegion: 'tay-ninh',
    hint: 'Giáp biên giới Campuchia',
    explanation: 'Tây Ninh là căn cứ địa quan trọng của cách mạng miền Nam, nơi đặt trụ sở của Mặt trận Dân tộc Giải phóng.'
  }
];

// Vietnam map regions data for SVG
export const vietnamRegions = [
  { id: 'ha-noi', name: 'Hà Nội', path: 'M180,120 L200,110 L220,120 L210,140 L190,140 Z' },
  { id: 'quang-tri', name: 'Quảng Trị', path: 'M170,280 L200,270 L210,290 L180,300 Z' },
  { id: 'nghe-an', name: 'Nghệ An', path: 'M150,220 L190,210 L200,240 L160,250 Z' },
  { id: 'ben-tre', name: 'Bến Tre', path: 'M200,520 L230,510 L240,540 L210,550 Z' },
  { id: 'sai-gon', name: 'Sài Gòn', path: 'M210,480 L240,470 L250,500 L220,510 Z' },
  { id: 'tay-ninh', name: 'Tây Ninh', path: 'M180,460 L210,450 L220,480 L190,490 Z' },
];

// ========================================
// HELPER FUNCTIONS
// ========================================

// Shuffle array helper
export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Create matching cards from pairs
export const createMatchingCards = (pairs: MatchingPair[]) => {
  const cards: Array<{
    id: string;
    content: string;
    pairId: string;
    type: 'event' | 'match';
    isFlipped: boolean;
    isMatched: boolean;
  }> = [];
  
  pairs.forEach(pair => {
    cards.push({
      id: `${pair.id}-event`,
      content: pair.event,
      pairId: pair.id,
      type: 'event',
      isFlipped: false,
      isMatched: false
    });
    cards.push({
      id: `${pair.id}-match`,
      content: pair.match,
      pairId: pair.id,
      type: 'match',
      isFlipped: false,
      isMatched: false
    });
  });
  
  return shuffleArray(cards);
};

// Get keyword clues
export const getKeywordClues = () => keywordClues;

// Normalize Vietnamese string for comparison (remove tones but keep base letters)
export const normalizeVietnamese = (str: string): string => {
  return str.toUpperCase().replace(/\s/g, '');
};

// Check keyword answer (tiếng Việt có dấu)
export const checkKeywordAnswer = (clueId: string, userAnswer: string): boolean => {
  const clue = keywordClues.find(c => c.id === clueId);
  if (!clue) return false;
  const normalized = normalizeVietnamese(userAnswer);
  const correct = normalizeVietnamese(clue.answer);
  return normalized === correct;
};

// Check final keyword
export const checkFinalKeyword = (userKeyword: string): boolean => {
  const normalized = normalizeVietnamese(userKeyword);
  const correct = normalizeVietnamese(KEYWORD);
  return normalized === correct;
};

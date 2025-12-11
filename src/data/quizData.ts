import { QuizQuestion } from '../types';

// ========================================
// QUIZ QUESTIONS (20 câu hỏi)
// ========================================
export const quizQuestions: QuizQuestion[] = [
  // === GENERAL QUESTIONS ===
  {
    id: 1,
    question: 'Hiệp định Giơnevơ được ký kết vào thời điểm nào?',
    options: [
      'Tháng 5/1954',
      'Tháng 7/1954',
      'Tháng 9/1954',
      'Tháng 11/1954'
    ],
    correctAnswer: 1,
    explanation: 'Hiệp định Giơnevơ được ký kết vào tháng 7/1954, chấm dứt chiến tranh Đông Dương và tạm thời chia cắt Việt Nam tại vĩ tuyến 17.',
    category: 'general',
    difficulty: 'easy'
  },
  {
    id: 2,
    question: 'Vĩ tuyến nào tạm thời chia cắt hai miền Nam - Bắc Việt Nam theo Hiệp định Giơnevơ?',
    options: [
      'Vĩ tuyến 14',
      'Vĩ tuyến 15',
      'Vĩ tuyến 17',
      'Vĩ tuyến 20'
    ],
    correctAnswer: 2,
    explanation: 'Theo Hiệp định Giơnevơ, vĩ tuyến 17 (sông Bến Hải) là ranh giới tạm thời chia cắt hai miền. Dự kiến sẽ tổ chức tổng tuyển cử thống nhất đất nước vào năm 1956.',
    category: 'general',
    difficulty: 'easy'
  },
  {
    id: 3,
    question: 'Sau Hiệp định Giơnevơ, đế quốc nào thay chân Pháp xâm lược miền Nam Việt Nam?',
    options: [
      'Anh',
      'Nhật Bản',
      'Mỹ',
      'Trung Quốc'
    ],
    correctAnswer: 2,
    explanation: 'Sau khi Pháp thất bại, đế quốc Mỹ đã thay chân Pháp, biến miền Nam thành thuộc địa kiểu mới và căn cứ quân sự, trở thành kẻ thù trực tiếp và chính yếu của nhân dân Việt Nam.',
    category: 'general',
    difficulty: 'easy'
  },
  {
    id: 4,
    question: 'Đường Hồ Chí Minh được mở từ năm nào?',
    options: [
      '1957',
      '1958',
      '1959',
      '1960'
    ],
    correctAnswer: 2,
    explanation: 'Đường Hồ Chí Minh được mở từ năm 1959, bao gồm Đoàn 559 (trên bộ) và Đoàn 759 (trên biển), nhằm chi viện cho cách mạng miền Nam.',
    category: 'general',
    difficulty: 'medium'
  },

  // === NORTH VIETNAM QUESTIONS ===
  {
    id: 5,
    question: 'Nhiệm vụ trọng tâm của miền Bắc ngay sau Hiệp định Giơnevơ là gì?',
    options: [
      'Xây dựng quân đội mạnh',
      'Khôi phục kinh tế và ổn định đời sống nhân dân',
      'Chi viện cho miền Nam',
      'Công nghiệp hóa đất nước'
    ],
    correctAnswer: 1,
    explanation: 'Sau chiến tranh, nhiệm vụ trọng tâm của miền Bắc là hàn gắn vết thương chiến tranh, phục hồi kinh tế quốc dân và ổn định đời sống nhân dân.',
    category: 'north',
    difficulty: 'medium'
  },
  {
    id: 6,
    question: 'Đến năm nào, nông nghiệp miền Bắc cơ bản đạt năng suất của năm cao nhất dưới thời Pháp thuộc?',
    options: [
      '1955',
      '1956',
      '1957',
      '1958'
    ],
    correctAnswer: 2,
    explanation: 'Đến năm 1957, nông nghiệp miền Bắc cơ bản đạt năng suất của năm cao nhất dưới thời Pháp thuộc (1939), đẩy lùi nạn đói và hoàn thành khôi phục kinh tế.',
    category: 'north',
    difficulty: 'medium'
  },
  {
    id: 7,
    question: 'Bao nhiêu hecta ruộng đất đã được chia cho nông dân trong cải cách ruộng đất ở miền Bắc?',
    options: [
      'Hơn 500.000 ha',
      'Hơn 650.000 ha',
      'Hơn 810.000 ha',
      'Hơn 1.000.000 ha'
    ],
    correctAnswer: 2,
    explanation: 'Công cuộc cải cách ruộng đất đã chia hơn 810.000 ha ruộng đất cho hơn 2 triệu hộ nông dân lao động, xóa bỏ hoàn toàn chế độ chiếm hữu ruộng đất phong kiến.',
    category: 'north',
    difficulty: 'medium'
  },
  {
    id: 8,
    question: 'Kế hoạch ba năm của miền Bắc được thực hiện trong giai đoạn nào?',
    options: [
      '1955-1957',
      '1956-1958',
      '1957-1959',
      '1958-1960'
    ],
    correctAnswer: 3,
    explanation: 'Kế hoạch ba năm (1958-1960) nhằm phát triển kinh tế, văn hóa và cải tạo xã hội chủ nghĩa đối với kinh tế cá thể và tư bản tư doanh.',
    category: 'north',
    difficulty: 'medium'
  },
  {
    id: 9,
    question: 'Đảng chủ trương cải tạo tư bản tư doanh ở miền Bắc bằng hình thức nào?',
    options: [
      'Tịch thu toàn bộ',
      'Quốc hữu hóa ngay lập tức',
      'Công tư hợp doanh',
      'Đuổi ra khỏi miền Bắc'
    ],
    correctAnswer: 2,
    explanation: 'Đảng chủ trương cải tạo hòa bình đối với tư bản tư doanh, không tịch thu tư liệu sản xuất mà dùng chính sách chuộc lại thông qua hình thức công tư hợp doanh.',
    category: 'north',
    difficulty: 'hard'
  },
  {
    id: 10,
    question: 'Trong cải cách ruộng đất, sai lầm chính là gì?',
    options: [
      'Chia quá ít ruộng đất',
      'Cường điệu hóa đấu tranh giai cấp',
      'Không có sự chỉ đạo của Đảng',
      'Thực hiện quá chậm'
    ],
    correctAnswer: 1,
    explanation: 'Sai lầm chính trong cải cách ruộng đất là do chủ quan, giáo điều, dẫn đến cường điệu hóa đấu tranh giai cấp, quy kết oan sai nhiều người. Đảng đã công khai kiểm điểm và sửa sai kiên quyết.',
    category: 'north',
    difficulty: 'hard'
  },

  // === SOUTH VIETNAM QUESTIONS ===
  {
    id: 11,
    question: 'Ai là người đứng đầu chính quyền tay sai ở miền Nam được Mỹ dựng lên?',
    options: [
      'Bảo Đại',
      'Ngô Đình Diệm',
      'Nguyễn Văn Thiệu',
      'Trần Văn Hương'
    ],
    correctAnswer: 1,
    explanation: 'Ngô Đình Diệm được Mỹ dựng lên làm Tổng thống "Việt Nam Cộng hòa" (1955). Chính quyền này thực hiện các chính sách đàn áp dã man nhân dân miền Nam.',
    category: 'south',
    difficulty: 'easy'
  },
  {
    id: 12,
    question: 'Quốc sách khủng bố của chính quyền Ngô Đình Diệm được gọi là gì?',
    options: [
      '"Bình định nông thôn"',
      '"Tố cộng, diệt cộng"',
      '"Ấp chiến lược"',
      '"Chiêu hồi"'
    ],
    correctAnswer: 1,
    explanation: 'Chính quyền Ngô Đình Diệm thực hiện quốc sách "tố cộng, diệt cộng" nhằm tiêu diệt những người yêu nước và lực lượng cách mạng ở miền Nam.',
    category: 'south',
    difficulty: 'easy'
  },
  {
    id: 13,
    question: 'Luật 10/59 sử dụng phương tiện gì để hành quyết người yêu nước?',
    options: [
      'Chỉ súng đạn',
      'Chỉ máy chém',
      'Cả súng đạn và máy chém',
      'Treo cổ'
    ],
    correctAnswer: 2,
    explanation: 'Luật 10/59 sử dụng Tòa án quân sự đặc biệt để xét xử và bắn giết những người yêu nước bằng cả súng đạn và máy chém - một đạo luật khủng bố man rợ.',
    category: 'south',
    difficulty: 'medium'
  },
  {
    id: 14,
    question: 'Nghị quyết 15 của Đảng được thông qua vào thời điểm nào?',
    options: [
      'Tháng 1/1958',
      'Tháng 1/1959',
      'Tháng 1/1960',
      'Tháng 5/1959'
    ],
    correctAnswer: 1,
    explanation: 'Tháng 1/1959, Hội nghị Trung ương 15 (mở rộng) ra nghị quyết xác định con đường cứu nước là con đường cách mạng, chủ trương sử dụng bạo lực cách mạng.',
    category: 'south',
    difficulty: 'medium'
  },
  {
    id: 15,
    question: 'Nghị quyết 15 xác định phương thức đấu tranh ở miền Nam là gì?',
    options: [
      'Chỉ đấu tranh chính trị',
      'Chỉ đấu tranh vũ trang',
      'Kết hợp đấu tranh chính trị và vũ trang',
      'Đàm phán hòa bình'
    ],
    correctAnswer: 2,
    explanation: 'Nghị quyết 15 chủ trương sử dụng bạo lực cách mạng với sự kết hợp của hai lực lượng chính trị và vũ trang, tiến tới khởi nghĩa vũ trang giành chính quyền.',
    category: 'south',
    difficulty: 'medium'
  },
  {
    id: 16,
    question: 'Phong trào Đồng Khởi bắt đầu từ tỉnh nào?',
    options: [
      'Long An',
      'Bến Tre',
      'Tây Ninh',
      'Bình Dương'
    ],
    correctAnswer: 1,
    explanation: 'Phong trào Đồng Khởi bắt đầu từ Bến Tre vào ngày 17/1/1960, sau đó lan rộng khắp miền Nam như một ngọn lửa cách mạng.',
    category: 'south',
    difficulty: 'easy'
  },
  {
    id: 17,
    question: 'Phong trào Đồng Khởi ở Bến Tre bùng nổ vào ngày nào?',
    options: [
      '17/1/1959',
      '17/1/1960',
      '20/12/1959',
      '20/12/1960'
    ],
    correctAnswer: 1,
    explanation: 'Phong trào Đồng Khởi ở Bến Tre bùng nổ vào ngày 17/1/1960, mở đầu cho cao trào cách mạng lan rộng khắp miền Nam.',
    category: 'south',
    difficulty: 'medium'
  },
  {
    id: 18,
    question: 'Đến cuối năm 1960, nhân dân miền Nam đã lập chính quyền tự quản tại bao nhiêu xã?',
    options: [
      '983/2.627 xã',
      '1.183/2.627 xã',
      '1.383/2.627 xã',
      '1.583/2.627 xã'
    ],
    correctAnswer: 2,
    explanation: 'Đến cuối năm 1960, nhân dân đã lập chính quyền tự quản tại 1.383/2.627 xã, cho thấy sự lan rộng và thắng lợi to lớn của phong trào Đồng Khởi.',
    category: 'south',
    difficulty: 'hard'
  },
  {
    id: 19,
    question: 'Mặt trận Dân tộc giải phóng miền Nam Việt Nam được thành lập ngày nào?',
    options: [
      '17/1/1960',
      '2/9/1960',
      '20/12/1960',
      '1/1/1961'
    ],
    correctAnswer: 2,
    explanation: 'Mặt trận Dân tộc giải phóng miền Nam Việt Nam được thành lập ngày 20/12/1960, là kết quả của thắng lợi phong trào Đồng Khởi.',
    category: 'south',
    difficulty: 'medium'
  },
  {
    id: 20,
    question: 'Ý nghĩa quan trọng nhất của phong trào Đồng Khởi là gì?',
    options: [
      'Tiêu diệt được nhiều địch',
      'Chuyển cách mạng từ thế giữ gìn lực lượng sang thế tiến công',
      'Giải phóng hoàn toàn miền Nam',
      'Buộc Mỹ rút quân'
    ],
    correctAnswer: 1,
    explanation: 'Thắng lợi của phong trào Đồng Khởi là bước nhảy vọt lịch sử, chuyển cách mạng miền Nam từ thế giữ gìn lực lượng sang thế tiến công chống chủ nghĩa thực dân mới của Mỹ.',
    category: 'south',
    difficulty: 'medium'
  }
];

// Helper function to get questions by category
export const getQuestionsByCategory = (category: 'north' | 'south' | 'general'): QuizQuestion[] => {
  return quizQuestions.filter(q => q.category === category);
};

// Helper function to get questions by difficulty
export const getQuestionsByDifficulty = (difficulty: 'easy' | 'medium' | 'hard'): QuizQuestion[] => {
  return quizQuestions.filter(q => q.difficulty === difficulty);
};

// Helper function to shuffle questions
export const shuffleQuestions = (questions: QuizQuestion[]): QuizQuestion[] => {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};


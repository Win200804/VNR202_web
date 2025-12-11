import { TimelineEvent, HistorySection } from '../types';

// ========================================
// TIMELINE EVENTS (1954-1960)
// ========================================
export const timelineEvents: TimelineEvent[] = [
  {
    id: 'geneva-1954',
    year: 1954,
    month: 7,
    day: 21,
    title: 'Hiệp định Giơnevơ được ký kết',
    description: 'Hiệp định Giơnevơ chấm dứt chiến tranh Đông Dương. Việt Nam tạm thời bị chia cắt tại vĩ tuyến 17, với miền Bắc do Việt Nam Dân chủ Cộng hòa quản lý và miền Nam dưới quyền đối phương.',
    category: 'general',
    importance: 'high'
  },
  {
    id: 'hanoi-liberation-1954',
    year: 1954,
    month: 10,
    day: 10,
    title: 'Giải phóng Thủ đô Hà Nội',
    description: 'Quân đội nhân dân Việt Nam tiến vào tiếp quản Thủ đô Hà Nội sau khi thực dân Pháp rút lui, đánh dấu sự hoàn thành giải phóng miền Bắc.',
    category: 'north',
    importance: 'high'
  },
  {
    id: 'land-reform-1954',
    year: 1954,
    month: 12,
    title: 'Đẩy mạnh cải cách ruộng đất',
    description: 'Miền Bắc tiếp tục thực hiện cải cách ruộng đất, xóa bỏ chế độ chiếm hữu ruộng đất phong kiến. Hơn 2 triệu hộ nông dân được chia hơn 810.000 ha ruộng đất.',
    category: 'north',
    importance: 'high'
  },
  {
    id: 'diem-regime-1955',
    year: 1955,
    month: 10,
    title: 'Ngô Đình Diệm lên nắm quyền',
    description: 'Ngô Đình Diệm phế truất Bảo Đại, tuyên bố thành lập "Việt Nam Cộng hòa". Mỹ thay chân Pháp, biến miền Nam thành thuộc địa kiểu mới.',
    category: 'south',
    importance: 'high'
  },
  {
    id: 'to-cong-1955',
    year: 1955,
    title: 'Quốc sách "Tố cộng, diệt cộng"',
    description: 'Chính quyền Ngô Đình Diệm ban hành quốc sách "tố cộng, diệt cộng", đàn áp dã man những người yêu nước và cách mạng miền Nam.',
    category: 'south',
    importance: 'high'
  },
  {
    id: 'economy-restore-1957',
    year: 1957,
    title: 'Hoàn thành khôi phục kinh tế miền Bắc',
    description: 'Nông nghiệp miền Bắc cơ bản đạt năng suất của năm cao nhất dưới thời Pháp thuộc (1939). Công nghiệp, tiểu thủ công nghiệp và giao thông vận tải cũng hoàn thành khôi phục.',
    category: 'north',
    importance: 'high'
  },
  {
    id: 'three-year-plan-1958',
    year: 1958,
    title: 'Bắt đầu Kế hoạch ba năm (1958-1960)',
    description: 'Miền Bắc thực hiện Kế hoạch ba năm nhằm phát triển kinh tế, văn hóa và cải tạo xã hội chủ nghĩa đối với kinh tế cá thể và tư bản tư doanh.',
    category: 'north',
    importance: 'medium'
  },
  {
    id: 'resolution-15-1959',
    year: 1959,
    month: 1,
    title: 'Nghị quyết 15 - Bước ngoặt chiến lược',
    description: 'Hội nghị Trung ương 15 (mở rộng) xác định con đường cứu nước là con đường cách mạng. Đảng chủ trương sử dụng bạo lực cách mạng với sự kết hợp của hai lực lượng chính trị và vũ trang.',
    category: 'south',
    importance: 'high'
  },
  {
    id: 'law-10-59',
    year: 1959,
    month: 5,
    title: 'Luật 10/59 - Đạo luật khủng bố',
    description: 'Chính quyền Ngô Đình Diệm ban hành Luật 10/59, sử dụng Tòa án quân sự đặc biệt để xét xử và bắn giết những người yêu nước bằng súng đạn và máy chém.',
    category: 'south',
    importance: 'high'
  },
  {
    id: 'ho-chi-minh-trail-1959',
    year: 1959,
    month: 5,
    title: 'Mở Đường Hồ Chí Minh',
    description: 'Miền Bắc mở Đường Hồ Chí Minh trên bộ (Đoàn 559) và trên biển (Đoàn 759) để chi viện cho cách mạng miền Nam.',
    category: 'general',
    importance: 'high'
  },
  {
    id: 'dong-khoi-1960',
    year: 1960,
    month: 1,
    day: 17,
    title: 'Phong trào Đồng Khởi bùng nổ',
    description: 'Phong trào Đồng Khởi bắt đầu từ Bến Tre, lan rộng khắp miền Nam, làm tê liệt và tan rã hệ thống kìm kẹp của địch ở cơ sở. Đến cuối năm 1960, nhân dân đã lập chính quyền tự quản tại 1.383/2.627 xã.',
    category: 'south',
    importance: 'high'
  },
  {
    id: 'nlf-1960',
    year: 1960,
    month: 12,
    day: 20,
    title: 'Thành lập Mặt trận DTGPMN',
    description: 'Mặt trận Dân tộc giải phóng miền Nam Việt Nam được thành lập, đánh dấu bước nhảy vọt lịch sử của cách mạng miền Nam.',
    category: 'south',
    importance: 'high'
  }
];

// ========================================
// NORTH VIETNAM CONTENT
// ========================================
export const northVietnamContent: HistorySection[] = [
  {
    id: 'context',
    title: 'Bối cảnh lịch sử',
    content: [
      'Sau Hiệp định Giơnevơ (7/1954), đất nước Việt Nam bị chia cắt thành hai miền với hai chế độ chính trị và xã hội khác nhau.',
      'Miền Bắc được hoàn toàn giải phóng, phát triển theo con đường xã hội chủ nghĩa. Đây là vùng đất tự do, nơi nhân dân làm chủ vận mệnh của mình.',
      'Bối cảnh quốc tế phức tạp, với sự lớn mạnh của hệ thống xã hội chủ nghĩa và sự xuất hiện của đế quốc Mỹ hùng mạnh cùng thời kỳ Chiến tranh Lạnh căng thẳng.',
      'Trong tình hình đó, miền Bắc được xác định là căn cứ địa hậu phương vững mạnh cho toàn bộ sự nghiệp cách mạng Việt Nam.'
    ],
    keyPoints: [
      'Miền Bắc hoàn toàn giải phóng sau Hiệp định Giơnevơ',
      'Phát triển theo con đường xã hội chủ nghĩa',
      'Trở thành hậu phương vững chắc cho cách mạng cả nước'
    ]
  },
  {
    id: 'economic-recovery',
    title: 'Khôi phục kinh tế (1954-1957)',
    subtitle: 'Hàn gắn vết thương chiến tranh',
    content: [
      'Sau chiến tranh, nhiệm vụ trọng tâm của miền Bắc là hàn gắn vết thương chiến tranh, phục hồi kinh tế quốc dân và ổn định đời sống nhân dân.',
      'Đảng chỉ đạo lấy khôi phục và phát triển sản xuất nông nghiệp làm trọng tâm, kết hợp chặt chẽ với cải cách ruộng đất.',
      'Đến năm 1957, nông nghiệp miền Bắc cơ bản đạt năng suất của năm cao nhất dưới thời Pháp thuộc (1939), đẩy lùi nạn đói.',
      'Công nghiệp, tiểu thủ công nghiệp và giao thông vận tải cũng hoàn thành việc khôi phục, tạo nền tảng cho bước phát triển tiếp theo.'
    ],
    statistics: [
      { value: '1957', label: 'Năm hoàn thành khôi phục', description: 'Nông nghiệp đạt mức năm 1939' },
      { value: '100%', label: 'Giao thông vận tải', description: 'Hoàn thành khôi phục' }
    ]
  },
  {
    id: 'land-reform',
    title: 'Cải cách ruộng đất',
    subtitle: 'Xóa bỏ chế độ phong kiến',
    content: [
      'Công cuộc giảm tô, giảm tức và cải cách ruộng đất đã xóa bỏ hoàn toàn chế độ chiếm hữu ruộng đất phong kiến ở miền Bắc.',
      'Hơn 2 triệu hộ nông dân lao động được chia hơn 810.000 ha ruộng đất, thực hiện khẩu hiệu "người cày có ruộng".',
      'Đây là cuộc cách mạng xã hội sâu sắc, giải phóng sức lao động của nông dân, tạo động lực to lớn cho phát triển nông nghiệp.'
    ],
    statistics: [
      { value: '2+ triệu', label: 'Hộ nông dân', description: 'Được chia ruộng đất' },
      { value: '810.000 ha', label: 'Ruộng đất', description: 'Được chia cho nông dân' }
    ],
    keyPoints: [
      'Xóa bỏ hoàn toàn chế độ chiếm hữu ruộng đất phong kiến',
      'Thực hiện "người cày có ruộng"',
      'Giải phóng sức lao động nông dân'
    ]
  },
  {
    id: 'land-reform-mistakes',
    title: 'Sai lầm và sửa sai',
    subtitle: 'Bài học kinh nghiệm quý báu',
    content: [
      'Trong quá trình cải cách ruộng đất, đã xảy ra một số sai lầm nghiêm trọng do chủ quan, giáo điều trong đánh giá tình hình.',
      'Sai lầm chủ yếu là cường điệu hóa đấu tranh giai cấp, dẫn đến quy kết oan sai nhiều người vô tội.',
      'Đảng đã công khai kiểm điểm, thẳng thắn tự phê bình trước nhân dân về những sai lầm mắc phải.',
      'Công tác sửa sai được tiến hành kiên quyết, minh oan cho những người bị oan sai, khôi phục danh dự và quyền lợi cho họ.',
      'Đây là bài học sâu sắc về việc vận dụng sáng tạo lý luận vào thực tiễn Việt Nam.'
    ],
    keyPoints: [
      'Đảng công khai tự phê bình',
      'Kiên quyết tiến hành sửa sai',
      'Rút ra bài học quý báu cho công tác lãnh đạo'
    ]
  },
  {
    id: 'three-year-plan',
    title: 'Kế hoạch ba năm (1958-1960)',
    subtitle: 'Quá độ lên Chủ nghĩa Xã hội',
    content: [
      'Miền Bắc thực hiện Kế hoạch ba năm nhằm phát triển kinh tế, văn hóa và cải tạo xã hội chủ nghĩa.',
      'Cải tạo xã hội chủ nghĩa được thực hiện đối với kinh tế cá thể và tư bản tư doanh.',
      'Đối với tư bản tư doanh, Đảng chủ trương cải tạo hòa bình, không tịch thu tư liệu sản xuất mà dùng chính sách chuộc lại thông qua hình thức công tư hợp doanh.',
      'Phương châm này thể hiện đường lối cải tạo nhân đạo, tránh xung đột không cần thiết trong xã hội.'
    ],
    keyPoints: [
      'Phát triển kinh tế, văn hóa',
      'Cải tạo xã hội chủ nghĩa hòa bình',
      'Hình thức công tư hợp doanh'
    ]
  },
  {
    id: 'result',
    title: 'Kết quả và ý nghĩa',
    content: [
      'Miền Bắc được củng cố vững chắc, từng bước tiến lên chủ nghĩa xã hội với những thành tựu quan trọng.',
      'Kinh tế phục hồi và phát triển, đời sống nhân dân được cải thiện rõ rệt.',
      'Miền Bắc trở thành hậu phương ổn định, vững mạnh đáp ứng yêu cầu của sự nghiệp cách mạng Việt Nam.',
      'Đây là nền tảng quan trọng để chi viện cho cuộc đấu tranh giải phóng miền Nam, thống nhất đất nước.'
    ],
    quotes: [
      {
        text: 'Miền Bắc là tầng móng vững chắc của ngôi nhà Việt Nam, chịu lực và cung cấp nguồn lực cho toàn bộ sự nghiệp cách mạng.',
        source: 'Ẩn dụ lịch sử'
      }
    ]
  }
];

// ========================================
// SOUTH VIETNAM CONTENT
// ========================================
export const southVietnamContent: HistorySection[] = [
  {
    id: 'context',
    title: 'Bối cảnh lịch sử',
    content: [
      'Sau Hiệp định Giơnevơ, miền Nam do chính quyền đối phương quản lý, trở thành thuộc địa kiểu mới của đế quốc Mỹ.',
      'Đế quốc Mỹ đã thay chân thực dân Pháp, biến miền Nam thành thuộc địa kiểu mới và căn cứ quân sự.',
      'Chính quyền tay sai Ngô Đình Diệm được Mỹ dựng lên, thực hiện các chính sách đàn áp dã man nhân dân.',
      'Mỹ trở thành kẻ thù trực tiếp và chính yếu của nhân dân Việt Nam trong giai đoạn này.'
    ],
    keyPoints: [
      'Mỹ thay Pháp xâm lược miền Nam',
      'Miền Nam thành thuộc địa kiểu mới',
      'Chính quyền Ngô Đình Diệm được dựng lên'
    ]
  },
  {
    id: 'suppression',
    title: 'Chính sách đàn áp của địch',
    subtitle: 'Khủng bố tàn bạo',
    content: [
      'Chính quyền Ngô Đình Diệm thực hiện quốc sách "tố cộng, diệt cộng" nhằm tiêu diệt lực lượng cách mạng.',
      'Các cuộc càn quét, bắt bớ, giam cầm và tra tấn diễn ra khắp nơi, gây ra biết bao đau thương cho nhân dân.',
      'Năm 1959, Luật 10/59 được ban hành - một đạo luật khủng bố man rợ.',
      'Luật này sử dụng Tòa án quân sự đặc biệt để xét xử và bắn giết những người yêu nước bằng cả súng đạn và máy chém.',
      'Mâu thuẫn trong xã hội miền Nam ngày càng gay gắt, nhân dân sục sôi căm thù.'
    ],
    keyPoints: [
      'Quốc sách "tố cộng, diệt cộng"',
      'Luật 10/59 - đạo luật khủng bố',
      'Tòa án quân sự đặc biệt và máy chém'
    ]
  },
  {
    id: 'initial-strategy',
    title: 'Chủ trương đấu tranh ban đầu',
    subtitle: 'Giữ gìn lực lượng',
    content: [
      'Từ tháng 7/1954, sau Hiệp định Giơnevơ, Đảng quyết định chuyển phương thức đấu tranh.',
      'Chuyển từ đấu tranh quân sự sang đấu tranh chính trị, phù hợp với tình hình mới.',
      'Mục tiêu là đòi đối phương thi hành Hiệp định Giơnevơ, tổ chức tổng tuyển cử thống nhất đất nước.',
      'Đồng thời kiên quyết chống lại chính quyền bù nhìn thân Mỹ, bảo vệ quyền lợi nhân dân.'
    ]
  },
  {
    id: 'resolution-15',
    title: 'Nghị quyết 15 - Bước ngoặt chiến lược',
    subtitle: 'Tháng 1/1959',
    content: [
      'Trước sự khủng bố tàn bạo của địch, mâu thuẫn trong xã hội miền Nam ngày càng gay gắt.',
      'Tháng 1/1959, Hội nghị Trung ương 15 (mở rộng) họp tại Hà Nội ra nghị quyết quan trọng.',
      'Nghị quyết xác định con đường cứu nước của nhân dân miền Nam là con đường cách mạng.',
      'Đảng chủ trương sử dụng bạo lực cách mạng với sự kết hợp chặt chẽ của hai lực lượng chính trị và vũ trang.',
      'Mục tiêu là tiến tới khởi nghĩa vũ trang giành chính quyền về tay nhân dân.',
      'Đây là bước ngoặt chiến lược, mở ra thời kỳ mới cho cách mạng miền Nam.'
    ],
    keyPoints: [
      'Con đường cứu nước là cách mạng',
      'Kết hợp đấu tranh chính trị và vũ trang',
      'Tiến tới khởi nghĩa vũ trang giành chính quyền'
    ]
  },
  {
    id: 'ho-chi-minh-trail',
    title: 'Đường Hồ Chí Minh',
    subtitle: 'Chi viện từ miền Bắc',
    content: [
      'Để chi viện cho cách mạng miền Nam, miền Bắc đã mở Đường Hồ Chí Minh từ năm 1959.',
      'Đường Hồ Chí Minh trên bộ do Đoàn 559 phụ trách, xuyên qua dãy Trường Sơn hiểm trở.',
      'Đường Hồ Chí Minh trên biển do Đoàn 759 đảm nhiệm, vượt biển Đông chi viện vũ khí.',
      'Đây là con đường huyền thoại, biểu tượng của ý chí thống nhất và tinh thần bất khuất của dân tộc Việt Nam.'
    ],
    statistics: [
      { value: '559', label: 'Đoàn 559', description: 'Đường Hồ Chí Minh trên bộ' },
      { value: '759', label: 'Đoàn 759', description: 'Đường Hồ Chí Minh trên biển' }
    ]
  },
  {
    id: 'dong-khoi',
    title: 'Phong trào Đồng Khởi',
    subtitle: 'Bước nhảy vọt lịch sử',
    content: [
      'Thực hiện Nghị quyết 15, phong trào Đồng Khởi bùng nổ mạnh mẽ.',
      'Tiêu biểu nhất là phong trào Đồng Khởi ở Bến Tre, bắt đầu từ ngày 17/1/1960.',
      'Nhân dân Bến Tre đã đứng lên với khẩu hiệu "Tay không cũng đánh giặc", mở đầu cho cao trào cách mạng.',
      'Phong trào lan rộng như vũ bão khắp miền Nam, làm tê liệt và tan rã hệ thống kìm kẹp của địch ở cơ sở.',
      'Đến cuối năm 1960, nhân dân đã lập chính quyền tự quản tại 1.383 trong tổng số 2.627 xã trên toàn miền Nam.',
      'Thắng lợi của Đồng Khởi đã chứng minh sức mạnh to lớn của nhân dân khi được giác ngộ và tổ chức.'
    ],
    statistics: [
      { value: '17/1/1960', label: 'Ngày Đồng Khởi', description: 'Bắt đầu từ Bến Tre' },
      { value: '1.383/2.627', label: 'Xã giành chính quyền', description: 'Đến cuối năm 1960' }
    ],
    keyPoints: [
      'Bắt đầu từ Bến Tre 17/1/1960',
      'Lan rộng khắp miền Nam',
      'Làm tan rã hệ thống kìm kẹp của địch'
    ]
  },
  {
    id: 'nlf-establishment',
    title: 'Thành lập Mặt trận DTGPMN',
    subtitle: '20/12/1960',
    content: [
      'Thắng lợi vang dội của phong trào Đồng Khởi đã tạo điều kiện cho một bước tiến quan trọng.',
      'Ngày 20/12/1960, Mặt trận Dân tộc giải phóng miền Nam Việt Nam chính thức được thành lập.',
      'Mặt trận là tổ chức chính trị đại diện cho khối đại đoàn kết toàn dân tộc ở miền Nam.',
      'Sự ra đời của Mặt trận đánh dấu bước phát triển mới về chất của phong trào cách mạng.'
    ],
    keyPoints: [
      'Thành lập 20/12/1960',
      'Đại diện khối đại đoàn kết dân tộc',
      'Bước phát triển mới về chất'
    ]
  },
  {
    id: 'significance',
    title: 'Ý nghĩa lịch sử',
    content: [
      'Thắng lợi của phong trào Đồng Khởi là bước nhảy vọt lịch sử, mang tính bước ngoặt.',
      'Cách mạng miền Nam đã chuyển từ thế giữ gìn lực lượng sang thế tiến công.',
      'Mở ra giai đoạn mới: tiến công chống chủ nghĩa thực dân mới của Mỹ.',
      'Đây là tiền đề quan trọng cho những thắng lợi vẻ vang của nhân dân ta trong những năm tiếp theo.'
    ],
    quotes: [
      {
        text: 'Miền Nam là tầng trên của ngôi nhà Việt Nam, nơi cuộc đấu tranh trực tiếp diễn ra, chuyển từ thế phòng thủ bí mật sang thế chủ động tấn công.',
        source: 'Ẩn dụ lịch sử'
      }
    ]
  }
];

// ========================================
// METAPHOR CONTENT
// ========================================
export const metaphorContent = {
  title: 'Ẩn dụ: Ngôi nhà hai tầng',
  description: 'Giai đoạn 1954-1960 giống như việc xây dựng một ngôi nhà hai tầng.',
  north: {
    role: 'Tầng móng vững chắc',
    explanation: 'Miền Bắc là nền tảng vững chắc, chịu lực và cung cấp nguồn lực cho toàn bộ sự nghiệp cách mạng.',
    tasks: [
      'Khôi phục kinh tế sau chiến tranh',
      'Xây dựng chủ nghĩa xã hội',
      'Làm hậu phương cho miền Nam'
    ]
  },
  south: {
    role: 'Tầng trên - nơi chiến đấu',
    explanation: 'Miền Nam là nơi cuộc đấu tranh trực tiếp diễn ra, chuyển từ thế phòng thủ sang tiến công.',
    tasks: [
      'Giữ gìn lực lượng cách mạng',
      'Đấu tranh chính trị và vũ trang',
      'Khởi nghĩa giành chính quyền'
    ]
  }
};


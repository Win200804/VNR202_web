import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllTimelineEvents } from '../services/historyService';

// ========================================
// TIMELINE PAGE - Historical Events
// ========================================

// Chi tiết mở rộng cho từng sự kiện - Dữ liệu lịch sử chính xác
const eventDetails: Record<string, {
  significance: string;
  context: string[];
  keyFacts?: string[];
  result?: string;
}> = {
  'geneva-1954': {
    significance: 'Đánh dấu sự kết thúc của cuộc kháng chiến chống Pháp và mở ra giai đoạn mới của cách mạng Việt Nam.',
    context: [
      'Sau chiến thắng Điện Biên Phủ (07/05/1954), Pháp buộc phải đàm phán hòa bình.',
      'Hội nghị Giơnevơ kéo dài từ 08/05/1954 đến 21/07/1954.',
      'Hiệp định quy định: ngừng bắn, tập kết quân đội hai bên về hai miền lấy vĩ tuyến 17 làm ranh giới tạm thời.',
      'Dự kiến tổng tuyển cử thống nhất đất nước vào tháng 7/1956, nhưng Mỹ-Diệm đã phá hoại điều khoản này.'
    ],
    keyFacts: [
      'Vĩ tuyến 17 (sông Bến Hải) là giới tuyến quân sự tạm thời',
      'Quy định tổng tuyển cử sau 2 năm (tháng 7/1956)',
      'Cấm đưa quân đội và vũ khí nước ngoài vào Việt Nam'
    ],
    result: 'Hiệp định Giơnevơ là thắng lợi to lớn của nhân dân ta, nhưng cũng đặt ra thách thức mới khi đất nước bị chia cắt.'
  },
  'hanoi-liberation-1954': {
    significance: 'Đánh dấu sự hoàn thành giải phóng miền Bắc và chấm dứt gần 100 năm đô hộ của thực dân Pháp tại Thủ đô.',
    context: [
      'Theo Hiệp định Giơnevơ, Pháp phải rút quân khỏi miền Bắc trong vòng 300 ngày.',
      'Quân đội nhân dân Việt Nam tiếp quản Hà Nội trong trật tự và kỷ luật.',
      'Hàng vạn người dân Hà Nội đổ ra đường đón chào bộ đội.',
      'Chủ tịch Hồ Chí Minh trở về Thủ đô sau 9 năm kháng chiến.'
    ],
    keyFacts: [
      'Đại đoàn 308 là đơn vị đầu tiên tiến vào Hà Nội',
      'Cờ đỏ sao vàng tung bay trên Cột cờ Hà Nội',
      'Ngày 10/10 trở thành Ngày Giải phóng Thủ đô'
    ],
    result: 'Miền Bắc hoàn toàn giải phóng, trở thành hậu phương vững chắc cho cách mạng cả nước.'
  },
  'land-reform-1954': {
    significance: 'Xóa bỏ chế độ chiếm hữu ruộng đất phong kiến, thực hiện khẩu hiệu "người cày có ruộng".',
    context: [
      'Cải cách ruộng đất bắt đầu từ năm 1953 và được đẩy mạnh sau năm 1954.',
      'Mục tiêu là xóa bỏ quan hệ sản xuất phong kiến, giải phóng nông dân.',
      'Đây là cuộc cách mạng xã hội sâu sắc ở nông thôn miền Bắc.',
      'Trong quá trình thực hiện đã có một số sai lầm, sau đó Đảng đã kiên quyết sửa sai.'
    ],
    keyFacts: [
      'Hơn 2 triệu hộ nông dân được chia ruộng đất',
      'Hơn 810.000 ha ruộng đất được chia cho nông dân',
      'Xóa bỏ hoàn toàn giai cấp địa chủ phong kiến'
    ],
    result: 'Nông dân được giải phóng, có ruộng đất cày cấy, tạo động lực to lớn cho phát triển nông nghiệp.'
  },
  'diem-regime-1955': {
    significance: 'Đánh dấu sự can thiệp sâu của Mỹ vào miền Nam, biến nơi đây thành thuộc địa kiểu mới.',
    context: [
      'Sau Hiệp định Giơnevơ, Mỹ nhanh chóng thay thế Pháp ở miền Nam.',
      'Ngô Đình Diệm được Mỹ đưa về nước và dựng lên làm Thủ tướng.',
      'Ngày 23/10/1955, Diệm tổ chức "trưng cầu dân ý" gian lận để phế truất Bảo Đại.',
      'Ngày 26/10/1955, Diệm tuyên bố thành lập "Việt Nam Cộng hòa" và tự xưng Tổng thống.'
    ],
    keyFacts: [
      'Mỹ viện trợ hàng tỷ đô la cho chính quyền Diệm',
      'Từ chối tổ chức tổng tuyển cử theo Hiệp định Giơnevơ',
      'Bắt đầu xây dựng bộ máy đàn áp quy mô lớn'
    ],
    result: 'Miền Nam trở thành thuộc địa kiểu mới của Mỹ, đế quốc Mỹ trở thành kẻ thù trực tiếp của nhân dân Việt Nam.'
  },
  'to-cong-1955': {
    significance: 'Chính sách khủng bố tàn bạo nhằm tiêu diệt lực lượng cách mạng và những người yêu nước ở miền Nam.',
    context: [
      'Ngay sau khi lên nắm quyền, Diệm ban hành quốc sách "tố cộng, diệt cộng".',
      'Chiến dịch đàn áp nhằm vào cán bộ, đảng viên và những người từng tham gia kháng chiến.',
      'Hàng vạn người bị bắt, giam cầm, tra tấn và sát hại.',
      'Các trại tập trung được lập ra khắp miền Nam.'
    ],
    keyFacts: [
      'Hàng chục nghìn người bị bắt và giam cầm',
      'Nhiều cuộc thảm sát đẫm máu diễn ra',
      'Hệ thống nhà tù, trại giam được mở rộng'
    ],
    result: 'Mâu thuẫn giữa nhân dân miền Nam với chế độ Mỹ-Diệm ngày càng gay gắt, tích tụ lực lượng cho phong trào đấu tranh.'
  },
  'economy-restore-1957': {
    significance: 'Đánh dấu miền Bắc vượt qua khó khăn sau chiến tranh, tạo nền tảng cho công cuộc xây dựng CNXH.',
    context: [
      'Sau 9 năm kháng chiến, kinh tế miền Bắc bị tàn phá nặng nề.',
      'Đảng chỉ đạo lấy khôi phục và phát triển nông nghiệp làm trọng tâm.',
      'Kết hợp khôi phục kinh tế với cải cách ruộng đất.',
      'Nhân dân hăng hái lao động sản xuất, hàn gắn vết thương chiến tranh.'
    ],
    keyFacts: [
      'Nông nghiệp đạt mức năng suất cao nhất thời Pháp thuộc (1939)',
      'Công nghiệp, tiểu thủ công nghiệp được khôi phục',
      'Giao thông vận tải hoàn thành sửa chữa, nâng cấp'
    ],
    result: 'Miền Bắc ổn định, đời sống nhân dân được cải thiện, sẵn sàng bước vào giai đoạn xây dựng CNXH.'
  },
  'three-year-plan-1958': {
    significance: 'Bước đầu cải tạo XHCN và phát triển kinh tế có kế hoạch ở miền Bắc.',
    context: [
      'Sau khi hoàn thành khôi phục kinh tế, miền Bắc bắt đầu xây dựng CNXH.',
      'Kế hoạch ba năm tập trung vào cải tạo XHCN đối với nông nghiệp, thủ công nghiệp và thương nghiệp.',
      'Đối với tư bản tư doanh, thực hiện cải tạo hòa bình bằng hình thức công tư hợp doanh.',
      'Phát triển văn hóa, giáo dục, y tế cho nhân dân.'
    ],
    keyFacts: [
      'Hợp tác hóa nông nghiệp được đẩy mạnh',
      'Cải tạo hòa bình đối với tư bản tư doanh',
      'Xây dựng các cơ sở công nghiệp quốc doanh'
    ],
    result: 'Quan hệ sản xuất XHCN từng bước được xác lập ở miền Bắc.'
  },
  'resolution-15-1959': {
    significance: 'Bước ngoặt chiến lược, mở ra thời kỳ mới cho cách mạng miền Nam - đấu tranh vũ trang.',
    context: [
      'Trước tình hình địch đàn áp dã man, yêu cầu bức thiết đặt ra cho cách mạng miền Nam.',
      'Tháng 1/1959, Hội nghị Trung ương 15 (mở rộng) họp tại Hà Nội.',
      'Nghị quyết xác định con đường cách mạng là con đường duy nhất đúng đắn.',
      'Chủ trương kết hợp đấu tranh chính trị với đấu tranh vũ trang, lấy nông thôn làm địa bàn chính.'
    ],
    keyFacts: [
      'Xác định Mỹ là kẻ thù trực tiếp của nhân dân Việt Nam',
      'Sử dụng bạo lực cách mạng là tất yếu',
      'Kết hợp đấu tranh chính trị và vũ trang',
      'Tiến tới khởi nghĩa vũ trang giành chính quyền'
    ],
    result: 'Nghị quyết 15 như luồng gió mới thổi bùng ngọn lửa cách mạng ở miền Nam.'
  },
  'law-10-59': {
    significance: 'Đạo luật khủng bố man rợ nhất của chế độ Mỹ-Diệm, đẩy mâu thuẫn xã hội đến đỉnh điểm.',
    context: [
      'Trước phong trào đấu tranh ngày càng lên cao, Diệm ban hành Luật 10/59.',
      'Luật cho phép thành lập Tòa án quân sự đặc biệt, xét xử trong 3 ngày.',
      'Sử dụng máy chém lưu động để hành quyết công khai nhằm khủng bố tinh thần nhân dân.',
      'Bất kỳ ai bị nghi là "cộng sản" đều có thể bị xử tử hình.'
    ],
    keyFacts: [
      'Tòa án quân sự đặc biệt không có quyền kháng cáo',
      'Máy chém lưu động đi khắp các tỉnh miền Nam',
      'Hàng nghìn người bị hành quyết không qua xét xử'
    ],
    result: 'Luật 10/59 càng làm bùng lên ngọn lửa căm thù, thúc đẩy nhân dân vùng lên đấu tranh.'
  },
  'ho-chi-minh-trail-1959': {
    significance: 'Con đường huyền thoại, biểu tượng của ý chí thống nhất đất nước và tinh thần bất khuất của dân tộc.',
    context: [
      'Để chi viện cho cách mạng miền Nam, Bộ Chính trị quyết định mở đường vận chuyển chiến lược.',
      'Ngày 19/05/1959, Đoàn 559 được thành lập, phụ trách đường bộ xuyên Trường Sơn.',
      'Đoàn 759 phụ trách đường biển, vận chuyển vũ khí bằng tàu không số.',
      'Hàng vạn bộ đội, thanh niên xung phong đã hy sinh để mở và bảo vệ con đường này.'
    ],
    keyFacts: [
      'Đoàn 559: Đường Hồ Chí Minh trên bộ (ngày thành lập: 19/05/1959)',
      'Đoàn 759: Đường Hồ Chí Minh trên biển',
      'Xuyên qua dãy Trường Sơn hùng vĩ',
      'Tổng chiều dài hơn 20.000 km đường'
    ],
    result: 'Đường Hồ Chí Minh trở thành huyết mạch chi viện sức người, sức của cho cách mạng miền Nam.'
  },
  'dong-khoi-1960': {
    significance: 'Bước nhảy vọt lịch sử, đánh dấu cách mạng miền Nam chuyển từ thế giữ gìn lực lượng sang thế tiến công.',
    context: [
      'Thực hiện Nghị quyết 15, phong trào vũ trang bùng nổ mạnh mẽ ở miền Nam.',
      'Khởi đầu từ Bến Tre với phương châm "Tay không cũng đánh giặc".',
      'Bà Nguyễn Thị Định lãnh đạo "đội quân tóc dài" nổi dậy.',
      'Phong trào lan nhanh như lửa cháy khắp các tỉnh Nam Bộ và Tây Nguyên.'
    ],
    keyFacts: [
      'Bắt đầu từ Mỏ Cày, Bến Tre ngày 17/01/1960',
      'Khẩu hiệu: "Tay không cũng đánh giặc"',
      'Đến cuối 1960: giành chính quyền ở 1.383/2.627 xã',
      'Làm tan rã hệ thống kìm kẹp của địch ở cơ sở'
    ],
    result: 'Đồng Khởi chứng minh sức mạnh vô địch của nhân dân khi được giác ngộ và tổ chức.'
  },
  'nlf-1960': {
    significance: 'Đánh dấu sự trưởng thành về chất của cách mạng miền Nam, có tổ chức chính trị đại diện hợp pháp.',
    context: [
      'Thắng lợi của phong trào Đồng Khởi tạo điều kiện thành lập mặt trận thống nhất.',
      'Ngày 20/12/1960, tại xã Tân Lập, huyện Châu Thành, tỉnh Tây Ninh.',
      'Đại hội đại biểu các giai cấp, tầng lớp, tôn giáo, dân tộc ở miền Nam.',
      'Thông qua Cương lĩnh và Tuyên ngôn của Mặt trận.'
    ],
    keyFacts: [
      'Tên đầy đủ: Mặt trận Dân tộc Giải phóng miền Nam Việt Nam',
      'Thành lập tại Tây Ninh ngày 20/12/1960',
      'Luật sư Nguyễn Hữu Thọ làm Chủ tịch',
      'Đại diện cho khối đại đoàn kết toàn dân tộc miền Nam'
    ],
    result: 'Mặt trận DTGPMN trở thành ngọn cờ tập hợp toàn dân đấu tranh giải phóng miền Nam, thống nhất đất nước.'
  }
};

// Format ngày theo dd/mm/yyyy
const formatDate = (day?: number, month?: number, year?: number): string => {
  if (day && month && year) {
    return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
  }
  if (month && year) {
    return `Tháng ${month}/${year}`;
  }
  return `Năm ${year}`;
};

const TimelinePage = () => {
  const events = getAllTimelineEvents();
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);

  // Nhóm events theo năm
  const years = [...new Set(events.map(e => e.year))].sort();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  // Category styling
  const getCategoryStyle = (category: string) => {
    switch (category) {
      case 'north':
        return { 
          bg: 'bg-red-accent', 
          bgLight: 'bg-red-accent/10',
          border: 'border-red-accent', 
          text: 'text-red-accent', 
          label: 'Miền Bắc'
        };
      case 'south':
        return { 
          bg: 'bg-gold-accent', 
          bgLight: 'bg-gold-accent/10',
          border: 'border-gold-accent', 
          text: 'text-gold-accent', 
          label: 'Miền Nam'
        };
      default:
        return { 
          bg: 'bg-sepia-dark', 
          bgLight: 'bg-sepia-dark/10',
          border: 'border-sepia-dark', 
          text: 'text-sepia-dark', 
          label: 'Chung'
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen py-12 px-4"
    >
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h1 
          variants={itemVariants}
          className="font-heading text-4xl md:text-5xl text-ink-brown mb-4"
        >
          Dòng Thời Gian Lịch Sử
        </motion.h1>
        <motion.p 
          variants={itemVariants}
          className="font-decorative text-xl text-sepia-dark italic mb-8"
        >
          Giai đoạn 1954 - 1960
        </motion.p>
        
        {/* Legend */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center gap-6 flex-wrap"
        >
          {[
            { color: 'bg-red-accent', label: 'Miền Bắc' },
            { color: 'bg-gold-accent', label: 'Miền Nam' },
            { color: 'bg-sepia-dark', label: 'Chung' }
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <div className={`w-3 h-3 ${item.color} rounded-full`} />
              <span className="font-body text-sm text-sepia-dark">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto">
        {years.map((year) => {
          const yearEvents = events.filter(e => e.year === year);
          
          return (
            <motion.div
              key={year}
              variants={itemVariants}
              className="mb-12"
            >
              {/* Year Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-accent/50" />
                <div className="px-6 py-2 bg-aged-paper border-2 border-gold-accent rounded-sm">
                  <span className="font-heading text-2xl font-bold text-ink-brown">{year}</span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-accent/50" />
              </div>

              {/* Events */}
              <div className="space-y-4">
                {yearEvents.map((event) => {
                  const style = getCategoryStyle(event.category);
                  const isExpanded = expandedEvent === event.id;
                  const details = eventDetails[event.id];

                  return (
                    <motion.div
                      key={event.id}
                      layout
                      className={`
                        relative border-l-4 ${style.border} ${style.bgLight}
                        rounded-r-sm overflow-hidden
                      `}
                    >
                      {/* Main Content */}
                      <div 
                        className="p-5 cursor-pointer"
                        onClick={() => setExpandedEvent(isExpanded ? null : event.id)}
                      >
                        {/* Header Row */}
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div className="flex items-center gap-3">
                            <span className={`
                              px-2 py-1 text-xs font-heading rounded-sm
                              ${style.bgLight} ${style.text} border ${style.border}
                            `}>
                              {style.label}
                            </span>
                            <span className="font-body text-sm text-sepia-dark/70">
                              {formatDate(event.day, event.month, event.year)}
                            </span>
                          </div>
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            className={`${style.text}`}
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </motion.div>
                        </div>

                        {/* Title */}
                        <h3 className={`font-heading text-xl ${style.text} mb-2`}>
                          {event.title}
                        </h3>

                        {/* Short Description */}
                        <p className="font-body text-sm text-sepia-dark leading-relaxed">
                          {event.description}
                        </p>
                      </div>

                      {/* Expanded Details */}
                      <AnimatePresence>
                        {isExpanded && details && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border-t border-vintage-border"
                          >
                            <div className="p-5 bg-paper-cream/50">
                              {/* Ý nghĩa */}
                              <div className="mb-5">
                                <h4 className={`font-heading text-base ${style.text} mb-2 flex items-center gap-2`}>
                                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                                  Ý nghĩa lịch sử
                                </h4>
                                <p className="font-body text-sm text-sepia-dark leading-relaxed pl-4">
                                  {details.significance}
                                </p>
                              </div>

                              {/* Bối cảnh */}
                              <div className="mb-5">
                                <h4 className={`font-heading text-base ${style.text} mb-2 flex items-center gap-2`}>
                                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                                  Bối cảnh & Diễn biến
                                </h4>
                                <ul className="space-y-2 pl-4">
                                  {details.context.map((item, i) => (
                                    <li key={i} className="font-body text-sm text-sepia-dark leading-relaxed flex items-start gap-2">
                                      <span className="text-gold-accent mt-1">▸</span>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Thông tin quan trọng */}
                              {details.keyFacts && (
                                <div className="mb-5">
                                  <h4 className={`font-heading text-base ${style.text} mb-2 flex items-center gap-2`}>
                                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                                    Thông tin quan trọng
                                  </h4>
                                  <div className="grid gap-2 pl-4">
                                    {details.keyFacts.map((fact, i) => (
                                      <div 
                                        key={i} 
                                        className="font-body text-sm text-sepia-dark bg-aged-paper px-3 py-2 rounded-sm border-l-2 border-gold-accent/50"
                                      >
                                        {fact}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Kết quả */}
                              {details.result && (
                                <div className={`p-4 ${style.bgLight} rounded-sm border ${style.border}`}>
                                  <h4 className={`font-heading text-sm ${style.text} mb-1`}>
                                    Kết quả & Tác động
                                  </h4>
                                  <p className="font-body text-sm text-sepia-dark italic">
                                    {details.result}
                                  </p>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Summary */}
      <motion.div 
        variants={itemVariants}
        className="max-w-4xl mx-auto mt-16"
      >
        <div className="vintage-card decorative-border">
          <h2 className="font-heading text-2xl text-center text-ink-brown mb-8">
            Tổng Kết Giai Đoạn 1954 - 1960
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-red-accent/5 border-l-4 border-red-accent rounded-r-sm">
              <h3 className="font-heading text-lg text-red-accent mb-3">Miền Bắc</h3>
              <ul className="space-y-2 font-body text-sm text-sepia-dark">
                <li>• Hoàn thành khôi phục kinh tế (1957)</li>
                <li>• Cải cách ruộng đất triệt để</li>
                <li>• Bắt đầu xây dựng CNXH</li>
                <li>• Trở thành hậu phương vững chắc</li>
              </ul>
            </div>
            
            <div className="p-6 bg-gold-accent/5 border-l-4 border-gold-accent rounded-r-sm">
              <h3 className="font-heading text-lg text-gold-accent mb-3">Miền Nam</h3>
              <ul className="space-y-2 font-body text-sm text-sepia-dark">
                <li>• Chống chính sách khủng bố Mỹ-Diệm</li>
                <li>• Nghị quyết 15 - Bước ngoặt (1/1959)</li>
                <li>• Phong trào Đồng Khởi (1/1960)</li>
                <li>• Mặt trận DTGPMN ra đời (12/1960)</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-4 bg-aged-paper border border-gold-accent/30 rounded-sm text-center">
            <p className="font-decorative text-sepia-dark italic">
              "Giai đoạn 1954-1960: Miền Bắc xây dựng nền móng vững chắc, miền Nam chuyển từ thế phòng ngự sang tiến công"
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TimelinePage;

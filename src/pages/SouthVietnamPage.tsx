import { motion } from 'framer-motion';
import { getSouthVietnamContent } from '../services/historyService';
import { HistorySection } from '../types';

// ========================================
// SOUTH VIETNAM PAGE - Content Page
// ========================================

const SouthVietnamPage = () => {
  const content = getSouthVietnamContent();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  // Render section content
  const renderSection = (section: HistorySection, index: number) => (
    <motion.section
      key={section.id}
      variants={itemVariants}
      className="mb-12"
    >
      <div className="vintage-card">
        {/* Section Header */}
        <div className="border-b border-gold-accent/30 pb-4 mb-6">
          <span className="text-red-accent font-heading text-sm">
            Phần {index + 1}
          </span>
          <h2 className="font-heading text-2xl md:text-3xl text-ink-brown mt-1">
            {section.title}
          </h2>
          {section.subtitle && (
            <p className="font-decorative text-lg text-sepia-dark italic mt-2">
              {section.subtitle}
            </p>
          )}
        </div>

        {/* Content Paragraphs */}
        <div className="space-y-4">
          {section.content.map((paragraph, pIndex) => (
            <p 
              key={pIndex} 
              className={`font-body text-base text-sepia-dark leading-relaxed ${pIndex === 0 ? 'drop-cap' : ''}`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Statistics */}
        {section.statistics && section.statistics.length > 0 && (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {section.statistics.map((stat, sIndex) => (
              <div 
                key={sIndex}
                className="p-4 bg-gold-accent/5 border-l-4 border-gold-accent rounded-sm"
              >
                <div className="font-heading text-2xl text-gold-accent font-bold">
                  {stat.value}
                </div>
                <div className="font-heading text-sm text-ink-brown mt-1">
                  {stat.label}
                </div>
                {stat.description && (
                  <div className="font-body text-xs text-sepia-dark/70 mt-1">
                    {stat.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Key Points */}
        {section.keyPoints && section.keyPoints.length > 0 && (
          <div className="mt-8 p-4 bg-aged-paper rounded-sm">
            <h4 className="font-heading text-sm text-red-accent uppercase tracking-wider mb-3">
              Điểm Chính
            </h4>
            <ul className="space-y-2">
              {section.keyPoints.map((point, kIndex) => (
                <li key={kIndex} className="flex items-start">
                  <span className="text-gold-accent mr-3 mt-1">▸</span>
                  <span className="font-body text-sm text-sepia-dark">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Quotes */}
        {section.quotes && section.quotes.length > 0 && (
          <div className="mt-8">
            {section.quotes.map((quote, qIndex) => (
              <blockquote key={qIndex} className="vintage-quote">
                {quote.text}
                {quote.source && (
                  <footer className="mt-2 font-heading text-sm text-red-accent not-italic">
                    — {quote.source}
                  </footer>
                )}
              </blockquote>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen py-12 px-4"
    >
      {/* Hero Header */}
      <header className="max-w-4xl mx-auto text-center mb-16">
        
        <motion.h1 
          variants={itemVariants}
          className="font-heading text-4xl md:text-5xl text-ink-brown mb-4"
        >
          Cách Mạng ở Miền Nam
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="font-decorative text-xl text-sepia-dark italic"
        >
          Từ giữ gìn lực lượng sang thế tiến công (1954 - 1960)
        </motion.p>

        {/* Summary Stats */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center gap-8 mt-8 flex-wrap"
        >
          <div className="text-center">
            <div className="font-heading text-3xl text-gold-accent font-bold">1959</div>
            <div className="font-body text-sm text-sepia-dark">Nghị quyết 15</div>
          </div>
          <div className="text-center">
            <div className="font-heading text-3xl text-gold-accent font-bold">17/1/1960</div>
            <div className="font-body text-sm text-sepia-dark">Đồng Khởi</div>
          </div>
          <div className="text-center">
            <div className="font-heading text-3xl text-gold-accent font-bold">1.383</div>
            <div className="font-body text-sm text-sepia-dark">Xã giành chính quyền</div>
          </div>
        </motion.div>
      </header>

      {/* Important Warning Box */}
      <motion.div 
        variants={itemVariants}
        className="max-w-4xl mx-auto mb-12"
      >
        <div className="p-6 bg-red-accent/10 border-2 border-red-accent rounded-sm">
          <div className="flex items-start gap-4">
            <div className="text-3xl">⚠️</div>
            <div>
              <h3 className="font-heading text-lg text-red-accent mb-2">
                Bối Cảnh Đặc Biệt
              </h3>
              <p className="font-body text-sm text-sepia-dark">
                Sau Hiệp định Giơnevơ, đế quốc Mỹ thay chân Pháp, biến miền Nam thành thuộc địa kiểu mới. 
                Chính quyền Ngô Đình Diệm với quốc sách "tố cộng, diệt cộng" và Luật 10/59 
                đã thực hiện các chính sách đàn áp dã man, tạo nên mâu thuẫn sâu sắc trong xã hội miền Nam.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto">
        {content.map((section, index) => renderSection(section, index))}
      </div>

      {/* Dong Khoi Highlight */}
      <motion.div 
        variants={itemVariants}
        className="max-w-4xl mx-auto my-12"
      >
        <div className="vintage-card decorative-border bg-gradient-to-br from-gold-accent/10 to-transparent">
          <h3 className="font-heading text-2xl text-center text-ink-brown mb-6">
            🔥 Phong Trào Đồng Khởi - Bước Nhảy Vọt Lịch Sử
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-16 h-16 mx-auto bg-gold-accent rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl text-paper-cream">📍</span>
              </div>
              <h4 className="font-heading text-lg text-gold-accent">Bến Tre</h4>
              <p className="font-body text-sm text-sepia-dark">Nơi khởi nguồn</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto bg-red-accent rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl text-paper-cream">📅</span>
              </div>
              <h4 className="font-heading text-lg text-red-accent">17/1/1960</h4>
              <p className="font-body text-sm text-sepia-dark">Ngày bùng nổ</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto bg-ink-brown rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl text-paper-cream">🏛️</span>
              </div>
              <h4 className="font-heading text-lg text-ink-brown">20/12/1960</h4>
              <p className="font-body text-sm text-sepia-dark">Mặt trận DTGPMN</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="font-decorative text-lg text-sepia-dark italic">
              "Tay không cũng đánh giặc" - Tinh thần Đồng Khởi Bến Tre
            </p>
          </div>
        </div>
      </motion.div>

      {/* Navigation */}
      <motion.div 
        variants={itemVariants}
        className="max-w-4xl mx-auto mt-12 flex justify-between items-center"
      >
        <a 
          href="/mien-bac" 
          className="vintage-btn-outline flex items-center gap-2"
        >
          <span>←</span>
          <span>Miền Bắc</span>
        </a>
        <a 
          href="/quiz" 
          className="vintage-btn flex items-center gap-2"
        >
          <span>Kiểm Tra Kiến Thức</span>
          <span>→</span>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default SouthVietnamPage;


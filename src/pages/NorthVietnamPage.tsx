import { motion } from 'framer-motion';
import { getNorthVietnamContent } from '../services/historyService';
import { HistorySection } from '../types';

// ========================================
// NORTH VIETNAM PAGE - Content Page
// ========================================

const NorthVietnamPage = () => {
  const content = getNorthVietnamContent();

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
          <span className="text-gold-accent font-heading text-sm">
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
                className="p-4 bg-red-accent/5 border-l-4 border-red-accent rounded-sm"
              >
                <div className="font-heading text-2xl text-red-accent font-bold">
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
            <h4 className="font-heading text-sm text-gold-accent uppercase tracking-wider mb-3">
              Điểm Chính
            </h4>
            <ul className="space-y-2">
              {section.keyPoints.map((point, kIndex) => (
                <li key={kIndex} className="flex items-start">
                  <span className="text-red-accent mr-3 mt-1">▸</span>
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
                  <footer className="mt-2 font-heading text-sm text-gold-accent not-italic">
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
          Cách Mạng ở Miền Bắc
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="font-decorative text-xl text-sepia-dark italic"
        >
          Khôi phục và xây dựng Chủ nghĩa Xã hội (1954 - 1960)
        </motion.p>

        {/* Summary Stats */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center gap-8 mt-8 flex-wrap"
        >
          <div className="text-center">
            <div className="font-heading text-3xl text-red-accent font-bold">1954</div>
            <div className="font-body text-sm text-sepia-dark">Giải phóng</div>
          </div>
          <div className="text-center">
            <div className="font-heading text-3xl text-red-accent font-bold">810.000</div>
            <div className="font-body text-sm text-sepia-dark">Ha ruộng đất</div>
          </div>
          <div className="text-center">
            <div className="font-heading text-3xl text-red-accent font-bold">2+ triệu</div>
            <div className="font-body text-sm text-sepia-dark">Hộ được chia đất</div>
          </div>
        </motion.div>
      </header>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto">
        {content.map((section, index) => renderSection(section, index))}
      </div>

      {/* Navigation */}
      <motion.div 
        variants={itemVariants}
        className="max-w-4xl mx-auto mt-12 flex justify-between items-center"
      >
        <a 
          href="/timeline" 
          className="vintage-btn-outline flex items-center gap-2"
        >
          <span>←</span>
          <span>Dòng thời gian</span>
        </a>
        <a 
          href="/mien-nam" 
          className="vintage-btn flex items-center gap-2"
        >
          <span>Miền Nam</span>
          <span>→</span>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default NorthVietnamPage;


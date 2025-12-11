import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ========================================
// AI CHATBOX COMPONENT - Placeholder
// ========================================

const AIChatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="chatbox-container">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="chatbox-window"
          >
            {/* Header */}
            <div className="p-4 bg-red-accent text-paper-cream border-b border-gold-accent">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gold-accent/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold">Trợ Lý AI</h3>
                    <p className="text-xs opacity-80">Hỏi đáp lịch sử</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-paper-cream/20 rounded transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto bg-paper-cream/50">
              {/* Welcome Message */}
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-8 h-8 bg-red-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-paper-cream" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z" />
                  </svg>
                </div>
                <div className="flex-1 bg-aged-paper p-3 rounded-sm border border-gold-accent/50">
                  <p className="font-body text-sm text-sepia-dark">
                    Xin chào! Tôi là trợ lý AI của trang web Lịch sử Đảng CSVN. 
                    Bạn có thể hỏi tôi về giai đoạn 1954-1960.
                  </p>
                </div>
              </div>

              {/* Placeholder Notice */}
              <div className="p-3 bg-gold-accent/10 border border-gold-accent rounded-sm">
                <p className="font-decorative text-xs text-sepia-dark italic text-center">
                  🚧 Tính năng AI đang được phát triển. Vui lòng quay lại sau!
                </p>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gold-accent bg-aged-paper">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Nhập câu hỏi của bạn..."
                  className="flex-1 px-3 py-2 bg-paper-cream border border-vintage-border rounded-sm
                           font-body text-sm text-sepia-dark placeholder:text-sepia-dark/50
                           focus:outline-none focus:ring-2 focus:ring-gold-accent focus:border-transparent"
                  disabled
                />
                <button
                  disabled
                  className="px-4 py-2 bg-red-accent/50 text-paper-cream rounded-sm
                           font-heading text-sm cursor-not-allowed"
                >
                  Gửi
                </button>
              </div>
              <p className="mt-2 text-xs text-sepia-dark/60 text-center">
                Nhấn Enter để gửi tin nhắn
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="chatbox-bubble"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={isOpen ? { rotate: 0 } : { rotate: 0 }}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </motion.button>
    </div>
  );
};

export default AIChatbox;


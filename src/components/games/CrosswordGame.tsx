import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  keywordClues, 
  KEYWORD,
  checkKeywordAnswer,
  checkFinalKeyword
} from '../../data/gameData';

// ========================================
// KEYWORD CROSSWORD GAME COMPONENT
// UI giống ô chữ truyền thống Việt Nam
// Click vào số hàng để mở popup câu hỏi
// ========================================

const CrosswordGame = () => {
  // State quản lý game
  const [correctAnswers, setCorrectAnswers] = useState<Record<string, string>>({});
  const [selectedClue, setSelectedClue] = useState<typeof keywordClues[0] | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [showError, setShowError] = useState(false);
  const [showKeywordModal, setShowKeywordModal] = useState(false);
  const [keywordInput, setKeywordInput] = useState('');
  const [keywordError, setKeywordError] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  // Tính toán số câu đã đúng
  const completedCount = Object.keys(correctAnswers).length;
  const totalClues = keywordClues.length;

  // Tính độ rộng tối đa của grid
  const maxLength = useMemo(() => 
    Math.max(...keywordClues.map(c => c.answer.length)),
    []
  );

  // Tính vị trí offset cho mỗi hàng để căn giữa cột keyword
  const getRowOffset = useCallback((clue: typeof keywordClues[0]) => {
    // Cột keyword cố định ở giữa (index 3)
    const keywordCol = 3;
    return keywordCol - clue.keywordIndex;
  }, []);

  // Mở popup câu hỏi
  const openCluePopup = useCallback((clue: typeof keywordClues[0]) => {
    if (correctAnswers[clue.id]) return; // Đã trả lời đúng rồi
    setSelectedClue(clue);
    setInputValue('');
    setShowError(false);
  }, [correctAnswers]);

  // Đóng popup
  const closePopup = useCallback(() => {
    setSelectedClue(null);
    setInputValue('');
    setShowError(false);
  }, []);

  // Kiểm tra đáp án hàng ngang
  const handleSubmitAnswer = useCallback(() => {
    if (!selectedClue) return;
    
    if (checkKeywordAnswer(selectedClue.id, inputValue)) {
      setCorrectAnswers(prev => ({
        ...prev,
        [selectedClue.id]: selectedClue.answer
      }));
      closePopup();
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 2000);
    }
  }, [selectedClue, inputValue, closePopup]);

  // Mở modal đoán từ khóa
  const openKeywordModal = useCallback(() => {
    setShowKeywordModal(true);
    setKeywordInput('');
    setKeywordError(false);
  }, []);

  // Đóng modal từ khóa
  const closeKeywordModal = useCallback(() => {
    setShowKeywordModal(false);
    setKeywordInput('');
    setKeywordError(false);
  }, []);

  // Kiểm tra từ khóa
  const handleSubmitKeyword = useCallback(() => {
    if (checkFinalKeyword(keywordInput)) {
      setIsWinner(true);
      closeKeywordModal();
      // Điền tất cả đáp án
      const allAnswers: Record<string, string> = {};
      keywordClues.forEach(clue => {
        allAnswers[clue.id] = clue.answer;
      });
      setCorrectAnswers(allAnswers);
    } else {
      setKeywordError(true);
      setTimeout(() => setKeywordError(false), 2000);
    }
  }, [keywordInput, closeKeywordModal]);

  // Reset game
  const resetGame = useCallback(() => {
    setCorrectAnswers({});
    setSelectedClue(null);
    setInputValue('');
    setShowError(false);
    setShowKeywordModal(false);
    setKeywordInput('');
    setKeywordError(false);
    setIsWinner(false);
  }, []);

  // Render một ô trong grid
  const renderCell = (clue: typeof keywordClues[0], charIndex: number, rowIndex: number) => {
    const char = correctAnswers[clue.id]?.[charIndex] || '';
    const isKeywordCell = charIndex === clue.keywordIndex;
    
    return (
      <div
        key={`${clue.id}-${charIndex}`}
        className={`
          w-9 h-9 border flex items-center justify-center
          font-heading text-base uppercase font-bold
          ${isKeywordCell 
            ? 'bg-yellow-200 border-yellow-500' 
            : 'bg-white border-gray-300'}
          ${char ? 'text-ink-brown' : 'text-gray-400'}
        `}
      >
        {char}
      </div>
    );
  };

  // Render một hàng trong grid
  const renderRow = (clue: typeof keywordClues[0], index: number) => {
    const offset = getRowOffset(clue);
    const isCompleted = !!correctAnswers[clue.id];
    
    return (
      <div key={clue.id} className="flex items-center gap-2 mb-1">
        {/* Số hàng - clickable */}
        <motion.button
          whileHover={!isCompleted ? { scale: 1.1 } : {}}
          whileTap={!isCompleted ? { scale: 0.95 } : {}}
          onClick={() => openCluePopup(clue)}
          disabled={isCompleted}
          className={`
            w-8 h-8 flex items-center justify-center
            font-heading text-lg font-bold
            ${isCompleted 
              ? 'bg-green-500 text-white cursor-default' 
              : 'bg-blue-500 text-white hover:bg-blue-600 cursor-pointer'}
            clip-path-arrow
          `}
          style={{
            clipPath: 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)'
          }}
        >
          {clue.number}
        </motion.button>

        {/* Các ô của hàng */}
        <div className="flex" style={{ marginLeft: `${offset * 36}px` }}>
          {Array.from({ length: clue.answer.length }).map((_, charIndex) => 
            renderCell(clue, charIndex, index)
          )}
        </div>
      </div>
    );
  };

  // Lấy từ khóa đã reveal
  const revealedKeyword = useMemo(() => {
    return keywordClues.map(clue => {
      if (correctAnswers[clue.id]) {
        return clue.answer[clue.keywordIndex];
      }
      return '';
    }).join('');
  }, [correctAnswers]);

  return (
    <div className="vintage-card">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-gold-accent/30">
        <h3 className="font-heading text-xl text-ink-brown">
          📝 Ô Chữ Lịch Sử
        </h3>
        <div className="flex gap-4 text-sm font-body">
          <span className="text-gold-accent">
            ✓ {completedCount} / {totalClues} từ
          </span>
        </div>
      </div>

      {/* Instructions */}
      <p className="font-body text-sm text-sepia-dark/80 mb-6">
        Nhấp vào số thứ tự để xem câu hỏi và điền đáp án. Tìm ra <strong>từ khóa</strong> trong cột màu vàng!
      </p>

      {!isWinner ? (
        <>
          {/* Grid ô chữ */}
          <div className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border-2 border-green-200 mb-6 overflow-x-auto">
            <div className="min-w-fit">
              {keywordClues.map((clue, index) => renderRow(clue, index))}
            </div>
            
            {/* Decorations */}
            <div className="flex justify-end mt-4">
              <div className="text-4xl opacity-30">🌿</div>
            </div>
          </div>

          {/* Nút đoán từ khóa */}
          <div className="text-center mb-6">
            <button
              onClick={openKeywordModal}
              className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-ink-brown font-heading text-lg rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              🔑 Đoán Từ Khóa
            </button>
            <p className="text-sm text-sepia-dark/60 mt-2">
              (Có thể đoán trước khi giải hết các hàng ngang)
            </p>
          </div>
        </>
      ) : (
        /* Victory Screen */
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8"
        >
          <div className="text-6xl mb-4">🎊</div>
          <h4 className="font-heading text-2xl text-gold-accent mb-4">
            Chúc Mừng!
          </h4>
          <p className="font-body text-sepia-dark mb-4">
            Bạn đã tìm ra từ khóa:
          </p>
          <div className="flex justify-center gap-1 mb-6">
            {KEYWORD.split('').map((char, i) => (
              <motion.div
                key={i}
                initial={{ rotateY: 180, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="w-12 h-12 bg-yellow-300 border-2 border-yellow-600 flex items-center justify-center font-heading text-2xl uppercase font-bold text-ink-brown"
              >
                {char}
              </motion.div>
            ))}
          </div>
          <p className="font-heading text-xl text-red-accent mb-6">
            ĐỒNG KHỞI - Phong trào nổi dậy năm 1960
          </p>
          <button onClick={resetGame} className="vintage-btn">
            Chơi Lại
          </button>
        </motion.div>
      )}

      {/* Progress */}
      {!isWinner && (
        <div className="mt-6 pt-4 border-t border-gold-accent/30">
          <div className="flex justify-between items-center mb-2">
            <span className="font-body text-sm text-sepia-dark">
              Tiến độ: {completedCount} / {totalClues} hàng ngang
            </span>
            <button
              onClick={resetGame}
              className="text-sm text-red-accent hover:underline"
            >
              Làm lại
            </button>
          </div>
          <div className="h-2 bg-aged-paper border border-vintage-border rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gold-accent"
              initial={{ width: 0 }}
              animate={{ width: `${(completedCount / totalClues) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Popup câu hỏi hàng ngang */}
      <AnimatePresence>
        {selectedClue && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={closePopup}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-aged-paper rounded-lg shadow-2xl max-w-md w-full p-6 border-2 border-gold-accent"
            >
              {/* Header popup */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center font-heading text-xl font-bold rounded"
                    style={{ clipPath: 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)' }}
                  >
                    {selectedClue.number}
                  </span>
                  <span className="font-heading text-lg text-ink-brown">
                    Hàng ngang {selectedClue.number}
                  </span>
                </div>
                <button
                  onClick={closePopup}
                  className="text-2xl text-sepia-dark/60 hover:text-red-accent"
                >
                  ×
                </button>
              </div>

              {/* Câu hỏi */}
              <p className="font-body text-sepia-dark mb-4 text-lg">
                {selectedClue.clue}
              </p>

              {/* Gợi ý số chữ */}
              <p className="text-sm text-gold-accent mb-4">
                Đáp án có {selectedClue.answer.length} chữ cái
              </p>

              {/* Input đáp án */}
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value.toUpperCase())}
                  onKeyDown={(e) => e.key === 'Enter' && handleSubmitAnswer()}
                  placeholder="Nhập đáp án..."
                  autoFocus
                  className={`
                    flex-1 px-4 py-3 border-2 rounded-lg font-heading text-lg uppercase
                    ${showError ? 'border-red-500 bg-red-50' : 'border-vintage-border'}
                    focus:outline-none focus:border-gold-accent
                  `}
                  maxLength={selectedClue.answer.length + 2}
                />
                <button
                  onClick={handleSubmitAnswer}
                  className="px-6 py-3 bg-gold-accent text-ink-brown font-heading rounded-lg hover:bg-gold-accent/80 transition-colors"
                >
                  Trả lời
                </button>
              </div>

              {/* Thông báo lỗi */}
              <AnimatePresence>
                {showError && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-500 text-center font-body"
                  >
                    ❌ Sai rồi! Hãy thử lại.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal đoán từ khóa */}
      <AnimatePresence>
        {showKeywordModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={closeKeywordModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-b from-yellow-50 to-yellow-100 rounded-lg shadow-2xl max-w-md w-full p-6 border-2 border-yellow-500"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-heading text-xl text-ink-brown flex items-center gap-2">
                  🔑 Đoán Từ Khóa
                </h4>
                <button
                  onClick={closeKeywordModal}
                  className="text-2xl text-sepia-dark/60 hover:text-red-accent"
                >
                  ×
                </button>
              </div>

              {/* Mô tả */}
              <p className="font-body text-sepia-dark mb-4">
                Từ khóa có <strong>{KEYWORD.length} chữ cái</strong> trong cột màu vàng.
              </p>

              {/* Hiển thị các chữ đã biết */}
              <div className="flex justify-center gap-1 mb-4">
                {KEYWORD.split('').map((_, i) => {
                  const clue = keywordClues[i];
                  const revealed = correctAnswers[clue.id]?.[clue.keywordIndex] || '';
                  return (
                    <div
                      key={i}
                      className={`
                        w-10 h-10 border-2 flex items-center justify-center
                        font-heading text-lg uppercase font-bold
                        ${revealed 
                          ? 'bg-yellow-300 border-yellow-600 text-ink-brown' 
                          : 'bg-yellow-100 border-yellow-400 text-yellow-600'}
                      `}
                    >
                      {revealed || '?'}
                    </div>
                  );
                })}
              </div>

              {/* Input từ khóa */}
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  value={keywordInput}
                  onChange={(e) => setKeywordInput(e.target.value.toUpperCase())}
                  onKeyDown={(e) => e.key === 'Enter' && handleSubmitKeyword()}
                  placeholder="Nhập từ khóa..."
                  autoFocus
                  className={`
                    flex-1 px-4 py-3 border-2 rounded-lg font-heading text-lg uppercase text-center
                    ${keywordError ? 'border-red-500 bg-red-50' : 'border-yellow-400'}
                    focus:outline-none focus:border-yellow-600
                  `}
                  maxLength={KEYWORD.length + 2}
                />
                <button
                  onClick={handleSubmitKeyword}
                  className="px-6 py-3 bg-yellow-500 text-ink-brown font-heading rounded-lg hover:bg-yellow-400 transition-colors"
                >
                  Đoán
                </button>
              </div>

              {/* Thông báo lỗi */}
              <AnimatePresence>
                {keywordError && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-500 text-center font-body"
                  >
                    ❌ Sai rồi! Từ khóa không đúng.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CrosswordGame;

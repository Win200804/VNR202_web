import { motion, AnimatePresence } from 'framer-motion';
import { useMatchingGame } from '../../hooks/useGame';

// ========================================
// MATCHING GAME COMPONENT - PAIR SELECTION GAMEPLAY
// Gameplay: Chọn 1 sự kiện + 1 thời gian để ghép cặp
// ========================================

const MatchingGame = () => {
  // Lấy state và actions từ hook
  const {
    eventCards,
    matchCards,
    selectedEvent,
    selectedMatch,
    matchedPairs,
    attempts,
    isComplete,
    score,
    highScore,
    formattedTime,
    feedback,
    selectEvent,
    selectMatch,
    resetGame
  } = useMatchingGame(8);

  return (
    <div className="vintage-card">
      {/* Header - Tiêu đề và thông tin */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-gold-accent/30">
        <h3 className="font-heading text-xl text-ink-brown">
          🎯 Ghép Đôi Sự Kiện
        </h3>
        <div className="flex gap-4 text-sm font-body">
          <span className="text-sepia-dark">⏱️ {formattedTime}</span>
          <span className="text-sepia-dark">🎲 {attempts} lần thử</span>
          <span className="text-gold-accent">🏆 {highScore} điểm cao</span>
        </div>
      </div>

      {/* Instructions - Hướng dẫn */}
      <p className="font-body text-sm text-sepia-dark/80 mb-6">
        Chọn 1 sự kiện (cột trái) và 1 thời gian/thông tin (cột phải) để ghép cặp. 
        Các thẻ đã được xáo trộn ngẫu nhiên.
      </p>

      {/* Game Area */}
      {!isComplete ? (
        <div className="grid grid-cols-2 gap-6">
          {/* Cột trái - Sự kiện */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm text-ink-brown/70 text-center mb-4 uppercase tracking-wide">
              📜 Sự kiện
            </h4>
            {eventCards.map((card) => (
              <motion.button
                key={card.id}
                // Animation khi hover và click
                whileHover={!card.isMatched && !feedback ? { scale: 1.02, x: 5 } : {}}
                whileTap={!card.isMatched && !feedback ? { scale: 0.98 } : {}}
                // Xử lý click chọn thẻ event
                onClick={() => selectEvent(card)}
                aria-label={`Sự kiện: ${card.content}`}
                disabled={card.isMatched}
                className={`
                  matching-card min-h-[70px] w-full flex items-center justify-center text-center
                  cursor-pointer transition-all duration-300 relative
                  ${card.isMatched 
                    ? 'bg-emerald-100 border-emerald-400 cursor-default opacity-60' 
                    : ''}
                  ${selectedEvent?.id === card.id && !feedback
                    ? 'border-2 border-gold-accent bg-gold-accent/20 shadow-lg' 
                    : ''}
                  ${selectedEvent?.id === card.id && feedback === 'correct'
                    ? 'border-2 border-emerald-500 bg-emerald-100' 
                    : ''}
                  ${selectedEvent?.id === card.id && feedback === 'wrong'
                    ? 'border-2 border-red-500 bg-red-100 animate-pulse' 
                    : ''}
                `}
              >
                <span className="font-body text-sm leading-tight text-ink-brown px-2">
                  {card.content}
                </span>
                {/* Hiển thị dấu tick khi đã matched */}
                {card.isMatched && (
                  <span className="absolute top-1 right-1 text-emerald-500 text-lg">✓</span>
                )}
              </motion.button>
            ))}
          </div>

          {/* Cột phải - Thời gian/Thông tin */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm text-ink-brown/70 text-center mb-4 uppercase tracking-wide">
              📅 Thời gian / Thông tin
            </h4>
            {matchCards.map((card) => (
              <motion.button
                key={card.id}
                // Animation khi hover và click
                whileHover={!card.isMatched && !feedback ? { scale: 1.02, x: -5 } : {}}
                whileTap={!card.isMatched && !feedback ? { scale: 0.98 } : {}}
                // Xử lý click chọn thẻ match
                onClick={() => selectMatch(card)}
                aria-label={`Thời gian: ${card.content}`}
                disabled={card.isMatched}
                className={`
                  matching-card min-h-[70px] w-full flex items-center justify-center text-center
                  cursor-pointer transition-all duration-300 relative
                  ${card.isMatched 
                    ? 'bg-emerald-100 border-emerald-400 cursor-default opacity-60' 
                    : ''}
                  ${selectedMatch?.id === card.id && !feedback
                    ? 'border-2 border-red-accent bg-red-accent/10 shadow-lg' 
                    : ''}
                  ${selectedMatch?.id === card.id && feedback === 'correct'
                    ? 'border-2 border-emerald-500 bg-emerald-100' 
                    : ''}
                  ${selectedMatch?.id === card.id && feedback === 'wrong'
                    ? 'border-2 border-red-500 bg-red-100 animate-pulse' 
                    : ''}
                `}
              >
                <span className="font-heading text-sm leading-tight text-red-accent font-semibold px-2">
                  {card.content}
                </span>
                {/* Hiển thị dấu tick khi đã matched */}
                {card.isMatched && (
                  <span className="absolute top-1 right-1 text-emerald-500 text-lg">✓</span>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      ) : (
        /* Victory Screen - Màn hình chiến thắng */
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8"
        >
          <div className="text-6xl mb-4">🎉</div>
          <h4 className="font-heading text-2xl text-gold-accent mb-2">
            Hoàn Thành!
          </h4>
          <p className="font-body text-sepia-dark mb-4">
            Bạn đã hoàn thành trong {formattedTime} với {attempts} lần thử
          </p>
          <div className="font-heading text-3xl text-red-accent font-bold mb-6">
            {score} điểm
          </div>
          <button onClick={resetGame} className="vintage-btn">
            Chơi Lại
          </button>
        </motion.div>
      )}

      {/* Feedback Toast - Hiển thị phản hồi */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`
              fixed bottom-8 left-1/2 transform -translate-x-1/2
              px-6 py-3 rounded-lg shadow-lg font-heading text-lg
              ${feedback === 'correct' 
                ? 'bg-emerald-500 text-white' 
                : 'bg-red-500 text-white'}
            `}
          >
            {feedback === 'correct' ? '✓ Chính xác!' : '✗ Sai rồi, thử lại!'}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress - Thanh tiến độ */}
      {!isComplete && (
        <div className="mt-6 pt-4 border-t border-gold-accent/30">
          <div className="flex justify-between items-center mb-2">
            <span className="font-body text-sm text-sepia-dark">
              Tiến độ: {matchedPairs.length} / {eventCards.length} cặp
            </span>
            <button
              onClick={resetGame}
              className="text-sm text-red-accent hover:underline"
            >
              Chơi lại
            </button>
          </div>
          {/* Progress bar */}
          <div className="h-2 bg-aged-paper border border-vintage-border rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gold-accent"
              initial={{ width: 0 }}
              animate={{ width: `${(matchedPairs.length / eventCards.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      )}

      {/* Hint - Gợi ý cho người chơi */}
      {!isComplete && !selectedEvent && !selectedMatch && matchedPairs.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-center"
        >
          <p className="text-sm text-sepia-dark/60 italic">
            💡 Mẹo: Chọn 1 thẻ sự kiện bên trái, sau đó chọn thẻ thời gian tương ứng bên phải
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default MatchingGame;

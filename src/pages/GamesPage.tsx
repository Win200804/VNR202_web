import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MatchingGame from '../components/games/MatchingGame';
import CrosswordGame from '../components/games/CrosswordGame';

// ========================================
// GAMES PAGE - Interactive Games Hub
// ========================================

type GameType = 'matching' | 'crossword' | null;

const GamesPage = () => {
  const [selectedGame, setSelectedGame] = useState<GameType>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Game data
  const games = [
    {
      id: 'matching' as GameType,
      title: 'Ghép Đôi Sự Kiện',
      icon: '🎯',
      description: 'Ghép các sự kiện lịch sử với thời gian và thông tin tương ứng.',
      difficulty: 'Dễ - Trung bình',
      color: 'from-red-accent/20 to-transparent',
      borderColor: 'border-red-accent'
    },
    {
      id: 'crossword' as GameType,
      title: 'Ô Chữ Lịch Sử',
      icon: '📝',
      description: 'Điền các từ khóa quan trọng dựa trên gợi ý về sự kiện lịch sử.',
      difficulty: 'Trung bình',
      color: 'from-gold-accent/20 to-transparent',
      borderColor: 'border-gold-accent'
    }
  ];

  const renderGame = () => {
    switch (selectedGame) {
      case 'matching':
        return <MatchingGame />;
      case 'crossword':
        return <CrosswordGame />;
      default:
        return null;
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
      <header className="max-w-4xl mx-auto text-center mb-12">
        <motion.h1 
          variants={itemVariants}
          className="font-heading text-4xl md:text-5xl text-ink-brown mb-4"
        >
          Trò Chơi Học Tập
        </motion.h1>
        <motion.p 
          variants={itemVariants}
          className="font-decorative text-xl text-sepia-dark italic"
        >
          Học lịch sử qua các trò chơi thú vị
        </motion.p>
      </header>

      <div className="max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          {!selectedGame ? (
            /* Game Selection */
            <motion.div
              key="selection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Game Cards */}
              <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
                {games.map((game) => (
                  <motion.button
                    key={game.id}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedGame(game.id)}
                    aria-label={`Chơi ${game.title}`}
                    className={`
                      vintage-card cursor-pointer text-left
                      bg-gradient-to-br ${game.color}
                      border-l-4 ${game.borderColor}
                      hover:shadow-vintage-lg transition-all
                    `}
                  >
                    <div className="text-5xl mb-4">{game.icon}</div>
                    <h3 className="font-heading text-xl text-ink-brown mb-2">
                      {game.title}
                    </h3>
                    <p className="font-body text-sm text-sepia-dark/80 mb-4">
                      {game.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-body text-sepia-dark/60">
                        {game.difficulty}
                      </span>
                      <span className="text-red-accent font-heading text-sm">
                        Chơi ngay →
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Game Benefits */}
              <motion.div 
                variants={itemVariants}
                className="vintage-card text-center"
              >
                <h2 className="font-heading text-2xl text-ink-brown mb-6">
                  Lợi Ích Của Học Qua Trò Chơi
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-4">
                    <div className="text-3xl mb-3">🧠</div>
                    <h4 className="font-heading text-lg text-gold-accent mb-2">
                      Ghi Nhớ Tốt Hơn
                    </h4>
                    <p className="font-body text-sm text-sepia-dark/80">
                      Học qua tương tác giúp ghi nhớ lâu hơn đọc thụ động
                    </p>
                  </div>
                  <div className="p-4">
                    <div className="text-3xl mb-3">🎮</div>
                    <h4 className="font-heading text-lg text-red-accent mb-2">
                      Vui Vẻ Học Tập
                    </h4>
                    <p className="font-body text-sm text-sepia-dark/80">
                      Biến việc học thành trải nghiệm thú vị
                    </p>
                  </div>
                  <div className="p-4">
                    <div className="text-3xl mb-3">📊</div>
                    <h4 className="font-heading text-lg text-ink-brown mb-2">
                      Theo Dõi Tiến Độ
                    </h4>
                    <p className="font-body text-sm text-sepia-dark/80">
                      Xem điểm số và cải thiện qua từng lần chơi
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            /* Active Game */
            <motion.div
              key="game"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              {/* Back Button */}
              <button
                onClick={() => setSelectedGame(null)}
                className="mb-6 flex items-center gap-2 font-heading text-sepia-dark hover:text-red-accent transition-colors"
              >
                <span>←</span>
                <span>Quay lại danh sách trò chơi</span>
              </button>

              {/* Game Component */}
              {renderGame()}

              {/* Other Games */}
              <div className="mt-12">
                <h3 className="font-heading text-lg text-ink-brown mb-4 text-center">
                  Thử Trò Chơi Khác
                </h3>
                <div className="flex justify-center gap-4 flex-wrap">
                  {games
                    .filter(g => g.id !== selectedGame)
                    .map((game) => (
                      <button
                        key={game.id}
                        onClick={() => setSelectedGame(game.id)}
                        className={`
                          px-4 py-2 rounded-sm border-2 ${game.borderColor}
                          bg-gradient-to-r ${game.color}
                          font-heading text-sm text-ink-brown
                          hover:scale-105 transition-transform
                        `}
                      >
                        {game.icon} {game.title}
                      </button>
                    ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default GamesPage;


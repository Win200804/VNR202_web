import { motion } from 'framer-motion';
import { useMapGame } from '../../hooks/useGame';

// ========================================
// MAP GAME COMPONENT
// ========================================

const MapGame = () => {
  const {
    currentQuestionData,
    selectedRegion,
    isCorrect,
    showAnswer,
    score,
    isComplete,
    progress,
    highScore,
    selectRegion,
    nextQuestion,
    resetGame
  } = useMapGame(6);

  // Vietnam map regions (simplified SVG paths for demo)
  const regions = [
    { id: 'ha-noi', name: 'Hà Nội', x: 180, y: 120 },
    { id: 'quang-tri', name: 'Quảng Trị', x: 175, y: 285 },
    { id: 'nghe-an', name: 'Nghệ An', x: 160, y: 230 },
    { id: 'ben-tre', name: 'Bến Tre', x: 205, y: 530 },
    { id: 'sai-gon', name: 'Sài Gòn', x: 215, y: 490 },
    { id: 'tay-ninh', name: 'Tây Ninh', x: 190, y: 470 },
  ];

  const getRegionStyle = (regionId: string) => {
    if (!showAnswer) {
      return selectedRegion === regionId
        ? 'fill-gold-accent/50 stroke-gold-accent'
        : 'fill-aged-paper hover:fill-gold-accent/30 stroke-ink-brown';
    }
    
    if (regionId === currentQuestionData?.correctRegion) {
      return 'fill-green-300 stroke-green-600';
    }
    if (regionId === selectedRegion && !isCorrect) {
      return 'fill-red-300 stroke-red-600';
    }
    return 'fill-aged-paper/50 stroke-ink-brown/50';
  };

  return (
    <div className="vintage-card">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-gold-accent/30">
        <h3 className="font-heading text-xl text-ink-brown">
          🗺️ Tìm Vị Trí Lịch Sử
        </h3>
        <div className="flex gap-4 text-sm font-body">
          <span className="text-gold-accent">📍 {Math.round(progress)}%</span>
          <span className="text-sepia-dark">🏆 {highScore} cao nhất</span>
        </div>
      </div>

      {!isComplete ? (
        <>
          {/* Question */}
          <div className="mb-6 p-4 bg-red-accent/10 border-l-4 border-red-accent rounded-sm">
            <p className="font-heading text-lg text-ink-brown">
              {currentQuestionData?.question}
            </p>
            {currentQuestionData?.hint && !showAnswer && (
              <p className="font-decorative text-sm text-sepia-dark/70 italic mt-2">
                💡 Gợi ý: {currentQuestionData.hint}
              </p>
            )}
          </div>

          {/* Map */}
          <div className="relative bg-gradient-to-b from-paper-cream to-aged-paper p-4 rounded-sm border border-vintage-border">
            <svg viewBox="0 0 400 650" className="w-full max-w-md mx-auto">
              {/* Vietnam outline (simplified) */}
              <path
                d="M160,50 
                   Q200,30 230,60 
                   L240,100 Q250,120 240,150
                   L220,180 Q200,200 180,230
                   L170,260 Q160,280 175,300
                   L190,320 Q210,350 200,400
                   L195,450 Q180,480 200,520
                   L210,550 Q220,580 200,600
                   L180,610 Q160,590 170,560
                   L175,520 Q160,480 155,450
                   L150,400 Q140,350 150,300
                   L160,250 Q150,200 160,150
                   L165,100 Q160,70 160,50 Z"
                className="fill-aged-paper stroke-ink-brown stroke-2"
              />
              
              {/* Parallel 17 line */}
              <line
                x1="140"
                y1="285"
                x2="220"
                y2="285"
                className="stroke-red-accent stroke-2"
                strokeDasharray="5,5"
              />
              <text x="225" y="290" className="fill-red-accent text-xs font-heading">
                Vĩ tuyến 17
              </text>

              {/* Regions as clickable circles */}
              {regions.map((region) => (
                <g key={region.id}>
                  <motion.circle
                    cx={region.x}
                    cy={region.y}
                    r="18"
                    className={`${getRegionStyle(region.id)} stroke-2 cursor-pointer transition-all`}
                    whileHover={!showAnswer ? { scale: 1.2 } : {}}
                    whileTap={!showAnswer ? { scale: 0.9 } : {}}
                    onClick={() => !showAnswer && selectRegion(region.id)}
                  />
                  <text
                    x={region.x}
                    y={region.y + 35}
                    textAnchor="middle"
                    className="fill-sepia-dark text-xs font-body pointer-events-none"
                  >
                    {region.name}
                  </text>
                </g>
              ))}

              {/* North/South labels */}
              <text x="180" y="150" textAnchor="middle" className="fill-red-accent text-sm font-heading">
                MIỀN BẮC
              </text>
              <text x="190" y="450" textAnchor="middle" className="fill-gold-accent text-sm font-heading">
                MIỀN NAM
              </text>
            </svg>
          </div>

          {/* Answer Feedback */}
          {showAnswer && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`
                mt-6 p-4 rounded-sm border-l-4
                ${isCorrect 
                  ? 'bg-green-50 border-green-500' 
                  : 'bg-red-50 border-red-500'
                }
              `}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{isCorrect ? '✅' : '❌'}</span>
                <div>
                  <h4 className={`font-heading text-lg ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                    {isCorrect ? 'Chính xác!' : 'Sai rồi!'}
                  </h4>
                  <p className="font-body text-sm text-sepia-dark mt-1">
                    {currentQuestionData?.explanation}
                  </p>
                </div>
              </div>
              <button
                onClick={nextQuestion}
                className="mt-4 vintage-btn"
              >
                Tiếp tục →
              </button>
            </motion.div>
          )}

          {/* Progress */}
          <div className="mt-6 pt-4 border-t border-gold-accent/30">
            <div className="flex justify-between items-center mb-2">
              <span className="font-body text-sm text-sepia-dark">
                Tiến độ
              </span>
              <button
                onClick={resetGame}
                className="text-sm text-red-accent hover:underline"
              >
                Chơi lại
              </button>
            </div>
            <div className="h-2 bg-aged-paper border border-vintage-border rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gold-accent"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </>
      ) : (
        /* Victory Screen */
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8"
        >
          <div className="text-6xl mb-4">🗺️</div>
          <h4 className="font-heading text-2xl text-gold-accent mb-2">
            Hoàn Thành!
          </h4>
          <p className="font-body text-sepia-dark mb-4">
            Bạn đã xác định được các vị trí lịch sử!
          </p>
          <div className="font-heading text-3xl text-red-accent font-bold mb-6">
            {score}% chính xác
          </div>
          <button onClick={resetGame} className="vintage-btn">
            Chơi Lại
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default MapGame;


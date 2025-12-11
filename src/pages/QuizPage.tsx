import { motion, AnimatePresence } from 'framer-motion';
import { useQuiz } from '../hooks/useQuiz';

// ========================================
// QUIZ PAGE - Knowledge Test
// Phiên bản mới: Làm xong hết mới hiển thị đáp án
// ========================================

const QuizPage = () => {
  const {
    questions,
    currentQuestion,
    selectedAnswer,
    answers,
    isReviewing,
    score,
    percentage,
    grade,
    progress,
    currentQuestionData,
    isLastQuestion,
    answeredCount,
    selectAnswer,
    nextQuestion,
    previousQuestion,
    submitQuiz,
    resetQuiz,
    jumpToQuestion
  } = useQuiz(20);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const cardVariants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  // Kiểm tra câu trả lời có đúng không (chỉ dùng khi reviewing)
  const isAnswerCorrect = (questionIndex: number) => {
    const answer = answers[questionIndex];
    if (answer === null || answer === undefined) return false;
    return answer === questions[questionIndex].correctAnswer;
  };

  // Đếm số câu chưa trả lời
  const unansweredCount = questions.length - answeredCount;

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
          Kiểm Tra Kiến Thức
        </motion.h1>
        <motion.p 
          variants={itemVariants}
          className="font-decorative text-xl text-sepia-dark italic"
        >
          20 câu hỏi trắc nghiệm về giai đoạn 1954 - 1960
        </motion.p>
      </header>

      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="font-heading text-sm text-sepia-dark">
              Câu {currentQuestion + 1} / {questions.length}
            </span>
            <span className="font-heading text-sm text-gold-accent">
              {answeredCount}/{questions.length} câu đã trả lời
            </span>
          </div>
          <div className="h-3 bg-aged-paper border border-vintage-border rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-red-accent to-gold-accent"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Question Navigation Pills */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap gap-2 mb-8 justify-center"
        >
          {questions.map((_, index) => {
            const isAnswered = answers[index] !== undefined && answers[index] !== null;
            const isCurrent = currentQuestion === index;
            
            // Khi reviewing, hiển thị đúng/sai
            let pillClass = '';
            if (isReviewing) {
              if (isAnswerCorrect(index)) {
                pillClass = 'bg-green-600 text-white border-green-600';
              } else if (isAnswered) {
                pillClass = 'bg-red-600 text-white border-red-600';
              } else {
                pillClass = 'bg-gray-400 text-white border-gray-400';
              }
            } else {
              if (isCurrent) {
                pillClass = 'bg-red-accent text-paper-cream border-red-accent';
              } else if (isAnswered) {
                pillClass = 'bg-gold-accent/30 text-ink-brown border-gold-accent';
              } else {
                pillClass = 'bg-aged-paper text-sepia-dark border-vintage-border hover:border-gold-accent';
              }
            }

            return (
              <button
                key={index}
                onClick={() => jumpToQuestion(index)}
                className={`
                  w-8 h-8 rounded-sm font-heading text-sm transition-all border-2
                  ${pillClass}
                `}
              >
                {index + 1}
              </button>
            );
          })}
        </motion.div>

        {/* Hiển thị kết quả tổng quan khi đang review */}
        {isReviewing && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-6 bg-gradient-to-r from-aged-paper via-paper-cream to-aged-paper border-2 border-gold-accent rounded-sm"
          >
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="text-center">
                <div className={`text-5xl font-heading font-bold ${grade.color}`}>
                  {grade.grade}
                </div>
                <div className="text-sm text-sepia-dark mt-1">{grade.message}</div>
              </div>
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="text-3xl font-heading text-green-600 font-bold">{score}</div>
                  <div className="text-xs text-sepia-dark">Đúng</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading text-red-600 font-bold">{questions.length - score}</div>
                  <div className="text-xs text-sepia-dark">Sai</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading text-ink-brown font-bold">{percentage}%</div>
                  <div className="text-xs text-sepia-dark">Điểm</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Quiz Card */}
        <AnimatePresence mode="wait">
          {currentQuestionData && (
            <motion.div
              key={currentQuestion}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="vintage-card"
            >
              {/* Question Text - Đơn giản, không có category/level/id */}
              <h2 className="font-heading text-xl md:text-2xl text-ink-brown mb-8 leading-relaxed">
                {currentQuestionData.question}
              </h2>

              {/* Options */}
              <div className="space-y-4">
                {currentQuestionData.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect = index === currentQuestionData.correctAnswer;
                  const showCorrectness = isReviewing;

                  return (
                    <motion.button
                      key={index}
                      whileHover={!isReviewing ? { scale: 1.01 } : {}}
                      whileTap={!isReviewing ? { scale: 0.99 } : {}}
                      onClick={() => selectAnswer(index)}
                      disabled={isReviewing}
                      className={`
                        w-full p-4 text-left rounded-sm border-2 transition-all
                        ${showCorrectness
                          ? isCorrect
                            ? 'bg-green-100 border-green-600'
                            : isSelected
                              ? 'bg-red-100 border-red-600'
                              : 'border-vintage-border bg-aged-paper/50'
                          : isSelected
                            ? 'bg-gold-accent/20 border-gold-accent'
                            : 'border-vintage-border bg-aged-paper hover:border-gold-accent hover:bg-gold-accent/5'
                        }
                      `}
                    >
                      <div className="flex items-start gap-4">
                        <span className={`
                          w-8 h-8 flex items-center justify-center rounded-full border-2 font-heading text-sm flex-shrink-0
                          ${showCorrectness
                            ? isCorrect
                              ? 'bg-green-600 border-green-600 text-white'
                              : isSelected
                                ? 'bg-red-600 border-red-600 text-white'
                                : 'border-vintage-border text-sepia-dark'
                            : isSelected
                              ? 'bg-gold-accent border-gold-accent text-ink-brown'
                              : 'border-vintage-border text-sepia-dark'
                          }
                        `}>
                          {showCorrectness && isCorrect ? '✓' : 
                           showCorrectness && isSelected && !isCorrect ? '✗' :
                           String.fromCharCode(65 + index)}
                        </span>
                        <span className="font-body text-base text-sepia-dark pt-1">
                          {option}
                        </span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Explanation - Chỉ hiển thị khi reviewing */}
              <AnimatePresence>
                {isReviewing && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-8 p-6 bg-paper-cream border-l-4 border-gold-accent rounded-sm"
                  >
                    <h4 className="font-heading text-lg text-gold-accent mb-2">
                      Giải thích
                    </h4>
                    <p className="font-body text-sepia-dark leading-relaxed">
                      {currentQuestionData.explanation}
                    </p>
                    {/* Hiển thị đáp án đúng */}
                    <div className="mt-4 pt-4 border-t border-gold-accent/30">
                      <span className="font-heading text-sm text-green-600">
                        Đáp án đúng: {String.fromCharCode(65 + currentQuestionData.correctAnswer)}. {currentQuestionData.options[currentQuestionData.correctAnswer]}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Actions */}
              <div className="mt-8 flex justify-between items-center">
                <button
                  onClick={previousQuestion}
                  disabled={currentQuestion === 0}
                  className="vintage-btn-outline disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Trước
                </button>

                <div className="flex gap-4">
                  {/* Nút Tiếp theo hoặc Nộp bài */}
                  {!isReviewing ? (
                    isLastQuestion ? (
                      <button
                        onClick={submitQuiz}
                        className="vintage-btn bg-green-700 hover:bg-green-800 border-green-700"
                      >
                        Nộp bài ({unansweredCount > 0 ? `còn ${unansweredCount} câu chưa trả lời` : 'Hoàn thành'})
                      </button>
                    ) : (
                      <button
                        onClick={nextQuestion}
                        className="vintage-btn"
                      >
                        Tiếp theo
                      </button>
                    )
                  ) : (
                    <>
                      {!isLastQuestion && (
                        <button
                          onClick={nextQuestion}
                          className="vintage-btn"
                        >
                          Câu tiếp theo
                        </button>
                      )}
                      {isLastQuestion && (
                        <button
                          onClick={resetQuiz}
                          className="vintage-btn"
                        >
                          Làm lại
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Nút Nộp bài cố định ở dưới khi chưa nộp */}
        {!isReviewing && (
          <motion.div 
            variants={itemVariants}
            className="mt-8 text-center"
          >
            <button
              onClick={submitQuiz}
              className={`
                px-8 py-3 font-heading text-lg rounded-sm border-2 transition-all
                ${answeredCount === questions.length
                  ? 'bg-green-700 text-white border-green-700 hover:bg-green-800'
                  : 'bg-aged-paper text-sepia-dark border-vintage-border hover:border-gold-accent'
                }
              `}
            >
              {answeredCount === questions.length 
                ? 'Nộp bài - Xem kết quả' 
                : `Nộp bài (${answeredCount}/${questions.length} câu đã trả lời)`
              }
            </button>
            {unansweredCount > 0 && (
              <p className="mt-2 text-sm text-sepia-dark/70">
                Bạn có thể nộp bài bất cứ lúc nào. Câu chưa trả lời sẽ tính là sai.
              </p>
            )}
          </motion.div>
        )}

        {/* Final Results Card khi review xong */}
        {isReviewing && isLastQuestion && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 vintage-card decorative-border text-center"
          >
            <h3 className="font-heading text-2xl text-ink-brown mb-6">Kết Thúc Bài Kiểm Tra</h3>
            <p className="font-body text-sepia-dark mb-6">
              Bạn đã xem hết các câu hỏi và giải thích. Chọn một trong các tùy chọn bên dưới:
            </p>
            <div className="flex justify-center gap-4">
              <button onClick={resetQuiz} className="vintage-btn">
                Làm Lại Quiz
              </button>
              <a href="/games" className="vintage-btn-outline">
                Chơi Trò Chơi
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default QuizPage;

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getMetaphorContent } from '../services/historyService';

// ========================================
// HOME PAGE - Landing Page
// ========================================

const HomePage = () => {
  const metaphor = getMetaphorContent();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background decoration - Ảnh biểu tượng lịch sử */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Cờ Việt Nam - Góc trên trái (giữ background đỏ) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 0.2, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute -top-8 -left-8 md:top-4 md:left-4"
          >
            <img 
              src="/assets/image/co_vn.jpg"
              alt="Cờ Việt Nam"
              className="w-36 h-24 md:w-52 md:h-36 object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Bản đồ Việt Nam (đã xóa nền) - Góc phải */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 0.25, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-1/2 -translate-y-1/2 right-0 md:right-4 lg:right-12"
          >
            <img 
              src="/assets/image/vector-ban-do-viet-nam-6-removebg-preview.jpg"
              alt="Bản đồ Việt Nam"
              className="w-36 h-48 md:w-52 md:h-72 lg:w-64 lg:h-80 object-contain"
            />
          </motion.div>

          {/* Búa liềm (đã xóa nền) - Góc trên phải */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.25, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute top-4 right-4 md:top-8 md:right-8"
          >
            <img 
              src="/assets/image/bua_liem.jpg"
              alt="Búa liềm"
              className="w-32 h-32 md:w-44 md:h-44 object-contain"
            />
          </motion.div>

          {/* Logo Đảng / Quốc huy - Góc dưới trái */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.12, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="absolute bottom-4 left-4 md:bottom-8 md:left-8 hidden lg:block"
          >
            <img 
              src="/assets/image/logo_dang.jpg"
              alt="Quốc huy Việt Nam"
              className="w-28 h-28 md:w-36 md:h-36 object-contain"
            />
          </motion.div>

        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Decorative top */}
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <svg viewBox="0 0 100 100" className="w-16 h-16 text-red-accent">
              <polygon 
                points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40" 
                fill="currentColor"
              />
            </svg>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            variants={itemVariants}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-ink-brown mb-4"
          >
            Lịch Sử Đảng Cộng Sản
            <span className="block text-red-accent">Việt Nam</span>
          </motion.h1>

          {/* Period Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-block px-6 py-2 bg-aged-paper border-2 border-gold-accent rounded-sm mb-6"
          >
            <span className="font-decorative text-xl text-sepia-dark">
              Giai đoạn 1954 - 1960
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.h2 
            variants={itemVariants}
            className="font-heading text-xl md:text-2xl text-sepia-dark mb-8 max-w-3xl mx-auto"
          >
            Sự lãnh đạo của Đảng đối với cách mạng hai miền Nam - Bắc
          </motion.h2>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="font-body text-lg text-sepia-dark/80 max-w-2xl mx-auto leading-relaxed"
          >
            Sau Hiệp định Giơnevơ (7/1954), đất nước Việt Nam bị chia cắt thành hai miền 
            với hai chế độ chính trị và xã hội khác nhau. Miền Bắc xây dựng chủ nghĩa xã hội, 
            miền Nam đấu tranh chống đế quốc Mỹ xâm lược.
          </motion.p>

          {/* Section Divider */}
          <motion.div variants={itemVariants} className="section-divider mt-12">
            <span className="section-divider-icon">❧</span>
          </motion.div>
        </div>
      </section>

  

      {/* Metaphor Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            variants={itemVariants}
            className="vintage-card decorative-border"
          >
            <h2 className="font-heading text-2xl text-center text-ink-brown mb-6">
              {metaphor.title}
            </h2>
            <p className="font-decorative text-lg text-center text-sepia-dark italic mb-8">
              "{metaphor.description}"
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* North */}
              <div className="p-6 bg-paper-cream rounded-sm border-l-4 border-red-accent">
                <h3 className="font-heading text-lg text-red-accent mb-2">
                  Miền Bắc - {metaphor.north.role}
                </h3>
                <p className="font-body text-sm text-sepia-dark mb-4">
                  {metaphor.north.explanation}
                </p>
                <ul className="space-y-2">
                  {metaphor.north.tasks.map((task, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <span className="text-gold-accent mr-2">▸</span>
                      <span className="text-sepia-dark">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* South */}
              <div className="p-6 bg-paper-cream rounded-sm border-l-4 border-gold-accent">
                <h3 className="font-heading text-lg text-gold-accent mb-2">
                  Miền Nam - {metaphor.south.role}
                </h3>
                <p className="font-body text-sm text-sepia-dark mb-4">
                  {metaphor.south.explanation}
                </p>
                <ul className="space-y-2">
                  {metaphor.south.tasks.map((task, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <span className="text-red-accent mr-2">▸</span>
                      <span className="text-sepia-dark">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 px-4 bg-aged-paper">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2 
            variants={itemVariants}
            className="font-heading text-2xl text-ink-brown mb-4"
          >
            Bắt Đầu Học Ngay
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="font-body text-sepia-dark mb-8"
          >
            Khám phá lịch sử qua nội dung chi tiết, quiz kiểm tra và các trò chơi thú vị.
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/timeline" className="vintage-btn text-center">
              Xem Dòng Thời Gian
            </Link>
            <Link to="/quiz" className="vintage-btn-outline text-center">
              Làm Quiz Ngay
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;


import { Link } from 'react-router-dom';

// ========================================
// FOOTER COMPONENT - Vintage Style
// ========================================

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink-brown text-paper-cream mt-auto">
      {/* Decorative top border */}
      <div className="h-2 bg-gradient-to-r from-gold-accent via-red-accent to-gold-accent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-heading text-xl text-gold-accent mb-4">
              Về Trang Web
            </h3>
            <p className="font-body text-sm text-paper-cream/80 leading-relaxed">
              Sản phẩm sáng tạo môn học Lịch sử Đảng Cộng sản Việt Nam. 
              Trình bày nội dung giai đoạn 1954-1960: Sự lãnh đạo của Đảng 
              đối với cách mạng hai miền Nam - Bắc.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl text-gold-accent mb-4">
              Liên Kết Nhanh
            </h3>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <Link to="/timeline" className="text-paper-cream/80 hover:text-gold-accent transition-colors">
                  → Dòng thời gian lịch sử
                </Link>
              </li>
              <li>
                <Link to="/mien-bac" className="text-paper-cream/80 hover:text-gold-accent transition-colors">
                  → Cách mạng miền Bắc
                </Link>
              </li>
              <li>
                <Link to="/mien-nam" className="text-paper-cream/80 hover:text-gold-accent transition-colors">
                  → Cách mạng miền Nam
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="text-paper-cream/80 hover:text-gold-accent transition-colors">
                  → Kiểm tra kiến thức
                </Link>
              </li>
              <li>
                <Link to="/games" className="text-paper-cream/80 hover:text-gold-accent transition-colors">
                  → Trò chơi học tập
                </Link>
              </li>
            </ul>
          </div>

          {/* Period Info */}
          <div>
            <h3 className="font-heading text-xl text-gold-accent mb-4">
              Giai Đoạn Lịch Sử
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-accent rounded-full" />
                <span className="font-decorative text-sm text-paper-cream/80">
                  1954 - Hiệp định Giơnevơ
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gold-accent rounded-full" />
                <span className="font-decorative text-sm text-paper-cream/80">
                  1959 - Nghị quyết 15
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-accent rounded-full" />
                <span className="font-decorative text-sm text-paper-cream/80">
                  1960 - Phong trào Đồng Khởi
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-paper-cream/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">

          {/* Copyright */}
          <p className="font-body text-sm text-paper-cream/60">
            © {currentYear} - Sản phẩm học tập VNR202
          </p>
        </div>

        {/* Decorative Star */}
        <div className="flex justify-center mt-8">
          <svg viewBox="0 0 100 100" className="w-8 h-8 text-gold-accent/50">
            <polygon 
              points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40" 
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


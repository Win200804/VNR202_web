import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// ========================================
// HEADER COMPONENT - Vintage Style
// ========================================

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation items
  const navItems = [
    { path: '/', label: 'Trang Chủ' },
    { path: '/timeline', label: 'Dòng Thời Gian' },
    { path: '/mien-bac', label: 'Miền Bắc' },
    { path: '/mien-nam', label: 'Miền Nam' },
    { path: '/quiz', label: 'Kiểm Tra' },
    { path: '/games', label: 'Trò Chơi' },
  ];

  // Check if link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-aged-paper/95 backdrop-blur-sm border-b-4 border-double border-gold-accent shadow-vintage">
      {/* Decorative top border */}
      <div className="h-2 bg-gradient-to-r from-red-accent via-gold-accent to-red-accent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Title */}
          <Link to="/" className="flex items-center space-x-3 group">
            {/* Decorative star */}
            <div className="w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-10 h-10 text-red-accent group-hover:scale-110 transition-transform">
                <polygon 
                  points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40" 
                  fill="currentColor"
                />
              </svg>
            </div>
            
            <div className="hidden sm:block">
              <h1 className="font-heading text-xl font-bold text-ink-brown leading-tight">
                Lịch Sử Đảng CSVN
              </h1>
              <p className="font-decorative text-sm text-sepia-dark italic">
                Giai đoạn 1954 - 1960
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  px-4 py-2 font-heading text-sm transition-all duration-300 relative
                  ${isActive(item.path) 
                    ? 'text-red-accent' 
                    : 'text-ink-brown hover:text-red-accent'
                  }
                `}
              >
                {item.label}
                {/* Active indicator */}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-accent"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Year Badge */}
          <div className="hidden md:flex items-center">
            <div className="px-4 py-1 bg-red-accent/10 border border-red-accent rounded-sm">
              <span className="font-heading text-sm text-red-accent font-bold">
                1954 - 1960
              </span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-ink-brown hover:text-red-accent transition-colors"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gold-accent bg-paper-cream"
          >
            <nav className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    block px-4 py-3 font-heading text-base rounded-sm transition-all
                    ${isActive(item.path)
                      ? 'bg-red-accent/10 text-red-accent border-l-4 border-red-accent'
                      : 'text-ink-brown hover:bg-gold-accent/10 hover:text-red-accent'
                    }
                  `}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative bottom ornament */}
      <div className="flex justify-center -mb-3">
        <div className="px-4 py-1 bg-paper-cream">
          <span className="text-gold-accent text-lg">❧</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

